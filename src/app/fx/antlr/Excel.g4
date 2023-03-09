grammar Excel;

formula: EQ expr EOF;
function_name: FN_SUM | FN_AVERAGE | FN_COUNT | FN_MIN | FN_MAX;
function_call: function_name LPAREN expr (COMMA expr)* RPAREN;
operand:
	VAR_NAME
	| VAR_RANGE
	| function_call
	| STRING
	| BOOL
	| NUMERIC;
numeric_operator: ADD | SUB | MUL | DIV;
logic_operator:
	EQ
	| NEQ
	| LT
	| GT
	| LTE
	| GTE
	| AND
	| OR
	| XOR
	| NOT;
term: operand | LPAREN expr RPAREN | SUB expr;
expr: term (numeric_operator term)* (logic_operator term)*;

ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';
EQ: '=';
NEQ: '!=';
LT: '<';
GT: '>';
LTE: '<=';
GTE: '>=';

AND: 'AND';
OR: 'OR';
NOT: 'NOT';
XOR: 'XOR';

LPAREN: '(';
RPAREN: ')';
fragment COLON: ':';
COMMA: ',';

WS: [ \t\n]+ -> skip;

fragment VAR_COL: [A-Z]+;
fragment VAR_ROW: [1-9][0-9]*;
VAR_NAME: VAR_COL VAR_ROW;
VAR_RANGE: VAR_NAME COLON VAR_NAME;

fragment INT: [-]? [1-9][0-9]*;
fragment NUM: [0-9]+;
fragment DEC: '.' NUM;
NUMERIC: INT (DEC)?;
STRING: '"' (~["])* '"';
BOOL: 'TRUE' | 'FALSE' | 'true' | 'false';

FN_SUM: 'SUM';
FN_AVERAGE: 'AVERAGE';
FN_COUNT: 'COUNT';
FN_MIN: 'MIN';
FN_MAX: 'MAX';