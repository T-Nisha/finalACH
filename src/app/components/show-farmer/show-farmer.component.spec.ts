import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFarmerComponent } from './show-farmer.component';

describe('ShowFarmerComponent', () => {
  let component: ShowFarmerComponent;
  let fixture: ComponentFixture<ShowFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowFarmerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
