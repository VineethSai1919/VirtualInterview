import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * FeedbackComponent is responsible for displaying interview feedback.
 * It includes a video player for AI feedback and an accordion for detailed feedback.
 */
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  @ViewChild('questionPlayer') videoPlayer!: ElementRef;
  scheduleId: string | undefined;
  reviewDTO: any;
  FeedbackURL: any;
  isLoading = true;
  isPlaying = false;

  /**
   * Constructor for FeedbackComponent.
   * @param reviewService - Service to fetch review data.
   * @param route - ActivatedRoute to get route parameters.
   */
  constructor(private route: ActivatedRoute) { }

  /**
   * ngOnInit lifecycle hook to initialize the component.
   * Subscribes to route parameters and fetches review candidates.
   */
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params) {
        this.scheduleId = params['scheduleid'];
        this.getReviewCandidates();
      }
    });
  }

  /**
   * Fetches review candidates based on the scheduleId.
   * Sets the reviewDTO and FeedbackURL properties with the fetched data.
   */
  getReviewCandidates() {
    //write code for the getReviewCandidates API here
  }

  /**
   * Event handler for when video data is loaded.
   * Hides the loading spinner.
   */
  onLoadedData() {
    this.isLoading = false;
  }

  /**
   * Event handler for when the video is waiting for data.
   * Shows the loading spinner if the video is not playing.
   */
  onWaiting() {
    if (!this.isPlaying) {
      this.isLoading = true;
    }
  }

  /**
   * Event handler for when the video starts playing.
   * Updates the isPlaying and isLoading properties.
   */
  onPlay() {
    this.isPlaying = true;
    this.isLoading = false;
  }

  /**
   * Event handler for when the video is paused.
   * Updates the isPlaying property.
   */
  onPause() {
    this.isPlaying = false;
  }

  /**
   * Toggles the play/pause state of the video player.
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
}
