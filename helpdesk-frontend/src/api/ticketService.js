const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/tickets';

export const getAllTickets = async () => {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error('Error al obtener tickets');
  return res.json();
};

export const getTicketById = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error('Ticket no encontrado');
  return res.json();
};

export const createTicket = async (ticket) => {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ticket),
  });
  if (!res.ok) throw new Error('Error al crear ticket');
  return res.json();
};

export const updateTicket = async (id, updates) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error('Error al actualizar');
  return res.json();
};

export const deleteTicket = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar');
  return res.json();
};