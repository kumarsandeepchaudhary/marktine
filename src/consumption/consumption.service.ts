import { Catch, HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateConsumptionDto } from './dto/create-consumption.dto';
import { UpdateConsumptionDto } from './dto/update-consumption.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosError, AxiosResponse, AxiosInstance, AxiosHeaders, AxiosRequestHeaders } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import * as message from "src/constants/message";

@Injectable()
export class ConsumptionService {

  private readonly logger = new Logger(ConsumptionService.name);
  base_url = process.env.BASE_URL;

  constructor(private readonly httpService: HttpService) { }

  findAll() {
    return `This action returns all consumption`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consumption`;
  }

  public async getConsumption(headers: any, id: any, moduleId: any) {
    try {
      let data: any;
      const consumptionByID = await this.consumptionByID(headers, id);
      console.log('datass', consumptionByID);
      if (consumptionByID) {
        const consumptionByModuleID = await this.consumptionByModuleID(headers, moduleId);
        data = consumptionByModuleID;
      } else {
        data = message.NO_RECORD_FOUND;
      }
      return data;
    }
    catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: message.SOMETHING_WENT_WROMG,
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });

    }
  }

  public async consumptionByID(headers: any, id: any): Promise<AxiosResponse<any[]>> {
    const headersRequest = {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${headers.bearer}`,
    };
    console.log(headersRequest);
    const { data } = await firstValueFrom(
      this.httpService.get(this.base_url + 'users/' + id, { headers: headersRequest }).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happenedss!';
        }),
      ),
    );
    return data;
  }

  public async consumptionByModuleID(headers: any, moduleId: any): Promise<AxiosResponse<any[]>> {
    const headersRequest = {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${headers.bearer}`,
    };
    const { data } = await firstValueFrom(
      this.httpService.get(this.base_url + 'posts/' + moduleId, { headers: headersRequest }).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }

}
