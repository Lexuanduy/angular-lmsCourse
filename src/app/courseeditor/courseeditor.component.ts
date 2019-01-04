import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CategoryService } from 'src/app/category.service';

@Component({
    selector: 'app-courseeditor',
    templateUrl: './courseeditor.component.html',
    styleUrls: ['./courseeditor.component.css']
})
export class CourseeditorComponent implements OnInit {
    //  categories$;
    constructor(db: AngularFirestore, public categoryService: CategoryService) {
        //  this.categories$ = categoryService.getCategories();
        this.courseForm = new FormGroup({
            category: new FormControl(''),
            url: new FormControl(''),
            name: new FormControl(''),
            author: new FormControl(''),
            price: new FormControl(''),
            priceUnit: new FormControl(''),
            description: new FormControl(''),
            lecturerId: new FormControl(''),
            hours: new FormControl(''),
            hotCourse: new FormControl(''),
            img: new FormControl('')
        });
        this.categoryCollection = db.collection('categories');
        this.courseCollection = db.collection('courses', ref => ref.where('name', '==', 'Java'));
        this.partCollection = db.collection('parts', ref => ref.where('courseName', '==', 'Java').where('name', '==', 'Phần 1'));
        this.categories = this.categoryCollection.valueChanges();
        this.courses = this.courseCollection.valueChanges();
        this.parts = this.partCollection.valueChanges();
        this.lessons = db.collection('parts', ref => ref.where('courseName', '==', 'Java'))
            .doc('JavaPart1').collection('lessons').valueChanges();
    }
    private categoryCollection: AngularFirestoreCollection<Category>;
    private courseCollection: AngularFirestoreCollection<Course>;
    private partCollection: AngularFirestoreCollection<Part>;
    courseForm: FormGroup;
    categories: Observable<Category[]>;
    courses: Observable<Course[]>;
    parts: Observable<Part[]>;
    lessons: Observable<any[]>;
    ngOnInit() {
    }

    addCourse() {
        console.log(this.courseForm.value);
        this.courseCollection.add(this.courseForm.value).then(function () {
            alert('create course success!');
        })
            .catch(function (error) {
                alert(error);
            });
    }
}
export interface Category {
    name: string;
}
export interface Course {
    category: string;
    id: string;
    url: string;
    name: string;
    author: string;
    price: string;
    priceUnit: string;
    description: string;
    lecturerId: string;
    hours: string;
    hotCourse: string;
    img: string;
}
export interface Part {
    courseName: string;
    name: string;
    description;
}
