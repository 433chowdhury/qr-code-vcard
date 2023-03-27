import { useState } from "react";

import { QRCode } from "react-qrcode-logo";

const InputGroup = ({ fieldName, value, onChange }) => {
  return (
    <div className="flex flex-col mb-5 w-[50%]">
      <label>{fieldName}</label>
      <input value={value} onChange={onChange} className="border w-full" />
    </div>
  );
};

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [web, setWeb] = useState("");

  const [qrContent, setQrContent] = useState("");

  const handleDownload = () => {
    const root = document.getElementById("root");

    const qrCode = document.getElementById("react-qrcode-logo");
    const file = qrCode
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadButton = document.createElement("a");
    downloadButton.setAttribute("href", file);
    downloadButton.setAttribute("download", `QRCode: ${name}`);
    root.appendChild(downloadButton);
    downloadButton.click();
    root.removeChild(downloadButton);
  };

  return (
    <div className="h-[100vh] w-[100vw] flex flex-row">
      <div className="flex flex-col flex-1 justify-center items-center p-10">
        <InputGroup
          fieldName="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <InputGroup
          fieldName="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <InputGroup
          fieldName="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <InputGroup
          fieldName="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputGroup
          fieldName="position"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <InputGroup
          fieldName="web"
          value={web}
          onChange={(e) => {
            setWeb(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setQrContent(
              `BEGIN:VCARD"\r\nFN:${name}\r\nADR:${address}\r\nTEL:${phone}\r\nEMAIL:${email}\r\nROLE:${position}\r\nURL:${web}\r\n"END:VCARD`
            );
          }}
          className="border rounded-lg bg-cyan-500/50 px-5 py-2"
        >
          Generate
        </button>
      </div>
      <div className="flex flex-col gap-8 flex-1 justify-center items-center  p-10">
        <QRCode value={qrContent} quietZone={20} eyeRadius={30} size={400} />
        <button
          onClick={handleDownload}
          className="border rounded-lg bg-green-500/50 px-5 py-2"
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default App;
