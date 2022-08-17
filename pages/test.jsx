import { useState, useEffect } from "react"

export default function Prodsfdsffile() {
  const user = {"email":"daftscientist145@gmail.com","name":"leo","avatar":"None","auths":{},"pd":{"linkable":3,"protection":2,"users":2,"requests":250,"creatable":3,"audit":false,"excess":false},"paying":false,"verified":false,"created_at":"2022-08-16T17:17:46.657000","updated_at":"2022-08-16T17:17:46.657000","requests":{"total":0,"daily":0,"extra":0,"excess":0},"threads":0}
  user['email'] = 'leo@kraata.com'
  console.log(user)
  return (
    <div>
      {JSON.stringify(user)}
    </div>
  )
}


