import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
              <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    
                    <div class="col item social"><Link href="#"><i class="fab fa-facebook"></i></Link><Link href="#"><i class="fab fa-instagram"></i></Link><Link href="#"><i class="fab fa-linkedin"></i></Link><Link href="#"><i class="fas fa-laptop-house"></i></Link></div>
                </div>
                <p class="copyright">Created By Ashish Mishra © 2021</p>
            </div>
        </footer>
    </div>
        </>
    )
}

export default Footer
