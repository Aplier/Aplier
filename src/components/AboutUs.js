import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component {
  render() {
    return (
      <div>
          <div className="formContainer">
            <h3 className="welcomeAccount">The Team That Built Aplier</h3>
            <img alt="matchImg"src="https://media-exp1.licdn.com/dms/image/C4D03AQGvl34LG-jI_A/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=Ctzy0buBfTCwUyGl2fhKhDtda8aLBW4oJqAGgjiFHjQ"
            />
            <br />
            <h4 className="accountList">Depak Borhara</h4>
            <hr></hr>
            <h4 className="accountList">About Me</h4>
            <p className="accountListData"> I am a former non-profit and government professional transitioning to tech. I helped train Software Engineers that came from high need backgrounds which has inspired me to join the tech industry as an engineer. I have a passion for building things and software engineering lets me build products that can solve problems at scale.</p>
            <hr></hr>
            <img alt="matchImg"src="https://media-exp1.licdn.com/dms/image/C4D03AQGqXZ-DfOk3dQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=02SdPdDT1Zbo_E3ROQUquxsRtQBi0kIhSYgHDaLqXuE"
            />
            <br />
            <h4 className="accountList">Tina Fun</h4>
            <hr></hr>
            <h4 className="accountList">About Me</h4>
            <p className="accountListData"> Software developer with experience in Digital Advertising, Strategies, Partnerships, E-commerce, and Community Building. A self-starter with a proven track record of creative problem-solving, navigating ambiguity, and team building.</p>
            <hr></hr>
            <img alt="matchImg"src="https://media-exp1.licdn.com/dms/image/C4D03AQEPeIvZ2xE-RQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=KTfcAPklrXqGyZ84A5aCLeFJT8OKwzoL_2QkMQNPPHQ"
            />
            <br />
            <h4 className="accountList">Marvin Huang</h4>
            <hr></hr>
            <h4 className="accountList">About Me</h4>
            <p className="accountListData"> FILL IN </p>
            <hr></hr>
            <img alt="matchImg"src="https://i.imgur.com/Q7kyCzR.png"
            />
            <br />
            <h4 className="accountList">Remi Mendoza</h4>
            <hr></hr>
            <h4 className="accountList">About Me</h4>
            <p className="accountListData"> I am a Fullstack Enigeer with a strong passion for creating web applications. Some other passions I have are UI and UX design. I hope to one day be apart of a company that helps everyday life's for us all. </p>
            <br/>
            <hr></hr>
          </div>
        </div>
    )
  }
}

export default AboutUs;
