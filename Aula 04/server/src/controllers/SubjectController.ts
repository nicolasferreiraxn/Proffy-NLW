import { Request, Response } from 'express';

export default class SubjectController {
  async index(request: Request, response: Response){
    const subjects = [{value:'Artes',label:'Artes'},
    {value:'Biografia',label:'Biografia'},
    {value:'Biologia',label:'Biologia'},
    {value:'Espanhol',label:'Espanhol'},
    {value:'Física',label:'Física'},
    {value:'Geografia',label:'Geografia'},
    {value:'Gramática',label:'Gramática'},
    {value:'História',label:'História'},
    {value:'História do Brasil',label:'História do Brasil'},
    {value:'História Geral',label:'História Geral'},
    {value:'Inglês',label:'Inglês'},
    {value:'Literatura',label:'Literatura'},
    {value:'Matemática',label:'Matemática'},
    {value:'Português',label:'Português'},
    {value:'Química',label:'Química'},
    {value:'Redação',label:'Redação'},
    {value:'Guerras Mundiais',label:'Guerras Mundiais'},
    ]

    response.send(subjects);
  }

}

