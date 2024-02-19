import { dashboardStats } from "@/constants/stats";
import { TrendingUp, TrendingDown } from "lucide-react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      {dashboardStats.map((stat) => (
        <div className="rounded-lg bg-primary-foreground h-36" key={stat.id}>
          {/* Row */}
          <div className="flex flex-row items-center justify-between h-full px-10 py-4">
            {/* Col */}
            <div className="flex flex-col justify-center">
              <h3 className="mb-2 font-normal xl:text-xl text-md text-primary-text">
                {stat.title}
              </h3>
              <p className="text-2xl font-semibold xl:text-3xl text-primary-text">
                {stat.value}
              </p>

              <div className="flex flex-row items-center mt-2 text-sm font-medium text-center">
                <p>
                  {stat.increase ? (
                    <span>
                      <TrendingUp color="green" />
                    </span>
                  ) : (
                    <span>
                      <TrendingDown color="red" />
                    </span>
                  )}{" "}
                </p>
                <p className="ml-2">{stat.percentage}% since last month</p>
              </div>
            </div>
            <div className="">
              <stat.icon className="w-8 h-8" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
