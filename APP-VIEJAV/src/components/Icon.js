import React from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import { IS_IOS } from '../configs';


const IconComponent = ({ name, size, color}) => (
    <Icon 
        name={ IS_IOS ? `ios-${name}` : `md-${name}`}
        size={size || 20}
        color={color}
    />
)

export default IconComponent;