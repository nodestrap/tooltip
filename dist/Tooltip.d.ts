/// <reference types="react" />
import { PopupPlacement, PopupModifier, PopupPosition, PopupProps } from '@nodestrap/popup';
export declare const usesTooltipLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesTooltipVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesTooltipStates: () => import("@cssfn/cssfn").Rule;
export declare const useTooltipSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    boxShadow: (string | number)[][];
    margin: string;
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
    boxShadow: (string | number)[][];
    margin: string;
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
    boxShadow: (string | number)[][];
    margin: string;
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
export interface TooltipProps<TElement extends HTMLElement = HTMLElement> extends PopupProps<TElement> {
    activeDelay?: number;
    passiveDelay?: number;
}
export declare function Tooltip<TElement extends HTMLElement = HTMLElement>(props: TooltipProps<TElement>): JSX.Element;
export { Tooltip as default };
export type { PopupPlacement, PopupModifier, PopupPosition };
