import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemstoinventoryComponent } from './additemstoinventory.component';

describe('AdditemstoinventoryComponent', () => {
  let component: AdditemstoinventoryComponent;
  let fixture: ComponentFixture<AdditemstoinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditemstoinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemstoinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
