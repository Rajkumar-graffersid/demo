export default function Footer() {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row g-4 gap-4 d-flex justify-content-center">
          {/* Left Column - Company Info */}
          <div className="col-lg-3 col-md-6">
            <div className="mb-4">
              <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
                <text
                  x="0"
                  y="20"
                  fill="#0D47A1"
                  fontSize="18"
                  fontWeight="bold"
                >
                  Razorpay
                </text>
              </svg>
            </div>
            <p className="text-muted small  mb-4" style={{ lineHeight: "1.7" }}>
              Razorpay is the only payments solution in India that allows
              businesses to accept, process and disburse payments with its
              product suite. It gives you access to all payment modes including
              credit card, debit card, netbanking, UPI and popular wallets
              including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money
              and PayZapp.
            </p>
            <p className="text-muted small mb-4" style={{ lineHeight: "1.7" }}>
              RazorpayX supercharges your business banking experience, bringing
              effectiveness, efficiency, and excellence to all financial
              processes. With RazorpayX, businesses can get access to
              fully-functional current accounts, supercharge their payouts and
              automate payroll compliance.
            </p>
            <p className="text-muted small  mb-4" style={{ lineHeight: "1.7" }}>
              Manage your marketplace, automate bank transfers, collect
              recurring payments, share invoices with customers and avail
              working capital loans - all from a single platform. Fast forward
              your business with Razorpay.
            </p>
            <p className="text-muted small  mb-4" style={{ lineHeight: "1.7" }}>
              Discover the RazorpayX Current Account and VISA corporate credit
              card are provided by RBL (licensed banks). Your RazorpayX powered
              current account is provided by our partner banks (e.g. ICICI,
              RBL). Yes bank, in accordance with RBI regulations. RazorpayX
              itself is not a bank and doesn't hold or claim to hold a banking
              license.
            </p>
            <div className="d-flex gap-3 mb-4">
              <img
                src="https://via.placeholder.com/60x60?text=PCI+DSS"
                alt="PCI DSS"
                className="img-fluid"
              />
              <img
                src="https://via.placeholder.com/60x60?text=BSI"
                alt="BSI"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/80x80?text=AICPA+SOC"
                alt="AICPA SOC"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Accept Payments Column */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6
              className="text-uppercase fw-bold mb-3"
              style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
            >
              ACCEPT PAYMENTS
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Payment Aggregator
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Payment Gateway
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Payment Pages
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Payment Links
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold d-flex align-items-center gap-1"
                >
                  Razorpay Checkout
                  <span
                    className="badge bg-success"
                    style={{ fontSize: "0.6rem", padding: "2px" }}
                  >
                    NEW
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  QR Codes
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Subscriptions
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Smart Collect
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Optimizer
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Instant Settlements
                </a>
              </li>
            </ul>

            <h6
              className="text-uppercase fw-bold mb-3 mt-4"
              style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
            >
              PAYROLL
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  RazorpayX Payroll
                </a>
              </li>
            </ul>

            <h6
              className="text-uppercase fw-bold mb-3 mt-4"
              style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
            >
              BECOME A PARTNER
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Refer and Earn
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Onboarding APIs
                </a>
              </li>
            </ul>

            <h6
              className="text-uppercase fw-bold mb-3 mt-4"
              style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
            >
              MORE
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Route
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Invoices
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Freelancer Payments
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  International Payments
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Flash Checkout
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  UPI
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  ePOS
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Checkout Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Banking Plus & Developers Column */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6
              className="text-uppercase fw-bold mb-3"
              style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
            >
              BANKING PLUS
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  RazorpayX
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Source to pay
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Current Accounts
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Payouts
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Payout Links
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Corporate Credit Card
                </a>
              </li>
            </ul>

            <h6
              className="text-uppercase fw-bold mb-3 mt-4"
              style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
            >
              DEVELOPERS
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Docs
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Integrations
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  API Reference
                </a>
              </li>
            </ul>

            <h6
              className="text-uppercase fw-bold mb-3 mt-4"
              style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
            >
              RESOURCES
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Learn
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Customer Stories
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Events
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Chargeback Guide
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Settlement Guide
                </a>
              </li>
            </ul>

            <h6
              className="text-uppercase fw-bold mb-3 mt-4"
              style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
            >
              SOLUTIONS
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Education
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  E-commerce
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  SaaS
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  BFSI
                </a>
              </li>
            </ul>

            <h6
              className="text-uppercase fw-bold mb-3 mt-4"
              style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
            >
              FREE TOOLS
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  GST Calculator
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  GST Number Search
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  GST Search by PAN
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  ROI Calculator
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  CAGR Calculator
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  EBITDA Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Help Column */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6
              className="text-uppercase fw-bold mb-3"
              style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
            >
              COMPANY
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Terms of Use
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Grievance Redressal
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Responsible Disclosure
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Partners
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  White papers
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Corporate Information
                </a>
              </li>
            </ul>

            <h6
              className="text-uppercase fw-bold mb-3 mt-4"
              style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
            >
              HELP & SUPPORT
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Support
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-bold"
                >
                  Knowledge base
                </a>
              </li>
            </ul>

            <h6
              className="text-uppercase fw-bold mb-3 mt-4"
              style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
            >
              FIND US ONLINE
            </h6>
            <div className="d-flex gap-2 mb-3">
              <a
                href="#"
                className="text-primary"
                style={{ fontSize: "1.25rem" }}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="#"
                className="text-primary"
                style={{ fontSize: "1.25rem" }}
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="#"
                className="text-primary"
                style={{ fontSize: "1.25rem" }}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="#"
                className="text-primary"
                style={{ fontSize: "1.25rem" }}
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a
                href="#"
                className="text-primary"
                style={{ fontSize: "1.25rem" }}
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer a:hover {
          text-decoration: underline !important;
        }
      `}</style>
    </footer>
  );
}
