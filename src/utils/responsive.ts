import {heightPercentageToDP , widthPercentageToDP} from 'react-native-responsive-screen'

const W = (val:string|number):number => widthPercentageToDP(val);
const H = (val:string|number):number => heightPercentageToDP(val);

export {
    W,
    H
}