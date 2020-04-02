import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { strings } from '../../config/strings';
import { MuscleObject } from '../../interfaces/interfaces';
import { AdmobService } from '../../services/admob.service';
import { AuthService } from '../../services/auth.service';
import { SubscriptionService } from '../../services/subscription.service';
import {StreamingMedia, StreamingVideoOptions} from '@ionic-native/streaming-media/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
  selector: 'app-newwdetails',
  templateUrl: './newwdetails.page.html',
  styleUrls: ['./newwdetails.page.scss'],
})
export class NewwdetailsPage implements OnInit {

  show: {[key: number]: boolean} = {};
  strings = strings;
  exercises: MuscleObject[] = [];
  title: string;
  isLoading = false;
  id: any;
  height: any;
  subscribe: any
  et:string;
  st:string;
  exercise: any = {};
  isInfoHidden = true;
  isInstruHidden = true;
  isTipsHidden = true;
  orientation = 'landscape';
  exercise2: any = {};


  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public plt: Platform,
    private streamingMedia: StreamingMedia,
    private admob: AdmobService,
    private screenOrientation: ScreenOrientation,
    public auth: AuthService,
    public subService: SubscriptionService,
  ) { }

  ngOnInit() {
  }

  toggleInfo(index: number) {
    this.show[index] = true;
  }
  
   toggleInfo(y: boolean) {
    this.show[y] = true;
  }

  hide() {
    this.hideMe = true;
  }
  
}
