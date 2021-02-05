import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cx-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

  posts$: Observable<ScullyRoute[]> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
    this.posts$ = this.scully.available$.pipe(
      map(routeList => {
        let posts = routeList.filter((route: ScullyRoute) =>
          route.route.startsWith(`/blog/`)
        );
        // sort posts in reverse chronological order
        return posts.sort((pA, pB) =>
           new Date(pA.date) > new Date(pB.date) ? -1 : 1
        );
      })
    )
  }

}
