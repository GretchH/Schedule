import React, { Component } from "react";
import { connect } from 'react-redux';

import Action from '../components/action';
import * as actions from "../actions"

class ScheduleCourse extends Component {
  render() {
    return (
      <div className="schedule-course">
       <label className="schedule-couse_label">{this.props.title}</label>
       <Action onClick={() => this.props.toggleEnrolled(this.props.id)} className="schedule-course__action"/>
      </div>
    );
  }
}

export default connect(null, actions)(ScheduleCourse);