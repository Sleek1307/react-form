import React, { useEffect, useState } from "react";
import Input from "../components/controled-components/input.controled";
import TextArea from "../components/controled-components/text-area.controlled";
import RadioGroup from "../components/controled-components/radio-group";
import Radio from "../components/controled-components/radio";
import CheckGroup from "../components/controled-components/checkbox-group.controlled";
import CheckBox from "../components/controled-components/checkbox.controlled";

const FormControled = () => {
  const [name, setName] = useState({
    campo: "",
    valid: null,
    error: "",
  });

  const [user, setUser] = useState({
    campo: "",
    valid: null,
    error: "",
  });

  const [password, setPassword] = useState({
    campo: "",
    valid: null,
    error: "",
  });

  const [email, setEmail] = useState({
    campo: "",
    valid: null,
    error: "",
  });

  const [telefono, setTelefono] = useState({
    campo: "",
    valid: null,
    error: "",
  });

  const [info, setInfo] = useState({
    campo: "",
    valid: null,
    error: "",
  });

  const [pais, setPais] = useState({
    campo: "",
    error: "",
  });

  const [preference, setPreference] = useState([])

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

useEffect(() => {
  console.log(preference);
})
  

  return (
    <>
      <div className="w-100 h-100 my-4 d-flex flex-column align-items-center">
        <h1 className="text-center">Formulario controlado</h1>
        <hr className="w-75" />
        <div className="w-75">
          <div className="w-100 d-flex flex-column">
            <div className="w-100 d-flex">
              <Input
                type="text"
                label="Nombre"
                name="name"
                value={name}
                changeValue={setName}
                regExp={expresiones.nombre}
                required={true}
                error="El nombre solo puede llevar letras, espacios y acentos"
              />
              <Input
                type="text"
                label="Usuario"
                name="user"
                value={user}
                changeValue={setUser}
                regExp={expresiones.usuario}
                required={true}
                error="El usuario debe tener de 4 a 16 digitos y solo puede contener numeros, letras y guión bajo"
              />
            </div>
            <div className="w-100 d-flex">
              <Input
                type="password"
                label="Contraseña"
                name="password"
                value={password}
                changeValue={setPassword}
                regExp={expresiones.password}
                required={true}
                error="La contraseña debe tener entre 4 y 12 digitos"
              />
              <Input
                type="e-mail"
                label="Correo"
                name="email"
                value={email}
                changeValue={setEmail}
                regExp={email.campo}
                required={true}
                error="El formato de email es incorrecto"
              />
            </div>
            <div className="w-100 d-flex">
              <Input
                type="text"
                label="Telefono"
                name="telefono"
                value={telefono}
                changeValue={setTelefono}
                regExp={telefono.campo}
                required={false}
                error="El telefono debe tener minimo 7 digitos y como maximo 14"
              />
            </div>
            <div className="w-100 d-flex">
              <TextArea
                rows="7"
                label="Mas informacion"
                value={info}
                required={false}
                changeValue={setInfo}
                error="El texto no puede tener mas de 300 caracteres"
              />
            </div>
            <div className="w-100 d-flex">
              <div className="w-50 d-flex">
                <RadioGroup labelGroup="Pais" required={true} value={pais}>
                  <Radio
                    name="pais"
                    labelRadio="Colombia"
                    changeValue={setPais}
                    value={pais.campo}
                  />
                  <Radio
                    name="pais"
                    labelRadio="Japon"
                    changeValue={setPais}
                    value={pais.campo}
                  />
                  <Radio
                    name="pais"
                    labelRadio="Japon"
                    changeValue={setPais}
                    value={pais.campo}
                  />
                </RadioGroup>
              </div>
              <div className="w-50 d-flex">
                <CheckGroup labelGroup="Preferencias">
                  <CheckBox
                    label="Programacion"
                    valueInput= "programacion"
                    value={preference}
                    changeValue={setPreference}
                  />
                  <CheckBox
                    label="Videojuegos"
                    valueInput="videojuegos"
                    value={preference}
                    changeValue={setPreference}
                  />
                  <CheckBox
                    label="Diseño"
                    valueInput="diseño"
                    value={preference}
                    changeValue={setPreference}
                  />
                </CheckGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormControled;
