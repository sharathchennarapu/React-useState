import React, { useState } from "react";

const Imageview = () => {
  const [showImage, setShowImage] = useState(null);
  const imageHandler = (myimage) => {
    setShowImage(myimage);
  };
  const closeHandler=()=>{
    setShowImage(null)
  }
    return (
    <>
     <h1 align='center'>Image View<br/><h5>(click on Image to View Image)</h5></h1>
      <div className="imagesection">
        <img
          src={require("../images/1.webp")}
          alt="expimg"
          onClick={() => imageHandler(require('../images/1.webp'))}
        />
        <img src={require("../images/2.jpg")} alt="expimg" onClick={() => imageHandler(require('../images/2.jpg'))}/>
        <img src={require("../images/3.jpg")} alt="expimg" onClick={() => imageHandler(require('../images/3.jpg'))}/>
        <img src={require("../images/4.jpg")} alt="expimg" onClick={() => imageHandler(require('../images/4.jpg'))}/>
        <img src={require("../images/5.jpg")} alt="expimg" onClick={() => imageHandler(require('../images/5.jpg'))}/>

        {showImage && 
          <div className="modelbox">
            <div className="model">
              <img src={showImage} alt="" />
              <button onClick={closeHandler}>Close</button>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Imageview;
