import React from "react";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import IconButton from '@mui/material/IconButton';

export default function About(){
    return(
        <div className="abo">
            <div className="card bg-light text-light m-3 border-0">
            <div className="card-header border-0 about"><h1>About Me</h1></div>
  <div className="card-body bg-light text-dark about-intro">
    <p className="card-text text-center m-5">I'm Hritvik Dadhich,Data Analyst with a Master’s in Data Science and a background in Computer Science Engineering, specializing in Python, SQL, data visualization, and deep learning. Proven expertise in analyzing large datasets to derive meaningful patterns and actionable insights. Successfully led FutureGaming.io, 
                                            enhancing user experiences through scalable web applications. Proficient in C++, JavaScript, Solidity, React.js, Next.js, Express.js, Node.js, and MongoDB.Strong analytical skills in machine learning, NLP, statistical analysis, and predictive analytics. Advanced data visualization capabilities with Tableau, Matplotlib,
                                            Seaborn, and Plotly. Demonstrated success in projects like the NBA All-Star Prediction Model and InSight-Loom, a sentiment analysis application. 
                                            Continuously exploring innovative approaches in data analysis, blockchain technology, and secure file-sharing solutions. Seeking opportunities to contribute to data-driven decision-making and strategic initiatives in a dynamic organization.</p>
  </div>
  <div className="resume">
  <a  href="https://drive.google.com/file/d/1wFuVKRsBL8-AHUdvw3lGaRYT0-eJ8R2i/view"
  target="_blank" rel="noreferrer">
                                <IconButton >
                                    <InsertDriveFileIcon color="secondary"/>
                                    <span style={{color: "Black"}}>Resume</span>
                                </IconButton></a>
  </div>
            </div>
        </div>
    )
}
