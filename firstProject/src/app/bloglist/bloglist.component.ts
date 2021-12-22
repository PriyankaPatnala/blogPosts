import { Component, OnInit } from '@angular/core';
import { Blog} from "../model/bloghub";
import {BlogService} from "../blog.service";

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  blogsList:Blog[] = [];
  constructor(private service: BlogService) { }

  ngOnInit(): void {
    this.blogsList = this.service.getBlogs();
  }

}
