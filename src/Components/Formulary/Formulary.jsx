import { useState } from "react"

export const Formulary = () => {

    const [formData, setFormData] = useState({
        nombre: " ",
        apellido: " ",
        email: " ",
        ubicación: " ",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
    };

    return (
        <div className="max-w-full mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">Formulario de Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row justify-evenly w-full">
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-80 px-3 py-2 border rounded-md text-gray-700"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="apellido" className="block">Apellido</label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            className="w-80 px-3 py-2 border rounded-md text-gray-700"
                            required
                        />
                    </div>
                    </div>
                    <div className="flex flex-row justify-evenly w-full">
                        <div className="mb-4">
                            <label htmlFor="email" className="block">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-80 px-3 py-2 border rounded-md text-gray-700"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="ubicación" className="block">Ubicación</label>
                            <input
                                type="text"
                                id="ubicación"
                                name="ubicación"
                                value={formData.ubicación}
                                onChange={handleChange}
                                className="w-80 px-3 py-2 border rounded-md text-gray-700"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                    <button
                    type="submit"
                    className="w-1/3 bg-[#F25C05] px-4 py-2 rounded-md "
                    >
                        Registrarse
                    </button>
                    </div>
            </form>

        </div>
    );
};

