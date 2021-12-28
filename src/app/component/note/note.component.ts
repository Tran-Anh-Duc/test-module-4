import { Component, OnInit } from '@angular/core';
import {NoteService} from "../note.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes: any[] = [];

  constructor(private noteService:NoteService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser(){
    this.noteService.getAll().subscribe(res =>{
      this.notes = res;
    })
  }

  deleteNote(i:any) {
    let note = this.notes[i]
    this.noteService.deleteNote(note.id).subscribe(()=>{
    this.notes=this.notes.filter(
      n => n.id !== note.id
    );
    })
  }

}
