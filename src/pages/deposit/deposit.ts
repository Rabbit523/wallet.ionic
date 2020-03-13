import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DepositPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})

export class DepositPage {
  payments:string="stripe";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.payments='stripe';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositPage');
  }

}
