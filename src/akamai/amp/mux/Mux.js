(function (exports) {
'use strict';

var Mux = function () {
  function Mux(player, config, mux) {
    babelHelpers.classCallCheck(this, Mux);

    this.player = player;
    this.config = config;
    this.sdk = mux;
    this.data = Object.assign({
      player_software_name: "AMP",
      player_software_version: player.version,
      player_mux_plugin_name: "amp-mux",
      player_mux_plugin_version: "1.66.0",
      player_init_time: player.initTime
    }, config.data);

    var element = player.container;

    player.addEventListener("ready", function (event) {
      var ads = player.ads || { getEnabled: function getEnabled() {
          return false;
        }, getInProgress: function getInProgress() {
          return false;
        } };

      function mapEvents(target, map, isAdEvent) {
        for (var muxEvent in map) {
          target.addEventListener(map[muxEvent], function (element, muxEvent, playerEvent) {
            if (!isAdEvent && ads.getInProgress()) return;

            if (!/timeupdate/.test(muxEvent)) console.log("mux.emit", muxEvent); // TODO: Replace with player.logger.log

            mux.emit(element, muxEvent);
          }.bind(null, element, muxEvent));
        }
      }

      mapEvents(player, {
        "play": "play",
        "playing": "playing",
        "pause": "pause",
        "timeupdate": "timeupdate",
        "seeking": "seeking",
        "seeked": "seeked",
        "error": "error",
        "ended": "ended",
        "stalled": "stalled"
      });

      player.addEventListener("mediachange", function (event) {
        var media = event.detail;
        console.log("mux.emit", "videochange");
        mux.emit(element, "videochange", {
          video_id: media.guid,
          video_title: media.title,
          video_duration: media.duration,
          video_is_live: media.temporalType == "live",
          video_poster_url: media.poster,
          video_source_url: media.src,
          video_source_mime_type: media.type
        });
      });

      if (ads.getEnabled()) {
        mapEvents(ads, {
          "adrequest": "request",
          "adresponse": "response",
          "adbreakstart": "breakstart",
          "adplay": "play",
          "adplaying": "playing",
          "adpause": "pause",
          "adfirstquartile": "firstquartile",
          "admidpoint": "midpoint",
          "adthirdquartile": "thirdquartile",
          "adended": "ended",
          "adbreakend": "breakend",
          "aderror": "error"
        }, true);

        mapEvents(ads, {
          "adplay": "breakstart"
        }, true);
      }

      mux.emit(element, "playerready");
    });

    mux.init(element, this);
  }

  babelHelpers.createClass(Mux, [{
    key: "getStateData",
    value: function getStateData() {
      var player = this.player;
      var error = player.error || {};
      var mediaElement = player.mediaElement;
      return {
        video_language_code: player.language,
        video_source_duration: isNaN(mediaElement.duration) ? undefined : Math.round(mediaElement.duration * 1000),
        video_source_height: mediaElement.videoHeight,
        video_source_width: mediaElement.videoWidth,
        player_is_paused: player.paused,
        player_playhead_time: this.getPlayheadTime(),
        player_is_fullscreen: player.displayState == "fullscreen",
        player_autoplay_on: player.autoplay,
        player_preload_on: mediaElement.preload,
        player_width: element.clientWidth,
        player_height: element.clientHeight,
        player_language_code: player.language,
        player_error_code: error.code,
        player_error_message: error.message
      };
    }
  }, {
    key: "getPlayheadTime",
    value: function getPlayheadTime() {
      return Math.round(this.player.getCurrentTime() * 1000);
    }
  }], [{
    key: "create",
    value: function create(player, config) {
      return new Promise(function (resolve, reject) {
        resolve(new Mux(player, config, mux));
      });
    }
  }]);
  return Mux;
}();

akamai.amp.AMP.registerPlugin("mux", Mux.create);

exports.Mux = Mux;

}((this.akamai.amp.mux = this.akamai.amp.mux || {})));
//# sourceMappingURL=Mux.js.map
