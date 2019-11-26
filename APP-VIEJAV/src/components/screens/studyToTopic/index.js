import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";
import Loading from "../../common/loading";
import { CoursesACtion } from "../../../actions/CoursesAction";
import Topic from "./Topic";
import Service from "../../../services";
import { showMessage, hideMessage } from "react-native-flash-message";
import PropTypes from "prop-types";
import Styles from "./styles";

class StudyTopPic extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Học Theo Chủ Đề",
    headerTitleStyle: { color: "#ffffff", fontSize: 20 },
    headerStyle: { backgroundColor: "#536DFE", color: "white" },
    headerTintColor: "white"
  });

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentDidMount() {
    {
      console.log("didmout ne");
      this.props.dispatch(CoursesACtion._getCoursesRequest());
    }
  }
  _actionDeleteCourese = id => {
    console.log("id xoa", id);
    const params = { id };
    Service.deleteCourses(params)
      .then(data => {
        showMessage({
          message: "Xóa thành công",
          type: "success"
        });
        this.props.dispatch(CoursesACtion._deleteCourses(id));
      })
      .catch(err => {
        showMessage({
          message: "Xóa thất bại",
          type: "danger"
        });
      });
    console.log("ok");
  };
  _handleGoToDetail = (id) => {
    console.log("idprops",id)
  
    this.props.navigation.navigate("GetCourese",{ idCourese: id})
  };
  render() {
    const { courses, loading } = this.props;
    console.log("courses", courses);
    const { avatar } = courses;

    return (
      <View style={{ flex: 1, backgroundColor: "#EEEEEE" }}>
        <ScrollView>
          {courses.courses
            ? courses.courses.map((data, index) => {
                return (
                  <Topic
                    id={data._id}
                    key={index}
                    avatar={avatar}
                    title={data.title}
                    lenght={data.contents.length}
                    _actionDeleteCourese={() =>
                      this._actionDeleteCourese(data._id)
                    }
                    _handleGoToDetail={()=>this._handleGoToDetail(data._id)}
                  />
                );
              })
            : null}
        </ScrollView>
        {loading && <Loading />}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.CoursesReducer.loading,
    courses: state.CoursesReducer.data,
    error: state.CoursesReducer.err
  };
};

export default connect(mapStateToProps, null)(StudyTopPic);

StudyTopPic.propTypes = {
  courses: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loading: PropTypes.bool
};
