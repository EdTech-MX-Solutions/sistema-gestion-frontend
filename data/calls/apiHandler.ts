
import { AuthAPICollection } from "./collections/AuthAPICollection";
import { DirectivosAPICollection } from "./collections/DirectivosAPICollection";
import { ProfesoresAPICollection } from "./collections/ProfesoresAPICollection";
import { TutoresAPICollection } from "./collections/TutoresAPICollection";
import { SharedAPICollection } from "./collections/SharedAPICollection";
import { StatsAPICollection } from "./collections/stats/StatsAPICollection";



class SIGEAPICollection {
    sharedCollection: SharedAPICollection;
    tutoresCollection: TutoresAPICollection;
    profesoresCollection: ProfesoresAPICollection;
    directivosCollection: DirectivosAPICollection;
    authCollection: AuthAPICollection;
    statsCollection: StatsAPICollection;

    constructor() {
        this.sharedCollection = new SharedAPICollection();
        this.tutoresCollection = new TutoresAPICollection();
        this.profesoresCollection = new ProfesoresAPICollection();
        this.directivosCollection = new DirectivosAPICollection();
        this.authCollection = new AuthAPICollection();
        this.statsCollection = new StatsAPICollection();
    }
}

export default SIGEAPICollection;