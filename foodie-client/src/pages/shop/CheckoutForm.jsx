import React from "react";
import { FaPaypal } from "react-icons/fa";
const CheckoutForm = ({price, cart})=>{
    return(
        <div className="flex flex-col sm:flex-row justify-start items-start gap-8">
        <div className="md:w-1/2 w-full space-y-3">
        <h4 className="text-lg font-semibold">Order Summary</h4>
        <p>Number of Items:{cart.length}</p>
        </div>
        <div className="md:w-1/3 w-full space-y-3 card shrink-0 max-w-sm shadow-2xl bg-base-100 px-4 py-8">
        <h4 className="text-lg font-semibold">Process your payment!</h4>
        </div>
        <div className="mt-5 text-center">
            <hr />
            <button type="submit" className="btn btn-sm mt-5 bg-orange-500 text-white"><FaPaypal />Pay with Paypal</button>
        </div>
        </div>
    )
} 
export default CheckoutForm