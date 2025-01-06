import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-[40px] font-bold sm:text-4xl">
        What Our <span className="text-coral-red">Customer</span> Say ?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        illum v. E?
      </p>

      <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
