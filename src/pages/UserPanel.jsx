import {  useState } from "react";
import { getCookie } from "../../hooks/getCookie";
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from "react-router-dom";

function UserPanel() {

  const MySwal = withReactContent(Swal)

  const userEmail = getCookie("email");

  const [postTitle, setPostTitle] = useState();
  const [postDesc, setPostdesc] = useState();
  const [postImage, setPostImage] = useState();
  const [imagePreview , setImagePreview] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
   e.preventDefault()

   if (!postTitle || !postDesc || !postImage) {
    const Toast = MySwal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = MySwal.stopTimer;
        toast.onmouseleave = MySwal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      title: "لطفا تمام موارد را ارسال کنید"
    });
   }else {

    
   const data = {
    title: postTitle,
    description: postDesc,
    image: postImage
   }
  
     const addPost = async () => {
  
      const res = await axios.post('http://localhost:5000/posts',data,{
        headers : {
          'Content-Type': "application/json",
        }
      })

      if(res.status === 201) {
        const Toast = MySwal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = MySwal.stopTimer;
            toast.onmouseleave = MySwal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "پست با موفقیت افزوده شد"
        });
       navigate('/')
      }
     }
     
     addPost()

   }

  }
  

  const handleFileUpload = (event) => {
    const file = event.target.files[0]; 
    const reader = new FileReader();
  
    reader.onload = () => {
      const base64String = reader.result;
      setPostImage(base64String)
    };
  
    reader.readAsDataURL(file); // فایل را به فرمت Base64 تبدیل می‌کند
    
  };


  return (
   <div className="flex justify-center items-center mt-20">
     <div className="bg-white p-5 container mx-auto rounded-lg flex flex-col items-center">
      <h1 className="text-3xl">
        welcome back <span className="font-bold">{userEmail}</span> 🤝{" "}
      </h1>
      <form className="mt-10" onSubmit={handleSubmit}>
        <input
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          type="text"
          placeholder="Post title"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          value={postDesc}
          onChange={(e) => setPostdesc(e.target.value)}
          type="text"
          placeholder="Post description"
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <div className={`${imagePreview ? 'flex gap-10 items-center' : ''}`}>
        <div className="container-file my-20">
          <div className="folder">
            <div className="front-side">
              <div className="tip"></div>
              <div className="cover"></div>
            </div>
            <div className="back-side cover"></div>
          </div>
        
          <label className="custom-file-upload">
            <input className="title" type="file" accept="image/*" onChange={e => {
              setImagePreview(URL.createObjectURL(e.target.files[0]))
              handleFileUpload(e)
            }} />
            Choose a file
          </label>
        </div>
        {imagePreview && (
          <img src={imagePreview} alt="preview" style={{width : '300px' , height : 'auto'}} />
        )}
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
        >
          Add Post
        </button>
      </form>
    </div>
   </div>
  );
}

export default UserPanel;
