import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { config } from '../../config/config';
import { SubscriptionService } from '../../services/subscription.service';
import { Router } from '@angular/router';

declare var Stripe;
const stripePublicKey = config.stripePublicKey;

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {
  email: string;
  cusid: string;
  value: string;
  card: any;
  public stripe = Stripe(stripePublicKey);

  constructor(
    public modalController: ModalController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private navCtrl: NavController,
    private subService: SubscriptionService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.setupStripe();
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


  dismissModal() {

    this.modalController.dismiss({
      'dismissed': true
    });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  setupStripe() {
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };
    this.card = elements.create('card', {
      // hidePostalCode: false,
      style: style
    });
    this.card.mount('#card-element');
    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });
    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();

      this.stripe.createPaymentMethod({
        type: 'card',
        card: this.card,
        billing_details: {
          email: this.email,
        },
      }).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {

          this.presentLoading();
          console.log("id" + result.paymentMethod.id)
          console.log("cusid" + this.value)

          this.subService.updatePayment(result.paymentMethod.id, this.value)
            .subscribe((data: any) => {

              console.log(data)

                this.presentToast("Success","success");
                this.dismissModal()
              //  this.navCtrl.back()
              this.router.navigate(['/tabs/tab1']);



            }, err => {
              this.presentToast("Please provide valid details", "danger");
              //  this.dismissModal()
              //  this.navCtrl.back()
              console.log(err)
            },
            );
        }
      });

    });
  }
}
