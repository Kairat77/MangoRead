import React from 'react';
import style from './css/footer.module.css'
import {Box, Container, Typography, Link} from "@mui/material";
import {ReactComponent as Logo} from "../../foto/Logo.svg";
import {ReactComponent as FaceBook} from "../../foto/fais.svg";
import {ReactComponent as Instagram} from "../../foto/inst.svg";
import {ReactComponent as Twitter} from "../../foto/twit.svg";
import {NavLink} from "react-router-dom";

const Footer = () => {

    const top = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className={style.footer} component='footer'>
            <Container className={style.container}>
                <div className={style.contentTop}>
                    <div className={style.footerLogo}>
                        <NavLink onClick={top} to={'/'}>
                            <Logo/>
                            <div className={style.logoText}>
                                <Typography variant='h2'>MangoRead</Typography>
                                <Typography>Читай мангу с нами</Typography>
                            </div>
                        </NavLink>
                    </div>
                    <div className={style.links}>
                        <Link href='#'><FaceBook/> Link One</Link>
                        <Link href='#'><Instagram/> Link Two</Link>
                        <Link href='#'><Twitter/> Link Three</Link>
                    </div>
                    <div className={style.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7040226449967!2d74.61615491531977!3d42.879090910157906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb794b532a8f1%3A0xcea5bfa3cae816aa!2sVictory!5e0!3m2!1sru!2skg!4v1679065012985!5m2!1sru!2skg"
                            width="400" height="250" style={{borderRadius: 20, border: 'none', filter: 'drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.15))'}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </Container>
            <div className={style.contentBottom}>
                <div className={style.bottomText}>
                    <Typography component='span'>©2022, All right reserved.</Typography>
                    <div className={style.lins}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                        <Link href="#">Cookies Settings</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;