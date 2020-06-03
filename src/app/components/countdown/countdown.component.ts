import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnChanges {

  @Input('time') inputTime: number = 0
  @Input('key') inputKey: number = 0
  
  @Output()
  onComplete = new EventEmitter();

  currentTime: number = 0;
  myInterval: any = null

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(simpleChanges: SimpleChanges) : void {
    const { inputTime } = simpleChanges;
    this.currentTime = this.inputTime;
    clearInterval(this.myInterval);
    this.startCountdown();
  }

  startCountdown(): void {
    this.myInterval = setInterval(()=>{ 
      this.currentTime = this.currentTime -1;
      if (this.currentTime === 0) {
        clearInterval(this.myInterval);
        this.onComplete.emit();
      }
    }, 1000)
  }

}
