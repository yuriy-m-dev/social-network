import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hello, how are you?', likesCount: 12},
        {id: 2, message: 'I am fine', likesCount: 36},
        {id: 2, message: 'I am fine', likesCount: 36},
      ],
      newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
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
      ],
      newMessageText: 'test'
    },
    sidebar: {
      friend: [
        {name: 'Andrey', url: 'https://lofrev.net/wp-content/photos/2017/05/user_logo.png'},
        {name: 'Sasha', url: 'https://lofrev.net/wp-content/photos/2017/05/user_logo.png'},
        {name: 'Sveta', url: 'https://lofrev.net/wp-content/photos/2017/05/user_logo.png'},
      ]
    }
  },
  _callSubscriber() {
    console.log('test');
  },
  getState() {
    return this._state;
  },
  subscribe(observe) {
    this._callSubscriber = observe;
  },
  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._callSubscriber(this._state);
  }
}

export default store;