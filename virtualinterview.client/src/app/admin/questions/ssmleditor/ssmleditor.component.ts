import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { SsmlService } from '../../../Shared/SsmlServices/ssml.service';
import { Ssml } from '../../../Shared/SsmlServices/api-ssml-synthesize-speech-post-json';
import { check } from 'ssml-check-core';
import { CandidateDataService } from '../../../Shared/SsmlServices/candidate-data';

@Component({
  selector: 'app-ssmleditor',
  templateUrl: './ssmleditor.component.html',
  styleUrl: './ssmleditor.component.css'
})
export class SsmleditorComponent {
  
  @ViewChild('editor', { static: true }) editor!: ElementRef; // Added '!'
  @ViewChild('output', { static: true }) output!: ElementRef; // Added '!
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('output') outputElement!: ElementRef;
  @Input() childData: { question: string; ssmlQuestion: string } = { question: "", ssmlQuestion: "" };

  @Input() question: any;
  @Output() dataChanged = new EventEmitter<any>();
  selectedVoice = 'en-IN-NeerjaNeural'
  language: any
  voicesListByLanguage: any
  selectLanguage = 'English (India)';
  voiceListData: any
  ssmlVoice: string | undefined;
  blob!: Blob;
  ssml: Ssml = {};
  isValidateSSML = false;
  plainText!: string

  /**
   * Constructor to inject necessary services.
   * @param voiceService Service to handle voice operations.
   * @param ssmlService Service to handle SSML operations.
   * @param cd ChangeDetectorRef to handle change detection.
   */
  constructor(private voiceService: CandidateDataService, private ssmlService: SsmlService, private cd: ChangeDetectorRef) { }

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * Initializes the editor and loads the voices list.
   */
  ngOnInit() {
    document.execCommand("defaultParagraphSeparator", false, "p");
    this.voicesList();
    this.editQuestion()
  }

  /**
   * Lifecycle hook that is called when any data-bound property of a directive changes.
   * @param changes Object of SimpleChanges that holds current and previous values of data-bound properties.
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['childData'] && changes['childData'].currentValue) {
      this.editQuestion();
    }
  }

  /**
   * Resets the editor content and SSML output.
   */
  resetEditor() {
    this.editor.nativeElement.innerHTML = null;  // Clear the content of the editor
    this.output.nativeElement.innerHTML = null;  // Clear SSML output
    this.cd.markForCheck();
    this.convertToSsml();             // Reset plain text
  }

  /**
   * Edits the question content in the editor and SSML output.
   */
  editQuestion() {
    this.editor.nativeElement.innerHTML = this.childData?.question ?? "";
    this.output.nativeElement.innerHTML = this.childData?.ssmlQuestion;
    this.convertToSsml();
  }

  /**
   * Marks the selected text with a specified class name.
   * @param className The class name to apply to the selected text.
   */
  markword(className: string) {
    document.execCommand("insertHTML", false, `<span class='${className}'>${document.getSelection()}</span>`);
  }

  /**
   * Inserts a delay element into the editor content.
   */
  insertDelay() {
    document.execCommand("insertHTML", false, "<i class='fa fa-clock-o' contenteditable='false'></i>");
  }

  /**
   * Marks the selected text with emphasis.
   */
  emphasis() {
    this.markword("emphasis");
  }

  /**
   * Marks the selected text with a pitch-up class.
   */
  pitchUp() {
    this.markword("pitch-up");
  }

  /**
   * Marks the selected text with a pitch-down class.
   */
  pitchDown() {
    this.markword("pitch-down");
  }

  /**
   * Undoes the last editor command.
   */
  undo() {
    document.execCommand("undo");
  }

  /**
   * Converts the editor content to SSML format.
   */
  convertToSsml() {
    const html = this.editor.nativeElement.innerHTML;
    //plain question
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;
    this.plainText = tempElement.textContent || tempElement.innerText || ''
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Replace nbsp
    doc.body.innerHTML = doc.body.innerHTML.replace(/&nbsp;/g, ' ').replace(/<br\s*\/?>/g, ' ');
    //doc.body.innerHTML = doc.body.innerHTML.replace(/&nbsp;/g, ' ');

    // Remove empty paragraphs
    doc.querySelectorAll('p').forEach(p => {
      if (p?.textContent?.trim() === '') {
        p.remove();
      }
    });

    // Replace elements with SSML-compliant tags
    doc.querySelectorAll('.emphasis').forEach(el => {
      const emphasis = doc.createElement('emphasis');
      emphasis.setAttribute('level', 'strong'); // Change level as needed
      emphasis.innerHTML = el.innerHTML;
      el.replaceWith(emphasis);
    });

    doc.querySelectorAll('.fa-clock-o').forEach(el => {
      const breakEl = doc.createElement('break');
      breakEl.setAttribute('time', '300ms'); // Adjust time as needed
      el.replaceWith(breakEl);
      el.replaceWith("<br>", "");
    });

    doc.querySelectorAll('.pitch-up').forEach(el => {
      const prosody = doc.createElement('prosody');
      prosody.setAttribute('pitch', '+3st'); // Adjust pitch as needed
      prosody.innerHTML = el.innerHTML;
      el.replaceWith(prosody);
    });

    doc.querySelectorAll('.pitch-down').forEach(el => {
      const prosody = doc.createElement('prosody');
      prosody.setAttribute('pitch', '-3st'); // Adjust pitch as needed
      prosody.innerHTML = el.innerHTML;
      el.replaceWith(prosody);
    });

    // Wrap the content in <speak> and <voice> tags
    this.output.nativeElement.textContent = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US' ><voice name="${this.selectedVoice}">${doc.body.innerHTML}</voice></speak>`;

    this.sendQuestion()
  }

  /**
   * Handles the paste event to insert plain text into the editor.
   * @param event The clipboard event.
   */
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const text = event?.clipboardData?.getData("text/plain");
    document.execCommand("insertHTML", false, text);
  }

  /**
   * Loads the list of available voices.
   */
  voicesList() {
    this.voiceService.loadVoices().then(data => {
      if (data) {
        this.voiceListData = data;
        this.language = new Set(this.voiceListData.map((x: { language: any; }) => x.language))
        this.onSelectLanguage()
      }
    })
  }

  /**
   * Filters the voices list based on the selected language.
   */
  onSelectLanguage() {
    this.voicesListByLanguage = this.voiceListData.filter((x: { language: string; }) => x.language == this.selectLanguage)
  }

  /**
   * Synthesizes speech from the SSML content.
   */
  voiceSSML() {
    this.ssmlService.apiSsmlSynthesizeSpeechPost$Json({ body: this.ssml }).subscribe(data => {
      let audiourl = URL.createObjectURL(data);
      let audio = new Audio(audiourl);
      audio.play().then(() => {
        /* console.log('Audio is playing');*/
      })
    },
    );
  }

  /**
   * Checks if the provided data is valid SSML.
   * @param data The data to validate.
   * @returns A boolean indicating if the data is valid.
   */
  isDataValid(data?: any[]): boolean {
    // Logic to determine if the data is valid
    return data?.some((x: { type: string }) => x.type === `Can't parse SSML`) ?? false;
  }

  /**
   * Sends the question content for validation and emits the result.
   */
  sendQuestion() {
    check(this.output.nativeElement.textContent)
      .then((errors) => {
        if (errors) {
          this.isValidateSSML = this.isDataValid(errors)
        } else {
          // console.log('SSML is clean');
        }
        this.ssml.text = this.outputElement.nativeElement.textContent;
        let ssmlText = this.outputElement.nativeElement.textContent;
        this.dataChanged.emit({ SSmlText: ssmlText, plainText: this.plainText, isValisateSSML: this.isValidateSSML });
      });

  }
}


