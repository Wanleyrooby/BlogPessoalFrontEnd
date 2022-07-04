import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  usuario: Usuario = new Usuario
  confirmSenha: string
  tipoUsuario: string
 constructor(
  private authService: AuthService,
  private router: Router
 ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  confirmarSenha(event: any){
    this.confirmSenha = event.target.value
  }

  cadastrar(){
    if(this.usuario.senha != this.confirmSenha){
      alert('As senhas são diferentes!')
    }else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario)=>{
        this.usuario = resp
        
        alert('Cadastrado com sucesso')

      })
      
    }
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

}
