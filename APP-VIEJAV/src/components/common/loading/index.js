import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Loadding extends Component {
  render() {
    const {sizeLoadding} = this.props;
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={sizeLoadding} color="#D50000" />
      </View>
    );
  }
}

Loadding.propTypes = {
  sizeLoadding: PropTypes.number,
};
Loadding.defaultProps = {
  sizeLoadding: 50,
};
