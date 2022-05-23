import { Video } from './../_model/Video';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videos: Video[] = [];

  constructor(private http: HttpClient)
   {

   }

   addVideo(video: Video):Observable<Video> {
    return this.http.post<Video>(environment.host+'/video/add', video);
   }

   getVideo():Observable<Video[]> {
    return this.http.get<Video[]>(environment.host+'/video/findAll');
   }

   updateVideo(video: Video):Observable<Video> {
    return this.http.put<Video>(environment.host+'/video/update/'+video.id,video);
  }

  deleteVideo(video: Video):Observable<Video>{
    return this.http.delete<Video>(environment.host+'/video/delete/'+video.id);
  }
}
