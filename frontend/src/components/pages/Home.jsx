import React, { useEffect, useState } from "react"
import BlogItem from "../shared/BlogItem"

function Home() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("http://localhost:9000/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setBlogs(data)
      })
  }, [])

  return (
    <section className="grid grid-cols-2 gap-6">
      {blogs.map((blog, index) => (
        <BlogItem
          key={index}
          blog={blog}
        />
      ))}
    </section>
  )
}

export default Home
