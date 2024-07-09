import React from "react";

interface CardProps {
  title: string;
  description: string;
  backgroundImage: string;
  pos: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  backgroundImage,
  pos,
  className,
}) => (
  <div
    className={`relative overflow-hidden rounded-lg shadow-md ${className}`}
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0"></div>
    <div className={`relative p-6 flex flex-col ${pos} h-full text-white`}>
      <h2 className="font-Gilroy text-2xl font-semibold mb-2 tracking-normal">
        {title}
      </h2>
      <p className="font-Gilroy text-sm font-regular text-[#868686]">
        {description}
      </p>
    </div>
  </div>
);

const CardGrid2: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: "Order Tracking",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "/order-tracking.svg",
      pos: "justify-start",
    },
    {
      title: "Payment & Refund",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "/payment-refund.svg",
      pos: "justify-end",
    },
    {
      title: "Warranty & Services",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "/warranty.svg",
      pos: "justify-end",
    },
    {
      title: "Return, Replacement & Exchange",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "/return.svg",
      pos: "justify-start",
    },
    {
      title: "Feedback Collection",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "/feedback.svg",
      pos: "justify-center items-center text-center",
    },
    {
      title: "Abandoned Cart Recovery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "/abandonded-cart.svg",
      pos: "justify-start md:justify-end w-3/5",
    },
  ];

  return (
    <div>
      {/* <div className='relative flex flex-col items-center'> */}
      <div className="sm:mx-4 border border-[#F80759] mt-20 flex items-center justify-center rounded-full py-1 px-2 sm:px-3 mb-6 w-fit  bg-[#AA093F]/10">
        <h3 className="text-center mx-4 z-10 font-Gilroy font-medium text-[12px] sm:text-[16px] text-[#F80759] w-wrap">
          Use Cases
        </h3> 
      </div>
      <h2 className="px-2 sm:px-3 mb-6 py-2">Designed for every E-Commerce</h2>
      {/* </div> */}
    <div className="flex md:h-[100vh] w-full items-center justify-center md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto">
      
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-6 md:grid-rows-14 gap-2 p-4">
        <Card
          {...cards[0]}
          className="min-h-[60vw] sm:min-h-0 md:col-span-3 md:row-span-4"
        />
        <Card
          {...cards[1]}
          className="min-h-[60vw] sm:min-h-0 md:col-span-3 md:row-span-6"
        />
        <Card
          {...cards[2]}
          className="min-h-[60vw] sm:min-h-0 md:col-span-3 md:row-span-6"
        />
        <Card
          {...cards[3]}
          className="min-h-[60vw] sm:min-h-0 md:col-span-3 md:row-span-4"
        />
        <Card
          {...cards[4]}
          className="min-h-[60vw] sm:min-h-0 md:col-span-2 md:row-span-4"
        />
        <Card
          {...cards[5]}
          className="min-h-[60vw] sm:min-h-0 md:col-span-4 md:row-span-4"
        />
      </div>
    </div>
    </div>
  );
};

export default CardGrid2;