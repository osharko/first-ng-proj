import { Injectable } from '@angular/core';
import { Esercizio2ServiceModule } from '../esercizio2-service.module';

@Injectable({ providedIn: Esercizio2ServiceModule })
export class ApiService {

  public getDomande(): IDomanda[] {
    return [
      {
        "id": "1",
        "descrizione": "Genere Letterario",
        "domanda": "Quale genere letterario preferisci?",
        "risposte": [
          {
            "id": "1",
            "risposta": "Amore"
          },
          {
            "id": "2",
            "risposta": "Avventura"
          },
          {
            "id": "3",
            "risposta": "Fantascienza"
          },
          {
            "id": "4",
            "risposta": "Gialli"
          },
          {
            "id": "5",
            "risposta": "Biografie"
          },
          {
            "id": "6",
            "risposta": "Fumetti"
          },
          {
            "id": "7",
            "risposta": "Storia"
          },
          {
            "id": "8",
            "risposta": "Fotografia"
          },
          {
            "id": "9",
            "risposta": "Poesie"
          },
          {
            "id": "10",
            "risposta": "Horror"
          }
        ]
      },
      {
        "id": "2",
        "descrizione": "Sport",
        "domanda": "Qual è il tuo sport preferito?",
        "risposte": [
          {
            "id": "1",
            "risposta": "Calcio"
          },
          {
            "id": "2",
            "risposta": "Volley"
          },
          {
            "id": "3",
            "risposta": "Tennis"
          },
          {
            "id": "4",
            "risposta": "Atletica"
          },
          {
            "id": "5",
            "risposta": "Nuoto"
          },
          {
            "id": "6",
            "risposta": "Motogp"
          },
          {
            "id": "7",
            "risposta": "Badminton"
          },
          {
            "id": "8",
            "risposta": "Cricket"
          },
          {
            "id": "9",
            "risposta": "Scherma"
          },
          {
            "id": "10",
            "risposta": "Formula 1"
          }
        ]
      },
      {
        "id": "3",
        "descrizione": "Colore",
        "domanda": "Qual è il tuo colore preferito?",
        "risposte": [
          {
            "id": "1",
            "risposta": "Azzurro"
          },
          {
            "id": "2",
            "risposta": "Bianco"
          },
          {
            "id": "3",
            "risposta": "Nero"
          },
          {
            "id": "4",
            "risposta": "Rosso"
          },
          {
            "id": "5",
            "risposta": "Giallo"
          },
          {
            "id": "6",
            "risposta": "Verde"
          },
          {
            "id": "7",
            "risposta": "Indaco"
          },
          {
            "id": "8",
            "risposta": "Fucsia"
          },
          {
            "id": "9",
            "risposta": "Amaranto"
          },
          {
            "id": "10",
            "risposta": "Arancione"
          }
        ]
      },
      {
        "id": "4",
        "descrizione": "Gelato",
        "domanda": "Qual è il tuo gelato preferito?",
        "risposte": [
          {
            "id": "1",
            "risposta": "Pistacchio"
          },
          {
            "id": "2",
            "risposta": "Fragola"
          },
          {
            "id": "3",
            "risposta": "Limone"
          },
          {
            "id": "4",
            "risposta": "Cioccolato"
          },
          {
            "id": "5",
            "risposta": "Bacio"
          },
          {
            "id": "6",
            "risposta": "Caffè"
          },
          {
            "id": "7",
            "risposta": "Nocciola"
          },
          {
            "id": "8",
            "risposta": "Stracciatella"
          },
          {
            "id": "9",
            "risposta": "Amarena"
          },
          {
            "id": "10",
            "risposta": "Vaniglia"
          }
        ]
      },
      {
        "id": "5",
        "descrizione": "Musica",
        "domanda": "Qual è la tua musica preferita?",
        "risposte": [
          {
            "id": "1",
            "risposta": "Rock"
          },
          {
            "id": "2",
            "risposta": "Blues"
          },
          {
            "id": "3",
            "risposta": "Classica"
          },
          {
            "id": "4",
            "risposta": "Jazz"
          },
          {
            "id": "5",
            "risposta": "Folk"
          },
          {
            "id": "6",
            "risposta": "Country"
          },
          {
            "id": "7",
            "risposta": "Latina"
          },
          {
            "id": "8",
            "risposta": "Caraibica"
          },
          {
            "id": "9",
            "risposta": "Liscio"
          },
          {
            "id": "10",
            "risposta": "Popolare"
          }
        ]
      },
      {
        "id": "6",
        "descrizione": "Città",
        "domanda": "Qual è la tua città preferita?",
        "risposte": [
          {
            "id": "1",
            "risposta": "New York"
          },
          {
            "id": "2",
            "risposta": "Milano"
          },
          {
            "id": "3",
            "risposta": "Johannesburg"
          },
          {
            "id": "4",
            "risposta": "Sidney"
          },
          {
            "id": "5",
            "risposta": "Rio De Janeiro"
          },
          {
            "id": "6",
            "risposta": "Parigi"
          },
          {
            "id": "7",
            "risposta": "Londra"
          },
          {
            "id": "8",
            "risposta": "Barcellona"
          },
          {
            "id": "9",
            "risposta": "Honolulu"
          },
          {
            "id": "10",
            "risposta": "Vaitape"
          }
        ]
      },
      {
        "id": "7",
        "descrizione": "Dolce",
        "domanda": "Qual è il tuo dolce preferito?",
        "risposte": [
          {
            "id": "1",
            "risposta": "Cassata"
          },
          {
            "id": "2",
            "risposta": "Pastiera"
          },
          {
            "id": "3",
            "risposta": "Tiramisu"
          },
          {
            "id": "4",
            "risposta": "Cheesecake"
          },
          {
            "id": "5",
            "risposta": "Millefoglie"
          },
          {
            "id": "6",
            "risposta": "Crostata"
          },
          {
            "id": "7",
            "risposta": "Panettone"
          },
          {
            "id": "8",
            "risposta": "Struffoli"
          },
          {
            "id": "9",
            "risposta": "Panforte"
          },
          {
            "id": "10",
            "risposta": "Profiterol"
          }
        ]
      },
      {
        "id": "8",
        "descrizione": "Animale",
        "domanda": "Qual è il tuo animale preferito?",
        "risposte": [
          {
            "id": "1",
            "risposta": "Leone"
          },
          {
            "id": "2",
            "risposta": "Orso"
          },
          {
            "id": "3",
            "risposta": "Delfino"
          },
          {
            "id": "4",
            "risposta": "Squalo"
          },
          {
            "id": "5",
            "risposta": "Balena"
          },
          {
            "id": "6",
            "risposta": "Aquila"
          },
          {
            "id": "7",
            "risposta": "Cane"
          },
          {
            "id": "8",
            "risposta": "Cavallo"
          },
          {
            "id": "9",
            "risposta": "Panda"
          },
          {
            "id": "10",
            "risposta": "Scimmia"
          }
        ]
      },
      {
        "id": "9",
        "descrizione": "Fiore",
        "domanda": "Qual è il tuo fiore preferito?",
        "risposte": [
          {
            "id": "1",
            "risposta": "Rosa"
          },
          {
            "id": "2",
            "risposta": "Margherita"
          },
          {
            "id": "3",
            "risposta": "Ciclamino"
          },
          {
            "id": "4",
            "risposta": "Narciso"
          },
          {
            "id": "5",
            "risposta": "Ortensia"
          },
          {
            "id": "6",
            "risposta": "Viola"
          },
          {
            "id": "7",
            "risposta": "Tulipano"
          },
          {
            "id": "8",
            "risposta": "Camelia"
          },
          {
            "id": "9",
            "risposta": "Iris"
          },
          {
            "id": "10",
            "risposta": "Lilium"
          }
        ]
      },
      {
        "id": "10",
        "descrizione": "Hobby",
        "domanda": "Qual è il tuo hobby preferito?",
        "risposte": [
          {
            "id": "1",
            "risposta": "Farfalle"
          },
          {
            "id": "2",
            "risposta": "Bricolage"
          },
          {
            "id": "3",
            "risposta": "Francobolli"
          },
          {
            "id": "4",
            "risposta": "Cinefilia"
          },
          {
            "id": "5",
            "risposta": "Lettura"
          },
          {
            "id": "6",
            "risposta": "Pittura"
          },
          {
            "id": "7",
            "risposta": "Giardinaggio"
          },
          {
            "id": "8",
            "risposta": "Cucina"
          },
          {
            "id": "9",
            "risposta": "Pesca"
          },
          {
            "id": "10",
            "risposta": "Fotografia"
          }
        ]
      }
    ];
  }
}

export interface IDomanda {
  id: string,
  descrizione: string,
  domanda: string,
  risposte: IRisposta[],
}

export interface IRisposta {
  id: string,
  risposta: string,
}

export interface IDomandaSelezionata {
  idDomanda: string,
  domanda: string,
  idRisposta: string,
  risposta: string
};