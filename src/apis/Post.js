import Api from "@/utils/http";

export default class PostApi extends Api {
  constructor(params = {}) {
    super();
    this.url = "/post";
    this.token = params.token || undefined;
  }

  async getPost(params) {
    if (this.token) {
      return await super.get(`${this.url}`, {
        params: { size: 9999, ...params },
        headers: { Authorization: `Bearer ${this.token}` }
      });
    }
    return await super.get(`${this.url}`, { params: { size: 9999, ...params } });
  }

  async getPostDetail(id) {
    if (this.token) {
      return await super.get(`${this.url}/${id}`, {
        headers: { Authorization: `Bearer ${this.token}` }
      });
    }
    return await super.get(`${this.url}/${id}`);
  }

  async createPost(params) {
    return await super.post(this.url, params, { headers: { Authorization: `Bearer ${this.token}` } });
  }

  async updatePost(id, params) {
    return await super.put(
      this.url + `/${id}`,
      { update: params },
      { headers: { Authorization: `Bearer ${this.token}` } }
    );
  }

  async deletePost(id) {
    return await super.delete(this.url + `/${id}`, { headers: { Authorization: `Bearer ${this.token}` } });
  }
}
