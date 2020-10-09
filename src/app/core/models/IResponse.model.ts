export interface IResponse {
    code: number;
    responseMessage?: string | undefined;
    requestDate: Date;
    responseDate: Date;
    success: boolean;
    statusCode: number;
}