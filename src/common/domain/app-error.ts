export class AppError extends Error{
    // Aquia cria as instâncias de erro!
    public readonly statuscode: number;

    constructor(message: string, statusCode = 400){
        super(message)
        this.statuscode = statusCode
    }
}