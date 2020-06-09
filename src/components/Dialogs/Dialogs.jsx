import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validator";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newMessageBody' placeholder='Enter your message' component={Textarea} validate={[required, maxLength50]}/>
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm);

export default Dialogs;