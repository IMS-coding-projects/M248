function Footer() {
  return (
    <footer className="bg-secondary text-primary py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Rappitours. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;