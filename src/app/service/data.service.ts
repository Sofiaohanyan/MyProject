import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get('https://jsonplaceholder.typicode.com/users')
  }

  postData(data) {
    return this._http.post('https://jsonplaceholder.typicode.com/users/',  data)
  }
  deleteData(id) {
    return this._http.delete('https://jsonplaceholder.typicode.com/users/' +id)
  }
  updateData(data){
    return this._http.patch('https://jsonplaceholder.typicode.com/users/' +data.id, data)
  }
  getById(id){
    return this._http.get('https://jsonplaceholder.typicode.com/users/' + id)
  }
}
