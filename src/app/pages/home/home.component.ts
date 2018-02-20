import { Component, OnInit, ElementRef, ViewChild, Renderer2, HostListener, Inject, Output, AfterViewInit, AfterContentInit } from '@angular/core';
import { Renderer } from '@angular/core/src/render/api';
import { DOCUMENT } from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('videoBlock') videoBlock: ElementRef;
    @ViewChild('artistBlock') artistBlock: ElementRef;
    @ViewChild('contactBlock') contactBlock: ElementRef;
    @ViewChild('submitBlock') submitBlock: ElementRef;
    @ViewChild('videoEmbed') videoEmbed: ElementRef;

    @Output() ytVideoId;
    releaseH2State:string = "hide";
    releasePState:string = "hide";
    releaseBtnState:string = "hide";
    playerReady:boolean = false;
    ytVidID:string;

    constructor(private _renderer:Renderer2,@Inject(DOCUMENT) private _document: any,private _title: Title) { }

    ngOnInit() {
        this.playerReady = false;
        this.ytVidID = "-glkPdjTPxs";
        this.videoBlockParallax();
        this.animations();
        this._title.setTitle('Home')
    }

    //Browser events
    @HostListener('window:scroll', ['$event']) 
    onScroll(event) {
        this.videoBlockParallax();
        this.animations();

    }
    @HostListener('window:resize', ['$event']) 
    onResize() {
        this.videoBlockParallax();
        this.animations();
    };


    //Functions    
    animations() {
        if(window.innerHeight>1000 || (window.innerWidth<568)) {
            this.artistBlock.nativeElement.classList.add("active");
            this.contactBlock.nativeElement.classList.add("active");
            this.submitBlock.nativeElement.classList.add("active");
        }else {
            this.sectionBlockParallax(this.artistBlock);
            this.sectionBlockParallax(this.contactBlock);
            this.sectionBlockParallax(this.submitBlock);
        }
    }
    videoBlockParallax() {
        var elemHeight = this.videoBlock.nativeElement.querySelector('.video-embed').clientHeight;
        this.videoBlock.nativeElement.style.height=`${elemHeight}px`;
        this.videoBlock.nativeElement.querySelector('.video-embed').style.top = `${this.videoBlock.nativeElement.getBoundingClientRect().top/5}px`;
        //if(this.videoBlock.nativeElement.getBoundingClientRect().top<100 && this.videoBlock.nativeElement.getBoundingClientRect().top>-(elemHeight-600)) {
        if(this.videoBlock.nativeElement.getBoundingClientRect().top<100 ) {
            this.videoBlock.nativeElement.classList.add("active");
            this.videoBlock.nativeElement.querySelector('.video-embed').style.position = 'fixed';
        }else { 
          //  this.videoBlock.nativeElement.classList.remove("active");
        }
    }
    sectionBlockParallax(element) {
        var breakpoint = element.nativeElement.clientHeight/3;
        if(element.nativeElement.getBoundingClientRect().top<150 && element.nativeElement.getBoundingClientRect().bottom>breakpoint) {
            element.nativeElement.classList.add("active");
        }else if(element.nativeElement.getBoundingClientRect().bottom<100) {
            element.nativeElement.classList.add("active");
        }
        else {
            // element.nativeElement.classList.remove("active");
        }
    }
    getPlayerStatus(event) {
    setTimeout(()=>{
        if(event == 1) {
            this.playerReady = true;
            }
    },2000)
    }
}