import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ApplicationStyles } from '../../themes';
import PropTypes from 'prop-types'

const SquareBtn = ({ width, title, backgroundColor, onPress, color }) => {
    return (
        <TouchableOpacity style={[{ width, height: width, backgroundColor }, styles.border, styles.flexCenterMid]} onPress={onPress}>
            <Text style={{ color }}>{title}</Text>
        </TouchableOpacity>
    )
};

SquareBtn.propTypes = {
    width: PropTypes.number,
    title: PropTypes.string,
    backgroundColor: PropTypes.string,
    onPress: PropTypes.func,
}

const styles = StyleSheet.create({
    ...ApplicationStyles
})


export { SquareBtn }
