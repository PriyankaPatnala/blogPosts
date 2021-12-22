import { Component, OnInit } from '@angular/core';
import { Blog} from "../model/bloghub";
import {BlogService} from "../blog.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit {
  categories = ['technical','personal','nature'];
  constructor(private service: BlogService, private router: Router) { }

  ngOnInit(): void {
  }
  onFormSubmit(blog: Blog) {
    this.service.addBlog(blog);
    this.router.navigateByUrl('/list');
  }
}
