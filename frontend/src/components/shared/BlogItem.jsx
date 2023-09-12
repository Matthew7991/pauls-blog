import React from "react"
import { Link } from "react-router-dom"

function BlogItem({ blog }) {
  return (
    <article>
      <Link
        to={"/blogs/" + blog.id}
        className="flex flex-col gap-4">
        <div>
          <h1 className="font-bold text-4xl">{blog.title}</h1>
          <p>{blog.message}</p>
        </div>
        <img
          className="rounded-2xl overflow-hidden"
          src={"http://localhost:9000/" + blog.imgUrl}
          alt=""
        />
      </Link>
    </article>
  )
}

export default BlogItem
