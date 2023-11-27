import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import '../MealsByCategory/TabCss/Tab.css'
import { useState } from "react";
import UseMeal from "../../../../Hooks/UseMeal";
import MealTab from "./MealTab/MealTab";

const MealsByCategory = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [meals] = UseMeal() ;

    const breakfast = meals.filter(item => item.category === 'Breakfast') ;
    const lunch = meals.filter(item => item.category === 'Lunch') ;
 
    const dinner = meals.filter(item => item.category === 'Dinner') ;
 
    

    return (
        <div className="my-20 ">

        <h2 className="text-3xl mb-6 font-bold text-center font-inter">Meals By Category </h2>

        
        <Tabs  className=''>
    <TabList className="flex mb-10 gap-6 justify-center">
      <Tab  className={`cursor-pointer px-6 py-2 rounded ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => setActiveTab(0)}>All Meals</Tab>

      <Tab  className={`cursor-pointer px-6 py-2 rounded ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => setActiveTab(1)}>Breakfast</Tab>

      <Tab   className={`cursor-pointer px-6 py-2 rounded ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => setActiveTab(2)}>Lunch
</Tab>
      <Tab className={`cursor-pointer px-6 py-2 rounded ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => setActiveTab(3)}>Dinner</Tab>
     


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