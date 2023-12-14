import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Assignment1 = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/output')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Axios error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <div className="container mt-5">
          
           <h2><u>File : {data.name}</u></h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Mean</th>
            <th>Median</th>
            <th>Mode</th>
            <th>Variance</th>
            <th>Standard Deviation</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.mode).map((attribute) => (
            <tr key={attribute}>
              <td>{attribute}</td>
              <td>{data.mean[attribute]}</td>
              <td>{data.median[attribute]}</td>
              <td>{data.mode[attribute]}</td>
              <td>{data.variance[attribute]}</td>
              <td>{data.std[attribute]}</td>
            </tr>
          ))}
        </tbody>
      </table>


  

     {/* <img src={image2} alt="no_image"> */}

{/* </img> */}
           


        
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  )
}

export default Assignment1