import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/authLayout.jsx";

export default function Signup() {
  return (
    <AuthLayout>
      <form>
        <div className='d-flex flex-row align-items-center justify-content-center '>
          <p className='lead fw-normal mb-3 me-3 fs-3'>Sign up </p>
        </div>

        <div className='form-outline mb-4'>
          <input
            type='email'
            id='form3Example3'
            className='form-control form-control-lg'
            placeholder='Enter a valid email address'
          />
        </div>

        <div className='form-outline mb-3'>
          <input
            type='password'
            id='form3Example4'
            className='form-control form-control-lg'
            placeholder='Enter password'
          />
        </div>
        <div className='form-outline mb-3'>
          <input
            type='text'
            id='form3Example4'
            className='form-control form-control-lg'
            placeholder='Enter your name'
          />
        </div>
        <div className='form-outline mb-3'>
          <input
            type='text'
            id='form3Example4'
            className='form-control form-control-lg'
            placeholder='Enter your phone number'
          />
        </div>
        <div className='form-outline mb-3'>
          <input type='text' id='form3Example4' className='form-control form-control-lg' placeholder='Enter address' />
        </div>

        <div className='text-center text-lg-start mt-4 pt-2'>
          <button type='button' className='btn btn-primary btn-lg px-5'>
            Register
          </button>
          <p className='small fw-bold mt-2 pt-1 mb-0 fs-6'>
            You have account?{" "}
            <Link to='/login' className='link-danger'>
              Login
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
