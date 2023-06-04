import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.css']
})
export class AlertPopupComponent implements OnInit {
  @Input() message: string;
  @Output('onPopupClose') closePopupEventEmitter = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onPopupClose(){
    // console.log('emitted');
    this.closePopupEventEmitter.emit();
  }
}
