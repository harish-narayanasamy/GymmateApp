import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { PlanPage }     from './modals/plan/plan.page';

import { SubscriptionPage } from './modals/subscription/subscription.page';

import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { firebaseconfig } from './config/firebase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { Facebook } from '@ionic-native/facebook/ngx';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {StreamingMedia} from '@ionic-native/streaming-media/ngx';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { AdmobService } from './services/admob.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EditprofilePipe } from './pages/editprofile.pipe';

@NgModule({
  declarations: [AppComponent,PlanPage,SubscriptionPage, EditprofilePipe],
  entryComponents: [PlanPage,SubscriptionPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseconfig.firebase), // imports firebase/app
    AngularFirestoreModule, // imports firebase/firestore
    AngularFireAuthModule, // imports firebase/auth
    AngularFireStorageModule, // imports firebase/storage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlanPage,
    Facebook,
    AuthService,
    StreamingMedia,
    AdMobFree,
    AdmobService,
    InAppBrowser,
    ScreenOrientation,
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
