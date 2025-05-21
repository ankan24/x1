import React from 'react'

function Signup() {
  return (
    <div>
        <form >
            <h3>Sign up page</h3>
                <input type="text" placeholder='name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type={"submit"}
                    style={{ backgroundColor: "#a1eafb" }} />
            </form>
    </div>
  )
}

export default Signup