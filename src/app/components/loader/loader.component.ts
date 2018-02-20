import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
    loaderSize:string;
    @Input() size:string;
    constructor() { }

    ngOnInit() {
       if(this.size == 'small'){
           this.loaderSize = 'absolute';
       }else {
           this.loaderSize = 'fixed';
       }
     }
}