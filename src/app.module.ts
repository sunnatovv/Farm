import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { JwtModule } from '@nestjs/jwt';
import { SpecialityModule } from './speciality/speciality.module';
import { WorkerModule } from './worker/worker.module';
import { AnimalTypeModule } from './animal_type/animal_type.module';
import { AnimalsModule } from './animals/animals.module';
import { VaccinationHistoryModule } from './vaccination_history/vaccination_history.module';
import { VaccineModule } from './vaccine/vaccine.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      { envFilePath: '.env', isGlobal: true },
    ),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    SpecialityModule,
    WorkerModule,
    AnimalTypeModule,
    AnimalsModule,
    VaccinationHistoryModule,
    VaccineModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
