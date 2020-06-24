import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { ActivatedRoute,  Params  } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  data;
  user;
  form: FormGroup;
  condition = false;
  flag = false;
  constructor(private dataService: DataService, private routes: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name:new FormControl('', Validators.required),
      phone:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
      username:new FormControl('', Validators.required),
    }) ;
    this.routes.queryParams.subscribe((params: Params) => {   
      if (params['id']){
        console.log(params['id'])
         return this.dataService.getById(params['id']).subscribe(data => {
           this.data = data;
           this.form.addControl('id', new FormControl);
           this.form.patchValue({
            name: this.data.name,
            username: this.data.username,
            phone: this.data.phone,
            email: this.data.email,
            id: this.data.id
          })
          })
      } 
    });

  }
      
  Edit(id: number){
    console.log(id)
    this.condition = false;
      console.log(this.form.value)
      this.dataService.getById(this.form.value).subscribe(data=>{
        this.data = data;
        });
        this.router.navigate(['overview'], {queryParams: {id: id}})
      }
    }