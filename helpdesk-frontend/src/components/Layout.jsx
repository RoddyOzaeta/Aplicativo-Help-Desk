import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo">HelpDesk Manager</div>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/reportar">Reportar incidente</Link></li>
            <li><Link to="/tickets">Ver tickets</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2026 Sistema Help Desk - Todos los derechos reservados</p>
        <p>Contacto: rozaeta9178@utm.edu.ec | Tel: +593 99 643 4076</p>
      </footer>
    </div>
  )
}

export default Layout