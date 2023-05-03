import { Component } from '@angular/core';
import { LivroService } from '../livro.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.component.html',
  styleUrls: ['./card-livro.component.css']
})
export class CardLivroComponent {

  livros : any[] = []
  classificacao : number = 0;
  disponivel : any; 
  preco : number = 0
 quantidade : number = 0
  titulo : string = ""
  remover : boolean = true;

  constructor(private livroService : LivroService ,private http : HttpClient){}
  ngOnInit(){
};
getLivros(){
  return this.http.get<any[]>("http://localhost:5128/api/Livros").subscribe(
    response => {
      this.livros = response;
    this.livros.forEach(livro =>{
      this.titulo = livro.titulo;
    });
  },
  error => {
    console.log(error)
  }
   )
}

removerLivros(){
  this.remover = false;
}
}
