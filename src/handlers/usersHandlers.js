// // Función para obtener usuarios
// const getUsers = (req, res) => {
//     res.send('Aquí están los usuarios');
//   };
  
//   module.exports = { getUsers };
  
// Función para obtener usuarios
const getUsers = (req, res) => {
  // Simular una lista de usuarios
  const users = [
    { id: 1, name: 'Andrés', email: 'andres@example.com' },
    { id: 2, name: 'Maria', email: 'maria@example.com' }
  ];

  // Enviar los usuarios como respuesta en formato JSON
  res.json(users);
};

module.exports = { getUsers };
