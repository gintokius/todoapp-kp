import React from 'react'
import { Link } from 'react-router-dom'

import { IRoutesProps } from './Routes.types'

export const Routes: React.FC<IRoutesProps> = ({ pathname, activeTasks }) => {
  const activeClass = 'form-container__route-nav_active'

  return (
    <div>
      <nav>
        <ul className="form-container__route-nav">
          <Link to="/">
            <li className={pathname === '/' ? activeClass : ''}>All</li>
          </Link>
          <Link to="/active">
            <li className={pathname === '/active' ? activeClass : ''}>
              Active ({activeTasks.length})
            </li>
          </Link>
          <Link to="/done">
            <li className={pathname === '/done' ? activeClass : ''}>Done</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
