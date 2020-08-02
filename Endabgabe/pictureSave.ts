namespace Picture {
    export class PictureSave {
        date: string;
        figure: Figure [];
        sizex: number;
        sizey: number;
        bg: string;

        constructor (_date: string, _figure: Figure [], _sizex: number, _sizey: number, _bg: string) {
            this.date = _date;
            this.figure = _figure;
            this.sizex = _sizex;
            this.sizey = _sizey;
            this.bg = _bg;
        }
    } 
}