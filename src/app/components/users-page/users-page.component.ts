import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl , Validators, FormArray, FormGroupName} from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  data;
  user;
  form: FormGroup;
  condition = false;
  flag = false;
  constructor(private routes: ActivatedRoute, private _dataService: DataService) { }

  ngOnInit() {
    this.routes.queryParams.subscribe((params: Params) => {   
      if (params['id']){
         return this._dataService.getById(params['id']).subscribe(data => {
           this.data = data;
         })
      } 
    });
    this.form = new FormGroup({
      name:new FormControl('', Validators.required),
      phone:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
      username:new FormControl('', Validators.required),
      website:new FormControl('', Validators.required),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        suite: new FormControl('', Validators.required),
        zipcode: new FormControl(''),
        geo: new FormGroup({
          lat: new FormControl('', Validators.required),
          lng: new FormControl('', Validators.required),
        })
      }),
      company: new FormGroup({
        name: new FormControl('', Validators.required),
        catchPhrase: new FormControl('', Validators.required),
        bs: new FormControl('', Validators.required)
      })
    });
  }
  Edit(){
    this.condition = false;
      console.log(this.form.value)
      this._dataService.updateData(this.form.value).subscribe(data=>{
        this.data = data;
    });
  }
  Update(data){ 
    this.condition = true;
    this.form.addControl('id', new FormControl)
    this.form.patchValue(data)
  }
}


