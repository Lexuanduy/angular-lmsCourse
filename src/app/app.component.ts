import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {

    items: Observable<any[]>;
    constructor(public afAuth: AngularFireAuth, db: AngularFirestore, private router: Router) {
        this.items = db.collection('courses').valueChanges();
    }
    login() {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    logout() {
        this.afAuth.auth.signOut();
    }
}

