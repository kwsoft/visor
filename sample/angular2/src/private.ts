/// <reference src="typings/tsd.d.ts">

import {Component, View, bootstrap} from "angular2/angular2";
import {FORM_DIRECTIVES} from 'angular2/forms'

@Component({
    selector: "private"
})
@View({
    directives: [FORM_DIRECTIVES],
    //I could've just onButtonClick(name), but wanted to show #input syntax
    template:`
        You are at private!
    `
})
export default class Home {
    name:string = "Private";
}