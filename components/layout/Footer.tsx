"use client"; // Add this directive at the top of your file

import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import {Form, InputGroup, Button} from 'react-bootstrap';

function Footer(){
    return (
        <footer className="py-5 bg-light ml-auto">
            <div className="container">
                <div className="row">

                    
                </div>
                <hr className="" />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="mb-0 text-muted">© En-Vogue 2024. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
