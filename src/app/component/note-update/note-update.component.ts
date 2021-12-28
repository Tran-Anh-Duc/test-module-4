import { Component, OnInit } from '@angular/core';
import {NoteService} from "../note.service";
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-note-update',
  templateUrl: './note-update.component.html',
  styleUrls: ['./note-update.component.css']
})
export class NoteUpdateComponent implements OnInit {

  noteForm:FormGroup|any
  id :any;

  constructor(private noteService:NoteService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getNote(this.id);
    });
  }

  ngOnInit(): void {
  }


  getNote(id:any){
    return this.noteService.findById(id).subscribe(note =>{
      this.noteForm = new FormGroup({
        tag: new FormControl(note.tag),
        url: new FormControl(note.url),
        descriptions: new FormControl(note.descriptions)
      })
    })
  }


  updateNote(id:any){
    const note = this.noteForm.value;
    this.noteService.updateNote(id,note).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate([''])
    }, e => {
      console.log(e);
    });
  }



}
