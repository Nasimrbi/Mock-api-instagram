import { useContext } from 'react';
import './Post.css'
import { notification } from '../../contexts/NotifContext';
import { likeContext } from '../../contexts/LikeContext';

/**
 * Post component, displays a post with its content and associated buttons
 * 
 * @param {Object} post - The post object to display
 * @returns {React.ReactElement} A React element representing the post
 */
// eslint-disable-next-line react/prop-types
function Post({title , description , image}) {

  const {count , setCount} = useContext(notification)

  // eslint-disable-next-line no-unused-vars
  const {hearts , setHearts} = useContext(likeContext)
  
  const handleAddHeart = () => {
    const id = Date.now(); // تولید یک ID یکتا
    setHearts((prev) => [...prev, id]);

    // حذف قلب بعد از اتمام انیمیشن
    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart !== id));
    }, 2000); // مدت زمان انیمیشن
  };

  

  return (
    <div className="card">
      <div className="top">
        <div className="userDetails">
          <div className="profile_img">
            <img
              src="https://zupimages.net/up/22/29/j5pm.jpg"
              className="cover"
              alt=""
            />
          </div>
          {/* <!-- Main Title --> */}
          <h3>
           {title}
            <br />
            {/* <span>Khao Lak, Thailande</span> */}
          </h3>
        </div>
        <div>
          {/* <!-- Settings Dot --> */}
          <div className="settings"></div>
        </div>
      </div>
      <div className="imgBox">
        {/* <!-- Main Image --> */}
        <img src={image} className="cover" />
      </div>
      {/* <!-- Buttons --> */}
      <div className="buttons">
        {/* <!-- Like Button --> */}
        <img  onClick={() => {
          setCount(count + 1)
          handleAddHeart()
        }} className="icon" src="https://zupimages.net/up/22/29/d1bd.png" />

        {/* <!-- Comment Button --> */}
        <img className="icon" src="https://zupimages.net/up/22/29/h5ft.png" />

        {/* <!-- Share Button --> */}
        <img className="icon" src="https://zupimages.net/up/22/29/9y56.png" />
      </div>

      {/* <!-- Number Like --> */}
      <h4 className="likes">1, 038 likes</h4>

      {/* <!-- Description --> */}
      <h4 className="message">
        {description}
        🌅#sunset
      </h4>
    </div>
  );
}

export default Post;
