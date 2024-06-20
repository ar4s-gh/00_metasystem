/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Metric as PrismaMetric,
  Commit as PrismaCommit,
} from "@prisma/client";

export class MetricServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MetricCountArgs, "select">): Promise<number> {
    return this.prisma.metric.count(args);
  }

  async metrics(args: Prisma.MetricFindManyArgs): Promise<PrismaMetric[]> {
    return this.prisma.metric.findMany(args);
  }
  async metric(
    args: Prisma.MetricFindUniqueArgs
  ): Promise<PrismaMetric | null> {
    return this.prisma.metric.findUnique(args);
  }
  async createMetric(args: Prisma.MetricCreateArgs): Promise<PrismaMetric> {
    return this.prisma.metric.create(args);
  }
  async updateMetric(args: Prisma.MetricUpdateArgs): Promise<PrismaMetric> {
    return this.prisma.metric.update(args);
  }
  async deleteMetric(args: Prisma.MetricDeleteArgs): Promise<PrismaMetric> {
    return this.prisma.metric.delete(args);
  }

  async getCommit(parentId: string): Promise<PrismaCommit | null> {
    return this.prisma.metric
      .findUnique({
        where: { id: parentId },
      })
      .commit();
  }
}
