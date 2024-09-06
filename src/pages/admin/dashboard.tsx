import AdminSidebar from "../../components/adminSidebar"

const Dashboard = () => {
  return (
    <div className="admin-container">
        <aside>
            <AdminSidebar />
        </aside>
        <main>
            <h1>This is main</h1>
        </main>
    </div>
  )
}

export default Dashboard