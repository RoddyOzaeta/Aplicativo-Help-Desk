# Sistema de Gestión de Incidentes (Help Desk) – Full Stack

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen?logo=mongodb)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)
![Render](https://img.shields.io/badge/Render-Deployed-blue?logo=render)

Aplicación web Full Stack para la gestión de incidentes técnicos (tickets) con funcionalidades CRUD, diseñada con arquitectura cliente-servidor y desplegada en la nube.

## 🚀 Demo en vivo

- **Frontend (Vercel):** [https://aplicativo-help-desk-7aoupv74n-r1-8e39.vercel.app](https://aplicativo-help-desk-7aoupv74n-r1-8e39.vercel.app)
- **Backend (Render):** [https://aplicativo-help-desk.onrender.com](https://aplicativo-help-desk.onrender.com)
- **API Endpoint (ejemplo):** [https://aplicativo-help-desk.onrender.com/api/tickets](https://aplicativo-help-desk.onrender.com/api/tickets)

---

## 📖 Tabla de contenido

- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Requisitos previos](#-requisitos-previos)
- [Instalación y ejecución local](#-instalación-y-ejecución-local)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Despliegue en la nube](#-despliegue-en-la-nube)
- [Endpoints de la API](#-endpoints-de-la-api)
- [Capturas de pantalla](#-capturas-de-pantalla)
- [Video de sustentación](#-video-de-sustentación)
- [Autores y contacto](#-autores-y-contacto)

---

## 🛠️ Tecnologías utilizadas

| Capa          | Tecnologías |
|---------------|-------------|
| **Frontend**  | React 18, Vite, React Router, CSS3 (Grid/Flexbox) |
| **Backend**   | Node.js, Express, Mongoose, CORS, dotenv |
| **Base de datos** | MongoDB Atlas (cluster en la nube) |
| **Despliegue** | Vercel (frontend), Render (backend) |
| **Control de versiones** | Git, GitHub |

---

## 📂 Estructura del proyecto
Aplicativo-Help-Desk/
├── backend/
│ ├── models/
│ │ └── Ticket.js # Esquema de MongoDB
│ ├── routes/
│ │ └── ticketRoutes.js # Endpoints de la API
│ ├── .env # Variables de entorno (no subir a GitHub)
│ ├── app.js # Configuración de Express
│ ├── package.json
│ └── server.js # Punto de entrada del backend
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── api/
│ │ │ └── ticketService.js # Cliente HTTP para la API
│ │ ├── components/
│ │ │ ├── Dashboard.jsx
│ │ │ ├── Layout.jsx
│ │ │ ├── Reportar.jsx
│ │ │ ├── Tickets.jsx
│ │ │ └── TicketRow.jsx
│ │ ├── styles/
│ │ │ └── global.css # Estilos responsivos
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── index.html
│ ├── package.json
│ ├── vite.config.js
│ └── vercel.json # Configuración para Vercel
├── docs/
│ └── capturas/ # Capturas de pantalla (para README)
├── .gitignore
└── README.md # Este archivo

text

---

## ✅ Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [Git](https://git-scm.com/)
- Una cuenta en [MongoDB Atlas](https://www.mongodb.com/atlas) (para la base de datos)
- (Opcional) [Postman](https://www.postman.com/) para probar la API

---

## 🔧 Instalación y ejecución local

Sigue estos pasos para ejecutar el proyecto en tu máquina.

### 1. Clonar el repositorio

```bash
git clone https://github.com/RoddyOzaeta/Aplicativo-Help-Desk.git
cd Aplicativo-Help-Desk
2. Backend
2.1. Configurar variables de entorno
Crea un archivo .env dentro de la carpeta backend/ con el siguiente contenido:

env
PORT=3000
MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<basededatos>?retryWrites=true&w=majority
Importante: Reemplaza <usuario>, <contraseña>, <cluster> y <basededatos> con tus credenciales reales de MongoDB Atlas.

2.2. Instalar dependencias y ejecutar
bash
cd backend
npm install
npm start
El servidor se ejecutará en http://localhost:3000.
Puedes verificar la API en http://localhost:3000/api/tickets.

3. Frontend
3.1. Configurar variable de entorno (opcional)
Si deseas conectar a un backend diferente, crea un archivo .env dentro de frontend/:

env
VITE_API_URL=http://localhost:3000/api
Nota: Si no creas este archivo, por defecto apuntará a https://aplicativo-help-desk.onrender.com/api.

3.2. Instalar dependencias y ejecutar
bash
cd ../frontend
npm install
npm run dev
La aplicación estará disponible en http://localhost:5173.

🌍 Despliegue en la nube
El proyecto está desplegado en las siguientes plataformas:

Componente	Plataforma	URL
Frontend	Vercel	https://aplicativo-help-desk-7aoupv74n-r1-8e39.vercel.app
Backend	Render	https://aplicativo-help-desk.onrender.com
Base de datos	MongoDB Atlas	(Cluster privado)
El sistema es 100% funcional en producción y no depende de localhost.

📌 Endpoints de la API
Método	Ruta	Descripción
GET	/api/tickets	Obtener todos los tickets
GET	/api/tickets/:id	Obtener un ticket por ID
POST	/api/tickets	Crear un nuevo ticket
PUT	/api/tickets/:id	Actualizar un ticket (ej. estado)
DELETE	/api/tickets/:id	Eliminar un ticket
Ejemplo de cuerpo para POST / PUT (JSON):

json
{
  "titulo": "Caída de red",
  "descripcion": "El acceso a internet está intermitente",
  "categoria": "Red",
  "prioridad": "Alta",
  "estado": "Abierto"
}


👤 Autores y contacto
Roddy Ismael Ozaeta Cedeño
Correo: rozaeta9178@utm.edu.ec
GitHub: @RoddyOzaeta

📝 Licencia
Este proyecto fue desarrollado como parte de la asignatura Desarrollo de Sistemas Informáticos de la Universidad Técnica de Manabí – Período Septiembre 2025 - Enero 2026.

🧠 Agradecimientos
Al Ing. Jorge Zambrano Cedeño, Mg. por su guía y acompañamiento durante el desarrollo de la unidad.