// Generated from Excel.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import ExcelListener from "./ExcelListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class ExcelParser extends Parser {
	public static readonly ADD = 1;
	public static readonly SUB = 2;
	public static readonly MUL = 3;
	public static readonly DIV = 4;
	public static readonly EQ = 5;
	public static readonly NEQ = 6;
	public static readonly LT = 7;
	public static readonly GT = 8;
	public static readonly LTE = 9;
	public static readonly GTE = 10;
	public static readonly AND = 11;
	public static readonly OR = 12;
	public static readonly NOT = 13;
	public static readonly XOR = 14;
	public static readonly LPAREN = 15;
	public static readonly RPAREN = 16;
	public static readonly COMMA = 17;
	public static readonly WS = 18;
	public static readonly VAR_NAME = 19;
	public static readonly VAR_RANGE = 20;
	public static readonly NUMERIC = 21;
	public static readonly STRING = 22;
	public static readonly BOOL = 23;
	public static readonly FN_SUM = 24;
	public static readonly FN_AVERAGE = 25;
	public static readonly FN_COUNT = 26;
	public static readonly FN_MIN = 27;
	public static readonly FN_MAX = 28;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_formula = 0;
	public static readonly RULE_function_name = 1;
	public static readonly RULE_function_call = 2;
	public static readonly RULE_operand = 3;
	public static readonly RULE_numeric_operator = 4;
	public static readonly RULE_logic_operator = 5;
	public static readonly RULE_term = 6;
	public static readonly RULE_expr = 7;
	public static readonly literalNames: (string | null)[] = [ null, "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'='", 
                                                            "'!='", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", "'AND'", 
                                                            "'OR'", "'NOT'", 
                                                            "'XOR'", "'('", 
                                                            "')'", "','", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'SUM'", "'AVERAGE'", 
                                                            "'COUNT'", "'MIN'", 
                                                            "'MAX'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "ADD", 
                                                             "SUB", "MUL", 
                                                             "DIV", "EQ", 
                                                             "NEQ", "LT", 
                                                             "GT", "LTE", 
                                                             "GTE", "AND", 
                                                             "OR", "NOT", 
                                                             "XOR", "LPAREN", 
                                                             "RPAREN", "COMMA", 
                                                             "WS", "VAR_NAME", 
                                                             "VAR_RANGE", 
                                                             "NUMERIC", 
                                                             "STRING", "BOOL", 
                                                             "FN_SUM", "FN_AVERAGE", 
                                                             "FN_COUNT", 
                                                             "FN_MIN", "FN_MAX" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"formula", "function_name", "function_call", "operand", "numeric_operator", 
		"logic_operator", "term", "expr",
	];
	public get grammarFileName(): string { return "Excel.g4"; }
	public get literalNames(): (string | null)[] { return ExcelParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return ExcelParser.symbolicNames; }
	public get ruleNames(): string[] { return ExcelParser.ruleNames; }
	public get serializedATN(): number[] { return ExcelParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, ExcelParser._ATN, ExcelParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public formula(): FormulaContext {
		let localctx: FormulaContext = new FormulaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, ExcelParser.RULE_formula);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 16;
			this.match(ExcelParser.EQ);
			this.state = 17;
			this.expr();
			this.state = 18;
			this.match(ExcelParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_name(): Function_nameContext {
		let localctx: Function_nameContext = new Function_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, ExcelParser.RULE_function_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 20;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 520093696) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_call(): Function_callContext {
		let localctx: Function_callContext = new Function_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, ExcelParser.RULE_function_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 22;
			this.function_name();
			this.state = 23;
			this.match(ExcelParser.LPAREN);
			this.state = 24;
			this.expr();
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 25;
				this.match(ExcelParser.COMMA);
				this.state = 26;
				this.expr();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 32;
			this.match(ExcelParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public operand(): OperandContext {
		let localctx: OperandContext = new OperandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, ExcelParser.RULE_operand);
		try {
			this.state = 40;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 34;
				this.match(ExcelParser.VAR_NAME);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 35;
				this.match(ExcelParser.VAR_RANGE);
				}
				break;
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 36;
				this.function_call();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 37;
				this.match(ExcelParser.STRING);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 38;
				this.match(ExcelParser.BOOL);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 39;
				this.match(ExcelParser.NUMERIC);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numeric_operator(): Numeric_operatorContext {
		let localctx: Numeric_operatorContext = new Numeric_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, ExcelParser.RULE_numeric_operator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 42;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 30) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public logic_operator(): Logic_operatorContext {
		let localctx: Logic_operatorContext = new Logic_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, ExcelParser.RULE_logic_operator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 44;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 32736) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let localctx: TermContext = new TermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, ExcelParser.RULE_term);
		try {
			this.state = 53;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 46;
				this.operand();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 47;
				this.match(ExcelParser.LPAREN);
				this.state = 48;
				this.expr();
				this.state = 49;
				this.match(ExcelParser.RPAREN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 51;
				this.match(ExcelParser.SUB);
				this.state = 52;
				this.expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let localctx: ExprContext = new ExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, ExcelParser.RULE_expr);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this.term();
			this.state = 61;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 56;
					this.numeric_operator();
					this.state = 57;
					this.term();
					}
					}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 69;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 64;
					this.logic_operator();
					this.state = 65;
					this.term();
					}
					}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,28,73,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,1,
	1,1,1,1,2,1,2,1,2,1,2,1,2,5,2,28,8,2,10,2,12,2,31,9,2,1,2,1,2,1,3,1,3,1,
	3,1,3,1,3,1,3,3,3,41,8,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,
	6,54,8,6,1,7,1,7,1,7,1,7,5,7,60,8,7,10,7,12,7,63,9,7,1,7,1,7,1,7,5,7,68,
	8,7,10,7,12,7,71,9,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,3,1,0,24,28,1,0,1,4,
	1,0,5,14,74,0,16,1,0,0,0,2,20,1,0,0,0,4,22,1,0,0,0,6,40,1,0,0,0,8,42,1,
	0,0,0,10,44,1,0,0,0,12,53,1,0,0,0,14,55,1,0,0,0,16,17,5,5,0,0,17,18,3,14,
	7,0,18,19,5,0,0,1,19,1,1,0,0,0,20,21,7,0,0,0,21,3,1,0,0,0,22,23,3,2,1,0,
	23,24,5,15,0,0,24,29,3,14,7,0,25,26,5,17,0,0,26,28,3,14,7,0,27,25,1,0,0,
	0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,29,1,0,0,0,
	32,33,5,16,0,0,33,5,1,0,0,0,34,41,5,19,0,0,35,41,5,20,0,0,36,41,3,4,2,0,
	37,41,5,22,0,0,38,41,5,23,0,0,39,41,5,21,0,0,40,34,1,0,0,0,40,35,1,0,0,
	0,40,36,1,0,0,0,40,37,1,0,0,0,40,38,1,0,0,0,40,39,1,0,0,0,41,7,1,0,0,0,
	42,43,7,1,0,0,43,9,1,0,0,0,44,45,7,2,0,0,45,11,1,0,0,0,46,54,3,6,3,0,47,
	48,5,15,0,0,48,49,3,14,7,0,49,50,5,16,0,0,50,54,1,0,0,0,51,52,5,2,0,0,52,
	54,3,14,7,0,53,46,1,0,0,0,53,47,1,0,0,0,53,51,1,0,0,0,54,13,1,0,0,0,55,
	61,3,12,6,0,56,57,3,8,4,0,57,58,3,12,6,0,58,60,1,0,0,0,59,56,1,0,0,0,60,
	63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,69,1,0,0,0,63,61,1,0,0,0,64,65,
	3,10,5,0,65,66,3,12,6,0,66,68,1,0,0,0,67,64,1,0,0,0,68,71,1,0,0,0,69,67,
	1,0,0,0,69,70,1,0,0,0,70,15,1,0,0,0,71,69,1,0,0,0,5,29,40,53,61,69];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExcelParser.__ATN) {
			ExcelParser.__ATN = new ATNDeserializer().deserialize(ExcelParser._serializedATN);
		}

		return ExcelParser.__ATN;
	}


	static DecisionsToDFA = ExcelParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class FormulaContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(ExcelParser.EQ, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(ExcelParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_formula;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterFormula) {
	 		listener.enterFormula(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitFormula) {
	 		listener.exitFormula(this);
		}
	}
}


export class Function_nameContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FN_SUM(): TerminalNode {
		return this.getToken(ExcelParser.FN_SUM, 0);
	}
	public FN_AVERAGE(): TerminalNode {
		return this.getToken(ExcelParser.FN_AVERAGE, 0);
	}
	public FN_COUNT(): TerminalNode {
		return this.getToken(ExcelParser.FN_COUNT, 0);
	}
	public FN_MIN(): TerminalNode {
		return this.getToken(ExcelParser.FN_MIN, 0);
	}
	public FN_MAX(): TerminalNode {
		return this.getToken(ExcelParser.FN_MAX, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_function_name;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterFunction_name) {
	 		listener.enterFunction_name(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitFunction_name) {
	 		listener.exitFunction_name(this);
		}
	}
}


export class Function_callContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public function_name(): Function_nameContext {
		return this.getTypedRuleContext(Function_nameContext, 0) as Function_nameContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ExcelParser.LPAREN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ExcelParser.RPAREN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ExcelParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ExcelParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_function_call;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterFunction_call) {
	 		listener.enterFunction_call(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitFunction_call) {
	 		listener.exitFunction_call(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VAR_NAME(): TerminalNode {
		return this.getToken(ExcelParser.VAR_NAME, 0);
	}
	public VAR_RANGE(): TerminalNode {
		return this.getToken(ExcelParser.VAR_RANGE, 0);
	}
	public function_call(): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, 0) as Function_callContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(ExcelParser.STRING, 0);
	}
	public BOOL(): TerminalNode {
		return this.getToken(ExcelParser.BOOL, 0);
	}
	public NUMERIC(): TerminalNode {
		return this.getToken(ExcelParser.NUMERIC, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_operand;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterOperand) {
	 		listener.enterOperand(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitOperand) {
	 		listener.exitOperand(this);
		}
	}
}


export class Numeric_operatorContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(ExcelParser.ADD, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(ExcelParser.SUB, 0);
	}
	public MUL(): TerminalNode {
		return this.getToken(ExcelParser.MUL, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(ExcelParser.DIV, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_numeric_operator;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterNumeric_operator) {
	 		listener.enterNumeric_operator(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitNumeric_operator) {
	 		listener.exitNumeric_operator(this);
		}
	}
}


export class Logic_operatorContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(ExcelParser.EQ, 0);
	}
	public NEQ(): TerminalNode {
		return this.getToken(ExcelParser.NEQ, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(ExcelParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(ExcelParser.GT, 0);
	}
	public LTE(): TerminalNode {
		return this.getToken(ExcelParser.LTE, 0);
	}
	public GTE(): TerminalNode {
		return this.getToken(ExcelParser.GTE, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(ExcelParser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(ExcelParser.OR, 0);
	}
	public XOR(): TerminalNode {
		return this.getToken(ExcelParser.XOR, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(ExcelParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_logic_operator;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterLogic_operator) {
	 		listener.enterLogic_operator(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitLogic_operator) {
	 		listener.exitLogic_operator(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public operand(): OperandContext {
		return this.getTypedRuleContext(OperandContext, 0) as OperandContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(ExcelParser.LPAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(ExcelParser.RPAREN, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(ExcelParser.SUB, 0);
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_term;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterTerm) {
	 		listener.enterTerm(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitTerm) {
	 		listener.exitTerm(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: ExcelParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public term_list(): TermContext[] {
		return this.getTypedRuleContexts(TermContext) as TermContext[];
	}
	public term(i: number): TermContext {
		return this.getTypedRuleContext(TermContext, i) as TermContext;
	}
	public numeric_operator_list(): Numeric_operatorContext[] {
		return this.getTypedRuleContexts(Numeric_operatorContext) as Numeric_operatorContext[];
	}
	public numeric_operator(i: number): Numeric_operatorContext {
		return this.getTypedRuleContext(Numeric_operatorContext, i) as Numeric_operatorContext;
	}
	public logic_operator_list(): Logic_operatorContext[] {
		return this.getTypedRuleContexts(Logic_operatorContext) as Logic_operatorContext[];
	}
	public logic_operator(i: number): Logic_operatorContext {
		return this.getTypedRuleContext(Logic_operatorContext, i) as Logic_operatorContext;
	}
    public get ruleIndex(): number {
    	return ExcelParser.RULE_expr;
	}
	public enterRule(listener: ExcelListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: ExcelListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
}
