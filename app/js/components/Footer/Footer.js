import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "myFooter": {
        "backgroundColor": "#373a48",
        "color": "white",
        "flex": "0 0 auto",
        "WebkitFlex": "0 0 auto"
    },
    "myFooter footer-copyright": {
        "backgroundColor": "#383737",
        "paddingTop": 3,
        "paddingBottom": 3,
        "textAlign": "center"
    },
    "myFooter footer-copyright p": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "color": "#ccc"
    },
    "myFooter ul": {
        "listStyleType": "none",
        "paddingLeft": 0,
        "lineHeight": 1.7
    },
    "myFooter h5": {
        "fontSize": 18,
        "color": "white",
        "fontWeight": "bold",
        "marginTop": 30
    },
    "myFooter a": {
        "color": "#d2d1d1",
        "textDecoration": "none"
    },
    "myFooter a:hover": {
        "textDecoration": "none",
        "color": "white"
    },
    "myFooter a:focus": {
        "textDecoration": "none",
        "color": "white"
    },
    "myFooter myCols": {
        "textAlign": "center"
    },
    "myFooter social-networks": {
        "textAlign": "center",
        "paddingTop": 30,
        "paddingBottom": 38
    },
    "myFooter social-networks a": {
        "fontSize": 32,
        "marginRight": 5,
        "marginLeft": 5,
        "color": "#f9f9f9",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "transition": "0.2s"
    },
    "myFooter social-networks a:hover": {
        "textDecoration": "none"
    },
    "myFooter facebook:hover": {
        "color": "#0077e2"
    },
    "myFooter google:hover": {
        "color": "#ef1a1a"
    },
    "myFooter twitter:hover": {
        "color": "#00aced"
    },
    "html": {
        "height": "100% !important"
    },
    "body": {
        "display": "-webkit-flex",
        "flexDirection": "column",
        "WebkitFlexDirection": "column",
        "height": "100%"
    },
    "content": {
        "flex": "1 0 auto",
        "WebkitFlex": "1 0 auto",
        "minHeight": 200
    }
});