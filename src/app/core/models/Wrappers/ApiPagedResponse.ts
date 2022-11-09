import { ApiResponse } from "./ApiResponse";

export interface ApiPagedResponse<T> extends ApiResponse<T>{
    pageSize: number;
    pageNumber: number;
}