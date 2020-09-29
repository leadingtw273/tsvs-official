import Api from "@/utils/http";

export default class MenuApi extends Api {
  constructor() {
    super();
    this.url = "/menu";
  }
}
