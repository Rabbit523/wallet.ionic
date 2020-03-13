import {Component} from '@angular/core';
import { AlertController,NavController } from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {AccountPage} from '../account/account';
import {WithdrawPage} from '../withdraw/withdraw';
import {DepositPage} from '../deposit/deposit';
import {TermsPage} from '../terms/terms';
import {SendPage} from '../send/send';
import {HistoryPage} from '../history/history';
import {ContactPage} from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  profilePage=ProfilePage;
  depositPage=DepositPage;
  contactPage = ContactPage;
  withdrawPage = WithdrawPage;
  accountPage = AccountPage;
  sendPage=SendPage;
  termsPage=TermsPage;
  historyPage=HistoryPage;

  constructor(public alertCtrl: AlertController,public navController:NavController) {
  }

  confirmLogout() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm Logout',
      message: 'Are you sure you want to sign out?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Proceed',
          handler: () => {
            console.log('Agree clicked');
            this.navController.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
