import { Module } from "@nestjs/common";
import { CommitModuleBase } from "./base/commit.module.base";
import { CommitService } from "./commit.service";
import { CommitController } from "./commit.controller";
import { CommitResolver } from "./commit.resolver";

@Module({
  imports: [CommitModuleBase],
  controllers: [CommitController],
  providers: [CommitService, CommitResolver],
  exports: [CommitService],
})
export class CommitModule {}
