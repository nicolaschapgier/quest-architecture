import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRandomComponent } from './user-random.component';

describe('UserRandomComponent', () => {
  let component: UserRandomComponent;
  let fixture: ComponentFixture<UserRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRandomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
