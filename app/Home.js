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
			<View>
						<Text >Do Me!</Text>
			</View>
	  	);
	}	
}

module.exports = Home;