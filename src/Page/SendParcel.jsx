import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold text-green-300">Send Parcel</h1>

        <h1 className="text-2xl font-semibold text-black">
          Enter your Parcel details
        </h1>
      </div>

      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* parcel pickup point */}
        <div className="flex items-center gap-5">
          <label className="block text-sm font-medium text-gray-700">
            <input type="radio" name="radio-1" className="radio" defaultChecked />
            Pickup Point
          </label>

          <label className="block text-sm font-medium text-gray-700">
            <input type="radio" name="radio-2" className="radio" />
            Delivery Point
          </label>
         
        </div>
        {/* parcel info name and weight */}
        <div></div>
        <div>
          {/* sender information */}
          <div></div>

          {/* reciver information */}
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
