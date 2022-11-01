import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const items = [
      {id: 11, name: 'Компьютеры'},
      {id: 12, name: 'Ноутбуки'},
      {id: 13, name: 'Мониторы'},
      {id: 14, name: 'Мышки'},
      {id: 15, name: 'Клавиатуры'},
      {id: 16, name: 'Роутеры'},
      {id: 17, name: 'Свичи'},
      {id: 18, name: 'Мобильные'}
    ];

    return {items};
  }
}
