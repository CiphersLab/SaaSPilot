import "@/app/globals.css"
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>      
      <main className='mx-auto  max-w-7xl md:p-10'>      
        {/* <LandingNavbar/> */}
        <div className="flex items-center justify-center">
          {children}
        </div>
      </main>      
    </>
  );
};

export default AuthLayout;
