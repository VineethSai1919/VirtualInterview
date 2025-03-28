import { LazyLoadEvent } from "primeng/api";
import { Paginator } from "primeng/paginator";
import { Table } from "primeng/table";



export class PrimengTableHelper {
  predefinedRecordsCountPerPage = [10, 20, 50];
  defaultRecordsCountPerPage = 10;
  isResponsive = true;
  resizableColumns = false;
  totalRecordsCount = 0;
  records: any[] = [];
  conrecords: any[] = [];


  isLoading = false;


  showLoadingIndicator(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 0);
  }


  hideLoadingIndicator(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 0);
  }


  getSorting(table: Table): string {
    let sorting = '';
    if (table.sortField) {
      sorting = table.sortField;
      if (table.sortOrder === 1) {
        sorting += ' ASC';
      } else if (table.sortOrder === -1) {
        sorting += ' DESC';
      }
    }


    return sorting;
  }


  getSortName(table: Table): string {
    let sorting = '';
    if (table.sortField) {
      sorting = table.sortField;
    }
    return sorting;
  }


  getIsASC(table: Table): boolean {
    if (table.sortOrder) {
      return table.sortOrder === 1;
    }
    return true;
  }


  getMaxResultCount(paginator: Paginator, event: LazyLoadEvent | undefined): number | undefined {
    if (paginator.rows) {
      return paginator.rows;
    }


    if (!event) {
      return 10;
    }


    return event.rows;
  }


  getSkipCount(paginator: Paginator, event: LazyLoadEvent | undefined): number | undefined {
    if (paginator.first) {
      return paginator.first;
    }


    if (!event) {
      return 0;
    }


    return event.first;
  }


  shouldResetPaging(event: LazyLoadEvent | undefined): boolean {
    if (!event /*|| event.sortField*/) { // if you want to reset after sorting, comment out parameter
      return true;
    }


    return false;
  }
}
