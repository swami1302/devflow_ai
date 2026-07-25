export declare class LoggerService {
    private logger;
    constructor();
    log(message: string, meta?: any): void;
    error(message: string, error?: any, meta?: any): void;
    warn(message: string, meta?: any): void;
    debug(message: string, meta?: any): void;
}
