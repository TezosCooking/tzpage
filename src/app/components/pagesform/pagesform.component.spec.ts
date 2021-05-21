import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesformComponent } from './pagesform.component';

describe('PagesformComponent', () => {
  let component: PagesformComponent;
  let fixture: ComponentFixture<PagesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
