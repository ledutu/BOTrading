/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    Platform
} from 'react-native';
import PropTypes from 'prop-types';
import { ApplicationStyles, Colors } from '../../../themes';
import { Appbar } from 'react-native-paper';

class AppContainer extends Component {

    render() {
        const {
            children,
            title,
            disabledScroll,
            style,
            hideHeader,
            onBackClick,
            onShoppingCartClick,
            onSearchClick,
            onCloseClick,
            onFilterClick,
            bgHeaderColor,
        } = this.props;

        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
                <SafeAreaView style={[styles.appContainer, style ]}>
                    {!hideHeader && <Appbar.Header style={{backgroundColor: bgHeaderColor}}>
                        {onBackClick && <Appbar.BackAction onPress={onBackClick} />}
                        {onFilterClick && <Appbar.Action icon='filter' onPress={onFilterClick} />}
                        <Appbar.Content title={title} style={styles.flexCenterMid}/>
                        {onShoppingCartClick && <Appbar.Action icon="cart-outline" onPress={onShoppingCartClick} />}
                        {onSearchClick && <Appbar.Action icon="magnify" onPress={onSearchClick} />}
                        {onCloseClick && <Appbar.Action icon="close" onPress={onCloseClick} />}
                    </Appbar.Header>}
                    <View style={{ flex: 1 }}>{disabledScroll ? children : <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        {children}
                    </ScrollView>}</View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    ...ApplicationStyles,
    container: {
        ...ApplicationStyles.appContainer,
        backgroundColor: Colors.main
    }
});

AppContainer.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    disabledScroll: PropTypes.bool,
    hideHeader: PropTypes.bool,
};

AppContainer.defaultProps = {
    bgHeaderColor: Colors.main    
};

export { AppContainer };