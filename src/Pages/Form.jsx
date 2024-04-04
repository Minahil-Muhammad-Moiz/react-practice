import {useForm} from 'react-hook-form'
import * as yup from "yup";

const Form = () => {
    const {register, handleSubmit} = useForm()

    const schema = yup.object().shape({
      fullname: yup.string().required('Fullname is required'),
      Age: yup.number().integer().positive().min(18).required('Age is required'),
      Email: yup.email().required('Email is required'),
      password: yup.string().min(4).max(10).required(),
      confirmPassword: yup.string().oneOf([yup.ref("password")],"Passwords must match"),
    })

    const formData = (data)=>{
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(formData)}>
        <input type="text" placeholder="Full Name..." {...register("fullname")}/>
        <input type="number" placeholder="Age..." {...register("Age")}/>
        <input type="email" placeholder="Email..." {...register("Email")}/>
        <input type="password" placeholder="password" {...register("password")}/>
        <input type="password" placeholder="confirm password" />
        <input type="submit" />
    </form>
  )
}

export default Form