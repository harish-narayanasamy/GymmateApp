import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { config } from '../config/config';
// tslint:disable-next-line: max-line-length


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  getStatus(userid) {

    let statusURl = config.nodeURL+"/data";
    let params = new HttpParams().set('userId', userid);
    return this.http.get(statusURl, { params: params })

  }

  getSubscription(subscriptionId) {

    let subsURL = config.nodeURL+"/subscription";
    let params = new HttpParams().set('subscriptionId', subscriptionId);
    return this.http.get(subsURL, { params: params })

  }

  createSubscription(email, id, value, userid) {

    let subscreationURL = config.nodeURL+"/create-customer";

    return this.http
      .post(
        subscreationURL, {
        email: email,
        paymentmethodsId: id,
        value: value,
        userId: userid
      })

  }

  updatePayment(paymentmethod,customerId){

    let paymentupdateURL = config.nodeURL+"/updatePayment";

    return this.http
    .post(
      paymentupdateURL, {
        paymentmethod: paymentmethod,
        customerId: customerId
    })
  }

  deleteSubscription(email, userid,subid,cusid, value) {

    let subsURL = config.nodeURL+"/subscription";

    return this.http
      .post(
        subsURL, {
        email: email,
        cusid: cusid,
        subscriptionId:subid,
        value: value,
        userId: userid
      })
  }

}