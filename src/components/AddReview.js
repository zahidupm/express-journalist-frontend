import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import '../components/Auth/Auth.css';
import { AuthContext } from '../contexts/auth.context';

const AddReview = () => {
    const {user} = useContext(AuthContext);
    const {title, _id} = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();

        const review = {
            name: e.target.name.value,
            email: e.target.email?.value || 'undefined',
            photoURL: e.target.photoURL.value,
            desc: e.target.desc.value,
            service: _id,
            serviceName: title
        }
        console.log(review);

        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                swal({ title: data.success, icon: "success", });
                e.target.reset();
            } else {
                swal({ title: data.error, icon: "error", });
            }
        })
        .catch(err => {
            swal({ title: err.message, icon: "error", });
        })
    }

    return (
        <div>
            <div className='text-4xl mt-12 text-center font-bold text-orange-500'>
                {title}
            </div>
            <div className="pm-container-fluid">
                <div className="pm-main-sign-up lg:pl-[392px]">
                    <div className="left-section">
                    <iframe title='animation' className='w-full h-full' src="https://embed.lottiefiles.com/animation/70310"></iframe>
                </div>

                <div className="right-section ">
                    <div className="heading">
                        <h4>Add Review</h4>
                    </div>

                    <div className="flex space-x-4">
                            <div> 
                            {user?.uid ? <div className="user">
                            <img aria-label={user?.displayName}
                             title={user?.displayName} className="user-img rounded-full" data-v-71039168="" src={user?.photoURL ? user?.photoURL : "https://www.gravatar.com/avatar/e136cff7d5ecea56b848a9b6bd0b2b1d?s=30&amp;d=retro&amp;r=g"} alt="Avatar"></img> </div> : ''}
                                
                            </div>
                            <div>
                                <h4 className="font-bold">{user?.displayName}</h4>
                                <span className="text-xs dark:text-gray-400">2 days ago</span>
                            </div>
                        </div>

                    <form onSubmit={handleSubmit} id="sign-up-form">
                        <h2 className='hidden text-4xl'>{title}</h2>
                    <div className="pm-form-group">
                            <label htmlFor="name" className="pm-form-label">Name</label>
                            <input type="text" defaultValue={user?.displayName} readOnly className="pm-form-control focus:border-orange-400" id="name" name="name" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="email" className="pm-form-label">Email</label>
                            <input type="email" defaultValue={user?.email} readOnly className="pm-form-control focus:border-orange-400" id="email" name="email" autoFocus="" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="photoURL" className="pm-form-label">Photo URL
                            </label>
                            <input type="text" defaultValue={user?.photoURL} readOnly className="pm-form-control focus:border-orange-400" id="photoURL" name="photoURL" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="desc" className="pm-form-label">Review Text</label>
                            {/* <input type="text" className="pm-form-control focus:border-orange-400" id="price" name="price" autoFocus="" autoComplete="off" autoCapitalize="none" spellCheck="true" required /> */}
                            <textarea rows="3" id="desc" name="desc" placeholder="Message..." className="w-full border border-orange-400 mt-4 p-4 rounded-md resize-none text-gray-900" required></textarea>
                        </div>

                        <div className="pm-form-group">
                            <button type="submit" className="bg-orange-500 text-white pmt_sign-up-btn pm-btn pm-btn-primary sign-up-btn g-recaptcha" id="sign-up-btn">
                            Add Review
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default AddReview;