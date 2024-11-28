import "./Navbar.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { deleteCookie } from "../../hooks/deleteCookie";
import { useContext, useEffect } from "react";
import { notification } from "../../contexts/NotifContext";
import { likeContext } from "../../contexts/LikeContext";

function Navbar() {
  const navigate = useNavigate();

  useEffect(() => {

  },[])

  const logOut = () => {
    deleteCookie("isLogin");
    deleteCookie("email");
    navigate("/login", { replace: true });
    window.location.reload();
  };

  const notif = useContext(notification);

  const {hearts} = useContext(likeContext)

  return (
    <div className="navigation">
      <div className="logo">
        <Link className="no-underline" href="https://instagram.com/mimoudix">
          Instagram
        </Link>
      </div>

      <div className="navigation-icons">
        <Link
          to="https://instagram.com/mimoudix"
          target="_blank"
          className="navigation-link"
        ></Link>
        <Link
          to={"/"}
          className="navigation-link wrapper-notification "
        >
          <FaRegHeart />
          <div className="notification-bubble">{notif.count}</div>
          {hearts.map((id) => (
            <div
              key={id}
              className="heart"
              style={{
                left: `${Math.random() * 80 + 10}%`, // موقعیت افقی تصادفی
                bottom: "10px",
              }}
            ></div>
          ))}
        </Link>
        <Link to="/userpanel" className="navigation-link">
          <FaRegUserCircle className="text-3xl" />
        </Link>
        <Link to="#" id="signout" className="navigation-link" onClick={logOut}>
          <FiLogOut className="text-3xl" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
