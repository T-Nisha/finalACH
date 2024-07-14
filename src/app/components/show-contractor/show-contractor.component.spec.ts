import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContractorComponent } from './show-contractor.component';

describe('ShowContractorComponent', () => {
  let component: ShowContractorComponent;
  let fixture: ComponentFixture<ShowContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowContractorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
