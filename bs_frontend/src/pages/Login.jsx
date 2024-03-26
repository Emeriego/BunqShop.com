import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const getUsername = (e) => {
    const username = e.target.value
    setUsername(username)

  }
  const getPassword = (e) => {
    const password = e.target.value
    setPassword(password)

  }



  const loginUser = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8000/login/', { username, password });
      const { access_token, refresh_token } = response.data; // Assuming the response contains both access and refresh tokens
      // Store tokens securely, e.g., in local storage
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('refreshToken', refresh_token);
      return access_token; // Returning the access token
    } catch (error) {
      console.error('Error logging in:', error);
      return null;
    }
  }


  const loginFormSubmit = () => {
    preventDefault()
    loginUser(username, password)
  }

  return (
    <section className="contact_section layout_padding">
      <div className="container px-0">
        <div className="heading_container ">
          <h2 className="">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="container container-bg">
        <div className="row">
          <div className="col-lg-7 col-md-6 px-0">
            <div className="map_container">
              <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="300" frameborder="0" style={{ border: '0', width: '100%', height: '100%' }} allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 px-0">
            <form onSubmit={loginFormSubmit}>
              <div>
                <input type="text" placeholder="Username" name='username' onChange={getUsername()} />
              </div>
              <div>
                <input type="password" placeholder="Password" name='password' onChange={getPassword()} />
              </div>

              <div className="row mx-1 ">
                <button>
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;
