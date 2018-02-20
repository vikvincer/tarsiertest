(function (exports) {
'use strict';

var MRSS = function (_akamai$amp$Plugin) {
  babelHelpers.inherits(MRSS, _akamai$amp$Plugin);

  function MRSS(player, config) {
    babelHelpers.classCallCheck(this, MRSS);

    var _this = babelHelpers.possibleConstructorReturn(this, (MRSS.__proto__ || Object.getPrototypeOf(MRSS)).call(this, player, config));

    _this.feature = "feed";
    _this.helper = new akamai.amp.utils.MRSSHelper();
    return _this;
  }

  babelHelpers.createClass(MRSS, [{
    key: "transform",
    value: function transform(feed) {
      var promise = Promise.resolve(feed);
      var helper = new akamai.amp.utils.MRSSHelper();

      if (typeof feed == "string") {
        promise = helper.getFeed(feed);
      }

      promise = promise.then(function (feed) {
        return helper.createFeed(feed).item[0];
      });

      return promise;
    }
  }, {
    key: "onready",
    value: function onready() {
      var _this2 = this;

      var url = this.config.url;
      var data = this.config.data;
      var func = null;

      if (url != null && url != "") func = function func() {
        return _this2.url = url;
      };else if (data != null) func = function func() {
        return _this2.data = data;
      };

      if (typeof func == "function") setTimeout(func, 1);
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(value) {
      this._data = value;
      this.feed = this.helper.createFeed(value);
      this.player.media = this.feed.item[0];
      this.dispatchEvent(new akamai.amp.Event("changed", this.feed));
    }
  }, {
    key: "url",
    get: function get() {
      return this._url;
    },
    set: function set(value) {
      var _this3 = this;

      this._url = this.player.evaluatePaths(value);

      this.dispatchEvent(new akamai.amp.Event("request", this._url));
      this.helper.getFeed(this._url).then(function (feed) {
        _this3.dispatchEvent(new akamai.amp.Event("loaded", feed));
        _this3.data = feed;
      }).catch(function (error) {
        _this3.dispatchEvent(new akamai.amp.Event("error", { error: error, url: value }));
        _this3.logger.error("[AMP Feed Load Error]", _this3._url, error);
      });
    }
  }]);
  return MRSS;
}(akamai.amp.Plugin);

akamai.amp.AMP.registerPlugin("mrss", MRSS.factory);

exports.MRSS = MRSS;

}((this.akamai.amp.mrss = this.akamai.amp.mrss || {})));
//# sourceMappingURL=Mrss.js.map
