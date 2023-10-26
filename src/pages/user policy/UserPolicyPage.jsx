import React, { useState } from "react";
import PdfCard from "../../components/PdfCard";

const UserPolicyPage = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const pdfFiles = [
    "pdf/Acceptable Usage Policy (1).pdf",
    "pdf/Change Management Policy (1).pdf",
    "pdf/Data Breach Notification Procedure (1).pdf",
    "pdf/Data Retention Policy (1).pdf",
    "pdf/Data Security Clause (1).pdf",
    "pdf/Identity & Access Management (1).pdf",
    "pdf/Identity & Access Management (2).pdf",
    "pdf/Incident Management Policy (1).pdf",
    "pdf/Information Security Policy (1).pdf",
    "pdf/IT Asset Disposal Policy (1).pdf",
  ];

  const openPdf = (pdfFile) => {
    setSelectedPdf(pdfFile);
  };

  const closePdf = () => {
    setSelectedPdf(null);
  };

  return (
    <div>
      <div className='text-4xl m-4 p-4 font-semibold w-72'>Policies</div>
      <div className='flex flex-wrap'>
        {pdfFiles.map((pdfFile, index) => (
          <PdfCard key={index} pdfFile={pdfFile} openPdf={openPdf} />
        ))}
      </div>
      {selectedPdf && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-10'>
          <div
            className='bg-white p-6 rounded shadow-lg relative'
            style={{ width: "80%", height: "80%" }}
          >
            <iframe
              src={`/public/${selectedPdf}#toolbar=0&navpanes=0`}
              title='PDF Viewer'
              style={{ border: "none", height: "100%" }}
              className='w-full h-96'
            ></iframe>
            <button
              className='absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded'
              onClick={closePdf}
            >
              Close PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPolicyPage;
