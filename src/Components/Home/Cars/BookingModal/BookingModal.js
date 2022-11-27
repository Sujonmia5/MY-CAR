import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../Context/Context';

const BookingModal = ({ bookingCar, setModalClose }) => {
    const { user } = useContext(AuthContext)
    const { brand, car_model, img, address, buy, price, date, seller_info } = bookingCar

    const bookingHandler = (event) => {
        event.preventDefault()
        const number = event.target.number.value;
        const location = event.target.location.value;
        const orderData = {
            brand,
            car_model,
            img,
            address,
            buy,
            price,
            date,
            seller_info,
            buyer_name: user.displayName,
            buyer_email: user.email,
            buyer_number: number,
            meeting_location: location,
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data._id);
                if (data.acknowledged) {
                    toast.success('Booking Done')
                    setModalClose(null)
                }
            })
    }


    return (
        <div>
            <input type="checkbox" id="booked-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor='booked-modal' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <form onSubmit={bookingHandler}>
                            <div className="mb-1 sm:mb-2">
                                <label htmlFor="name" className="text-gray-800 label label-text text-start w-full font-medium">Name</label>
                                <input defaultValue={user?.displayName} type="text" name="name" disabled className="flex-grow disabled disabled:bg-slate-600 text-gray-100 font-medium w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-1 sm:mb-2">
                                <label htmlFor="email" className="text-gray-800 label label-text text-start w-full font-medium">Email</label>
                                <input defaultValue={user?.email} type="text" name="email" disabled className="flex-grow disabled disabled:bg-slate-600 text-gray-100 font-medium w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-1 sm:mb-2">
                                <label htmlFor="productName" className="text-gray-800 label label-text text-start w-full font-medium">Product Name
                                </label>
                                <input defaultValue={car_model} type="text" name="productName" disabled className="flex-grow disabled disabled:bg-slate-600 text-gray-100 font-medium w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                />
                            </div>



                            <div className="mb-1 sm:mb-2">
                                <label htmlFor="resalePrice" className="text-gray-800 label label-text text-start w-full font-medium">Product Price
                                </label>
                                <input defaultValue={price} type="text" name="price" disabled className="flex-grow disabled disabled:bg-slate-600 text-gray-100 font-medium w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-1 sm:mb-2">
                                <label htmlFor="number" className="text-gray-800 label label-text text-start w-full font-medium">Phone Number</label>
                                <input placeholder="phone number" type="text" name="number" required className="flex-grow disabled disabled:bg-slate-600 text-gray-100 font-medium w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                />
                            </div>


                            <div className="mb-1 sm:mb-2">
                                <label htmlFor="meetLocation" className="text-gray-800 label label-text text-start w-full font-medium"
                                >
                                    Meeting Location
                                </label>
                                <input placeholder="Location" type="text" name="location" required className="flex-grow disabled disabled:bg-slate-600 text-gray-100 font-medium w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                />
                            </div>


                            <div className="mt-4 mb-2 sm:mb-4">
                                <button type="submit"
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md  btn-primary hover:text-white focus:shadow-outline focus:outline-none"
                                >
                                    Booking Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;