import React from 'react';

const Extra = () => {
    return (
        <div>
            {/* 
                    <button data-v-766c3c0e="" class="review-btn"><svg data-v-766c3c0e="" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2"><path data-v-766c3c0e="" d="M9.50002 6.66663V13.3333M6.16669 9.99996H12.8334M17.8334 9.99996C17.8334 14.6023 14.1024 18.3333 9.50002 18.3333C4.89765 18.3333 1.16669 14.6023 1.16669 9.99996C1.16669 5.39759 4.89765 1.66663 9.50002 1.66663C14.1024 1.66663 17.8334 5.39759 17.8334 9.99996Z" stroke="#444CE7" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        Add Review
                        </button>

                    review-btn {
                    display: inline-block;
                    display: flex;
                    align-items: center;
                    border-radius: 9999px;
                    border-width: 1px;
                    --tw-bg-opacity: 1;
                    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
                    padding-left: 1.5rem;
                    padding-right: 1.5rem;
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                    border-color: #e9ecf0;
                    border-color: var(--border);
                    color: #344054;
                    }
            */}

<form>
                <div className="container border-2 border-orange-400 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:text-gray-100">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <span className="text-xs dark:text-gray-400">2 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">4.5</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <textarea rows="3" placeholder="Message..." className="border border-orange-400 mt-4 p-4 rounded-md resize-none dark:text-gray-100"></textarea>
                        <div className="pm-form-group">
                                <button type="submit" className="mt-12 bg-orange-500 text-white pmt_sign-up-btn pm-btn pm-btn-primary sign-up-btn g-recaptcha" id="sign-up-btn">
                                Add Review
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Extra;