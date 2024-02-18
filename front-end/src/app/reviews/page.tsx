import React from "react";
import ReviewsPage from "@/components/widgets/ReviewsPage"
import useMockData from '@/../../mock-tool/someMockFile'


export default function Page() {
  const { reviews } = useMockData()

    return (
      <ReviewsPage reviews={reviews} />
    );
  }
