import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
	sign:string = "signin";
	isAndroid:boolean = false;
	
	homePage = HomePage;
	
	constructor(public navCtrl:NavController) {}
}
