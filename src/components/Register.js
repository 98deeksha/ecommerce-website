import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const Register = (props) => {
    const inputRef = useRef()
    const [userDetails, setUserDetails ] = useState({
        name:'',
        email:'',
        password:''
    })

    const { name, email, password } = userDetails

    useEffect(() => {
        inputRef.current.focus()
    },[])

    const handleChange = (e) => {
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userDetails)
        setUserDetails('')
        // axios.post('http://localhost:3000/register', userDetails)
        // .then((response) => {
        //     const result = response.data
        //     if(result.hasOwnProperty("errors")){
        //         alert(result.message)
        //     } else {
        //         alert("Registration successful")
        //         console.log(userDetails);
        //         props.history.push("/signin");
        //     }
        // })
        // .catch((err) => {
        //     console.log(err)
        //     setUserDetails('')
        // })
        
    }

  return (
    <div className="grid lg:grid-cols-2 h-screen">
      <div className="bg-blue-600">
        <p className="text-white m-20 text-2xl">
          Register with us for new and exciting shopping experience!!
        </p>
      </div>
      <div className="bg-gray-200 mt-20 lg:m-20 sm:m-10 text-center">
        <h1 className="lg:text-3xl md:text-2xl sm:text-md mt-7">Register with us</h1>
        <form onSubmit={handleSubmit} className="p-12">
          <input
            ref={inputRef}
            type="text"
            placeholder="enter name"
            name="name"
            className="mt-3 w-full p-2 rounded"
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            placeholder="enter email"
            name="email"
            className="mt-3 w-full p-2 rounded"
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            placeholder="enter password"
            name="password"
            className="mt-3 w-full p-2 rounded"
            onChange={handleChange}
          />
          <br />
          <input
            type="submit"
            value="Register"
            className="cursor-pointer mt-5 bg-orange-400 w-full rounded p-1"
          />
        </form>
      </div>
    </div>
  );
}

export default Register