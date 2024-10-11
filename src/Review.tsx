import "./Review.css";
import { FcGoogle } from "react-icons/fc";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

function Review() {
  const reviews = [
    {
      id: 1,
      name: "Jane",
      date: "June 15, 2024",
      image: "/images/aes.jpg",
      comment: "This app is very helpful and easy to use!",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Marie",
      date: "July 10, 2024",
      image: "/images/aes.jpg",
      comment: "I've tried many apps, but this one is the best!",
      rating: 5,
    },
    {
      id: 3,
      name: "Shannon",
      date: "August 25, 2024",
      image: "/images/aes.jpg",
      comment: "I've been using this for 2 months now and it's helping my skin!",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Pheobe",
      date: "September 15, 2024",
      image: "/images/aes.jpg",
      comment: "I've tried other tools but this one is the best!",
      rating: 4.2,
    },
    {
      id: 5,
      name: "Alison",
      date: "October 20, 2024",
      image: "/images/aes.jpg",
      comment: "I've tried other tools but this one is the best!",
      rating: 3.8,
    },
    {
      id: 6,
      name: "Karen",
      date: "November 10, 2024",
      image: "/images/aes.jpg",
      comment: "I've tried other tools but this one is the best!",
      rating: 4.9,
    },
  ];

  return (
    <div className="review-container">
      <h1>Reviews ({reviews.length})</h1>
      <div className="review-background">
      
      
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            {/* Review Header */}
            <div className="heading">
              <div className="img-box">
                <img src={review.image} className="review-img" alt={review.name} />
              </div>
              <div className="textbox">
                <h2 className="review-name">{review.name}</h2>
                <h3 className="review-date">{review.date}</h3>
              </div>
              <div className="google-box">
                <div className="google-img">
                  <FcGoogle />
                </div>
              </div>
            </div>

            {/* Rating and Icons */}
            <div className="iconbox">
              <div className="star">
                {Array(Math.floor(review.rating)).fill(<IoStar />)}
                {review.rating % 1 !== 0 && <IoStarHalf />}
              </div>
              <div className="verified">
                <MdVerified />
              </div>
            </div>

            {/* Review Comment */}
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
