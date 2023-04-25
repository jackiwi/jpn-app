import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { VocabList } from './vocab.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jpn-app';

  v_data!: Observable<VocabList[]>;
  timestamp: number = 0;
  showPlayer: boolean = true;
  currentVid: VocabList | null = null;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.v_data = this.getData();
    this.timestamp = 0;
  }

  getData() {
    return this.http.get<VocabList[]>('./assets/data.json');
  }

  onUpdateCurrentVid(newCurrentVid: VocabList|null) {
    this.currentVid = newCurrentVid;
  }

  onUpdateTimestamp(newTimestamp: number) {
    (async () => {
      this.showPlayer = false;
      this.timestamp = newTimestamp - 5;
      await new Promise(f => setTimeout(f, 50));
      this.showPlayer = true;  
    })();
  }

}
