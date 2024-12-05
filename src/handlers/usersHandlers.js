// // Función para obtener usuarios
// const getUsers = (req, res) => {
//     res.send('Aquí están los usuarios');
//   };

//   module.exports = { getUsers };

// Función para obtener usuarios
// const getUsers = (req, res) => {
// Simular una lista de usuarios
//   const users = [
//     { id: 1, name: 'Andrés', email: 'andres@example.com' },
//     { id: 2, name: 'Maria', email: 'maria@example.com' }
//   ];

//   // Enviar los usuarios como respuesta en formato JSON
//   res.json(users);
// };

// module.exports = { getUsers };

///----------------------------consigana 5--------------------------------------
const Joi = require("joi");
const {
  getAllUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
} = require("../controllers/userControllers");

// Esquema de validación para los usuarios
const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
});

// Handler para obtener todos los usuarios
const getUsers = (req, res) => {
  try {
    const users = getAllUsersController();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ocurrió un error al obtener los usuarios.");
  }
};

// Handler para obtener un usuario por ID
const getUser = (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = getUserByIdController(userId);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ocurrió un error al obtener el usuario.");
  }
};

// Handler para agregar un nuevo usuario
const addUser = (req, res) => {
  try {
    // Validar los datos recibidos en la solicitud
    const { error } = userSchema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message); // Error de validación
    }

    const { name, email } = req.body;
    const newUser = createUserController({ name, email }); // Llamada al controlador

    console.log("Usuario creado con éxito:", newUser); // Mensaje en consola
    res
      .status(201)
      .json({ message: "Se creó un nuevo usuario con éxito", user: newUser }); // Mensaje en respuesta
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ocurrió un error al agregar el usuario.");
  }
};

// Handler para editar un usuario existente
const editUser = (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { error } = userSchema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const updatedUser = updateUserController(userId, req.body);

    if (updatedUser) {
      res.json({ message: "Se modifico usuario con éxito", user: updatedUser });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ocurrió un error al editar el usuario.");
  }
};

// Handler para eliminar un usuario
const removeUser = (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const deletedUser = deleteUserController(userId);

    if (deletedUser) {
      res.json({ message: "Usuario eliminado" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ocurrió un error al eliminar el Usuario.");
  }
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  editUser,
  removeUser,
};
