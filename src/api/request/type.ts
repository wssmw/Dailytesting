import type { AxiosRequestConfig,AxiosResponse } from "axios";

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
	isShowLoading?: boolean;
    interceptors?: RequestInterceptors<T>

}

export interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}