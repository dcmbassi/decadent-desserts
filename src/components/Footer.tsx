
const Footer = () => {
    const currentDate = new Date()
    return (
        <div className='footer'>
            &copy; {`D.C. Mbassi, ${currentDate.getFullYear()}`}
        </div>
    )
}

export default Footer