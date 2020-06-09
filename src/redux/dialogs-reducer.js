const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

let initialState = {
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
  ],
  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_NEW_MESSAGE:
      return  {
        ...state,
        messages: [...state.messages, {id: 6, message: action.newMessageBody}]
      }
    default:
      return state;
  }
}

export let sendNewMessageActionCreator = (newMessageBody) => ({type: SEND_NEW_MESSAGE, newMessageBody});

export default dialogsReducer;