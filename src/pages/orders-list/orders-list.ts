import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApplicationService } from '../../providers/application';
import { OrderDetailsPage } from '../order-details/order-details';
/**
 * Generated class for the OrdersListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders-list',
  templateUrl: 'orders-list.html',
})
export class OrdersListPage {
	orders;
  constructor(public navCtrl: NavController, public navParams: NavParams, public appy: ApplicationService) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersListPage');
    this.getOrderList();
  }


  getOrderList(){
  	this.appy.getOrders().then((data)=>{
  		this.orders = data;
  	})
  	 .catch((err)=>{
          console.log(err);
      });
  }
   

   seeOrder(){
     this.navCtrl.push(OrderDetailsPage, {user: this.orders.user, orderItems: this.orders.order_items, order: this.orders})
   } 
}
