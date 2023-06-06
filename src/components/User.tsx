import { useContext } from "react"
import { UserContext } from "../context/userContext"

export default function User() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {
        user !== '' && user !== null ? (
          <p>{ user }</p>
        ) : (
          <p>User</p>
        )
      }
    </div>
  )
}
