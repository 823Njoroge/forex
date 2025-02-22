import { Link } from "react-router-dom";
import booksImg from "./assets/books2.jpg";
import pipImg from "./assets/pip.jpg";
import chartImg from "./assets/chart.jpg";
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react';    



function Home() {

    const navigate = useNavigate();
    useEffect(() => {
        
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Please login first!");
          navigate("/login");
        }
      }, [navigate]);

    

  return (
    <div> 
      <header>
        <h1 className="title">Welcome to Forex E-Learning Hub</h1>
        <h3 className="title">Your financial freedom starts here!</h3>
      </header>

      <p style={{ textAlign: "center", margin: "20px 0", color: "#333" }}>
        Scroll to view various services of this site
      </p>

      <div className="card-container">
        <div className="card">
          <img src={booksImg} alt="Forex E-books Collection" />
          <div className="card-content">
            <h3>MyFx E-books</h3>
            <p>Access forex learning books here</p>
            <button className='btn' onClick={() => navigate('/signup')}>Read</button>
          </div>
        </div>

        <div className="card">
          <img src={pipImg} alt="Forex Pip & Risk Calculator" />
          <div className="card-content">
            <h3>MyFx Calculator</h3>
            <p>Includes Pip calculator and Risk:Reward calculator</p>
            <button className='btn' onClick={() => navigate('/signup')}>Calculate</button>
          </div>
        </div>

        <div className="card">
          <img src={chartImg} alt="Forex Chart Analysis Tutorials" />
          <div className="card-content">
            <h3>MyFx Tutorials</h3>
            <p>Watch chart analysis from top traders</p>
            <button className='btn' onClick={() => navigate('/signup')}>Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
