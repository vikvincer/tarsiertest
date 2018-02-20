import { Component, OnInit,ElementRef ,AfterContentInit,ViewChild,Inject,Output,EventEmitter,Input} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { PLATFORM_ID } from '@angular/core';
 import { isPlatformBrowser, isPlatformServer } from '@angular/common';
let _window: any = window;

@Component({
    selector: 'app-yt-player',
    templateUrl: './ytPlayer.component.html',
    styleUrls: ['./ytPlayer.component.scss'],
})

export class YtPlayerComponent implements AfterContentInit {

    public yt_player;
    private currentVideoId: string;
    
    @Output() playerVideoStatus: EventEmitter<any> = new EventEmitter();
    @Output() videoChangeEvent: EventEmitter<any> = new EventEmitter(true);
    @Output() playPauseEvent: EventEmitter<any> = new EventEmitter(true);
    @Output() currentVideoText: EventEmitter<any> = new EventEmitter(true);
    @Input() ytVideoId:string;
    @Input() playerType:number;
    @Input() playerState:number;
    constructor(@Inject(PLATFORM_ID) private platformId: Object){}
    ngAfterContentInit() {
        let doc = window.document;
        let playerApi = doc.createElement('script');
        playerApi.type = 'text/javascript';
        playerApi.src = 'https://www.youtube.com/iframe_api';
        doc.body.appendChild(playerApi);  
        if (isPlatformBrowser(this.platformId)) {

       }

        if(this.playerType == 2) {
          this.createPlayer2(this.ytVideoId,0);
        }else {
          if(this.ytVideoId) {
            this.createPlayer(this.ytVideoId,1);
          } else {
            this.createPlayer('-glkPdjTPxs',1);
          } 
        }

    }
      createPlayer(ytId,autoplay): void {
        let interval = setInterval(() => {
          if ((typeof _window.YT !== 'undefined') && _window.YT && _window.YT.Player) {
            this.yt_player = new _window.YT.Player('yt-player-'+ytId, {
              width: '440',
              height: '250',
              videoId: ytId,
              playerVars: {
                iv_load_policy: '3',
                rel: '0',
                autoplay: autoplay,
                controls:'0',
                mute:'1'
              },
              events: {
                onStateChange: (ev) => {
                  this.onPlayerStateChange(ev);
                }
              }
            });
            clearInterval(interval);
          }
        }, 100);
      }

      createPlayer2(ytId,autoplay): void {
        let interval = setInterval(() => {
          if ((typeof _window.YT !== 'undefined') && _window.YT && _window.YT.Player) {
            this.yt_player = new _window.YT.Player('yt-player-'+ytId, {
              width: '440',
              height: '250',
              videoId: ytId,
              playerVars: {
                iv_load_policy: '3',
                rel: '0',
                autoplay: autoplay,
                controls:'1'
              },
              events: {
                onStateChange: (ev) => {
                  this.onPlayerStateChange(ev);
                }
              }
            });
            clearInterval(interval);
          }
        }, 100);
      }

      onPlayerStateChange(event: any) {
        const state = event.data;
        this.playerVideoStatus.emit(state);
        switch (state) {
          case 0:
            this.videoChangeEvent.emit(true);
            this.playPauseEvent.emit('pause');
            this.playerVideoStatus.emit(1);
          case 1:
            this.playPauseEvent.emit('play');
            this.playerVideoStatus.emit(1);
            break;
          case 2:
            this.playPauseEvent.emit('pause');
            this.playerVideoStatus.emit(0);
            break;
        }   
      }
    
      playVideo(videoId: string, videoText?: string): void {
        if (!this.yt_player) {
          return;
        }
        this.yt_player.loadVideoById(videoId);
        this.currentVideoId = videoId;
        this.currentVideoText.emit(videoText);
      }
    
      pausePlayingVideo(): void {
        this.yt_player.pauseVideo();
      }
    
      playPausedVideo(): void {
        this.yt_player.playVideo();
      }
      getCurrentVideo(): string {
        return this.currentVideoId;
      }
    
}
