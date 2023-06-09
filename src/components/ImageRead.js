import React, { memo, useEffect, useState } from "react";

const Image_read = (props) => {
  const [img, setImg] = useState(null);
  useEffect(() => {
    const fr = new FileReader();
    fr.readAsDataURL(props.value);
    fr.onloadend = () => {
      setImg(fr.result);
      props.callbck(fr.result);
    };
  }, [props.value]);
  console.log("Ir called");
  return <div>{/* <img src={img} /> */}</div>;
};

export default memo(Image_read);
