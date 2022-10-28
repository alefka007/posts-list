import PostForm from '../../components/PostForm/PostForm';
import PostList from '../../components/PostList/PostList';
import { useEffect, useState } from 'react';
import PostFilter from '../../components/PostFilter/PostFilter';
import MyModal from '../../UI/modal/MyModal';
import { usePosts } from '../../hooks/usePosts';
import PostService from '../../API/PostService';
import Loader from '../../UI/loader/Loader';
import useFetching from '../../hooks/useFetching';
import { getPageCount } from '../../utils/page';
import { PostsContext } from '../../context/context';
import classes from './Posts.module.css';
import { Pagination, Button } from '@mui/material';


function Posts() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [filter, setFilter] = useState({ sort: '', query: '' });

    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {

        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPage(getPageCount(totalCount, limit));
    });
    

    useEffect(() => {
        fetchPosts(limit, page);
    }, []);


    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    };


    const removePost = (id) => {
        setPosts(posts.filter(p => p.id !== id));
    };

    return (
        <div className={classes.posts}>
            <PostsContext.Provider value={{ posts, setPosts, removePost, setModal }}>
                <Button variant="contained" onClick={() => setModal(true)}>
                    Create post
                </Button>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm />
                </MyModal>
                <PostFilter filter={filter} setFilter={setFilter} />
                {postError &&
                    <h2 style={{ marginTop: '20px', textAlign: 'center' }}>Произошла ошибка: {postError}</h2>}
                {isPostLoading ? <Loader /> :
                    <PostList postError={postError}
                        posts={sortedAndSearchPosts}
                        title='Posts' />}
                <Pagination
                    color="primary"
                    className={classes.container}
                    hideNextButton={true}
                    hidePrevButton={true}
                    onClick={(e) => changePage(e.target.innerText)}
                    count={limit}
                />
            </PostsContext.Provider>
        </div>
    );
}

export default Posts;