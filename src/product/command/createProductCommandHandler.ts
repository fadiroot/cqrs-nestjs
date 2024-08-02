import { CommandHandler } from '@nestjs/cqrs';
import { CreateProductCommand } from './create-product.command';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler {
  // Handler implementation
}