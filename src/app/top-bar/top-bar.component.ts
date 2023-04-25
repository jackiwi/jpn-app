import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { VocabList } from '../vocab.model';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Input() v_data!: Observable<VocabList[]>;

  @Output() update_currentVid = new EventEmitter<VocabList|null>();
  currentVid: VocabList | null = null;

  selectionChanged() {
    this.update_currentVid.emit(this.currentVid);
  }
}
