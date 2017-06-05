/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  WebView
} from 'react-native';
import { TabBar, SearchBar } from 'antd-mobile';
// import Swiper from 'react-native-swiper';//轮播组件,暂时有问题
import Myswiper from './components/carousel'

export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'redTab',
        }
    }

    renderContend(pageText) {
        return (
            <View style={{ flex:1, alignItems:'center', backgroundColor:'white'}}>
                <Text style={{ margin: 50 }}>{pageText}</Text>
            </View>
        );
    }

    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
    }

    webviewTest(){
        return (
            <WebView
                source={require('./public/gold-price365.html')}
            />
        );
    }

    render(){
        return (
            <View style={{flex:1,justifyContent:'space-between'}}>
                {/* <View> */}
                    <Myswiper/>
                {/* </View> */}
                <View style={{flex:1}}>
                <TabBar
                    unselectedTintColor='#949494'
                    tintColor="#33A3F4"
                    barTintColor="#ccc"
                >
                    <TabBar.Item
                        title='生活'
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => this.onChangeTab('blueTab')}
                        style={{flexDirection: 'row',alignItems: 'flex-start'}}
                    >
                        {this.webviewTest()}
                    </TabBar.Item>

                    <TabBar.Item
                        title='口碑'
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => this.onChangeTab('redTab')}
                    >
                        {this.renderContend('口碑 Tab')}
                    </TabBar.Item>

                    <TabBar.Item
                        title='朋友'
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => this.onChangeTab('greenTab')}
                    >
                        {this.renderContend('朋友 Tab')}
                    </TabBar.Item>

                    <TabBar.Item
                        title='我的'
                        badge={2}
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => this.onChangeTab('yellowTab')}
                    >
                        {this.renderContend('我的 Tab')}
                    </TabBar.Item>

                </TabBar>
                </View>
            </View>

        );
    }
}


AppRegistry.registerComponent('ReactNativeHello', () => Footer);
