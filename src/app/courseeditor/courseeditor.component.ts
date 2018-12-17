import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
    selector: 'app-courseeditor',
    templateUrl: './courseeditor.component.html',
    styleUrls: ['./courseeditor.component.css']
})
export class CourseeditorComponent implements OnInit {

    constructor(db: AngularFirestore) {
        this.courseForm = new FormGroup({
            name: new FormControl(''),
            price: new FormControl(''),
        });
        this.courseCollection = db.collection('courses');
        this.courses = this.courseCollection.valueChanges();
    }
    private courseCollection: AngularFirestoreCollection<Course>;
    courseForm: FormGroup;
    courses: Observable<Course[]>;
    ngOnInit() {
    }
    addCourse() {
        console.log(this.courseForm.value);
        this.courseCollection.add(this.courseForm.value);
    }
}
export interface Course { name: string; }
