import { Component, Inject, OnInit, inject } from '@angular/core';
import { CafesService } from '../services/cafes.service';
import { Cafe } from '../models/cafe.class';

@Component({
  selector: 'app-listado-cafes',
  templateUrl: './listado-cafes.component.html',
  styleUrls: ['./listado-cafes.component.scss'],
})
export class ListadoCafesComponent implements OnInit {
 
  cafeService: CafesService = inject(CafesService);
  cafeList:Cafe[]=[];
  totalCafeBlend:number=0;
  totalCafeOrigen:number=0;

  constructor(){}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((cafes)=>{
      if(cafes){
        this.cafeList=cafes;
        this.totalCafeBlend=cafes.filter((c)=>c.tipo==='Blend').length;
        this.totalCafeOrigen=cafes.filter((c)=>c.tipo==='Café de Origen').length;
      }
    })
  }


}
