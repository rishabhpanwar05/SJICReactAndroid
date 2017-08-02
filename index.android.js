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
<ScrollView >
<View style={{ backgroundColor: '#fff',flex: 1,flexDirection: 'column',justifyContent: 'space-between'}}>

    <Text style={[styles.sliderTextTest,{fontSize:25,marginTop:30,marginBottom:15}]}>What is our philosophy?</Text>
    <Text style={[styles.sliderTextTest,{fontSize:18,marginTop:5,marginRight:20,marginLeft:20,marginBottom:30}]}>Based on machine learning and artificial intelligence, our algorithms strive to provide convenience to our globe trotting customers. Our plans are tailor made according to our customers needs. We are because of our customers. </Text>
    <Text style={[styles.sliderTextTest,{fontSize:25,marginBottom:15}]}>What inspired us?</Text>
    <Text style={[styles.sliderTextTest,{fontSize:18,marginTop:5,marginRight:20,marginLeft:20,marginBottom:20}]}>Systematic travellers waste a lot of time exploring and planning their trip according to their needs. We specialize in planning itineraries in a matter of seconds. All our plans are 100% customizable and your feedbacks help us evolve.</Text>
    
    <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',marginBottom:70}}>
    
      <View style={{marginTop: 25,width:200}}>
        <RoundedButton onPress={()=>Linking.openURL('mailto:rishabhpanwar05@gmail.com')}>
           Contact Us
        </RoundedButton>
      </View>
      
    </View>
    
     <Text style={[styles.sliderTextTest,{fontSize:13,color:'black'}]}>Created By : Rishabh Panwar & Swati Jain Incubation Center</Text>
    
</View>
</ScrollView>; 

const SecondRoute = () => 

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
      <Text style={[styles.sliderTextTest,{fontSize:25,paddingTop:20,marginBottom:10}]}>Carry your Trip Plan</Text>
      <Text style={[styles.sliderTextTest,{fontSize:18,marginTop:10,marginLeft:10,marginBottom:20}]}>One stop platform that keeps all the pertinent bookings made on even third party websites and apps.</Text>
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

const ThirdRoute = () => 

<ScrollView>   
  <View style={[ styles.container, { backgroundColor: '#fff',alignItems:'center'} ]}>

    <Image style={[styles.imageTestimonial,{marginTop:30}]} source={require('./img/face3.png')}/>
    <Text style={[styles.sliderTextTest,{fontSize:24,paddingTop:20}]}>A must have app for those who are wanderlusting right now!</Text>
    <Text style={[styles.sliderTextTest,{fontSize:18,paddingTop:10}]}>-Ishita Bhandari</Text>
    
    <View style={{
      marginTop:10,
      borderBottomColor: 'black', 
      borderBottomWidth: 1, 
      width: width-40}}/>
    
    <Image style={[styles.imageTestimonial,{marginTop:30}]} source={require('./img/face4.png')}/>
    <Text style={[styles.sliderTextTest,{fontSize:24,paddingTop:20}]}>It really helped me when I visited London the last month. Highly recommended!</Text>
    <Text style={[styles.sliderTextTest,{fontSize:18,paddingTop:10}]}>-Prakirn Kumar</Text>
    
    <View style={{
      marginTop:10,
      borderBottomColor: 'black', 
      borderBottomWidth: 1, 
      width: width-40}}/>
    
    <Image style={[styles.imageTestimonial,{marginTop:30}]} source={require('./img/face5.png')}/>
    <Text style={[styles.sliderTextTest,{fontSize:24,paddingTop:20}]}>My group is thankful to these guys. Super!</Text>
    <Text style={[styles.sliderTextTest,{fontSize:18,paddingTop:10,marginBottom:10}]}>-Ritambhara Singh</Text>
    
    <View style={{
      marginTop:10,
      borderBottomColor: 'black', 
      borderBottomWidth: 1, 
      width: width-40}}/>
    
    <Image style={[styles.imageTestimonial,{marginTop:30}]} source={require('./img/face2.png')}/>
    <Text style={[styles.sliderTextTest,{fontSize:24,paddingTop:20}]}>Liked the user friendly interface. Kudos to the team!</Text>
    <Text style={[styles.sliderTextTest,{fontSize:18,paddingTop:10,marginBottom:10}]}>-Suryansh Soni</Text>
    
  </View>
</ScrollView>;



export default class tabtest extends PureComponent {
  state = {
    intromode: false,
    index: 0,
    routes: [
      { key: '1', title: 'About Us' },
      { key: '2', title: 'Features' },
      { key: '3', title: 'Testimonials' },

    ],
  };

  _handleChangeTab = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} dotStyle={{marginBottom: 20}} selectedDotStyle={{marginBottom:20, backgroundColor:'#000'}} />;
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
