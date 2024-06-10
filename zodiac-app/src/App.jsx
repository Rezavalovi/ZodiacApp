import React, { useState } from 'react';
import ZodiacList from './components/ZodiacList';
import BirthdateForm from './components/BirthdateForm';
import Result from './components/Result';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', birthdate: '' });

  const handleDateSubmit = (data) => {
    setFormData(data);
  };

  const handleReset = () => {
    setFormData({ name: '', birthdate: '' });
  };

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Zodiac Web App</h1>
      <ZodiacList />
      <div className="flex space-x-4">
        <BirthdateForm onDateSubmit={handleDateSubmit} onReset={handleReset} />
        <Result name={formData.name} birthdate={formData.birthdate} />
      </div>
    </div>
  );
}

export default App;
