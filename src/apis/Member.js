import Api from "@/utils/http";

export default class MemberApi {
  constructor() {
    this._api = new Api();
    this.url = "/user";
  }

  async getById(id) {
    return await this._api.get(`${this.url}/${id}`);
  }

  async getList(params) {
    return await this._api.get(this.url, params);
  }

  async editDetail(data, params) {
    return await this._api.patch(this.url, data, params);
  }

  async changePassword(data, params) {
    return await this._api.patch(this.url, data, params);
  }

  async signIn() {}

  async signOut() {}

  async signUp() {}
}
