'use client'
import { SessionProvider, SessionProviderProps } from 'next-auth/react'


const Providers = ({
  session,
  children
}: {
  session: SessionProviderProps['session'];
  children: React.ReactNode;
}) => {
  return (
    <SessionProvider session={session}>     
        {children}     
    </SessionProvider>
  );
}

export default Providers