import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoteComponent} from "./component/note/note.component";
import {NoteCreateComponent} from "./component/note-create/note-create.component";
import {NoteUpdateComponent} from "./component/note-update/note-update.component";

const routes: Routes = [
  {
    path:'',
    component:NoteComponent
  },
  {
    path:'create',
    component:NoteCreateComponent,
  },
  {
    path:'update/:id',
    component:NoteUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
