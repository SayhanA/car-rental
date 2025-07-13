import { useEffect, useState } from "react";

const SecureImage = ({ image, className = "", style = {} }) => {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const objectUrls = [];

    const fetchImage = async () => {
      try {
        if (!image) {
          throw new Error("No image provided");
        }

        // Handle both File objects and image URLs
        let blob;
        if (image instanceof File || image instanceof Blob) {
          blob = image;
        } else if (typeof image === "string") {
          const response = await fetch(image);
          if (!response.ok) throw new Error("Failed to fetch image");
          blob = await response.blob();
        } else {
          throw new Error("Unsupported image type");
        }

        const objectUrl = URL.createObjectURL(blob);
        objectUrls.push(objectUrl);

        if (isMounted) {
          setImageData(objectUrl);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
        console.error("Image loading error:", err);
      }
    };

    fetchImage();

    return () => {
      isMounted = false;
      // Clean up all created object URLs
      objectUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [image]);

  if (error) {
    return (
      <div className={`error-message ${className}`}>Image unavailable</div>
    );
  }

  if (!imageData) {
    return <div className={`loading-placeholder ${className}`}>Loading...</div>;
  }

  return (
    <div
      style={{
        ...style,
        backgroundImage: `url(${imageData})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
      className={`protected-image ${className}`}
      onContextMenu={(e) => e.preventDefault()}
      draggable="false"
    />
  );
};

export default SecureImage;
