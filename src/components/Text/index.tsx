import React from 'react';
import { Text as T , StyleSheet , TextProps } from 'react-native';
import { FontBold, FontLight, FontMedium, Font } from 'constant/fonts';
import { W } from 'utils/responsive';

interface IText {
    lineHeight?: number
    size?:string|number
    align?:'right'|'left'|'center'|'justify'|'auto'
    bold?:boolean,
    semibold?:boolean,
    light?:boolean,
    medium?:boolean,
    through?:boolean,
    underline?:boolean,
    italic?:boolean,
    color?:string,
    children?:any,
    mt?: number|string
    mb?: number|string
    ml?: number|string
    mr?: number|string
}

function Text (props:IText&TextProps) {
    const {style,align,color,bold,underline,light,medium,through,semibold,italic,lineHeight,size,mt,mb,ml,mr,...rest} = props
    const fontSize = size ? (typeof size === "number" ? size : W(size)) : null;
    const marginTop = mt ? (typeof mt === "number" ? mt : W(mt)) : null
    const marginBottom = mb ? (typeof mb === "number" ? mb : W(mb)) : null
    const marginLeft = ml ? (typeof ml === "number" ? ml : W(ml)) : null;
    const marginRight = mr ? (typeof mr === "number" ? mr : W(mr)) : null
    return (
        <T
            style={[
                styles.text,
                style,
                fontSize && {fontSize},
                align && {textAlign:align},
                color && {color:color} ,
                bold && {...FontBold} ,
                light && {...FontLight} ,
                medium && {...FontMedium} ,
                // semibold && {...MontserratSemiBold} ,
                through && {textDecorationLine: 'line-through'},
                italic && {fontStyle: 'italic'},
                lineHeight && {lineHeight:lineHeight},
                underline && {textDecorationLine: 'underline'},
                marginTop && {marginTop},
                marginBottom && {marginBottom},
                marginLeft && {marginLeft},
                marginRight && {marginRight},
            ]}
            {...rest}>
            {props.children}
        </T>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#333333',
        ...Font
    }
});

export default Text;
