import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal(0)

  addCount() {
    this.count.update(count => count + 1)
  }
  subtractCount() {
    this.count.update(count => count - 1)
  }
}
