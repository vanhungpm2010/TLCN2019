import React, { useEffect, useState } from 'react';
import { Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Text from '../../components/text.component';
// import Header from 'components/header/header.component';
import { ViewVertical, ViewHorizontal } from '../../components/viewBox.component';

import styles from './styles';
import WebService from "../../services";
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';

// import colors from 'constants/colors';
// import { fontSizes, fontFamilies } from 'constants/fonts';
// import { BACK_ARROW } from 'assets';
// import NavigationActionsService from '@utils/navigation';
// import { NOTIFICATION_DETAIL } from 'constants/';
// import { RootState } from 'reducers/';
// import { getListNotifications } from 'actions/notification.action';
// import { strings } from 'utils/i18n';
import { showMessage, hideMessage } from "react-native-flash-message";
import Navigator from "@navigation/Navigator";

const NotificationList = (props: any) => {
  const [data, setData] = useState([]);
  // const list: any = useSelector<RootState>((state: RootState) => state.notification.list);

  // const dispatch = useDispatch();

  useEffect(() => {
    getList();
  }, []);

  setTimeout(() => {
    hasBeenSeen();
  }, 10000);

  const hasBeenSeen = () => {
    WebService.seenNotify()
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log("bi loi", err);
      });
  }

  const getList = () => {
    WebService.getListNoti()
      .then(async data => {
        setData(data.result);
      })
      .catch(err => {
        alert(err);
      });
  }
  const _onHandleAccept = async item => {
    const { contentMess, sentUser, _id } = item;

    try {
      await WebService.deleteNotify(_id);

      if(contentMess.type === 'INVITE_GAME') {
        await WebService.acceptGame({ friend_id: sentUser._id, content: contentMess.content, accept: true });
      } else {
        await WebService.addFriend({ friend_id: sentUser._id });
        showMessage({
          message: 'Success',
          type: 'success'
        });
        Navigator.navigate('Home');
      }
    } catch (err) {
      showMessage({
        message: 'Something went wrong',
        type: "danger"
      });
    }
  }

  const _onHandleCancel = (value) => {
    console.log('value', value)
  }

  
  return (
    <ViewVertical style={{ backgroundColor: '#fff' }}>
      <ViewVertical style={styles.container}>
        {(data && data.length > 0)
          ? <FlatList
            data={data}
            keyExtractor={item => {
              return item._id
            }}
            style={styles.flatContainer}
            renderItem={({ item }) => {
              return (
                <ViewVertical key={item._id} style={[
                  styles.boxItem,
                  item.read_by
                    ? ''
                    : { backgroundColor: '#EEBEBF' }
                ]}>
                  <TouchableOpacity>
                    <ViewHorizontal style={styles.boxHeader}>
                      <Avatar
                        size={40}
                        source={item.sentUser.avatar}
                        style={{}}
                      />
                      <ViewVertical style={styles.boxContent}>
                        <Text style={styles.itemName}>
                          {item.sentUser.username}
                          <Text style={styles.itemDescription}>
                            {item.contentMess.type == 'ADD_FRIEND'
                              ? ' đã gửi cho bạn lời mời kết bạn.'
                              : ' gửi lời mời tham gia thử thách'
                            }</Text>
                        </Text>
                        <ViewHorizontal style={styles.boxFooter}>
                          <TouchableOpacity
                            onPress={() => _onHandleAccept(item)}
                            style={styles.btnAccept}
                          >
                            <Text style={styles.btnText}>Đồng ý</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => _onHandleCancel(item._id)}
                            style={styles.btnCancel}
                          >
                            <Text style={styles.btnText}>Xóa</Text>
                          </TouchableOpacity>
                        </ViewHorizontal>

                      </ViewVertical>
                    </ViewHorizontal>
                  </TouchableOpacity>
                </ViewVertical>
              )
            }}
          />
          : <ViewVertical style={{ alignItems: 'center', justifyContent: 'center'}}>
              <Text >No notification</Text>
          </ViewVertical>
        }
      </ViewVertical>
    </ViewVertical>
  )
}

NotificationList.navigationOptions = {
  title: 'Notification'
}

export default NotificationList;