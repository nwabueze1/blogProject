import React, {useState, useEffect} from 'react';
import './style.css'
import Card from '../UI/Card';
import blogData from '../../data/blog.json'

const BlogPost = (props) => {

    const [postId, setPostId] = useState("")
  
    const [post, setPost]=useState({
            id:"",
            blogCategory:"" ,
            blogTitle:"",
            slug:"",
            postedOn:"",
            author:"",
            blogImage:"",
            blogText:"",
    });
   useEffect(()=>{
    const postId=props.match.params.postId;
    const post=blogData.data.find(post=>post.id==postId)
    setPost(post);
    setPostId(postId)
   },[post, props.match.params.postId]);
  if(post.blogImage=="") return null;

    return (
        
           <div className="blogPostContainer">
               <Card>
                   <div className="blogHeader">
                   <span className='blogCategory'>{post.blogCategory}</span>
                    <h1 className='postTitle'>{post.blogTitle}</h1>
                   <span className='postedby'>{post.postedOn}, {post.author}</span>
                   </div>
                   <div className="postimageContainer">
                        <img src={require(`../../blogPostImages/${post.blogImage}`)} alt="Post image"></img>
                   </div>
                   <div className='postContent'>
                        <h3>{post.blogTitle}</h3>
                        <p>{post.blogText}</p>
                   </div>
               </Card>
           </div>
        
    );
}

export default BlogPost;
