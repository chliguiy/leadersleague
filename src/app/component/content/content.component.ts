import { Component, OnInit } from '@angular/core';
import { Datum } from 'src/app/model/music.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  result :Datum[] =[];

  ngOnInit(): void {
  }


  getSearch(title:any){
    this.apiService.getMusic(title)
    .subscribe(response => {
      this.result=response.data;
      
    });
  }
}
