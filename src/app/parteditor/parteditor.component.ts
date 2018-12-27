import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
    selector: 'app-parteditor',
    templateUrl: './parteditor.component.html',
    styleUrls: ['./parteditor.component.css']
})
export class ParteditorComponent implements OnInit {
    _db: AngularFirestore;
    parts: Observable<any[]>;
    myForm1: FormGroup;
    myForm: FormGroup;
    constructor(private fb: FormBuilder, db: AngularFirestore) {
        this.parts = db.collection('parts').valueChanges();
        this._db = db;
    }
    ngOnInit() {
        this.myForm1 = this.fb.group({
            phone1s: this.fb.array([]),
        });
        this.myForm = this.fb.group({
            phones: this.fb.array([]),
        });
    }
    get phone1Forms() {
        return this.myForm1.get('phone1s') as FormArray;
    }
    addPhone1() {

        const phone1 = this.fb.group({
            // area: [],
            // prefix: [],
            // line: [],
        });

        this.phone1Forms.push(phone1);
    }

    deletePhone1(i) {
        this.phone1Forms.removeAt(i);
    }
    get phoneForms() {
        return this.myForm.get('phones') as FormArray;
    }

    addPhone() {

        const phone = this.fb.group({
            // area: [],
            // prefix: [],
            // line: [],
        });

        this.phoneForms.push(phone);
    }

    deletePhone(i) {
        this.phoneForms.removeAt(i);
    }
    addPart(sPartId: string, sCourseId: string, sName: string, sDescription: string, sLessonId: string, sLessonName: string,
        sLessonDescription: string, sLinkVideo: string) {
        const partsCollection = this._db.collection<Part>('parts').doc(sPartId);
        partsCollection.set({ courseName: sCourseId, name: sName, description: sDescription });
        partsCollection.collection('lessons').doc(sLessonId).set({
            name: sLessonName, description: sLessonDescription,
            linkvideo: sLinkVideo
        }).then(function() {
            alert('save success!');
        })
            .catch(function(error) {
                alert(error);
            });
    }
}

export interface Part {
    courseName: string;
    name: string;
    description: string;
}

