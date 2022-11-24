import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxPlaygroundComponent } from './rx-playground.component';

describe('RxPlaygroundComponent', () => {
  let component: RxPlaygroundComponent;
  let fixture: ComponentFixture<RxPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxPlaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
