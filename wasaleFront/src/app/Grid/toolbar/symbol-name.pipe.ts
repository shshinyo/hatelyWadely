import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "symbolName",
})
export class SymbolNamePipe implements PipeTransform {
  transform(input: string): string {
    const words = input.split(" ");
    const symbol = words.map((word) => word[0]);
    const casedSymbol = symbol.map((s) => s.toLocaleUpperCase());
    return casedSymbol.join("");
  }
}
