import axios from 'axios'
var url = "http://localhost:8000/api/"

if(process.env.NODE_ENV === 'production') {
  url = "https://namtung.ddns.net/api/"
}


export default class Services{
    async asyncPostMethod(params) {
      const data = await axios.post(url+'villager/', params);
      return data
    }

    async asyncGetMethod() {
        const data = await axios.get(url+'getall');
        return data
      }

}