import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
    constructor(db: AngularFirestore) {
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
    partForm: FormGroup;
    //     parts: Observable<Part[]>;
    ngOnInit() {
    }
    addPart(sCourseId: string, sName: string, sDescription: string) {
        const partsCollection = this._db.collection<Part>('parts');
        partsCollection.add({ courseId: sCourseId, name: sName, description: sDescription });
    }
    //   addPart() {
    //         console.log(this.partForm.value);
    //         this.partCollection.add(this.partForm.value);
    //     }
}

export interface Part {
    courseId: string;
    name: string;
    description: string;
}
