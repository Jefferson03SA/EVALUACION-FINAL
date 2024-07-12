import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { SalarycalculationService } from '../../services/salarycalculation.service';
import { SalaryCalculationResponse } from '../../models/SalaryCalculationResponse';
import { SalaryCalculationRequest } from '../../models/SalaryCalculationRequest';


@Component({
  selector: 'app-calculadora-salario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './calculadora-salario.component.html',
  styleUrls: ['./calculadora-salario.component.css']
})
export class CalculadoraSalarioComponent {
  employeeForm: FormGroup;
  salaryResult: SalaryCalculationResponse | null = null;

  constructor(
    private fb: FormBuilder,
    private salaryService: SalarycalculationService
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      hourlyWage: [0, [Validators.required, Validators.min(1)]],
      hoursWorked: [0, [Validators.required, Validators.min(1)]],
      overtimeHours: [0, [Validators.required, Validators.min(0)]]
    });
  }

  controlHasError(control: string, error: string): boolean {
    return this.employeeForm.controls[control].hasError(error);
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const employeeRequest: SalaryCalculationRequest = this.employeeForm.value;
      this.salaryResult = this.salaryService.calculateSalary(employeeRequest);
    }
  }
}
