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
  handlePress = () => {
    this.props.navigation.push('SignUp');
  };
  render() {
    return (
      <ImageBackground
        imageStyle={styles.imageBackGround}
        style={styles.container}
        source={require('../../../assets/nhatban.png')}>
        <Text style={styles.title}>Đăng Nhập</Text>
        <View style={styles.viewBackGround}>
          <Input
            placeholderTextColor={'white'}
            label={'Tên Đăng Nhập'}
            leftIcon={<Icon name="user" size={24} color="#FF9100" style={{marginRight:5}}  />}
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
          <Button containerStyle={styles.button} title="Đăng Nhập" />
          <View style={styles.viewButton}>
            <Button
              type={'clear'}
              onPress={this.handlePress}
              title="Đăng Ký"
              buttonStyle={styles.backGroudButton}
              containerStyle={{width: '50%'}}
            />
            <Button
              type={'clear'}
              title="Quên Mật Khẩu"
              buttonStyle={styles.backGroudButton}
              containerStyle={{width: '50%'}}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
