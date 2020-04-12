import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { Platform } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';
import { AuthService } from '../../services/auth.service';
import { ModalController } from '@ionic/angular';
import { PlanPage } from "../../modals/plan/plan.page";
import { SubscriptionPage } from "../../modals/subscription/subscription.page"
import { SubscriptionService } from '../../services/subscription.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.page.html',
  styleUrls: ['./pro.page.scss'],
})
export class ProPage implements OnInit {

  profile={name:"GymateUser"}
  isLoading = true;
  public useremail: string;
  public userid: string;
  public type: any;
  public subid: any;
  public cusid: any;
  public name: string;
  public subscribe: any;
  public since: string;
  public innerHeight: any;


  subscriptiontext="Only $4.99 per month"
  buttonname="Change to Yearly";
  defaultplan="monthly"
  constructor( public plt: Platform,
    private firebase: FirebaseService,
    private authService: AuthService,
    private subService: SubscriptionService,
    public modalController: ModalController,
    public alertController: AlertController,
    public toastController: ToastController,
    private router: Router,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  public text: string = 'Change to yearly';
  async ionViewWillEnter() {
    console.log("view")
    let det = await this.firebase.getData()
    this.profile.name = det.name;
    this.isLoading = true;
    this.useremail = this.authService.getUserEmail();

    this.userid = this.authService.getUserId();
   
    this.subService.getStatus(this.userid).subscribe((data: any) => {
      this.subscribe = data.status;
      this.type = data.type;
      this.subid = data.subid;
      this.cusid = data.cusid;
    }, err => { console.log(err) },
    );
    this.name = await this.firebase.getDisplayName();

    this.since = await this.firebase.getCreationTime();

    this.innerHeight = this.plt.height() / 3 + 'px';

    this.isLoading = false;
  }
  public changeText(text) {
   //alert(text)


   if(text=="Change to Yearly"){
    this.subscriptiontext="Only $54.99 per year";
    this.defaultplan="yearly"
    this.buttonname="Change to Monthly"
   }
   if(text=="Change to Monthly"){
    this.subscriptiontext="Only $4.99 per month"
    this.defaultplan="monthly"
    this.buttonname="Change to Yearly"
   }
  }
  premium(){
    this.presentModal(this.defaultplan, this.useremail, this.userid, PlanPage);

  }

  async presentModal(value, email, userid, page) {
    const modal = await this.modalController.create({
      component: page,
      componentProps: {
        'value': value,
        'email': email,
        'userid': userid
      }
    });
    return await modal.present();
  }
  async presentToast(msg, color) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: color,
      position: "top"
    });
    toast.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Cancel <strong>Subscription</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');

          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            console.log(this.useremail, this.userid, this.subid, this.cusid, this.type)
            this.subService.deleteSubscription(this.useremail, this.userid, this.subid, this.cusid, this.type)
              .subscribe((data: any) => {

                console.log(data)
                this.presentToast("Success", "success");
              //  this.navCtrl.navigateBack('/profile');
              //  this.router.navi
              this.router.navigate(['/tabs/tab1']);


              }, err => {
                this.presentToast("failed", "danger");
                console.log(err)
              },
              );
          }
        }
      ]
    });

    await alert.present();
  }
}
