// Generated from Excel.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


import { FormulaContext } from "./ExcelParser";
import { Function_nameContext } from "./ExcelParser";
import { Function_callContext } from "./ExcelParser";
import { OperandContext } from "./ExcelParser";
import { Numeric_operatorContext } from "./ExcelParser";
import { Logic_operatorContext } from "./ExcelParser";
import { TermContext } from "./ExcelParser";
import { ExprContext } from "./ExcelParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ExcelParser`.
 */
export default class ExcelListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ExcelParser.formula`.
	 * @param ctx the parse tree
	 */
	enterFormula?: (ctx: FormulaContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.formula`.
	 * @param ctx the parse tree
	 */
	exitFormula?: (ctx: FormulaContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.function_name`.
	 * @param ctx the parse tree
	 */
	enterFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.function_name`.
	 * @param ctx the parse tree
	 */
	exitFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.operand`.
	 * @param ctx the parse tree
	 */
	enterOperand?: (ctx: OperandContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.operand`.
	 * @param ctx the parse tree
	 */
	exitOperand?: (ctx: OperandContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.numeric_operator`.
	 * @param ctx the parse tree
	 */
	enterNumeric_operator?: (ctx: Numeric_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.numeric_operator`.
	 * @param ctx the parse tree
	 */
	exitNumeric_operator?: (ctx: Numeric_operatorContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.logic_operator`.
	 * @param ctx the parse tree
	 */
	enterLogic_operator?: (ctx: Logic_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.logic_operator`.
	 * @param ctx the parse tree
	 */
	exitLogic_operator?: (ctx: Logic_operatorContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;
	/**
	 * Enter a parse tree produced by `ExcelParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

