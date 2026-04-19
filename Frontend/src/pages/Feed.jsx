import React,{useState,useEffect} from 'react'
import axios from 'axios'


const Feed = () => {
    const [posts,setPosts] =useState([
        {
            _id:1,
            image:'https://ik.imagekit.io/sl2t7yywm/image_uU0qrQLCr.jpg'
            ,caption:'Beautiful Scenery'
        }
    ])

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then((res) =>{
            setPosts(res.data.posts)
        },[])
    })

  return (
    <section className='feed-section'>
        <h1>Feed</h1>
        <p>This is the feed page where all posts will be displayed.</p>
        {
            posts.length >0 ? (
                posts.map ((post)=>(
                <div key={post._id} className='post-card'>
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
                )) 
            ) : (
                <p>No posts available.</p>
            )
        }
        <button onClick={() => window.location.href='/create-post'}>Create New Post</button>
    </section>
  )
}

export default Feed