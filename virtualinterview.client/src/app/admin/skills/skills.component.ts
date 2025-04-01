import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Paginator } from 'primeng/paginator';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  providers: [SkillsClient, MessageService]
})
export class SkillsComponent extends AppComponentBase {
  @ViewChild('dt', { static: true }) dataTable!: Table;
  @ViewChild('paginator', { static: true }) paginator!: Paginator;
  skills: any;
  Listskills: any[] = [];
  selectedItems: any[] = [];
  checked: boolean = false;
  skillName!: string
  editskillName!: string
  editskillID!: string
  visible: boolean = false;
  selectedskill: any;
  skillID: any;
  editVisible: boolean = false;
  addQuestion: boolean = false;
  searchLanguage!: string
  constructor(private messageService: MessageService, private skillService: SkillsClient) {
    super();
  }


  getskills(event?: any) {
    this.skillService.getSkills(this.primengTableHelper.getSkipCount(this.paginator, event), this.primengTableHelper.getMaxResultCount(this.paginator, event), this.searchLanguage).subscribe((res) => {
      if (res) {
        this.Listskills = [];
        this.primengTableHelper.records = res.entities ? res.entities : [];
        this.Listskills = res.entities ? res.entities : [];
        this.primengTableHelper.totalRecordsCount = (res.totalEntityCount) ? res.totalEntityCount : 0;
        this.primengTableHelper.hideLoadingIndicator();
      }

    })

  }

  filterData() {
    if (this.searchLanguage.trim()) {
      if (this.searchLanguage.trim().length > 1) {

        this.getskills()
      }
    }
    else if (this.searchLanguage.length == 0) {
      this.getskills()
    }
    else {
      return
    }
  }

  selectPage(item: any) {
    if (this.selectedItems.indexOf(item.questionID) == -1) {
      this.selectedItems.push(item.questionID);
    }
    else {
      this.selectedItems.splice(this.selectedItems.indexOf(item.questionID), 1);
    }
  }

  showDialog() {
    this.skillName = "";
    this.visible = true;
  }

  add() {
    if (this.skillName.trim() != "") {
      this.visible = false
      this.addQuestion = false

      this.skillService.addSkill(this.skillName.trim()).subscribe((res) => {
        if (res.isSuccess) {
          this.selectedskill = this.skillName;
          this.skillID = res.pkSkillId
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Skill Added Successfully' });
          this.getskills();
        }
        else {
          const errorMessage = res.errorMessage !== null && res.errorMessage !== undefined ? res.errorMessage : 'Unknown Error';
          this.messageService.add({ severity: 'error', summary: 'Error', detail: errorMessage });
        }
      })
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please provide Skill name' });
    }
  }

  editLanguage(data: any) {
    this.editskillID = data.pksKillID
    this.editskillName = data.name.trim();
    this.editVisible = true;
  }

  edit() {
    if (this.editskillName.trim() != "") {
      const data = new SkillListDTO({
        pksKillID: this.editskillID,
        name: this.editskillName.trim(),
      })
      this.editVisible = false;
      this.skillService.updateSkill(data).subscribe((res) => {
        if (res.isSuccess) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Skill Updated Successfully' });
          this.getskills();
        }
        else {
          const errorMessage = res.errorMessage !== null && res.errorMessage !== undefined ? res.errorMessage : 'Unknown Error';
          this.messageService.add({ severity: 'error', summary: 'Error', detail: errorMessage });
        }
      })
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please provide Language name' });
    }
  }

  delete(data: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete the skill!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.skillService.deleteSkill(data.pksKillID).subscribe((res) => {
          if (res.isSuccess) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Skill Deleted Successfully' });
            this.getskills();
          }
          else {
            const errorMessage = res.errorMessage !== null && res.errorMessage !== undefined ? res.errorMessage : 'Unknown Error';
            this.messageService.add({ severity: 'error', summary: 'Error', detail: errorMessage });
          }
        })
      }
    })
  }
}

