import { AcademicAPICollection } from "./Academic";
import { MedicAPICollection } from "./Medic";

export class StatsAPICollection {
    medicCollection: MedicAPICollection;
    academicCollection: AcademicAPICollection;

    constructor() {
        this.medicCollection = new MedicAPICollection();
        this.academicCollection = new AcademicAPICollection();
    }

}
