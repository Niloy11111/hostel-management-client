import MealCard from "../MealCard/MealCard";


const MealTab = ({items}) => {
    return (
        <div className='grid grid-cols-4 gap-6'>
        {
            items.map(item => <MealCard
                item={item}
                key={item._id}
            >

            </MealCard> )
        }
         </div>
    );
};

export default MealTab;