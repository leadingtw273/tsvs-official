import Api from "@/utils/http";

export default class FileApi extends Api {
  constructor() {
    super();
    this.url = "/upload";
  }

  async uploadImage(data) {
    const bodyFormData = new FormData();
    bodyFormData.append("upload", data);

    return await super.post(`${this.url}/image`, bodyFormData, { headers: { "Content-Type": "multipart/form-data" } });
  }

  async uploadFile(data) {
    const bodyFormData = new FormData();
    bodyFormData.append("upload", data);

    return await super.post(`${this.url}/file`, bodyFormData, { headers: { "Content-Type": "multipart/form-data" } });
  }
}
