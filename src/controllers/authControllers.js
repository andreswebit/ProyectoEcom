//  ///////////////////////////CONSIGNA 6 ////////////
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { users } = require("../baseDatos"); // Importar la base de datos simulada

// Controlador para registrarse
const registerController = async (name, username, email, password, role) => {
  // Verificar si el usuario ya existe
  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    throw new Error("Usuario ya registrado");
  }

  // Hashear la contraseña con un "salt" de 10 rondas
  const hashedPassword = await bcrypt.hash(password, 10);

  // Crear un nuevo usuario
  const newUser = {
    id: users.length + 1, // Asignar un id simple incrementando el tamaño de la base de datos
    name,
    username,
    email,
    password: hashedPassword,
    role,
  };

  // Guardar el nuevo usuario en la base de datos simulada
  users.push(newUser);
  console.log("Usuario creado con éxito:", newUser);

  return newUser;
};

// Controlador para iniciar sesión
const loginController = async (email, password) => {
  // Buscar al usuario por el correo electrónico
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  // Verificar la contraseña ingresada con la almacenada (hasheada)
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Contraseña incorrecta");
  }

  // Crear un token JWT con el id y el rol del usuario
  const token = jwt.sign(
    { id: user.id, role: user.role },
    "mi_clave_secreta", // Aquí va tu clave secreta
    { expiresIn: "1h" }
  );

  return {
    message: "Inicio de sesión exitoso",
    token,
    user,
  };
};

module.exports = { registerController, loginController };
