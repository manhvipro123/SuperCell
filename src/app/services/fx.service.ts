import { Injectable } from '@angular/core';
import { CharStream, CommonTokenStream, ParseTreeWalker } from 'antlr4';
import ExcelLexer from '../fx/gen/ExcelLexer';
import ExcelListener from '../fx/gen/ExcelListener';
import ExcelParser from '../fx/gen/ExcelParser';

@Injectable({
  providedIn: 'root'
})
export class FxService {
  lexer!: ExcelLexer;
  parser!: ExcelParser;
  constructor() { }
  public interpret(input: string) {

    this.lexer = new ExcelLexer(new CharStream(input));
    this.parser = new ExcelParser(new CommonTokenStream(this.lexer));
    this.parser.buildParseTrees = true;
    const tree = this.parser.formula();
    console.log(tree.toStringTree(this.parser.ruleNames, this.parser));
    ParseTreeWalker.DEFAULT.walk(new ExcelListener(), tree);
  }
}
