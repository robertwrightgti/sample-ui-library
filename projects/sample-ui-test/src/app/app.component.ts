import { Component } from '@angular/core';
import { SampleUiLibraryService } from 'sample-ui-library';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-ui-test';
  message = '';

  constructor(
    libService: SampleUiLibraryService,
  ){
      this.message = libService.sayHi();
  }
}
