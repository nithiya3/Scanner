
import React, { useState } from 'react';
import QRScanner from './components/QRScanner';
import './App.css';

const App = () => {
  const [scanResult, setScanResult] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [scannerKey, setScannerKey] = useState(0); // used to re-initialize scanner

  const handleScan = (result) => {
    if (result) {
      setScanResult(result);
      setShowPopup(true);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setScanResult('');
    setScannerKey(prev => prev + 1); // remount QRScanner
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Scan QR Code</h1>
        <p>Align the QR code within the frame</p>
      </div>

      {!showPopup && (
        <div className="scanner-wrapper">
          <div className="overlay">
            <div className="cutout" />
          </div>
          <QRScanner key={scannerKey} onScanSuccess={handleScan} />
        </div>
      )}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Scanned QR Value</h3>
            <p>{scanResult}</p>
            <button onClick={handlePopupClose}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
