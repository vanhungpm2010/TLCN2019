// import React, { Component } from "react";
// import { View, ScrollView, Image } from "react-native";
// import { connect } from "react-redux";
// import Loading from "@components/loading";
// import { CoursesACtion } from "@actions/CoursesAction";
// import Topic from "./Topic";
// import Service from "../../services";
// import { showMessage, hideMessage } from "react-native-flash-message";
// import PropTypes from "prop-types";
// import { Avatar } from 'react-native-elements'

// import Header from '../../components/header';
// import { ic_arrow_back, ic_notifications } from "../../assets";

// import styles from "./styles";

// class StudyTopPic extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       courses: [],user: {}
//     }
//   }

//   static navigationOptions = ({ navigation }) => ({
//     title: "Học Theo Chủ Đề",
//     headerTitleStyle: { color: "#ffffff", fontSize: 20 },
//     headerStyle: { backgroundColor: "#536DFE", color: "white" },
//     headerTintColor: "white"
//   });

//   async getList(id) {
//     try {
//       const res = await Service.getDetailCourses(id);      
//       this.setState({ courses: res.contents })
//     } catch(error) {

//     }
//   }

//   //WARNING! To be deprecated in React v17. Use componentDidMount instead.
//   componentDidMount() {
//     {
//       console.log("didmout ne");
//       this.getList('5eca17576e9efb22c4e088b7');
//     }
//   }
//   _actionDeleteCourese = id => {
//     console.log("id xoa", id);
//     const params = { id };
//     Service.deleteCourses(params)
//       .then(data => {
//         showMessage({
//           message: "Xóa thành công",
//           type: "success"
//         });
//         this.props.dispatch(CoursesACtion._deleteCourses(id));
//       })
//       .catch(err => {
//         showMessage({
//           message: "Xóa thất bại",
//           type: "danger"
//         });
//       });
//     console.log("ok");
//   };
//   _handleGoToDetail = (id) => {
//     console.log("idprops",id)

//     this.props.navigation.navigate("GetCourese",{ idCourese: id})
//   };
//   render() {
//     // const { courses, loading } = this.props;
//     // console.log(courses);
//         // const { avatar } = courses;

//     return (
//       <View style={{ flex: 1, backgroundColor: "#EEEEEE" }}>
//         {/* <Header
//         noShadow={true}
//         stylesHeaderText={{
//           color: "#000",
//           fontSize: 15,
//           fontWeight: "bold",
//         }}
//         mainText={'Học theo chủ đề'}
//         stylesHeader={styles.header}
//         leftComponent={<Image source={ic_arrow_back} style={styles.backarrow} />}
//         leftAction={() => navigation.goBack()}
//         actionRight={[
//           {
//             // component: <BadgedIcon type="ionicon" name="md-notifications" color={"#fff"} style={styles.icon}/>,
//             component: <Image source={ic_notifications} style={styles.icon} />,
//             action: () => navigation.navigate("Notifications"),
//             styleTouchable: {
//               top: 9,
//             },
//           },
//           {
//             component: (
//               <Avatar rounded source={{ uri: user?.avatar }} size="small" />
//             ),
//             action: () => navigation.navigate("Profile"),
//             styleTouchable: {
//               top: 9,
//             },
//           },
//         ]}
//       /> */}

//         <ScrollView>
//           {this.state.courses
//             ? this.state.courses.map((data, index) => {
//                 return (
//                   <Topic
//                     id={data._id}
//                     key={index}
//                     // avatar={}
//                     title={data.title}
//                     lenght={this.state.courses.length}
//                     _actionDeleteCourese={() =>
//                       this._actionDeleteCourese(data._id)
//                     }
//                     _handleGoToDetail={()=>this._handleGoToDetail(data._id)}
//                   />
//                 );
//               })
//             : null}
//         </ScrollView>
//         {/* {loading && <Loading />} */}
//       </View>
//     );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   return {
//     loading: state.CoursesReducer.loading,
//     courses: state.CoursesReducer.data,
//     error: state.CoursesReducer.err
//   };
// };

// export default connect(mapStateToProps, null)(StudyTopPic);

// StudyTopPic.propTypes = {
//   courses: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   loading: PropTypes.bool
// };


import React from 'react';
import { Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from '../../components/header';
import { ViewVertical, ViewHorizontal } from '../../components/viewBox.component';

import styles from './styles';
import { ic_arrow_back, banner } from '../../assets'
import { Input, ListItem, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MyTopicScreen = ({ navigation }) => {
  const onSettings = () => {
    console.log('settings');
  }

  const handleOpen = () => {
    console.log('handleOpen');
  }

  return (
    <ViewVertical style={{ backgroundColor: '#fff', flex: 1 }}>
      <Header
        noShadow={true}
        stylesHeaderText={{
          color: "#000",
          fontSize: 15,
          fontWeight: "bold",
        }}
        // mainText={'Học theo chủ đề'}
        stylesHeader={styles.header}
        leftComponent={<Image source={ic_arrow_back} style={styles.backarrow} />}
        leftAction={() => navigation.goBack()}
      />
      <ViewVertical style={styles.container}>
        <ViewHorizontal style={styles.headerContainer}>
          <ViewVertical>
            <Text style={styles.titleHeader}>あなたの主題</Text>
            <Text style={styles.textHeader}>Chủ đề của bạn</Text>
          </ViewVertical>
          <Button 
            onPress={() => navigation.navigate('AddTopicScreen')}
            type='clear'
            title='Tạo chủ đề'
            icon={
              <Icon
                name="playlist-add"
                size={15}
                color="#16334A"
              />
            }
            iconRight     
            buttonStyle={styles.buttonStyle}  
            titleStyle={styles.buttonTitleStyle}   
          />
        </ViewHorizontal>

        <ListItem
          containerStyle={[styles.containerStyle, { padding: 10 }]}
          title={'Ten chu de'}
          titleStyle={styles.titleStyleItem}
          leftElement={<Image source={banner} style={styles.imageItem} />}
          subtitle={
            <ViewVertical>
              <Text style={styles.subtitleStyle}>{`Bao gồm: 15 thuật toán`}</Text>
              <Text style={styles.subtitleStyle}>{`Người tạo: Admin`}</Text>
            </ViewVertical>
          }
          onPress={handleOpen}
          rightIcon={{
            color: '#16334A',
            size: 30,
            name: 'settings',
            onPress: onSettings
          }}
        />
      </ViewVertical>

    </ViewVertical>
  )
}

export default MyTopicScreen;