import Api from "@/utils/http";

export default class MemberApi extends Api {
  constructor() {
    super();
    this.url = "/user";
  }

  async getById(id) {
    return await super.get(`${this.url}/${id}`);
  }

  async getList(params) {
    return await super.get(this.url, params);
  }

  async editDetail(data, params) {
    return await super.patch(this.url, data, params);
  }

  async changePassword(data, params) {
    return await super.patch(this.url, data, params);
  }

  async signIn({ username, password }) {
    return await super.post(`${this.url}/login`, { username, password });
  }

  async signOut() {}

  async signUp() {}

  async getSelf(token) {
    return await super.get(`${this.url}/me`, { headers: { Authorization: `Bearer ${token}` } });
  }
}
