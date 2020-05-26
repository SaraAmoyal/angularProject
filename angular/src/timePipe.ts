import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timepipe' })
export class timePipe implements PipeTransform{
    transform(time:number):string{
        if(time==60)return ' one hour';
        if(time<60)return time.toString()+' minutes';
        const str=(Math.round(time/60)).toString()+' hours and '+(time%60).toString()+' minutes';
        return str;
    }
}