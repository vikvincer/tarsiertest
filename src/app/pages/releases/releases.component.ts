import { Component, OnInit,AfterContentInit,Output } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-latest',
    templateUrl: './releases.component.html',
    styleUrls: ['releases.component.scss']
})
export class ReleasesComponent implements OnInit ,AfterContentInit{
    @Output() bcVideoId;

    @Output() ytVideoId;
    @Output() playerType;

    //Sample Data
    realeasesData: any = [
        {
            type:'youtube',
            image:''
        }
    ]

    tempVidId:string = '5726715052001';

    constructor(private _title:Title){ }

    ngOnInit() { 
        this._title.setTitle('Releases');
    }
    ngAfterContentInit() {

    }
}