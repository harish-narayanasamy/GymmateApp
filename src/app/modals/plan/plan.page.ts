import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { config } from '../../config/config';
import { SubscriptionService } from '../../services/subscription.service';

declare var Stripe;
const stripePublicKey = config.stripePublicKey;


@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {

  email: string;
  value: string;
  userid: string;
  card: any;
  public stripe = Stripe(stripePublicKey);

  constructor(

    public modalController: ModalController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private navCtrl: NavController,
    private subService: SubscriptionService
  ) {
  }

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

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  confirmPayment(sec) {
    this.presentToast("Success", "success")

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

          this.subService.createSubscription(this.email, result.paymentMethod.id, this.value, this.userid)
            .subscribe(async (data: any) => {

              console.log(data)

              const { latest_invoice } = data;
              const { payment_intent } = latest_invoice;
              
              if (payment_intent) {
                const { client_secret, status } = payment_intent;
              
                if (status === 'requires_action') {
                  this.stripe.confirmCardPayment(client_secret)
                  .then(async (result) => {
                    if (result.error) {
                      this.presentToast("failed", "danger");
                    } else {
                      console.log(result)
                      await this.presentToast("Success", "success");
                      this.dismissModal();
                      this.navCtrl.back()
                    }
                  });
                } else {
                  await this.presentToast("Success", "success");
                  this.dismissModal();
                  this.navCtrl.back()
                }
              }
            }, err => {
              this.presentToast("Please provide valid details", "danger");
              console.log(err)
            },
            );
        }
      });

    });
  }

}
