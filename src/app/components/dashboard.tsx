// components/Dashboard.tsx
import Productivity from "@/app/components/productivty";
import ProductCard from "@/app/components/projects";
const Dashboard = () => {
    return (
      <div className="mx-auto p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-2 rounded shadow">
            <Productivity />
          </div>
          <div className="bg-white p-2 rounded shadow">
            <ProductCard />
          </div>
          {/* More components */}
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  