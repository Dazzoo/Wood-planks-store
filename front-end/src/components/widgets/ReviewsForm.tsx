'use client'
import React from "react";
import { Formik } from 'formik';
import ReactStars from "react-rating-stars-component";
import ButtonBasic from '@/components/shared/buttons/BasicButton'
import {v4 as uuidv4} from 'uuid';


type FormValues = {
    id: number;
    comment: string;
    name: string;
    email: string;
    rating: number;
    date: string
  };

type FormErrors = {
    comment: string;
    name: string;
    email: string;
    phone: string;
  };

  interface ReviewsFormProps {
    addReview: (review: FormValues) => void;
  }
  

const ReviewsForm: React.FC<ReviewsFormProps> = ({ addReview }) => {

    const handleValidate = (values: FormValues) => {
        const errors: Partial<FormValues> = {};
        
        if (!values.email) {
        errors.email = `Email field can't be empty equired`;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
        }

        if (!values.name) {
            errors.name = `Name field can't be empty equired`;
        }

        if (!values.comment) {
            errors.comment = `Comment field can't be empty equired`;
        }
      
        // if (values.phone && !/^[0-9+]{10}$/i.test(values.phone)) {
        //     errors.phone = 'Invalid phone number';
        // }

        console.log(errors)

        return errors;
    }

    const handleSubmit = (values: FormValues, { resetForm }: any) => {
        const id = Number(uuidv4())

        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          });

        addReview({
            id: values.id,
            name: values.name,
            email: values.email,
            rating: Number(values.rating) || 0,
            comment: values.comment,
            date: currentDate
        })
        resetForm()
    }


    return (
      <div>
            <div className="text-2xl font-sans py-4" >
                Leave a Review
            </div>
            <div className="py-4" >
                Your email address will not be published. Required fields are marked *
            </div>
            <Formik
                initialValues={{ 
                    comment: '',
                    name: '',
                    email: '',
                    phone: '',
                    rating: 0,
                    date: '',
                    id: Number(uuidv4())
                }}
                validate={handleValidate}
                onSubmit={handleSubmit}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                    resetForm
                }) => (
                    <form className=""
                    onSubmit={handleSubmit}>
                    <div className="w-full font-medium " >
                    <div className="relative" >
                            <textarea
                                className="w-full p-2 h-32"
                                name="comment"
                                placeholder="Comment *"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.comment}
                            />
                        <div className="text-red-600 absolute top-full text-sm" >
                            {errors.comment && touched.comment && errors.comment}
                        </div>
                    </div>

                    </div>
                    <div className="flex justify-between my-8" >
                        <span className="basis-6/12 mr-8 relative" >
                            <div>
                                <input
                                    className="w-full p-2 h-12"
                                    type="text"
                                    name="name"
                                    placeholder="Name *"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </div>
                            <div className="text-red-600 absolute top-full text-sm" >
                                {errors.name && touched.name && errors.name}
                            </div>
                        </span>
                        <span className="basis-6/12 relative"  >
                            <div>
                                <input
                                    className="w-full p-2 h-12"
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                            <div className="text-red-600 absolute top-full text-sm" >
                                {errors.email && touched.email && errors.email}
                            </div>
                        </span>
                    </div>
                    <div className="relative" >
                            <input
                                className="w-full p-2 h-12 "
                                type="tel"
                                name="phone"
                                placeholder="Phone (optional)"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                        <div className="text-red-600 absolute top-full text-sm" >
                            {errors.phone && touched.phone && errors.phone}
                        </div>
                    </div>
                    <div>
                    <ReactStars
                        count={5}
                        edit={true}
                        onChange={(new_rating: number) => {
                            setFieldValue('rating', new_rating);
                       }}
                        size={50}
                        activeColor="#ffd700"
                    />
                    </div>
                    <div className="mt-8" >
                        <ButtonBasic
                            name="Post Review"
                            type="submit"
                            disabled={isSubmitting}
                            size={"lg"}
                        />
                    </div>
                    </form>
                )}
                </Formik>
            
       </div>
    );
}

export default ReviewsForm;
