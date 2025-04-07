import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-interview',
  templateUrl: './review-interview.component.html',
  styleUrl: './review-interview.component.css'
})

export class ReviewInterviewComponent implements OnChanges {
  isLoading = true;
  isPlaying = false;
  currentIndex: number = 0;
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef;
  displayModal = true;
  sessionId: string | undefined;
  scheduleId: string | undefined;
  reviewDTO: any
  @Input() Id: any;
  @Input() url: any;
  IsFeedbackUrl = false;

  /**
   * Constructor to initialize the component with necessary services.
   * @param reviewService - Service to fetch review data.
   * @param route - Activated route to get route parameters.
   * @param router - Router to navigate between routes.
   */
  constructor( private route: ActivatedRoute, private router: Router) { }

  /**
   * Lifecycle hook that is called when any data-bound property of a directive changes.
   * @param changes - Object of SimpleChanges that holds current and previous values of data-bound properties.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['Id'] && this.Id) {
      this.isLoading = true;
      this.isPlaying = false;
      this.reviewDTO = [];
      this.currentIndex = 0;
      this.displayModal = true;
      this.sessionId = undefined;
      this.scheduleId = undefined;
      this.IsFeedbackUrl = false;
      this.getReviewCandidates();  // Call the method when 'Id' changes
    }
  }

  /**
   * Fetches the review candidates based on the provided Id.
   */
  getReviewCandidates() {
    // write a code to get the review candidates
  }

  /**
   * Moves to the next record in the reviewDTO array and plays the video.
   */
  nextRecord() {
    if (this.currentIndex < this.reviewDTO.length - 1) {
      this.currentIndex++;
      this.playVideo();
    }
    //this.submitIndividualFeedback()
  }

  /**
   * Moves to the previous record in the reviewDTO array and plays the video.
   */
  previousRecord() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.playVideo();
    }
  }

  /**
   * Plays the video by reloading the video element.
   */
  playVideo() {
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      setTimeout(() => {
        const video = this.videoPlayer.nativeElement;
        video.load();  // Reload the video element
      }, 100);  // Slight delay to ensure the video element is fully updated
    }
  }

  /**
   * Submits the current state and displays the modal.
   */
  submit() {
    this.displayModal = true;
  }

  /**
   * Event handler for when the video data is loaded.
   */
  onLoadedData() {
    this.isLoading = false; // Hide spinner when data is loaded
  }

  /**
   * Event handler for when the video is waiting for data.
   */
  onWaiting() {
    if (!this.isPlaying) { // Check if the video is not playing
      this.isLoading = true; // Show loader only when video is waiting for data
    }
  }

  /**
   * Event handler for when the video starts playing.
   */
  onPlay() {
    this.isPlaying = true;
    this.isLoading = false;
  }

  /**
   * Event handler for when the video is paused.
   */
  onPause() {
    this.isPlaying = false;
  }

  /**
   * Toggles the play and pause state of the video.
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

  /**
   * Navigates back to the scheduled page and sets local storage items.
   */
  back() {
    localStorage.setItem('status', 'Completed');
    localStorage.setItem('level', 'Level 2');
    this.router.navigate(['/admin/scheduled']);
  }

  /**
   * Toggles the feedback URL state.
   */
  showFeedback() {
    this.IsFeedbackUrl = !this.IsFeedbackUrl;
  }

  isPopupActive = false;
  isOverviewMode = false;

  /**
   * Opens the quiz review modal and disables page scrolling.
   */
  openQuizReview() {
    this.isPopupActive = true;
    document.body.style.overflow = 'hidden';
  }

  /**
   * Closes the quiz review modal and enables page scrolling.
   */
  closeQuizReview() {
    this.isPopupActive = false;
    document.body.style.overflow = 'auto';
    this.isOverviewMode = false;
  }

  /**
   * Closes the quiz review modal when clicking on the overlay.
   * @param event - Mouse event triggered by clicking on the overlay.
   */
  closeOnOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeQuizReview();
    }
  }

  /**
   * Toggles the overview mode and feedback URL state.
   */
  toggleOverviewMode() {
    this.isOverviewMode = !this.isOverviewMode;
    this.IsFeedbackUrl = !this.IsFeedbackUrl;
  }
}

