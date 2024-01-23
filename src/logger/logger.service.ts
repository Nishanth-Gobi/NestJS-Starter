import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService extends ConsoleLogger {
  error(message: any, ...optionalParams: any[]) {
    // mail notification

    super.error(message, ...optionalParams);
  }
}
