import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../themes';
import PropTypes from 'prop-types'

export const Card = (props) => {

    const { children, onPress, backgroundColor, style, ...rest} = props;

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor }, style]}
            {...rest}
            onPress={onPress}
            activeOpacity={onPress ? 0.8 : 1}
        >
            {children}
        </TouchableOpacity>
    );
};

Card.propTypes = {
    onPress: PropTypes.func,
    backgroundColor: PropTypes.string,
};

Card.defaultProps = {
    backgroundColor: Colors.white,
}

const styles = StyleSheet.create({
    ...ApplicationStyles,
    container: {
        padding: Metrics.paddingContent,
    }
});
