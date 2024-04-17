import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const PostDetail = () => {
  const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
  const [post, setPost] = useState();

  const {id} = useParams();
  useEffect(() => {
    axios.get(`${BACKEND_URI}/api/v1/post/${id}`, {
      withCredentials: true
    }).then((data) => {
      // console.log(data)
      setPost(data.data.post)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  // console.log(post)

  return (
    <>
      {
        post ? <>
          <section className='py-16'>
            <div className="container mx-auto">
              <div className="flex flex-col">
                <div className="w-full h-[400px]">
                  <img src={`${BACKEND_URI}/uploads/${post.postimage}`} className='w-full h-full object-cover' alt="post image" />
                </div>
                <div className="mt-5">
                  <h3 className='text-3xl font-bold'>{post.title}</h3>
                  <p className='text-xl mt-3'>{post.description}</p>
                </div>
              </div>
            </div>
          </section>
        </> 
        : 
        <>
          <section className="page_404 bg-white py-10">
              <div className="container mx-auto">
                  <div className="row">
                  <div className="col-sm-12">
                      <div className="col-sm-10 col-sm-offset-1 text-center">
                      <div className="four_zero_four_bg bg-cover bg-center h-[500px]" style={{backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)'}}>
                          <h1 className="text-8xl">401</h1>
                      </div>
                      <div className="contant_box_404 mt-neg-32">
                          <h3 className="text-6xl">Look like you're not authorized</h3>
                          <p className="mt-4">the page you are looking for not available!</p>
                          <Link to="/login" className="link_404 inline-block py-2 px-4 text-white bg-[#d52634ce] mt-8">Go to login</Link>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
          </section>
        </>
      }
    </>
  )
}

export default PostDetail