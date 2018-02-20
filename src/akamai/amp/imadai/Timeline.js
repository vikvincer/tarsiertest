export default class Timeline extends akamai.amp.EventDispatcher {
  constructor(streamManager, mediaElement) {
    super()
    this.streamManager = streamManager
    this.mediaElement = mediaElement

    this.mediaElement.addEventListener("durationchange", (event) => {
      this.dispatchEvent(new akamai.amp.Event("durationchange"))
    })

    this.mediaElement.addEventListener("timeupdate", (event) => {
      this.dispatchEvent(new akamai.amp.Event("timeupdate"))
    })
  }

  set currentTime(value) {
    // Returns the stream time with ads for a given content time. Returns the given content time for live streams.
    this.mediaElement.once("seeked", event => this.dispatchEvent(new akamai.amp.Event("seeked")))
    this.mediaElement.currentTime = this.streamManager.streamTimeForContentTime(value)
  }

  get currentTime() {
    // Returns the content time without ads for a given stream time. Returns the given stream time for live streams.
    return this.streamManager.contentTimeForStreamTime(this.mediaElement.currentTime)
  }

  get duration() {
    return this.streamManager.contentTimeForStreamTime(this.mediaElement.duration)
  }
}
