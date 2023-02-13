import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  /*
   * Get a children props and return inside component
   */
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
      /*
       * passing state value and functions via context
       */
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
