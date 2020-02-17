import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component {
  render() {
    return (
      <div className="aboutUsColor">
        <br></br>
        <h2 className="aboutUsTitle">Aplier Team</h2>
        <div className="aboutUs">
            <img
              className="circleAboutMe"
              src='https://media-exp1.licdn.com/dms/image/C4D03AQGvl34LG-jI_A/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=Ctzy0buBfTCwUyGl2fhKhDtda8aLBW4oJqAGgjiFHjQ'
              alt="candidate img"
            />
            <h3><center>Depak Borhara</center></h3>
            <div className="positionInfo">
            <p> <img alt="icon"className="icon" src="https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/location-512.png"/> New York, NY</p>
            <p> <img alt="icon"className="icon" src="https://png.pngtree.com/svg/20151015/7cc2f4999d.png"/> Software Engineer</p>
            <p> <img alt="icon"className="icon" src="https://i.imgur.com/zGYtmc4.png"/><a id="github" href="https://github.com/DBorhara"> Depak's Github</a></p>
            <hr></hr>
            <h3>About Me</h3>
            <p>I am a former non-profit and government professional transitioning to tech. I helped train Software Engineers that came from high need backgrounds which has inspired me to join the tech industry as an engineer. </p>
            </div>
        </div>
        <div className="aboutUs">
            <img
              className="circleAboutMe"
              src='https://media-exp1.licdn.com/dms/image/C4D03AQGqXZ-DfOk3dQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=02SdPdDT1Zbo_E3ROQUquxsRtQBi0kIhSYgHDaLqXuE'
              alt="candidate img"
            />
            <h3><center>Tina Fun</center></h3>
            <div className="positionInfo">
            <p> <img alt="icon"className="icon" src="https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/location-512.png"/> New York, NY</p>
            <p> <img alt="icon"className="icon" src="https://png.pngtree.com/svg/20151015/7cc2f4999d.png"/> Software Engineer</p>
            <p> <img alt="icon"className="icon" src="https://i.imgur.com/zGYtmc4.png"/><a id="github" href="https://github.com/tinafun"> Tina's Github</a> </p>
            <hr></hr>
            <h3>About Me</h3>
            <p>Software developer with experience in Digital Advertising, Strategies, Partnerships, E-commerce, and Community Building. A self-starter with a proven track record of creative problem-solving, navigating ambiguity, and team building.
            </p>
            </div>
        </div>
        <div className="aboutUs">
            <img
              className="circleAboutMe"
              src='https://media-exp1.licdn.com/dms/image/C4E03AQHXst6A3cyHmA/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=M3L4e6U-k7C5g521_5oFc43Vx9YMGhm3gUFORir1FKQ'
              alt="candidate img"
            />
            <h3><center>Remi Mendoza</center></h3>
            <div className="positionInfo">
            <p> <img alt="icon"className="icon" src="https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/location-512.png"/> New York, NY</p>
            <p> <img alt="icon"className="icon" src="https://png.pngtree.com/svg/20151015/7cc2f4999d.png"/> Software Engineer</p>
            <p> <img alt="icon"className="icon" src="https://i.imgur.com/zGYtmc4.png"/> <a id="github" href=" https://github.com/mendozaremi"> Remi's Github</a> </p>
            <hr></hr>
            <h3>About Me</h3>
            <p>I'm a graduate of Fullstack Academy's software engineering program. Web development, design, and software engineering were always passions of mine.I'm grateful for what this career has given me and hope to be apart of a company that strives for nothing less than success</p>
            </div>
        </div>
        <div className="aboutUs">
            <img
              className="circleAboutMe"
              src='https://media-exp1.licdn.com/dms/image/C4D03AQEPeIvZ2xE-RQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=KTfcAPklrXqGyZ84A5aCLeFJT8OKwzoL_2QkMQNPPHQ'
              alt="candidate img"
            />
            <h3><center>Marvin Huang</center></h3>
            <div className="positionInfo">
            <p> <img alt="icon"className="icon" src="https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/location-512.png"/> New York, NY</p>
            <p> <img alt="icon"className="icon" src="https://png.pngtree.com/svg/20151015/7cc2f4999d.png"/> Software Engineer</p>
            <p> <img alt="icon"className="icon" src="https://i.imgur.com/zGYtmc4.png"/><a id="github" href="https://github.com/mh-393"> Marvin's Github</a> </p>
            <hr></hr>
            <h3>About Me</h3>
            <p>I'm Marvin, a software engineering Student at Fullstack Academy</p>
            </div>
            <br></br>
        </div>
      </div>
    )
  }
}

export default AboutUs;
