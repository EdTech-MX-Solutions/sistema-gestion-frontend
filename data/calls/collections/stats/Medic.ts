import { APICaller } from "../../apiCaller";

export class MedicAPICollection {
    apiCaller: APICaller;

    constructor() {
        this.apiCaller = new APICaller();
    }

    getMedicCall() {
        const baseURL: string = this.apiCaller.getStatsCall();
        return `${baseURL}/medicas`;
    }

}