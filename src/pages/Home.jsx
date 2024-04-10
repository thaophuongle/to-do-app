import React from "react";

const Home = () => {
  const currentDate = new Date().toDateString();

  return (
    <div>
      <div className="text-center">
      <h3>
        Hello <b>Thao</b>
      </h3>
      <h4>You are going well! Keep trying!</h4>
      <p>{currentDate}</p>
      </div>
      <div className="d-flex">
        <div className="d-flex">
          <h2>0</h2>
          <p>Created Task</p>
        </div>
        <div className="d-flex">
          <h2>0</h2>
          <p>Completed Task</p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="d-flex">
            <i className="fa-solid fa-code"></i>
            <div>
              <a href="#">Coding</a>
              <p>10 Tasks</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="d-flex">
          <i className="fa-solid fa-magnifying-glass"></i>
            <div>
              <a href="#">Job Hunting</a>
              <p>10 Tasks</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="d-flex">
          <i className="fa-solid fa-chalkboard"></i>
            <div>
              <a href="#">Learning</a>
              <p>10 Tasks</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="d-flex">
          <i className="fa-solid fa-book"></i>
            <div>
              <a href="#">Reading</a>
              <p>10 Tasks</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="d-flex">
          <i className="fa-solid fa-thumbtack"></i>
            <div>
              <a href="#">Others</a>
              <p>10 Tasks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
