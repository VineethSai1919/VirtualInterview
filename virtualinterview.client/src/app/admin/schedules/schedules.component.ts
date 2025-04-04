import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppComponent } from '../../app.component';
import { AppComponentBase } from '../../Shared/app-base.service';
import { Router } from '@angular/router';
import { LoginService } from '../../Shared/login.service';
import { formatDate } from '@angular/common';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import Swal from 'sweetalert2';
import { Paginator } from 'primeng/paginator';
import { Table } from 'primeng/table';
import { UrlService } from '../../Shared/url.service';
declare var $: any;

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.css',
  providers: [MessageService]
})
export class SchedulesComponent extends AppComponentBase implements OnInit {
  [x: string]: any;
  @ViewChild('myFormCandidate') candidateForm!: NgForm;
  @ViewChild('botPlayer') botPlayer!: ElementRef<HTMLVideoElement>;
  @ViewChild('dt', { static: true }) dataTable!: Table;
  @ViewChild('paginator', { static: true }) paginator!: Paginator;
  candidateID: any
  scheduleID: any
  searchbyTerm!: string;
  searchbyScheduleName!: string;
  Candidatetype: any = "All"
  Status: any = "Not-Completed";
  scheduledStatus!: any[];
  ListOfCandidates: string[] = [];
  selectedExams!: any[];
  exams!: any[];
  StatusType: string[] = ["Completed", "Not-Completed"];
  search: string = "";
  visibleSchedule: boolean = false;
  ScheduledFromDate: Date = new Date();
  ScheduledToDate: Date = new Date();
  ScheduledFrom: string = '';
  ScheduledTo: string = '';
  scheduleName: any
  IsVideoEnable: any
  skills!: any[];
  allSkills: any[] = []
  editSkills: any[] | undefined;
  selectedSkill: any[] = [];
  selectedAllSkill: any
  editSelectedSkill: any[] | undefined = [];
  Duration: any;
  candiatePassword: string | null | undefined;
  scheduleIDs: any
  emailSubject: any
  displayBotFeedback = false;
  selectedBotFeedbackUrl: any;
  displayVideoDialog: boolean = false;
  selectedVideoUrl: string = '';
  fromDate!: Date | undefined;
  toDate!: Date | undefined;
  visibleResult = false;
  scheduleIdForReviewInterview: any;
  feedbackUrl: any
  visibleCanidates!: boolean

  constructor(private messageService: MessageService,  private router: Router, private loginService: LoginService,  private _http: HttpClient, private urlService: UrlService) {
    super();
  }

  ngOnInit() { }
  /**
     *  Fetches all skills from the skill service and populates the skills array.
     */
  getAllSkills() {}

  /**
    * Filters scheduled candidates based on selected skills.
    */
  FilterSkill() { }

  /**
     * Opens a modal to display bot results for a specific schedule.
     */
  botResults(data?: any) {}

  /**
     * Displays bot feedback in a video player.
     */
  botFeedback(data?: any) {}

  /**
   *  Resets the bot video to the beginning.
   */
  resetVideo() { }

  /**
     * Handles changes to the candidate type filter and fetches scheduled candidates.
     */
  onTypeChange(event: any, skip?: number, maxresult?: any) { }

  /**
    * Handles changes to the date filter and fetches scheduled candidates.
    */
  onDateStatus(event: any, type: string) {}

  /**
     * Handles changes to the status filter and fetches scheduled candidates.
     
     */
  onTypeChangeStatus(event: any, skip?: number, maxresult?: any) { }

  /**
     * Filters data based on the search term.
     */
  filterData() {}

  /**
    * Retrieves scheduled candidates based on various filters and search criteria.
    */
  GetScheduledCandidates(event?: any, value?: any, skip?: number, maxresult?: any) {}


  /**
    * Converts a UTC time string to IST time string.
    */
  convertUtcToIstTime(timeUtc: string) { }

  /**
     * Displays a video in a dialog.
     */
  showVideo(videoUrl: string): void {  }

  /**
     *  Navigates to the results page for a specific candidate and schedule.
     */
  showResult(data: any) {}

  /**
     * Navigates to the feedback page for a specific candidate and schedule.
     */
  showFeedBack(data: any) {  }

  /**
     * Edits schedule data for a candidate.
     */
  EditScheduleData() {}

  /**
    * Formats a time string to a Date object.
    */
  formatTime(time: string) {  }

  /**
    * @Purpose: Opens the edit schedule modal and populates the form with schedule data.
    */
  EditSchedule(data: any) { }

  /**
     * Converts a UTC time string to IST Date format.
    
     */
  convertUtcToIstDateFormat(utcTime: string) {  }

  /**
    *  Converts a UTC time string to IST Date format
    */
  convertUtcToIstTimeFormat(utcTime: string){}

  /**
    *  Navigates to the results page for a specific schedule.
    */
  showResultForSchedule(data: any) {}

  /**
     * Opens the add candidates modal and resets the form.
     */
  addListOfCandidates() {  }

  /**
     * Adds candidates to a schedule by sending emails.
     */
  AddCandidates(index = 0): void { }

  /**
    * Handles file change event for importing candidate emails from a file.
    */
  onFileChange(event: any): void {}

  /**
    *  Creates and initiates the download of a sample export file.
    */
  createDownloadExport() {  }

  /**
    * Downloads a sample export file for email details.
    */
  public downloadsampleExport(){
   

  }


}

interface scheduleDetails {
  scheduleId: any
  eedbackUrl: any
}
