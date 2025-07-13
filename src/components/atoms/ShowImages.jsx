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
    <div className="h-fit w-full">
      <SecureImage
        image={image}
        className="h-full max-h-[600px] min-h-[550px] w-full rounded-2xl object-cover"
      />
      <div className="mt-3 flex max-h-[100px] gap-3">
        {[carImage, carImage2, carImage3, carImage4].map((img) => (
          <Button key={img} onClick={() => setImage(img)} className="m-0 p-0">
            <SecureImage
              key={img}
              image={img}
              className="h-full max-h-[70px] min-h-[70px] w-[120px] rounded-md object-cover"
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ShowImages;
