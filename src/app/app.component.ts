import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemInterface } from './item.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // items!: ItemInterface[]
  items$!: Observable<ItemInterface[]>

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData()
  }

  private fetchData(): void {
    this.items$ = this.http.get<ItemInterface[]>('/items');

    // this.http.get<ItemInterface[]>('/items').subscribe( {
    //   next: (res) => {
    //     this.items = res;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // });
  }
}
