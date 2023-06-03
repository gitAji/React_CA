import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  return (
    <>
      <div className="wrapper">
        <h1>Thank you for your order!</h1>
        <p>
          Your order is being processed and will be shipped within 3-5 business
          days.
        </p>
        <p>Have a nice day!</p>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </>
  );
};

export default CheckoutSuccessPage;
