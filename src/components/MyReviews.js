import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../contexts/auth.context';
import useTitle from '../hooks/useTitle';
import MyReviewDetails from './MyReviewDetails';

const MyReviews = () => {
    const {user, logOut} = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate();
    useTitle('My Review')

    useEffect(() => {
        fetch(`https://service-review-assignment-11-server-side.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('journalistToken')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403) {
               return logOut();
            }
           return res.json()
        })
        .then(data => {
            setReviews(data) 
        })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Want to Delete');
        if(proceed) {
            fetch(`https://service-review-assignment-11-server-side.vercel.app/reviews/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount) {
                    swal({title: "Deleted Successfully", icon:"success"});
                    const remaining = reviews.filter(rew => rew._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }

    const handleEdit = (id) => {
        navigate(`/edit_review/${id}`)
    }

    return (
        <div>
             <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        reviews.map(review => <MyReviewDetails
                            key={review._id} review={review}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            ></MyReviewDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyReviews;