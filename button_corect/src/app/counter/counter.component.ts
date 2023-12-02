import { Component , Input, Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0;
  @Output() schimbareCount= new EventEmitter<number>();

  public increment() : void{
    this.count++;
    this.schimbareCount.emit(this.count);
  }

  public decrement() : void{
    this.count--;
    this.schimbareCount.emit(this.count);
  }

  public reset() : void{
    this.count = 0;
    this.schimbareCount.emit(this.count);
  }

}
