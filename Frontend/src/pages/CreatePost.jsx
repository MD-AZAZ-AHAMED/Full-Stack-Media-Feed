import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const CreatePost = () => {

    const navigate = useNavigate();

    const handleSubmit =async (e) =>{
        e.preventDefault()

        const formData =new FormData(e.target)
        axios.post('http://localhost:3000/create-post',formData)
        .then((res)=>{
           
            navigate('/feed')
        })
        .catch((err)=>{
            console.log(err)
            alert("Failed to create post. Please try again.")
        })
    }


  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
            <input type='file'name='image' accept='image/*' />
            <input type='text' name='caption' placeholder="Enter a Caption" required />
            <button type='submit'>Submit</button>
            <button type='button' onClick={() => navigate('/feed')}>Go to Feed</button>
        </form>

    </section>
  )
}

export default CreatePost