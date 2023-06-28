import { Pin } from "./pin.type";

export type Device = {
    deviceId: number | null;
    deviceName: string | null;
    deviceType: Date;
    pins: Pin[];
}