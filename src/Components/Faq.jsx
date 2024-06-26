import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How many stages are there in the presale?",
      answer:
        "There are 8 stages to the presale, once these 8 stages are complete we will launch the LUNEX tokens on an exchange so users can trade.",
    },
    {
      question: "When will I receive my LUNEX tokens?",
      answer: "You will receive your LUNEX tokens after the presale ends.",
    },
    {
      question: "When will I receive my LUNEX Tokens?",
      answer: "LUNEX tokens will be distributed after the presale ends.",
    },
    {
      question: "How can I purchase LUNEX presale tokens?",
      answer:
        "You can purchase LUNEX presale tokens on our website using supported cryptocurrencies.",
    },
    {
      question: "Has the smart contract been audited?",
      answer:
        "Yes, the smart contract has been audited by a reputable third-party auditing firm.",
    },
    {
      question: "How can I generate a passive income on LUNEX?",
      answer:
        "You can generate passive income by holding LUNEX tokens and participating in staking or yield farming programs.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-16 px-8 border-[0.25px] border-browngrey">
      <div className="text-center mb-8">
        <h2 className="text-[50px] font-bold">Frequently asked</h2>
        <h2 className="text-[50px] font-bold mt-[-24px]">questions</h2>
      </div>
      <div className="max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-browngrey">
            <div
              className={`flex justify-between items-center py-4 cursor-pointer ${
                activeIndex === index ? "bg-[#201f20]" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="flex items-center justify-center text-sm text-green-500">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="pb-4 bg-[#201f20] px-4">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
