import React from "react";
import "../styles/App.css";


const App = () => {
  return (
    <div id="main">
      <div class="container">
        <div class="community">
          <h2 class="community-header">Join our community</h2>
          <p class="community-title-meta">30-day, hassle-free monkey back gurarantee</p>
          <p class="community-desciption">Gain access to our full library of tutorials along with experts code reviews. Perfect for any developers who are serious about honing thier skills.
          </p>
        </div>
        <div class="card-details">
          <div class="card">
            <p class="card-header">Monthly Subscription</p>
            <span><strong class="price">$29</strong> per month</span>
            <span>Full access for less than $1 a day.</span>
            <button type="button" class="sign-up-btn">Sign Up</button>
          </div>
          <div class="why-us">
            <h4 class="why-us-header">Why Us</h4>
            <ul>
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access yo our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;