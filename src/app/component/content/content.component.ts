import { Component, OnInit } from '@angular/core';
import { DataEntity } from 'src/app/model/music.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  result :DataEntity[] =[];
  startIndex:number = 0;
  endIndex:number = 6;
  numberOfItem:number=6;

  getArrayLenght(length: number){
    return new Array(Math.round(length/6));
  }

  getIndex(pageIndex: number){
    this.startIndex = pageIndex * this.numberOfItem;
   this.endIndex = this.startIndex + this.numberOfItem;
  }
  getActivePage(){
    return this.startIndex/this.numberOfItem;
  }
  ngOnInit(): void {
  }


  getSearch(title:any){
    this.apiService.getMusic(title)
    .subscribe(response => {
      this.result=response.data;
      
    });
  }
}
