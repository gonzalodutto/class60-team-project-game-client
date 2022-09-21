import { useRef, useState } from "react";
import "./style.css";

const Magnifier = ({ src }) => {
  const imgRef = useRef(null);
  const zoom = 2;
  const [glassOffset, setGlassOffset] = useState({ left: 0, top: 0 });
  const getCursorPos = (ev) => {
    const e = ev || window.event;
    /* Get the x and y positions of the image: */
    const a = imgRef.current.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    let x = e.pageX - a.left;
    let y = e.pageY - a.top;
    /* Consider any page scrolling: */
    // x = x - window.pageXOffset;
    // y = y - window.pageYOffset;
    return { x: x, y: y };
  };

  const handleMouseMove = (ev) => {
    ev.preventDefault();
    let w = imgRef.current.offsetWidth / 2;
    let h = imgRef.current.offsetHeight / 2;
    let { x, y } = getCursorPos(ev);
    // console.log(x, y);
    // console.log({ left: x - w, top: y - h })
    if (x > imgRef.current.width - w / zoom) {
      x = imgRef.current.width - w / zoom;
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > imgRef.current.height - h / zoom) {
      y = imgRef.current.height - h / zoom;
    }
    if (y < h / zoom) {
      y = h / zoom;
    }
    setGlassOffset({ left: x + w, top: y - h });
  };

  return (
    <div>
      {imgRef.current && (
        <div
          // onMouseMove={(ev) => handleMouseMove(ev)}
          className="img-magnifier-glass"
          style={{
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            left: glassOffset.left,
            top: glassOffset.top,
            backgroundSize:
              imgRef.current.width * zoom +
              "px " +
              imgRef.current.height * zoom +
              "px",
          }}
        ></div>
      )}
      <div className="img-magnifier-container">
        <img
          onMouseMove={(ev) => handleMouseMove(ev)}
          src={src}
          alt="zoomImage"
          ref={imgRef}
        />
      </div>
    </div>
  );
};

export default Magnifier;
