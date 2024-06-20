import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommitService } from "./commit.service";
import { CommitControllerBase } from "./base/commit.controller.base";

@swagger.ApiTags("commits")
@common.Controller("commits")
export class CommitController extends CommitControllerBase {
  constructor(protected readonly service: CommitService) {
    super(service);
  }
}
