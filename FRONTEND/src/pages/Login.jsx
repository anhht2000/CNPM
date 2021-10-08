import React from "react";
import AuthLayout from "../layouts/authLayout.jsx";

export default function Login() {
  return (
    <AuthLayout>
      <form>
        <div className='d-flex flex-row align-items-center justify-content-center justify-content-lg-start'>
          <p className='lead fw-normal mb-0 me-3'>Sign in with</p>
          <button type='button' className='btn btn-primary btn-floating mx-1'>
            <i className='fa fa-facebook-f'></i>
          </button>

          <button type='button' className='btn btn-primary btn-floating mx-1'>
            <i className='fa fa-twitter'></i>
          </button>

          <button type='button' className='btn btn-primary btn-floating mx-1'>
            <i className='fa fa-linkedin'></i>
          </button>
        </div>

        <div className='divider d-flex align-items-center justify-content-center my-4'>
          <p className='text-center fw-bold mx-3 mb-0'>Or</p>
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

        <div className='d-flex justify-content-between align-items-center'>
          <div className='form-check mb-0'>
            <input className='form-check-input me-2' type='checkbox' value='' id='form2Example3' />
            <label className='form-check-label' htmlFor='form2Example3'>
              Remember me
            </label>
          </div>
          <a href='#!' className='text-body'>
            Forgot password?
          </a>
        </div>

        <div className='text-center text-lg-start mt-4 pt-2'>
          <button type='button' className='btn btn-primary btn-lg px-5'>
            Login
          </button>
          <p className='small fw-bold mt-2 pt-1 mb-0 fs-6'>
            Don't have an account?{" "}
            <a href='#!' className='link-danger'>
              Register
            </a>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
