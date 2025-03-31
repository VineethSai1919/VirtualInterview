import { Title } from "@angular/platform-browser";
import { PrimengTableHelper } from "./primeng-table-helper.service";


export abstract class AppComponentBase {

  titleService!: Title
  primengTableHelper: PrimengTableHelper;
  constructor() {
    this.primengTableHelper = new PrimengTableHelper();
  }

  public setTitle(newTitle: string) {

    this.titleService.setTitle(newTitle);

  }
}
