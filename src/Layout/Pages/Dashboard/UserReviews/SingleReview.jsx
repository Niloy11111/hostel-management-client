

const SingleReview = ({reviewInfo}) => {

    const { title, likeNumber, reviewNumbers, review , userEmail} = reviewInfo ;
    return (
        <div className="flex gap-5">
            <h2>{title}</h2>
            <h2>{likeNumber}</h2>
            <h2>{reviewNumbers}</h2>
            <button>Edit</button>
            <button>Delete</button>
            <button>View Meal</button>
            
        </div>
    );
};

export default SingleReview;