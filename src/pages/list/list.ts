import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OliPriceProvider } from '../../providers/oli-price/oli-price';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  operator: any;
  items = [];
  tomorrow:any = {}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public oliPrice: OliPriceProvider
  ) {

    // If we navigated to this page, we will have an item available as a nav param
    this.operator = navParams.get('item');

    this.items = this.operator.prices;

    this.tomorrow = this.oliPrice.getTomorrow(this.operator.name)

    console.log(this.items, this.operator)
    
  }

  getOperator(name){
    return this.oliPrice.getOperator(name)
  }

  getOilType(name){
    return this.oliPrice.getOilType(name)
  }

  getTomorrowPrice(price, type){
    let currentPrice = parseFloat(price)
    let newPrice = parseFloat(this.tomorrow[type])


    if(newPrice > currentPrice){
      return {
        type : 'up',
        icon : 'ios-arrow-up',
        price : newPrice
      }
    }else
    if(newPrice < currentPrice){
      return {
        type : 'down',
        icon : 'ios-arrow-down',
        price : newPrice
      }
    }else{
      return {
        type : 'default',
        icon : '',
        price : newPrice
      }
    }

  }

}
