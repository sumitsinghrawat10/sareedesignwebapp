import { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import Pic1 from "../src/assets/pic1.jpg";
import Pic2 from "../src/assets/pic2.jpg";
import Pic3 from "../src/assets/pic3.jpg";
import Pic4 from "../src/assets/pic4.jpg";
import Pic5 from "../src/assets/pic5.jpg";
import Pic6 from "../src/assets/pic6.jpg";
import Pic7 from "../src/assets/pic7.jpg";
import Pic8 from "../src/assets/pic8.jpg";
import Pic9 from "../src/assets/pic9.jpg";
import Pic10 from "../src/assets/pic10.jpg";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  // const [img4, setImg4] = useState(null);
  const [img1Zoom, setImg1Zoom] = useState(1);
  const [img2Zoom, setImg2Zoom] = useState(1);
  const [img3Zoom, setImg3Zoom] = useState(1);
  const [clickNext, setClickNext] = useState(false);

  const handleDrop = (dropped) => {
    setImg1(dropped[0]);
  };

  const handleDropImg2 = (dropped) => {
    setImg2(dropped[0]);
  };

  const handleDropImg3 = (dropped) => {
    setImg3(dropped[0]);
  };

  // const handleDropImg4 = (dropped) => {
  //   setImg4(dropped[0]);
  // };

  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        {!clickNext ? (
          <div className="image-container">
            <div className="image-one">
              <Dropzone
                onDrop={handleDrop}
                noKeyboard
                style={{ width: "250px", height: "250px" }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    {img1 ? (
                      <AvatarEditor
                        width={250}
                        height={250}
                        image={img1}
                        scale={img1Zoom}
                      />
                    ) : (
                      <button class="buttonClass">Click image 1</button>
                    )}

                    <input {...getInputProps()} />
                  </div>
                )}
              </Dropzone>
              <div class="slidecontainer">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={img1Zoom}
                  className="slider"
                  onChange={(e) => setImg1Zoom(Number(e.target.value))}
                  id="myRange"
                />
              </div>
            </div>
            <div className="image-one">
              <Dropzone
                onDrop={handleDropImg2}
                noKeyboard
                style={{ width: "250px", height: "250px" }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    {img2 ? (
                      <AvatarEditor
                        width={250}
                        height={250}
                        image={img2}
                        scale={img2Zoom}
                      />
                    ) : (
                      <button class="buttonClass">Click image 2</button>
                    )}

                    <input {...getInputProps()} />
                  </div>
                )}
              </Dropzone>
              <div class="slidecontainer">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={img2Zoom}
                  className="slider"
                  onChange={(e) => setImg2Zoom(Number(e.target.value))}
                  id="myRange"
                />
              </div>
            </div>
            <div className="image-one">
              <Dropzone
                onDrop={handleDropImg3}
                noKeyboard
                style={{ width: "250px", height: "250px" }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    {img3 ? (
                      <AvatarEditor
                        width={250}
                        height={250}
                        image={img3}
                        scale={img3Zoom}
                      />
                    ) : (
                      <button class="buttonClass">Click image 3</button>
                    )}

                    <input {...getInputProps()} />
                  </div>
                )}
              </Dropzone>
              <div class="slidecontainer">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={img3Zoom}
                  className="slider"
                  onChange={(e) => setImg3Zoom(Number(e.target.value))}
                  id="myRange"
                />
              </div>
            </div>
            <div>
              <button
                disabled={!img1 || !img2 || !img3}
                onClick={() => setClickNext(true)}
                class="buttonClass"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="poses-container">
            <div className="pose">
              <img alt="saree" height="300px" src={Pic1} />
            </div>
            <div className="pose">
              <img alt="saree" height="300px" src={Pic2} />
            </div>
            <div className="pose">
              <img alt="saree" height="300px" src={Pic3} />
            </div>
            <div className="pose">
              <img alt="saree" height="300px" src={Pic4} />
            </div>
            <div className="pose">
              <img alt="saree" height="300px" src={Pic5} />
            </div>
            <div className="pose">
              <img alt="saree" height="300px" src={Pic6} />
            </div>
            <div className="pose">
              <img alt="saree" height="300px" src={Pic7} />
            </div>
            <div className="pose">
              <img alt="saree" height="300px" src={Pic8} />
            </div>
            <div className="pose">
              <img alt="saree" height="300px" src={Pic9} />
            </div>
            <div className="pose">
              <img alt="saree" height="300px" src={Pic10} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
