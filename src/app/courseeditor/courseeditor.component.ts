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
            author: new FormControl(''),
            price: new FormControl(''),
            description: new FormControl(''),
            lecturerId: new FormControl(''),
            time: new FormControl(''),
            hotCourse: new FormControl(''),
        });
        this.courseCollection = db.collection('courses', ref => ref.where('name', '==', 'C#'));
        this.partCollection = db.collection('parts', ref => ref.where('courseName', '==', 'C#').where('name', '==', 'Phần 1'));
        this.courses = this.courseCollection.valueChanges();
        this.parts = this.partCollection.valueChanges();
        this.lessons = db.collection('parts', ref => ref.where('courseName', '==', 'C#'))
            .doc('C#Part1').collection('lessons').valueChanges();
    }
    private courseCollection: AngularFirestoreCollection<Course>;
    private partCollection: AngularFirestoreCollection<Part>;
    courseForm: FormGroup;
    courses: Observable<Course[]>;
    parts: Observable<Part[]>;
    lessons: Observable<any[]>;
    ngOnInit() {
    }
    addCourse() {
        console.log(this.courseForm.value);
        this.courseCollection.add(this.courseForm.value);
    }
}
export interface Course {
    name: string;
    author: string;
    price: string;
    description: string;
    lecturerId: string;
    time: string;
    hotCourse: string;
}
export interface Part {
    courseName: string;
    name: string;
    description;
}
