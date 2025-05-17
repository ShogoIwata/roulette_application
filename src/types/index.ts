export interface Employee {
  id: string;
  name: string;
}

export interface RouletteContextType {
  employees: Employee[];
  dutyTitle: string;
  selectedEmployee: Employee | null;
  isSpinning: boolean;
  addEmployee: (name: string) => void;
  removeEmployee: (id: string) => void;
  setDutyTitle: (title: string) => void;
  startRoulette: () => void;
  resetSelection: () => void;
}