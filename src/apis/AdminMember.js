import Api from "@/utils/http";

export default class AdminMemberApi extends Api {
  constructor(params) {
    super();
    this.url = "/user";
    this.token = params.token || undefined;
  }

  async getUserList(params) {
    return await super.get(this.url, { params, headers: { Authorization: `Bearer ${this.token}` } });
  }

  async updateUser(data) {
    return await super.put(
      `${this.url}/${data.id}`,
      { update: data },
      { headers: { Authorization: `Bearer ${this.token}` } }
    );
  }

  async deleteUser(id) {
    return await super.delete(`${this.url}/${id}`, { headers: { Authorization: `Bearer ${this.token}` } });
  }

  async getRegisterUserList(params) {
    return await super.get(`${this.url}/register`, { params, headers: { Authorization: `Bearer ${this.token}` } });
  }

  async approvalUser(id) {
    return await super.post(
      `${this.url}/register/${id}/approval`,
      { approved: true },
      { headers: { Authorization: `Bearer ${this.token}` } }
    );
  }
}
