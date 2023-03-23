import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image5Component } from './image5.component';

describe('Image5Component', () => {
  let component: Image5Component;
  let fixture: ComponentFixture<Image5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Image5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Image5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
