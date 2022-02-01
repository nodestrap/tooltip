// react:
import { default as React, useState, useEffect, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
mainComposition, 
// styles:
style, imports, 
// rules:
rule, rules, 
//combinators:
children, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesPrefixedProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import typos from '@nodestrap/typos'; // configurable typography (texting) defs
// nodestrap components:
import { 
// hooks:
usesSizeVariant, usesBackg, usesBorder, usesBorderStroke, expandBorderStroke, } from '@nodestrap/basic';
import { 
// styles:
usesPopupLayout, usesPopupVariants, usesPopupStates, Popup, } from '@nodestrap/popup';
// utilities:
const isEnabled = (target) => {
    if (!target)
        return false; // if no target => assumes target as disabled
    return !target.matches(':disabled, .disable, .disabled');
};
// styles:
const arrowWrapperElm = '[data-popper-arrow]';
const arrowElm = '::before';
export const usesTooltipLayout = () => {
    // dependencies:
    // colors:
    const [, backgRefs] = usesBackg();
    const [border] = usesBorder();
    // borders:
    const [borderStroke] = usesBorderStroke();
    return style({
        ...imports([
            // layouts:
            usesPopupLayout(),
        ]),
        ...style({
            // children:
            ...children(arrowWrapperElm, {
                // children:
                ...children(arrowElm, {
                    ...imports([
                        // colors:
                        border(),
                        // borders:
                        borderStroke(),
                    ]),
                    ...style({
                        // layouts:
                        display: 'block',
                        content: '""',
                        // backgrounds:
                        backg: backgRefs.backg,
                        // borders:
                        ...expandBorderStroke(),
                        borderInlineStartColor: 'transparent',
                        borderBlockStartColor: 'transparent',
                        // customize:
                        ...usesGeneralProps(usesPrefixedProps(cssProps, 'arrow')), // apply general cssProps starting with arrow***
                    }),
                }),
            }),
            ...rules([
                ...['top', 'bottom', 'left', 'right'].map((tooltipPos) => rule(`[data-popper-placement^="${tooltipPos}"]>&`, {
                    // children:
                    ...children(arrowWrapperElm, {
                        [tooltipPos]: 'calc(100% - 0.7px)',
                        // children:
                        ...children(arrowElm, {
                            // customize:
                            ...usesGeneralProps(usesPrefixedProps(usesPrefixedProps(cssProps, 'arrow'), tooltipPos)), // apply general cssProps starting with arrow*** and then starting with ***${tooltipPos}
                        }),
                    }),
                })),
            ]),
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
    });
};
export const usesTooltipVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }));
    return style({
        ...imports([
            // variants:
            usesPopupVariants(),
            // layouts:
            sizes(),
        ]),
    });
};
export const usesTooltipStates = () => {
    return style({
        ...imports([
            // states:
            usesPopupStates(),
        ]),
    });
};
export const useTooltipSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesTooltipLayout(),
        // variants:
        usesTooltipVariants(),
        // states:
        usesTooltipStates(),
    ])),
], /*sheetId :*/ '3h41koviqh'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        // backgrounds:
        boxShadow: [[0, 0, '10px', 'rgba(0,0,0,0.5)']],
        // spacings:
        margin: '0.6rem',
        // typos:
        whiteSpace: 'nowrap',
        fontSize: [['calc((', typos.fontSizeSm, '+', typos.fontSizeNm, ')/2)']],
        fontSizeSm: typos.fontSizeSm,
        fontSizeLg: typos.fontSizeNm,
        // sizes:
        arrowInlineSize: '0.8rem',
        arrowBlockSize: '0.8rem',
        arrowClipPath: 'polygon(100% 0%,100% 100%,0 100%)',
        arrowTopTransform: [['scaleX(0.7)', 'translateY(-50%)', 'rotate(45deg)']],
        arrowRightTransform: [['scaleY(0.7)', 'translateX(50%)', 'rotate(135deg)']],
        arrowBottomTransform: [['scaleX(0.7)', 'translateY(50%)', 'rotate(225deg)']],
        arrowLeftTransform: [['scaleY(0.7)', 'translateX(-50%)', 'rotate(315deg)']],
    };
}, { prefix: 'ttip' });
export function Tooltip(props) {
    // styles:
    const sheet = useTooltipSheet();
    // states:
    const [isHover, setIsHover] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [activeDn, setActiveDn] = useState(false); // instant  active
    const [activeDb, setActiveDb] = useState(false); // debounce active
    // rest props:
    const { 
    // accessibilities:
    active, // from accessibilities
    inheritActive, // from accessibilities
    // debounces:
    activeDelay = 300, passiveDelay = 500, ...restProps } = props;
    // fn props:
    const newActiveDn = (isHover || isFocus) && isEnabled((props.targetRef instanceof HTMLElement) ? props.targetRef : props.targetRef?.current);
    if (activeDn !== newActiveDn) { // change detected => apply the change
        setActiveDn(newActiveDn); // remember the last change
    }
    const activeFn = (active // controllable active
        ??
            (!!(props.children ?? false) // tootlip has a content
                &&
                    activeDn // uncontrollable active
            ));
    const enableDebounce = (activeDelay > 0) || (passiveDelay > 0);
    useEffect(() => {
        if (!enableDebounce)
            return;
        // setups:
        const delay = (activeFn ? activeDelay : passiveDelay);
        const timeoutHandler = ((delay > 0)
            ?
                // asynchronous:
                setTimeout(() => {
                    setActiveDb(activeFn);
                }, delay)
            :
                // synchronous:
                (() => {
                    setActiveDb(activeFn);
                    return null;
                })());
        // cleanups:
        return () => {
            if (timeoutHandler)
                clearTimeout(timeoutHandler); // cancel the `setTimeout` (if not too late)
        };
    }, [activeFn, enableDebounce, activeDelay, passiveDelay]); // (re)run the setups & cleanups on every time the `activeFn` changes
    const activeDbFn = enableDebounce ? activeDb : activeFn;
    // dom effects:
    useEffect(() => {
        if (active !== undefined)
            return; // controllable [active] was set => no uncontrollable manipulation required
        const target = (props.targetRef instanceof HTMLElement) ? props.targetRef : props.targetRef?.current;
        if (!target)
            return; // target was not set => nothing to do
        // handlers:
        const handleHover = () => {
            if (!isEnabled(target))
                return; // control is disabled => no response required
            setIsHover(true);
        };
        const handleLeave = () => {
            if (!isEnabled(target))
                return; // control is disabled => no response required
            setIsHover(false);
        };
        const handleFocus = () => {
            if (!isEnabled(target))
                return; // control is disabled => no response required
            setIsFocus(true);
        };
        const handleBlur = () => {
            if (!isEnabled(target))
                return; // control is disabled => no response required
            setIsFocus(false);
        };
        // setups:
        target.addEventListener('mouseenter', handleHover);
        target.addEventListener('mouseleave', handleLeave);
        target.addEventListener('focus', handleFocus, { capture: true }); // force `focus` as bubbling
        target.addEventListener('blur', handleBlur, { capture: true }); // force `blur` as bubbling
        // cleanups:
        return () => {
            target.removeEventListener('mouseenter', handleHover);
            target.removeEventListener('mouseleave', handleLeave);
            target.removeEventListener('focus', handleFocus, { capture: true });
            target.removeEventListener('blur', handleBlur, { capture: true });
        };
    }, [active, props.targetRef]); // (re)run the setups & cleanups on every time the `active` & tooltip's target changes
    // jsx:
    return (React.createElement(Popup, { ...restProps, 
        // semantics:
        semanticTag: props.semanticTag ?? [null], semanticRole: props.semanticRole ?? 'tooltip', ...{
            active: activeDbFn,
            inheritActive: false,
        }, 
        // popups:
        popupPlacement: props.popupPlacement ?? 'top', 
        // classes:
        mainClass: props.mainClass ?? sheet.main },
        props.children,
        React.createElement("div", { "aria-hidden": true, "data-popper-arrow": true })));
}
export { Tooltip as default };
