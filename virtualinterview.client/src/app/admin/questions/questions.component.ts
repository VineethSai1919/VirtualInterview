import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Paginator } from 'primeng/paginator';
import { Table } from 'primeng/table';
import Swal from 'sweetalert2';
import { AppComponentBase } from '../../Shared/app-base.service';
import { SsmleditorComponent } from './ssmleditor/ssmleditor.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent extends AppComponentBase implements OnInit {
  @ViewChild('myForm1') myForm1!: NgForm;
  @ViewChild('questionForm') questionForm!: NgForm;
  @ViewChild(SsmleditorComponent) ssmlEditor!: SsmleditorComponent;
  Question: any
  Answer: any;
  addQuesAns: any;
  examID: any;
  checked: boolean = false;
  ListOfQuestions: any[] = [];
  visible: boolean = false;
  visibleEdit: boolean = false;
  selectedQuestion: any;
  editedQuestionID: any;
  editQuestion: any;
  editCorrectAnser: any;
  editQuestionType: any;
  answerId: any;
  quesAnsDTO: any;
  searchbyQuestion!: any;
  ssmlQuestion!: string;
  isValisateSSML = false;
  @ViewChild('dt', { static: true }) dataTable!: Table;
  @ViewChild('paginator', { static: true }) paginator!: Paginator;
  expectedAnswer: any;
  skills: any[] | undefined;
  editSkills: any[] | undefined;
  selectedSkill: any;
  editSelectedSkill: any;
  editssmlQuestion!: string;
  constructor(private messageService: MessageService, private router: Router) {
    super();
  }

  /**
   * Initializes the component by fetching all skills and resetting the SSML editor.
   */
  ngOnInit(): void {
    this.getAllSkills();
    this.ssmlEditor.resetEditor();
  }

  checkedPage: boolean = true;

  /**
   * Toggles the selection of all questions.
   */
  checkedAll() {
    if (this.checked == true) {
      this.checked = true
      this.selectedItems = this.ListOfQuestions.map(question => question.questionID);
    }
    else {
      this.checked = false;
      this.selectedItems = []
    }
  }

  rows = 5;

  /**
   * Changes the number of rows displayed in the table.
   * @param event The event containing the new number of rows.
   */
  changeRows(event: any) {
    this.rows = event.value;
  }

  selectedItems: any[] = [];

  /**
   * Toggles the selection of a single question.
   * @param item The question to be selected or deselected.
   */
  selectPage(item: any) {
    if (this.selectedItems.indexOf(item.questionID) == -1) {
      this.selectedItems.push(item.questionID);
    }
    else {
      this.selectedItems.splice(this.selectedItems.indexOf(item.questionID), 1);
    }
  }

  /**
   * Filters the list of questions based on the search criteria.
   */
  filterData() {
    if (this.searchbyQuestion.trim()) {
      if (this.searchbyQuestion.trim().length > 3) {
        this.getQuestions()
      }
    }
    else if (this.searchbyQuestion.length == 0) {
      this.getQuestions()
    }
    else {
      return
    }
  }
  search: string = "";

  /**
   * Fetches the list of questions based on the current search criteria and pagination settings.
   * @param event The event containing pagination information.
   */
  getQuestions(event?: any) {
   //write get all qestions code here
  }

  /**
   * Fetches all available skills and initializes the skill selection.
   */
  getAllSkills() {
    //write get all skills code here
  }

  /**
   * Prepares the form for adding a new question.
   */
  addQuestions() {
    this.Question = ""
    this.Answer = "";
    this.expectedAnswer = null
    this.ssmlEditor.resetEditor();
    this.addQuestion = true
  }

  /**
   * Displays the details of a selected question.
   * @param termdata The question data to be displayed.
   */
  ViewQuestionDetails(termdata: any) {
    this.ListOfQuestions.forEach(question => question.isOpen = false);
    termdata.isOpen = true;
    this.selectedQuestion = termdata;
  }

  /**
   * Closes the details view of a selected question.
   * @param termdata The question data to be closed.
   */
  CloseQuestionDetails(termdata: any) {
    termdata.isOpen = false;
    if (this.selectedQuestion === termdata) {
      this.selectedQuestion = null;
    }
  }

  /**
   * Prepares the form for editing a question.
   * @param data The question data to be edited.
   */
  edit(data: any) {
    this.editedQuestionID = data.questionID
    this.editQuestion = data.displayText;
    this.editssmlQuestion = data.ssmltext;
    this.expectedAnswer = data.expectedAnswer
    this.editSelectedSkill = this.editSkills?.find(x => x.pksKillID == data.fkSkillId)
    this.visibleEdit = true;
  }

  /**
   * Deletes the selected questions after confirmation.
   */
  delete() {
    //write delete code here
  }

  /**
   * updateQuestion the edited question data.
   */
  updateQuestion() {
    //write update question code here
  }

  addQuestion: boolean = false;

  /**
   * Submits the new question data.
   */
  createQuestion() {
    //write create question code here
  }

  /**
   * Validates the form data before submission.
   * @returns A boolean indicating whether the form data is valid.
   */
  validateForm(): boolean {
    if (!!this.expectedAnswer?.trim() == false) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please provide proper data' });
      return false;
    }
    return true;
  }

  /**
   * Handles changes in the SSML editor data.
   * @param data The data from the SSML editor.
   */
  handleDataChange(data: any) {
    this.ssmlQuestion = data.SSmlText;
    this.Question = data.plainText
    this.isValisateSSML = data.isValisateSSML;
  }

  /**
   * Navigates to the bulk questions page.
   */
  listOfQuestions() {
    this.router.navigate(['/admin/bulkQuestions']);
  }

  /**
   * Returns a Date object with the given time.
   * @param time The time string in the format "HH:mm:ss".
   * @returns A Date object with the given time.
   */
  getDateTimeWithGivenTime(time: string): Date {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, seconds, 0);
    return date;
  }

  
  /**
   * Filters the questions based on the selected skill.
   */
  FilterSkill() {
    this.getQuestions();
  }
}
