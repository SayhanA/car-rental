import { FaWhatsapp } from "react-icons/fa";
import SectionDescripton from "../atoms/SectionDescripton";
import SectionTitle from "../atoms/SectionTitle";
import Text from "../atoms/Text";
import TextLg from "../atoms/TextLg";

const GetInTouch = () => {
  const whatsappCards = [
    {
      id: 15123,
      title: "Live Chat",
      description: "Connect with WhatsApp customer care.",
      link: "https://wa.me/8801782132001",
      username: "@RideRent.com",
    },
    {
      id: 22346,
      title: "Booking Support",
      description: "Help with your bookings via WhatsApp.",
      link: "https://wa.me/8801782132002",
      username: "@BookingSupport",
    },
    {
      id: 3633,
      title: "Technical Help",
      description: "Facing a technical issue? Chat now.",
      link: "https://wa.me/8801782132003",
      username: "@TechSupport",
    },
    {
      id: 42362,
      title: "General Inquiry",
      description: "Ask anything about RideRent.",
      link: "https://wa.me/8801782132004",
      username: "@InfoDesk",
    },
  ];

  return (
    <section className="container mx-auto flex h-[93vh] items-center justify-between px-5">
      <div className="flex h-full w-fit min-w-[40%] flex-col justify-center">
        <p className="border-text-lite text-text-lite w-fit rounded-full border px-5 py-1 text-sm">
          Reach out to us
        </p>

        <SectionTitle className="my-3 capitalize">
          We'd love to hear from you
        </SectionTitle>
        <div className="flex gap-1">
          <SectionDescripton className="mx-0">
            Or, just reach out menually to
          </SectionDescripton>
          <a
            href="mailto:rentride@gmail.com?subject=Hello email"
            className="inline-block text-blue-600 hover:text-blue-800"
          >
            rentride@gmail.com
          </a>
        </div>
      </div>
      <div className="flex h-fit w-[700px] flex-wrap items-center justify-center gap-5">
        {whatsappCards.map((card) => (
          <article
            key={card.id}
            className="bg-background/0 flex h-[300px] min-w-[250px] grow basis-2 flex-col justify-between rounded-xl p-10 shadow-2xl"
          >
            <div>
              <FaWhatsapp className="text-3xl text-blue-600" />
              <TextLg className="text-text-dark mt-5 mb-3 text-xl font-bold">
                {card.title}
              </TextLg>
              <Text>{card.description}</Text>
            </div>
            <a
              className="inline-block text-blue-600 hover:text-blue-800"
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {card.username}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GetInTouch;
