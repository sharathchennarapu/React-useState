import React from "react";
import Button from "react-bootstrap/Button";
import "../App.css";
import { Link } from "react-router-dom";

const Mainpage = () => {
  return (
    <>
      <div className="header">
        <p>React-useState Works</p>

        <div className='navbuttons'>
            <ul>
                <Link to = '/backgroundchange'>
                   <Button variant="outline-primary" size="lg" className="buttonchange">
                      Background Color Change
                    </Button>
                </Link>
                <Link to = '/toggle'>
                   <Button variant="outline-primary" size="lg" className="buttonchange">
                      Toggle Effect
                  </Button>
                </Link>
                <Link to = '/imageview'>
                   <Button variant="outline-primary" size="lg" className="buttonchange">
                   Image View Effect
                    </Button>
                </Link>
                <Link to = '/tabs'>
                   <Button variant="outline-primary" size="lg" className="buttonchange">
                   Tabs Change
                    </Button>
                </Link>
                

            </ul>
        </div>

        {/* <div className="container  d-grid gap-2">
  
            <Button variant="primary" size="lg" className="buttonchange">
            Background Color Change
          </Button>
           
         
          <Button variant="primary" size="lg" className="buttonchange">
            Toggle Effect
          </Button>
          <Button variant="primary" size="lg" className="buttonchange">
            Tabs Change
          </Button>
          <Button variant="primary" size="lg" className="buttonchange">
            Image View Effect
          </Button>
        </div> */}
      </div>
    </>
  );
};

export default Mainpage;
