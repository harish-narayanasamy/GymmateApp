import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { ExercisesObject } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AdmobService } from '../../services/admob.service';
import {StreamingMedia, StreamingVideoOptions} from '@ionic-native/streaming-media/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-weday',
  templateUrl: './weday.page.html',
  styleUrls: ['./weday.page.scss'],
})
export class WedayPage implements OnInit {


  enabledID = null;
  public strings = strings;
  exercises: ExercisesObject[] = [];
  day: any;
  isLoading = false;
  id: any;
  height: any;
  show: {[key: number]: boolean} = {};
  title: string;
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
    ) {}

    ngOnInit() {
      this.admob.BannerAd();
    }

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy() {
      this.admob.HideBannerAd();
    }

    async ionViewWillEnter() {
      this.isLoading = true;
      this.route.params.subscribe(
        data => {
          this.id = data.id;
          this.day = data.day;

          this.getExercises();

          if (!this.id) {
            this.goBack();
          }
        }
      );
    }

    goBack() {
      this.router.navigate(['/home']);
    }

  getExercises() {

    this.dataService.getDataWorkoutExercisesByDay(this.id, this.day)
    .subscribe( resp => {

      this.exercises = resp;

      this.isLoading = false;

  } );
}
<<<<<<< HEAD
=======


toggleInfo(index: number,id) {

  if(this.enabledID==index){
    this.enabledID =null;

  }else{
    this.dataService.getDataExerciseById(id)
    .subscribe( resp => {

      this.exercise2 = resp[0];
      this.isLoading = false;

  } );
    this.show[index] = true;
    this.enabledID =index;
  }
 
}

play() {
  const options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played'); },
    errorCallback: (e) => { console.log('Error streaming'); },
    orientation: 'landscape',
    shouldAutoClose: true,
    controls: true
  };

  // tslint:disable-next-line: max-line-length
  this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/six-pack-app.appspot.com/o/video.mp4?alt=media&token=453512dd-f079-4355-a325-92a9b2f7e465', options);
}

>>>>>>> 067e61251a391667c0a4cb5743fe6e1ade1c1256
}
