import { Component,AfterContentInit,Input,OnInit } from '@angular/core';


@Component({
    selector: 'brightcovePlayer',
    templateUrl: 'brightcovePlayer.component.html'
})

export class BrightcovePlayerComponent implements AfterContentInit,OnInit{
    @Input() bcVideoId;
    getID:string;
    ngOnInit() {
       
       this.getID =  this.bcVideoId;
    }
    ngAfterContentInit() {
        let doc = window.document;
        let playerApi = doc.createElement('script');
        playerApi.type = 'text/javascript';
        playerApi.src = '//players.brightcove.net/1888899668001/H1KoBp8UG_default/index.min.js';
        doc.body.appendChild(playerApi);  
    }
}