import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = (data) => {
    if (data.name && data.email && data.age >= 18) {
      // Envía los datos del formulario si es necesario (puedes agregar aquí la lógica de envío HTTP)
      // Por ahora, mostramos un mensaje de éxito
      setSuccessMessage('Formulario enviado con éxito');
    } else {
      setSuccessMessage('');
    }
  };

  const clearSuccessMessage = () => {
    setSuccessMessage('');
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)} onChange={clearSuccessMessage}>
        <div>
          <label>Nombre</label>
          <input {...register('name', { required: true })} />
          <p className="error">{errors.name && 'El nombre es obligatorio'}</p>
        </div>
        <div>
          <label>Correo</label>
          <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          <p className="error">{errors.email && 'Correo no válido'}</p>
        </div>
        <div>
          <label>Edad</label>
          <input {...register('age', { required: true, min: 18 })} />
          <p className="error">{errors.age && 'Debes ser mayor de 18 años'}</p>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default FormComponent;
