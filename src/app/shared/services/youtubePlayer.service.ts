import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';


let _window: any = window;

@Injectable()
export class YoutubePlayerServices {
  public yt_player;
  private currentVideoId: string;

  @Output() videoChangeEvent: EventEmitter<any> = new EventEmitter(true);
  @Output() playPauseEvent: EventEmitter<any> = new EventEmitter(true);
  @Output() currentVideoText: EventEmitter<any> = new EventEmitter(true);

  constructor(

  ) { }

  createPlayer(ytId,autoplay): void {
    let interval = setInterval(() => {
      if ((typeof _window.YT !== 'undefined') && _window.YT && _window.YT.Player) {
        this.yt_player = new _window.YT.Player('yt-player', {
          width: '440',
          height: '250',
          videoId: ytId,
          allow: "autoplay; encrypted-media",
          enablejsapi:1 ,
          origin:'http://localhost:4200',
          playerVars: {
            iv_load_policy: '3',
            rel: '0',
            autoplay: 1,
            controls:'0'
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
    switch (state) {
      case 0:
        this.videoChangeEvent.emit(true);
        this.playPauseEvent.emit('pause');
        break;
      case 1:
        this.playPauseEvent.emit('play');
        break;
      case 2:
        this.playPauseEvent.emit('pause');
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
