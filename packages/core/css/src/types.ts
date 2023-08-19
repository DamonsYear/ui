import CSS from "csstype";

export type ComponentBaseCSS = Omit<
  CSS.Properties<string | number>,
  "translate"
>;

/**
 * NOTE: 다음은 기본적으로 -를 한 번 더 붙이도록 transform 시켜야 한다.
 * moz
 * khtml
 *webkit
 * ms
 *
 */
export type PseudoPropKeys = BasePseudosPropKeys & AdvancedPseudosPropKeys;

export type BasePseudosPropKeys =
  | "_khtml-any-link"
  | "_moz-any-link"
  | "_moz-focusring"
  | "_moz-full-screen"
  | "_moz-placeholder"
  | "_moz-read-only"
  | "_moz-read-write"
  | "_moz-ui-invalid"
  | "_moz-ui-valid"
  | "_ms-fullscreen"
  | "_ms-input-placeholder"
  | "_webkit-any-link"
  | "_webkit-full-screen"
  | "__moz-placeholder"
  | "__moz-progress-bar"
  | "__moz-range-progress"
  | "__moz-range-thumb"
  | "__moz-range-track"
  | "__moz-selection"
  | "__ms-backdrop"
  | "__ms-browse"
  | "__ms-check"
  | "__ms-clear"
  | "__ms-expand"
  | "__ms-fill"
  | "__ms-fill-lower"
  | "__ms-fill-upper"
  | "__ms-input-placeholder"
  | "__ms-reveal"
  | "__ms-thumb"
  | "__ms-ticks-after"
  | "__ms-ticks-before"
  | "__ms-tooltip"
  | "__ms-track"
  | "__ms-value"
  | "__webkit-backdrop"
  | "__webkit-input-placeholder"
  | "__webkit-progress-bar"
  | "__webkit-progress-inner-value"
  | "__webkit-progress-value"
  | "__webkit-slider-runnable-track"
  | "__webkit-slider-thumb"
  | "__after"
  | "__backdrop"
  | "__before"
  | "__cue"
  | "__cue-region"
  | "__first-letter"
  | "__first-line"
  | "__grammar-error"
  | "__marker"
  | "__placeholder"
  | "__selection"
  | "__spelling-error"
  | "__target-text"
  | "__view-transition"
  | "_active"
  | "_after"
  | "_any-link"
  | "_before"
  | "_blank"
  | "_checked"
  | "_current"
  | "_default"
  | "_defined"
  | "_disabled"
  | "_empty"
  | "_enabled"
  | "_first"
  | "_first-child"
  | "_first-letter"
  | "_first-line"
  | "_first-of-type"
  | "_focus"
  | "_focus-visible"
  | "_focus-within"
  | "_fullscreen"
  | "_future"
  | "_hover"
  | "_in-range"
  | "_indeterminate"
  | "_invalid"
  | "_last-child"
  | "_last-of-type"
  | "_left"
  | "_link"
  | "_local-link"
  | "_nth-col"
  | "_nth-last-col"
  | "_only-child"
  | "_only-of-type"
  | "_optional"
  | "_out-of-range"
  | "_past"
  | "_paused"
  | "_picture-in-picture"
  | "_placeholder-shown"
  | "_playing"
  | "_read-only"
  | "_read-write"
  | "_required"
  | "_right"
  | "_root"
  | "_scope"
  | "_target"
  | "_target-within"
  | "_user-invalid"
  | "_user-valid"
  | "_valid"
  | "_visited";

export type AdvancedPseudosPropKeys =
  | "_moz-any()"
  | "_moz-dir"
  | "_webkit-any()"
  | "__cue"
  | "__cue-region"
  | "__part"
  | "__slotted"
  | "__view-transition-group"
  | "__view-transition-image-pair"
  | "__view-transition-new"
  | "__view-transition-old"
  | "_dir"
  | "_has"
  | "_host"
  | "_host-context"
  | "_is"
  | "_lang"
  | "_matches()"
  | "_not"
  | "_nth-child"
  | "_nth-last-child"
  | "_nth-last-of-type"
  | "_nth-of-type"
  | "_where";

export type ComponentPseudoCSS = ComponentBaseCSS & {
  [P in PseudoPropKeys]?: ComponentBaseCSS;
};

export type CSSProps = ComponentBaseCSS & ComponentPseudoCSS;
