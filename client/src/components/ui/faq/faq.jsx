import { useState } from "react";
import "./faq.scss";

const FAQ = () => {
  const faqs = [
    {
      question: "Can I add in multiple friends at once?",
      answer:
        "Absolutely! You can add in multiple friends simultaneously and message them at your convenience.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="Faq">
      <hr />
      <div className="container">
        <div className="text-container">
          <h2>Frequently Asked Questions</h2>
          <p>Still have any questions? Contact our Team via info@birthday.com</p>
          <a href="#">See All FAQs</a>
        </div>
        <div className="item-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "5px",
                borderRadius: "5px",
              }}
            >
              <div
                onClick={() => toggleFAQ(index)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                {faq.question}
                <span>{openFaq === index ? "x" : "+"}</span>
              </div>
              {openFaq === index && (
                <div>
                  <p>{faq.answer}</p>
                  <div
                    style={{
                      background: "#e0e0e0",
                      padding: "5px",
                      borderRadius: "5px",
                      marginTop: "10px",
                    }}
                  >
                    <p>
                      Not Satisfied?{" "}
                      <button style={{ cursor: "pointer" }}>
                        Send us a message now.
                      </button>
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FAQ;
