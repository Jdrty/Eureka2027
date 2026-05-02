import React, { useState } from 'react';

const ApplyNowButton = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const handleApplyNowClick = () => {
    setShowPrompt(true);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Response:', response);
    setShowPrompt(false);
  };

  return (
    <div>
      <button onClick={handleApplyNowClick} style={{ fontSize: '20px', padding: '10px 20px' }}>
        Apply Now
      </button>
      {showPrompt && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
          <h2>Application Form</h2>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Why Mycelium is the best hackathon project ever?</label>
            <textarea value={response} onChange={(e) => setResponse(e.target.value)} rows="4" style={{ width: '100%' }}></textarea>
          </div>
          <button onClick={handleSubmit} style={{ marginTop: '10px' }}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default ApplyNowButton;
