/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export default function ScrollCinematicSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* -----------------
     BOX GROWTH
  ------------------ */
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.2, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.25], [24, 0]);

  /* -----------------
     ISLAND + PHONE
  ------------------ */
  const islandX = useTransform(scale, [0.35, 0.9], [-1000, -400]);
  const island2X = useTransform(scale, [0.35, 0.9], [2000, 900]);
  const phoneY = useTransform(scrollYProgress, [0.35, 0.6], [120, 0]);
  const phoneOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  /* -----------------
     CLOUDS
  ------------------ */
  const normalizedScale = useTransform(scale, [0.15, 1], [0, 1]);

  const cloudLeftX = useTransform(normalizedScale, [0.2, 1], [0, -400]);
  const cloudRightX = useTransform(normalizedScale, [0.2, 0.9], [0, 500]);
  const cloudBottomY = useTransform(normalizedScale, [0.2, 0.9], [0, 200]);

  /* -----------------
     VIDEO SCRUB
  ------------------ */
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (!videoRef.current) return;
      const duration = videoRef.current.duration || 1;
      if (v > 0.6 && v < 0.95) {
        videoRef.current.currentTime = ((v - 0.6) / 0.35) * duration;
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);
  const bag1Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -10, 0]);

  const bag2Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 10, 0]);

  const bag3Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -15, 0]);
  return (
    <section ref={sectionRef} style={{ height: "300vh" }}>
      <PinnedStage>
        <motion.div
          style={{
            scale,
            borderRadius: radius,
            width: "100vw",
            height: "100vh",
            // background:
            //   "linear-gradient(180deg, rgb(82,162,191) 0%, rgb(95,179,209) 15%, rgb(255,255,255) 160%)",
            background:
              "linear-gradient(180deg, #52a2bf 0%, #5fb3d1 15%, #fff 160%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Clouds */}
          {/* Clouds with initial offsets */}
          <Cloud
            width={"1000px"}
            height={"550px"}
            initialX={-35}
            initialY={-25}
            x={cloudLeftX}
          />
          <Cloud
            width={"908px"}
            height={"504px"}
            initialX={30}
            initialY={-40}
            x={cloudRightX}
          />
          <Cloud
            width={"700px"}
            height={"400px"}
            initialX={0}
            initialY={25}
            y={cloudBottomY}
            zIndex={"0"}
          />

          {/* Island */}
          <motion.div
            style={{
              position: "absolute",
              bottom: -85,
              left: "50%",
              x: islandX,
              translateX: "-50%",
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: "93px",
                  height: "277px",
                  left: "25%",
                  position: "absolute",
                  bottom: "33%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    borderRadius: "inherit",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                  data-framer-background-image-wrapper="true"
                >
                  <img
                    decoding="auto"
                    loading="lazy"
                    width={371}
                    height={1108}
                    sizes="93px"
                    srcSet="https://framerusercontent.com/images/SchXT2AANlOhGieC8K5bUcThSTg.png?width=371&height=1108 371w"
                    src="https://framerusercontent.com/images/SchXT2AANlOhGieC8K5bUcThSTg.png?width=371&height=1108"
                    alt=""
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                      objectPosition: "center",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  background: "transparent",
                  marginBottom: "-55px",
                }}
              >
                <video
                  ref={videoRef}
                  muted
                  autoPlay
                  loop
                  // playsInline
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    background: "transparent",
                    zIndex: 2,
                  }}
                >
                  <source
                    src="https://framerusercontent.com/assets/gB1m4z9zNtl0N81I7KRKGxandA.mov"
                    type='video/quicktime; codecs="hvc1"'
                  />
                  <source
                    src="https://framerusercontent.com/assets/QEGCy18UF7QGRTkzUR0SdCE9Xk.webm"
                    type="video/webm"
                  />
                </video>
              </div>
              <div
                className="framer-1qn0hj0"
                data-framer-name="Right Elements"
                style={{
                  flex: "none",
                  width: "141px",
                  height: "222px",
                  position: "absolute",
                  bottom: "181px",
                  right: "140px",
                }}
              >
                {/* Bag 1 */}
                <div
                  className="framer-zrv1j7"
                  data-framer-name="bag 1"
                  style={{
                    willChange: "transform",
                    opacity: 1,
                    transform: "translateY(7.05419px)",
                    y: bag1Y,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      borderRadius: "inherit",
                      top: "-40%",
                      right: 0,
                      bottom: 0,

                      left: "38px",
                      aspectRatio: ".726218",
                      height: "45px",
                      flex: "none",
                      width: "33px",
                    }}
                    data-framer-background-image-wrapper="true"
                  >
                    <img
                      decoding="auto"
                      loading="lazy"
                      width={132}
                      height={180}
                      src="https://framerusercontent.com/images/IXUirMjXcOeYMuL06Boyb4io4.png?width=132&height=180"
                      alt=""
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "center",
                        objectFit: "fill",
                      }}
                    />
                  </div>
                </div>

                {/* Bag 2 */}
                <div
                  className="framer-1vd6b6i"
                  data-framer-name="bag 2"
                  style={{
                    willChange: "transform",
                    opacity: 1,
                    transform: "translateY(7.04552px)",
                    y: bag2Y,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      borderRadius: "inherit",
                      right: 0,
                      top: "-40%",
                      bottom: "35%",

                      left: "35%",
                      width: "47px",
                      height: "63px",
                    }}
                    data-framer-background-image-wrapper="true"
                  >
                    <img
                      decoding="auto"
                      loading="lazy"
                      width={176}
                      height={200}
                      src="https://framerusercontent.com/images/eobjgtNXMivDStGpoBF5Gx5kWA.png?width=176&height=200"
                      alt=""
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "center",
                        objectFit: "fill",
                      }}
                    />
                  </div>
                </div>

                {/* Bag 3 */}
                <div
                  className="framer-1hl65sl"
                  data-framer-name="bag 3"
                  style={{
                    willChange: "transform",
                    opacity: 1,
                    transform: "translateY(-4.37743px)",
                    y: bag3Y,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      borderRadius: "inherit",
                      right: 0,
                      bottom: 0,
                      top: "-63%",
                      left: "31px",
                      height: "45px",
                      flex: "none",
                      width: "33px",
                    }}
                    data-framer-background-image-wrapper="true"
                  >
                    <img
                      decoding="auto"
                      loading="lazy"
                      width={186}
                      height={253}
                      src="https://framerusercontent.com/images/vfuArOGV04GVjFoKlOObLpfVBM.png?width=186&height=253"
                      alt=""
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "center",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>

                {/* Bottom */}
                <div className="framer-fxzb7d" data-framer-name="bottom">
                  <div
                    style={{
                      position: "absolute",
                      borderRadius: "inherit",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      height: "209px",
                    }}
                    data-framer-background-image-wrapper="true"
                  >
                    <img
                      decoding="auto"
                      loading="lazy"
                      width={564}
                      height={840}
                      sizes="141px"
                      srcSet="https://framerusercontent.com/images/fF0yRrvrWOlMg2OPH37udUY8hQ.png?width=564&height=840 564w"
                      src="https://framerusercontent.com/images/fF0yRrvrWOlMg2OPH37udUY8hQ.png?width=564&height=840"
                      alt=""
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "center",
                        objectFit: "fill",
                      }}
                    />
                  </div>
                </div>
              </div>

              <img
                src="https://framerusercontent.com/images/Mv5GE83DoNiJSCE5tnenMTAL88.png?width=1801&height=495"
                width={900}
                style={{ opecity: "0.8" }}
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            style={{
              position: "absolute",
              bottom: 20,
              left: "50%",
              x: island2X,
              translateX: "-50%",
            }}
          >
            <img
              src="https://framerusercontent.com/images/Wf7XW3RevDiZYIQyAFFbOjXDUM.png?width=3412&height=944"
              // width={900}
              // height={200}
              style={{
                opecity: "0.8",
                objectFit: "fill",
                height: "150px",
                width: "900px",
                filter: "blur(4px)",
              }}
              alt=""
            />
          </motion.div>

          {/* Phone */}
          <motion.div
            style={{
              position: "absolute",
              bottom: 120,
              left: "50%",
              y: phoneY,
              opacity: phoneOpacity,
              translateX: "-50%",
            }}
          >
            {/* <Phone videoRef={videoRef} /> */}
          </motion.div>
        </motion.div>
      </PinnedStage>
    </section>
  );
}

/* =========================
   PINNED STAGE
========================= */

function PinnedStage({ children }) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}

/* =========================
   CLOUD
========================= */
function Cloud({
  width,
  height,
  initialX = 0,
  initialY = 0,
  x = 0,
  y = 0,
  zIndex,
}) {
  return (
    <motion.img
      src="https://framerusercontent.com/images/N2p4bjhoz4Zmev0cTW95ROBFbrE.png?width=607&height=405"
      style={{
        position: "absolute",
        top: `${20 + initialY}%`,
        left: `${50 + initialX}%`,
        x,
        y,
        translateX: "-50%",
        zIndex: zIndex || 1,
        opacity: 1, // lower opacity for soft look
        // filter: "blur(6px) drop-shadow(0 0 6px rgba(255,255,255,0.6))", // soften edges with blur and white glow
        mixBlendMode: "lighten", // blend softly with background
        pointerEvents: "none",
        userSelect: "none",
        // willChange: "transform, filter, opacity",
        perspective: "1200px",
        width: width,
        height: height,
        willChange: "transform",
        transform: "perspective(1200px) translateX(22.296px) scale(1.30354)",
      }}
      width={600}
      alt=""
    />
  );
}
