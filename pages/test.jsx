  import { useState, useEffect } from "react"

export default function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect( async () => {
    setLoading(true)
    const res = await fetch('https://raw.githubusercontent.com/Daftscientist/DisHook/main/test.json');
    const data = await res.json();
    setData(data)
    setLoading(false)
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}