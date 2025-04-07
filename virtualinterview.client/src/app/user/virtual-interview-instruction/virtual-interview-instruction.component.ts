import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-virtual-interview-instruction',
  templateUrl: './virtual-interview-instruction.component.html',
  styleUrl: './virtual-interview-instruction.component.css'
})
export class VirtualInterviewInstructionComponent {
  @ViewChild('waveform', { static: true }) waveformRef!: ElementRef;
  localStream: any = null;
  audioUrl = "https://projectaideccansoft.blob.core.windows.net/assets/Intro.mp4";
  currentSubtitle = '';
  isPlaying = false;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  subtitleSrc: string = '';
  candidateToken!: string;
  @ViewChild('videoElement') videoElement!: ElementRef;
  enableStart = false;
  showVideo = false;
  @Output() dataEvent = new EventEmitter<string>();

  constructor(private router: ActivatedRoute, private http: HttpClient, private route: Router, private renderer: Renderer2, private cd: ChangeDetectorRef) { }

  /**
   * Initializes the component, sets up media access, and hides the global loader.
   */
  ngOnInit() {
    this.router.queryParams.subscribe((params) => {
      if (params['token']) {
        let statictoken = params['token'];
        this.candidateToken = statictoken;
      }
    });
    this.checkAndSetupMedia();
    this.hideGlobalShowLocal();
  }

  /**
   * Displays the secondary video element if media access is enabled.
   */
  ngAfterViewInit() {
    const data = document.getElementById('video-secondary');
    if (data && this.enableStart) {
      data.style.display = 'block';  // This will show the element after the view initialization
    }
  }

  /**
   * Checks for media device support and requests access to media devices.
   */
  checkAndSetupMedia() {
    if (!navigator.mediaDevices.getUserMedia) {
      alert('navigator.mediaDevices.getUserMedia not supported on your browser, use the latest version of Firefox or Chrome');
    } else if (window.MediaRecorder === undefined) {
      alert('MediaRecorder not supported on your browser, use the latest version of Firefox or Chrome');
    } else {
      this.requestMediaAccess();
    }
  }

  /**
   * Requests access to media devices and sets up the media stream.
   */
  requestMediaAccess() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      .then((stream) => {
        this.play();
        this.enableStart = true;
        this.ngAfterViewInit();
        this.cd.markForCheck();
        this.setupMediaStream(stream);
      }).catch((err) => {
        if (err.name === 'NotAllowedError') {
          this.showPermissionInstructions();
        } else {
          console.error('Error accessing media devices.', err);
        }
      });
  }

  /**
   * Displays instructions for enabling media device access if permission is denied.
   */
  showPermissionInstructions() {
    Swal.fire({
      icon: 'error',
      html: '<p>Access to media devices was denied. Please follow these steps to enable access:</p> <ul style="text-align: left;"><li>Click on the lock icon in the address bar.</li>  <li> Select "Site settings".</li><li> Find "Camera" and "Microphone", then set them to "Allow".</li>   <li> Reload the page and try again.</li></ul>',
      showConfirmButton: false,
      allowOutsideClick: false
    });
  }

  /**
   * Sets up the media stream and assigns it to the video element.
   * @param stream The media stream to be set up.
   */
  setupMediaStream(stream: MediaStream) {
    this.localStream = stream;

    this.localStream.getTracks().forEach((track: MediaStreamTrack) => {
      if (track.kind === "audio") {
        console.log("audio accessed");
        track.enabled = false;
        track.onended = (event: Event) => { };
      } else {
        console.log("audio not accessed");
      }
      if (track.kind === "video") {
        console.log("video accessed");
        track.onended = (event: Event) => { };
      } else {
        console.log("video not accessed");
      }
    });

    this.videoElement.nativeElement.srcObject = this.localStream;
  }

  /**
   * Toggles the play and pause state of the video player.
   */
  play() {
    if (this.isPlaying) {
      this.videoPlayer.nativeElement.pause();
      this.isPlaying = false;
    } else {
      this.videoPlayer.nativeElement.play();
      this.isPlaying = true;
    }
  }

  isLoading = true;

  /**
   * Hides the loading spinner when video data is loaded.
   */
  onLoadedData() {
    this.isLoading = false; // Hide spinner when data is loaded
  }

  /**
   * Shows the loading spinner when the video is waiting for data.
   */
  onWaiting() {
    if (!this.isPlaying) { // Check if the video is not playing
      this.isLoading = true; // Show loader only when video is waiting for data
    }
  }

  /**
   * Replays the video from the beginning.
   */
  replay() {
    this.videoPlayer.nativeElement.currentTime = 0;
    this.videoPlayer.nativeElement.play();
    this.isPlaying = true;
  }

  /**
   * Skips the video backward by 5 seconds.
   */
  skipBackward() {
    this.videoPlayer.nativeElement.currentTime -= 5;
  }

  /**
   * Skips the video forward by 5 seconds.
   */
  skipForward() {
    this.videoPlayer.nativeElement.currentTime += 5;
  }

  /**
   * Toggles the mute state of the video player.
   */
  mute() {
    this.videoPlayer.nativeElement.muted = !this.videoPlayer.nativeElement.muted;
  }

  /**
   * Sets the playing state to true when the video starts playing.
   */
  onPlay() {
    this.isPlaying = true;
  }

  /**
   * Sets the playing state to false when the video is paused.
   */
  onPause() {
    this.isPlaying = false;
  }

  /**
   * Navigates to the virtual interview page with the candidate token.
   */
  startExam() {
    this.route.navigate(['/users/virtualInterview'], { queryParams: { token: this.candidateToken } });
  }

  /**
   * Hides the global loader and shows the local content.
   */
  hideGlobalShowLocal() {
    // Hide global loader
    const globalLoader = document.getElementById('boxs');
    if (globalLoader) {
      this.renderer.setStyle(globalLoader, 'display', 'none');
    }
  }
}
