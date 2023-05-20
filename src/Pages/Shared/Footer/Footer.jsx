import React from 'react';
import logo from '../../../assets/logo.png';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-10 lg:px-0 bg-base-200 text-base-content mt-12">
            <div className='footer custom-container grid grid-cols-2 items-center lg:grid-cols-4'>
                <Link to={'/'}>
                    <img src={logo} alt="" />
                    <p>Trov Titans LTD.<br />You Action fig partner</p>
                </Link>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    <div className="flex gap-1">
                        <a className="link link-hover text-2xl"><FaFacebookSquare></FaFacebookSquare></a>
                        <a className="link link-hover text-2xl"><FaLinkedin></FaLinkedin></a>
                        <a className="link link-hover text-2xl"><FaTwitterSquare></FaTwitterSquare></a>
                    </div>
                </div>
            </div>
            <p className='border-t border-base-300 text-center mt-4 pt-4'>Copyright © 2023 - All right reserved by Trov Titans / <b>MD Tajkir Alam Rion</b></p>
        </footer>
    );
};

export default Footer;