import { Collapse } from "antd";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const FAQ = () => {
  return (
    <div className="mt-24">
      <h1 className="font-bold text-xl text-right mb-6">
        Frequently Asked Questions
      </h1>
      <Collapse items={items} />
    </div>
  );
};
export default FAQ;

const itemsNest = [
  {
    key: "1",
    label: "What is the amount of baggage allowed per flight?",
    children: (
      <p>
        {
          "Tickets for all the world's airlines are available on the Bilito website, both for flights originating or destination in Iran, and for domestic flights from the farthest countries of the world. Flights of airlines such as Lufthansa, Emirates, Qatar Airways, Turkish Air, Air France, KLM, Aeroflot, Alitalia, Ukranian, AirAsia, Pegasus and dozens of other airlines can be purchased at Bilito. Also, tickets for foreign flights of domestic airlines such as Mahan, Iran Air, Qeshm Air, ATA, etc. are also sold on the Bilito website."
        }
      </p>
    ),
  },
  {
    key: "2",
    label:
      "What is the price of plane tickets for babies and children under 12 years old?",
    children: <p>{"The price for children under 12 is 1/3 as You."}</p>,
  },
  {
    key: "3",
    label: "Is it possible to return the plane ticket after buying it online?",
    children: (
      <p>
        {
          "Yes, you can. But we are sorry to say that you will get 44% of your money."
        }
      </p>
    ),
  },
  {
    key: "4",
    label:
      "Is it possible to change the name or surname after buying the plane ticket?",
    children: (
      <p>
        {
          "Yes, you can. In order to do that you have to fill up a form. and you will charge 9$"
        }
      </p>
    ),
  },
  {
    key: "5",
    label:
      "Is it possible to choose the seat we want when we make a ticket reservation from the plane ticket purchase site?",
    children: (
      <p>
        {
          "The answer is, sometimes you can. In order to do that you have to spend 100$-299$. Sometimes we can't give you seat beside window. "
        }
      </p>
    ),
  },
  {
    key: "6",
    label:
      "Flight tickets of which airlines can I search and buy on the Bilito website?",
    children: <p>{"In Our website check our Flights list."}</p>,
  },
  {
    key: "7",
    label: "How to change the flight date?",
    children: (
      <p>
        {
          "I don't know. Everything you want is just right here, on our website. Just google it."
        }
      </p>
    ),
  },
];
const items = [
  {
    key: "1",
    label: "Open this panel to see the FAQ",
    children: <Collapse defaultActiveKey="1" items={itemsNest} />,
  },
];
