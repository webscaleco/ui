import { Component, provide } from "@angular/core";
import { MD_TABS_DIRECTIVES } from "@angular2-material/tabs";

@Component({
    moduleId: module.id,
    selector: "race",
    templateUrl: "race.component.html",
    styleUrls:["race.component.css"],
    directives: [MD_TABS_DIRECTIVES]
})
export class RaceComponent {
    constructor() {
    }
}

