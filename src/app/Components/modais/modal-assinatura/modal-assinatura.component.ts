import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import { Notas } from '../../../Interfaces/notas';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-modal-assinatura',
  standalone: true,
  imports: [],
  providers: [MessageService],
  templateUrl: './modal-assinatura.component.html',
  styleUrl: './modal-assinatura.component.scss'
})
export class ModalAssinaturaComponent implements OnInit {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  signaturePad!: SignaturePad;
  dataUrl: string | undefined; // Declarando a propriedade dataUrl

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initializeSignaturePad();
    this.updateCanvasSize();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateCanvasSize();
  }

  private initializeSignaturePad(): void {
    const canvasElement = this.canvas.nativeElement;
    this.signaturePad = new SignaturePad(canvasElement);
    this.signaturePad.minWidth = 2;
    this.signaturePad.maxWidth = 4;
    this.signaturePad.penColor = 'black';
  }

  private updateCanvasSize(): void {
    const canvasElement = this.canvas.nativeElement;
    canvasElement.width = canvasElement.offsetWidth;
    canvasElement.height = canvasElement.offsetHeight;
    this.signaturePad.clear(); // Limpar a assinatura ao redimensionar
  }

  clearSignature(): void {
    this.signaturePad.clear();
  }

  saveSignature(): void {
    this.dataUrl = this.signaturePad.toDataURL(); // Atribuindo dataUrl à propriedade
  }

  confirmar() {
    this.saveSignature()
    if (this.dataUrl) {
      setTimeout(() => {
        location.reload(); // Recarrega a página após1 segundos
      }, 2000);
    } else {
      setTimeout(() => {
        location.reload(); // Recarrega a página após1 segundos
      }, 2000);
    }
    console.log(this.dataUrl)
    console.log(this.data)

  }

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalAssinaturaComponent>,
    private messageService: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: { nota: Notas }
  ) {
  }

}

