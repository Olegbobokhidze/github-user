import { useEffect, useState } from "react";
import sun from "./sun.png";
import moon from "./moon.png";
import Input from "./components/Input";
import "./app.css";
import UserInformation from "./components/UserInformation";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState();
  const [found, notFound] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    searchUser();
  }
  function searchUser() {
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}`,
    })
      .then((res) => {
        setUser(res.data);
        notFound("");
      })
      .catch((error) => {
        if (error.response.status === 404) {
          notFound("Not Found");
          console.log(error.response.status);
        }
      });
  }
  const [light, setDark] = useState({
    img: moon,
    text: "DARK",
    pColor: "green",
  });
  function changeMode() {
    if (light.img === moon) {
      setDark({
        img: sun,
        text: "LIGHT",
        color: "#1E2A47",
        textColor: "#FFF",
        userConnect: "#141D2F",
        svgColor: "#FFF",
        boxShadow: "none",
      });
    } else {
      setDark({
        img: moon,
        text: "LIGHT",
        color: "#fefefe",
        textColor: "#4B6A9B",
        svgColor: "#4B6A9B",
        userConnect: "#F6F8FF",
        boxShadow: "0px 5px 30px -10px #4660bb",
      });
    }
  }

  useEffect(() => {
    if (light.img === moon) {
      document.body.style.backgroundColor = "#f6f8ff";
    } else {
      document.body.style.backgroundColor = "#141D2F";
    }
  });
  return (
    <section className="App">
      <header>
        <h1 className={light.img === moon ? "lightTitle" : "darkTitle"}>
          devfinder
        </h1>
        <div className="imgholder">
          <p className={light.img === moon ? "darkp" : "lightp"}>
            {light.img === moon ? "DARK" : "LIGHT"}
          </p>
          <img
            className="modeimg"
            style={{ marginLeft: "8px" }}
            src={light.img}
            alt="test"
            onClick={changeMode}
          />
        </div>
      </header>
      <Input
        found={found}
        username={username}
        setUsername={setUsername}
        handleSubmit={handleSubmit}
        light={light}
      />
      <UserInformation user={user} light={light} />
    </section>
  );
}

export default App;
