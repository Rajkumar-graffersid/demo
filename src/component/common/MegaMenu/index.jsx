import { useState } from "react";
import "./index.css";
import { US, IN, MY, SG } from "country-flag-icons/react/3x2";

export default function MegaMenu({ item, onChangeCountry }) {
  const paymentOption = () => (
    <div className="mega-menu">
      <div className="d-flex justify-content-center gap-4">
        <div
          className="menu-column d-flex flex-column gap-2"
          style={{ minWidth: "300px" }}
        >
          <h4>ACCEPT PAYMENTS ONLINE</h4>
          <MenuItem
            title="Payment Aggregator"
            desc="Accepting payments made easy"
          />
          <MenuItem title="Payment Gateway" desc="Payments on website & app" />
          <MenuItem title="Payment Links" desc="Create & send payment links" />
          <MenuItem title="Payment Pages" desc="Personalized payment pages" />
        </div>

        <div className="menu-column" style={{ minWidth: "300px" }}>
          <h4>ACCEPT PAYMENTS ONLINE</h4>
          <MenuItem
            title="UPI Payments"
            desc="Payments on website & app"
            badge="NEW"
          />
          <MenuItem
            title="Magic Checkout"
            desc="Create & send payment links"
            badge="NEW"
          />
          <MenuItem title="Subscriptions" />
          <MenuItem title="Instant Settlement" />
          <MenuItem title="Optimizer" />
          <MenuItem title="QR Codes" />
          <MenuItem title="Webstore" badge="NEW" />
        </div>

        <div className="menu-column" style={{ minWidth: "300px" }}>
          <h4>ACCEPT PAYMENTS OFFLINE</h4>
          <MenuItem title="Razorpay POS" badge="NEW" />

          <h4 style={{ marginTop: 24 }}>INTERNATIONAL</h4>
          <MenuItem title="International Payments" />
          <MenuItem title="International Bank Transfers" />
        </div>
      </div>
    </div>
  );
  return (
    <>
      {item === "headphone" ? (
        <div className="mega-menu d-flex">
          <div className="menu-column-2 d-flex flex-column gap-2">
            <HeadphoneMenuItem title="Payment" />
            <HeadphoneMenuItem title="Bankin+" />
            <HeadphoneMenuItem title="Payroll" />
            <HeadphoneMenuItem title="POS" />
            <HeadphoneMenuItem title="Digital" />
          </div>
          <div className="menu-column d-flex flex-column gap-2">
            <HeadphoneMenuItem title="Knowledgebase" />
            <HeadphoneMenuItem title="Chargeback" />
            <HeadphoneMenuItem title="Settlements" />
          </div>
        </div>
      ) : item === "country" ? (
        <div className="mega-menu-1">
          <div
            className="d-flex flex-column gap-2 p-1"
            style={{ width: "100%" }}
          >
            <CountryMenuItem
              title={<IN title="India" style={{ width: 32, height: 20 }} />}
              badge={"India"}
              onClick={onChangeCountry}
            />
            <CountryMenuItem
              title={
                <US title="United States" style={{ width: 32, height: 20 }} />
              }
              badge={"United States"}
              onClick={onChangeCountry}
            />
            {/* title="Payroll" /> */}
            <CountryMenuItem
              title={<SG title="Singapore" style={{ width: 32, height: 20 }} />}
              badge={"Singapore"}
              onClick={onChangeCountry}
            />
            <CountryMenuItem
              title={<MY title="Malaysia" style={{ width: 32, height: 20 }} />}
              badge={"Malaysia"}
              onClick={onChangeCountry}
            />
            <CountryMenuItem
              title={
                <US title="United States" style={{ width: 32, height: 20 }} />
              }
              badge={"USA"}
              onClick={onChangeCountry}
            />
          </div>
        </div>
      ) : (
        paymentOption()
      )}

      {/* <div className="menu-column d-flex flex-column gap-2">
        <h4>ACCEPT PAYMENTS ONLINE</h4>
        <MenuItem
          title="Payment Aggregator"
          desc="Accepting payments made easy"
        />
        <MenuItem title="Payment Gateway" desc="Payments on website & app" />
        <MenuItem title="Payment Links" desc="Create & send payment links" />
        <MenuItem title="Payment Pages" desc="Personalized payment pages" />
      </div>

      <div className="menu-column">
        <h4>&nbsp;</h4>
        <MenuItem
          title="UPI Payments"
          desc="Payments on website & app"
          badge="NEW"
        />
        <MenuItem
          title="Magic Checkout"
          desc="Create & send payment links"
          badge="NEW"
        />
        <MenuItem title="Subscriptions" />
        <MenuItem title="Instant Settlement" />
        <MenuItem title="Optimizer" />
        <MenuItem title="QR Codes" />
        <MenuItem title="Webstore" badge="NEW" />
      </div>

      <div className="menu-column">
        <h4>ACCEPT PAYMENTS OFFLINE</h4>
        <MenuItem title="Razorpay POS" badge="NEW" />

        <h4 style={{ marginTop: 24 }}>INTERNATIONAL</h4>
        <MenuItem title="International Payments" />
        <MenuItem title="International Bank Transfers" />
      </div> */}
    </>
  );
}

function MenuItem({ title, desc, badge }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`menu-item p-2 ${
        isHovered ? "border-radius-item bg-light" : "border-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="menu-title d-flex gap-3 justify-content-start">
        <div
          className="rounded-full bg-primary p-2 text-light"
          style={{ borderRadius: "50px" }}
        >
          <svg
            overflow="visible"
            xmlns="http://www.w3.org/2000/svg"
            width="10px"
            height="10px"
            viewBox="0 0 24 24"
            fill="none"
          >
            {" "}
            <path
              stroke-linejoin="miter"
              fill="var(--token-63f74b87-ea3c-4559-943a-6a1905b826b2, rgb(255, 255, 255))"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 3.5L2 3.5C1.44772 3.5 1 3.05229 1 2.5C1 1.94772 1.44772 1.5 2 1.5L22 1.5C22.5523 1.5 23 1.94772 23 2.5C23 3.05228 22.5523 3.5 22 3.5ZM3 6.5C2.44772 6.5 2 6.94772 2 7.5V10.5H22V7.5C22 6.94772 21.5523 6.5 21 6.5H3ZM24 7.5C24 5.84315 22.6569 4.5 21 4.5H3C1.34315 4.5 0 5.84315 0 7.5V19.5C0 21.1569 1.34315 22.5 3 22.5H9.75C10.3023 22.5 10.75 22.0523 10.75 21.5C10.75 20.9477 10.3023 20.5 9.75 20.5H3C2.44772 20.5 2 20.0523 2 19.5V12.5H22V13.5C22 14.0523 22.4477 14.5 23 14.5C23.5523 14.5 24 14.0523 24 13.5V7.5ZM12 18.5C12 16.8431 13.3431 15.5 15 15.5H20C21.6569 15.5 23 16.8431 23 18.5V19.5C23 21.1569 21.6569 22.5 20 22.5H15C13.3431 22.5 12 21.1569 12 19.5V18.5ZM15 17.5C14.4477 17.5 14 17.9477 14 18.5V19.5C14 20.0523 14.4477 20.5 15 20.5H20C20.5523 20.5 21 20.0523 21 19.5V18.5C21 17.9477 20.5523 17.5 20 17.5H15ZM3.5 17.5C3.5 16.9477 3.94772 16.5 4.5 16.5H7.5C8.05228 16.5 8.5 16.9477 8.5 17.5C8.5 18.0523 8.05228 18.5 7.5 18.5H4.5C3.94772 18.5 3.5 18.0523 3.5 17.5Z"
            ></path>{" "}
          </svg>
        </div>
        <div className="d-flex gap-4 align-content-center justify-content-between">
          <div>
            <div>
              {title}
              {badge && <span className="badge m-0">{badge}</span>}
            </div>
            {desc && <p className="m-0">{desc}</p>}
          </div>
          <div
            className={`${
              isHovered ? "text-primary" : "invisible"
            } d-flex align-content-start justify-content-end`}
          >
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeadphoneMenuItem({ title, desc, badge }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`menu-item pe-4 d-flex align-items-center gap-2 ${
        isHovered ? "" : "border-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`${isHovered ? "border-left-item py-1" : "d-hidden"}`}
        style={{ height: "100%" }}
      >
        <div
          style={{
            height: "35px",
            width: "5px",
            borderTopRightRadius: "10px",
            borderEndEndRadius: "10px",
          }}
          className={`${isHovered ? "bg-primary" : "d-hidden"}`}
        ></div>
      </div>
      <div className="menu-title d-flex justify-content-between gap-4">
        <div style={{ color: "grey" }}>
          {title}
          {badge && <span className="badge m-0">{badge}</span>}
        </div>
        <div className={`${isHovered ? "text-primary" : "invisible"}`}>
          {">"}
        </div>
      </div>
      {desc && <p>{desc}</p>}
    </div>
  );
}

function CountryMenuItem({ title, desc, badge, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`menu-item w-100 p-2 d-flex align-items-center gap-2 ${
        isHovered ? "bg-info-hover rounded-3" : "border-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(title)}
    >
      {" "}
      <div className="menu-title d-flex justify-content-between">
        <div
          style={{ color: "grey", borderRadius: "5px", width: "100%" }}
          className="d-flex rounded-4 justify-content-around gap-2"
        >
          {title}
          <div className="d-flex" style={{ width: "100px" }}>
            {badge}
          </div>
        </div>
        <div className={`${isHovered ? "text-primary" : "invisible"}`}>
          {">"}
        </div>
      </div>
      {desc && <p>{desc}</p>}
    </div>
  );
}
