import "./SupportedPlatforms.css";

const webPlatforms = [
  {
    src: "https://framerusercontent.com/images/gCJbrCKkKLfRoanWPTRTLPfYseU.png",
    alt: "Web Platform 1",
  },
  {
    src: "https://framerusercontent.com/images/NEFftzCs9lhf3ej7Gn0nFWIrOH0.png",
    alt: "Web Platform 2",
  },
  {
    src: "https://framerusercontent.com/images/tHveiXlnFbCvEkjtq1L34A3CQ.png",
    alt: "Web Platform 3",
  },
];

const appPlatforms = [
  {
    src: "https://framerusercontent.com/images/rktYeOQqsLT7h6tBhVCmQr5buBs.png",
    alt: "App Platform 1",
  },
  {
    src: "https://framerusercontent.com/images/RwTE2ygAZHE7IyTpNFQbDwRyhPM.png",
    alt: "App Platform 2",
  },
  {
    src: "https://framerusercontent.com/images/L4AZjkonPBygBYW7gRkbfaSEHtM.png",
    alt: "App Platform 3",
  },
];

export default function SupportedPlatforms() {
  return (
    <section className="supported-platforms">
      <h2 className="section-title fw-bolder">Supported Platforms</h2>

      <PlatformGroup title="Web Platforms" items={webPlatforms} />
      <PlatformGroup title="App Platforms" items={appPlatforms} />
    </section>
  );
}

function PlatformGroup({ title, items }) {
  return (
    <div className="platform-group">
      <p className="platform-title">{title}</p>

      <div className="platform-list">
        {items.map((item, index) => (
          <div className="platform-item p-2 shadow-lg" key={index}>
            {/* <div className="indicator">
              <span className="dot" />
              <span className="line" />
            </div> */}

            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
