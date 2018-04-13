import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMessageDialogComponent } from './app-message-dialog.component';


describe('AppMessageDialogComponent', () => {
  let component: AppMessageDialogComponent;
  let fixture: ComponentFixture<AppMessageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMessageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
