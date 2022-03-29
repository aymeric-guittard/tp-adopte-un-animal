import { Injectable } from '@angular/core';
import { Chien } from '../model/chien';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  getAll() : Promise<Chien[]> {
    return Promise.resolve([]);
  }
}
