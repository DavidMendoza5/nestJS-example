import { Module } from '@nestjs/common';
import { UnitOfWork } from './unit-of-work.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [UnitOfWork],
  exports: [UnitOfWork]
})
export class UnitofworkModule {}
