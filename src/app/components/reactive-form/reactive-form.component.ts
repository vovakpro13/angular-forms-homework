import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {IPost, IUser} from "../../models";
import {FormControl, FormGroup} from "@angular/forms";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  users: IUser[];
  posts: IPost[];

  formGroup = new FormGroup({
    userControl: new FormControl( '', {})
  });

  constructor(private usersService: UsersService, private postsService: PostsService) {
    this.usersService.getAll().subscribe(response => {
      this.users = response;
    })
  }

  ngOnInit(): void {
  }

  submit() :void {
    const userId = this.users.filter(u => u.username === this.formGroup.controls.userControl.value)[0].id;
    this.postsService.getUserPosts(userId).subscribe(response => {
      this.posts = response;
    })
  }
}
