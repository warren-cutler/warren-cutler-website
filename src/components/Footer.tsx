export const Footer = () => {

    const currentTime = new Date();
    


    return (
        <div className = 'footerBar'>
            <button>Contact Me</button> 
            <h2>Copyright {currentTime.getFullYear()} All Rights Reserved</h2>
            
        </div>

    )

}