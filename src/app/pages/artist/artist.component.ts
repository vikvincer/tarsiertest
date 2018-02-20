import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
// import { element } from 'protractor';
import { Title } from '@angular/platform-browser';



@Component({
    selector: 'app-artist-page',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.scss'],
    outputs: ['ytVideoId']
})
export class ArtistComponent  {


}