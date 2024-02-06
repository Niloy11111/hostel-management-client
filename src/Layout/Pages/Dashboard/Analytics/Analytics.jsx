import axios from "axios";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const Analytics = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get("https://hostel-management-server-six.vercel.app/payments")
      .then((res) => {
        setPlans(res.data);
      });
  }, []);

  console.log(plans);

  const silver = plans.filter((item) => item.plan === "Silver");
  const gold = plans.filter((item) => item.plan === "Gold");
  const platinum = plans.filter((item) => item.plan === "Platinum");

  console.log(silver);

  const data = [
    { name: "Group A", value: silver?.length },
    { name: "Group B", value: gold?.length },
    { name: "Group C", value: platinum?.length },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div>
      <h2 className="text-3xl lg:text-4xl font-inter font-semibold text-center">
        MEMBERSHIP ANALYTICS
      </h2>
      <h2 className="text-xl font-semibold text-center text-red-400 my-2">
        __Statistics of Meal Plan__
      </h2>

      <div className="border-t-2 mt-10 flex justify-center">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            label={renderCustomizedLabel}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row md:flex-row md:gap-6 lg:gap-14 gap-6">
          <div className="flex items-center gap-4">
            <h4 className="text-[#0B0B0B] text-lg font-semibold ">Silver </h4>
            <div className="w-[100px] h-[12px] bg-[#0088FE]"> </div>
          </div>

          <div className="flex items-center gap-4">
            <h4 className="text-[#0B0B0B] text-lg font-semibold ">Gold </h4>
            <div className="w-[100px] h-[12px] bg-[#00C49F]"> </div>
          </div>
          <div className="flex items-center gap-4">
            <h4 className="text-[#0B0B0B] text-lg font-semibold ">Platinum </h4>
            <div className="w-[100px] h-[12px] bg-[#FFBB28]"> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
