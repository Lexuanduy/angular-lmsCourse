import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-lecturereditor',
    templateUrl: './lecturereditor.component.html',
    styleUrls: ['./lecturereditor.component.css']
})
export class LecturereditorComponent implements OnInit {
    _db: AngularFirestore;
    lecturers: Observable<any[]>;
    constructor(db: AngularFirestore) {
        this.lecturers = db.collection('lecturers').valueChanges();
        this._db = db;
    }
    ngOnInit() {
    }
    addLecturer(sUserId: string, sName: string, sEducation: string, sExperience: string, sPosition: string, sLecturerTime: number) {
        const partsCollection = this._db.collection<Lecturer>('lecturers').doc(sUserId);
        partsCollection.set({
            name: sName, education: sEducation, experience: sExperience, position: sPosition,
            lectureTime: sLecturerTime, active: 0
        });
    }
}
export interface Lecturer {
    name: string;
    education: string;
    experience: string;
    position: string;
    lectureTime: number;
    active: number;
}
