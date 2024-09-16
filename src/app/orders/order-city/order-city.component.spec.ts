import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCityComponent } from './order-city.component';

describe('OrderCityComponent', () => {
  let component: OrderCityComponent;
  let fixture: ComponentFixture<OrderCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
