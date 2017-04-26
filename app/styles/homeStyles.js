'use strict'

import {
  StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },

  topContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#55b7e5',
  },

  top1: {
    flex: 1,
justifyContent:'center',
    flexDirection: 'row',
  },

  top2: {
    flex: 1,
    flexDirection:'row',
  },

  header1: {
    flex:1,
    alignItems: 'center', 
  },
  header2:{
    alignItems: 'flex-start', 
  },
  bottomContainer: {
    flex: 12,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },

  addIcon: {
    paddingLeft: 10,
    marginTop: 12,
  },

  homeText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 6,
  },
  
});

module.exports = styles;
