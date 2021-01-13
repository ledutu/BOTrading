/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { ApplicationStyles, Colors, Fonts } from '../../themes';
import { Text } from '../Text';

const screenWidth = Math.round(Dimensions.get('window').width);

export const Tabs = props => {
  const { scrollEnabled, onIndexChange, ...rest } = props;

  useEffect(() => {
    if (onIndexChange) onIndexChange(0);
  }, []);

  return (
    <TabView
      {...rest}
      onIndexChange={onIndexChange}
      renderTabBar={props => (
        <TabBar
          scrollEnabled={scrollEnabled}
          tabStyle={[scrollEnabled && { width: 'auto' }]}
          renderLabel={({ route, focused, color }) => (
            <Text
              style={[
                Fonts.style.normal,
                styles.label,
                { color: focused ? Colors.main : Colors.b },
              ]}>
              {route.title}
            </Text>
          )}
          {...props}
          indicatorStyle={scrollEnabled ? styles.noIndicator : styles.indicator}
          style={{ backgroundColor: Colors.white, color: Colors.main }}
        />
      )}
      initialLayout={styles.initialLayout}
    />
  );
};

Tabs.propTypes = {
  navigationState: PropTypes.object.isRequired,
  renderScene: PropTypes.any.isRequired,
  onIndexChange: PropTypes.func.isRequired,
  scrollEnabled: PropTypes.bool,
};

Tabs.defaultProps = {
  scrollEnabled: false,
};

const styles = StyleSheet.create({
  ...ApplicationStyles,
  initialLayout: {
    width: screenWidth,
    overflow: 'hidden',
  },
  label: {
    fontSize: 14
  },
  indicator: {
    backgroundColor: Colors.main,
    height: 2,
  },
  noIndicator: {
    backgroundColor: Colors.white,
  },
});