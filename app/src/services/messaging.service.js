import http from "./common.js";

class MessagingService {
  async create(body) {
    try {
      return await http.post(`/messages`, body);
    } catch (error) {
      console.log(error);
    }
  }
  async findAll() {
    try {
      return await http.get(`/messages`);
    } catch (error) {
      console.log(error);
    }
  }
  async findOne(id) {
    try {
      return await http.get(`/messages/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
}

const messagingService = new MessagingService();
export default messagingService;
