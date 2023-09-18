import { Action } from "./action.type";

export type Pin = {
    pinId: number | null;
    pinLocation: string | null;
    isAnalog: boolean;
    deviceId: string | null;
    actions: Action[];
}