import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { ApplicationStyles, Colors, Metrics } from '../../themes';
import { Card } from '../card';
import { Text } from '../Text';
import { Btn } from '../buttons';

export const Alert = ({ title, description, onPress, isVisible }) => {
    return (
        <Modal
            isVisible={isVisible}
            useNativeDriver={true}
            onBackdropPress={onPress}
            onBackButtonPress={onPress}
        >
            <Card style={styles.container}>
                <Text size={'xl'}>{title}</Text>
                <Text style={styles.description}>{description}</Text>

            </Card>
            <Btn style={[styles.button]}
                onPress={onPress}>OK</Btn>

        </Modal>
    );
}

Alert.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    onPress: PropTypes.func,
    isVisible: PropTypes.bool
}

const styles = StyleSheet.create({
    ...ApplicationStyles,
    container: {
        ...ApplicationStyles.flexCenterMid,
        borderTopStartRadius: Metrics.radius,
        borderTopEndRadius: Metrics.radius
    },
    description: {
        ...ApplicationStyles.mt15
    },
    buttonWrapper: {
        flexDirection: 'row',
        ...ApplicationStyles.mt20
    },
    button: {
        borderRadius: 0,
        borderBottomLeftRadius: Metrics.radius,
        borderBottomRightRadius: Metrics.radius,
    },

});