import React, { useRef } from "react";
import "./CombinedARView.css";

const CombinedARView = ({ wishlistItems }) => {
  const modelViewerRef = useRef(null);

  return (
    <div className="combined-ar-view">
      <model-viewer
        ref={modelViewerRef}
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "#ecf0f3",
          borderRadius: "15px",
        }}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        environment-image="neutral"
        exposure="1"
        shadow-softness="1"
        ar-scale="fixed"
        ar-placement="floor"
      >
        {wishlistItems.map((item, index) => (
          <model-viewer
            key={item.id}
            src={item.modelSrc}
            ios-src={item.iOSSrc}
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="fixed"
            ar-placement="floor"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            position={`${index * 1.5} 0 ${index * 0.5}`}
            rotation="0 0 0"
            scale="0.5 0.5 0.5"
            camera-controls
            auto-rotate
          />
        ))}
        <button slot="ar-button" className="arbutton">
          View in your space
        </button>
      </model-viewer>
    </div>
  );
};

export default CombinedARView; 