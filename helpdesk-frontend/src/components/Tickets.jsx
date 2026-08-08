import React, { useState, useEffect } from 'react'
import { getAllTickets, deleteTicket, updateTicket } from '../api/ticketService'
import TicketRow from './TicketRow'

const Tickets = () => {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadTickets = async () => {
    try {
      const data = await getAllTickets()
      setTickets(data.data || [])
      setLoading(false)
    } catch (err) {
      setError('Error al cargar los tickets. Asegúrate de que el backend esté corriendo.')
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTickets()
  }, [])

  const handleDelete = async (id) => {
    if (!confirm('¿Está seguro de eliminar este ticket? Esta acción no se puede deshacer.')) return
    try {
      await deleteTicket(id)
      setTickets(tickets.filter(t => t._id !== id))
      alert('✅ Ticket eliminado')
    } catch (err) {
      alert(`❌ Error: ${err.message}`)
    }
  }

  const handleChangeState = async (id) => {
    const nuevoEstado = prompt('Seleccione el nuevo estado (Abierto, En Progreso, Cerrado):', 'En Progreso')
    if (!nuevoEstado) return
    const estadosValidos = ['Abierto', 'En Progreso', 'Cerrado']
    if (!estadosValidos.includes(nuevoEstado)) {
      alert('Estado no válido. Use: Abierto, En Progreso o Cerrado.')
      return
    }
    try {
      await updateTicket(id, { estado: nuevoEstado })
      const updated = tickets.map(t => t._id === id ? { ...t, estado: nuevoEstado } : t)
      setTickets(updated)
      alert('✅ Estado actualizado correctamente')
    } catch (err) {
      alert(`❌ Error: ${err.message}`)
    }
  }

  if (loading) return <div>Cargando tickets...</div>
  if (error) return <div className="card" style={{ color: 'red' }}>{error}</div>

  return (
    <>
      <h1>Listado de tickets registrados</h1>
      <div className="card">
        <h2 className="card-title">Tickets actuales</h2>
        <p>A continuación se muestra el listado de incidentes reportados en tiempo real.</p>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Categoría</th>
                <th>Prioridad</th>
                <th>Estado</th>
                <th>Fecha de reporte</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tickets.length === 0 ? (
                <tr><td colSpan="7">No hay tickets registrados.</td></tr>
              ) : (
                tickets.map(ticket => (
                  <TicketRow
                    key={ticket._id}
                    ticket={ticket}
                    onDelete={handleDelete}
                    onChangeState={handleChangeState}
                  />
                ))
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="7">Total: {tickets.length} tickets</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <a href="/reportar" className="btn btn-primary">Reportar nuevo ticket</a>
    </>
  )
}

export default Tickets