import { Injectable } from '@angular/core';
import { SalaryCalculationRequest } from '../models/SalaryCalculationRequest';
import { SalaryCalculationResponse } from '../models/SalaryCalculationResponse';


@Injectable({
  providedIn: 'root'
})
export class SalarycalculationService {

  calculateSalary(employee: SalaryCalculationRequest): SalaryCalculationResponse {
    const regularSalary = employee.hourlyWage * employee.hoursWorked;
    const overtimeSalary = employee.hourlyWage * 1.5 * employee.overtimeHours;
    const totalSalary = regularSalary + overtimeSalary;
    const deductions = totalSalary * 0.1;
    const netSalary = totalSalary - deductions;

    return {
      regularSalary,
      overtimeSalary,
      deductions,
      netSalary
    };
  }
}
