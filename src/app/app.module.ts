import { CameraService } from './../providers/camera/camera';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SensorsPage } from "../pages/sensors/sensors";
import { GlobalService } from "../providers/global/global";
import { DeviceMotion } from "@ionic-native/device-motion";
import { Gyroscope } from "@ionic-native/gyroscope";
import { Geolocation } from "@ionic-native/geolocation";
import { CameraPreview } from "@ionic-native/camera-preview";
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";
import { Insomnia } from "@ionic-native/insomnia";
import { BlockchainService } from "./../providers/blockchain/blockchain";
import { SensorService } from "./../providers/sensorService/sensorService";
import { WatsonIotService } from "./../providers/watsonIot/watsonIot";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SensorsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SensorsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceMotion,
    Gyroscope,
    Geolocation,
    CameraPreview,
    CameraService,
    Insomnia,
    GlobalService,
    BlockchainService,
    SensorService,
    WatsonIotService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
