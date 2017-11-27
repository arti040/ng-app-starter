import { Component, Input } from '@angular/core';

@Component({
  selector: '<dummy-component></dummy-component>',
  template: '<h1>{{ title }}</h1>',
})
export class DummyComponent {

	@Input() title: string;

	constructor() {
		console.log('DummyComponent\'s saying Yo!');
	}
}