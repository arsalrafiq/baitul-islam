// components/Dashboard.tsx
import Productivity from "@/app/components/productivty";
import ProductCard from "@/app/components/productivty";
const Dashboard = () => {
    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <Productivity />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <ProductCard />
          </div>
          {/* More components */}
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  