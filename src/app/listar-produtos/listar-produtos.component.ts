import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';


@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent {

  constructor(private produtoService: ProdutoService) {}

  listProdutos: any = [];

  ngOnInit() {
    this.loadProdutos()
     
    
  }

  loadProdutos() {
    return this.produtoService.getProdutos().subscribe((data: {}) => {
      this.listProdutos = data;
    })
  }
}
