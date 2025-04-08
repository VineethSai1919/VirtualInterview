import { Time } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subscription, timer } from 'rxjs';
import { LoginService } from '../../Shared/login.service';
import { AzurestorageService } from '../../Shared/azurestorage-service';

@Component({
  selector: 'app-virtual-interview',
  templateUrl: './virtual-interview.component.html',
  styleUrl: './virtual-interview.component.css'
})
export class VirtualInterviewComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  ScheduleName: any;
  show: boolean = false;
  displaytext: any;
  isExamStarted: boolean = false;
  editingName = false;
  editingPhone = false;
  flag: boolean = false;
  containerType = "video/webm";
  candidateID: any;
  candidateName: any
  soundMeter: any = null;
  localStream: any = null;
  chunks: any[] = [];
  name: any;
  phoneNumber: any;
  email: any;
  objData: any;
  qIndex!: any;
  QuestionID: any = 0;
  currentIndex: number = 0;
  AnswerID: number = 0;
  SessionId: any;
  ExamId: any[] = [];
  RecordedVideoURL: any;
  results: boolean = false;
  timer!: boolean;
  DescriptiveAnswer: string = "";
  answers: { [questionId: string]: string } = {};
  isVideoEnabled: any;
  isAnswered: number = 0;
  beforeCompleting: boolean = false;
  timeTaken: any;
  VideotimePassed = 0;
  scheduleID: any;
  updateCandidateDTO: any 
  FeedBack: any
  IsExamCompleted: boolean = false;
  completed: boolean = false;
  examId: any;
  text: any;
  endExam: boolean = false;
  callCount = 0;
  currentSubtitle = '';
  isPlaying = false;
  audioUrl!: any;
  audio: any[] = []
  vttFile!: any
  result: any[] = [];
  report: boolean = false;
  data: any[] = []
  startRecording: boolean = false;
  recordingCount = 0;
  @ViewChild('videoElement') videoElement!: ElementRef;
  liveVideoElement: any = document.querySelector('#gum');
  constraints = { audio: true, video: { width: { min: 640, ideal: 640, max: 640 }, height: { min: 480, ideal: 480, max: 480 }, framerate: 60 } };
  mediaRecorder: MediaRecorder | null;
  Isstop!: boolean;
  @ViewChild('questionPlayer') videoPlayer!: ElementRef;
  @ViewChild('waveeform', { static: false }) waveformRef?: ElementRef;
  timeLeft: number = 10; // Starting countdown time
  displayTime: string = '10';
  timerClass: string = '';
  strokeDashArray: number = 628.32; // Full circle circumference
  strokeDashOffset: number = 628.32;
  startExamAfterTimer = false;
  isQuestions = false;
  resultData: any;
  @ViewChild('questionPlayer', { static: false }) questionPlayerRef!: ElementRef<HTMLVideoElement>;
  questionVideoElement!: any;
  isSubmited: boolean = false;
  isLoading = true;
  constructor( private router: ActivatedRoute, private loginService: LoginService, private route: Router, private renderer: Renderer2, private azureService: AzurestorageService, private cd: ChangeDetectorRef) {
    this.mediaRecorder = null
  }

  /**
 * Checks if the current question is the last question in the exam.
 */
  isLastQuestion(): boolean {
    return this.currentIndex === this.qIndex - 1;
  }

  /**
 * Advances the exam to the next question.
 *
 * - Hides any global displays.
 * - Resets audio and video URLs.
 * - Checks the current index checkbox.
 * - Submits the current exam state.
 */
  next() {
    this.hideGlobalShowLocal();
    this.audioUrl = "";
    this.vttFile = "";
    this.checkCurrentIndexCheckbox();
    this.submitExam();
  }

  /**
 * Marks the current question's checkbox as checked.
 */
  checkCurrentIndexCheckbox(): void {
    this.data[this.currentIndex].isChecked = true;
  }

  /**
 * Determines whether a checkbox at a given index should be disabled.
 */
  isCheckboxDisabled(index: number): boolean {
    return false;
  }

  /**
 * Returns CSS classes for a given row, highlighting the current row.
 */
  getRowClasses(index: number): any {
    return { 'highlighted-row': index === this.currentIndex };
  }

  /**
 * Initializes the component.
 *
 * - Starts the timer.
 * - Resets the result array.
 * - Retrieves necessary data from the login service.
 */
  ngOnInit(): void {
   

  }

  /**
 * Initializes and manages a countdown timer.
 *
 * - Updates the visual timer display every second.
 * - Changes the timer's appearance based on remaining time (e.g., warning or danger states).
 * - Automatically starts the exam when the timer reaches zero.
 */
  startTimer() {  }

  /**
 * Updates the countdown timer display and visual appearance.
 *
 * - Converts remaining time into a string format for display.
 * - Adjusts stroke-dash offset for circular progress visualization.
 * - Applies CSS classes (e.g., danger, warning) based on remaining time thresholds.
 */
  updateTimer() { }

  /**
   * Initiates the exam process.
   *
   * - Retrieves scheduled exam questions.
   * - Checks candidate details.
   * - Sets up media for video recording if enabled.
   */
  startExam() {}

  /**
   * Checks and sets up media devices for video recording.
   *
   * - Alerts the user if the browser does not support necessary APIs.
   * - Requests access to audio and video devices.
   * - Sets up the media stream for recording.
   */
  checkAndSetupMedia() { }

  /**
   * Sets up the media stream for video recording.
   *
   * - Assigns the media stream to the local variable.
   * - Sets up event handlers for audio and video tracks.
   */
  setupMediaStream(stream: MediaStream) {}

  /**
   * Inserts result data into the system.
   *
   * - Initializes a new result data object.
   * - Calls the result service to add records.
   * - Sets up the media for video recording if enabled.
   * - Loads the first question for the exam.
   */
  insertResultData(question: any) {  }


  /**
   * Toggles the editing state for a given field (name or phone).
   */
  toggleEdit(field: string): void { }

  /**
   * Handles the keyup event for editing fields.
   *
   * - Saves changes when 'Enter' is pressed.
   * - Toggles the editing state.
   */
  handleKeyup(event: KeyboardEvent, field: string): void {}

  /**
   * Handles the 'Enter' key event for editing fields.
   *
   * - Updates the candidate details and submits the changes.
   */
  onEdit() { }

  /**
   * Loads a specific question based on the given index.
   *
   * - Updates the current question ID and answer ID.
   * - Sets the audio URL and VTT file for the question.
   * - Resets the video element to the beginning.
   */
  loadQuestion(index: number) {  }


  /**
 * Checks if the next button should be disabled.
 */
  isNextDisabled(){}

  /**
 * Checks if the question data is null or undefined.
 */
  isDisabled() {}

  /**
 * Submits the current exam state and advances to the next question.
 */
  submitExam(): void { }


  /**
 * Finalizes the exam submission.
 */
  submit() { }

  /**
 * Checks if all results have been updated.
 */
  checkResultUpdated() { }

  /**
 * Completes the exam by stopping video recording and all media stream tracks.
 */
  async Completed() {}



  stop(checkTime: any[]) {
    clearInterval(checkTime[0]);
  }

  /**
 * Starts recording the video.
 */
  async StartRecord() {}

  /**
 * Posts the recorded video blob to the server.
 */
  postBlob(blob: Blob) { }

  /**
 * Replays the video.
 */
  replay() { }

  /**
 * Uploads the recorded video blob to Azure storage using a SAS token.
*/
  upload(blob: Blob) { }


  /**
 * Updates the status of skipped questions.
 */
  uploadSkippedQuestions() { }

  /**
 * Adds descriptive answer data to the database.
 */
  addDiscriptiveData(blob: Blob) { }

  /**
 * Lifecycle hook called when the component is destroyed.
 */
  ngOnDestroy(): void { }


  handleUnload = (event: BeforeUnloadEvent) => {
    /* 
     const confirmationMessage = 'Are you sure you want to leave? Your exam will be terminated.';
     event.returnValue = confirmationMessage; 
     return confirmationMessage; 
 
    */
    this.logout();
  }


  logout() {
    this.subscription.unsubscribe();
    this.loginService.logout();
    this.route.navigate(['/']);
  }

  /**
 * Stops the video recording and releases the media stream.
 */
  StopRecord() { }



  /**
 * Hides a global loader element.
 */
  hideGlobalShowLocal() { }

  /**
 * Sets isLoading to false when video data is loaded.
 */
  onLoadedData() {  }

  /**
 * Shows the loader only when the video is waiting for data.
 */
  onWaiting() {}

  /**
 * Handles the video play event.
 */
  onPlay() {}

  /**
 * Handles the video pause event.
 */
  onPause() { }

  /**
   * Sets the report flag to true.
   */
  examReport() { }

  /**
 * Plays the video.
 */
  play() { }
}

class ResultQuestionData {
  resultId!: string;
  questionID!: string;
  answerID!: string;
  url: string | null = null;
  status = 0;
  sessionId: string | null = null;
}
interface FileParameter {
  data: any;
  fileName: string;
}
