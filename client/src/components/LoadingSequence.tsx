import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingSequence() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress over ~1.8 seconds (giving it 200ms extra to linger)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="loading-sequence"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "var(--navy)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.img
        src="/assets/mehansh-mark-256.png"
        alt="Mehansh Loading"
        width={120}
        height={120}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        style={{ marginBottom: "40px" }}
      />
      <div
        className="loading-bar-container"
        style={{
          width: "200px",
          height: "2px",
          backgroundColor: "rgba(242, 237, 227, 0.15)",
          overflow: "hidden",
        }}
      >
        <motion.div
          className="loading-bar"
          initial={{ width: "0%" }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          style={{
            height: "100%",
            backgroundColor: "var(--lime)",
          }}
        />
      </div>
    </div>
  );
}
