import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Carousel, WhiteSpace, WingBlank  } from 'antd-mobile';
import Swiper from 'react-native-swiper';

export default class Myswiper extends Component{
    constructor (props) {
        super(props);
        this.state = {
          items: [],
        }
    }
    componentDidMount () {
        this.setState({
          items: [
            { title: 'Hello Swiper', css: styles.slide1 },
            { title: 'Beautiful', css: styles.slide2 },
            { title: 'And simple', css: styles.slide3 }
          ]
        })
    }
    onselectedIndexChange(index) {
        /* tslint:disable: no-console */
        console.log('change to', index);
    }
  render() {
    return (
        <Carousel
            style={styles.wrapper}
            autoplayTimeout={2}
            selectedIndex={2}
            autoplay
            infinite
            afterChange={this.onselectedIndexChange}
          >
            <View style={[styles.container, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View style={[styles.container, , { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View style={[styles.container, { backgroundColor: 'yellow' }]}>
              <Text>Carousel 3</Text>
            </View>
            <View style={[styles.container, { backgroundColor: '#ccc' }]}>
              <Text>Carousel 4</Text>
            </View>
          </Carousel>
    )
  }
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  } ,
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  } ,
  text: {
    color: '#fff',
    fontSize: 36,
  } ,
});
