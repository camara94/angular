import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user.model';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.unitForm();
  }

  unitForm(){
    this.userForm = this.formBuilder.group(
      {
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        preference:['',Validators.required],
        hobbies:this.formBuilder.array([])
      }
    );
  }

  onSubmit(){
    const userN = this.userForm.value;
    const users = new User(
      userN['firstName'],
      userN['lastName'],
      userN['email'],
      userN['preference'],
      userN['hobbies']?userN['hobbies']:[]
    );
    this.userService.addUser(users);
    this.router.navigate(['/user']);
  }

  getHobbies():FormArray{
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby(){
    const newHobbyControl = this.formBuilder.control(null,Validators.required);
    this.getHobbies().push(newHobbyControl);
  }
}
