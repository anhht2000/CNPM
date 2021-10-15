import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/authLayout.jsx";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email("Please typing have type is email").required("Please typing your email"),
  password: yup.string().min(5, "Please typing min is 5 character").required("Please typing your password"),
  confirm: yup.string().oneOf([yup.ref("password")], "Passwords does not match"),
  name: yup.string().required("You must typing your name").typeError("You must typing name is letter"),
  phone: yup
    .number()
    .required("You must typing phone number")
    .min(9, "Phone number mins is 9 character")
    .typeError("Phone number must is number"),
  address: yup.string().required("You must typing address"),
});

export default function Signup() {
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const {
    register,
    handleSubmit,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleMouseDown = ({ target }) => {
    clearErrors(`${target.name}`);
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='d-flex flex-row align-items-center justify-content-center '>
          <p className='lead fw-normal mb-3 me-3 fs-3'>Sign up </p>
        </div>

        <div className='form-outline mb-4'>
          <input
            type='text'
            {...register("email")}
            onMouseDown={handleMouseDown}
            defaultValue={getValues("email")}
            className={errors.email ? "form-control form-control-lg form__error" : "form-control form-control-lg"}
            placeholder='Enter a valid email address'
          />
          <p className='text__error'>{errors.email?.message}</p>
        </div>

        <div className='form-outline mb-3 '>
          <div className={"position-relative"}>
            <input
              type={isShowPass ? "text" : "password"}
              {...register("password")}
              defaultValue={getValues("password")}
              onMouseDown={handleMouseDown}
              className={errors.password ? "form-control form-control-lg form__error" : "form-control form-control-lg"}
              placeholder='Enter password'
            />
            {isShowPass ? (
              <i
                className='fa fa-eye-slash pass__icon'
                onClick={() => {
                  setIsShowPass(false);
                }}
              />
            ) : (
              <i
                className='fa fa-eye pass__icon'
                onClick={() => {
                  setIsShowPass(true);
                }}
              />
            )}
          </div>
          <p className='text__error'>{errors.password?.message}</p>
        </div>

        <div className='form-outline mb-3 '>
          <div className={"position-relative"}>
            <input
              type={isShowConfirm ? "text" : "password"}
              {...register("confirm")}
              defaultValue={getValues("confirm")}
              onMouseDown={handleMouseDown}
              className={errors.confirm ? "form-control form-control-lg form__error" : "form-control form-control-lg"}
              placeholder='Enter confirm password'
            />
            {isShowConfirm ? (
              <i
                className='fa fa-eye-slash pass__icon'
                onClick={() => {
                  setIsShowConfirm(false);
                }}
              />
            ) : (
              <i
                className='fa fa-eye pass__icon'
                onClick={() => {
                  setIsShowConfirm(true);
                }}
              />
            )}
          </div>
          <p className='text__error'>{errors.confirm?.message}</p>
        </div>

        <div className='form-outline mb-3'>
          <input
            type='text'
            {...register("name")}
            defaultValue={getValues("name")}
            onMouseDown={handleMouseDown}
            className={errors.name ? "form-control form-control-lg form__error" : "form-control form-control-lg"}
            placeholder='Enter your name'
          />
          <p className='text__error'>{errors.name?.message}</p>
        </div>

        <div className='form-outline mb-3'>
          <input
            type='text'
            {...register("phone")}
            defaultValue={getValues("phone")}
            onMouseDown={handleMouseDown}
            className={errors.phone ? "form-control form-control-lg form__error" : "form-control form-control-lg"}
            placeholder='Enter your phone number'
          />
          <p className='text__error'>{errors.phone?.message}</p>
        </div>
        <div className='form-outline mb-3'>
          <input
            type='text'
            {...register("address")}
            defaultValue={getValues("address")}
            onMouseDown={handleMouseDown}
            className={errors.address ? "form-control form-control-lg form__error" : "form-control form-control-lg"}
            placeholder='Enter address'
          />
          <p className='text__error'>{errors.address?.message}</p>
        </div>

        <div className='text-center text-lg-start mt-4 pt-2'>
          <button type='submit' className='btn btn-primary btn-lg px-5'>
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
