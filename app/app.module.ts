import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { NotesComponent } from './notes.component';
import { HttpModule }    from '@angular/http';
import {SectionsComponent} from "./sections.component";
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import {SectionFilterPipe} from "./SectionFilterPipe.pipe";

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, DragulaModule],
    declarations: [ AppComponent,NotesComponent, SectionsComponent, SectionFilterPipe],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}