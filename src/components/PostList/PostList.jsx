import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from '../PostItem/PostItem';
import './PostList.css';

function PostList({ posts, title, postError }) {

    if (!posts.length && !postError) {
        return (
            <h1 className='postNotFound'>
                Posts not found!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{!postError && title}</h1>
            <TransitionGroup>
                {posts.map( post =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='post'
                        >
                        <PostItem post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default PostList;