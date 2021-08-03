import { Platform } from "react-native"

const isAndroid = Platform.OS === "android"
const isIOS = Platform.OS === "ios"

const AvatarImage = require('assets/images/empty_avatar.png')

enum RoutesName {
    LOGIN = "LOGIN",
    CHAT = "CHAT",
    USERS = "USERS"
}

enum ThemeColors {
    LinearBGStart = "#FFFFFF",
    LinearBGEnd = "#F5F6F9",
    LinearInputBorderStart = "#F3F8FA",
    LinearInputBorderEnd = "#F0F2F5",
    PrimaryLinear = "#f5576c",
    Primary = "#fa709a",
    PRIMARY_LIGHT = "#E3E7Eb",
    PRIMARY_LINEAR_LIGHT = "#e8ebed",
    RED = "#F37D9A",
    RED_LIGHT = "#FDF1F3",
    GREEN = "#50E1BC",
    GREEN_LIGHT = "#E9F8F6",
    TRANSPARENT = "transparent",
    GREY = "#BDBDBD",
    DarkGrey = "#4F4F4F",
    TEXT_GREY = "#828282",
    BLACK_GREY = "#333333",
    ORANGE = "#EF7C01",
    ORANGE_LIGHT = "#F9F5EF",

}

const LinearBG = {
    start: {x: 0.0, y:0.0},
    end: {x:1.0 , y: 1.0},
    colors: [ThemeColors.LinearBGStart, ThemeColors.LinearBGEnd]
}

const LinearXY = {
    start: {x: 0.0, y:0.0},
    end: {x:1.0 , y: 1.0},
}

export {
    RoutesName,
    ThemeColors,
    LinearBG,
    LinearXY,
    isAndroid,
    isIOS,
    AvatarImage
}