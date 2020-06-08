import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-sample-ui-library',
    template: `
    <p>
      sample-ui-library component still works!
    </p>
  `,
    styles: [
    ]
})
export class SampleUiLibraryComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
