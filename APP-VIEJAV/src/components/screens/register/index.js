import React, {Component} from 'react';
import Input from '../../common/input';
import {View, Image, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../common/button';
import styles from './styles';

export default class componentName extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    user: '',
    pass: '',
  };
  handleOnTextChange = event => {
    this.setState({
      ...event,
    });
  };
  render() {
    return (
      <ImageBackground
        imageStyle={styles.imageBackGround}
        style={styles.container}
        source={require('../../../assets/background-login.jpg')}>
        <Text style={styles.title}>Đăng Ký</Text>
        <View style={styles.viewBackGround}>
          <Input
            placeholderTextColor={'white'}
            label={'Tên Đăng Nhập'}
            leftIcon={<Icon name="user" size={24} color="#FF9100" style={{marginRight:5}} />}
            stateName={'user'}
            placeholder={'user@gmail.com'}
            handleChange={this.handleOnTextChange}
          />
          <Input
            containerStyle={styles.inputStyle}
            label={'Mật Khẩu'}
            leftIcon={<Icon name="lock" size={24} color="#FF9100" style={{marginRight:5}} />}
            stateName={'pass'}
            placeholder={'Mật Khẩu'}
            handleChange={this.handleOnTextChange}
            secureTextEntry={true}
          />
          <Input
            containerStyle={styles.inputStyle}
            label={'Nhập Lại Mật Khẩu'}
            leftIcon={<Icon name="lock" size={24} color="#FF9100" />}
            stateName={'pass'}
            placeholder={'Nhập Lại'}
            handleChange={this.handleOnTextChange}
            secureTextEntry={true}
          />
          <Button containerStyle={styles.button} title="Đăng Ký" />
        </View>
      </ImageBackground>
    );
  }
}
