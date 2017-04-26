import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  Navigator,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

import CheckBox from 'react-native-check-box'
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
				<View style={styles.header2}>
					<TouchableOpacity onPress={this.navigate.bind(this, "addCategory")}>
						<View style={styles.addIcon} >
							<Icon name="plus" size={20} color="white" />
						</View>
					</TouchableOpacity>              
				</View>

	            <View style={styles.header1}><Text style={styles.homeText}>DO ME !</Text></View>
            </View>
          </View>
          
          <View style={styles.bottomContainer}>
			  
			<CheckBox
			    style={{padding: 10}}
			    onClick={()=>this.onClick(data)}
			    isChecked={false}
			    rightText={'lol'}
			/>
			<CheckBox
			    style={{padding: 10}}
			    onClick={()=>this.onClick(data)}
			    isChecked={false}
			    rightText={'lol'}
			/>

          </View>
        </View>
	  	);
	}	
}

module.exports = Home;