import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const BirthdateForm = ({ onDateSubmit, onReset }) => {
    const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();
    const [name, setName] = useState('');

    const onSubmit = (data) => {
        onDateSubmit(data);
    };

    const handleReset = () => {
        reset({ name: '', birthdate: '' });
        setName('');
        onReset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex items-end">
            <div className="flex flex-col mr-4">
                <label className="block text-sm font-medium text-gray-700">Nama :</label>
                <input
                    type="text"
                    {...register('name', { required: "Nama wajib diisi" })}
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        clearErrors('name');
                    }}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col mr-4">
                <label className="block text-sm font-medium text-gray-700">Tanggal Lahir :</label>
                <input
                    type="date"
                    {...register('birthdate', { required: "Tanggal Lahir wajib diisi" })}
                    onChange={() => clearErrors('birthdate')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {errors.birthdate && <p className="text-red-600 text-sm">{errors.birthdate.message}</p>}
            </div>
            <div className="flex space-x-2">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
                <button type="button" onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded-md">Reset</button>
            </div>
        </form>
    );
};

export default BirthdateForm;
