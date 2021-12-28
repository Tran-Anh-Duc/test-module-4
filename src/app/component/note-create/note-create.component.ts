import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NoteService} from "../note.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  notes: any[] = [];

  formAddNote?: FormGroup

  constructor(private fb: FormBuilder,
              private noteService: NoteService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formAddNote = this.fb.group({
      tag: [''],
      url: [''],
      descriptions: ['']
    })
  }

  submit() {
    let note = this.formAddNote?.value;
    // console.log(note)
    this.noteService.saveNote(note).subscribe(note => {
      this.notes.unshift(note)
      this.router.navigate([''])
    })
    this.formAddNote?.reset();
  }

}
