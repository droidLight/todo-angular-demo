import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotecountComponent } from './notecount.component';

describe('NotecountComponent', () => {
  let component: NotecountComponent;
  let fixture: ComponentFixture<NotecountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotecountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
