import React from "react";


const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-description">
        Your privacy is important to us. This Privacy Policy outlines the types
        of personal information we collect and how we use, store, and protect
        that information.
      </p>

      <div className="privacy-section">
        <h2>Information We Collect</h2>
        <p>
          We collect information that you provide directly to us, such as when
          you create an account, fill out a form, or communicate with us. This
          may include your name, email address, and any other information you
          choose to provide.
        </p>
      </div>

      <div className="privacy-section">
        <h2>How We Use Information</h2>
        <p>
          We use the information we collect to improve our services, communicate
          with you, and ensure the security of our platform. We do not share
          your personal information with third parties without your consent.
        </p>
      </div>

      <div className="privacy-section">
        <h2>Your Choices</h2>
        <p>
          You have the right to access, modify, or delete your personal
          information. If you wish to do so, please contact us at{" "}
          <a href="/contact" className="privacy-link">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Privacy;
