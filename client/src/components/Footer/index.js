import React from 'react';

function Footer() {

    const style = {
        backgroundColor: "black",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        opacity: "0.5",
        color: "white"
    };

    return(
        <footer style={style}>
            <div>Sneakerz-Seekerz</div>
            <a href="https://github.com/jcgom3/Project-3-sneakerz-seekerz"><img alt='' src="https://img.icons8.com/bubbles/50/000000/github.png"/></a>
            <a href="linkedin.com"><img alt='' src="https://img.icons8.com/bubbles/50/000000/linkedin.png"/></a>
            <a href="gmail.com"><img alt='' src="https://img.icons8.com/bubbles/50/000000/gmail.png"/></a>
            <div className="copyright">Copyright &copy; 2021 Sneakerz-Sneekerz</div>
        </footer>
    );
}

export default Footer;