import { useEffect, useRef, useState } from "react";
import CustomerReviewCards from "./CustomerReviewCards";

const ReviewCarousal = () => {
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const firstCard = containerRef.current.querySelector(".carousel-card");
        if (firstCard) {
          setCardWidth(firstCard.offsetWidth + 20); // 20 for gap
        }
      }
      setVisibleCards(window.innerWidth >= 1024 ? 3 : 1);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (paused || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, isDragging]);

  const cards = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const extendedCards = [...cards, ...cards];

  const centerIndex = currentIndex + Math.floor(visibleCards / 2);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    currentTranslate.current = currentIndex * cardWidth;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX.current;
    containerRef.current.style.transition = "none"; // stop animation while dragging
    containerRef.current.style.transform = `translateX(-${
      currentTranslate.current - delta
    }px)`;
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > cardWidth / 4) {
      if (delta > 0) {
        // dragged right
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      } else {
        // dragged left
        setCurrentIndex((prev) => prev + 1);
      }
    }
    // snap back with animation
    containerRef.current.style.transition = "transform 0.5s ease";
    containerRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  };

  return (
    <div className="relative mt-5 flex h-[40vh] w-fit items-center justify-center overflow-hidden select-none">
      <div
        ref={containerRef}
        className="flex gap-5 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * cardWidth}px)`,
        }}
        onTransitionEnd={() => {
          if (currentIndex >= cards.length) {
            setCurrentIndex(0);
          }
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {extendedCards.map((card, index) => {
          const isCenter = index === centerIndex % extendedCards.length;
          return (
            <div
              key={index}
              className={`carousel-card w-full shrink-0 transition-transform duration-500 lg:w-1/3 ${
                isCenter ? "scale-110" : "scale-90"
              }`}
              onMouseEnter={() => {
                if (isCenter) setPaused(true);
              }}
              onMouseLeave={() => {
                if (isCenter) setPaused(false);
              }}
            >
              <CustomerReviewCards />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewCarousal;
