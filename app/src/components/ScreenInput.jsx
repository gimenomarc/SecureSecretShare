import React, { useState } from 'react';

function SecretInput() {
  const [secretText, setSecretText] = useState('');
  const [password, setPassword] = useState('');

  const handleSecretChange = (e) => {
    setSecretText(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCreateSecret = () => {
    console.log('Secreto creado:', secretText);
    console.log('Contraseña para el secreto:', password);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <label className="block text-gray-800 text-lg font-semibold mb-2">Tu Secreto:</label>
      <textarea
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-black"
        rows="6"
        placeholder="Escribe tu secreto aquí..."
        value={secretText}
        onChange={handleSecretChange}
      ></textarea>
      <label className="block text-gray-800 text-lg font-semibold mt-4 mb-2">Contraseña para el secreto:</label>
      <input
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-black"
        type="password"
        placeholder="Ingresa la contraseña"
        value={password}
        onChange={handlePasswordChange}
      />
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={handleCreateSecret}
      >
        CREAR SECRETO
      </button>
    </div>
  );
}

export default SecretInput;