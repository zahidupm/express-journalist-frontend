import React from 'react';
import swal from 'sweetalert';
import '../components/Auth/Auth.css';
import useTitle from '../hooks/useTitle';

const AddService = () => {
    useTitle('Add Services')

    const handleSubmit = (e) => {
        e.preventDefault();
        const service = {
            title: e.target.title.value,
            sub_title: e.target.sub_title.value,
            price: parseInt(e.target.price.value),
            description: e.target.price.value,
            img: e.target.img.value,
        }
        console.log(service);

        fetch(`https://service-review-assignment-11-server-side.vercel.app/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                swal({ title: data.success, icon: "success", });
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
            <div className="pm-container-fluid">

                <div className="pm-main-sign-up lg:pl-[392px]">
                    <div className="left-section">
                    <iframe title='animation' className='w-full h-full' src="https://embed.lottiefiles.com/animation/70310"></iframe>
                </div>

                <div className="right-section ">
                    <div className="heading">
                        <h4>Add Services</h4>
                    </div>

                    <form onSubmit={handleSubmit} id="sign-up-form">
                    <div className="pm-form-group">
                            <label htmlFor="title" className="pm-form-label">Title</label>
                            <input type="text" className="pm-form-control focus:border-orange-400" id="title" name="title" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="sub_title" className="pm-form-label">Sub Title</label>
                            <input type="text" className="pm-form-control focus:border-orange-400" id="sub_title" name="sub_title" autoFocus="" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="price" className="pm-form-label">Price</label>
                            <input type="text" className="pm-form-control focus:border-orange-400" id="price" name="price" autoFocus="" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="description" className="pm-form-label">Description
                            </label>
                            <input type="text" className="pm-form-control focus:border-orange-400" id="description" name="description" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="img" className="pm-form-label">Image URL
                            </label>
                            <input type="text" className="pm-form-control focus:border-orange-400" id="img" name="img" required />
                        </div>

                        <div className="pm-form-group">
                            <button type="submit" className="bg-orange-500 text-white pmt_sign-up-btn pm-btn pm-btn-primary sign-up-btn g-recaptcha" id="sign-up-btn">
                            Add Service
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;