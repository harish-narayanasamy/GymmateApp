import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { strings } from '../../config/strings';
import { MuscleObject } from '../../interfaces/interfaces';
import { AdmobService } from '../../services/admob.service';
import { AuthService } from '../../services/auth.service';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-ebodyparts',
  templateUrl: './ebodyparts.page.html',
  styleUrls: ['./ebodyparts.page.scss'],
})
export class EbodypartsPage implements OnInit {

  public strings = strings;
  exercises: MuscleObject[] = [];
  title: string;
  isLoading = false;
  id: any;
  height: any;
  public subscribe: any

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public plt: Platform,
    public admob: AdmobService,
    public auth: AuthService,
    public subService: SubscriptionService,

  ) { }



  ngOnInit() {
    this.admob.BannerAd();
    this.subscribe = false;

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.admob.HideBannerAd();
  }

  async ionViewWillEnter() {
    let userid = this.auth.getUserId();

    this.subService.getStatus(userid).subscribe((data: any) => {
      this.subscribe = data.status;
    }, err => { console.log(err) },
    );
    this.isLoading = true;

    this.route.params.subscribe(
      data => {
        this.id = data.id;
        this.title = data.title;
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

    this.dataService.getDataExercisesByBodypart(this.id)
      .subscribe(resp => {

        this.exercises = resp;

        this.isLoading = false;

      });
  }

}
