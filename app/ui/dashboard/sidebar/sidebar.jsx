import React from 'react'
import styles from '../sidebar/sidebar.module.css'

import {
  MdDashboard,
  MdSupervisedUserCircles,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdPeople,
  MdAnalytics,
  MdOutlineSettings,
  MdHelpCenter
} from 'react-icons/md'

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircles />
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />
      },
      {
        title: 'transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />
      }
    ]
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <MdWork />
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics />
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <MdPeople />
      }
    ]
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />
      }
    ]
  }
]

const Sidebar = () => {
  return (
    <>
      <div className={styles.container}>
        <ul>
          {menuItems.map((cat) => (
            <li key={cat.title}>{cat.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Sidebar
