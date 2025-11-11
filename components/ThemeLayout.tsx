import React, { useState, ReactNode, FC } from 'react';
import { SeoArticle } from '../utils/SeoArticle';

type ModalType = 'about' | 'contact' | 'privacy' | 'terms' | 'dmca' | null;

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-lg shadow-xl w-11/12 md:w-3/4 lg:w-2/3 max-h-[85vh] flex flex-col m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </header>
        <main className="p-6 text-gray-300 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};


const ThemeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleOpenModal = (modal: ModalType) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case 'about':
        return (
          <Modal title="About Us" onClose={handleCloseModal}>
            <p>The Cosmic Countdown Timer is a passion project by HSINI MOHAMED, designed to provide a beautiful, functional, and distraction-free tool for anyone looking to improve their productivity. We believe that by creating a focused environment, you can achieve a state of flow and accomplish more.</p>
            <p className="mt-4">This tool is built with modern web technologies like React and Tailwind CSS to ensure a seamless experience across all devices.</p>
          </Modal>
        );
      case 'contact':
        return (
          <Modal title="Contact" onClose={handleCloseModal}>
            <p>For inquiries, feedback, or support, please reach out to us:</p>
            <ul className="mt-4 space-y-2">
              <li><strong>Website:</strong> <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">doodax.com</a></li>
              <li><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-purple-400 hover:underline">hsini.web@gmail.com</a></li>
            </ul>
          </Modal>
        );
      case 'privacy':
        return (
          <Modal title="Privacy Policy" onClose={handleCloseModal}>
            <p>This application is a client-side tool. We do not collect, store, or share any personal data from our users. All timer settings are stored locally in your browser and are never transmitted to our servers. Your privacy is paramount.</p>
          </Modal>
        );
      case 'terms':
        return (
          <Modal title="Terms of Service" onClose={handleCloseModal}>
            <p>This service is provided "as is" without any warranties. By using this tool, you agree not to hold us liable for any damages arising from its use. Please use it responsibly.</p>
          </Modal>
        );
      case 'dmca':
        return (
          <Modal title="DMCA Policy" onClose={handleCloseModal}>
            <p>All content on this website is original. If you believe any content infringes upon your copyright, please contact us at <a href="mailto:hsini.web@gmail.com" className="text-purple-400 hover:underline">hsini.web@gmail.com</a> with a valid DMCA complaint.</p>
          </Modal>
        );
      default:
        return null;
    }
  };

  const navLinks: { label: string; modal: ModalType }[] = [
    { label: 'About', modal: 'about' },
    { label: 'Contact', modal: 'contact' },
    { label: 'Privacy', modal: 'privacy' },
    { label: 'Terms', modal: 'terms' },
    { label: 'DMCA', modal: 'dmca' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white font-sans overflow-x-hidden flex flex-col">
      <div className="absolute inset-0 z-0 overflow-hidden">
         <div className="absolute -inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 animate-[pulse_25s_ease-in-out_infinite]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(168,85,247,0.2)_0%,_rgba(236,72,153,0.0)_40%)]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_rgba(236,72,153,0.2)_0%,_rgba(168,85,247,0.0)_35%)] animate-[pulse_15s_ease-in-out_infinite]"></div>
         <div 
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'0.5\' fill=\'%23fff\'/%3E%3Ccircle cx=\'10\' cy=\'20\' r=\'0.5\' fill=\'%23fff\'/%3E%3Ccircle cx=\'30\' cy=\'10\' r=\'0.5\' fill=\'%23fff\'/%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'1\' fill=\'%23fff\'/%3E%3Ccircle cx=\'70\' cy=\'30\' r=\'0.5\' fill=\'%23fff\'/%3E%3Ccircle cx=\'90\' cy=\'40\' r=\'0.5\' fill=\'%23fff\'/%3E%3Ccircle cx=\'80\' cy=\'90\' r=\'1\' fill=\'%23fff\'/%3E%3Ccircle cx=\'15\' cy=\'85\' r=\'0.5\' fill=\'%23fff\'/%3E%3C/svg%3E")',
             backgroundSize: '300px 300px'
           }}
           className="absolute inset-0 opacity-20 animate-[pulse_30s_linear_infinite]"
         ></div>
      </div>

      <header className="absolute top-0 left-0 right-0 p-4 z-20">
        <nav className="flex justify-center items-center space-x-4 md:space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleOpenModal(link.modal)}
              className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </header>
      
      <div className="relative flex-grow flex flex-col justify-center items-center z-10 p-4">
        <main className="w-full flex justify-center items-center">
             {children}
        </main>
        
        <section className="w-full max-w-4xl mt-12 px-4">
             <SeoArticle />
        </section>
      </div>


      <footer className="relative text-center p-4 text-sm text-gray-400 z-20 mt-auto">
        <p>
          Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold" style={{ color: '#FFD700' }}>HSINI MOHAMED</a>
        </p>
        <p className="mt-1">
          <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:underline">doodax.com</a> | <a href="mailto:hsini.web@gmail.com" className="hover:underline">hsini.web@gmail.com</a>
        </p>
      </footer>

      {activeModal && renderModalContent()}
    </div>
  );
};

export default ThemeLayout;