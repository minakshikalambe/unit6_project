import React, { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <form className='signOut' onSubmit={submitData}>
      <span>Enter your email to get started</span>
      <label>Email</label>
      <input type='email' name='email' onChange={handleData} required />
      <label>Password</label>
      <input type='password' name='password' onChange={handleData} required />
      <span>
        By tapping Next, you agree to our <span>Privacy Policy</span> and{" "}
        <span>Terms & Conditions</span>
      </span>
      <button type='submit'>Next</button>
    </form>
  );
};

export default SignUp;