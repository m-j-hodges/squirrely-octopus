import React, { useState } from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import Header from "./NavTabs";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { Helmet } from "react-helmet-async";
import Footer from "./footer";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePageNumber() {
    if (pageNumber == 1) {
      setPageNumber(2);
    } else {
      setPageNumber(1);
    }
  }

  return (
    <div>
      <Header />
      <Helmet>
        <style>{"body { background-color: #081A28; }"}</style>
      </Helmet>
      <h4 className="p-5 text-center"> Matthew Hodges' Resume</h4>

      <div className="row">
        <div className="col-3"> </div>
        <div className="col-6">
          <a className="btn btn-primary" download="My_file.pdf">
            {" "}
            Download file{" "}
          </a>
          <Document
            className="border border-secondary doc-border w-80"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            {" "}
            Page number: {pageNumber} of {numPages}
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={changePageNumber}
          >
            {" "}
            Next Page
          </button>
        </div>
        <div className="col-3"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
