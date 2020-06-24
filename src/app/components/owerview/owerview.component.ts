
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { ActivatedRoute,  Params  } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owerview',
  templateUrl: './owerview.component.html',
  styleUrls: ['./owerview.component.css']
})
export class OwerviewComponent implements OnInit {
  data;
  user;
  form: FormGroup;
  condition = false;
  flag = false;
  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
    this.form = new FormGroup({
      name:new FormControl('', Validators.required),
      phone:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
      username:new FormControl('', Validators.required),
      website:new FormControl('', Validators.required),
    });
  }

  constructor(private dataService: DataService, private router: Router, private routes: ActivatedRoute) { }  
  show(id: number){
    this.router.navigate(['details'], {queryParams: {id: id}})
  }  
  Edit(){
    this.condition = false;
    if(this.flag){
      this.dataService.updateData(this.form.value).subscribe(data =>{
        this.data[data['id'] - 1] = data
      });
    }
    else{
      this.dataService.postData(this.form.value).subscribe(data =>{
        this.data.push(data);
     })
    }
  }
  Delete(id){
    this.dataService.deleteData(id).subscribe(()=>{
      this.data = this.data.filter(c => c.id !== id);
    })
  }
  Update(data){ 
    this.condition = true;
    this.flag = true;
    this.form.addControl('id', new FormControl)
    this.form.patchValue({
      name: data.name,
      username: data.username,
      phone: data.phone,
      email: data.email,
      website: data.website,
      id: data.id
    })
  }
}
