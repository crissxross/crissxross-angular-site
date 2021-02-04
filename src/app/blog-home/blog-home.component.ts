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
        return routeList.filter((route: ScullyRoute) =>
          route.route.startsWith(`/blog/`)
        );
      })
    );

    // debug current pages
    // this.posts$.subscribe((links) => {
    //   console.log(links);
    // });
  }

}

// TODO: implement SORTING IN REVERSE chronological order - e.g. like this service:
// https://github.com/notiz-dev/notiz/blob/d9aedb3d4122ceaea600b1eb077d78c371f0e9eb/src/app/services/scully-content.service.ts#L203
