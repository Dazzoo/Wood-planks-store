'use client'
import ReviewItem from "@/components/widgets/ReviewItem";
import ReviewsForm from "@/components/widgets/ReviewsForm";
import React, { useEffect, useRef, useState } from "react";

interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
  }
  
  interface ReviewsList {
    reviews: Review[];
  }
  

const ReviewsPage: React.FC<ReviewsList> = ({ reviews }) => {
    const [reviewsList, setReviewsList] = useState<Review[]>([])
    const [displayCount, setDisplayCount] = useState<number>(5)

    const reviewsContainerRef = useRef<HTMLDivElement>(null);

    
    useEffect(() => {
        if (reviews) setReviewsList(reviews);
      }, [reviews]);

    useEffect(() => {
        if (reviewsContainerRef.current) {
            reviewsContainerRef.current.scrollTop = reviewsContainerRef.current.scrollHeight;
        }
    }, [reviewsList]);


    const loadMoreReviews = () => {
        setDisplayCount(prevCount => prevCount + 5)
    }

    return (
        <div className=" bg-gray-200 flex flex-wrap justify-center min-h-screen" >
            <div className="md:mx-20 max-w-[60rem]  p-12 " >
                    {reviewsList.length > 0 ? (
                    <div                         
                        ref={reviewsContainerRef}
                        className="py-4 h-[50rem] max-h-[50rem] overflow-y-auto	scroll-smooth" >
                        {reviewsList.slice(0, displayCount).map((review) => (
                            <div className="my-10" key={review.id}>
                                <ReviewItem review={review} />
                            </div>
                            ))}
                        {displayCount < reviewsList.length && (
                            <button
                            className="border-b-1 border-gray-500 pb-0.1 mb-0.1"
                            onClick={loadMoreReviews}
                            >
                                READ MORE REVIEWS
                            </button>
                        )}
                    </div>
                    ) : (
                    <div className="py-4 h-[50rem] w-[60rem] max-h-[50rem] flex justify-center content-center items-center" >
                        Loading...
                    </div>
                    )}
                <div className="" >
                    <ReviewsForm
                        addReview={(review: Review) => {
                            setReviewsList(prev => [...prev, review])
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ReviewsPage;