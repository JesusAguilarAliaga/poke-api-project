import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      setData(data)
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    data
  }
}
export default useFetch