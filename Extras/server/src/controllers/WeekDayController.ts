import { Request, Response } from 'express';

export default class WeekDayController {
  async index(request: Request, response: Response){
    const weekdays = [
      { value: '0', label: 'Domingo' },
      { value: '1', label: 'Segunda-Feira' },
      { value: '2', label: 'Terça-Feira' },
      { value: '3', label: 'Quarta-Feira' },
      { value: '4', label: 'Quinta-Feira' },
      { value: '5', label: 'Sexta-Feira' },
      { value: '6', label: 'Sábado' }
    ]
    
    response.send(weekdays);
  }

}

