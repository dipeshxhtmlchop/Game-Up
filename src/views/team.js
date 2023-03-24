import { Container, Row, Col } from "react-bootstrap";
import { tabTitle } from "../components/tabsTitle";
import LocationIcon from "../assets/images/icons/Address.svg";
import EmailIcon from "../assets/images/icons/email.svg";
import { Link } from "react-router-dom";
import PhoneIcon from "../assets/images/icons/phone.svg";
import RateIcon from "../assets/images/icons/rate.svg";
import LinkIcon from "../assets/images/icons/link.svg";
import ClockIcon from "../assets/images/icons/Clock.svg";
import NickImg from "../assets/images/coaches/nick.png";
import JaneImg from "../assets/images/coaches/jane.png";
import EditIcon from "../assets/images/icons/editIcon.svg";
import EditIconBlack from "../assets/images/icons/Edit-Icon.svg";
import Button from "react-bootstrap/Button";
import EditTeamModal from "../components/editTeamModal";
import { useState } from "react";
import EditDelBtn from "../components/editDelBtn";
import AddCoachModal from "../components/addCoachModal";

export default function Team() {
  tabTitle("Team");
  const [modalShow, setModalShow] = useState(false);
  const [modalCoach, setModalCoach] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  return (
    <>
      <div className="pt-0 pt-md-5 pb-0 pb-md-5 teamBg">
        <Container>
          <Row>
            <Col md={12} className="position-relative pt-0 pt-md-3 pb-3">
              <div className="forms pt-0 pt-md-3 pb-3">
                <h1 className="py-5">Riverside Hawks</h1>
                <div className="team-edit">
                  {" "}
                  <span>
                    {" "}
                    {isEditable && (
                      <Button
                        className="team-edit-text"
                        onClick={() => setModalShow(true)}
                      >
                        <img src={EditIcon} alt="" /> edit team name and banner
                      </Button>
                    )}
                    <EditTeamModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="p-0 m-0">
        <Container className="p-0 team-container">
          <Row md={12} className="p-0 m-0">
            {/* Side Bar  */}
            {!isEditable ? (
              <Col md={4} className="p-0 m-0">
                <div className="left-side team-contact">
                  {/* four spacing */}
                  <div className="main-address contact">
                    <div className="adress-container left-container">
                      <span className="icon-width">
                        <img
                          src={LocationIcon}
                          className="location-icon"
                          alt="Location_icon"
                        />
                      </span>
                      <span className="left-text">
                        123 Street NameCity, ST 01234
                      </span>
                    </div>
                    <div className="email-container left-container">
                      <span className="icon-width">
                        <img
                          src={EmailIcon}
                          className="location-icon"
                          alt="Location_icon"
                        />
                      </span>
                      <span>
                        <Link
                          // eslint-disable-next-line no-script-url
                          to="#"
                          onClick={() =>
                            (window.location = "mailto:email@address.com")
                          }
                        >
                          {" "}
                          email@address.com{" "}
                        </Link>
                      </span>
                    </div>
                    <div className="adress-container left-container">
                      <span className="icon-width">
                        <img
                          src={PhoneIcon}
                          className="location-icon"
                          alt="Location_icon"
                        />
                      </span>
                      <span className="left-text">(555) 555-555</span>
                    </div>
                    <div className="adress-container left-container">
                      <span className="icon-width">
                        <img
                          src={RateIcon}
                          className="location-icon"
                          alt="Location_icon"
                        />
                      </span>
                      <div className="socials">
                        <span className="left-text">
                          <a
                            href="http://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Facebook
                          </a>
                        </span>
                        <span className="left-text">
                          <a
                            href="http://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Instagram
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="adress-container left-container">
                      <span className="icon-width">
                        <img
                          src={LinkIcon}
                          className="location-icon"
                          alt="Location_icon"
                        />
                      </span>
                      <span className="left-text">
                        <a
                          href="http://www.websiteaddress.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          websiteaddress.com
                        </a>
                      </span>
                    </div>
                    <div className="adress-container left-container">
                      <span className="icon-width">
                        <img
                          src={ClockIcon}
                          className="location-icon"
                          alt="Location_icon"
                        />
                      </span>
                      <span className="left-text">
                        Monday - Friday , 5-10pm
                      </span>
                    </div>
                  </div>
                  <div className="button-section">
                    {!isEditable && (
                      <button
                        className="btn edit-profile-btn"
                        onClick={() => setIsEditable(true)}
                      >
                        <img src={EditIconBlack} alt="" /> EDIT PROFILE
                      </button>
                    )}
                  </div>
                </div>
              </Col>
            ) : (
              <Col md={4} className="p-0 m-0">
                <div className="left-side team-contact">
                  {/* four spacing */}
                  <div className="main-address contact">
                    <div className="adress-container left-container">
                      <span className="icon-width">
                        <img
                          src={LocationIcon}
                          className="location-icon"
                          alt="Location_icon"
                        />
                      </span>
                      <textarea className="left-text input-style">
                        23888 Street Name City, ST 01234
                      </textarea>
                    </div>
                    <div className="email-container left-container">
                      <span className="icon-width">
                        <img
                          src={EmailIcon}
                          className="location-icon"
                          alt="Location_icon"
                        />
                      </span>
                      <span>
                        {" "}
                        <input
                          type="email"
                          className="left-text input-style"
                          value="email@address.com"
                        />{" "}
                      </span>
                    </div>
                    <div className="adress-container left-container">
                      <span className="icon-width">
                        <img
                          src={PhoneIcon}
                          className="location-icon"
                          alt="Location_icon"
                        />
                      </span>
                      <input
                        type="text"
                        className="left-text input-style"
                        value="(555) 555-555"
                      />
                    </div>
                    <div className="adress-container left-container">
                      <span className="icon-width">
                        <img
                          src={RateIcon}
                          className="location-icon"
                          alt="Location_icon"
                        />
                      </span>
                      <div className="socials">
                        <textarea className="left-text input-style">
                          facebook.com/url Instagram.com/url
                        </textarea>
                      </div>
                    </div>
                    <div className="adress-container left-container">
                      <span className="icon-width">
                        <img
                          src={LinkIcon}
                          className="location-icon"
                          alt="Location_icon"
                        />
                      </span>
                      <input
                        className="left-text input-style"
                        value="websiteaddress.com"
                      />
                    </div>
                    <div className="adress-container left-container">
                      <span className="icon-width">
                        <img
                          src={ClockIcon}
                          className="location-icon"
                          alt="Location_icon"
                        />
                      </span>
                      <input
                        className="left-text input-style"
                        value="Monday - Friday , 5-10pm"
                      />
                    </div>
                  </div>
                  <div className="button-section">
                    {!isEditable ? (
                      <button
                        className="btn edit-profile-btn"
                        onClick={() => setIsEditable(true)}
                      >
                        <img src={EditIconBlack} alt="" /> EDIT PROFILE
                      </button>
                    ) : (
                      <div className="afterEditBtn">
                        <button
                          className="btn save-btn"
                          onClick={() => setIsEditable(false)}
                        >
                          SAVE CHANGES
                        </button>
                        <button
                          className="btn cancel-btn"
                          onClick={() => setIsEditable(false)}
                        >
                          CANCEL
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            )}

            {/* Main Container  */}
            {!isEditable ? (
              <Col md={8} className="p-0 m-0">
                <div className="main-content-container right-container">
                  <p className="main-para right-para">
                    Founded in 1776, Lorem ipsum dolor sit amet consectetur.
                    Rutrum blandit tortor proin arcu nunc cursus ut nulla. Eu
                    nec platea elit ut feugiat. Morbi sit tincidunt massa
                    tempor. Pharetra mauris vel accumsan fusce.
                  </p>
                  <div className="team-info-container">
                    <Container>
                      <Row>
                        <Col md={12}>
                          <Row className="team-stats">
                            <Col md={3}>
                              <div className="team-point">
                                <span>Difficulty:</span>
                              </div>
                            </Col>
                            <Col md={9}>
                              <div className="team-point-info">
                                <ul className="diff-list">
                                  <div className="diff-tooltip">
                                    <span className="elite">ELITE</span>
                                  </div>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                </ul>
                              </div>
                            </Col>
                            <div className="inline gender">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>gENDER:</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info">
                                  <span className="info-text"> Boys</span>
                                </div>
                              </Col>
                            </div>
                            <div className="inline age">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>Age range:</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info">
                                  <span className="info-text"> 5 - 12</span>
                                </div>
                              </Col>
                            </div>
                            <Col md={3}>
                              <div className="team-point">
                                <span>team Type:</span>
                              </div>
                            </Col>
                            <Col md={9}>
                              <div className="team-point-info">
                                <ul className="diff-list type-list">
                                  <div className="diff-tooltip type-tooltip">
                                    <span className="elite AAU-travel">
                                      AAU TRAVEL TEAM
                                    </span>
                                  </div>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                </ul>
                              </div>
                            </Col>
                            <div className="inline league">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>League:</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info">
                                  <span className="info-text">Nike</span>
                                </div>
                              </Col>
                            </div>
                            <div className="inline basket">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>Basketball only?</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info">
                                  <span className="info-text">Yes</span>
                                </div>
                              </Col>
                            </div>
                            <div className="inline try">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>Tryouts:</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info info-gap">
                                  <span className="info-text bold">
                                    12/21/23, 8 - 10pm
                                  </span>
                                  <span className="info-text">
                                    123 Street Name, City, ST 01234
                                  </span>
                                </div>
                              </Col>
                            </div>
                            <div className="inline gym">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>Gym Space:</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info">
                                  <span className="info-text">School Name</span>
                                </div>
                              </Col>
                            </div>
                            <div className="inline team">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>Team cost:</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info">
                                  <span className="info-text">$200/mo</span>
                                </div>
                              </Col>
                            </div>
                            <Col md={3}>
                              <div className="team-point">
                                <span>Coaches:</span>
                              </div>
                            </Col>
                            <Col md={9}>
                              <div className="team-point-info coaches-container">
                                <div className="team-coaches">
                                  <div className="coach-img">
                                    <img src={NickImg} alt="" />
                                  </div>
                                  <div className="coach-info">
                                    <div className="coach-name">
                                      <span className="bold"> Nick Doe</span>
                                    </div>
                                    <div className="coach-address">
                                      <span className="email-text">
                                        {" "}
                                        Cost of training: $75/hr
                                        <Link
                                          className="coach-id"
                                          // eslint-disable-next-line no-script-url
                                          to="#"
                                          onClick={() =>
                                            (window.location =
                                              "mailto:email@address.com")
                                          }
                                        >
                                          {" "}
                                          email@address.com{" "}
                                        </Link>
                                      </span>
                                    </div>
                                    <div className="coach-social">
                                      <span className="orange bold">
                                        {" "}
                                        @coach.nick
                                      </span>
                                    </div>
                                    <div className="coach-btns"></div>
                                  </div>
                                </div>
                                <div className="team-coaches">
                                  <div className="coach-img">
                                    <img src={JaneImg} alt="" />
                                  </div>
                                  <div className="coach-info">
                                    <div className="coach-name">
                                      <span className="bold"> Jane Doe</span>
                                    </div>
                                    <div className="coach-address">
                                      <span className="email-text">
                                        {" "}
                                        Cost of training: $75/hr
                                        <Link
                                          className="coach-id"
                                          // eslint-disable-next-line no-script-url
                                          to="#"
                                          onClick={() =>
                                            (window.location =
                                              "mailto:email@address.com")
                                          }
                                        >
                                          {" "}
                                          email@address.com{" "}
                                        </Link>
                                      </span>
                                    </div>
                                    <div className="coach-social">
                                      <span className="orange bold">
                                        {" "}
                                        @coach.jane
                                      </span>
                                      <div className="coach-btns"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col md={3}>
                              <div className="team-point"></div>
                            </Col>
                            <Col md={9}></Col>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </Col>
            ) : (
              <Col md={8} className="p-0 m-0">
                <div className="main-content-container right-container">
                  <p className="main-para right-para">
                    <textarea name="" id="" cols="30" rows="10">
                      Founded in 1776, Lorem ipsum dolor sit amet consectetur.
                      Rutrum blandit tortor proin arcu nunc cursus ut nulla. Eu
                      nec platea elit ut feugiat. Morbi sit tincidunt massa
                      tempor. Pharetra mauris vel accumsan fusce.
                    </textarea>
                  </p>
                  <div className="team-info-container editable-container">
                    <Container>
                      <Row>
                        <Col md={12}>
                          <Row className="team-stats">
                            <div className="inline-res">
                              <Col md={3}>
                                <div className="team-point">
                                  <span className="headWidth">Difficulty:</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info">
                                  <select
                                    className="choose-difficulty"
                                    name="dificulty"
                                    id="dificulty"
                                  >
                                    <option value="1 - Elite">1 - Elite</option>
                                    <option value="2 - Elite">2 - Elite</option>
                                    <option value="3 - Elite">3 - Elite</option>
                                    <option value="4 - Elite">4 - Elite</option>
                                    <option value="5 - Elite">5 - Elite</option>
                                    <option value="6 - Elite">6 - Elite</option>
                                    <option value="7 - Elite">7 - Elite</option>
                                  </select>
                                </div>
                              </Col>
                            </div>
                            <div className="inline gender">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>gENDER:</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info">
                                  <select
                                    className="choose-difficulty "
                                    name="gender"
                                    id="gender"
                                  >
                                    <option value="Girls">Girls</option>
                                    <option value="Boys">Boys</option>
                                  </select>
                                </div>
                              </Col>
                            </div>
                            <div className="inline age">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>Age range:</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info">
                                  <input
                                    className="info-text choose-difficulty"
                                    value="5 - 12"
                                  />
                                </div>
                              </Col>
                            </div>
                            <div className="inline-res">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>team Type:</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info">
                                  <select
                                    className="choose-difficulty"
                                    name="teamType"
                                    id="teamType"
                                  >
                                    <option value="AAU Travel Team">
                                      AAU Travel Team
                                    </option>
                                    <option value="XYZ Team">XYZ Team</option>
                                  </select>
                                </div>
                              </Col>
                            </div>
                            <div className="inline league">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>League:</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info">
                                  <input
                                    className="info-text choose-difficulty"
                                    value="Nike"
                                  />
                                </div>
                              </Col>
                            </div>
                            <div className="inline basket">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>Basketball only?</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info">
                                  <select
                                    className="choose-difficulty"
                                    name="GameType"
                                    id="GameType"
                                  >
                                    <option value="Yes">Yes</option>
                                    <option value="NO">No</option>
                                  </select>
                                </div>
                              </Col>
                            </div>
                            <div className="inline try">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>Tryouts:</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info info-gap">
                                  <textarea
                                    name=""
                                    id=""
                                    className="info-text"
                                  >
                                    12/21/23, 8 - 10pm 123 Street Name, City, ST
                                    01234
                                  </textarea>
                                </div>
                              </Col>
                            </div>
                            <div className="inline gym">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>Gym Space:</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info">
                                  <input
                                    className="info-text choose-difficulty"
                                    value="School Name"
                                  />
                                </div>
                              </Col>
                            </div>
                            <div className="inline team">
                              <Col md={3}>
                                <div className="team-point">
                                  <span>Team cost:</span>
                                </div>
                              </Col>
                              <Col md={9}>
                                <div className="team-point-info">
                                  <input
                                    className="info-text choose-difficulty"
                                    value="$200/mo"
                                  />
                                </div>
                              </Col>
                            </div>
                            <Col md={3}>
                              <div className="team-point">
                                <span>Coaches:</span>
                              </div>
                            </Col>
                            <Col md={9}>
                              <div className="team-point-info coaches-container">
                                <div className="team-coaches">
                                  <div className="coach-img">
                                    <img src={NickImg} alt="" />
                                  </div>
                                  <div className="coach-info">
                                    <div className="coach-name">
                                      <span className="bold"> Nick Doe</span>
                                    </div>
                                    <div className="coach-address">
                                      <span className="email-text">
                                        {" "}
                                        Cost of training: $75/hr
                                        <Link
                                          className="coach-id"
                                          // eslint-disable-next-line no-script-url
                                          to="#"
                                          onClick={() =>
                                            (window.location =
                                              "mailto:email@address.com")
                                          }
                                        >
                                          {" "}
                                          email@address.com{" "}
                                        </Link>
                                      </span>
                                    </div>
                                    <div className="coach-social">
                                      <span className="orange bold">
                                        {" "}
                                        @coach.nick
                                      </span>
                                    </div>
                                    <div className="coach-btns">
                                      <EditDelBtn />
                                    </div>
                                  </div>
                                </div>
                                <div className="team-coaches">
                                  <div className="coach-img">
                                    <img src={JaneImg} alt="" />
                                  </div>
                                  <div className="coach-info">
                                    <div className="coach-name">
                                      <span className="bold"> Jane Doe</span>
                                    </div>
                                    <div className="coach-address">
                                      <span className="email-text">
                                        {" "}
                                        Cost of training: $75/hr
                                        <Link
                                          className="coach-id"
                                          // eslint-disable-next-line no-script-url
                                          to="#"
                                          onClick={() =>
                                            (window.location =
                                              "mailto:email@address.com")
                                          }
                                        >
                                          {" "}
                                          email@address.com{" "}
                                        </Link>
                                      </span>
                                    </div>
                                    <div className="coach-social">
                                      <span className="orange bold">
                                        {" "}
                                        @coach.jane
                                      </span>
                                      <div className="coach-btns">
                                        <EditDelBtn />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col md={3}>
                              <div className="team-point"></div>
                            </Col>
                            <Col md={9}>
                              <div className="add-coach">
                                <Button
                                  className="team-edit-text add-coach-btn"
                                  onClick={() => setModalCoach(true)}
                                >
                                  <div className="add-coach-icon">
                                    <svg
                                      width="67"
                                      height="67"
                                      viewBox="0 0 67 67"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <circle
                                        cx="33.5"
                                        cy="33.5"
                                        r="33"
                                        fill="#FBFBFB"
                                        stroke="#D9D9D6"
                                      />
                                      <path
                                        opacity="0.5"
                                        d="M46.4532 35.8865H36.1416V46.4534H30.7306V35.8865H20.4189V30.9859H30.7306V20.4191H36.1416V30.9859H46.4532V35.8865Z"
                                        fill="#231F20"
                                      />
                                    </svg>
                                  </div>
                                  <div className="add-coach-text">
                                    <span>add a coach</span>
                                  </div>
                                </Button>
                                <AddCoachModal
                                  show={modalCoach}
                                  onHide={() => setModalCoach(false)}
                                />
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>
      {/* <EditTeamModal /> */}
    </>
  );
}
