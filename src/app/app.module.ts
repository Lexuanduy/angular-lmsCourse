import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseeditorComponent } from './courseeditor/courseeditor.component';
import { ParteditorComponent } from './parteditor/parteditor.component';
import { LecturereditorComponent } from './lecturereditor/lecturereditor.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'course/new', component: CourseeditorComponent },
  { path: 'lecturer/new', component: LecturereditorComponent }
];
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase, 'freecodeschoollms'), // imports firebase/app needed for everything
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features
        AngularFireStorageModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [AppComponent, CourseeditorComponent, ParteditorComponent, LecturereditorComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
