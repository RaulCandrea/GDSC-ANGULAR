import { Component , Input, Output , EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "../button/button.component";


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
count:number = 0;
  public afisare(counter: number): void{
    this.count=counter;
  }
}
