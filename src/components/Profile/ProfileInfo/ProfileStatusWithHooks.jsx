import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div>
      { !editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
        </div>
      }
      { 
        editMode &&
        <div>
          <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
        </div>
      }
    </div>
  )
}
 
export default ProfileStatusWithHooks;