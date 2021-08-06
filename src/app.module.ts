import { Module } from '@nestjs/common';
import { SatellitesModule } from './satellites/satellites.module';

@Module({
  imports: [SatellitesModule],
})
export class AppModule {}
