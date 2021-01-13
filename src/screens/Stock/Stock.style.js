import { Dimensions, StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../themes';
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    ...ApplicationStyles,
    chartContainer: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    chartStyle: {
        width,
        height: height / 2,
        backgroundColor: Colors.white,
        padding: 5,
    },
    circleButtonView: {
        ...ApplicationStyles.flexRowCenterMid,
    }
});

export default styles;