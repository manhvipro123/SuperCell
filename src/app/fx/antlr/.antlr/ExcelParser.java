// Generated from /Users/manhvipro/Repos/ITSS/Web23S/Exelsis/projects/excelsis/src/lib/fx/antlr/Excel.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ExcelParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ADD=1, SUB=2, MUL=3, DIV=4, EQ=5, NEQ=6, LT=7, GT=8, LTE=9, GTE=10, AND=11, 
		OR=12, NOT=13, XOR=14, LPAREN=15, RPAREN=16, COMMA=17, WS=18, VAR_NAME=19, 
		VAR_RANGE=20, NUMERIC=21, STRING=22, BOOL=23, FN_SUM=24, FN_AVERAGE=25, 
		FN_COUNT=26, FN_MIN=27, FN_MAX=28;
	public static final int
		RULE_formula = 0, RULE_function_name = 1, RULE_function_call = 2, RULE_operand = 3, 
		RULE_numeric_operator = 4, RULE_logic_operator = 5, RULE_term = 6, RULE_expr = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"formula", "function_name", "function_call", "operand", "numeric_operator", 
			"logic_operator", "term", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'+'", "'-'", "'*'", "'/'", "'='", "'!='", "'<'", "'>'", "'<='", 
			"'>='", "'AND'", "'OR'", "'NOT'", "'XOR'", "'('", "')'", "','", null, 
			null, null, null, null, null, "'SUM'", "'AVERAGE'", "'COUNT'", "'MIN'", 
			"'MAX'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "ADD", "SUB", "MUL", "DIV", "EQ", "NEQ", "LT", "GT", "LTE", "GTE", 
			"AND", "OR", "NOT", "XOR", "LPAREN", "RPAREN", "COMMA", "WS", "VAR_NAME", 
			"VAR_RANGE", "NUMERIC", "STRING", "BOOL", "FN_SUM", "FN_AVERAGE", "FN_COUNT", 
			"FN_MIN", "FN_MAX"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Excel.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ExcelParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class FormulaContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(ExcelParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode EOF() { return getToken(ExcelParser.EOF, 0); }
		public FormulaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formula; }
	}

	public final FormulaContext formula() throws RecognitionException {
		FormulaContext _localctx = new FormulaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_formula);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(16);
			match(EQ);
			setState(17);
			expr();
			setState(18);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_nameContext extends ParserRuleContext {
		public TerminalNode FN_SUM() { return getToken(ExcelParser.FN_SUM, 0); }
		public TerminalNode FN_AVERAGE() { return getToken(ExcelParser.FN_AVERAGE, 0); }
		public TerminalNode FN_COUNT() { return getToken(ExcelParser.FN_COUNT, 0); }
		public TerminalNode FN_MIN() { return getToken(ExcelParser.FN_MIN, 0); }
		public TerminalNode FN_MAX() { return getToken(ExcelParser.FN_MAX, 0); }
		public Function_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_name; }
	}

	public final Function_nameContext function_name() throws RecognitionException {
		Function_nameContext _localctx = new Function_nameContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_function_name);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(20);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FN_SUM) | (1L << FN_AVERAGE) | (1L << FN_COUNT) | (1L << FN_MIN) | (1L << FN_MAX))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_callContext extends ParserRuleContext {
		public Function_nameContext function_name() {
			return getRuleContext(Function_nameContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(ExcelParser.LPAREN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(ExcelParser.RPAREN, 0); }
		public List<TerminalNode> COMMA() { return getTokens(ExcelParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ExcelParser.COMMA, i);
		}
		public Function_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_call; }
	}

	public final Function_callContext function_call() throws RecognitionException {
		Function_callContext _localctx = new Function_callContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_function_call);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(22);
			function_name();
			setState(23);
			match(LPAREN);
			setState(24);
			expr();
			setState(29);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(25);
				match(COMMA);
				setState(26);
				expr();
				}
				}
				setState(31);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(32);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperandContext extends ParserRuleContext {
		public TerminalNode VAR_NAME() { return getToken(ExcelParser.VAR_NAME, 0); }
		public TerminalNode VAR_RANGE() { return getToken(ExcelParser.VAR_RANGE, 0); }
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public TerminalNode STRING() { return getToken(ExcelParser.STRING, 0); }
		public TerminalNode BOOL() { return getToken(ExcelParser.BOOL, 0); }
		public TerminalNode NUMERIC() { return getToken(ExcelParser.NUMERIC, 0); }
		public OperandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operand; }
	}

	public final OperandContext operand() throws RecognitionException {
		OperandContext _localctx = new OperandContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_operand);
		try {
			setState(40);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VAR_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(34);
				match(VAR_NAME);
				}
				break;
			case VAR_RANGE:
				enterOuterAlt(_localctx, 2);
				{
				setState(35);
				match(VAR_RANGE);
				}
				break;
			case FN_SUM:
			case FN_AVERAGE:
			case FN_COUNT:
			case FN_MIN:
			case FN_MAX:
				enterOuterAlt(_localctx, 3);
				{
				setState(36);
				function_call();
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 4);
				{
				setState(37);
				match(STRING);
				}
				break;
			case BOOL:
				enterOuterAlt(_localctx, 5);
				{
				setState(38);
				match(BOOL);
				}
				break;
			case NUMERIC:
				enterOuterAlt(_localctx, 6);
				{
				setState(39);
				match(NUMERIC);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Numeric_operatorContext extends ParserRuleContext {
		public TerminalNode ADD() { return getToken(ExcelParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(ExcelParser.SUB, 0); }
		public TerminalNode MUL() { return getToken(ExcelParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(ExcelParser.DIV, 0); }
		public Numeric_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numeric_operator; }
	}

	public final Numeric_operatorContext numeric_operator() throws RecognitionException {
		Numeric_operatorContext _localctx = new Numeric_operatorContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_numeric_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ADD) | (1L << SUB) | (1L << MUL) | (1L << DIV))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Logic_operatorContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(ExcelParser.EQ, 0); }
		public TerminalNode NEQ() { return getToken(ExcelParser.NEQ, 0); }
		public TerminalNode LT() { return getToken(ExcelParser.LT, 0); }
		public TerminalNode GT() { return getToken(ExcelParser.GT, 0); }
		public TerminalNode LTE() { return getToken(ExcelParser.LTE, 0); }
		public TerminalNode GTE() { return getToken(ExcelParser.GTE, 0); }
		public TerminalNode AND() { return getToken(ExcelParser.AND, 0); }
		public TerminalNode OR() { return getToken(ExcelParser.OR, 0); }
		public TerminalNode XOR() { return getToken(ExcelParser.XOR, 0); }
		public TerminalNode NOT() { return getToken(ExcelParser.NOT, 0); }
		public Logic_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logic_operator; }
	}

	public final Logic_operatorContext logic_operator() throws RecognitionException {
		Logic_operatorContext _localctx = new Logic_operatorContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_logic_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQ) | (1L << NEQ) | (1L << LT) | (1L << GT) | (1L << LTE) | (1L << GTE) | (1L << AND) | (1L << OR) | (1L << NOT) | (1L << XOR))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TermContext extends ParserRuleContext {
		public OperandContext operand() {
			return getRuleContext(OperandContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(ExcelParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ExcelParser.RPAREN, 0); }
		public TerminalNode SUB() { return getToken(ExcelParser.SUB, 0); }
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_term);
		try {
			setState(53);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VAR_NAME:
			case VAR_RANGE:
			case NUMERIC:
			case STRING:
			case BOOL:
			case FN_SUM:
			case FN_AVERAGE:
			case FN_COUNT:
			case FN_MIN:
			case FN_MAX:
				enterOuterAlt(_localctx, 1);
				{
				setState(46);
				operand();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(47);
				match(LPAREN);
				setState(48);
				expr();
				setState(49);
				match(RPAREN);
				}
				break;
			case SUB:
				enterOuterAlt(_localctx, 3);
				{
				setState(51);
				match(SUB);
				setState(52);
				expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public List<Numeric_operatorContext> numeric_operator() {
			return getRuleContexts(Numeric_operatorContext.class);
		}
		public Numeric_operatorContext numeric_operator(int i) {
			return getRuleContext(Numeric_operatorContext.class,i);
		}
		public List<Logic_operatorContext> logic_operator() {
			return getRuleContexts(Logic_operatorContext.class);
		}
		public Logic_operatorContext logic_operator(int i) {
			return getRuleContext(Logic_operatorContext.class,i);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_expr);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			term();
			setState(61);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(56);
					numeric_operator();
					setState(57);
					term();
					}
					} 
				}
				setState(63);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			setState(69);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(64);
					logic_operator();
					setState(65);
					term();
					}
					} 
				}
				setState(71);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\36K\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\3\2\3\2\3\2\3\2\3\3"+
		"\3\3\3\4\3\4\3\4\3\4\3\4\7\4\36\n\4\f\4\16\4!\13\4\3\4\3\4\3\5\3\5\3\5"+
		"\3\5\3\5\3\5\5\5+\n\5\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b"+
		"8\n\b\3\t\3\t\3\t\3\t\7\t>\n\t\f\t\16\tA\13\t\3\t\3\t\3\t\7\tF\n\t\f\t"+
		"\16\tI\13\t\3\t\2\2\n\2\4\6\b\n\f\16\20\2\5\3\2\32\36\3\2\3\6\3\2\7\20"+
		"\2L\2\22\3\2\2\2\4\26\3\2\2\2\6\30\3\2\2\2\b*\3\2\2\2\n,\3\2\2\2\f.\3"+
		"\2\2\2\16\67\3\2\2\2\209\3\2\2\2\22\23\7\7\2\2\23\24\5\20\t\2\24\25\7"+
		"\2\2\3\25\3\3\2\2\2\26\27\t\2\2\2\27\5\3\2\2\2\30\31\5\4\3\2\31\32\7\21"+
		"\2\2\32\37\5\20\t\2\33\34\7\23\2\2\34\36\5\20\t\2\35\33\3\2\2\2\36!\3"+
		"\2\2\2\37\35\3\2\2\2\37 \3\2\2\2 \"\3\2\2\2!\37\3\2\2\2\"#\7\22\2\2#\7"+
		"\3\2\2\2$+\7\25\2\2%+\7\26\2\2&+\5\6\4\2\'+\7\30\2\2(+\7\31\2\2)+\7\27"+
		"\2\2*$\3\2\2\2*%\3\2\2\2*&\3\2\2\2*\'\3\2\2\2*(\3\2\2\2*)\3\2\2\2+\t\3"+
		"\2\2\2,-\t\3\2\2-\13\3\2\2\2./\t\4\2\2/\r\3\2\2\2\608\5\b\5\2\61\62\7"+
		"\21\2\2\62\63\5\20\t\2\63\64\7\22\2\2\648\3\2\2\2\65\66\7\4\2\2\668\5"+
		"\20\t\2\67\60\3\2\2\2\67\61\3\2\2\2\67\65\3\2\2\28\17\3\2\2\29?\5\16\b"+
		"\2:;\5\n\6\2;<\5\16\b\2<>\3\2\2\2=:\3\2\2\2>A\3\2\2\2?=\3\2\2\2?@\3\2"+
		"\2\2@G\3\2\2\2A?\3\2\2\2BC\5\f\7\2CD\5\16\b\2DF\3\2\2\2EB\3\2\2\2FI\3"+
		"\2\2\2GE\3\2\2\2GH\3\2\2\2H\21\3\2\2\2IG\3\2\2\2\7\37*\67?G";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}