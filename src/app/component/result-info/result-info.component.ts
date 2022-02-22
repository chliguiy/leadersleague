import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-info',
  templateUrl: './result-info.component.html',
  styleUrls: ['./result-info.component.scss']
})
export class ResultInfoComponent implements OnInit {

  constructor() { }
  @Input() search_music='test';
  @Input() download_music='test';
  ngOnInit(): void {
  }

}
