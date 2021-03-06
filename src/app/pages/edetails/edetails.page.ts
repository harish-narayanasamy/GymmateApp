import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { strings } from '../../config/strings';
import {StreamingMedia, StreamingVideoOptions} from '@ionic-native/streaming-media/ngx';
import { AdmobService } from '../../services/admob.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-edetails',
  templateUrl: './edetails.page.html',
  styleUrls: ['./edetails.page.scss']
})
export class EdetailsPage implements OnInit {

  public strings = strings;
  exercise: any = {};
  isLoading = false;
  id: any;
  orientation = 'landscape';
  show: {[key: number]: boolean} = {};
  workout: any = {};
  innerHeight: any;
  days = new Array(7);
  icon = 'star-outline';
  dataFavorite;
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private streamingMedia: StreamingMedia,
    private admob: AdmobService,
    private screenOrientation: ScreenOrientation,

    ) {}



    ngOnInit() {
      this.admob.HideBannerAd();
      if( this.orientation === 'landscape') {
        this.setPortrait();

      }
    }

    async ionViewWillEnter() {
      this.isLoading = true;
      this.route.params.subscribe(
        data => {
          this.id = data.id;
          this.getDetails();

          if (!this.id) {
            this.goBack();
          }
        }
      );
    }

    goBack() {
      this.router.navigate(['/home']);
    }
    getDetails() {

    this.dataService.getDataExerciseById(this.id)
    .subscribe( resp => {

      this.exercise = resp[0];
      this.isLoading = false;

  } );
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

setPortrait() {
  // set to portrait
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
}

toggleInfo(index: number) {
  this.show[index] = true;
}

addToFavorites() {
  const workout = {
    id: this.workout.workout_id,
    title: this.workout.workout_title,
    image: this.workout.workout_image,
};

  const exist = this.dataFavorite.saveWorkout( workout );
  this.icon = ( exist ) ? 'star' : 'star-outline';
}

}
