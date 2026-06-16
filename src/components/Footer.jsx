import React from "react";
import styles from "./Footer.module.css";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.section}>
                    <h2 className="text-gradient fw-bold">Tripease</h2>
                    <p>
                        Discover amazing destinations and book your dream trips easily.
                        Travel the world with comfort and joy.
                    </p>
                </div>


                <div className={styles.section}>
                    <h3>Contact</h3>
                    <p>📍 India</p>
                    <p>📞 +91 9989370227</p>
                    <p>✉ tripeaseforyou@gmail.com</p>
                </div>

                <div className={styles.section}>
                    <h3>Emergency Contact</h3>
                    <p>Tourist helpline: 1363</p>
                    <p>Police: 100</p>
                    <p>Fire: 101</p>
                    <p>Rail Security: 1322</p>
                </div>

            </div>

            <div className={styles.bottom}>
                <p>© {new Date().getFullYear()} Tripease. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
