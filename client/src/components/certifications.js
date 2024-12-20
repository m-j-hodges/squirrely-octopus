import React from 'react'
import {Document, Page} from "react-pdf/dist/esm/entry.webpack5"
import Footer from './footer'
import {useState } from 'react'
import {Helmet} from 'react-helmet-async'
import Header from './NavTabs'


function Certs() {

  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({numPages}) {
		setNumPages(numPages)

	}

return (
  <div>
      <Header />
      <Helmet>
        <style>{"body { background-color: black; }"}</style>
      </Helmet> 
  <h3>My Certifications</h3>
  <Document 
    className="border border-secondary doc-border" onLoadSuccess={onDocumentLoadSuccess} >
      <Page pageNumber={pageNumber}></Page>
    </Document>
    <Footer />
  </div>
  
)

}


export default Certs;