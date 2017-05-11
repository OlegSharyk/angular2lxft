import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    title="Notes App";
    section: string;
    //
    setSection(section:string) {
        this.section = section;
    }
}