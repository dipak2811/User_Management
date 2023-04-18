import { Formik, Form, Field, ErrorMessage } from "formik";

const Reg = ()=>{
    return (
        <Formik
                initialValues={{name:'',email:'',password:'',cpassword:''}}
                validate={(values)=>{
                    const err={}
                    if(!values.email){
                        err.email='Email Required';
                    }
                    else if(!values.name){
                        err.name='User Name Required';
                    }
                    else if(!values.password){
                        err.password='Password Required';
                    }
                    else if(!values.cpassword){
                        err.cpassword='Confirm Password Required';
                    }
                    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                    {
                        err.email='Invalid email address';
                    }
                    else if(!/^[A-z][A-z0-9-_]{3,23}$/.test(values.name)){
                        err.name='Invalid name';
                    }
                    else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/.test(values.password)){
                        err.password='Invalid password';
                    }
                    else if(values.password!==values.cpassword)
                    {
                        err.cpassword='Password is not matching';
                    }
                    return err;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
        >
        {({ isSubmitting }) => (
         <Form>
           <Field type="text" name="name" />
           <ErrorMessage name="name" component="div" />
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <Field type="password" name="cpassword" />
           <ErrorMessage name="cpassword" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
    )
}

export default Reg;