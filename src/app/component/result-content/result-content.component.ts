import { Component, Input, OnInit } from '@angular/core';
import { Datum, Music } from 'src/app/model/music.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-result-content',
  templateUrl: './result-content.component.html',
  styleUrls: ['./result-content.component.scss']
})
export class ResultContentComponent implements OnInit {

  constructor() { }
  
  @Input() result:any;
  ngOnInit(): void {
  
  }
 

 
}
