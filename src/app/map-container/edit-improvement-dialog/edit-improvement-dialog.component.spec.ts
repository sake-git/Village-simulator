import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImprovementDialogComponent } from './edit-improvement-dialog.component';

describe('EditImprovementDialogComponent', () => {
  let component: EditImprovementDialogComponent;
  let fixture: ComponentFixture<EditImprovementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditImprovementDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditImprovementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
