import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

const login = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Object.is(username, "bilibili") && Object.is(password, "libilibi")) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  })
}

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login({ username, password })
      setPassword("");
      setError("");
      setIsLoading(false);
      setIsLogin(true);
      console.log("Ok");
    } catch (error) {
      console.log("No Ok");
      setUsername("");
      setPassword("");
      setError("Incorrect Username or Password");
      setIsLoading(false);
      console.log("No Ok");
    }
  }

  return (
    <div className="card container mt-5">

      {isLogin ?
        <div>
          <h2>Welcome {username}</h2>
          <button onClick={() => {
            setIsLogin(false);
            setUsername("");
          }} className="btn btn-dark">Logout</button>
        </div>
        :
        <div className="card-body">
          < h1 className="card-title">React Login</h1>
          {error && <h4 className="text-danger">{error}</h4>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
              <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={e => setUsername(e.currentTarget.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="current-password" className="form-control" id="exampleInputPassword1" value={password} onChange={e => setPassword(e.currentTarget.value)} />
            </div>

            <button type="submit" className="btn btn-dark w-100 btn-primary" disabled={isLoading ? true : false}>{isLoading ? "Submitting" : "Submit"}</button>
          </form>
        </div>
      }



    </div >
  );
}

export default App;
