import React from "react";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import IconButton from '@mui/material/IconButton';

export default function About(){
    return(
        <div className="abo">
            <div className="card bg-light text-light m-3 border-0">
            <div className="card-header border-0 about"><h1>About Me</h1></div>
  <div className="card-body bg-light text-dark about-intro">
    <p className="card-text text-center m-5">I'm Hritvik Dadhich, a versatile developer and data analyst with a solid foundation in both Computer Science Engineering and Data Science, backed by a Master’s degree. 
        My skill set spans the MERN stack, Python, SQL, data visualization, and Deep Learning. I have a knack for unraveling insights from complex datasets, demonstrated through successful ventures like FutureGaming.io. 
        I thrive on crafting scalable web solutions and am eager to bring my expertise to your team.</p>
  </div>
  <div className="resume">
  <a  href="https://drive.google.com/file/d/1DLH08JYuitGVxcoNHP5kcrYPos0tXGVA/view?usp=sharing"
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
