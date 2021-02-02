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
        color: "white",
        fontWeight: "bold"
    };

    return(
        <footer style={style}>
            <div>Shoe factory</div>
            <a href="/"><img src="https://img.icons8.com/bubbles/50/000000/github.png"/></a>
            <a href="/"><img src="https://img.icons8.com/bubbles/50/000000/linkedin.png"/></a>
            <a href="/"><img src="https://img.icons8.com/bubbles/50/000000/gmail.png"/></a>
            <div className="copyright">Copyright &copy; 2021 Shoe Factory</div>
        </footer>
    );
}

export default Footer;