import React, { useContext } from "react";
import classes from  '../PostItem/PostItem.module.css';
import { PostsContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const PostItem = (props) => {
    const { removePost } = useContext(PostsContext);

    const router = useNavigate()

    return (
        <div className={classes.post}>
        <div className={classes.postContent}>
          <strong>{props.post.id}. {props.post.title}</strong>
          <br/>
          <span>
            {props.post.body}
          </span>
        </div>
        <div className={classes.postButton}>
          <Button variant="contained" color="success" onClick={() => router(`/posts/${props.post.id}`)}>OPEN</Button>
          <Button variant="contained" color="error" onClick={() => removePost(props.post.id)}>DELETE</Button>
        </div>
      </div>
    )
}

export default PostItem