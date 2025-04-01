import { Component, ViewChild } from '@angular/core';
import { AppComponentBase } from '../../Shared/app-base.service';
import { Table } from 'primeng/table';
import { Paginator } from 'primeng/paginator';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [ MessageService]
})
export class SkillsComponent extends AppComponentBase {
  @ViewChild('dt', { static: true }) dataTable!: Table;
  @ViewChild('paginator', { static: true }) paginator!: Paginator;
  skills: any[] = [];
  skillName!: string;
  editskillName!: string;
  editskillID!: string;
  visible: boolean = false;
  editVisible: boolean = false;
  searchLanguage!: string;

  constructor(private messageService: MessageService) {
    super();
  }

  /**
    * Fetches the list of skills based on pagination and search criteria.
 */
  getskills(event?: any) {}


  /**
 * Filters the user data based on the search skills.
 */
  filterData() {}


  /**
   * Opens the dialog to add a new skill.
   */
  showDialog() {}


  /**
   * Adds a new skill to the database.
   */
  add() { }


  /**
 * Displays the dialog for editing a skill profile.
 */
  editSkills(data: any) { }


  /**
   * Updates the skill in the database.
   */
  edit() {}


  /**
   * Deletes the skill from the database.
   */
  delete(data: any) {}
}
