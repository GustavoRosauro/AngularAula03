import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person:Person;
  hideInputNumber:boolean = false;
  lista:Array<Person> = []
  constructor() {
    this.person = new Person();
  }

  ngOnInit():void {    
  }
  hideInputNumberEvent(){
    this.hideInputNumber = true;
  }
  save(){
      let novaPessoa = new Person()
      novaPessoa.nome = this.person.nome;
      novaPessoa.idade = this.person.idade;
      novaPessoa.email = this.person.email;
      this.lista.push(novaPessoa);
  }
}
