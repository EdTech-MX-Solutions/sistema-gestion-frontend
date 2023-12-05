import { APICaller } from "../apiCaller";

export class DirectivosAPICollection {
    apiCaller: APICaller;

    constructor() {
        this.apiCaller = new APICaller();
    }
}