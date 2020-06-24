import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {
  data;
  flag;
  result;
  form: FormGroup;
  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required)
    })
    this.dataService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data)
    } )
  }
  createForm(){
    this.result = this.data.map(item => item.name).concat(this.data.map(item => item.username));
    if(this.result.includes(this.form.controls.name.value && this.form.controls.userName.value) ){
        this.router.navigate(['/overview'])
    }
    else{
      this.flag = true;
    }
  }
}
