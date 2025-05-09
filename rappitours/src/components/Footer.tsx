function Footer() {
  return (
    <>
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
                <p>Follow us on 
                    <a href="https://twitter.com" className="text-blue-400"> Twitter</a>, 
                    <a href="https://facebook.com" className="text-blue-400"> Facebook</a>, 
                    <a href="https://instagram.com" className="text-blue-400"> Instagram</a>
                </p>
            </div>
        </footer>
    </>
  );
}

export default Footer;