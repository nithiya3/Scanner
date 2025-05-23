
import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRScanner = ({ onScanSuccess }) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    scanner.render(
      (decodedText) => {
        onScanSuccess(decodedText);
      },
      (error) => {
        // optional: console.log("Scan error", error);
      }
    );

    return () => {
      scanner.clear().catch(err => console.error("Clear failed", err));
    };
  }, [onScanSuccess]);

  return <div id="reader" />;
};

export default QRScanner;

