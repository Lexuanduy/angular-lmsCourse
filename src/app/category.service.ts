import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFirestore) { }
  getCategories() {
    return this.db.collection('categories').snapshotChanges().pipe(map(categories => {
      return categories.map(a => {
        const value = a.payload.doc.data;
        const key = a.payload.doc;
        // alert(a.payload.doc.data.toString);
        return {key, ...value};
      });
    }));
  }
}
