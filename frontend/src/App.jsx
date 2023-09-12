import { NavLink, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/pages/Home"
import Admin from "./components/pages/admin"
import Details from "./components/pages/details"

function App() {
  return (
    <>
      <header className="mb-8">
        <nav className="flex justify-between">
          <NavLink
            className={
              "font-bold text-lg p-2 border rounded-full px-4 border-green-500"
            }
            to={"/"}>
            Home
          </NavLink>
          <NavLink
            className={
              "font-bold text-lg p-2 border rounded-full px-4 border-green-500"
            }
            to={"/admin"}>
            Admin
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/admin"
          element={<Admin />}
        />
        <Route
          path="/blogs/:id"
          element={<Details />}
        />
      </Routes>
    </>
  )
}

export default App
