import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  @Input('time') inputTime: number = 0
  
  @Output()
  onComplete = new EventEmitter();

  currentTime = 0;

  constructor() { }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    this.currentTime = this.inputTime;
    
    setInterval(()=>{ 
      this.currentTime = this.currentTime -1;
      if (this.currentTime === 0) {
        this.currentTime = this.inputTime;
        this.onComplete.emit();
      }
    }, 1000)
  }

}
