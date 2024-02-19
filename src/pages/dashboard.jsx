import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import StatsCards from "@/components/shared/stats-cards";

const Dashboard = () => {
  return (
    <div>
      <StatsCards />

      {/* Graphs and charts */}
      <div className="grid grid-cols-1 mt-12 space-y-4 lg:space-y-0 lg:gap-8 lg:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
          <div className="rounded-lg bg-primary-foreground">
            <LineChart />
          </div>
        </div>
        <div className="rounded-lg bg-primary-foreground">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
