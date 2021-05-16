export class ApiResult<T> {
        Success: boolean;
        Data: T;
        Errors: ValidationErrors[] = [];
}

export class ValidationErrors{

}