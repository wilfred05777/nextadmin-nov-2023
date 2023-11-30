import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import styles from '../ui/dashboard/dashboard.module.css'
const Layout = ({ children }) => {
  return (
    <div
      className={{
        display: 'flex'
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundColor: '#182237'
        }}
      >
        <Sidebar />
      </div>
      <div
        className={{
          flex: 4
        }}
      >
        <Navbar />
        {children}
      </div>
    </div>
    // <div className={styles.container}>
    //   <div style={styles.menu}>
    //     <Sidebar />
    //   </div>
    //   <div className={styles.content}>
    //     <Navbar />
    //     {children}
    //   </div>
    // </div>
  )
}

export default Layout
