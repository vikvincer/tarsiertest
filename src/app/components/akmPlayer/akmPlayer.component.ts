import { Component, AfterContentInit } from '@angular/core';
let akamai: any;

@Component({
    selector: 'akamaiPlayer',
    templateUrl: './akmPlayer.component.html'
})

export class AkamaiPlayerComponent  implements AfterContentInit{
    // public akamai;
    ngAfterContentInit() {
        let doc = window.document;
        let playerApi = doc.createElement('script');
        playerApi.type = 'text/javascript';
        playerApi.src = './assets/scripts/vendor/amp.premier/amp.premier.min.js';
        doc.body.appendChild(playerApi);  
        // this.createPlayer();
    }

    createPlayer():void {
        var amp;
        
        function loadHandler(event) {
            var config = {
                autoplay : false,
                media :  {
                    src : "http://mediapm.edgesuite.net/osmf/content/test/spacealonehd_sounas_640_700.mp4"

                },
                captioning : {
                    enabled : true,
        useparallelrendering: true
                }
            };

            amp = akamai.amp.AMP.create("akamai-media-player", config, readyHandler);

            function readyHandler() {
                amp.addEventListener("captioningvisibilitychange", function(event) {
                    console.debug(amp.captioning.getHidden());
                });
            }
        }


    }

}