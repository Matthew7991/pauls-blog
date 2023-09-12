import React from "react"
import { useNavigate } from "react-router-dom"

function Admin() {
  const navigate = useNavigate()
  const postBlog = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    formData.set("id", crypto.randomUUID())

    fetch("http://localhost:9000/api/blogs", {
      method: "POST",
      body: formData,
    }).then((response) => navigate("/"))
  }

  return (
    <section className="p-8">
      <form
        onSubmit={postBlog}
        // encType="multipart/form-data"
        className="flex flex-col gap-4">
        <input
          className="bg-gray-200"
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          className="bg-gray-200"
          type="text"
          name="message"
          placeholder="Message"
        />
        <input
          type="file"
          name="image"
        />
        <button className="border rounded-full bg-gray-800 text-white w-fit py-2 px-4 mx-auto">
          Veröffentlichen
        </button>
      </form>
    </section>
  )
}

export default Admin
