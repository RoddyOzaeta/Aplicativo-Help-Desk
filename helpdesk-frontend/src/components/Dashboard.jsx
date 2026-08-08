import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllTickets } from '../api/ticketService'

const Dashboard = () => {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllTickets()
        setTickets(data.data || [])
        setLoading(false)
      } catch (err) {
        setError('Error al cargar los datos. Asegúrate de que el backend esté corriendo.')
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <div>Cargando dashboard...</div>
  if (error) return <div className="card" style={{ color: 'red' }}>{error}</div>

  const abiertos = tickets.filter(t => t.estado === 'Abierto').length
  const progreso = tickets.filter(t => t.estado === 'En Progreso').length
  const cerrados = tickets.filter(t => t.estado === 'Cerrado').length
  const altaPrioridad = tickets.filter(t => t.prioridad === 'Alta' && t.estado !== 'Cerrado').length
  const ultimo = tickets.length > 0 ? tickets[0] : null

  return (
    <>
      <h1>Bienvenido al sistema de gestión de incidentes</h1>

      <div className="card">
        <h2>¡Hola, usuario!</h2>
        <p>Este sistema permite registrar, dar seguimiento y resolver incidentes técnicos de manera eficiente. Utilice el menú de navegación para reportar un nuevo incidente o consultar los tickets existentes.</p>
      </div>

      <section>
        <h2>Resumen del sistema</h2>
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="number">{abiertos}</div>
            <div className="label">Tickets abiertos</div>
          </div>
          <div className="stat-card">
            <div className="number">{progreso}</div>
            <div className="label">En proceso</div>
          </div>
          <div className="stat-card">
            <div className="number">{cerrados}</div>
            <div className="label">Resueltos</div>
          </div>
          <div className="stat-card">
            <div className="number">{altaPrioridad}</div>
            <div className="label">Prioridad alta activa</div>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Último incidente reportado</h3>
          <p>
            {ultimo
              ? `${ultimo.titulo} - ${new Date(ultimo.createdAt).toLocaleDateString('es-ES')} (${ultimo.estado})`
              : 'No hay tickets registrados.'}
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Próximos pasos</h3>
          <p>Para reportar un incidente, diríjase a la sección <strong>"Reportar incidente"</strong>. Para ver el listado completo, use <strong>"Ver tickets"</strong>.</p>
          <Link to="/reportar" className="btn btn-primary">Reportar incidente</Link>
          <Link to="/tickets" className="btn btn-secondary" style={{ marginLeft: '0.5rem' }}>Ver tickets</Link>
        </div>
      </section>
    </>
  )
}

export default Dashboard