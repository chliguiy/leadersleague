import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataEntity } from 'src/app/model/music.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() result:DataEntity[];
  startIndex:number = 0;
  endIndex:number = 6;
  numberOfItem:number=6;

  @Output() changePage = new EventEmitter();

  constructor() {
    this.result=[];
   }

  ngOnInit(): void {
  }
  getArrayLenght(length: number){
    return new Array(Math.round(length/6));
  }

  getIndex(pageIndex: number){
    this.startIndex = pageIndex * this.numberOfItem;
   this.endIndex = this.startIndex + this.numberOfItem;
   
   this.changePage.emit({startIndex:this.startIndex,endIndex:this.endIndex});
  }
  getActivePage(){
    return this.startIndex/this.numberOfItem;
  }
}
