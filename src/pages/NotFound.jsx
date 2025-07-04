import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mb-6">Sorry, the page you requested does not exist.</p>
      <Button
        onClick={handleNavigate}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
