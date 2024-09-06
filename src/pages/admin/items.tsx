import AdminSidebar from "../../components/adminSidebar"

const Items = () => {
  return (
    <div className="admin-container">
        <aside>
            <AdminSidebar />
        </aside>
        <main>
            <h1>This is item</h1>
        </main>
    </div>
  )
}

export default Items