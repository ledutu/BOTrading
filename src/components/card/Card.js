import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from '../../themes';

export const Card = (props) => {

    const { children, onPress } = props;

    return (
        <TouchableOpacity
            style={styles.container}
            {...props}
            onPress={onPress}
            activeOpacity={onPress ? 0.8 : 1}
        >
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    ...ApplicationStyles,
    container: {
        padding: Metrics.paddingContent,
    }
});
