import { Injectable } from '@angular/core';
import { Blog} from "./model/bloghub";
import {blogs} from "./model/bloglist";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
 private blogs: Blog[];
  constructor() {
    this.blogs = blogs;
  }

  getBlogs() {
    return this.blogs;
  }
  addBlog(blog: Blog) {
    let id = this.blogs.length+1;
    blog.id = id;
    this.blogs.unshift(blog);
    console.log(this.blogs);
  }
}
