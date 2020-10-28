import React from 'react';
import './style.css'
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/Sidebar';


const Post = (props) => {
    console.log(props)
    return (
        <section className="container">
            <BlogPost {...props}></BlogPost>
            <SideBar></SideBar>
        </section>
    );
}

export default Post;
