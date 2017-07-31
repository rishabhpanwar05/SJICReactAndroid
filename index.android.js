/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  Linking
} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import RoundedButton from './RoundedButton'

var { width, height } = Dimensions.get('window')

const FirstRoute = () => 

<ScrollView>

  <View style={[ styles.container1, { backgroundColor: '#fff' } ]} >
    <Image style={[styles.image,{margin:20}]} source={require('./img/ff_city.png')}/>
    <View style = {styles.container4}>
      <Text style={[styles.sliderTextTest,{fontSize:25,paddingTop:20,marginBottom:10}]}>150 Cities</Text>
      <Text style={[styles.sliderTextTest,{fontSize:18,marginTop:10,marginRight:10,marginBottom:20}]}>You focus on making memories, we will plan the rest! Covering cities from 6 continents.</Text>
    </View>
  </View>
  
  <View style={[ styles.container1, { backgroundColor: '#fff' } ]} >
    <View style = {styles.container4}>
      <Text style={[styles.sliderTextTest,{fontSize:25,paddingTop:20,marginBottom:10}]}>Portable Trip Wallet</Text>
      <Text style={[styles.sliderTextTest,{fontSize:18,marginTop:10,marginLeft:10,marginBottom:20}]}>One stop platform that keeps all the pertinent bookings made on even third party websites.</Text>
        </View>
    <Image style={[styles.image,{margin:20}]} source={require('./img/ff_bag.png')}/>
  </View>
  
  <View style={[ styles.container1, { backgroundColor: '#fff' } ]} >
    <Image style={[styles.image,{margin:20}]} source={require('./img/ff_gift.png')}/>
    <View style = {styles.container4}>
      <Text style={[styles.sliderTextTest,{fontSize:25,paddingTop:20,marginBottom:10}]}>Free, Forever and Ever</Text>
      <Text style={[styles.sliderTextTest,{fontSize:18,marginTop:10,marginRight:10,marginBottom:20}]}>We are here to help you make memories, and memories are free. No hidden charges whatsoever</Text>
    </View>
  </View>
</ScrollView>;
  
const SecondRoute = () => 

<ScrollView>   
  <View style={[ styles.container, { backgroundColor: '#fff',alignItems:'center'} ]}>

    <Image style={[styles.imageTestimonial,{marginTop:30}]} source={require('./img/face5.jpg')}/>
    <Text style={[styles.sliderTextTest,{fontSize:30,paddingTop:20}]}>King Khan loves the King of Trips!</Text>
    <Text style={[styles.sliderTextTest,{fontSize:20,paddingTop:10}]}>-Shahrukh Khan</Text>
    
    <View style={{
      marginTop:10,
      borderBottomColor: 'black', 
      borderBottomWidth: 1, 
      width: width-40}}/>
    
    <Image style={[styles.imageTestimonial,{marginTop:30}]} source={require('./img/face4.jpg')}/>
    <Text style={[styles.sliderTextTest,{fontSize:30,paddingTop:20}]}>Anushka loved it! So did I!</Text>
    <Text style={[styles.sliderTextTest,{fontSize:20,paddingTop:10}]}>-Virat Kohli</Text>
    
    <View style={{
      marginTop:10,
      borderBottomColor: 'black', 
      borderBottomWidth: 1, 
      width: width-40}}/>
    
    <Image style={[styles.imageTestimonial,{marginTop:30}]} source={require('./img/face3.jpg')}/>
    <Text style={[styles.sliderTextTest,{fontSize:30,paddingTop:20}]}>True champions at what they do!</Text>
    <Text style={[styles.sliderTextTest,{fontSize:20,paddingTop:10,marginBottom:10}]}>-MS Dhoni</Text>
    
  </View>
</ScrollView>;
const ThirdRoute = () => 

<View style={[ styles.container, { backgroundColor: '#fff' } ]} >

  <RoundedButton onPress={()=>Linking.openURL('mailto:rishabhpanwar05@gmail.com&subject=Regarding some information')}>
    Contact Us 
  </RoundedButton>
  
</View>;


export default class tabtest extends PureComponent {
  state = {
    intromode: false,
    index: 0,
    routes: [
      { key: '1', title: 'Features' },
      { key: '2', title: 'Testimonials' },
      { key: '3', title: 'Contact Us' },

    ],
  };

  _handleChangeTab = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} dotStyle={{marginBottom: 50}} selectedDotStyle={{marginBottom:50,   backgroundColor:'#000'}} />;
  }

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
    '3': ThirdRoute
  });

  render() {
    if(!this.state.intromode)
    {return (

      <View style={{flex:1}}>
        <IndicatorViewPager
          style={{flex:1}}
          indicator={this._renderDotIndicator()}>
          
          {/*
            <View style={styles.containers}>
              <Image
                style={styles.cover} 
                source={require('./img/bg-header.jpg')}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.fontStyles}>TripShaper Inc.</Text>
                    <Image
                      style={styles.image} 
                      source={require('./img/Trip_Shaper_Logo.png')}>
                      
                    </Image>
                  </View>
               </Image>
            </View>
          */}
        
          <View style={{backgroundColor:'#fff', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./img/Trip_Shaper_Logo.png')}/>
            <Text style={styles.sliderTextBase}>TripShaper Inc.</Text>
          </View>
          <View style={{backgroundColor:'#fff', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{height:120,width:120}} source={require('./img/slide_2.png')}/>
            <Text style={[styles.sliderTextCustom,{margin:10}]}>Your Trips Planned your Way!</Text>
          </View>
          <View style={{backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{height:120,width:120}} source={require('./img/slide_3.png')}/>
            <Text style={[styles.sliderTextCustom,{margin:10}]}>All your Plans now in your Pocket!</Text>
            <View style={{marginBottom: 25,marginTop: 25,width:200}}>
              <RoundedButton onPress={()=>this.setState({intromode:true})}>
                Continue
              </RoundedButton>
            </View>
          </View>
        </IndicatorViewPager>
      </View>)
    }
    else {
      return (
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onRequestChangeTab={this._handleChangeTab}/>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'stretch'
  },
  containers: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center', 
    alignItems: 'stretch'
  },
  slider: {
    marginBottom: 30,
    height:300
  },
  sliderContainer: {
  },
  cover: {
    flex: 1,
    width: null,
    height: null,
    resizeMode:'cover'
  },
  image: {
    height: 100,
    width:100
  },
  imageTestimonial: {
    height: 100,
    width:100,
    borderRadius:50
  },
  sliderTextBase: {
    fontFamily:'zilla',
    fontSize:50, 
    color:'#040e68',
    marginTop: 30
  },
  sliderTextCustom:{
    fontFamily:'zilla',
    fontSize:35,
    marginTop: 20,
    color:'#040e68',
    textAlign:'center'
  },
  sliderTextTest:{
    fontFamily:'anticslab',
    color:'#000',
    textAlign:'center'
  },
  container1: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height:height/3
  },
  container4: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('tabtest', () => tabtest);
