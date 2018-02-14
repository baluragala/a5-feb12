import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "topower"
})
export class ToPowerPipe implements PipeTransform {
  transform(value: any, to: any): any {
    return Math.pow(value, to);
  }
}
