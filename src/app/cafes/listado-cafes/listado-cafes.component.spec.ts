import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';

import { ListadoCafesComponent } from './listado-cafes.component';
import { HttpClientModule } from '@angular/common/http';
import { CafesService } from '../services/cafes.service';
import { Cafe } from '../models/cafe.class';

describe('ListadoCafesComponent', () => {
  let component: ListadoCafesComponent;
  let fixture: ComponentFixture<ListadoCafesComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListadoCafesComponent ],
      providers: [ CafesService ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCafesComponent);
    component = fixture.componentInstance;

    for(let i = 1; i <= 3; i++) {
      const cafe = new Cafe(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
      );
      component.cafeList.push(cafe);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Encabezado
  it('should have 1 <table-dark> elements', () => {
    expect(debug.queryAll(By.css('thead.table-dark'))).toHaveSize(1)
  });

  // Filas
  it('should have 3 <tr.col.mb-2> elements', () => {
    expect(debug.queryAll(By.css('tr.col.mb-2'))).toHaveSize(3)
  });
});
