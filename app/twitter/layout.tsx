
import React from 'react';
import Sidebar from './components/layout/Sidebar';
import getCurrentUser from '../actions/getCurrentUser';
import FollowBar from './components/layout/FollowBar';
import getUsers from '../actions/getUsers';
import EditModal from './components/modals/EditModal';





const Layout: React.FC<{ children: React.ReactNode }> = async({ children }) => {
  const currentUser = await getCurrentUser()
  const users = await getUsers()
  return (
    <>
      <EditModal currentUser={currentUser} />
      
      <div className="h-screen bg-black">
        <div className="container h-full mx-auto xl:px-30 max-w-6xl">
          <div className="grid grid-cols-4 h-full">
              <Sidebar currentUser={currentUser} />
            <div 
              className="
                col-span-3 
                lg:col-span-2 
                border-x-[1px] 
                border-neutral-800
            ">
              {children}
            </div>
            <FollowBar users= {users} />
          </div>
       </div>
      </div>
    </>
  )
}

export default Layout;
