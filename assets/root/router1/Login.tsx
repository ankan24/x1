import React from 'react'

function Login() {
  return (
    <div>
        <h3>Login page</h3>
        <form className="App">
                <input type="email" />
                <input type="password" />
                <input type={"submit"}
                    style={{ backgroundColor: "#a1eafb" }} />
            </form>
    </div>
  )
}

export default Login