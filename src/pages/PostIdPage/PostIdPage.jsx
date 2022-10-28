import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetching from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import Loader from '../../UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams();

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {

        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async (id) => {

        const response = await PostService.getCommentsById(id);
        setComments(response.data);
    });


    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentsById(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу с комментарием с ID: {params.id}</h1>
            {isPostLoading
                ? <Loader />
                : <div>{post.id} - {post.title}</div>
            }
            <h1>Комментарии к посту:</h1>
            <div>
                {isCommentsLoading
                    ? <Loader />
                    : <div>
                        {comments.map(comm =>
                            <div key={comm.id} style={{ marginTop: '15px' }}>
                                <h2>{comm.email}</h2>
                                <div>{comm.body}</div>
                            </div>
                        )}
                    </div>

                }
            </div>
        </div>
    );
}

export default PostIdPage;