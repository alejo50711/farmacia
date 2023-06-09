import { Injectable } from '@angular/core';
import { ordenes } from '../app.models';

@Injectable({
  providedIn: 'root'
})
export class OrdenserviceService {

orden:ordenes[]=[
  new ordenes(440022,"maria",77-22-33,"src\assets\img\IMG_8401.jpg"),
  new ordenes(440025,"marta",77-22-33,"src\assets\img\IMG_8401.jpg"),
  new ordenes(440024,"zambrano",77-22-33,"src\assets\img\IMG_8401.jpg"),
  new ordenes(440023,"mita",77-22-33,"src\assets\img\IMG_8401.jpg")
]
  

encontrartornden(i:number){
let ordens:ordenes=this.orden[i];
return ordens

}
  constructor() { }
}
