import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is Magic Checkout?",
      answer:
        'Magic Checkout powers your end to end checkout and can be initialized from the "cart" page or from the Buy button on the "product page". Magic Checkout will load natively on your website/app and a user will be able to complete all steps including applying a coupon (if available), selecting a saved shipping/billing address or adding a new shipping/billing address and selecting payment method including COD (if you provide COD).',
    },
    {
      question:
        "My website and the checkout experience is built on Shopify/Woocommerce/Magento etc. How will Magic Checkout work there?",
      answer:
        "Magic Checkout seamlessly integrates with major e-commerce platforms like Shopify, WooCommerce, and Magento. Our solution works as an overlay on your existing checkout flow, maintaining compatibility with your platform while providing an enhanced user experience. The integration is straightforward and requires minimal setup.",
    },
    {
      question:
        "How will I get customer data in my system if the entire checkout happens on Razorpay?",
      answer:
        "All customer data is automatically synced back to your system in real-time through our API. You'll receive complete order details, customer information, and transaction data. We provide webhooks and API endpoints to ensure seamless data flow between Razorpay and your existing systems.",
    },
    {
      question:
        "I do not provide COD as a payment method. Is Magic Checkout still relevant for me?",
      answer:
        "Absolutely! Magic Checkout offers numerous benefits beyond COD support. It provides a streamlined checkout experience, reduces cart abandonment, supports multiple payment methods including cards, UPI, wallets, and net banking. The intelligent address detection and saved payment methods still significantly improve conversion rates.",
    },
    {
      question:
        "Can I configure coupons and payment offers for shoppers with Magic Checkout?",
      answer:
        "Yes, Magic Checkout fully supports coupon codes and payment offers. You can configure promotional discounts, payment-specific offers, and coupon codes that integrate seamlessly with the checkout flow. Shoppers can apply coupons during checkout, and the discounts are reflected in real-time.",
    },
    {
      question: "Will Magic Checkout help reduce RTOs?",
      answer:
        "Yes, Magic Checkout significantly reduces Return to Origin (RTO) rates through features like address verification, COD confirmation, and accurate shipping information validation. The streamlined process ensures customers provide correct details, reducing failed deliveries and improving overall order fulfillment success rates.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
      className="py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, #e8eaf6 100%)",
      }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Left Section */}
          <div className="col-lg-5">
            <div className="sticky-lg-top" style={{ top: "2rem" }}>
              <h1
                className="display-3 fw-bold text-dark mb-4"
                style={{ lineHeight: "1.2" }}
              >
                Frequently Asked
                <br />
                Questions
              </h1>
              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-outline-primary btn-lg px-4 fw-semibold">
                  Book Demo
                </button>
                <button className="btn btn-primary btn-lg px-4 fw-semibold d-flex align-items-center gap-2">
                  Get Started
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Accordion */}
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
              <div className="accordion accordion-flush" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div
                    className="accordion-item border-0 border-bottom"
                    key={index}
                  >
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button fw-semibold fs-5 ${
                          openIndex !== index ? "collapsed" : ""
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        style={{
                          backgroundColor:
                            openIndex === index ? "#fff" : "#fff",
                          color: "#212529",
                          boxShadow: "none",
                        }}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${
                        openIndex === index ? "show" : ""
                      }`}
                    >
                      <div
                        className="accordion-body text-muted"
                        style={{ lineHeight: "1.7" }}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .accordion-button:not(.collapsed) {
          background-color: #fff !important;
          color: #212529 !important;
        }

        .accordion-button:focus {
          box-shadow: none !important;
          border-color: transparent !important;
        }

        .accordion-button:hover {
          background-color: #f8f9fa !important;
        }

        .accordion-button::after {
          transition: transform 0.3s ease;
        }

        .btn-outline-primary {
          border-width: 2px;
        }

        .btn-outline-primary:hover {
          transform: translateY(-1px);
          transition: transform 0.2s ease;
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          transition: transform 0.2s ease;
        }
      `}</style>
    </div>
  );
}
