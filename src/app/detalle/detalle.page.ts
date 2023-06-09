import { Component, OnInit } from '@angular/core';
import { OrdenserviceService } from '../services/ordenservice.service';
import { ordenes } from '../app.models';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ListaPage } from '../lista/lista.page';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  
})
export class DetallePage implements OnInit {
  public scanAtive: boolean = false
  code:any;
  i:number=0;
  alert: any;
  
  scanactive=false;

  constructor(private alerts:AlertController ,private modalimg:ModalController ,private miorden:OrdenserviceService,private route:ActivatedRoute,private routes:Router) {
 
   }

  ngOnInit() {
   this.orden=this.miorden.orden;
   this.i=this.route.snapshot.params['id'];
   let ordenn:ordenes=this.miorden.encontrartornden(this.i)
   this.cuadroorden=ordenn.numero,this.cuadronombre=ordenn.nombre,this.cuadrofecha=ordenn.fecha,this.cuadroimg=ordenn.img
  }

  ngOnDestroy(): void {
    this.stopscanner()
  }


 orden:ordenes[] = []
 cuadroorden:number=0;
 cuadronombre:string="";
 cuadrofecha:number=0;
 cuadroimg:string="";
 ////////////////////////////////// modal o visualizacion de la imagen ///////////////////////////////////////////

 async openImageModal(imageUrl: string) {
  const mymodal = await this.modalimg.create({
    component: ListaPage,
    componentProps: {
      imageUrl:imageUrl
    }
  });

  return await mymodal.present();
}

/////////////////////////////////////////////////////////



async startScanner(){
  const allowed =await this.checkpermission();
  if(allowed){
    this.scanactive=true;
    const result = await BarcodeScanner.startScan();
    console.log("succes",result)
   if(result.hasContent){
    
    this.scanactive=false;
   }
    
  }

}


async checkpermission() {

  return new Promise(async(resolve,rejects)=>{
    const status= await BarcodeScanner.checkPermission({force: true});
  
  if(status.granted){
   resolve(true);
  }else if(status.denied){
    const alert = await this.alert.create({
      header:"No permission",
      message:"por favor dar acceso a la camara",
      buttons:[{
        text:"no",
        role:"cancel"

      },
      {
        text:"open settings",  
        handler:()=>{
          BarcodeScanner.openAppSettings();
          resolve(false);
        }
      }]
    });
    await alert.present();
  }else{
    resolve(false)
  }
  
  
  });
}

stopscanner(){
  BarcodeScanner.stopScan();
  this.scanactive=false;
}



}
