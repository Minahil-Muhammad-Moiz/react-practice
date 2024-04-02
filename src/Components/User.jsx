import { useContext } from "react"
import { UserContext } from "./ShowHide"

const User = () => {
  const {name, age, email} = useContext(UserContext)
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{email}</h1>
    </div>
  )
}

export default User
