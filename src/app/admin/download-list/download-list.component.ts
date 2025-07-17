import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { allDownloadsType, RecipeArray } from '../../interface/interface';

@Component({
  selector: 'app-download-list',
  standalone: false,
  templateUrl: './download-list.component.html',
  styleUrl: './download-list.component.css'
})
export class DownloadListComponent {

  ngOnInit(){
    this.fetchDownloads()
  }

  downloads:allDownloadsType[]=[]

  constructor(private api:ApiService){}

  fetchDownloads(){
    this.api.onGetAllDownloads().subscribe((res:allDownloadsType[])=>{
      console.log(res)
      this.downloads=res
    })
  }

}
