import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListPage } from '../list/list';
import { OliPriceProvider } from '../../providers/oli-price/oli-price';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  current:any = {}
  tomorrow:any = {}
  operators = []
  items = []

  constructor(
    public navCtrl: NavController,
    public oliPrice: OliPriceProvider
  ) {

    this.current = {

    }

    this.current = {
      "lateSync" : 1503551702516,
      "operators" : {
        "bangchak" : {
          "diesel" : "24.69",
          "gasohol-91" : "26.38",
          "gasohol-95" : "26.65",
          "gasohol-e20" : "24.14",
          "gasohol-e85" : "19.94",
          "premium-diesel" : "28.37"
        },
        "caltex" : {
          "diesel" : "24.69",
          "gasohol-91" : "26.38",
          "gasohol-95" : "26.65",
          "gasohol-e20" : "24.14",
          "gasoline-95" : "34.21",
          "premium-diesel" : "28.37"
        },
        "esso" : {
          "diesel" : "24.69",
          "gasohol-91" : "26.38",
          "gasohol-95" : "26.65",
          "gasohol-e20" : "24.14",
          "gasoline-95" : "34.21",
          "premium-diesel" : "28.37"
        },
        "irpc" : {
          "diesel" : "24.69",
          "gasohol-91" : "26.38",
          "gasohol-95" : "26.65"
        },
        "pt" : {
          "diesel" : "24.69",
          "gasohol-91" : "26.38",
          "gasohol-95" : "26.65",
          "gasohol-e20" : "24.14",
          "gasoline-95" : "34.26"
        },
        "ptt" : {
          "diesel" : "24.69",
          "gasohol-91" : "26.38",
          "gasohol-95" : "26.65",
          "gasohol-e20" : "24.14",
          "gasohol-e85" : "19.94",
          "gasoline-95" : "33.76",
          "premium-diesel" : "27.69"
        },
        "shell" : {
          "diesel" : "24.69",
          "gasohol-91" : "26.38",
          "gasohol-e20" : "24.14",
          "premium-diesel" : "28.37"
        },
        "susco" : {
          "diesel" : "24.69",
          "gasohol-91" : "26.38",
          "gasohol-95" : "26.65",
          "gasohol-e20" : "24.14",
          "gasohol-e85" : "19.94",
          "gasoline-95" : "33.76"
        }
      }
    }

    Object.keys(this.current.operators).forEach(key=>{

      let value = this.current.operators[key]

      let prices = []

      Object.keys(value).forEach(priceKey=>{

        let price = value[priceKey]

        prices.push({
          name : priceKey,
          price
        })

      })

      this.operators.push({
        name : key,
        prices
      })

    })

    console.log(this.operators)

  }

  itemTapped(item){
    this.navCtrl.push(ListPage, {item})
  }

  getOperator(name){
    return this.oliPrice.getOperator(name)
  }

}
