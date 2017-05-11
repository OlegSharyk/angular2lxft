import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";

@Component({
    selector: 'notes',
    templateUrl: 'app/notes.component.html'
    // ,
    // template: `
    //     <textarea [(ngModel)]="text"></textarea><br/>
    //     <button (click)="add()">Add</button><br/>
    //
    //     <p>Notes list:</p>
    //     <ul>
    //         <li *ngFor="let note of notes; let i=index" >
    //             {{note.text}} <button (click)="remove(note._id)">remove</button>
    //         </li>
    //     </ul>
    // `
})

export class NotesComponent implements OnChanges {
    constructor(private http: Http) {
        // this.getNotes().then(notes=>{
        //     this.notes=notes;
        //     console.log(notes);
        // });

        // this.readNotes();
    }

    private notesUrl = 'notes';

    notes: Note[] = [];

    text: string;
    // section:string = "Work";

    @Input() section: string;

    add() {
        let note = { text: this.text, section: this.section };
        this.notes.push(note);
        this.text = "";
        this.addNote( note );
    };

    // remove(idx) {
    //     this.notes.splice(idx,1);
    // };

    getNotes(): Observable<Note[]> {
        // console.log(this);
        let params: URLSearchParams = new URLSearchParams();
        params.set('section', this.section);
        return this.http.get(this.notesUrl, {search:params})
            .map(response => response.json() as Note[]);

        // return this.http.get(this.notesUrl)
        //     .toPromise()
        //     .then(response => response.json() as Note[]);
    }

    addNote(note:Note) {
        this.http.post(this.notesUrl, note).toPromise()
            .then(response => {
                // console.log("note sent, response", response);
                this.readNotes();
            } );
    }

    readNotes() {
        this.getNotes().subscribe(notes=>{
            this.notes=notes;
            // console.log(notes);
        });
    }

    remove(id:string) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id);
        // console.log(params);
        console.log(id);
        this.http.delete(this.notesUrl, { search: params })
            .toPromise()
            .then(response => {
                console.log(
                    `note with id ${id} removed, response`, response);
                this.readNotes();
            });
    }

    // ngOnInit(){
    //     this.readNotes();
    // }

    ngOnChanges(){
        this.readNotes();
    }

}

export interface Note {
    text: string;
}