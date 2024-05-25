import React from "react";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import IconButton from '@mui/material/IconButton';

export default function About(){
    return(
        <div className="abo">
            <div className="card bg-light text-light m-3 border-0">
            <div className="card-header border-0 about"><h1>About Me</h1></div>
  <div className="card-body bg-light text-dark about-intro">
    <p className="card-text text-center m-5">Hey, I'm Hritvik Dadhich, an aspiring developer with a degree in Computer Science Engineering and I also happen to be a Data Analyst with a Master’s Degree in Data Science. Experienced in MERN, Python,
SQL, data visualization, and Deep Learning, I specialize in analyzing large datasets to find meaningful patterns and I
successfully lead tech venture, FutureGaming.io. I’m skilled at making scalable applications for the web.</p>
  </div>
  <div className="resume">
  <a  href="https://drive.google.com/file/d/1DLH08JYuitGVxcoNHP5kcrYPos0tXGVA/view?usp=sharing"
  target="_blank">
                                <IconButton >
                                    <InsertDriveFileIcon color="secondary"/>
                                    <span style={{color: "Black"}}>Resume</span>
                                </IconButton></a>
  </div>
            </div>
        </div>
    )
}
