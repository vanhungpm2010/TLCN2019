import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, ListItem } from 'react-native-elements';
import { showMessage, hideMessage } from 'react-native-flash-message';
import * as Progress from 'react-native-progress';

import Loading from '@components/loading';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Api from '@services';
import { CoursesACtion } from '@actions/CoursesAction';
import SildeCourese from './slideCourse';
import SoundCourse from './soundCourse';
import PropTypes from 'prop-types';
import Service from '@services';
import Styles from './styles';
import Header from '../../components/header';
import { ViewVertical } from '../../components/viewBox.component';
import {
  ic_arrow_back,
  ic_notifications,
  ic_notifications_none,
  ic_view_carousel,
  ic_spellcheck,
  ic_assignment,
  ic_record_voice_over
} from '../../assets';

export default class GetCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      user: {},
    };
  }

  getData(id) {
    this.setState({ loading: true });
    Service.getDetailCourses(id)
      .then((data) => { 
        this.setState({ data: data.contents, loading: false });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    const id = this.props.navigation.getParam('idCourese');

    this.getData(id);
  }
  _handleToMemmory = () => {
    const { data } = this.state;
    this.props.navigation.navigate('MemmoryCard', { data: data });
  };
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    const idNext = nextProps.navigation.getParam('idCourese');
    const id = this.props.navigation.getParam('idCourese');

    if (idNext !== id) {
      this.getData(idNext);
    }
  }
  render() {
    const { data, loading, user } = this.state;
    const { navigation } = this.props;
    const id = this.props.navigation.getParam('idCourese');
    const CardList = [
      {
        icon: ic_view_carousel,
        title: 'フラッシュカード',
        rightTitle: 'Thẻ ghi nhớ',
        onPress: () => navigation.navigate('CourseTest')
      },
      {
        icon: ic_spellcheck,
        title: '語彙テスト',
        rightTitle: 'Kiểm tra từ vựng',
        onPress: () => navigation.navigate('CourseTest', { idCourse: id })
      },
      {
        icon: ic_assignment,
        title: 'まとめ知識',
        rightTitle: 'Tổng quan kiến thức',
        onPress: () => navigation.navigate('CourseTest')
      },
      {
        icon: ic_record_voice_over,
        title: '話し中',
        rightTitle: 'Cách phát âm',
        onPress: () => navigation.navigate('CourseTest')
      },
    ];

    return (
      <ViewVertical style={{ flex: 1, backgroundColor: '#fff' }}>
        <Header
          noShadow={true}
          stylesHeaderText={{
            color: '#000',
            fontSize: 15,
            fontWeight: 'bold',
          }}
          // mainText={'Học theo chủ đề'}
          stylesHeader={Styles.header}
          leftComponent={
            <Image source={ic_arrow_back} style={Styles.backarrow} />
          }
          leftAction={() => navigation.goBack()}
          actionRight={[
            {
              // component: <BadgedIcon type="ionicon" name="md-notifications" color={"#fff"} style={styles.icon}/>,
              component: (
                <Image source={ic_notifications} style={styles.icon} />
              ),
              action: () => navigation.navigate('Notifications'),
              styleTouchable: {
                top: 9,
              },
            },
            {
              component: (
                <Avatar rounded source={{ uri: user?.avatar }} size="small" />
              ),
              action: () => navigation.navigate('Profile'),
              styleTouchable: {
                top: 9,
              },
            },
          ]}
        />

        {!loading ? (
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: 'white',
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            {/* slide */}
            <Text style={Styles.titleHeader}>トピックで学ぶ</Text>
            <Text style={Styles.textHeader}>Học theo chủ đề</Text>
            {/* <View style={Styles.containerSlider}> */}
            <View style={Styles.slider}>
              <SildeCourese data={data} />
            </View>
            {/* </View> */}
            {/* endslide */}

            <ViewVertical style={Styles.progressContainer}>
              <Text style={Styles.progressText}>
                Tiến độ hoàn thành của chủ đề: 75%
              </Text>
              <Progress.Bar progress={0.75} width={200} />
            </ViewVertical>

            <ViewVertical style={Styles.eventContainer}>
              <Text style={Styles.eventText}>
                Chủ đề bao gồm: 10 thẻ ghi nhớ
              </Text>

              {CardList
                ? CardList.map((item, index) => {
                    return (
                      <ListItem
                        key={index}
                        leftElement={<Image source={item.icon} />}
                        title={item.title}
                        rightTitle={item.rightTitle}
                        titleStyle={Styles.titleStyle}
                        rightTitleStyle={Styles.titleStyle}
                        containerStyle={Styles.containerStyleItem}
                        rightContentContainerStyle={
                          Styles.rightContentContainerStyle
                        }
                        onPress={item.onPress}
                      />
                    );
                  })
                : null}
            </ViewVertical>

            {/* game */}
            <View style={{ backgroundColor: '#E8EAF6', paddingBottom: 20 }}>
              {/* <Text style={Styles.title}>Game</Text> */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CourseTest', {
                    id: navigation.getParam('idCourese'),
                  })
                }
                style={{
                  ...Styles.cardGame,
                  height: 100,
                  borderBottomColor: '#00E676',
                }}
              >
                <Icon name="clone" size={30} color={'#00E676'}></Icon>
                <Text style={{ ...Styles.titleGame, color: '#00E676' }}>
                  Kiem tra
                </Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  onPress={this._handleToMemmory}
                  style={{
                    ...Styles.cardGameTwo,
                    borderBottomColor: '#7986CB',
                  }}
                >
                  <Icon name="database" size={30} color={'#7986CB'}></Icon>
                  <Text style={{ ...Styles.titleGame, color: '#7986CB' }}>
                    Thẻ Ghi Nhớ
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...Styles.cardGameTwo,
                    borderBottomColor: '#FFA000',
                  }}
                >
                  <Icon name="user-graduate" size={30} color={'#FFA000'}></Icon>
                  <Text style={{ ...Styles.titleGame, color: '#FFA000' }}>
                    Học Viết
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* endgame */}
            {/* phat am*/}
            <View>
              <Text style={Styles.title}>Phát Âm</Text>
              {data.map((value, index) => {
                return (
                  <SoundCourse
                    key={index}
                    text={value.text}
                    mean={value.mean}
                    language={value.language}
                  />
                );
              })}
            </View>
          </ScrollView>
        ) : (
          <Loading />
        )}
      </ViewVertical>
    );
  }
}
