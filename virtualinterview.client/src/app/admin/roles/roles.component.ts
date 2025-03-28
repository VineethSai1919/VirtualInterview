import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Paginator } from 'primeng/paginator';
import { Table } from 'primeng/table';
import Swal from 'sweetalert2';
import { AppComponentBase } from '../../Shared/app-base.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
  providers: [MessageService]
})
export class RolesComponent extends AppComponentBase {
  @ViewChild('dt', { static: true }) dataTable!: Table;
  @ViewChild('paginator', { static: true }) paginator!: Paginator;
  roles: any;
  Listroles: any[] = [];
  selectedItems: any[] = [];
  checked: boolean = false;
  roleName!: string
  editRoleName!: string
  editRoleID!: string
  visible: boolean = false;
  selectedrole: any;
  roleID: any;
  editVisible: boolean = false;
  addQuestion: boolean = false;
  searchRole!: string

  constructor(private messageService: MessageService) {
    super();
  }

  /**
   * Fetches the list of roles from the server.
   * @param event Optional event parameter for pagination.
   */
  getroles(event?:any) {
    //Impelement the logic to fetch the roles from the server
  }

  /**
   * Filters the roles based on the search input.
   */
  filterData() {
    if (this.searchRole.trim()) {
      if (this.searchRole.trim().length > 1) {
        this.getroles()
      }
    }
    else if (this.searchRole.length == 0) {
      this.getroles()
    }
    else {
      return
    }
  }

  /**
   * Selects or deselects a role based on the provided item.
   * @param item The role item to select or deselect.
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
   * Displays the dialog for adding a new role.
   */
  showDialog() {
    this.roleName = "";
    this.visible = true;
  }

  /**
   * Adds a new role to the server.
   */
  add() {
    //Implement the logic to add a new role to the server
  }

  /**
   * Displays the dialog for editing an existing role.
   * @param data The role data to edit.
   */
  editRole(data: any) {
    this.editRoleID = data.pkRoleId
    this.editRoleName = data.roleName.trim();
    this.editVisible = true;
  }

  /**
   * Updates an existing role on the server.
   */
  edit() {
   //Implement the logic to update the role on the server
  }

  /**
   * Deletes a role from the server.
   * @param data The role data to delete.
   */
  delete (data:any) {
    //Implement the logic to delete the role from the server
  }
}
