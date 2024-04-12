import React, { useContext, useEffect, useState } from "react";
import { isAuthorizedContext } from "../context/CustomContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const CreatePost = () => {
  const navigate = useNavigate();
  const { isAuthorized, user } = useContext(isAuthorizedContext);

  const [postData, setPostData] = useState({
    title: "",
    category: "",
    expirationDate: "",
    tags: "",
    description: ""
  })

  console.log(postData)

  const postChange = (e) => {
    const {name, value} = e.target;
    setPostData(() =>{
        return{
            ...postData,
            [name]: value
        }
    })
  }

  useEffect(() => {
    if (!isAuthorized || (user && user.role !== "Author")) {
      toast.error("You Don't have access this resourse");
      navigate("/");
    }
  }, [isAuthorized, user, navigate]);

  return (
    <>
      <div className=" bg-white rounded-lg shadow-md p-6">
        <div className="container mx-auto">
          <h3 className="text-2xl text-center font-bold mb-4 text-[#D52636]">
            Post New Post
          </h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div>
            <label htmlFor="postTitle" className="text-gray-600 mb-2 block">Title</label>
              <input
                type="text"
                id="postTitle"
                value={postData.title}
                onChange={postChange}
                name="title"
                placeholder="Title"
                className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D52636]"
                required
              />
            </div>
            <div>
            <label htmlFor="postCategory" className="text-gray-600 mb-2 block">Select Category</label>
              <select
                className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D52636]"
                required
                id="postCategory"
                value={postData.category}
                name="category"
                onChange={postChange}
              >
                <option value="">Select Category</option>
                <option value="Social">Social</option>
                <option value="Technology">Technology</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Health">Health</option>
                <option value="Business">Business</option>
              </select>
            </div>
                <div>
                <label htmlFor="expirationDate" className="text-gray-600 mb-2 block">Expiration Date (Optional)</label>
                <input
                type="date"
                value={postData.expirationDate}
                name="expirationDate"
                onChange={postChange}
                id="expirationDate"
                className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                </div>
                <div>
                <label htmlFor="tagsPost" className="text-gray-600 mb-2 block">Tags (Optional)</label>
              <input
                type="text"
                placeholder="Tags"
                value={postData.tags}
                name="tags"
                onChange={postChange}
                className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D52636]"
                required
                id="tagsPost"
              />
                </div>
            </div>
            <div className="mt-6">
            <label htmlFor="descPost" className="text-gray-600 mb-2 block">Description</label>
              <textarea
                rows="4"
                placeholder="Description"
                value={postData.description}
                name="description"
                onChange={postChange}
                className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D52636]"
                required
                id="descPost"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-[#D52636] text-white rounded-md mt-4 hover:bg-red-700"
            >
              Post
            </button>
          </form>
        </div>
      </div>

      <Toaster />
    </>
  );
};

export default CreatePost;
