import React, { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import { BrowserMultiFormatReader } from "@zxing/library";
import "./ScanBarcodePage.css";

const ScanBarcodePage: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [barcode, setBarcode] = useState<string | null>(null);
  const [scanning, setScanning] = useState(true);

  const videoConstraints = {
    facingMode: "environment",
  };

  const scanBarcode = useCallback(async () => {
    if (!webcamRef.current || !scanning) return;

    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      try {
        const codeReader = new BrowserMultiFormatReader();
        const result = await codeReader.decodeFromImageUrl(imageSrc);
        setBarcode(result.getText());
        setScanning(false); // หยุดการสแกนเมื่อได้ผลลัพธ์
      } catch (error) {
        // ถ้าอ่านไม่ได้ ให้ลองใหม่ในครั้งถัดไป
      }
    }
  }, [scanning]);

  useEffect(() => {
    const interval = setInterval(scanBarcode, 1000); // สแกนทุกๆ 1 วินาที
    return () => clearInterval(interval);
  }, [scanBarcode]);

  return (
    <div className="scanner-container">
      <div className="scanner-view">
        
        <div className="scanner-box">
        <div className="image1"></div>
          <Webcam
            ref={webcamRef}
            videoConstraints={videoConstraints}
            screenshotFormat="image/jpeg"
            style={{ width: "100%" }}
          />
          <div className="barcode-box" />
          <div className="image">
          
          </div>
        </div>
        {barcode && (
          <div className="barcode-result">
            <p className="barcode-text">barcode : {barcode}</p>
          </div>
        )}
        {!barcode && <p className="barcode-text">Scanning...</p>}
      </div>
    </div>
  );
};

export default ScanBarcodePage;
