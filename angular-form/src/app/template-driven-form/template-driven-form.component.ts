import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  countryData:Country[]=[
    new Country("1","India"),
    new Country("2","USA"),
    new Country("3","Englans"),
    new Country("4","Canada")
  ]

  saveData(formData:NgForm)
  {
    console.log(formData.value);
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
