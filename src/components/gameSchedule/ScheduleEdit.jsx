import React, {Component, PropTypes} from 'react';
import {Button, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';
import {convertSecToTime} from '../../helpers/helpers';
import {BUSY_SCHEDULE_STATUS} from '../../helpers/constants';

const ScheduleEdit = ({selectedRange, editableRange, updateUserName, updateStartTime, updateEndTime, saveSchedule}) => {
  return (
    <div className="schedule-edit">
      <h3>{selectedRange.status === BUSY_SCHEDULE_STATUS ? 'Edit current range' : 'Create new range'}</h3>

      <div>
        <FormGroup>
          <ControlLabel>User name</ControlLabel>
          <FormControl type="text" value={selectedRange.userName} placeholder="User name"
                       onChange={updateUserName} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Start time</ControlLabel>
          <TimePicker onChange={updateStartTime} value={selectedRange.startTime}
                      start={convertSecToTime(editableRange.startTime)}
                      end={convertSecToTime(selectedRange.endTime)} step={15} format={24} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>End time</ControlLabel>
          <TimePicker onChange={updateEndTime} value={selectedRange.endTime}
                      start={convertSecToTime(selectedRange.startTime)}
                      end={convertSecToTime(editableRange.endTime)} step={15} format={24} />
        </FormGroup>
        <FormGroup>
          <Button bsStyle="primary" onClick={saveSchedule}>Save changes</Button>
        </FormGroup>
      </div>
    </div>
  );
};

ScheduleEdit.propTypes = {
  actions: PropTypes.object,
  selectedRange: PropTypes.object.isRequired,
  editableRange: PropTypes.object.isRequired,
  updateUserName: PropTypes.func.isRequired,
  saveSchedule: PropTypes.func.isRequired,
  updateStartTime: PropTypes.func.isRequired,
  updateEndTime: PropTypes.func.isRequired
};

export default ScheduleEdit;
