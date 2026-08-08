import React from 'react'

const TicketRow = ({ ticket, onDelete, onChangeState }) => {
  const fecha = new Date(ticket.createdAt).toLocaleDateString('es-ES')
  const badgeClass = ticket.prioridad === 'Alta' ? 'badge-alta' :
                     ticket.prioridad === 'Media' ? 'badge-media' : 'badge-baja'

  return (
    <tr>
      <td>{ticket._id.slice(-6)}</td>
      <td>{ticket.titulo}</td>
      <td>{ticket.categoria}</td>
      <td><span className={`badge ${badgeClass}`}>{ticket.prioridad}</span></td>
      <td>{ticket.estado}</td>
      <td>{fecha}</td>
      <td>
        <button className="btn btn-secondary btn-sm" onClick={() => onChangeState(ticket._id)}>
          Cambiar estado
        </button>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(ticket._id)}>
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default TicketRow