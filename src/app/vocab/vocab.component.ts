import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Vocab } from '../vocab.model';

@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.scss']
})
export class VocabComponent implements OnInit {
  @Input() vocab_list!: Vocab[];

  @Output() update_timestamp = new EventEmitter<number>();

  currentWord: Vocab | null = null;

  constructor() {}

  ngOnInit(): void {
  }

  setCurrentWord(v: Vocab) {
    this.currentWord = v;
    this.update_timestamp.emit(this.timestampToSeconds(v.timestamp));
  }

  timestampToSeconds(timestamp: string) {
    const arr = timestamp.split(' ');
    let seconds = 0;
    for (let i = arr.length-1; i>=0; i--) {
      if (arr[i] === "second" || arr[i] === "seconds") {
        i--;
        seconds += +arr[i];
      }else if (arr[i] === "minute" || arr[i] === "minutes") {
        i--;
        seconds += +arr[i]*60;
      }else if (arr[i] === "hour" || arr[i] === "hours") {
        i--;
        seconds += +arr[i]*3600;
      }
    }
    return seconds;
  }
  
}
