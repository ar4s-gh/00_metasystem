import * as graphql from "@nestjs/graphql";
import { CommitResolverBase } from "./base/commit.resolver.base";
import { Commit } from "./base/Commit";
import { CommitService } from "./commit.service";

@graphql.Resolver(() => Commit)
export class CommitResolver extends CommitResolverBase {
  constructor(protected readonly service: CommitService) {
    super(service);
  }
}
