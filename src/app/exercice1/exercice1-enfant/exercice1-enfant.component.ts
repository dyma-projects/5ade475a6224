import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

	@Input() compteur: number;
	@Output() resultEvent = new EventEmitter();
	
	getresult(){
	this.resultEvent.emit({value: this.compteur});
	}
	
	add(){
	this.compteur ++;
	this.getresult();
	}
	
	remove(){
	this.compteur --;
	this.getresult();
	}
	
  constructor() { }

  ngOnInit() {
  }

}
