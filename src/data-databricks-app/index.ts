// https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#name DataDatabricksApp#name}
  */
  readonly name: string;
}
export interface DataDatabricksAppAppActiveDeploymentDeploymentArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}
  */
  readonly sourceCodePath?: string;
}

export function dataDatabricksAppAppActiveDeploymentDeploymentArtifactsToTerraform(struct?: DataDatabricksAppAppActiveDeploymentDeploymentArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_code_path: cdktf.stringToTerraform(struct!.sourceCodePath),
  }
}


export function dataDatabricksAppAppActiveDeploymentDeploymentArtifactsToHclTerraform(struct?: DataDatabricksAppAppActiveDeploymentDeploymentArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_code_path: {
      value: cdktf.stringToHclTerraform(struct!.sourceCodePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppAppActiveDeploymentDeploymentArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceCodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodePath = this._sourceCodePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppAppActiveDeploymentDeploymentArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceCodePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceCodePath = value.sourceCodePath;
    }
  }

  // source_code_path - computed: true, optional: true, required: false
  private _sourceCodePath?: string; 
  public get sourceCodePath() {
    return this.getStringAttribute('source_code_path');
  }
  public set sourceCodePath(value: string) {
    this._sourceCodePath = value;
  }
  public resetSourceCodePath() {
    this._sourceCodePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodePathInput() {
    return this._sourceCodePath;
  }
}
export interface DataDatabricksAppAppActiveDeploymentStatus {
}

export function dataDatabricksAppAppActiveDeploymentStatusToTerraform(struct?: DataDatabricksAppAppActiveDeploymentStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksAppAppActiveDeploymentStatusToHclTerraform(struct?: DataDatabricksAppAppActiveDeploymentStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksAppAppActiveDeploymentStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppAppActiveDeploymentStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppAppActiveDeploymentStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataDatabricksAppAppActiveDeployment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#deployment_id DataDatabricksApp#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#mode DataDatabricksApp#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}
  */
  readonly sourceCodePath?: string;
}

export function dataDatabricksAppAppActiveDeploymentToTerraform(struct?: DataDatabricksAppAppActiveDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_id: cdktf.stringToTerraform(struct!.deploymentId),
    mode: cdktf.stringToTerraform(struct!.mode),
    source_code_path: cdktf.stringToTerraform(struct!.sourceCodePath),
  }
}


export function dataDatabricksAppAppActiveDeploymentToHclTerraform(struct?: DataDatabricksAppAppActiveDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_id: {
      value: cdktf.stringToHclTerraform(struct!.deploymentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_code_path: {
      value: cdktf.stringToHclTerraform(struct!.sourceCodePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppAppActiveDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppAppActiveDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sourceCodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodePath = this._sourceCodePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppAppActiveDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deploymentId = undefined;
      this._mode = undefined;
      this._sourceCodePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deploymentId = value.deploymentId;
      this._mode = value.mode;
      this._sourceCodePath = value.sourceCodePath;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // deployment_artifacts - computed: true, optional: false, required: false
  private _deploymentArtifacts = new DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference(this, "deployment_artifacts");
  public get deploymentArtifacts() {
    return this._deploymentArtifacts;
  }

  // deployment_id - computed: true, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // source_code_path - computed: true, optional: true, required: false
  private _sourceCodePath?: string; 
  public get sourceCodePath() {
    return this.getStringAttribute('source_code_path');
  }
  public set sourceCodePath(value: string) {
    this._sourceCodePath = value;
  }
  public resetSourceCodePath() {
    this._sourceCodePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodePathInput() {
    return this._sourceCodePath;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataDatabricksAppAppActiveDeploymentStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}
export interface DataDatabricksAppAppAppStatus {
}

export function dataDatabricksAppAppAppStatusToTerraform(struct?: DataDatabricksAppAppAppStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksAppAppAppStatusToHclTerraform(struct?: DataDatabricksAppAppAppStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksAppAppAppStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppAppAppStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppAppAppStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataDatabricksAppAppComputeStatus {
}

export function dataDatabricksAppAppComputeStatusToTerraform(struct?: DataDatabricksAppAppComputeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksAppAppComputeStatusToHclTerraform(struct?: DataDatabricksAppAppComputeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksAppAppComputeStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppAppComputeStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppAppComputeStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataDatabricksAppAppPendingDeploymentDeploymentArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}
  */
  readonly sourceCodePath?: string;
}

export function dataDatabricksAppAppPendingDeploymentDeploymentArtifactsToTerraform(struct?: DataDatabricksAppAppPendingDeploymentDeploymentArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_code_path: cdktf.stringToTerraform(struct!.sourceCodePath),
  }
}


export function dataDatabricksAppAppPendingDeploymentDeploymentArtifactsToHclTerraform(struct?: DataDatabricksAppAppPendingDeploymentDeploymentArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_code_path: {
      value: cdktf.stringToHclTerraform(struct!.sourceCodePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppAppPendingDeploymentDeploymentArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceCodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodePath = this._sourceCodePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppAppPendingDeploymentDeploymentArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceCodePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceCodePath = value.sourceCodePath;
    }
  }

  // source_code_path - computed: true, optional: true, required: false
  private _sourceCodePath?: string; 
  public get sourceCodePath() {
    return this.getStringAttribute('source_code_path');
  }
  public set sourceCodePath(value: string) {
    this._sourceCodePath = value;
  }
  public resetSourceCodePath() {
    this._sourceCodePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodePathInput() {
    return this._sourceCodePath;
  }
}
export interface DataDatabricksAppAppPendingDeploymentStatus {
}

export function dataDatabricksAppAppPendingDeploymentStatusToTerraform(struct?: DataDatabricksAppAppPendingDeploymentStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksAppAppPendingDeploymentStatusToHclTerraform(struct?: DataDatabricksAppAppPendingDeploymentStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksAppAppPendingDeploymentStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppAppPendingDeploymentStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppAppPendingDeploymentStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataDatabricksAppAppPendingDeployment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#deployment_id DataDatabricksApp#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#mode DataDatabricksApp#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}
  */
  readonly sourceCodePath?: string;
}

export function dataDatabricksAppAppPendingDeploymentToTerraform(struct?: DataDatabricksAppAppPendingDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_id: cdktf.stringToTerraform(struct!.deploymentId),
    mode: cdktf.stringToTerraform(struct!.mode),
    source_code_path: cdktf.stringToTerraform(struct!.sourceCodePath),
  }
}


export function dataDatabricksAppAppPendingDeploymentToHclTerraform(struct?: DataDatabricksAppAppPendingDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_id: {
      value: cdktf.stringToHclTerraform(struct!.deploymentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_code_path: {
      value: cdktf.stringToHclTerraform(struct!.sourceCodePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppAppPendingDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppAppPendingDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sourceCodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodePath = this._sourceCodePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppAppPendingDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deploymentId = undefined;
      this._mode = undefined;
      this._sourceCodePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deploymentId = value.deploymentId;
      this._mode = value.mode;
      this._sourceCodePath = value.sourceCodePath;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // deployment_artifacts - computed: true, optional: false, required: false
  private _deploymentArtifacts = new DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference(this, "deployment_artifacts");
  public get deploymentArtifacts() {
    return this._deploymentArtifacts;
  }

  // deployment_id - computed: true, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // source_code_path - computed: true, optional: true, required: false
  private _sourceCodePath?: string; 
  public get sourceCodePath() {
    return this.getStringAttribute('source_code_path');
  }
  public set sourceCodePath(value: string) {
    this._sourceCodePath = value;
  }
  public resetSourceCodePath() {
    this._sourceCodePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodePathInput() {
    return this._sourceCodePath;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataDatabricksAppAppPendingDeploymentStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}
export interface DataDatabricksAppAppResourcesJob {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#id DataDatabricksApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#permission DataDatabricksApp#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppAppResourcesJobToTerraform(struct?: DataDatabricksAppAppResourcesJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppAppResourcesJobToHclTerraform(struct?: DataDatabricksAppAppResourcesJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppAppResourcesJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppAppResourcesJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppAppResourcesJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permission = value.permission;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // permission - computed: true, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface DataDatabricksAppAppResourcesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#key DataDatabricksApp#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#permission DataDatabricksApp#permission}
  */
  readonly permission: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#scope DataDatabricksApp#scope}
  */
  readonly scope: string;
}

export function dataDatabricksAppAppResourcesSecretToTerraform(struct?: DataDatabricksAppAppResourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    permission: cdktf.stringToTerraform(struct!.permission),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dataDatabricksAppAppResourcesSecretToHclTerraform(struct?: DataDatabricksAppAppResourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppAppResourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppAppResourcesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppAppResourcesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._permission = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._permission = value.permission;
      this._scope = value.scope;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // permission - computed: true, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // scope - computed: true, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface DataDatabricksAppAppResourcesServingEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#name DataDatabricksApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#permission DataDatabricksApp#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppAppResourcesServingEndpointToTerraform(struct?: DataDatabricksAppAppResourcesServingEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppAppResourcesServingEndpointToHclTerraform(struct?: DataDatabricksAppAppResourcesServingEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppAppResourcesServingEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppAppResourcesServingEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppAppResourcesServingEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permission = value.permission;
    }
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // permission - computed: true, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface DataDatabricksAppAppResourcesSqlWarehouse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#id DataDatabricksApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#permission DataDatabricksApp#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppAppResourcesSqlWarehouseToTerraform(struct?: DataDatabricksAppAppResourcesSqlWarehouse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppAppResourcesSqlWarehouseToHclTerraform(struct?: DataDatabricksAppAppResourcesSqlWarehouse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppAppResourcesSqlWarehouseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppAppResourcesSqlWarehouse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppAppResourcesSqlWarehouse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permission = value.permission;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // permission - computed: true, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface DataDatabricksAppAppResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#description DataDatabricksApp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#job DataDatabricksApp#job}
  */
  readonly job?: DataDatabricksAppAppResourcesJob;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#name DataDatabricksApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#secret DataDatabricksApp#secret}
  */
  readonly secret?: DataDatabricksAppAppResourcesSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#serving_endpoint DataDatabricksApp#serving_endpoint}
  */
  readonly servingEndpoint?: DataDatabricksAppAppResourcesServingEndpoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#sql_warehouse DataDatabricksApp#sql_warehouse}
  */
  readonly sqlWarehouse?: DataDatabricksAppAppResourcesSqlWarehouse;
}

export function dataDatabricksAppAppResourcesToTerraform(struct?: DataDatabricksAppAppResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    job: dataDatabricksAppAppResourcesJobToTerraform(struct!.job),
    name: cdktf.stringToTerraform(struct!.name),
    secret: dataDatabricksAppAppResourcesSecretToTerraform(struct!.secret),
    serving_endpoint: dataDatabricksAppAppResourcesServingEndpointToTerraform(struct!.servingEndpoint),
    sql_warehouse: dataDatabricksAppAppResourcesSqlWarehouseToTerraform(struct!.sqlWarehouse),
  }
}


export function dataDatabricksAppAppResourcesToHclTerraform(struct?: DataDatabricksAppAppResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job: {
      value: dataDatabricksAppAppResourcesJobToHclTerraform(struct!.job),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppAppResourcesJob",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataDatabricksAppAppResourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppAppResourcesSecret",
    },
    serving_endpoint: {
      value: dataDatabricksAppAppResourcesServingEndpointToHclTerraform(struct!.servingEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppAppResourcesServingEndpoint",
    },
    sql_warehouse: {
      value: dataDatabricksAppAppResourcesSqlWarehouseToHclTerraform(struct!.sqlWarehouse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppAppResourcesSqlWarehouse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppAppResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksAppAppResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._job?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.job = this._job?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._servingEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servingEndpoint = this._servingEndpoint?.internalValue;
    }
    if (this._sqlWarehouse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlWarehouse = this._sqlWarehouse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppAppResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._job.internalValue = undefined;
      this._name = undefined;
      this._secret.internalValue = undefined;
      this._servingEndpoint.internalValue = undefined;
      this._sqlWarehouse.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._job.internalValue = value.job;
      this._name = value.name;
      this._secret.internalValue = value.secret;
      this._servingEndpoint.internalValue = value.servingEndpoint;
      this._sqlWarehouse.internalValue = value.sqlWarehouse;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // job - computed: true, optional: true, required: false
  private _job = new DataDatabricksAppAppResourcesJobOutputReference(this, "job");
  public get job() {
    return this._job;
  }
  public putJob(value: DataDatabricksAppAppResourcesJob) {
    this._job.internalValue = value;
  }
  public resetJob() {
    this._job.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job.internalValue;
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // secret - computed: true, optional: true, required: false
  private _secret = new DataDatabricksAppAppResourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataDatabricksAppAppResourcesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // serving_endpoint - computed: true, optional: true, required: false
  private _servingEndpoint = new DataDatabricksAppAppResourcesServingEndpointOutputReference(this, "serving_endpoint");
  public get servingEndpoint() {
    return this._servingEndpoint;
  }
  public putServingEndpoint(value: DataDatabricksAppAppResourcesServingEndpoint) {
    this._servingEndpoint.internalValue = value;
  }
  public resetServingEndpoint() {
    this._servingEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingEndpointInput() {
    return this._servingEndpoint.internalValue;
  }

  // sql_warehouse - computed: true, optional: true, required: false
  private _sqlWarehouse = new DataDatabricksAppAppResourcesSqlWarehouseOutputReference(this, "sql_warehouse");
  public get sqlWarehouse() {
    return this._sqlWarehouse;
  }
  public putSqlWarehouse(value: DataDatabricksAppAppResourcesSqlWarehouse) {
    this._sqlWarehouse.internalValue = value;
  }
  public resetSqlWarehouse() {
    this._sqlWarehouse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlWarehouseInput() {
    return this._sqlWarehouse.internalValue;
  }
}

export class DataDatabricksAppAppResourcesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksAppAppResources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAppAppResourcesOutputReference {
    return new DataDatabricksAppAppResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAppApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#budget_policy_id DataDatabricksApp#budget_policy_id}
  */
  readonly budgetPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#description DataDatabricksApp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#name DataDatabricksApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#resources DataDatabricksApp#resources}
  */
  readonly resources?: DataDatabricksAppAppResources[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#user_api_scopes DataDatabricksApp#user_api_scopes}
  */
  readonly userApiScopes?: string[];
}

export function dataDatabricksAppAppToTerraform(struct?: DataDatabricksAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    budget_policy_id: cdktf.stringToTerraform(struct!.budgetPolicyId),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    resources: cdktf.listMapper(dataDatabricksAppAppResourcesToTerraform, false)(struct!.resources),
    user_api_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userApiScopes),
  }
}


export function dataDatabricksAppAppToHclTerraform(struct?: DataDatabricksAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    budget_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.budgetPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(dataDatabricksAppAppResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAppAppResourcesList",
    },
    user_api_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userApiScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._budgetPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.budgetPolicyId = this._budgetPolicyId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._userApiScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.userApiScopes = this._userApiScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._budgetPolicyId = undefined;
      this._description = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
      this._userApiScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._budgetPolicyId = value.budgetPolicyId;
      this._description = value.description;
      this._name = value.name;
      this._resources.internalValue = value.resources;
      this._userApiScopes = value.userApiScopes;
    }
  }

  // active_deployment - computed: true, optional: false, required: false
  private _activeDeployment = new DataDatabricksAppAppActiveDeploymentOutputReference(this, "active_deployment");
  public get activeDeployment() {
    return this._activeDeployment;
  }

  // app_status - computed: true, optional: false, required: false
  private _appStatus = new DataDatabricksAppAppAppStatusOutputReference(this, "app_status");
  public get appStatus() {
    return this._appStatus;
  }

  // budget_policy_id - computed: true, optional: true, required: false
  private _budgetPolicyId?: string; 
  public get budgetPolicyId() {
    return this.getStringAttribute('budget_policy_id');
  }
  public set budgetPolicyId(value: string) {
    this._budgetPolicyId = value;
  }
  public resetBudgetPolicyId() {
    this._budgetPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetPolicyIdInput() {
    return this._budgetPolicyId;
  }

  // compute_status - computed: true, optional: false, required: false
  private _computeStatus = new DataDatabricksAppAppComputeStatusOutputReference(this, "compute_status");
  public get computeStatus() {
    return this._computeStatus;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // default_source_code_path - computed: true, optional: false, required: false
  public get defaultSourceCodePath() {
    return this.getStringAttribute('default_source_code_path');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // effective_budget_policy_id - computed: true, optional: false, required: false
  public get effectiveBudgetPolicyId() {
    return this.getStringAttribute('effective_budget_policy_id');
  }

  // effective_user_api_scopes - computed: true, optional: false, required: false
  public get effectiveUserApiScopes() {
    return this.getListAttribute('effective_user_api_scopes');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // oauth2_app_client_id - computed: true, optional: false, required: false
  public get oauth2AppClientId() {
    return this.getStringAttribute('oauth2_app_client_id');
  }

  // oauth2_app_integration_id - computed: true, optional: false, required: false
  public get oauth2AppIntegrationId() {
    return this.getStringAttribute('oauth2_app_integration_id');
  }

  // pending_deployment - computed: true, optional: false, required: false
  private _pendingDeployment = new DataDatabricksAppAppPendingDeploymentOutputReference(this, "pending_deployment");
  public get pendingDeployment() {
    return this._pendingDeployment;
  }

  // resources - computed: true, optional: true, required: false
  private _resources = new DataDatabricksAppAppResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataDatabricksAppAppResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // service_principal_client_id - computed: true, optional: false, required: false
  public get servicePrincipalClientId() {
    return this.getStringAttribute('service_principal_client_id');
  }

  // service_principal_id - computed: true, optional: false, required: false
  public get servicePrincipalId() {
    return this.getNumberAttribute('service_principal_id');
  }

  // service_principal_name - computed: true, optional: false, required: false
  public get servicePrincipalName() {
    return this.getStringAttribute('service_principal_name');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // updater - computed: true, optional: false, required: false
  public get updater() {
    return this.getStringAttribute('updater');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_api_scopes - computed: true, optional: true, required: false
  private _userApiScopes?: string[]; 
  public get userApiScopes() {
    return this.getListAttribute('user_api_scopes');
  }
  public set userApiScopes(value: string[]) {
    this._userApiScopes = value;
  }
  public resetUserApiScopes() {
    this._userApiScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userApiScopesInput() {
    return this._userApiScopes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app databricks_app}
*/
export class DataDatabricksApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksApp to import
  * @param importFromId The id of the existing DataDatabricksApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/data-sources/app databricks_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAppConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAppConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_app',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.73.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: true, optional: false, required: false
  private _app = new DataDatabricksAppAppOutputReference(this, "app");
  public get app() {
    return this._app;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
