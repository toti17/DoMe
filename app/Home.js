import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  Button,
  Alert,
  View,
  Navigator,
  AsyncStorage,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/homeStyles.js';
class Home extends Component {
	navigate(routeName){
		this.props.navigator.push({
			name: routeName,
		});
	}
	constructor(props){
		super(props);
	}

	componentWillMount(){
	}

	componentDidUpdate(prevProps, prevState) {
	}

	render() {
		return (	
      <View style={styles.parent}> 
          <View style={styles.topContainer}>
            <View style={styles.top1}>
              <View style={styles.header1}><Text style={styles.homeText}>DO ME !</Text></View>
            </View>
          </View>
          
          <View style={styles.bottomContainer}>
          </View>
      </View>
	  	);
	}	
}

module.exports = Home;