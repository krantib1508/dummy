// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Output from './Components/Assignment1';
// import Nav from './Components/Nav';
import Home from './Components/Home';
// import Assignment2 from './Components/Assignment2';
// import Assignment3 from './Components/Assignment3';
// import Assignment4 from './Components/Assignment4';
// import Assignment5 from './Components/Assignment5';
// import Assignment6 from './Components/Clusters';
// import Assignment7 from './Components/Task1';
// import Assignment8 from './Components/Assign8';
// import DendrogramDisplay from './Components/DendrogramDisplay';
// import Kmeans from './Components/Kmeans';
// import PageRank from './Components/PageRank';
// import HitScores from './Components/HitScores';
// import Crawl from './Components/Crawl';
// import Vkmeans from './Components/Vkmeans';
// import Kmedoids from './Components/Kmedoids';
// import BIRCH from './Components/BIRCH';
// import DBSCAN from './Components/DBSCAN';
// import ClusterValidation from './Components/ClusterValidation';
// import ClusteringForm from './Components/ClusteringForm';

import FileUpload from './Components/FileUpload';
//import Assignment1_ques2 from './Components/Assignment1_ques2';
 

function App() {
  return (
    
        <Router>
        <div className="d-flex flex-row">
      
      <div className="">
      <Routes>
      <Route path="/" exact element={<FileUpload/>} />
      <Route path="/output" exact element={<Output/>} />
      {/* <Route path="/assignment_1" exact element={<Assignment1/>} />
      <Route path="/assignment_1_ques2" exact element={<Assignment1_ques2/>} />
      <Route path="/assignment_2" exact element={<Assignment2/>} />
      <Route path="/assignment_3" exact element={<Assignment3/>} />
      <Route path="/assignment_4" exact element={<Assignment4/>} />
      <Route path="/assignment_5" exact element={<Assignment5/>} />
      <Route path="/assignment_6" exact element={<Assignment6/>} />
      <Route path="/assignment_7" exact element={<Assignment7/>} />
      <Route path="/assignment_8" exact element={<Assignment8/>} />
      <Route exact path="/dendrogram" element={<DendrogramDisplay/>} />
          <Route exact path="/kmeans" element={<Kmeans/>} />
          <Route exact path="/pagerank" element={<PageRank/>} />
          <Route exact path="/hitscore" element={<HitScores/>} />
          <Route exact path="/crawl" element={<Crawl/>} />
          
          <Route exact path="/clusters/vkmeans" element={<Vkmeans/>} />
          <Route exact path="/clusters/kmedoids" element={<Kmedoids/>} />
          <Route exact path="/clusters/birch" element={<BIRCH/>} />
          <Route exact path="/clusters/dbscan" element={<DBSCAN/>} />
          <Route exact path="/clusters/clustervalidation" element={<ClusteringForm/>} />     
             */}

      
      </Routes>
      </div>
      </div>
    </Router>
    

  );
}

export default App;