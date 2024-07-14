import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmgsuccessComponent } from './smgsuccess.component';

describe('SmgsuccessComponent', () => {
  let component: SmgsuccessComponent;
  let fixture: ComponentFixture<SmgsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmgsuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmgsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
