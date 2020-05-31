import { Component, OnInit } from '@angular/core';
import { Post } from '../interface-post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  listaPost: Post[];
  listaAux: any;
  valorinicial = 0;
  contador = 10;
  listaPage: Post[];
  progresso = 0;
  teste = 0;
  
  constructor(private servicePost: PostService) {
    let progress = setInterval(() => {
      this.progresso += .016;
    }, 1000)
    setTimeout(() => {
      clearInterval(progress);
      console.log(this.progresso)
    }, 64000)

  }

  async ngOnInit() {
    this.listaAux = await this.servicePost.getPost();
    this.listaPost = this.listaAux;
    console.log(this.listaPost);

    this.listaPage = this.listaPost.slice(this.valorinicial, this.contador + this.valorinicial);
    this.valorinicial += this.contador;
  }
  


  loadData(event) {
    setTimeout(() => {
      let novoCard = this.listaPost.slice(this.valorinicial, this.contador + this.valorinicial);
      this.valorinicial += this.contador;
      for (let i = 0; i < novoCard.length; i++) {
        this.listaPage.push(novoCard[i]);
      }
      console.log('Done');
      event.target.complete();
      if (this.listaPage.length == this.listaPost.length) {
        event.target.disabled = true;
      }
    }, 500);
  }


}
