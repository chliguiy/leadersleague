import { Component, Input, OnInit } from '@angular/core';

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
