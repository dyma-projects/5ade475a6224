import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  
  @ViewChild('t') public el: ElementRef;
  public valeur: string;
  
	setvalue(){
	this.valeur = this.el.nativeElement.value;
	}
	
  constructor() { }

  ngOnInit() {
  }

}
