import axios from "axios";


class  HttpService {
    baseUrl = ''
    save (request) {
        axios.post(this.baseUrl, { request })
    }

}

const instance  = new HttpService();

export default instance;