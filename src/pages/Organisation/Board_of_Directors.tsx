import { Typography } from '@mui/material'
import React from 'react'

export default function Board_of_Directors() {
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
                BOARD OF DIRECTORS
            </Typography>
            <div className="container mt-4">
                <div className="row gap-5">
                    <div className="col-md-5 col-sm-12 col-xs-12 d-flex gap-3">
                        <img alt='' style={{
                            width: "160px",
                            height: "180px"
                        }} src="/assets/img/neelesh.jpg" className="img-thumbnail img-people" />

                        <span>
                            <strong>Prof.Neelesh Kumar Jain</strong><br />
                            Director (Officiating), Indian Institute of Technology Indore.</span>
                    </div>
                    <div className="col-md-5 col-sm-12 col-xs-12 d-flex gap-3">
                        <img alt='' style={{
                            width: "160px",
                            height: "180px"
                        }} src="/assets/img/anand.jpg" className="img-thumbnail img-people" />

                        <span>
                            <strong>Dr.Anand Iyamperumal Palani</strong><br />
                            Dean R&amp; D, Indian Institute of Technology Indore.</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
