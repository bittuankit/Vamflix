import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../../components/adminSidebar"
import { FaRegBell, FaUser } from "react-icons/fa"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"
import { BarChart } from "../../components/Charts"

const Dashboard = () => {
  return (
    <div className="admin-container">
        <aside>
            <AdminSidebar />
        </aside>
        <main className="dashboard">
            <div className="search-bar">
                <BsSearch />
                <input type="text" name="search" id="search" placeholder="Search for data, users, docs" />
                <FaRegBell />
                <FaUser />
            </div>

            <section className="widget-container">
                <WidgetItem text="Visits" value={1120} percent={42} color="#FF885B" />
                <WidgetItem text="Posts" value={570} percent={62} color="#1A4870" />
                <WidgetItem text="Users" value={67} percent={-32} color="#708871" />
            </section>

            <section className="graph-container">
                <div className="visit-post">
                  <h1>Users and Posts</h1>
                  <BarChart data_1={[50,21,10,32,45,23,39]} data_2={[67,11,52,74,15,60,19]} title_1="User" title_2="Posts" bgColor_1="#f4a253" bgColor_2="1A4870" />
                </div>
                <div className="graph-category">
                  <h3>Total</h3>
                  <CategoryItems heading="Visits"  value={101045}/>
                  <CategoryItems heading="Posts"  value={1850}/>
                  <CategoryItems heading="Users"  value={525}/>
                </div>
            </section>
        </main>
    </div>
  )
}

interface WidgetItemProps {
  text: string,
  value: number,
  percent: number,
  color: string,
}

const WidgetItem = ({text,value,percent,color}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{text}</p>
      <h4>{value}</h4>
      {
        percent > 0 ? (<span className="green"><HiTrendingUp /> {percent}%{" "}</span>) : (<span className="red"><HiTrendingDown /> {percent}%{" "}</span>)
      }
    </div>

    <div className="widget-circle" style={{
      background: `conic-gradient(${color} ${Math.abs(percent) / 100 * 360}deg, rgb(255,255,255)0 )`
    }}>
      <span style={{
        color
      }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemsProps {
  heading: string,
  value: number;
}

const CategoryItems = ({heading,value}: CategoryItemsProps) => <div className="category-items">
      <h5>{heading}</h5>
      <div><div style={{background: `hsl(${value}, 100%,50%)`, width: `100px`}}></div></div>
      <span>{value}</span>
</div>;

export default Dashboard