import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events:Event[];
  resourceUrl: string = "http://localhost:8080/events/";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) {}

  getEvent(id: number): Observable<Event>{
    return this.http.get(this.resourceUrl + id, this.httpOptions);
  }
  getEvents(): void{
    this.http.get<Event[]>(this.resourceUrl).subscribe((events)=>{
      this.events = events;
    });
  }
  postEvent(event: Event){
    return this.http.post(this.resourceUrl, event, this.httpOptions);
  }
  putEvent(){

  }
  deleteEvent(id: number): void{
    this.http.delete(this.resourceUrl + id).subscribe(()=>{
      this.getEvents();
    });
  }
}
