import { Dimensions, StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from '../../themes';
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    ...ApplicationStyles,
    chartContainer: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    chartStyle: {
        width, 
        height: height/2,
        margin: 5,
        ...ApplicationStyles.border,
        borderRadius: Metrics.radius,
        padding: 5,
    },
    circleButtonView: {
        ...ApplicationStyles.flexRowCenterMid
    }
});

export default styles;