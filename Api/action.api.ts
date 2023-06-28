import axios from 'axios';
import { Action } from '../Types/action.type'

const api = "https://planetnineserver.azurewebsites.net/api/action";

const headers = {
    'Accept': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/x-www-form-urlencoded' 
}

export async function getSingleAction(actionId: string): Promise<Action> {
    const action = parseInt(actionId);
    const response = await axios({
        method: 'get',
        url:`${api}/${action}`,
        headers: headers,
        withCredentials: true
    });
    const result = await response.data;
    return result;
}

export async function getUserActions(): Promise<Action[]> {
    const response = await axios({
      method: 'get',
      url: api,
      headers: headers,
      withCredentials: true
    });
    const result = await response.data;
    return result;
}