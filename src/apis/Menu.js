import Api from "@/utils/http";

export default class MenuApi extends Api {
  constructor(params = {}) {
    super();
    this.url = "/menu";
    this.token = params.token || undefined;
  }

  async getMenu() {
    if (this.token) {
      return await super.get(`${this.url}`, {
        params: { size: 99999 },
        headers: { Authorization: `Bearer ${this.token}` }
      });
    }
    return await super.get(`${this.url}`, { params: { size: 99999 } });
  }

  async createMenu(params) {
    return await super.post(this.url, params, { headers: { Authorization: `Bearer ${this.token}` } });
  }

  async updateMenu(id, params) {
    return await super.put(
      this.url + `/${id}`,
      { update: params },
      { headers: { Authorization: `Bearer ${this.token}` } }
    );
  }

  async deleteMenu(id) {
    return await super.delete(this.url + `/${id}`, { headers: { Authorization: `Bearer ${this.token}` } });
  }
}
