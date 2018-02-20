import { Component, OnInit ,HostListener,Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationStart } from '@angular/router/src/events';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    hamburgerState:string = "";
    animateList:string = "";
    menuItems:any = [];
    currentRouterLink:string;
    scrollState:string;

    scrollChrome:any;
    scrollSafari:any;
    mockName:any = [];
    isArtistLinkStatus:string;
    constructor(
        private _router:Router,
        private _activatedRoute:ActivatedRoute, 
        @Inject(DOCUMENT) private _document: any) {}
    ngOnInit() {
        var a  = window.location.href.split("/");
       this.currentRouterLink = a[a.length-1];
       this.isArtist();

       
    } //End ngOnInit
    menuState() {
        this.hamburgerState = (this.hamburgerState === '' ? 'active' : '' );
        if(this.hamburgerState == 'active') {
            this.scrollState = "";
            console.log('disable scroll'); //add css scroll disable to body;
        }else {
                console.log('enable scroll') // enable scroll to body;
            if(this.scrollSafari>60 || this.scrollChrome>60) {
                this.scrollState = "scrolled";
            }else {
                this.scrollState = ""
            }
        }
    }//End MenuState
    gotoLink(){
        //reinitialize menu and nav status;
        this.hamburgerState = "";
        this.animateList = "";
        this.isArtistLinkStatus = "";
    } //End Goto Link
    isArtist() {
        //get data;
        this.mockName= ['anya','tanya','kukuk'] //temp;
        for(let i=0;i<this.mockName.length;i++) {
            if(this.currentRouterLink == this.mockName[i]) {
                this.isArtistLinkStatus = "active";
                break;
            }
        }
    }
    @HostListener('window:scroll', ['$event']) 
    doSomething(event) {
       this.scrollChrome = this._document.documentElement.scrollTop;
       this.scrollSafari = this._document.body.scrollTop;
       if(this.scrollChrome>100 ||  this.scrollSafari>100) {
        this.scrollState = "scrolled"
       }else {
           this.scrollState = "";
       }
    }
}
