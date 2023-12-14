import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {

    const [file, setFile] = useState(null);
  const [name, setName] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !name) {
      alert('Please select a file and enter a name.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);

    try {
      const response = await axios.post('http://localhost:8000/api/upload-csv/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle the response here
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      // Handle errors
      console.error('File upload error:', error);
    }
  };


  return (
    <div className="container mt-5">
     
      <form onSubmit={handleSubmit}>
        {/* <div>
          <input type="file" onChange={handleFileChange} accept=".csv" />
        </div> */}

        <div className="mb-3">
          <label for="formFile" className="form-label">Add CSV File</label>
          <input class="form-control" type="file" onChange={handleFileChange} accept=".csv" id="formFile"/>
        </div>
         
        <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">File Name</label>
            <input type="text"value={name} placeholder="Name" className="form-control" onChange={handleNameChange}
                id="exampleFormControlInput1"/>
        </div>

        {/* <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
        </div> */}
        <div>
          <button className="btn btn-info" type="submit">Upload</button>
        </div>
      </form>
      <br/>
      <a href="/output"><i class="fa fa-shopping-cart"></i><span>OUTPUT</span><span class="badge badge-pill badge-danger"></span></a>
    </div>
  )
}

export default FileUpload