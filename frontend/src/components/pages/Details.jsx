import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Details() {
  const [blog, setBlog] = useState({})
  const blogId = useParams().id

  useEffect(() => {
    fetch(`http://localhost:9000/api/blogs/${blogId}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
  }, [])

  return (
    <main>
      <section className="flex flex-col gap-4">
        <div>
          <h1 className="font-bold text-4xl">{blog.title}</h1>
          <p>{blog.message}</p>
        </div>
        <img
          className="rounded-2xl overflow-hidden"
          src={"http://localhost:9000/" + blog.imgUrl}
          alt=""
        />
      </section>
    </main>
  )
}

export default Details
