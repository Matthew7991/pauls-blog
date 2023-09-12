import express from "express"
import multer from "multer"
import cors from "cors"
import { existsSync, readFileSync, writeFileSync } from "fs"

const port = 9000
const server = express()
const upload = multer({ dest: "uploads/" })

const blogsApiUrl = "/api/blogs"
const blogsDataUrl = "./blogs.json"

if (!existsSync(blogsDataUrl)) {
  writeFileSync(blogsDataUrl, "[]", "utf8")
}
const blogs = JSON.parse(readFileSync(blogsDataUrl, "utf8"))

server.use(cors())
server.use(express.json())
server.use("/uploads", express.static("uploads"))

server.get(blogsApiUrl, (_, res) => res.end(JSON.stringify(blogs)))
server.get(blogsApiUrl + "/:id", (req, res) =>
  res.json(blogs.find((blog) => blog.id === req.params.id))
)

server.post(blogsApiUrl, upload.single("image"), (req, res) => {
  if (req.file) {
    req.body.imgUrl = req.file.path
  }
  console.log(req.body)
  blogs.push(req.body)
  writeFileSync(blogsDataUrl, JSON.stringify(blogs, null, "\t"), "utf8")
  res.end()
})

server.listen(port, () => console.log("Server started at port: ", port))
