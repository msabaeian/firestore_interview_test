import { Platform } from "react-native"

// fonts
const Font = Platform.select({
    android : {
        fontFamily: 'UbuntuRegular'
    },
    ios:{
        fontFamily:'Ubuntu',
        fontWeight:'400'
    }
})

const FontBold = Platform.select({
    android : {
        fontFamily: 'UbuntuBold'
    },
    ios:{
        fontFamily:'Ubuntu',
        fontWeight:'700'
    }
})

const FontLight = Platform.select({
    android : {
        fontFamily: 'UbuntuLight'
    },
    ios:{
        fontFamily:'Ubuntu',
        fontWeight:'300'
    }
})

const FontMedium = Platform.select({
    android : {
        fontFamily: 'UbuntuMedium'
    },
    ios:{
        fontFamily:'Ubuntu',
        fontWeight:'500'
    }
})

export {
    FontBold,
    Font,
    FontLight,
    FontMedium
}