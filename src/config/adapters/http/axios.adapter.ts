import axios, {AxiosInstance} from 'axios';
import {HttpAdapter} from './http.adapter';

interface Options {
  baseURL: string;
  params: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseURL,
      params: options.params,
    });
  }

  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    // implementation
    try {
      const {data} = await this.axiosInstance<T>(url, options);

      return data;
    } catch (error) {
      throw new Error(`error fetching get ${url}`);
    }
  }
}
