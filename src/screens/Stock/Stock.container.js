/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Dimensions, View } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";
import { Alert, AppContainer, Btn, Card, Text, CircleBtn, SquareBtn, Tabs, Table } from "../../components";
import { Colors, Metrics } from '../../themes';
import styles from './Stock.style';
import Modal from "react-native-modal";
import { dataChart } from '../../utils';
const { width, height } = Dimensions.get("window");

export default class ScreenContainer extends Component {

    render() {
        const { amount, timeCountDown, isOrder, isVisible, index, routes, dataOrder, isOrderTable } = this.state;

        const renderScene = ({ route }) => {
            switch (route.key) {
                case 'order':
                    return (
                        <View style={{ flex: 1, }} />
                    );
                case 'today':
                    return (
                        <View style={{ flex: 1 }} />
                    );
                case 'today':
                    return (
                        <View style={{ flex: 1 }} />
                    );
                case 'all':
                    return (
                        <View style={{ flex: 1 }} />
                    );
                default:
                    break;
            }
        }

        return (
            <AppContainer
                hideHeader
            >
                <View style={styles.chartStyle}>
                    <ECharts
                        option={{}}
                        ref={this.onRef}
                        additionalCode={this.additionalCode}
                        onData={this.onData}
                    // width={width }
                    />
                </View>

                <Card style={styles.mt5}>
                    <Text center style={styles.mb10} size='xl'>Balance: $0.0000</Text>
                    <View style={styles.circleButtonView}>
                        <CircleBtn
                            number={'2'}
                            width={Metrics.iconMedium}
                            backgroundColor={Colors.yellow}
                            border
                            borderColor={Colors.white}
                            style={styles.ml5}
                            onPress={() => this.handleChangeAmount('2')}
                        />
                        <CircleBtn
                            number={'5'}
                            width={Metrics.iconMedium}
                            backgroundColor={Colors.yellow}
                            border
                            borderColor={Colors.white}
                            style={styles.ml5}
                            onPress={() => this.handleChangeAmount('5')}
                        />
                        <CircleBtn
                            number={'10'}
                            width={Metrics.iconMedium}
                            backgroundColor={Colors.yellow}
                            border
                            borderColor={Colors.white}
                            style={styles.ml5}
                            onPress={() => this.handleChangeAmount('10')}
                        />
                        <CircleBtn
                            number={'100'}
                            width={Metrics.iconMedium}
                            backgroundColor={Colors.yellow}
                            border
                            borderColor={Colors.white}
                            style={styles.ml5}
                            onPress={() => this.handleChangeAmount('100')}
                        />
                        <CircleBtn
                            number={'500'}
                            width={Metrics.iconMedium}
                            backgroundColor={Colors.yellow}
                            border
                            borderColor={Colors.white}
                            style={styles.ml5}
                            onPress={() => this.handleChangeAmount('500')}
                        />
                        <CircleBtn
                            number={'All'}
                            width={Metrics.iconMedium}
                            backgroundColor={Colors.yellow}
                            border
                            borderColor={Colors.white}
                            style={styles.ml5}
                            onPress={() => this.handleChangeAmount('all')}
                        />
                    </View>

                    <View style={[styles.flexRowAroundMid, styles.mt10]}>
                        <View style={styles.flexRowMid}>
                            <SquareBtn
                                title={'/2'}
                                onPress={() => { }}
                                width={Metrics.iconSmall}
                                backgroundColor={Colors.greyButton}
                                color={Colors.white}
                            />
                            <SquareBtn
                                title={'/3'}
                                onPress={() => { }}
                                width={Metrics.iconSmall}
                                backgroundColor={Colors.greyButton}
                                color={Colors.white}
                            />
                            <SquareBtn
                                title={'-2'}
                                onPress={() => { }}
                                width={Metrics.iconSmall}
                                backgroundColor={Colors.greyButton}
                                color={Colors.white}
                            />
                        </View>
                        <Text size={'xxl'}>{amount}</Text>
                        <View style={styles.flexRowMid}>
                            <SquareBtn
                                title={'+1'}
                                onPress={() => { }}
                                width={Metrics.iconSmall}
                                backgroundColor={Colors.greyButton}
                                color={Colors.white}
                            />
                            <SquareBtn
                                title={'x2'}
                                onPress={() => { }}
                                width={Metrics.iconSmall}
                                backgroundColor={Colors.greyButton}
                                color={Colors.white}
                            />
                            <SquareBtn
                                title={'x3'}
                                onPress={() => { }}
                                width={Metrics.iconSmall}
                                backgroundColor={Colors.greyButton}
                                color={Colors.white}
                            />
                        </View>
                    </View>

                    <View style={[styles.flexRowAroundMid, styles.mt15]}>
                        <Btn
                            style={{ width: width / 2 - 70 }}
                            backgroundColor={!isOrder ? Colors.disabled : Colors.color1}
                            onPress={() => this.handleOrder('buy')}
                            disabled={!isOrder}
                        >BUY</Btn>
                        <Btn
                            style={{ width: width / 2 - 70 }}
                            backgroundColor={!isOrder ? Colors.disabled : Colors.color2}
                            onPress={() => this.handleOrder('sell')}
                            disabled={!isOrder}
                        >SELL</Btn>
                        <CircleBtn
                            number={timeCountDown + ""}
                            width={Metrics.iconMedium}
                            backgroundColor={isOrder ? Colors.color1 : Colors.color2}
                            border
                            borderColor={Colors.white}
                            style={styles.ml5}
                            color={Colors.white}
                            textStyle={{ fontSize: 18, fontWeight: '700' }}
                        />
                    </View>

                    <View style={[styles.flexGridBetween, styles.mt20]}>
                        {dataChart.map((item, index1) => {
                            return (
                                <View style={{width: width/14, marginBottom: 10}} key={index1}>
                                    <CircleBtn
                                        key={index1}
                                        backgroundColor={item.id%2 !== 0? Colors.color1: Colors.color2}
                                        width={Metrics.iconTiny}
                                    />
                                </View>
                            )
                        })}

                    </View>

                </Card>

                <Card style={styles.mt5}>
                    <Btn onPress={() => this.setState({ isOrderTable: true })}>Order Table</Btn>
                    {/* <Table
                        data={dataOrder}
                    /> */}
                    {/* <Tabs
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={this.handleTabsChange}
                        swipeEnabled={false}
                        style={{ flex: 1 }}
                    /> */}
                </Card>

                <Modal
                    isVisible={isOrderTable}
                    useNativeDriver={true}
                    onBackdropPress={this.handleTurnOffOrderTable}
                    onBackButtonPress={this.handleTurnOffOrderTable}
                >   
                    <Card style={{ height: height - 60, borderRadius: Metrics.radius, flex: 1 }}>
                        <Table
                            data={dataOrder}
                            style={{ flex: 1 }}
                        />
                        <Btn onPress={this.handleTurnOffOrderTable} backgroundColor={Colors.grey}>Back</Btn>
                    </Card>
                </Modal>

                <Alert
                    title={'Notification'}
                    description={'asdfsadf'}
                    onPress={() => { }}
                    isVisible={isVisible}
                />

            </AppContainer>
        );
    }
}
