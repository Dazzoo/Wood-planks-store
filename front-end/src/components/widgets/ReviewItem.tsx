'use client'
import React from "react";
import formatDate from '@/service/utils/formatDate'
import ReactStars from "react-rating-stars-component";

interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
  }
  
  interface Props {
    review: Review;
  }
  

const ReviewsPage: React.FC<Props> = ({ review }) => {
    const [readMore, setReadMore] = React.useState(false);

    const displayComment = readMore 
      ? review.comment 
      : `${review.comment.slice(0, 600)}${review.comment.length > 600 ? "..." : ""}`;

    return (
      <div className=" border-b border-gray-400 p-4" >
        <div className="text-xl font-medium	font-sans" >
            {review.name}
        </div>
        <div>
            {formatDate(review.date)}
        </div>
        <div className=" " >
        <ReactStars
            value={review.rating}
            edit={false}
            size={21}
            activeColor="#ffd700"
        />
        </div>
        <div>
            {displayComment}
        </div>
        <div className="mt-2" >
            {review.comment.length > 600 && (
            <button 
                className="border-b-2 border-gray-400 pb-0.1 mb-0.1"
                onClick={() => setReadMore(!readMore)}
            >
                {readMore ? 'Read Less' : 'Read More'}
            </button>
            )}
        </div>
      </div>
    );
  }
  
  export default ReviewsPage