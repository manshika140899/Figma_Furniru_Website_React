import React from "react";

const CheckForm = () => {
  return (
    <section className="w-full py-20">

      <div className="max-w-[1240px] mx-auto px-5 lg:px-10">

        <form className="flex flex-col lg:flex-row justify-between gap-20">

         

          <div className="w-full lg:w-[48%]">

            <h2 className="text-[36px] font-bold mb-12">
              Billing details
            </h2>

         

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">

              <div>

                <label className="block font-medium mb-4">
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5 outline-none"
                />

              </div>

              <div>

                <label className="block font-medium mb-4">
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5 outline-none"
                />

              </div>

            </div>

           

            <div className="mb-8">

              <label className="block font-medium mb-4">
                Company Name (Optional)
              </label>

              <input
                type="text"
                placeholder="Company Name"
                className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5 outline-none"
              />

            </div>

           

            <div className="mb-8">

              <label className="block font-medium mb-4">
                Country / Region
              </label>

              <select className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5 text-[#9F9F9F] outline-none">

                <option>Sri Lanka</option>
                <option>Pakistan</option>
                <option>India</option>

              </select>

            </div>

           

            <div className="mb-8">

              <label className="block font-medium mb-4">
                Street address
              </label>

              <input
                type="text"
                placeholder="Street Address"
                className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5 outline-none"
              />

            </div>

           

            <div className="mb-8">

              <label className="block font-medium mb-4">
                Town / City
              </label>

              <input
                type="text"
                placeholder="Town / City"
                className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5 outline-none"
              />

            </div>

           

            <div className="mb-8">

              <label className="block font-medium mb-4">
                Province
              </label>

              <select className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5 text-[#9F9F9F] outline-none">

                <option>Western Province</option>
                <option>Punjab</option>
                <option>Sindh</option>

              </select>

            </div>

           

            <div className="mb-8">

              <label className="block font-medium mb-4">
                ZIP code
              </label>

              <input
                type="text"
                placeholder="Zip-Code"
                className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5 outline-none"
              />

            </div>

        

            <div className="mb-8">

              <label className="block font-medium mb-4">
                Phone
              </label>

              <input
                type="text"
                placeholder="Phone"
                className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5 outline-none"
              />

            </div>

          

            <div className="mb-8">

              <label className="block font-medium mb-4">
                Email address
              </label>

              <input
                type="email"
                placeholder="Email"
                className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5 outline-none"
              />

            </div>

           

            <div className="mb-8">

              <input
                type="text"
                placeholder="Additional information"
                className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5 outline-none text-[#9F9F9F]"
              />

            </div>

          </div>
                   

          <div className="w-full lg:w-[42%]">

          

            <div className="flex justify-between items-center border-b border-[#D9D9D9] pb-5">

              <h3 className="text-[24px] font-medium">
                Product
              </h3>

              <h3 className="text-[24px] font-medium">
                Subtotal
              </h3>

            </div>

          

            <div className="flex justify-between items-center py-6">

              <p className="text-[#9F9F9F] text-[16px]">
                Asgaard sofa
                <span className="ml-2 text-black font-medium">
                  × 1
                </span>
              </p>

              <p className="text-[16px] font-medium">
                Rs. 250,000.00
              </p>

            </div>

           

            <div className="flex justify-between items-center py-5">

              <p className="font-medium">
                Subtotal
              </p>

              <p>
                Rs. 250,000.00
              </p>

            </div>

           

            <div className="flex justify-between items-center border-b border-[#D9D9D9] pb-8">

              <p className="font-medium">
                Total
              </p>

              <p className="text-[#B88E2F] text-[24px] font-bold">
                Rs. 250,000.00
              </p>

            </div>

           

            <div className="mt-8">

              <label className="flex items-center gap-3 cursor-pointer">

                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />

                <span className="font-medium">
                  Direct Bank Transfer
                </span>

              </label>

              <p className="text-[#9F9F9F] leading-7 mt-5">

                Make your payment directly into our bank account.
                Please use your Order ID as the payment reference.
                Your order will not be shipped until the funds have
                cleared in our account.

              </p>

              <div className="mt-8 space-y-5">

                <label className="flex items-center gap-3 cursor-pointer">

                  <input
                    type="radio"
                    name="payment"
                  />

                  <span className="text-[#9F9F9F]">
                    Direct Bank Transfer
                  </span>

                </label>

                <label className="flex items-center gap-3 cursor-pointer">

                  <input
                    type="radio"
                    name="payment"
                  />

                  <span className="text-[#9F9F9F]">
                    Cash On Delivery
                  </span>

                </label>

              </div>

              <p className="text-[16px] leading-8 mt-8">

                Your personal data will be used to support your
                experience throughout this website, to manage access
                to your account, and for other purposes described in our
                <span className="font-semibold">
                  {" "}privacy policy.
                </span>

              </p>
                          

            <div className="flex justify-center mt-10">

              <button
                type="submit"
                className="w-[318px] h-[64px] border border-black rounded-[15px] text-[20px] font-medium hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] duration-300"
              >
                Place Order
              </button>

            </div>

          </div> 

        </div> 

      </form>

    </div>

  </section>
  );
};

export default CheckForm;