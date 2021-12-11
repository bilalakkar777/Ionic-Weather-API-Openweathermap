export class Forecast
{
    constructor(
        public day:string,
        public icon:string,
        public tempMax:string,
        public tempMin:string,
        public description:string,
    ) {}
}