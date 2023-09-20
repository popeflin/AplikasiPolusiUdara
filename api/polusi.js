import axios from 'axios';
import { API_KEY } from '@env';


export class PolusiAPI {

   static async getDataPolusi(coordinate){
  
      return (
        await axios.get("http://api.openweathermap.org/data/2.5/air_pollution?lat="+coordinate.latitude +
        "&lon="+coordinate.longitude+"&appid="+API_KEY)

      ).data;


   }


   static async getNamaKota(coordinate){

   }





}