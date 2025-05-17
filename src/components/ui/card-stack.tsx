"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative  h-60 w-60 md:h-[400px] md:w-[800px]">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-60 md:h-[400px] md:w-[800px] rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >

            <div className="flex gap-x-8 items-center justify-between w-full h-full " >
                <div className="w-[400px] h-[300px] rounded-2xl overflow-hidden " >
                    <img className="w-full h-full object-cover " src="https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740" alt="" />
                </div>

                <div className="flex flex-col justify-between " >
                    <div className="font-normal text-neutral-700 dark:text-neutral-200 mb-10 ">
                        {card.content}
                    </div>

                    <div>
                        <p className="text-neutral-500 font-medium dark:text-white">
                            {card.name}
                        </p>
                        <p className="text-neutral-400 font-normal dark:text-neutral-200">
                            {card.designation}
                        </p>
                    </div>
                </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
