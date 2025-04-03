import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Paginator } from 'primeng/paginator';
import { Table } from 'primeng/table';
import { AppComponentBase } from '../../Shared/app-base.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from '../../Shared/login.service';
import { UrlService } from '../../Shared/url.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.css'
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
  scheduledStatus:any;
  ListOfCandidates: string[] = [];
  selectedExams!: any[];
  exams!: any[];
  StatusType!: string[];
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

  constructor(private messageService: MessageService, private router: Router, private loginService: LoginService, private _http: HttpClient, private urlService: UrlService) {
    super();

    this.StatusType = [];
    this.StatusType.push("Completed", "Not-Completed");
  }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
