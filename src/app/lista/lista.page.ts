import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  @Input() imageUrl: any;
  constructor(private mymodal:ModalController) { }
 
 
  closeModal() {
    this.mymodal.dismiss();
  }
  ngOnInit() {
    console.log(this.imageUrl);
  }

}
