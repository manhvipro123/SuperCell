// Generated from /Users/manhvipro/Repos/ITSS/Web23S/Exelsis/projects/excelsis/src/lib/fx/antlr/Excel.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ExcelLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ADD=1, SUB=2, MUL=3, DIV=4, EQ=5, NEQ=6, LT=7, GT=8, LTE=9, GTE=10, AND=11, 
		OR=12, NOT=13, XOR=14, LPAREN=15, RPAREN=16, COMMA=17, WS=18, VAR_NAME=19, 
		VAR_RANGE=20, NUMERIC=21, STRING=22, BOOL=23, FN_SUM=24, FN_AVERAGE=25, 
		FN_COUNT=26, FN_MIN=27, FN_MAX=28;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"ADD", "SUB", "MUL", "DIV", "EQ", "NEQ", "LT", "GT", "LTE", "GTE", "AND", 
			"OR", "NOT", "XOR", "LPAREN", "RPAREN", "COLON", "COMMA", "WS", "VAR_COL", 
			"VAR_ROW", "VAR_NAME", "VAR_RANGE", "INT", "NUM", "DEC", "NUMERIC", "STRING", 
			"BOOL", "FN_SUM", "FN_AVERAGE", "FN_COUNT", "FN_MIN", "FN_MAX"
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


	public ExcelLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Excel.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\36\u00dc\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7"+
		"\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\n\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\r\3"+
		"\r\3\r\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\20\3\20\3\21\3\21\3\22"+
		"\3\22\3\23\3\23\3\24\6\24w\n\24\r\24\16\24x\3\24\3\24\3\25\6\25~\n\25"+
		"\r\25\16\25\177\3\26\3\26\7\26\u0084\n\26\f\26\16\26\u0087\13\26\3\27"+
		"\3\27\3\27\3\30\3\30\3\30\3\30\3\31\5\31\u0091\n\31\3\31\3\31\7\31\u0095"+
		"\n\31\f\31\16\31\u0098\13\31\3\32\6\32\u009b\n\32\r\32\16\32\u009c\3\33"+
		"\3\33\3\33\3\34\3\34\5\34\u00a4\n\34\3\35\3\35\7\35\u00a8\n\35\f\35\16"+
		"\35\u00ab\13\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36"+
		"\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\5\36\u00c1\n\36\3\37\3\37"+
		"\3\37\3\37\3 \3 \3 \3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3"+
		"#\3#\3#\3#\2\2$\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31"+
		"\16\33\17\35\20\37\21!\22#\2%\23\'\24)\2+\2-\25/\26\61\2\63\2\65\2\67"+
		"\279\30;\31=\32?\33A\34C\35E\36\3\2\b\4\2\13\f\"\"\3\2C\\\3\2\63;\3\2"+
		"\62;\3\2//\3\2$$\2\u00e0\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2"+
		"\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25"+
		"\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2"+
		"\2\2\2!\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\67\3\2"+
		"\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2"+
		"\2E\3\2\2\2\3G\3\2\2\2\5I\3\2\2\2\7K\3\2\2\2\tM\3\2\2\2\13O\3\2\2\2\r"+
		"Q\3\2\2\2\17T\3\2\2\2\21V\3\2\2\2\23X\3\2\2\2\25[\3\2\2\2\27^\3\2\2\2"+
		"\31b\3\2\2\2\33e\3\2\2\2\35i\3\2\2\2\37m\3\2\2\2!o\3\2\2\2#q\3\2\2\2%"+
		"s\3\2\2\2\'v\3\2\2\2)}\3\2\2\2+\u0081\3\2\2\2-\u0088\3\2\2\2/\u008b\3"+
		"\2\2\2\61\u0090\3\2\2\2\63\u009a\3\2\2\2\65\u009e\3\2\2\2\67\u00a1\3\2"+
		"\2\29\u00a5\3\2\2\2;\u00c0\3\2\2\2=\u00c2\3\2\2\2?\u00c6\3\2\2\2A\u00ce"+
		"\3\2\2\2C\u00d4\3\2\2\2E\u00d8\3\2\2\2GH\7-\2\2H\4\3\2\2\2IJ\7/\2\2J\6"+
		"\3\2\2\2KL\7,\2\2L\b\3\2\2\2MN\7\61\2\2N\n\3\2\2\2OP\7?\2\2P\f\3\2\2\2"+
		"QR\7#\2\2RS\7?\2\2S\16\3\2\2\2TU\7>\2\2U\20\3\2\2\2VW\7@\2\2W\22\3\2\2"+
		"\2XY\7>\2\2YZ\7?\2\2Z\24\3\2\2\2[\\\7@\2\2\\]\7?\2\2]\26\3\2\2\2^_\7C"+
		"\2\2_`\7P\2\2`a\7F\2\2a\30\3\2\2\2bc\7Q\2\2cd\7T\2\2d\32\3\2\2\2ef\7P"+
		"\2\2fg\7Q\2\2gh\7V\2\2h\34\3\2\2\2ij\7Z\2\2jk\7Q\2\2kl\7T\2\2l\36\3\2"+
		"\2\2mn\7*\2\2n \3\2\2\2op\7+\2\2p\"\3\2\2\2qr\7<\2\2r$\3\2\2\2st\7.\2"+
		"\2t&\3\2\2\2uw\t\2\2\2vu\3\2\2\2wx\3\2\2\2xv\3\2\2\2xy\3\2\2\2yz\3\2\2"+
		"\2z{\b\24\2\2{(\3\2\2\2|~\t\3\2\2}|\3\2\2\2~\177\3\2\2\2\177}\3\2\2\2"+
		"\177\u0080\3\2\2\2\u0080*\3\2\2\2\u0081\u0085\t\4\2\2\u0082\u0084\t\5"+
		"\2\2\u0083\u0082\3\2\2\2\u0084\u0087\3\2\2\2\u0085\u0083\3\2\2\2\u0085"+
		"\u0086\3\2\2\2\u0086,\3\2\2\2\u0087\u0085\3\2\2\2\u0088\u0089\5)\25\2"+
		"\u0089\u008a\5+\26\2\u008a.\3\2\2\2\u008b\u008c\5-\27\2\u008c\u008d\5"+
		"#\22\2\u008d\u008e\5-\27\2\u008e\60\3\2\2\2\u008f\u0091\t\6\2\2\u0090"+
		"\u008f\3\2\2\2\u0090\u0091\3\2\2\2\u0091\u0092\3\2\2\2\u0092\u0096\t\4"+
		"\2\2\u0093\u0095\t\5\2\2\u0094\u0093\3\2\2\2\u0095\u0098\3\2\2\2\u0096"+
		"\u0094\3\2\2\2\u0096\u0097\3\2\2\2\u0097\62\3\2\2\2\u0098\u0096\3\2\2"+
		"\2\u0099\u009b\t\5\2\2\u009a\u0099\3\2\2\2\u009b\u009c\3\2\2\2\u009c\u009a"+
		"\3\2\2\2\u009c\u009d\3\2\2\2\u009d\64\3\2\2\2\u009e\u009f\7\60\2\2\u009f"+
		"\u00a0\5\63\32\2\u00a0\66\3\2\2\2\u00a1\u00a3\5\61\31\2\u00a2\u00a4\5"+
		"\65\33\2\u00a3\u00a2\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a48\3\2\2\2\u00a5"+
		"\u00a9\7$\2\2\u00a6\u00a8\n\7\2\2\u00a7\u00a6\3\2\2\2\u00a8\u00ab\3\2"+
		"\2\2\u00a9\u00a7\3\2\2\2\u00a9\u00aa\3\2\2\2\u00aa\u00ac\3\2\2\2\u00ab"+
		"\u00a9\3\2\2\2\u00ac\u00ad\7$\2\2\u00ad:\3\2\2\2\u00ae\u00af\7V\2\2\u00af"+
		"\u00b0\7T\2\2\u00b0\u00b1\7W\2\2\u00b1\u00c1\7G\2\2\u00b2\u00b3\7H\2\2"+
		"\u00b3\u00b4\7C\2\2\u00b4\u00b5\7N\2\2\u00b5\u00b6\7U\2\2\u00b6\u00c1"+
		"\7G\2\2\u00b7\u00b8\7v\2\2\u00b8\u00b9\7t\2\2\u00b9\u00ba\7w\2\2\u00ba"+
		"\u00c1\7g\2\2\u00bb\u00bc\7h\2\2\u00bc\u00bd\7c\2\2\u00bd\u00be\7n\2\2"+
		"\u00be\u00bf\7u\2\2\u00bf\u00c1\7g\2\2\u00c0\u00ae\3\2\2\2\u00c0\u00b2"+
		"\3\2\2\2\u00c0\u00b7\3\2\2\2\u00c0\u00bb\3\2\2\2\u00c1<\3\2\2\2\u00c2"+
		"\u00c3\7U\2\2\u00c3\u00c4\7W\2\2\u00c4\u00c5\7O\2\2\u00c5>\3\2\2\2\u00c6"+
		"\u00c7\7C\2\2\u00c7\u00c8\7X\2\2\u00c8\u00c9\7G\2\2\u00c9\u00ca\7T\2\2"+
		"\u00ca\u00cb\7C\2\2\u00cb\u00cc\7I\2\2\u00cc\u00cd\7G\2\2\u00cd@\3\2\2"+
		"\2\u00ce\u00cf\7E\2\2\u00cf\u00d0\7Q\2\2\u00d0\u00d1\7W\2\2\u00d1\u00d2"+
		"\7P\2\2\u00d2\u00d3\7V\2\2\u00d3B\3\2\2\2\u00d4\u00d5\7O\2\2\u00d5\u00d6"+
		"\7K\2\2\u00d6\u00d7\7P\2\2\u00d7D\3\2\2\2\u00d8\u00d9\7O\2\2\u00d9\u00da"+
		"\7C\2\2\u00da\u00db\7Z\2\2\u00dbF\3\2\2\2\f\2x\177\u0085\u0090\u0096\u009c"+
		"\u00a3\u00a9\u00c0\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}