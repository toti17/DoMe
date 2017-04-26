/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  ActivityIndicator,
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

export default class ScrollableTab extends Component {

  constructor(props){
    super(props);

  }

  componentDidMount() {

  }

  render() {

    return (
      	<TodayMain navigator={this.props.navigator} getExpenses={this.getExpenses} getCategories={this.getCategories} saveData={this.saveData} tabLabel='clock-o' />
      	<CategoryMain navigator={this.props.navigator} getExpenses={this.getExpenses} saveCategory={this.saveCategory} getCategories={this.getCategories} tabLabel='list' />
      	<MonthMain navigator={this.props.navigator} getExpenses={this.getExpenses} tabLabel='calendar' />
    );

  }


}

module.exports = ScrollableTab;