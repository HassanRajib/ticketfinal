import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentCancel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const returnUrl =
      localStorage.getItem("paymentReturnUrl") || "/";

    // Cleanup
    localStorage.removeItem("paymentReturnUrl");

    // Redirect back to event page
    navigate(returnUrl, { replace: true });
  }, []);

  return <p>Redirecting back to event...</p>;
};

export default PaymentCancel;
