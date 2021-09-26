import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cx-under-construction',
  template: `
    <div class="center-wrapper pad-block">
      <h2><mat-icon>build</mat-icon> Please note: this page is under construction <mat-icon>build</mat-icon></h2>
    </div>
  `,
  styles: [`
    h2 {
      font-weight: var(--fw-200);
      color: var(--clr-red-400);
    }
    .center-wrapper {
      --pad: var(--s0);
    }
  `],
})
export class UnderConstructionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
