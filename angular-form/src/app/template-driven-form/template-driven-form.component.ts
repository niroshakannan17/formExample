import { Component } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit{

  countryData:Country[]=[
    new Country("1","India"),
    new Country("2","USA"),
    new Country("3","Englans"),
    new Country("4","Canada")
  ]
  contactFormData!:ContactData
  ngOnInit(): void {
    this.contactFormData={
      firstName:"",
      lastName:"Kannan",
      email:"niroshakannan17@gmail.com",
      mobileNumber:"7538884535",
      gender:"Female",
      marriedStatus:true,
      country:"1",
      address:{
        cityName:"Madurai",
        stateName:"Tamilnadu",
        pinCode:"625018"
      }

    }
  }

  saveData(formcontrolData:NgControl)
  {
    console.log(formcontrolData);
  }

}

class Country{
  id:string ="";
  name:string = "";

  constructor(id:string,name:string)
  {
    this.id = id;
    this.name = name;
  }
}

class ContactData{

  firstName!:string;
  lastName!:string;
  email!:string;
  mobileNumber!:string;
  gender!:string;
  country!:string;
  marriedStatus!:boolean;
  address !:{
    cityName:string,
    stateName:string,
    pinCode:string,
  }
}
