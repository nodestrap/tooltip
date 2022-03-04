/// <reference types="react" />
import { PopupPlacement, PopupMiddleware, PopupStrategy, PopupProps } from '@nodestrap/popup';
export declare const usesTooltipLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesTooltipVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesTooltipStates: () => import("@cssfn/cssfn").Rule;
export declare const useTooltipSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    arrowInlineSizeSm: string[][];
    arrowBlockSizeSm: string[][];
    arrowInlineSizeLg: string[][];
    arrowBlockSizeLg: string[][];
    boxShadow: (string | number)[][];
    whiteSpace: string;
    fontSize: string[][];
    fontSizeSm: import("@cssfn/css-types").Cust.Ref;
    fontSizeLg: import("@cssfn/css-types").Cust.Ref;
    arrowInlineSize: string;
    arrowBlockSize: string;
    arrowClipPath: string;
    arrowTopTransform: string[][];
    arrowRightTransform: string[][];
    arrowBottomTransform: string[][];
    arrowLeftTransform: string[][];
}>, cssDecls: import("@cssfn/css-config").Decls<{
    arrowInlineSizeSm: string[][];
    arrowBlockSizeSm: string[][];
    arrowInlineSizeLg: string[][];
    arrowBlockSizeLg: string[][];
    boxShadow: (string | number)[][];
    whiteSpace: string;
    fontSize: string[][];
    fontSizeSm: import("@cssfn/css-types").Cust.Ref;
    fontSizeLg: import("@cssfn/css-types").Cust.Ref;
    arrowInlineSize: string;
    arrowBlockSize: string;
    arrowClipPath: string;
    arrowTopTransform: string[][];
    arrowRightTransform: string[][];
    arrowBottomTransform: string[][];
    arrowLeftTransform: string[][];
}>, cssVals: import("@cssfn/css-config").Vals<{
    arrowInlineSizeSm: string[][];
    arrowBlockSizeSm: string[][];
    arrowInlineSizeLg: string[][];
    arrowBlockSizeLg: string[][];
    boxShadow: (string | number)[][];
    whiteSpace: string;
    fontSize: string[][];
    fontSizeSm: import("@cssfn/css-types").Cust.Ref;
    fontSizeLg: import("@cssfn/css-types").Cust.Ref;
    arrowInlineSize: string;
    arrowBlockSize: string;
    arrowClipPath: string;
    arrowTopTransform: string[][];
    arrowRightTransform: string[][];
    arrowBottomTransform: string[][];
    arrowLeftTransform: string[][];
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface CalculateArrowSizeProps {
    arrow: HTMLElement;
    placement: PopupPlacement;
}
export declare type CalculateArrowSize = (props: CalculateArrowSizeProps) => Promise<readonly [number, number]>;
export interface TooltipProps<TElement extends HTMLElement = HTMLElement> extends PopupProps<TElement> {
    unsafe_calculateArrowSize?: CalculateArrowSize;
    activeDelay?: number;
    passiveDelay?: number;
}
export declare function Tooltip<TElement extends HTMLElement = HTMLElement>(props: TooltipProps<TElement>): JSX.Element;
export { Tooltip as default };
export type { PopupPlacement, PopupMiddleware, PopupStrategy };
