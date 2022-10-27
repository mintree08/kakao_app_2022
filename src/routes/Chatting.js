import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/chatting.scss';

function Chatting() {

  
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();
  if (location.state === undefined) {
    navigate('/');
  }
  
  const { name, img } = location.state;

  return (
    <div className='chatting'>
      <Header
        heading = {name}
        leftItemLink = "/chats"
        leftItem = {<i className="fa-solid fa-angle-left"></i>}
        rightItem = {
          <>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-bars"></i>
          </>
        }
      />
      <main>
        <span className="date_info">Monday, October 17, 2022</span>
        <div className="chat_box my">
          <span className="chat">Hello!</span>
          <span className="chat">Hello! This is a test message. This is a test message. This is a test message.</span>
          <span className="chat">This is a test message.</span>
          <span className="chat_time"><span>16</span>:<span>30</span></span>
        </div>
        <div className="chat_box other">
          <div className="other_info">
            <Link to="/profile"><span className="profile_img empty"><img src={img} alt={name} /></span></Link>
            <span className="profile_name">{name}</span>
          </div>
          <span className="chat">And this is an answer.</span>
          <span className="chat">And this is an answer. And this is an answer.</span>
          <span className="chat">And this is an answer.</span>
          <span className="chat_time"><span>17</span>:<span>33</span></span>
        </div>
      </main>
      <footer>
        <span className="plus_btn"><Link to="#"><i className="fa-solid fa-plus"></i></Link></span>
        <form action="/" method="post">
          <fieldset className="text_box">
            <legend className="blind">채팅 입력창</legend>
            <label for="chatting" className="blind">채팅 입력</label>
            <input type="text" id="chatting" className="text_field" />
            <span className="emoticon_btn"><Link to="#"><i className="fa-regular fa-face-smile"></i></Link></span>
            <span className="voice_btn"><Link to="#"><i className="fa-solid fa-microphone"></i></Link></span>
          </fieldset>
        </form>
      </footer>
    </div>
  );
}

export default Chatting;