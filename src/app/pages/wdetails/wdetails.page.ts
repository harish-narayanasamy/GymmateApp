import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { strings } from '../../config/strings';
import { Platform } from '@ionic/angular';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-wdetails',
  templateUrl: './wdetails.page.html',
  styleUrls: ['./wdetails.page.scss'],
})
export class WdetailsPage implements OnInit {
  show: { [key: number]: boolean } = {};
  public strings = strings;
  workout: any = {};
  isLoading = false;
  id: any;
  innerHeight: any;
  days = new Array(7);
  days2: any
  icon = 'star-outline';
  subscribe = true;
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public plt: Platform,
    private dataFavorite: FavoriteService
  ) { }

  exercise: any = {};
  isInfoHidden = true;
  isInstruHidden = true;
  isTipsHidden = true;
  orientation = 'landscape';

  ngOnInit() {
  }
  isPositive(x: string, y: number): boolean {
    return (parseInt(x) === y);
  }
  async ionViewWillEnter() {
    this.isLoading = true;
    this.innerHeight = this.plt.height() / 3 + 'px';
    this.route.params.subscribe(
      data => {
        this.id = data.id;
        this.getDays();
        this.getDetails();

        this.dataFavorite.existWorkout(this.id)
          .then(exist => this.icon = (exist) ? 'star' : 'star-outline');

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

    this.dataService.getDataWorkoutById(this.id)
      .subscribe(resp => {



        this.workout = resp[0];
        this.isLoading = false;

      });
  }
  getDays() {

    this.dataService.getDataNumberDaysById(this.id)
      .subscribe(resp => {

        console.log(resp[0])
        this.days2 = resp;
        for (let i in this.days2) {
          console.log(this.days2[i])
        }
        this.isLoading = false;

      });
  }
  checkavail(y: number) {
    for (let i in this.days2) {
      if (parseInt(this.days2[i].day) === y)
        return true
    }
  }

  addToFavorites() {
    const workout = {
      id: this.workout.workout_id,
      title: this.workout.workout_title,
      image: this.workout.workout_image,
    };

    const exist = this.dataFavorite.saveWorkout(workout);
    this.icon = (exist) ? 'star' : 'star-outline';
  }

  toggleInfo(index: number) {
    this.show[index] = true;
  }



}
