import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cx-about',
  templateUrl: './about.component.html',
  styles: [`
    main { padding-bottom: var(--s7); }
  `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
