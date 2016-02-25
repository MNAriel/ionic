import {App, Page, IonicApp} from 'ionic-angular';

@App({
  templateUrl: 'main.html'
})
class ApiDemoApp {
  doRefresh(refresher) {
    console.log('DOREFRESH', refresher)

    setTimeout(() => {
      refresher.complete();
    })
  }

  doStarting() {
    console.log('DOSTARTING');
  }

  doPulling(amt) {
    console.log('DOPULLING', amt);
  }
}