import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
  const schema = yup.object().shape({
    fullname: yup.string().required("Fullname is required"),
    Age: yup.number().integer().positive().min(18).required('Age is required'),
    Email: yup.string().email().required("Email is required"),
    password: yup.string().min(4).max(10).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match"),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const formData = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(formData)}>
      <input type="text" placeholder="Full Name..." {...register("fullname")} />
      <p>{errors.fullname?.message}</p>
      <input type="number" placeholder="Age..." {...register("Age")} />
      <p>{errors.Age?.message}</p>
      <input type="email" placeholder="Email..." {...register("Email")} />
      <p>{errors.Email?.message}</p>
      <input type="password" placeholder="password" {...register("password")} />
      <p>{errors.password?.message}</p>
      <input type="password" placeholder="confirm password" {...register("confirmPassword")}/>
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};

export default Form;
