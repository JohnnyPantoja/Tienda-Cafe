import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCafesComponent } from './listado-cafes.component';

describe('ListadoCafesComponent', () => {
  let component: ListadoCafesComponent;
  let fixture: ComponentFixture<ListadoCafesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCafesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoCafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
