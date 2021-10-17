import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.page.html',
  styleUrls: ['./exercicio3.page.scss'],
})
export class Exercicio3Page implements OnInit {

  private descricao: string;
  private qntd: number;
  private valor: number;
  private resultado: number;
  private msg:string;
  private total : number;
 
  private calcular(): void{
      this.total = (this.qntd * this.valor);
  
    if (this.qntd <=5) {

      this.resultado = (this.total - (this.total * 0.02)) ;

      this.msg = "2%"
      
    }
   else if  (this.qntd > 5 && this.qntd <=10){
    this.resultado = (this.total - (this.total * 0.03)) ;

    this.msg = "3%"
   }  
   
   else if (this.qntd > 10){
    this.resultado = (this.total - (this.total * 0.05)) ;

    this.msg = "5%"
   }  
       
  }
  
  ngOnInit() {
  }

}
