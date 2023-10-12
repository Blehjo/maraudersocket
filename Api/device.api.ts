import axios from 'axios';
import { Device } from '../Types/device.type';

const api = "https://marauderserver.azurewebsites.net/api/devices";

const headers = {
    'Accept': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/x-www-form-urlencoded' 
}

export async function getSingleDevice(deviceId: string): Promise<Device> {
    const device = parseInt(deviceId);
    const response = await axios({
        method: 'get',
        url:`${api}/${device}`,
        headers: headers,
        withCredentials: true
    });
    const result = await response.data;
    return result;
}

export async function getUserDevices(): Promise<Device[]> {
    const response = await axios({
      method: 'get',
      url: api,
      headers: headers,
      withCredentials: true
    });
    const result = await response.data;
    return result;
}