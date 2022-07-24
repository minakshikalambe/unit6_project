import React, { useState } from "react";

const Signin = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
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
    <form className='signIn' onSubmit={submitData} border={"1px solid rgb(244,51,151)"}>
      <span>Enter your email to get started</span>
      <label>Name</label>
      <input type='text' name='name' onChange={handleData} required />
      <label>Email</label>
      <input type='email' name='email' onChange={handleData} required />
      <label>Number</label>
      <input type='text' name='number' onChange={handleData} required />
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

export default Signin;