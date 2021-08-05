import { Component, OnInit } from "@angular/core";
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-123',
                duration: 120,
                rating: 5.0,
                releaseDate: '22/11/1988'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 23.00,
                code: 'ASD-6551',
                duration: 180,
                rating: 3.6,
                releaseDate: '31/01/2022'
            },
            {
                id: 3,
                name: 'Angular: Router',
                imageUrl: '/assets/images/router.png',
                price: 36.34,
                code: 'AD1-531',
                duration: 60,
                rating: 1.8,
                releaseDate: '17/06/2017'
            }
        ]
    }

}