import React from 'react';
import bookimg from "../../assets/hero/bookingIcon.png";
const HowWork = () => {

    const steps =[
        {
            id: 1,
            img:bookimg,
            title: "Bokking pick and drop ",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            id: 2,
            img:bookimg,
            title: "Cash on delivery",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            id: 3,
            img:bookimg,
            title: "Delivery Hub",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            id: 4,
            img:bookimg,
            title: "Bokking SME and corporate",
            description: "From personal packages to business shipments — we deliver on time, every time."
        }
    ];
    return (
     <div className="mt-12">
    <h1 className="text-2xl md:text-3xl font-bold text-[#0F75B8] pl-4">
        How It Works
    </h1>

    {/* Cards Container */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {steps.map(step => (
            <div
                key={step.id}
                className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
            >
                {/* Image */}
                <img
                    className="w-14 h-14 mb-4"
                    src={step.img}
                    alt={`Step ${step.id}`}
                />

                {/* Title */}
                <h2 className="text-lg font-semibold mb-2">
                    {step.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                    {step.description}
                </p>
            </div>
        ))}
    </div>
</div>
    
    );
};

export default HowWork;