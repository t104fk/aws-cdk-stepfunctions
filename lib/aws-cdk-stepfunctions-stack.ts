import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

import { StepfunctionsStack } from "./stepfunctions-stack";

export class AwsCdkStepfunctionsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const sfn = new StepfunctionsStack(this, "StepfunctionsStack");
  }
}
