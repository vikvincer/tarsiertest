import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: 'appAlertComponent.html',
    styleUrls: ['appAlertComponent.scss']
})

export class AppAlertComponent implements OnInit{
    @Input() myAppAlert;
    @Output() modalCloseAction:EventEmitter<any> = new EventEmitter();

    ngOnInit() {
       console.log(this.myAppAlert)
    }
    close() {
        this.modalCloseAction.emit({'modalState':false});
    }
}