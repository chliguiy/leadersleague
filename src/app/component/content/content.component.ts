import { Component, OnInit } from '@angular/core';
import { DataEntity } from 'src/app/model/music.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  result :DataEntity[];
  startIndex:number = 0;
  endIndex:number = 6;
  numberOfItem:number=6;
  constructor(private apiService:ApiService) {
    this.result=[];
   }
  

  ngOnInit(): void {
  }
changePage(data:any){
this.startIndex=data.startIndex;
this.endIndex=data.endIndex;
}

  getSearch(title:any){
    this.result=[];
    this.apiService.getMusic(title)
    .subscribe(response => {
      this.result=response.data;
    });
  }
}
