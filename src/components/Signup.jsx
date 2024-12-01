import React from 'react';

const SignUp = () => {
  const handleSignupRedirect = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScuYkqLrOfMcV2IWhtO9dOxEOzN4Jn6GomWyp-mWh1KyVGdUg/viewform"; // Replace with your Google Form link
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <p>Please click the button below to complete the sign-up process.</p>
      <button onClick={handleSignupRedirect} className="signup-button">
        Go to Google Form
      </button>
    </div>
  );
};

export default SignUp;
