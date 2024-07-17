
const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer className="">
            <p>Copyright &copy;{year} Spin The Bottle by
                <a href="https://www.instagram.com/kis__inja/" target="_blank">
                    Kis__inja
                </a>
            </p>
        </footer>
    )
}

export default Footer