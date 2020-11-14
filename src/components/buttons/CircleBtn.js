import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ApplicationStyles } from '../../themes';

export const CircleBtn = ({
    number,
    width,
    border,
    borderColor,
    backgroundColor,
    style,
    onPress,
    color,
    textStyle
}) => {
    return (
        <TouchableOpacity style={[
            { width, height: width, borderRadius: width / 2, backgroundColor },
            border && {
                ...styles.border,
                borderColor
            },
            styles.btn,
            style
        ]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={[{ color }, textStyle]}>{number}</Text>
        </TouchableOpacity>
    )
}

CircleBtn.propTypes = {
    number: PropTypes.string,
}

const styles = StyleSheet.create({
    ...ApplicationStyles,
    btn: {
        ...ApplicationStyles.flexCenterMid,
    }
})