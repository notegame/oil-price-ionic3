import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the OliPriceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OliPriceProvider {

  public oil_types = {}
  public operators = {}
  public current = {}
  public tomorrow:any = {}

  constructor() {
    this.oil_types =  {
      "diesel" : "ดีเซล",
      "gasohol-91" : "แก๊สโซฮอล์ 91",
      "gasohol-95" : "แก๊สโซฮอล์ 95",
      "gasohol-e20" : "แก๊สโซฮอล์ E20",
      "gasohol-e85" : "แก๊สโซฮอล์ E85",
      "gasoline-95" : "เบนซิน 95",
      "premium-diesel" : "ดีเซลหมุนเร็ว พรีเมียม"
    }
    this.operators = {
      "bangchak" : "บางจาก",
      "caltex" : "คาลเท็กซ์",
      "esso" : "เอสโซ่",
      "irpc" : "ไออาร์พีซี",
      "pt" : "พีที",
      "ptt" : "ปตท",
      "shell" : "เชลล์",
      "susco" : "ซัสโก้"
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

    this.tomorrow = {
      "lateSync" : 1503551702516,
      "operators" : {
        "bangchak" : {
          "diesel" : "25.69",
          "gasohol-91" : "24.38",
          "gasohol-95" : "27.65",
          "gasohol-e20" : "24.14",
          "gasohol-e85" : "18.94",
          "premium-diesel" : "29.37"
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

  }

  getOilType(name){
    if(!this.oil_types[name]){
      return name
    }
    return this.oil_types[name]
  }

  getOperator(name){
    if(!this.operators[name]){
      return name
    }
    return this.operators[name]
  }

  getCurrent(){
    return this.current
  }

  getTomorrow(operator){
    if(!this.tomorrow.operators[operator]){
      return {}
    }
    return this.tomorrow.operators[operator]
  }



}
