import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();


  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault(); // stops page refreshing as we have anchor tag as link
    const id = uuidv4();
    setRoomId(id);
    toast.success("Created a new room");
    //console.log(id);
  };
  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("ROOM ID & username is required");
      return;
    }

    //redirect
    navigate(`/editor/${roomId}`, {
        state: {
            username, 
        }
    })
  };
  const handleInputEnter = (e) => {
      //console.log('event', e.code);
      if(e.code === 'Enter'){
        joinRoom();
      }
  }
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          src="/code-sync.png"
          alt="code-sync-logo"
          className="homePageLogo"
        ></img>
        <h4 className="mainLabel">Paste invitation Room ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          ></input>
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          ></input>
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with 💛&nbsp;by &nbsp;
          <a href="https://github.com/Paryank0419">Paryank Namdeo</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
