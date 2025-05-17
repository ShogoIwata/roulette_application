import React, { createContext, useState, useEffect, useContext } from 'react';
import { Employee, RouletteContextType } from '../types';

const RouletteContext = createContext<RouletteContextType | undefined>(undefined);

export const RouletteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });
  
  const [dutyTitle, setDutyTitle] = useState<string>(() => {
    const savedTitle = localStorage.getItem('dutyTitle');
    return savedTitle || '';
  });
  
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('dutyTitle', dutyTitle);
  }, [dutyTitle]);

  const addEmployee = (name: string) => {
    if (name.trim() === '') return;
    const newEmployee: Employee = {
      id: crypto.randomUUID(),
      name: name.trim()
    };
    setEmployees(prev => [...prev, newEmployee]);
  };

  const removeEmployee = (id: string) => {
    setEmployees(prev => prev.filter(employee => employee.id !== id));
  };

  const updateDutyTitle = (title: string) => {
    setDutyTitle(title);
  };

  const startRoulette = () => {
    if (employees.length === 0 || isSpinning) return;
    
    setIsSpinning(true);
    setSelectedEmployee(null);
    
    // Simulate spinning with random selection
    const spinDuration = 2000 + Math.random() * 1000;
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * employees.length);
      setSelectedEmployee(employees[randomIndex]);
      setIsSpinning(false);
    }, spinDuration);
  };

  const resetSelection = () => {
    setSelectedEmployee(null);
  };

  const value = {
    employees,
    dutyTitle,
    selectedEmployee,
    isSpinning,
    addEmployee,
    removeEmployee,
    setDutyTitle: updateDutyTitle,
    startRoulette,
    resetSelection
  };

  return (
    <RouletteContext.Provider value={value}>
      {children}
    </RouletteContext.Provider>
  );
};

export const useRoulette = (): RouletteContextType => {
  const context = useContext(RouletteContext);
  if (context === undefined) {
    throw new Error('useRoulette must be used within a RouletteProvider');
  }
  return context;
};