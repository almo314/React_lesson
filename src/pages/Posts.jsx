import ClassCounter from '../components/ClassCounter';
import Counter from '../components/Counter';
import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import PostList from '../components/PostList.jsx';
import PostForm from '../components/PostForm';
import MyButton from '../components/UI/button/MyButton';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

const Posts = () => {
    const [posts, setPosts] = useState([
        // {id: 1, title: "JavaScript", body: "description"},
        // {id: 2, title: "JavaScript 2", body: "description"},
        // {id: 3, title: "c 3", body: "z"},
        // {id: 4, title: "b 4", body: "y"},
        // {id: 5, title: "a 5", body: "x"}
    ]);

    // const [selectedSort, setSelectedSort] = useState('');
    // const [searchQuery, setSearchQuery] = useState('');

    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    });

    useEffect(() => {
        fetchPosts()
    }, [page]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => post.id !== p.id))
    };

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className='App'>
            <button onClick={fetchPosts}>api</button>
            <Counter />
            <ClassCounter />
            <hr style={{ margin: '15px 0' }} />
            <MyButton onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError && <h1>Error ${postError}</h1>}
            {isPostsLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов 1'} />
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPage={totalPages}
            />
        </div>
    )
}

export default Posts;