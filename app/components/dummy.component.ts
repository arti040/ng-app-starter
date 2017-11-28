import { Component, Input } from '@angular/core';

@Component({
  selector: '<dummy-component></dummy-component>',
  template: '<h1>{{ mainTitle }}</h1>',
})
export class DummyComponent {

	@Input() title: string;
	
	public mainTitle: string = this.title || 'Dummy Title';
	
	constructor() {
		console.log('DummyComponent\'s saying Yo!');
	}
}