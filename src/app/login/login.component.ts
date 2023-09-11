import { Component, EventEmitter, Output } from '@angular/core';
import { PostService } from '../services/post.service'

@Component({
  selector: 'app-login',
  template: `
    <div>
      <button (click)="onLoginClick()">Login</button>
    </div>
  `,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  @Output() loginClicked = new EventEmitter<void>();
  hide = true;

  constructor(private postService: PostService) { }

  onLoginClick(password: string) {
    console.log('Password:', password);

    this.postService.login({ 'password': password }).subscribe({
      next: (response: any) => {
        if (response.message === 'loggedIn') this.loginClicked.emit();
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }
}