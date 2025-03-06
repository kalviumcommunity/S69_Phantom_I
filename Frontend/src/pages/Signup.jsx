import React, { useState } from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const [submit, setSubmit] = useState(false);

  const doneSubmit = async (data) => {
    console.log(data);
    reset();

    try {
        const response = await fetch("http://localhost:3000/api/users/create", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: `${data.name}`, 
                email: data.email,
                password: data.password,
            }),
        });

        const responseData = await response.json();

        if (response.ok) {
            alert("Sign-up Successful!");
            setSubmit(true);
            reset(); 
            navigate("/");
        }

        else {
            throw new Error(responseData.message || "Something went wrong");
        }

    } catch (err) {
        console.log(err);
    }
};


  const password = watch("password");

 

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-200">
      <div className="max-w-lg m-5 p-4 text-center bg-white rounded-lg shadow-2xl shadow-black">
        <h1 className='text-blue-500 text-2xl pb-3 font-bold'>SIGN UP</h1>
        <form className="flex flex-col gap-4 w-70" onSubmit={handleSubmit(doneSubmit)}>

          <input
            placeholder='Name'
            className='p-3 border-2 rounded-md'
            {...register('name', { required: "Name is required" })}
          />
          {errors.name && <span className='flex justify-start rounded-md pl-2 text-red-500'>{errors.name.message}</span>}

         
          <input
            placeholder="Email"
            className='p-3 border-2 rounded-md'
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid Email" },
            })}
          />
          {errors.email && <span className='flex justify-start pl-2 text-red-500'>{errors.email.message}</span>}

          <input
            type='password'
            placeholder="Password"
            className='p-3 border-2 rounded-md'
            {...register("password", {
              required: "Password is required",
              minLength: { value: 5, message: "Password must be more than 5 characters" },
              maxLength: { value: 20, message: "Password cannot exceed 20 characters" },
              pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{5,}$/, message: "Password must contain at least a digit, special character, an Upper Case, and a lower case character" }
            })}
          />
          {errors.password && <span className='flex justify-start pl-2 text-red-500'>{errors.password.message}</span>}

          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 border-2 rounded-md"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) => value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && <span className='flex justify-start pl-2 text-red-500'>{errors.confirmPassword.message}</span>}

      
        
          <button type='submit' className='p-2 bg-gradient-to-r from-blue-500 to-indigo-600 h-10 rounded-md hover:bg-blue-600 text-white '>
            SIGN UP
          </button>
         

          <div className='flex items-center justify-center gap-2'>
            <span className="text-sm text-gray-600">Already have an account?</span>
            <Link to="/login" className="text-blue-500 hover:underline text-sm">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
