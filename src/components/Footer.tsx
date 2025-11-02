const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-inter text-white/80">
            © {new Date().getFullYear()} Sanjay Kumar. All rights reserved.
          </p>
          <p className="font-inter text-sm text-white/60 mt-2">
            Senior Application Architect • ITSM Consultant • Glen Allen, VA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
