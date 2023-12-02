import { Component , Input , Output , EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
@Input() text :  string='';
@Input() counter : number = 0;
@Output() schimbareCount = new EventEmitter<number>();

public functieCounter() {
  if (this.text == '+') {
    this.counter++;
  } else if (this.text == '-') {
    this.counter--;
  } else {
    this.counter = 0;
  }
this.schimbareCount.emit(this.counter);
}

}
