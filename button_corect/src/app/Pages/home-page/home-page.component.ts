import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  count=0;
  increment() {
  this.count++;
  }
  decrement(){
    this.count--;
  }
  reset():void{
    this.count=0;
  }

}