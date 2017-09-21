import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdersListPage } from './orders-list';


@NgModule({
  declarations: [
    OrdersListPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdersListPage),
    TranslateModule.forChild()
  ],
   exports: [
    OrdersListPage
  ]
})
export class OrdersListPageModule {}
