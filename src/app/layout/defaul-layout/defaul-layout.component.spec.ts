import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulLayoutComponent } from './defaul-layout.component';

describe('DefaulLayoutComponent', () => {
  let component: DefaulLayoutComponent;
  let fixture: ComponentFixture<DefaulLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaulLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaulLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
