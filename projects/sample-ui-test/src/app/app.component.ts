import { Component } from '@angular/core';
import { SampleUiLibraryService } from 'projects/sample-ui-library/src/public-api';
// import { SampleUiLibraryComponent } from 'projects/sample-ui-library/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-ui-test';

  constructor(
    // sampleUiLibraryComponent: SampleUiLibraryComponent
    libService: SampleUiLibraryService
  ){
      console.log(libService.sayHi());
  }
}
