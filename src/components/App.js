import React from "react";
import "../styles/App.css";
const App = () => {
  return (
    <div id="main">
      <div className="container">

        <div className="community">
            <h2 className="community-header">Join our community</h2>
            <p className="days">30-day, hassle-free monkey back gaurantee</p>
            <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any
                developers who are serious about honing their skills</p>
        </div>

        <div className="card-details">
            <div className="card">
                <p className="card-header">Monthly Subscription</p>
                <p><span id="doller">$29</span> Per Month</p>
                <p>Full access for less than $1 a day.</p>
                <button id="btn">Sign Up</button>
            </div>

            <div className="why-us">
                <h4 className="why-us-header">Why Us</h4>
                <p>Tutorial by industry experts</p>
                <p>Peer & expert code review </p>
                <p>Coding exercises</p>
                <p>Access you our Github repos</p>
                <p>Community forum</p>
                <p>Flashcard decks</p>
            </div>
        </div>


      </div>
    </div>
  );
};

export default App;
