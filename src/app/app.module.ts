import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './component/note/note.component';
import {HttpClientModule} from "@angular/common/http";
import { NoteCreateComponent } from './component/note-create/note-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NoteUpdateComponent } from './component/note-update/note-update.component';
// import { NoteDeleteComponent } from './component/note-delete/note-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteCreateComponent,
    NoteUpdateComponent,
    // NoteDeleteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
