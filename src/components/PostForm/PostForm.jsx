import React, { useContext, useState } from 'react';
import { PostsContext } from '../../context/context';
import { TextField, Button } from '@mui/material';
import styles from './PostForm.module.css';

const PostForm = () => {
    const [post, setPost] = useState({ title: '', body: '' });
    const { posts, setPosts, setModal } = useContext(PostsContext)

    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = {
            ...post,
            id: posts.length + 1,
        }
        setPosts([...posts, newPost])
        setPost({ title: '', body: '' })
        setModal(false)
    }

    return (
        <form className={styles.form}>
            <TextField
                sx={{marginTop: '.5rem'}}
                id="standard-basic" label="Title" variant="standard"
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type='text'
            />
            <TextField
                sx={{marginTop: '.5rem'}}
                multiline
                id="standard-basic" label="Description" variant="standard"
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type='text'
            />
            <Button sx={{marginTop: '.5rem'}} onClick={addNewPost}>Create post</Button>
        </form>
    );
};

export default PostForm;