import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { SigninPage } from '../pages/signin/signin';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { DepositPage } from '../pages/deposit/deposit';
import { HistoryPage } from '../pages/history/history';
import { TermsPage } from '../pages/terms/terms';
import { SendPage } from '../pages/send/send';
import { ContactPage } from '../pages/contact/contact';
import { AccountPage } from '../pages/account/account';
import { WithdrawPage } from '../pages/withdraw/withdraw';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HomePage the root (or first) page
  rootPage = SigninPage
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Sign In', component: SigninPage },
      { title: 'E Wallet', component: HomePage },
      { title: 'Account', component: AccountPage },
      { title: 'Withdraw', component: WithdrawPage },
      { title: 'Terms', component: TermsPage },
      { title: 'History', component: HistoryPage },
      { title: 'Send Money', component: SendPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Deposit', component:DepositPage },
      { title: 'Contact Us', component: ContactPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      if(SplashScreen){
      setTimeout(() => {
        this.splashScreen.hide();
      }, 100);
    }
    });
  }


  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
