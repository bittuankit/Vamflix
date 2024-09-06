import AdminSidebar from "../../components/adminSidebar"

const User = () => {
  return (
    <div className="admin-container">
        <aside>
            <AdminSidebar />
        </aside>
        <main>
            <h1>This is user</h1>
        </main>
    </div>
  )
}

export default User