#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkStepfunctionsStack } from '../lib/aws-cdk-stepfunctions-stack';

const app = new cdk.App();
new AwsCdkStepfunctionsStack(app, 'AwsCdkStepfunctionsStack');
