import { useState } from "react";
import carImage4 from "../../assets/images/bmw-car.png";
import carImage2 from "../../assets/images/card-car-2.png";
import carImage3 from "../../assets/images/card-car-3.png";
import carImage from "../../assets/images/card-car.png";
import Button from "./Button";

import SecureImage from "./SecureImage";

const ShowImages = () => {
  const [image, setImage] = useState(carImage);

  return (
    <div className="h-full w-full">
      <SecureImage
        image={image}
        className="h-full min-h-[300px] w-full rounded-2xl object-cover sm:max-h-[600px] sm:min-h-[550px]"
      />
      <div className="mt-3 flex max-h-[100px] flex-wrap gap-1 sm:gap-3">
        {[carImage, carImage2, carImage3, carImage4].map((img) => (
          <Button key={img} onClick={() => setImage(img)} className="m-0 p-0">
            <SecureImage
              key={img}
              image={img}
              className="h-full max-h-[70px] min-h-[30px] min-w-[40px] rounded-md object-cover sm:min-h-[70px] sm:w-[120px]"
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ShowImages;
