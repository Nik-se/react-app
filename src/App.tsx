import { useState, ChangeEvent, useEffect } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import State from "./components/StatesAndCities";
import { SubmitAnswers } from "./services/AnswerService";
import { Answer } from "./services/AnswerService";
import Card from "./components/Card";
import { Authenticate } from "./services/AuthenticateService";
import { SignUp } from "./services/RegisterService";
import axios from "axios";

function App() {
  const [stateData, setStateData] = useState(() => {
    const savedState = sessionStorage.getItem("stateData");
    return savedState ? JSON.parse(savedState) : [];
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [started, setStarted] = useState(false); // State to track if the "Start" button is clicked
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [authenticated, setAuthenticated] = useState(() => {
    const storedAuthStatus = sessionStorage.getItem("authenticated");
    return storedAuthStatus ? JSON.parse(storedAuthStatus) : false;
  });
  const [token, setToken] = useState<string>(() => {
    const storedToken = sessionStorage.getItem("token");
    return storedToken ? JSON.parse(storedToken) : "";
  });
  const [createNewAcc, setCreateNewAccd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddres, setEmAdd] = useState("");
  const [userName, setUserName] = useState("");
  const [passw, setPassw] = useState("");
  const [confPassw, setConfPassw] = useState("");

  axios.interceptors.request.use((config) => {
    config.headers.authorization = token;
    return config;
  });

  // Update sessionStorage whenever stateData changes
  useEffect(() => {
    sessionStorage.setItem("authenticated", JSON.stringify(authenticated));
    sessionStorage.setItem("token", JSON.stringify(token));
  }, [authenticated, token]);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRegister = async () => {
    setCreateNewAccd(true);
  };

  const handleFNChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLNChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEAChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmAdd(event.target.value);
  };

  const handleUNChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handlePWDChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassw(event.target.value);
  };

  const handleCPWDChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfPassw(event.target.value);
  };

  const handleSignUp = async () => {
    try {
      const response = await SignUp({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: emailAddres,
        password: passw,
        confirmPassword: confPassw,
      });
      const firstN = response.data.firdtName;
      setCreateNewAccd(firstN === null);
    } catch (error) {
      console.error("Error fetching state data:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await Authenticate({
        emailOrUserName: email,
        password: password,
      });
      let isAuthenticated = false;
      const bTok = "Bearer " + response.data.access_token;
      if (bTok != null) {
        setToken(bTok);
        isAuthenticated = true;
      }
      setAuthenticated(isAuthenticated);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error fetching state data:", error);
    }
  };

  const handleToLogin = async () => {
    try {
      setCreateNewAccd(false);
    } catch (error) {
      console.error("Error fetching state data:", error);
    }
  };

  if (!authenticated && !createNewAcc) {
    return (
      <form>
        <div
          className="container"
          style={{ maxWidth: "400px", margin: "250px auto 0 auto" }}
        >
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
            />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
            />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>
          <div className="container text-center">
            <div className="row mb-4">
              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <Button onClick={handleLogin} label="Login" />
          </div>
          <div className="text-center" style={{ margin: "10px auto 0 auto" }}>
            <Button onClick={handleRegister} label="Sign Up" />
          </div>
        </div>
      </form>
    );
  } else if (!authenticated && createNewAcc) {
    return (
      <section className="" style={{ margin: "80px auto 0 600px" }}>
        <div className="px-4 py-5 px-md-5 text-center text-lg-start">
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1"
                              className="form-control"
                              value={firstName}
                              onChange={handleFNChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1"
                            >
                              First name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example2"
                              className="form-control"
                              value={lastName}
                              onChange={handleLNChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example2"
                            >
                              Last name
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control"
                          value={emailAddres}
                          onChange={handleEAChange}
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3b"
                          className="form-control"
                          value={userName}
                          onChange={handleUNChange}
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          User name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          value={passw}
                          onChange={handlePWDChange}
                        />
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4b"
                          className="form-control"
                          value={confPassw}
                          onChange={handleCPWDChange}
                        />
                        <label className="form-label" htmlFor="form3Example4">
                          Confirm Password
                        </label>
                      </div>
                      <Button onClick={handleSignUp} label="Sign Up" />
                      <div>
                        <Button onClick={handleToLogin} label="Back" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const handleStart = async () => {
    try {
      const data = await State(); // Fetch state data
      setStateData(data); // Set state data
      setStarted(true); // Set started to true after clicking "Start"
      setSubmitted(false);
    } catch (error) {
      console.error("Error fetching state data:", error);
    }
  };

  const handleLogout = async () => {
    try {
      setAuthenticated(false);
    } catch (error) {
      console.error("Error fetching state data:", error);
    }
  };

  // Conditionally render the section only if started is true
  if (!started || submitted) {
    return (
      <>
        <div>
          <h1 className="text-center text-bg-primary p-3">
            USA STATES CAPITALS
          </h1>
        </div>
        <div className="d-flex justify-content-center p-3">
          <div>
            <Card />
          </div>
        </div>
        {submitted && (
          <div className="text-center">
            <strong>Your Score : {score}/100</strong>
          </div>
        )}
        <div className="text-center">
          <Button onClick={handleStart} label="Start" />
        </div>
        <div className="text-center">
          <Button onClick={handleLogout} label="Logout" />
        </div>
      </>
    );
  }

  if (!stateData.length) {
    // Render loading state while fetching data
    return <div>Loading...</div>;
  }

  const { stateName, cityName1, cityName2, cityName3, cityName4, cityName5 } =
    stateData[currentQuestionIndex];
  const items = [cityName1, cityName2, cityName3, cityName4, cityName5];

  const handleSelectItem = (item: string) => {
    const updatedAnswers = [...answers]; // Copying the answers array
    updatedAnswers[currentQuestionIndex] = {
      stateName: stateName,
      capitolCity: item,
    };
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < stateData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await SubmitAnswers(answers);
      const points = response.data.points;
      setScore(points);
      setSubmitted(true);
      console.log("Answers submitted successfully!");
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center text-bg-primary p-3">USA STATES CAPITALS</h1>
      </div>
      <div>
        <h4 className="text-center">What is the capital city of</h4>
      </div>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <ListGroup
            items={items}
            heading={stateName}
            onSelectItem={handleSelectItem}
          />
          <div className="text-center ml-2">
            <Button onClick={handlePreviousQuestion} label="Previous" />
            <Button onClick={handleNextQuestion} label="Next" />
          </div>
          <div>
            <Button onClick={handleSubmit} label="Submit" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
