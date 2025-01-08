import "@/app/globals.css"

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <>              
      <main className="flex-1 container">        
          {children}          
      </main>        
    </>       
      
  );
};

export default ProtectedLayout;
