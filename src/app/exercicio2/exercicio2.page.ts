import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.page.html',
  styleUrls: ['./exercicio2.page.scss'],
})
export class Exercicio2Page implements OnInit {

  private ano: number;
  private resultado: number;
  private msg :string;

  private calcular(): void{
    if (( 2021 - this.ano <=15)){
      this.msg = " Não Vota"
    }
    else if (( 2021 - this.ano >=16 && 2021 - this.ano <=17 || 2021 - this.ano >=70)) {
      this.msg = " Voto Opcional"
    }
  
    else  {
      this.msg = " Voto Obrigatório";
    }
  
     
    this.resultado = (2021 - this.ano) ;
  }
  ngOnInit() {
  }

}
