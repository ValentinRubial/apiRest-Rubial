import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockApiService } from '../mock-api.service'; 

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  registroForm: FormGroup;
  items: any[] = [];

  constructor(private formBuilder: FormBuilder, private mockApiService: MockApiService) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    this.mockApiService.getItems().subscribe((data: any) => {
      this.items = data;
    });
  }

  registrarse() {
    if (this.registroForm.valid) {
      
    }
  }
}


