import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegistationComponent } from './customer-registation.component';

describe('CustomerRegistationComponent', () => {
  let component: CustomerRegistationComponent;
  let fixture: ComponentFixture<CustomerRegistationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRegistationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRegistationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
