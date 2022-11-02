import React, {useState} from 'react';
import axios from 'axios';
import fileDownload from 'js-file-download';
import myPDF from '../files/myResume.pdf'
import Header from "./NavTabs"
import {Document, Page} from "react-pdf/dist/esm/entry.webpack5"



function Resume() {

const [numPages, setNumPages] = useState(null)
const [pageNumber, setPageNumber] = useState(1)

	function onDocumentLoadSuccess({numPages}) {
		setNumPages(numPages)

	}

function changePageNumber() {
	if(pageNumber ==1 ) {
		setPageNumber(2)
	} else {setPageNumber(1)}
}

// const handleDownload = (url, filename) => {
//   axios.get(url, {
//     responseType: 'blob',
//   })
//   .then((res) => {
//     fileDownload(res.data,filename)
//   })

// }

return (
<div>
	<Header/>
  <h4 className="p-5 text-center"> Matthew Hodges' Resume</h4>

<div className="row">
<div className="col-3"> </div>
<div className="col-6">
<a className="btn btn-primary" href={myPDF} download="My_file.pdf"> Download file </a>
<Document className="border border-secondary doc-border" file={myPDF} onLoadSuccess={onDocumentLoadSuccess}>
	<Page pageNumber={pageNumber} />
</Document>
<p> Page number: {pageNumber} of {numPages}</p>
<button type="button" className="btn btn-primary" onClick={changePageNumber}> Next Page</button>
</div> 
<div className="col-3"></div>
</div>

</div>
)
}


export default Resume;