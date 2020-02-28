import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular';


@Injectable()
export class ClientrestPokerclubsProvider {

  API_URL: string = 'https://pokerclubsapp.com.br/api/';                
  constructor(public http: HTTP, public alertCtrl: AlertController, public platform: Platform) {
    
  }

  /*
    Funcao:     validUser
    Descricao:  Funcão que retorna se o usuario e senhas estao corretos
  */
  validUser(dataParam)
  {    
    let methodParam       = "validUser";    
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
       contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);                    
          resolve(result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
  }

  /*
    Funcao:     loginFacebook
    Descricao:  Funcão que retorna se o usuario e senhas estao corretos
  */
 loginFacebook(dataParam)
 {    
   let methodParam       = "loginFace";    
   let contentTypeParam  = {'Content-Type': 'application/json'};
   if (this.platform.is("ios")) {
    contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
   }  
   return new Promise((resolve, reject) => {
     this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
       .then(response => {
         let result = JSON.parse(response.data);                    
         resolve(result);
       })
       .catch(error => {
         this.CriaAlerta();
         reject(error);
     });
   });
 }

  /*
    Funcao:     getClubs
    Descricao:  Funcão que retorna os clubes proximos da localizacao do Usuario
  */
  getClubs(dataParam)
  {
    let methodParam       = "getClubs";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);      
          resolve(result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
  }

  /*
    Funcao:     getImagensClub()
    Descricao:  Funcão que retorna as imagens do club
  */
  getFotosGaleriaClub(dataParam)
  {
    let methodParam       = "getPhotosGallery";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);          
          resolve(result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
 
  }

  /*
    Funcao:     saveRegister
    Descricao:  Funcão salva dos dados do cadastro do usuario
  */
  saveRegister(dataParam)
  {
    let methodParam       = "putUser";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);
          resolve(result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
  }

  /*
    Funcao:     saveClub
    Descricao:  Funcão que salva os dados do club indicado
  */
  saveClub(dataParam)
  {

    let methodParam       = "indClub";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);
          resolve(result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
  }

  /*
    Funcao:     getoClub
    Descricao:  Funcao que retorna o texto do clube
  */

 
  getoClub(dataParam)
  {    
    let methodParam       = "getClub";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);          
          resolve(result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
  }
  
  /*
    Funcao:     getImagensClub()
    Descricao:  Função que retorna a lista de Galeria de Fotos do Clube
  */
  getGaleriaFotosClub(dataParam)
  {
    let methodParam       = "getGalleries";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);          
          resolve(result);          
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
  }

  /*
    Funcao:     getTorneios()
    Descricao:  Funcão que retorna as imagens do club
  */
  getTorneios(dataParam)
  {
    let methodParam       = "getTournaments";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);          
          resolve(result);
        })
        .catch(error => {
          reject(error);
      });
    });
  }

  /*
    Funcao:     getPremiosTorneios()
    Descricao:  Funcão que retorna os premios de um torneio
  */
  getPremiosTorneios(dataParam)
  {
    let methodParam       = "getPromotion";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);          
          resolve(result);
        })
        .catch(error => {
          reject(error);
      });
    });
  }

   /*
    Funcao:     putInscricaoTorneioNormal()
    Descricao:  Salva a inscricao do usuarios para torneios que nao possuem premios
  */
  putInscricaoTorneio(dataParam)
  {    
    let methodParam       = "putUserSubscriptionTournament";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);
          resolve(result);
        })
        .catch(error => {
          reject(error);
      });
    });
  }

  /*
    Funcao:     getRanking()
    Descricao:  Funcão que retorna o Ranking do Club
  */
  getRankings(dataParam)
  {
    let methodParam       = "getRankings";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);  
          resolve(result);
          //console.log("getRankings", result);
        })
        .catch(error => {
          reject(error);
      });
    });
  }

  /*
    Funcao:     putPremioTorneio()
    Descricao:  Salva o usuario que ganhou o premio especial do torneio
  */
  getUsuarioInscritoTorneio(dataParam)
  {
    let methodParam       = "getUserSubscriptionTournament";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);
          resolve(result);
        })
        .catch(error => {
          reject(error);
      });
    });
  }

  /*
    Funcao:     putSeguirOuParar()
    Descricao:  Grava se o usuario esta ou nao seguindo o clube
  */
  putSeguirOuParar(dataParam)
  {
    let methodParam       = "putUserFollowClub";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);     
          resolve(result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
  }

  /*
    Funcao:     getAgenda
    Descricao:  Funcão que retorna a agenda semanal do Clube
  */
  getAgendaSemanal(dataParam)
  {
    let methodParam       = "getSchedule";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);       
          resolve(result);          
        })
        .catch(error => {
          reject(error);
      });
    });
  }

  /*
    Funcao:     getCidades
    Descricao:  Funcão que retorna as cidades
  */
  getCidades(dataParam)
  {
    let methodParam       = "cities";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);        
          resolve(result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
  }

  /*
    Funcao:     getClubsCidades
    Descricao:  Funcão que retorna os clubes de uma cidade
  */
  getClubsCidades(dataParam)
  {
    let methodParam       = "getClubsCity";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);      
          resolve(result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);          
      });
    });
  }

  /*
    Funcao:     getClubsAllCidades
    Descricao:  Funcão que retorna os clubes de uma cidade
  */
  getClubsAllCidades(dataParam)
  {
      let methodParam       = "getClubsAllCity";
      let contentTypeParam  = {'Content-Type': 'application/json'};
      if (this.platform.is("ios")) {
          contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
      }
      return new Promise((resolve, reject) => {
          this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
              .then(response => {
                  let result = JSON.parse(response.data);
                  resolve(result);
              })
              .catch(error => {
                  this.CriaAlerta();
                  reject(error);
              });
      });
  }

  /*
    Funcao:     getClubesAutoComplete
    Descricao:  Funcão que retorna as cidades
  */
  getClubsAutoComplete(dataParam)
    {
    let methodParam       = "getClubsAutoComplete";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);        
          resolve(result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
  }

  /*
    Funcao:     getBannerPromocao
    Descricao:  Retora o Banner e mostra quando entrar no app
  */
 getBannerPromocao(dataParam)
 {
    let methodParam       = "getBannerPromo";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);        
          resolve(result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
  }

  /*
    Funcao:     getMensagensClube
    Descricao:  Retora as mensagens do Clube especifico
  */
 getMensagensClube(dataParam)
 {
    let methodParam       = "getClubMessages";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);        
          resolve(result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
  }

    /*
    Funcao:     getMensagengetMensagemsClube
    Descricao:  Retora o conteudo da Mensagem
  */
  getMensagem(dataParam)
  {
    let methodParam       = "getMessage";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);        
          resolve(result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
  }

  /*
    Funcao:     getTodasMensagens
    Descricao:  Retora todas as mensagens
  */
  getTodasMensagens(dataParam)
  {
    let methodParam       = "getUserMessages";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);            
          resolve(result);
          //console.log("TODAS", result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
  }

  /*
    Funcao:     excluirMensagem
    Descricao:  Exclui a mensagem
  */
 excluirMensagem(dataParam)
 {
   //console.log("dataParam", dataParam);
   let methodParam       = "deleteMessage";
   let contentTypeParam  = {'Content-Type': 'application/json'};
   if (this.platform.is("ios")) {
    contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
   }
   return new Promise((resolve, reject) => {
     this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
       .then(response => {
         let result = JSON.parse(response.data);            
         resolve(result);
         //console.log("result", result);
       })
       .catch(error => {
         this.CriaAlerta();
         reject(error);
     });
   });
 }

  /*
      Funcao:     excluirTodasMensagem
      Descricao:  Excluir todas as mensagem
  */
  excluirTodasMensagem(dataParam)
  {
    //console.log("dataParam", dataParam);
    let methodParam       = "deleteAllMessages";
    let contentTypeParam  = {'Content-Type': 'application/json'};
    if (this.platform.is("ios")) {
      contentTypeParam  = {'Content-Type': 'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + methodParam, dataParam, contentTypeParam)
        .then(response => {
          let result = JSON.parse(response.data);            
          resolve(result);
          //console.log("result", result);
        })
        .catch(error => {
          this.CriaAlerta();
          reject(error);
      });
    });
  }
  
  CriaAlerta()
  {
    let alert = this.alertCtrl.create({
      title: "PokerClubs",
      cssClass: 'alertaCustom',
      subTitle: "Ocorreu um erro ao requisitar os dados.<br>Tente novamente mais tarde.",
      enableBackdropDismiss: false,
      buttons: ['OK']
    });
    alert.present();
  }
}
