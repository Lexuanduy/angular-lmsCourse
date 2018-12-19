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
    constructor(private fb: FormBuilder, db: AngularFirestore) {
        this.parts = db.collection('parts').valueChanges();
        this._db = db;
    }
    //   constructor(db: AngularFirestore) {
    //         this.partForm = new FormGroup({
    //             courseId: new FormControl(''),
    //             name: new FormControl(''),
    //             description: new FormControl(''),
    //         });
    //         this.partCollection = db.collection('parts');
    //         this.parts = this.partCollection.valueChanges();
    //     }
    //     private partCollection: AngularFirestoreCollection<Part>;
    // partForm: FormGroup;
    //     parts: Observable<Part[]>;
    ngOnInit() {
        this.myForm1 = this.fb.group({
            phone1s: this.fb.array([])
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
    addPart(sCourseId: string, sName: string, sDescription: string, sLessonName: string, sLessonDescription: string) {
        const partsCollection = this._db.collection<Part>('parts');
        partsCollection.add({ courseName: sCourseId, name: sName, description: sDescription });
        partsCollection.doc('').collection('lessons').add({ name: sLessonName, description: sLessonDescription});
    }
    //   addPart() {
    //         console.log(this.partForm.value);
    //         this.partCollection.add(this.partForm.value);
    //     }
}

export interface Part {
    courseName: string;
    name: string;
    description: string;
}
