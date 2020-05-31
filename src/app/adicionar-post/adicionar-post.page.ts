import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../interface-post';

@Component({
  selector: 'app-adicionar-post',
  templateUrl: './adicionar-post.page.html',
  styleUrls: ['./adicionar-post.page.scss'],
})
export class AdicionarPostPage implements OnInit {

  constructor(private service: PostService) { }
  todo: Post = {} as Post;
  ngOnInit() {
  }
  logForm() {
    this.service.post(this.todo);
  }

}
