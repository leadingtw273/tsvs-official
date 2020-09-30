import Api from "@/utils/http";

export default class MenuApi extends Api {
  constructor() {
    super();
    this.url = "/menu";
  }

  async getRootMenuList() {
    return await super.get(this.url, { params: { type: 999 } });
  }

  async getMenuById(id) {
    return await super.get(`${this.url}/${id}`);
  }

  async getMenuByName(name) {
    return await super.get(this.url, { params: { name } });
  }
}
