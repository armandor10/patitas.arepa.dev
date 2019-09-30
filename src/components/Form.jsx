import React from 'react';

const Form = () => (
    <div className="Form">
        <div className="Form-head">
            <h2>dar en Adopcion</h2>
        </div>
        <div className="Form-item">
            <form>
                <input name="text" type="text" placeholder="Nombre de tu mascota"/>
                <input name="description" type="text" placeholder="describe tu mascota"/>
                
                <select value="type">
                    <option disabled selected> Seleccionar </option>
                    <option value="cat">Gato</option>
                    <option value="dog">Perro</option>
                </select>      

                <select value="gender">
                    <option disabled selected> Seleccionar </option>
                    <option value="female">Masculino</option>
                    <option value="male">Femenino</option>
                </select>         


                <select value="adopt">
                    <option disabled selected> Seleccionar </option>
                    <option value="true">Dar en Adopcion</option>
                    <option value="false">Cuidar</option>
                </select>

                <input type="file" name="photo" id=""/>

                <button>Enviar</button>

            </form>
        </div>
    </div>
);

export default Form;