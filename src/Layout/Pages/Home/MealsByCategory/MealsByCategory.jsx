import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import UseMeal from "../../../../Hooks/UseMeal";
import "../MealsByCategory/TabCss/Tab.css";
import MealTab from "./MealTab/MealTab";

const MealsByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [meals, loading, refetch] = UseMeal();

  const breakfast = meals.filter((item) => item.category === "Breakfast");
  const lunch = meals.filter((item) => item.category === "Lunch");

  const dinner = meals.filter((item) => item.category === "Dinner");

  return (
    <div className="mx-16 pt-10 lg:mx-64">
      <h2 className="text-4xl mb-6 font-bold text-center text-white font-inter">
        Explore meals
      </h2>

      <Tabs className="">
        <TabList className="flex mb-3 gap-6 justify-center">
          <Tab
            className={`cursor-pointer px-10 py-4  ${
              activeTab === 0 ? "active" : "inActive"
            }`}
            onClick={() => setActiveTab(0)}
          >
            All Meals
          </Tab>

          <Tab
            className={`cursor-pointer px-10 py-4  ${
              activeTab === 1 ? "active" : "inActive"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Breakfast
          </Tab>

          <Tab
            className={`cursor-pointer px-10 py-4  ${
              activeTab === 2 ? "active" : "inActive"
            }`}
            onClick={() => setActiveTab(2)}
          >
            Lunch
          </Tab>
          <Tab
            className={`cursor-pointer px-10 py-4  ${
              activeTab === 3 ? "active" : "inActive"
            }`}
            onClick={() => setActiveTab(3)}
          >
            Dinner
          </Tab>
        </TabList>

        <TabPanel>
          <MealTab items={meals}></MealTab>
        </TabPanel>

        <TabPanel>
          <MealTab items={breakfast}></MealTab>
        </TabPanel>

        <TabPanel>
          <MealTab items={lunch}></MealTab>
        </TabPanel>

        <TabPanel>
          <MealTab items={dinner}></MealTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MealsByCategory;
