import React, { useEffect } from "react";
import photo1 from "../Assets/signup.jpg";
import "./style/Signup.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useCallback,useState } from "react";
import Image_read from "./Image_read";
import {add} from "../reducers/UserDetails";
function Signup() {
  const navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("isLogin") === "true"){
      navigate("/home");
    }
  })
  const dispatch=useDispatch();
  const [userdata,setUserData] = useState({});
  const callback = useCallback((url)=>{
    setUserData({...userdata,img:url});
  })
  const formik = useFormik({
    initialValues: {
      photo: null,
      name: "",
      email: "",
      phone: "",
      password: "",
      cpassword: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.photo) {
        errors.photo = "Please select a photo";
      } else if (
        !(values.photo.type === "image/png" ||
        values.photo.type === "image/jpg")
      ) {
        errors.photo = "Image type must be png or jpg";
      } else if (values.photo.size > 1024 * 1024 * 2) {
        errors.photo = "Image size must be less than 2Mb";
      } else if (!values.name) {
        errors.name = "User Name Required";
      } else if (!/(^[A-Za-z]{1,16})([ ]{0,1})([A-Za-z]{1,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(values.name)) {
        errors.name = "Invalid name";
      } else if (!values.email) {
        errors.email = "Email Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      } else if (!values.phone) {
        errors.phone = "Phone No Required";
      } else if (!/^(0|\+\91|91)?[6-9][0-9]{9}$/.test(values.phone)) {
        errors.phone = "Invalid phone number";
      } else if (!values.password) {
        errors.password = "Password Required";
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/.test(
          values.password
        )
      ) {
        errors.password = "Invalid password";
      } else if (!values.cpassword) {
        errors.cpassword = "Confirm Password Required";
      } else if (values.password !== values.cpassword) {
        errors.cpassword = "Password is not matching";
      }
      return errors;
    },
    onSubmit:()=>{
      if(formik.errors){
        let data={...userdata,name:formik.values.name,email:formik.values.email,phone:formik.values.phone}
        dispatch(add(data));
        formik.resetForm();
        localStorage.setItem("isLogin", true);
        navigate("/home");
      }
    }
  });
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 d-lex justify-content-center">
          <h1>SignUp</h1>
          <form
            className="py-2"
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <div className="row text-center">
              <label htmlFor="image">Photo+</label>
            </div>
            <input
              type="file"
              id="image"
              className="row gx-0 d-none"
              accept=".jpg,.png"
              onChange={(e) =>
                formik.setFieldValue("photo", e.currentTarget.files[0])
              }
              required
            />
            
            {formik.errors.photo ? (
              <div className="error">{formik.errors.photo} </div>
            ):(formik.values.photo?<Image_read value={formik.values.photo} callbck={callback} />:null)}
            <label className="row py-3 gx-0">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="row w-100 py-1 gx-0"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              required
            />
            {formik.errors.name && (
              <div className="error">{formik.errors.name} </div>
            )}
            <label className="row py-3 gx-0">Email</label>
            <input
              type="email"
              id="email"
              className="row w-100 py-1 gx-0"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
            />
            {formik.errors.email && formik.touched.email && (
              <div className="error">{formik.errors.email}</div>
            )}
            <label className="row py-3 gx-0">PhoneNo</label>
            <input
              type="tel"
              id="phone"
              className="row w-100 py-1 gx-0"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              required
            />
            {formik.errors.phone && formik.touched.phone && (
              <div className="error">{formik.errors.phone}</div>
            )}
            <label className="row py-3 gx-0">Password</label>
            <input
              type="password"
              id="password"
              className="row w-100 py-1 gx-0"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
            />
            {formik.errors.password && formik.touched.password && (
              <div className="error">{formik.errors.password}</div>
            )}
            <label className="row py-3 gx-0">Confirm Password</label>
            <input
              type="password"
              id="cpassword"
              className="row w-100 py-1 gx-0"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cpassword}
              required
            />
            {formik.errors.cpassword && formik.touched.cpassword && (
              <div className="error">{formik.errors.cpassword}</div>
            )}
            <div className="d-flex py-3 justify-content-start gx-0">
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-danger"
                disabled={formik.isSubmitting}
                onClick={formik.resetForm}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img src={photo1} alt="signup page" style={{ height: "50rem" }} />
        </div>
        {/* <div className="col-7 d-md-block d-none">
          <img src={photo1} alt="signup page" style={{ height: "50rem" }} />
        </div> */}
      </div>
    </div>
  );
}

export default Signup;
