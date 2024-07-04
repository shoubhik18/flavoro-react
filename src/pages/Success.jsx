import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <RingLoader color="#36d7b7" />
      ) : (
        <div className="">
          <h2 className="text-3xl font-semibold mb-4 text-center">Order Successfull!</h2>
          <p>Your order has been placed succesfully</p>
        </div>
      )}
    </div>
  );
};

export default Success;
