import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.page.html',
  styleUrls: ['./exercicio1.page.scss'],
})
export class Exercicio1Page implements OnInit {

  private total: number;
  private salario: number;
  private resultado: number;
  private msg:string;
  private horaextra: number;
  

  private calcular(): void{
    this.horaextra = this.total - 160;
    if (this.total >160) {

      this.resultado = (this.total * this.salario) + ( (this.salario * 0.5 ) * this.horaextra) ;

      
    }
   else {
     this.resultado =(this.total * this.salario);
   }     
   
  }
  ngOnInit() {
  }

}
