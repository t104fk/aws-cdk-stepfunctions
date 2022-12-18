import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs";
import * as sfn from "aws-cdk-lib/aws-stepfunctions";
import * as tasks from "aws-cdk-lib/aws-stepfunctions-tasks";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lg from "aws-cdk-lib/aws-logs";
import { LogLevel } from "aws-cdk-lib/aws-stepfunctions";
import { RemovalPolicy } from "aws-cdk-lib";

export class StepfunctionsStack extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const hello = new lambda.NodejsFunction(this, "HelloFunction", {
      entry: "handlers/hello.ts",
      handler: "handler",
      functionName: "HelloStepfunctionsHandler",
    });

    const logGroupName = "stateMachineLogGroup";
    const logGroup = new lg.LogGroup(this, logGroupName, {
      logGroupName,
      removalPolicy: RemovalPolicy.RETAIN,
      retention: lg.RetentionDays.ONE_YEAR,
    });

    const stateMachineName = "MyExpressStateMachine";
    const stateMachine = new sfn.StateMachine(this, stateMachineName, {
      definition: new tasks.LambdaInvoke(this, "InvokeHelloTask", {
        lambdaFunction: hello,
      }).next(new sfn.Succeed(this, "GreetedWorld")),
      stateMachineName: stateMachineName,
      stateMachineType: sfn.StateMachineType.EXPRESS,
      logs: {
        destination: logGroup,
        level: LogLevel.ALL,
      },
    });

    const api = new apigateway.StepFunctionsRestApi(this, "HelloStepApi", {
      stateMachine: stateMachine,
    });
  }
}
