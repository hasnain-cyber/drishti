import { Typography } from '@mui/material'
import React from 'react'

export default function Exec_Body() {
    return (
        <div>
            <Typography
                variant="h6"
                textAlign={"center"}
                fontFamily={"Prompt"}
                // fontStyle={"italic"}
                fontWeight={"bold"}
                color={"secondary.dark"}
                marginTop="10px"
            >
                EXECUTIVE BODY
            </Typography>
            <div className="container mt-4">
                <div className="row gap-3">
                    <div className="col-md-5 col-sm-12 col-xs-12 d-flex gap-3">
                        <img alt='' style={{
                            width: "160px",
                            height: "180px"
                        }} src="http://drishticps.iiti.ac.in/files_upload/faculty_images/d1c30d3c1d3aac29023f49effd7dc71c.jpg" className="img-thumbnail img-people" />

                        <span>
                            <strong>Dr. Sunil Dutta</strong><br />
                            Chief Executive Officer, IITI DRISHTI CPS Foundation, Indian Institute of Technology Indore.</span>

                    </div>
                    <i>Dr Sunil Dutta was an active member of the Indian Defence Services for over 21 years in multiple portfolios with multifaceted responsibilities.
                        He is a PhD in Manufacturing from BITS Pilani and MTech in Mechanical Engg from IIT Roorkee. He has several mgt degrees to his credit like PGDSCM, PGDIBO & PGDDM.</i>
                    <i>Recipient of the Chief of Army Staff Commendation Card, Scholar Warrior Award, National Talent Search  Award, Honourable Mention Certificate by Education Expo TV Bangalore, and Swami Von Maharaj Gold Medal. </i>
                </div>
            </div>
        </div>
    )
}
