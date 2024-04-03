import {useForm} from 'react-hook-form'

const Form = () => {
    const {register, handleSubmit} = useForm()

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