import axios from 'axios';
import { Pin } from '../Types/pin.type';

const api = "https://marauderserver.azurewebsites.net/api/pin";

const headers = {
    'Accept': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/x-www-form-urlencoded' 
}

export async function getSinglePin(pinId: string): Promise<Pin> {
    const pin = parseInt(pinId);
    const response = await axios({
        method: 'get',
        url:`${api}/${pin}`,
        headers: headers,
        withCredentials: true
    });
    const result = await response.data;
    return result;
}

export async function getUserPins(): Promise<Pin[]> {
    const response = await axios({
      method: 'get',
      url: api,
      headers: headers,
      withCredentials: true
    });
    const result = await response.data;
    return result;
}