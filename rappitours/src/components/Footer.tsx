function Footer() {
  return (
    <footer className="bg-secondary text-primary py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Rappitours. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com" className="hover:text-accent">Twitter</a>
          <a href="https://facebook.com" className="hover:text-accent">Facebook</a>
          <a href="https://instagram.com" className="hover:text-accent">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;