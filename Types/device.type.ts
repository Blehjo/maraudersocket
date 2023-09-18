import { Pin } from "./pin.type";

export type Device = {
    deviceId: string | null;
    deviceName: string | null;
    deviceType: Date;
    pins: Pin[];
}