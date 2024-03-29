import { PseudoPropKeys } from "./types";
import { AdvancedPseudosPropKeys } from "./types";

export const BasePseudoSet = new Set<PseudoPropKeys>([
  "_khtmlAnyLink",
  "_mozAnyLink",
  "_mozFocusring",
  "_mozFullScreen",
  "_mozPlaceholder",
  "_mozReadOnly",
  "_mozReadWrite",
  "_mozUiInvalid",
  "_mozUiValid",
  "_msFullscreen",
  "_msInputPlaceholder",
  "_webkitAnyLink",
  "_webkitFullScreen",
  "__mozPlaceholder",
  "__mozProgressBar",
  "__mozRangeProgress",
  "__mozRangeThumb",
  "__mozRangeTrack",
  "__mozSelection",
  "__msBackdrop",
  "__msBrowse",
  "__msCheck",
  "__msClear",
  "__msExpand",
  "__msFill",
  "__msFillLower",
  "__msFillUpper",
  "__msInputPlaceholder",
  "__msReveal",
  "__msThumb",
  "__msTicksAfter",
  "__msTicksBefore",
  "__msTooltip",
  "__msTrack",
  "__msValue",
  "__webkitBackdrop",
  "__webkitInputPlaceholder",
  "__webkitProgressBar",
  "__webkitProgressInnerValue",
  "__webkitProgressValue",
  "__webkitSliderRunnableTrack",
  "__webkitSliderThumb",
  "__backdrop",
  "__cue",
  "__cueRegion",
  "__firstLetter",
  "__firstLine",
  "__grammarError",
  "__marker",
  "__placeholder",
  "__selection",
  "__spellingError",
  "__targetText",
  "__viewTransition",
  "_active",
  "_after",
  "_anyLink",
  "_before",
  "_blank",
  "_checked",
  "_current",
  "_default",
  "_defined",
  "_disabled",
  "_empty",
  "_enabled",
  "_first",
  "_firstChild",
  "_firstLetter",
  "_firstLine",
  "_firstOfType",
  "_focus",
  "_focusVisible",
  "_focusWithin",
  "_fullscreen",
  "_future",
  "_hover",
  "_inRange",
  "_indeterminate",
  "_invalid",
  "_lastChild",
  "_lastOfType",
  "_left",
  "_link",
  "_localLink",
  "_nthCol",
  "_nthLastCol",
  "_onlyChild",
  "_onlyOfType",
  "_optional",
  "_outOfRange",
  "_past",
  "_paused",
  "_pictureInPicture",
  "_placeholderShown",
  "_playing",
  "_readOnly",
  "_readWrite",
  "_required",
  "_right",
  "_root",
  "_scope",
  "_target",
  "_targetWithin",
  "_userInvalid",
  "_userValid",
  "_valid",
  "_visited",
]);

export const AdvancedPseudoSet = new Set<AdvancedPseudosPropKeys>([
  "_mozAny", // ()
  "_mozDir",
  "_webkitAny", // ()
  "__cue",
  "__cueRegion",
  "__part",
  "__slotted",
  "__viewTransitionGroup",
  "__viewTransitionImagePair",
  "__viewTransitionNew",
  "__viewTransitionOld",
  "_dir",
  "_has",
  "_host",
  "_hostContext",
  "_is",
  "_lang",
  "_matches", // ()
  "_not",
  "_nthChild",
  "_nthLastChild",
  "_nthLastOfType",
  "_nthOfType",
  "_where",
]);
