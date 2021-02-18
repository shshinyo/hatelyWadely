import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "casedName",
})
export class CasedNamePipe implements PipeTransform {
  transform(input: string): string {
    const words = input.split(" ");
    const casedWords = words.map((word) => word[0].toLocaleUpperCase() + word.slice(1));
    return casedWords.join(" ");
  }
}
