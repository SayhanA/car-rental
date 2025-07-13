import { useNavigate } from "react-router-dom";
import UnauthorizedSvg from "../assets/svgs/UnauthorizedSvg";
import Button from "../components/atoms/Button";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center p-4 text-center">
      <UnauthorizedSvg />
      <h1 className="mt-10 mb-4 text-4xl font-bold">
        401 - Unauthorized Action
      </h1>
      <p className="mb-6">
        Sorry, the page you requested is not authorized to you.
      </p>
      <Button
        onClick={handleNavigate}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Go Back
      </Button>
    </div>
  );
};

export default UnauthorizedPage;
