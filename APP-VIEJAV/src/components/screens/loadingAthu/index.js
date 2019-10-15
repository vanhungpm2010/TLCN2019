import React, { Component } from 'react'
import {
    StatusBar, StyleSheet, View,
  } from 'react-native';
import Storage from '../../../storages';
import api from '../../../services/base'
export default class componentName extends Component {
    constructor(props) {
        super(props)
        this.checkAthu()
    }
    checkAthu=async()=>{
        const token =await Storage.getToken();
        console.log('token sas',token)
        if(token){
            api.init({token});
            console.log('token',token)
            this.props.navigation.push('Drawer');
        }else{
            this.props.navigation.push('Login');
        }
    }
    render() {
        return (
           <View></View>
        )
    }
}
