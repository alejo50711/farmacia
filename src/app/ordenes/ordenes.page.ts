import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenserviceService } from '../services/ordenservice.service';
import { ordenes } from '../app.models';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.page.html',
  styleUrls: ['./ordenes.page.scss'],
})
export class OrdenesPage implements OnInit {

 i:number = 0;




  constructor(private route:Router,private miservicio:OrdenserviceService, private routes:ActivatedRoute) { }
  ngOnInit() {
    this.orden=this.miservicio.orden

    this.i=this.routes.snapshot.params["id"];

    let ordenn:ordenes=this.miservicio.encontrartornden(this.i)
  }
  
  mostrar(){
let miorden=new ordenes(this.cuadroorden,this.cuadronombre,this.cuadrofecha,this.cuadroimg)
  }

  orden:ordenes[] = [];

  cuadroorden:number=0;
  cuadronombre:string="";
  cuadrofecha:number=0;
  cuadroimg:string="";
 
 
 
 


}
