import React, { useState } from 'react'
import { createTicket } from '../api/ticketService'
import { useNavigate } from 'react-router-dom'

const Reportar = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    titulo: '',
    categoria: '',
    prioridad: 'Media',
    descripcion: '',
  })
  const [mensaje, setMensaje] = useState({ text: '', type: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { titulo, categoria, descripcion } = form
    if (!titulo || !categoria || !descripcion) {
      setMensaje({ text: 'Todos los campos obligatorios deben ser llenados.', type: 'error' })
      return
    }

    setLoading(true)
    try {
      await createTicket({ ...form, estado: 'Abierto' })
      setMensaje({ text: '✅ Ticket creado exitosamente', type: 'success' })
      setForm({ titulo: '', categoria: '', prioridad: 'Media', descripcion: '' })
      setTimeout(() => navigate('/tickets'), 1500)
    } catch (error) {
      setMensaje({ text: `❌ Error: ${error.message}`, type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h1>Reporte de nuevo incidente</h1>
      <div className="form-container">
        <div className="card">
          <h2 className="card-title">Complete el formulario</h2>
          <p>Los campos marcados con <strong>*</strong> son obligatorios.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="titulo">Título del incidente *</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                className="form-control"
                required
                placeholder="Ej. Caída de red en el piso 3"
                value={form.titulo}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="categoria">Categoría *</label>
              <select
                id="categoria"
                name="categoria"
                className="form-control"
                required
                value={form.categoria}
                onChange={handleChange}
              >
                <option value="">Seleccione una categoría</option>
                <option value="Red">Red</option>
                <option value="Hardware">Hardware</option>
                <option value="Software">Software</option>
              </select>
            </div>
            <fieldset>
              <legend>Nivel de prioridad *</legend>
              <div>
                <input
                  type="radio"
                  id="alta"
                  name="prioridad"
                  value="Alta"
                  checked={form.prioridad === 'Alta'}
                  onChange={handleChange}
                />
                <label htmlFor="alta">Alta</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="media"
                  name="prioridad"
                  value="Media"
                  checked={form.prioridad === 'Media'}
                  onChange={handleChange}
                />
                <label htmlFor="media">Media</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="baja"
                  name="prioridad"
                  value="Baja"
                  checked={form.prioridad === 'Baja'}
                  onChange={handleChange}
                />
                <label htmlFor="baja">Baja</label>
              </div>
            </fieldset>
            <div className="form-group">
              <label htmlFor="descripcion">Descripción detallada *</label>
              <textarea
                id="descripcion"
                name="descripcion"
                className="form-control"
                rows="5"
                required
                placeholder="Explique el problema con el mayor detalle posible..."
                value={form.descripcion}
                onChange={handleChange}
              />
            </div>
            <div className="form-group" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar reporte'}
              </button>
              <button type="reset" className="btn btn-secondary" onClick={() => setForm({ titulo: '', categoria: '', prioridad: 'Media', descripcion: '' })}>
                Limpiar formulario
              </button>
            </div>
            {mensaje.text && (
              <div style={{ marginTop: '1rem', fontWeight: 'bold', color: mensaje.type === 'error' ? 'red' : 'green' }}>
                {mensaje.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  )
}

export default Reportar