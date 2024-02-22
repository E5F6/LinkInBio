function Header(){

    const imagepath = '/assets/profile.jpg';

    return(
        <section className="profile">
            <img className="profileimage" src={imagepath} alt="" />
            <h2 className="name">PRIYANSHU</h2>
            <h3 className="profession">FrontEnd Developer</h3>
        </section>
    );
};

export default Header;