import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleUiLibraryComponent } from './sample-ui-library.component';

describe('SampleUiLibraryComponent', () => {
  let component: SampleUiLibraryComponent;
  let fixture: ComponentFixture<SampleUiLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleUiLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleUiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
