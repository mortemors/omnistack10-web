import React, { useState, useEffect } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            ></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Usuário do Github</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            ></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              ></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              ></input>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/59920794?s=460&v=4"
                alt="imagem do usuário"
              />
              <div className="user-info">
                <strong>JefersonGB</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              sunt quibusdam quam at temporibus quas natus similique tempore qui
              fuga!
            </p>
            <a href="https://github.com/JefersonGB" alt="Teste"></a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/59920794?s=460&v=4"
                alt="imagem do usuário"
              />
              <div className="user-info">
                <strong>JefersonGB</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              sunt quibusdam quam at temporibus quas natus similique tempore qui
              fuga!
            </p>
            <a href="https://github.com/JefersonGB"></a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/59920794?s=460&v=4"
                alt="imagem do usuário"
              />
              <div className="user-info">
                <strong>JefersonGB</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              sunt quibusdam quam at temporibus quas natus similique tempore qui
              fuga!
            </p>
            <a href="https://github.com/JefersonGB"></a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/59920794?s=460&v=4"
                alt="imagem do usuário"
              />
              <div className="user-info">
                <strong>JefersonGB</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              sunt quibusdam quam at temporibus quas natus similique tempore qui
              fuga!
            </p>
            <a href="https://github.com/JefersonGB"></a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
