import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../../common/NewsCard'

const NewsCardHome = () => {
  const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
  const [postData, setPostData] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BACKEND_URI}/api/v1/post/getall`,{
          withCredentials: true
        });
        // console.log(res);
        setPostData(res.data.posts);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [])

  console.log(postData)

  return (
    <>
      {/* <NewsCard/> */}
      <section className='py-[50px]'>
        <div className="container mx-auto">
            <div className="flex justify-center text-3xl mb-5 font-bold">
                <h4>News</h4>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {postData.length !== 0 ? 
                    postData.map((data) => {
                    return(
                        <div key={data.title}>
                        {console.log(`${BACKEND_URI}/uploads/${data.postimage}`)}
                        <NewsCard postimageurl={data.postimage} posttitle={data.title} postdesc={data.description}/>
                        </div>
                    )
                    })
                :
                <h2 className='text-center text-3xl py-5'>No Post Found</h2>
                }
            </div>
        </div>
      </section>
    </>
  )
}

export default NewsCardHome