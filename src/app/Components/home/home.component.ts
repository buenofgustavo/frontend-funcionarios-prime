import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownFilterOptions, DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Clientes } from '../../Interfaces/clientes';
import { Produtos } from '../../Interfaces/produtos';
import { Notas } from '../../Interfaces/notas';
import { MatDialog } from '@angular/material/dialog';
import { ModalAssinaturaComponent } from '../modais/modal-assinatura/modal-assinatura.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, InputTextModule, FormsModule, DropdownModule, ButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nota: Notas | undefined;
  clientes: Clientes[] | undefined;
  selectedClient: string = ''
  filterValue: string | undefined = '';
  produtos: any[] = [
    { label: 'Produto 1', value: 'produto1' },
    { label: 'Produto 2', value: 'produto2' }
  ];

  quantidades: any[] = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' }
  ];

  produtosList: Produtos[] = []; // Inicializa com uma lista vazia
  currentProduto: Produtos = { produto: '', quantidade: '', valor: 0 };

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.clientes = [
      { name: 'Cliente 1', code: 'cliente1' },
      { name: 'Cliente 2', code: 'cliente2' },
      { name: 'Cliente 3', code: 'cliente3' },
      { name: 'Cliente 4', code: 'cliente4' },
      { name: 'Cliente 5', code: 'cliente5' },
      { name: 'Cliente 6', code: 'cliente6' },
      { name: 'Cliente 7', code: 'cliente7' },
      { name: 'Cliente 8', code: 'cliente8' },
      { name: 'Cliente 9', code: 'cliente9' },
      { name: 'Cliente 10', code: 'cliente10' }
    ];

  }

  resetFunction(options?: DropdownFilterOptions) {
    if (options && typeof options.reset === 'function') {
      options.reset();
    }
    this.filterValue = '';
  }

  customFilterFunction(event: KeyboardEvent, options?: DropdownFilterOptions) {
    if (options && typeof options.filter === 'function') {
      options.filter(event);
    }
  }

  addProduto() {
    if (this.currentProduto.produto && this.currentProduto.quantidade && this.currentProduto.valor !== undefined) {
      this.produtosList.push({ ...this.currentProduto });
      this.currentProduto = { produto: '', quantidade: '', valor: 0 };
      console.log(this.produtosList);
    } else {
      alert('Por favor, selecione um produto, uma quantidade e defina o preço.');
    }
  }

  confirmar() {
    if (this.currentProduto.produto && this.currentProduto.quantidade && this.currentProduto.valor !== undefined) {
      this.produtosList.push({ ...this.currentProduto });
      this.currentProduto = { produto: '', quantidade: '', valor: 0 };
      console.log(this.produtosList);
    } 
    this.nota = {
      id: '',
      cliente: this.selectedClient,
      produtos: this.produtosList,
      image: '',
      data: new Date()
    };
  
    this.openDialog(this.nota)
  
  }

  openDialog(nota: Notas) {
    const dialogRef = this.dialog.open(ModalAssinaturaComponent, {
        width: '90%', // Define a largura do diálogo como 100% da viewport
        height: '80%', // Ajusta a altura automaticamente
        data: { nota: nota }
      });

    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
    });
}

}
