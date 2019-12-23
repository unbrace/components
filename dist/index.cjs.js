'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var merge = _interopDefault(require('lodash.merge'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var ClickOutside = /** @class */ (function (_super) {
    __extends(ClickOutside, _super);
    function ClickOutside() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrapperNode = React.createRef();
        _this.handleClickOutside = function (event) {
            if (_this.wrapperNode &&
                _this.wrapperNode.current &&
                event.target instanceof Node &&
                !_this.wrapperNode.current.contains(event.target)) {
                _this.props.clickOutsideHandler();
            }
            else {
                event.preventDefault();
                event.stopPropagation();
            }
        };
        return _this;
    }
    ClickOutside.prototype.componentDidMount = function () {
        document.addEventListener("mousedown", this.handleClickOutside);
    };
    ClickOutside.prototype.componentWillUnmount = function () {
        document.removeEventListener("mousedown", this.handleClickOutside);
    };
    ClickOutside.prototype.render = function () {
        return (React.createElement("div", { ref: this.wrapperNode, className: "clickoutside-wrapper" }, this.props.children));
    };
    return ClickOutside;
}(React.PureComponent));

var defaultTheme = {
    badge: {
        borderRadius: "25px",
        fontSize: "13px",
        fontSizeXSmall: "10px",
        fontWeight: "500",
        padding: "6px 23px",
        paddingLarge: "10px 20px",
        paddingSmall: "4px 14px",
        background: {
            danger: "background-color: #FEE4E3;",
            primary: "background-color: #E8FBFF;",
            secondary: "background-color: #F5F7FD;",
            success: "background-color: #E3FCEF;",
            warning: "background-color: #FFFFD8;"
        },
        color: {
            danger: "color: #DF5858;",
            primary: "color: #0093B2;",
            secondary: "color: #686B82;",
            success: "color: #188A50;",
            warning: "color: #C57600;"
        }
    }
};
var Badge = function (props) {
    var providedTheme = React.useContext(styled.ThemeContext);
    var theme = providedTheme
        ? merge(defaultTheme, providedTheme)
        : defaultTheme;
    console.log("theme", theme);
    return React__default.createElement(StyledBadge, __assign({}, props, { theme: theme }));
};
var StyledBadge = styled__default("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-self: center;\n  display: inline-block;\n  border-radius: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  letter-spacing: ", ";\n  max-height: 100%;\n  padding: ", ";\n  text-align: center;\n  text-transform: ", ";\n\n  &:first-letter {\n    text-transform: ", ";\n  }\n\n  ", ";\n  ", ";\n\n  ", "\n  ", ";\n\n  ", "\n  ", ";\n\n  ", "\n  ", ";\n\n  ", "\n  ", ";\n"], ["\n  align-self: center;\n  display: inline-block;\n  border-radius: ", ";\n  font-size: ",
    ";\n  font-weight: ", ";\n  letter-spacing: ", ";\n  max-height: 100%;\n  padding: ",
    ";\n  text-align: center;\n  text-transform: ", ";\n\n  &:first-letter {\n    text-transform: ", ";\n  }\n\n  ", ";\n  ",
    ";\n\n  ", "\n  ",
    ";\n\n  ", "\n  ",
    ";\n\n  ", "\n  ",
    ";\n\n  ", "\n  ",
    ";\n"])), function (props) { return props.theme.badge.borderRadius; }, function (props) {
    return props.xSmall
        ? props.theme.badge.fontSizeXSmall
        : props.theme.badge.fontSize;
}, function (props) { return props.theme.badge.fontWeight; }, function (props) { return (props.capitalize ? "normal" : "2px"); }, function (props) {
    return props.onlyText
        ? "0px"
        : props.large
            ? props.theme.badge.paddingLarge
            : props.small || props.xSmall
                ? props.theme.badge.paddingSmall
                : props.theme.badge.padding;
}, function (props) { return (props.capitalize ? "lowercase" : "uppercase"); }, function (props) { return props.capitalize && "uppercase"; }, function (props) { return props.primary && props.theme.badge.color.primary; }, function (props) {
    return props.primary && !props.onlyText && props.theme.badge.background.primary;
}, function (props) { return props.secondary && props.theme.badge.color.secondary; }, function (props) {
    return props.secondary &&
        !props.onlyText &&
        props.theme.badge.background.secondary;
}, function (props) { return props.success && props.theme.badge.color.success; }, function (props) {
    return props.success && !props.onlyText && props.theme.badge.background.success;
}, function (props) { return props.warning && props.theme.badge.color.warning; }, function (props) {
    return props.warning && !props.onlyText && props.theme.badge.background.warning;
}, function (props) { return props.danger && props.theme.badge.color.danger; }, function (props) {
    return props.danger && !props.onlyText && props.theme.badge.background.danger;
});
var templateObject_1;

exports.Badge = Badge;
exports.ClickOutside = ClickOutside;
