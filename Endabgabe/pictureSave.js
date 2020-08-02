"use strict";
var Picture;
(function (Picture) {
    class PictureSave {
        constructor(_date, _figure, _sizex, _sizey, _bg) {
            this.date = _date;
            this.figure = _figure;
            this.sizex = _sizex;
            this.sizey = _sizey;
            this.bg = _bg;
        }
    }
    Picture.PictureSave = PictureSave;
})(Picture || (Picture = {}));
//# sourceMappingURL=pictureSave.js.map