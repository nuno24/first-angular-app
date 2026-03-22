import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-username',
  imports: [FormsModule],
  templateUrl: './username.html',
  styleUrl: './username.css',
})
export class Username {
  username = signal<string | null>(null)
  inputValue=''

  updateName(event: Event) {
    event.preventDefault()    
    this.username.set(this.inputValue)
  }
}
