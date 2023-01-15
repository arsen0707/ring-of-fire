import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerMobileComponent } from './add-player-mobile.component';

describe('AddPlayerMobileComponent', () => {
  let component: AddPlayerMobileComponent;
  let fixture: ComponentFixture<AddPlayerMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlayerMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlayerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
