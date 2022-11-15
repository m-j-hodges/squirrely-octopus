import React from 'react'
import {Document, Page} from "react-pdf/dist/esm/entry.webpack5"
import myCert from '../files/Matt_Hodges.pdf'
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
    <Helmet>
      <style>{'body { background-color: #E5E5E5; }'}</style>
    </Helmet>
      <Header /> 
  <h3> My Certifications </h3>
  <Document 
    className="border border-secondary doc-border" file={myCert} onLoadSuccess={onDocumentLoadSuccess} >
      <Page pageNumber={pageNumber}></Page>
    </Document>
    <Footer />
  </div>
  
)

}


export default Certs;