import { BrowserRouter,Routes, Route } from "react-router-dom"
import {lazy, Suspense} from "react"
import Loader from "./components/loader"

const  Dashboard = lazy(()=>import("./pages/admin/dashboard"))
const  Items = lazy(()=>import("./pages/admin/items"))
const  Users = lazy(()=>import("./pages/admin/user"))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/items" element={<Items />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App