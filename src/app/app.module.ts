import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {PhotoViewer} from '@ionic-native/photo-viewer';

import {SigninPage} from '../pages/signin/signin';
import {HomePage} from '../pages/home/home';
import {ProfilePage} from '../pages/profile/profile';
import {AccountPage} from '../pages/account/account';
import {WithdrawPage} from '../pages/withdraw/withdraw';
import {DepositPage} from '../pages/deposit/deposit';
import {TermsPage} from '../pages/terms/terms';
import {HistoryPage} from '../pages/history/history';
import {SendPage} from '../pages/send/send';
import {ContactPage} from '../pages/contact/contact';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SigninPage,
    HomePage,
    ProfilePage,
    DepositPage,
    SendPage,
    HistoryPage,
    TermsPage,
    ContactPage,
    WithdrawPage,
    AccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SigninPage,
    HomePage,
    ProfilePage,
    DepositPage,
    SendPage,
    HistoryPage,
    TermsPage,
    WithdrawPage,
    AccountPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
