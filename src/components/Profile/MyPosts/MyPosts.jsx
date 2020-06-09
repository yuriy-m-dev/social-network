import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validator';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPost = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.myPosts}>
        {postsElements}
      </div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>  
        <Field name='newPostText' placeholder='Post message' component={Textarea} validate={[required, maxLength10]} />
      </div>
      <div>
        <button >Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form:'profileAddNewPostForm'})(AddNewPostForm);

export default MyPost;
