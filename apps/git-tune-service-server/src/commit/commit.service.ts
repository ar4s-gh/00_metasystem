import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommitServiceBase } from "./base/commit.service.base";

@Injectable()
export class CommitService extends CommitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
