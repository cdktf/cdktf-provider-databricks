/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksExternalLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#id DataDatabricksExternalLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}
  */
  readonly name: string;
  /**
  * external_location_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#external_location_info DataDatabricksExternalLocation#external_location_info}
  */
  readonly externalLocationInfo?: DataDatabricksExternalLocationExternalLocationInfo;
}
export interface DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#algorithm DataDatabricksExternalLocation#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#aws_kms_key_arn DataDatabricksExternalLocation#aws_kms_key_arn}
  */
  readonly awsKmsKeyArn?: string;
}

export function dataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsToTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference | DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    aws_kms_key_arn: cdktf.stringToTerraform(struct!.awsKmsKeyArn),
  }
}


export function dataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsToHclTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference | DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsKmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._awsKmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsKmsKeyArn = this._awsKmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._awsKmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._awsKmsKeyArn = value.awsKmsKeyArn;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // aws_kms_key_arn - computed: false, optional: true, required: false
  private _awsKmsKeyArn?: string; 
  public get awsKmsKeyArn() {
    return this.getStringAttribute('aws_kms_key_arn');
  }
  public set awsKmsKeyArn(value: string) {
    this._awsKmsKeyArn = value;
  }
  public resetAwsKmsKeyArn() {
    this._awsKmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKmsKeyArnInput() {
    return this._awsKmsKeyArn;
  }
}
export interface DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails {
  /**
  * sse_encryption_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#sse_encryption_details DataDatabricksExternalLocation#sse_encryption_details}
  */
  readonly sseEncryptionDetails?: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails;
}

export function dataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsToTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference | DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sse_encryption_details: dataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsToTerraform(struct!.sseEncryptionDetails),
  }
}


export function dataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsToHclTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference | DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sse_encryption_details: {
      value: dataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsToHclTerraform(struct!.sseEncryptionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sseEncryptionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseEncryptionDetails = this._sseEncryptionDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sseEncryptionDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sseEncryptionDetails.internalValue = value.sseEncryptionDetails;
    }
  }

  // sse_encryption_details - computed: false, optional: true, required: false
  private _sseEncryptionDetails = new DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference(this, "sse_encryption_details");
  public get sseEncryptionDetails() {
    return this._sseEncryptionDetails;
  }
  public putSseEncryptionDetails(value: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails) {
    this._sseEncryptionDetails.internalValue = value;
  }
  public resetSseEncryptionDetails() {
    this._sseEncryptionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseEncryptionDetailsInput() {
    return this._sseEncryptionDetails.internalValue;
  }
}
export interface DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}
  */
  readonly managedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}
  */
  readonly queueUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#resource_group DataDatabricksExternalLocation#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#subscription_id DataDatabricksExternalLocation#subscription_id}
  */
  readonly subscriptionId?: string;
}

export function dataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsToTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference | DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_resource_id: cdktf.stringToTerraform(struct!.managedResourceId),
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function dataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsToHclTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference | DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.managedResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_url: {
      value: cdktf.stringToHclTerraform(struct!.queueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedResourceId = this._managedResourceId;
    }
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedResourceId = undefined;
      this._queueUrl = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedResourceId = value.managedResourceId;
      this._queueUrl = value.queueUrl;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
    }
  }

  // managed_resource_id - computed: false, optional: true, required: false
  private _managedResourceId?: string; 
  public get managedResourceId() {
    return this.getStringAttribute('managed_resource_id');
  }
  public set managedResourceId(value: string) {
    this._managedResourceId = value;
  }
  public resetManagedResourceId() {
    this._managedResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceIdInput() {
    return this._managedResourceId;
  }

  // queue_url - computed: false, optional: true, required: false
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  public resetQueueUrl() {
    this._queueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}
export interface DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}
  */
  readonly managedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#subscription_name DataDatabricksExternalLocation#subscription_name}
  */
  readonly subscriptionName?: string;
}

export function dataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubToTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference | DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_resource_id: cdktf.stringToTerraform(struct!.managedResourceId),
    subscription_name: cdktf.stringToTerraform(struct!.subscriptionName),
  }
}


export function dataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubToHclTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference | DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.managedResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_name: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedResourceId = this._managedResourceId;
    }
    if (this._subscriptionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionName = this._subscriptionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedResourceId = undefined;
      this._subscriptionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedResourceId = value.managedResourceId;
      this._subscriptionName = value.subscriptionName;
    }
  }

  // managed_resource_id - computed: false, optional: true, required: false
  private _managedResourceId?: string; 
  public get managedResourceId() {
    return this.getStringAttribute('managed_resource_id');
  }
  public set managedResourceId(value: string) {
    this._managedResourceId = value;
  }
  public resetManagedResourceId() {
    this._managedResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceIdInput() {
    return this._managedResourceId;
  }

  // subscription_name - computed: false, optional: true, required: false
  private _subscriptionName?: string; 
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }
  public resetSubscriptionName() {
    this._subscriptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionNameInput() {
    return this._subscriptionName;
  }
}
export interface DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}
  */
  readonly managedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}
  */
  readonly queueUrl?: string;
}

export function dataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsToTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference | DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_resource_id: cdktf.stringToTerraform(struct!.managedResourceId),
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
  }
}


export function dataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsToHclTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference | DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.managedResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_url: {
      value: cdktf.stringToHclTerraform(struct!.queueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedResourceId = this._managedResourceId;
    }
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedResourceId = undefined;
      this._queueUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedResourceId = value.managedResourceId;
      this._queueUrl = value.queueUrl;
    }
  }

  // managed_resource_id - computed: false, optional: true, required: false
  private _managedResourceId?: string; 
  public get managedResourceId() {
    return this.getStringAttribute('managed_resource_id');
  }
  public set managedResourceId(value: string) {
    this._managedResourceId = value;
  }
  public resetManagedResourceId() {
    this._managedResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceIdInput() {
    return this._managedResourceId;
  }

  // queue_url - computed: false, optional: true, required: false
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  public resetQueueUrl() {
    this._queueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }
}
export interface DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}
  */
  readonly managedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}
  */
  readonly queueUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#resource_group DataDatabricksExternalLocation#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#subscription_id DataDatabricksExternalLocation#subscription_id}
  */
  readonly subscriptionId?: string;
}

export function dataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsToTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference | DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_resource_id: cdktf.stringToTerraform(struct!.managedResourceId),
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function dataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsToHclTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference | DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.managedResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_url: {
      value: cdktf.stringToHclTerraform(struct!.queueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedResourceId = this._managedResourceId;
    }
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedResourceId = undefined;
      this._queueUrl = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedResourceId = value.managedResourceId;
      this._queueUrl = value.queueUrl;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
    }
  }

  // managed_resource_id - computed: false, optional: true, required: false
  private _managedResourceId?: string; 
  public get managedResourceId() {
    return this.getStringAttribute('managed_resource_id');
  }
  public set managedResourceId(value: string) {
    this._managedResourceId = value;
  }
  public resetManagedResourceId() {
    this._managedResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceIdInput() {
    return this._managedResourceId;
  }

  // queue_url - computed: false, optional: true, required: false
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  public resetQueueUrl() {
    this._queueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}
export interface DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}
  */
  readonly managedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#subscription_name DataDatabricksExternalLocation#subscription_name}
  */
  readonly subscriptionName?: string;
}

export function dataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubToTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference | DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_resource_id: cdktf.stringToTerraform(struct!.managedResourceId),
    subscription_name: cdktf.stringToTerraform(struct!.subscriptionName),
  }
}


export function dataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubToHclTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference | DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.managedResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_name: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedResourceId = this._managedResourceId;
    }
    if (this._subscriptionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionName = this._subscriptionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedResourceId = undefined;
      this._subscriptionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedResourceId = value.managedResourceId;
      this._subscriptionName = value.subscriptionName;
    }
  }

  // managed_resource_id - computed: false, optional: true, required: false
  private _managedResourceId?: string; 
  public get managedResourceId() {
    return this.getStringAttribute('managed_resource_id');
  }
  public set managedResourceId(value: string) {
    this._managedResourceId = value;
  }
  public resetManagedResourceId() {
    this._managedResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceIdInput() {
    return this._managedResourceId;
  }

  // subscription_name - computed: false, optional: true, required: false
  private _subscriptionName?: string; 
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }
  public resetSubscriptionName() {
    this._subscriptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionNameInput() {
    return this._subscriptionName;
  }
}
export interface DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}
  */
  readonly managedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}
  */
  readonly queueUrl?: string;
}

export function dataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsToTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference | DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_resource_id: cdktf.stringToTerraform(struct!.managedResourceId),
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
  }
}


export function dataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsToHclTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference | DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.managedResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_url: {
      value: cdktf.stringToHclTerraform(struct!.queueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedResourceId = this._managedResourceId;
    }
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedResourceId = undefined;
      this._queueUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedResourceId = value.managedResourceId;
      this._queueUrl = value.queueUrl;
    }
  }

  // managed_resource_id - computed: false, optional: true, required: false
  private _managedResourceId?: string; 
  public get managedResourceId() {
    return this.getStringAttribute('managed_resource_id');
  }
  public set managedResourceId(value: string) {
    this._managedResourceId = value;
  }
  public resetManagedResourceId() {
    this._managedResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceIdInput() {
    return this._managedResourceId;
  }

  // queue_url - computed: false, optional: true, required: false
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  public resetQueueUrl() {
    this._queueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }
}
export interface DataDatabricksExternalLocationExternalLocationInfoFileEventQueue {
  /**
  * managed_aqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#managed_aqs DataDatabricksExternalLocation#managed_aqs}
  */
  readonly managedAqs?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs;
  /**
  * managed_pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#managed_pubsub DataDatabricksExternalLocation#managed_pubsub}
  */
  readonly managedPubsub?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub;
  /**
  * managed_sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#managed_sqs DataDatabricksExternalLocation#managed_sqs}
  */
  readonly managedSqs?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs;
  /**
  * provided_aqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#provided_aqs DataDatabricksExternalLocation#provided_aqs}
  */
  readonly providedAqs?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs;
  /**
  * provided_pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#provided_pubsub DataDatabricksExternalLocation#provided_pubsub}
  */
  readonly providedPubsub?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub;
  /**
  * provided_sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#provided_sqs DataDatabricksExternalLocation#provided_sqs}
  */
  readonly providedSqs?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs;
}

export function dataDatabricksExternalLocationExternalLocationInfoFileEventQueueToTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference | DataDatabricksExternalLocationExternalLocationInfoFileEventQueue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_aqs: dataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsToTerraform(struct!.managedAqs),
    managed_pubsub: dataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubToTerraform(struct!.managedPubsub),
    managed_sqs: dataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsToTerraform(struct!.managedSqs),
    provided_aqs: dataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsToTerraform(struct!.providedAqs),
    provided_pubsub: dataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubToTerraform(struct!.providedPubsub),
    provided_sqs: dataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsToTerraform(struct!.providedSqs),
  }
}


export function dataDatabricksExternalLocationExternalLocationInfoFileEventQueueToHclTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference | DataDatabricksExternalLocationExternalLocationInfoFileEventQueue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_aqs: {
      value: dataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsToHclTerraform(struct!.managedAqs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsList",
    },
    managed_pubsub: {
      value: dataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubToHclTerraform(struct!.managedPubsub),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubList",
    },
    managed_sqs: {
      value: dataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsToHclTerraform(struct!.managedSqs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsList",
    },
    provided_aqs: {
      value: dataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsToHclTerraform(struct!.providedAqs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsList",
    },
    provided_pubsub: {
      value: dataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubToHclTerraform(struct!.providedPubsub),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubList",
    },
    provided_sqs: {
      value: dataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsToHclTerraform(struct!.providedSqs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksExternalLocationExternalLocationInfoFileEventQueue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedAqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedAqs = this._managedAqs?.internalValue;
    }
    if (this._managedPubsub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedPubsub = this._managedPubsub?.internalValue;
    }
    if (this._managedSqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedSqs = this._managedSqs?.internalValue;
    }
    if (this._providedAqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providedAqs = this._providedAqs?.internalValue;
    }
    if (this._providedPubsub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providedPubsub = this._providedPubsub?.internalValue;
    }
    if (this._providedSqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providedSqs = this._providedSqs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedAqs.internalValue = undefined;
      this._managedPubsub.internalValue = undefined;
      this._managedSqs.internalValue = undefined;
      this._providedAqs.internalValue = undefined;
      this._providedPubsub.internalValue = undefined;
      this._providedSqs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedAqs.internalValue = value.managedAqs;
      this._managedPubsub.internalValue = value.managedPubsub;
      this._managedSqs.internalValue = value.managedSqs;
      this._providedAqs.internalValue = value.providedAqs;
      this._providedPubsub.internalValue = value.providedPubsub;
      this._providedSqs.internalValue = value.providedSqs;
    }
  }

  // managed_aqs - computed: false, optional: true, required: false
  private _managedAqs = new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference(this, "managed_aqs");
  public get managedAqs() {
    return this._managedAqs;
  }
  public putManagedAqs(value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs) {
    this._managedAqs.internalValue = value;
  }
  public resetManagedAqs() {
    this._managedAqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedAqsInput() {
    return this._managedAqs.internalValue;
  }

  // managed_pubsub - computed: false, optional: true, required: false
  private _managedPubsub = new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference(this, "managed_pubsub");
  public get managedPubsub() {
    return this._managedPubsub;
  }
  public putManagedPubsub(value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub) {
    this._managedPubsub.internalValue = value;
  }
  public resetManagedPubsub() {
    this._managedPubsub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPubsubInput() {
    return this._managedPubsub.internalValue;
  }

  // managed_sqs - computed: false, optional: true, required: false
  private _managedSqs = new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference(this, "managed_sqs");
  public get managedSqs() {
    return this._managedSqs;
  }
  public putManagedSqs(value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs) {
    this._managedSqs.internalValue = value;
  }
  public resetManagedSqs() {
    this._managedSqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedSqsInput() {
    return this._managedSqs.internalValue;
  }

  // provided_aqs - computed: false, optional: true, required: false
  private _providedAqs = new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference(this, "provided_aqs");
  public get providedAqs() {
    return this._providedAqs;
  }
  public putProvidedAqs(value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs) {
    this._providedAqs.internalValue = value;
  }
  public resetProvidedAqs() {
    this._providedAqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providedAqsInput() {
    return this._providedAqs.internalValue;
  }

  // provided_pubsub - computed: false, optional: true, required: false
  private _providedPubsub = new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference(this, "provided_pubsub");
  public get providedPubsub() {
    return this._providedPubsub;
  }
  public putProvidedPubsub(value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub) {
    this._providedPubsub.internalValue = value;
  }
  public resetProvidedPubsub() {
    this._providedPubsub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providedPubsubInput() {
    return this._providedPubsub.internalValue;
  }

  // provided_sqs - computed: false, optional: true, required: false
  private _providedSqs = new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference(this, "provided_sqs");
  public get providedSqs() {
    return this._providedSqs;
  }
  public putProvidedSqs(value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs) {
    this._providedSqs.internalValue = value;
  }
  public resetProvidedSqs() {
    this._providedSqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providedSqsInput() {
    return this._providedSqs.internalValue;
  }
}
export interface DataDatabricksExternalLocationExternalLocationInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#browse_only DataDatabricksExternalLocation#browse_only}
  */
  readonly browseOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#comment DataDatabricksExternalLocation#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#created_at DataDatabricksExternalLocation#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#created_by DataDatabricksExternalLocation#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#credential_id DataDatabricksExternalLocation#credential_id}
  */
  readonly credentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#credential_name DataDatabricksExternalLocation#credential_name}
  */
  readonly credentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#enable_file_events DataDatabricksExternalLocation#enable_file_events}
  */
  readonly enableFileEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#fallback DataDatabricksExternalLocation#fallback}
  */
  readonly fallback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#isolation_mode DataDatabricksExternalLocation#isolation_mode}
  */
  readonly isolationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#metastore_id DataDatabricksExternalLocation#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#owner DataDatabricksExternalLocation#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#read_only DataDatabricksExternalLocation#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#updated_at DataDatabricksExternalLocation#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#updated_by DataDatabricksExternalLocation#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#url DataDatabricksExternalLocation#url}
  */
  readonly url?: string;
  /**
  * encryption_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#encryption_details DataDatabricksExternalLocation#encryption_details}
  */
  readonly encryptionDetails?: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails;
  /**
  * file_event_queue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#file_event_queue DataDatabricksExternalLocation#file_event_queue}
  */
  readonly fileEventQueue?: DataDatabricksExternalLocationExternalLocationInfoFileEventQueue;
}

export function dataDatabricksExternalLocationExternalLocationInfoToTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoOutputReference | DataDatabricksExternalLocationExternalLocationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browse_only: cdktf.booleanToTerraform(struct!.browseOnly),
    comment: cdktf.stringToTerraform(struct!.comment),
    created_at: cdktf.numberToTerraform(struct!.createdAt),
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    credential_id: cdktf.stringToTerraform(struct!.credentialId),
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    enable_file_events: cdktf.booleanToTerraform(struct!.enableFileEvents),
    fallback: cdktf.booleanToTerraform(struct!.fallback),
    isolation_mode: cdktf.stringToTerraform(struct!.isolationMode),
    metastore_id: cdktf.stringToTerraform(struct!.metastoreId),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    updated_at: cdktf.numberToTerraform(struct!.updatedAt),
    updated_by: cdktf.stringToTerraform(struct!.updatedBy),
    url: cdktf.stringToTerraform(struct!.url),
    encryption_details: dataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsToTerraform(struct!.encryptionDetails),
    file_event_queue: dataDatabricksExternalLocationExternalLocationInfoFileEventQueueToTerraform(struct!.fileEventQueue),
  }
}


export function dataDatabricksExternalLocationExternalLocationInfoToHclTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoOutputReference | DataDatabricksExternalLocationExternalLocationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    browse_only: {
      value: cdktf.booleanToHclTerraform(struct!.browseOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_at: {
      value: cdktf.numberToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_id: {
      value: cdktf.stringToHclTerraform(struct!.credentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_file_events: {
      value: cdktf.booleanToHclTerraform(struct!.enableFileEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback: {
      value: cdktf.booleanToHclTerraform(struct!.fallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    isolation_mode: {
      value: cdktf.stringToHclTerraform(struct!.isolationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metastore_id: {
      value: cdktf.stringToHclTerraform(struct!.metastoreId),
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
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    updated_at: {
      value: cdktf.numberToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    updated_by: {
      value: cdktf.stringToHclTerraform(struct!.updatedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_details: {
      value: dataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsToHclTerraform(struct!.encryptionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsList",
    },
    file_event_queue: {
      value: dataDatabricksExternalLocationExternalLocationInfoFileEventQueueToHclTerraform(struct!.fileEventQueue),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksExternalLocationExternalLocationInfoFileEventQueueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksExternalLocationExternalLocationInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksExternalLocationExternalLocationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browseOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.browseOnly = this._browseOnly;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._credentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialId = this._credentialId;
    }
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._enableFileEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFileEvents = this._enableFileEvents;
    }
    if (this._fallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback;
    }
    if (this._isolationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolationMode = this._isolationMode;
    }
    if (this._metastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreId = this._metastoreId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._updatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedBy = this._updatedBy;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._encryptionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionDetails = this._encryptionDetails?.internalValue;
    }
    if (this._fileEventQueue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileEventQueue = this._fileEventQueue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksExternalLocationExternalLocationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._browseOnly = undefined;
      this._comment = undefined;
      this._createdAt = undefined;
      this._createdBy = undefined;
      this._credentialId = undefined;
      this._credentialName = undefined;
      this._enableFileEvents = undefined;
      this._fallback = undefined;
      this._isolationMode = undefined;
      this._metastoreId = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._readOnly = undefined;
      this._updatedAt = undefined;
      this._updatedBy = undefined;
      this._url = undefined;
      this._encryptionDetails.internalValue = undefined;
      this._fileEventQueue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._browseOnly = value.browseOnly;
      this._comment = value.comment;
      this._createdAt = value.createdAt;
      this._createdBy = value.createdBy;
      this._credentialId = value.credentialId;
      this._credentialName = value.credentialName;
      this._enableFileEvents = value.enableFileEvents;
      this._fallback = value.fallback;
      this._isolationMode = value.isolationMode;
      this._metastoreId = value.metastoreId;
      this._name = value.name;
      this._owner = value.owner;
      this._readOnly = value.readOnly;
      this._updatedAt = value.updatedAt;
      this._updatedBy = value.updatedBy;
      this._url = value.url;
      this._encryptionDetails.internalValue = value.encryptionDetails;
      this._fileEventQueue.internalValue = value.fileEventQueue;
    }
  }

  // browse_only - computed: false, optional: true, required: false
  private _browseOnly?: boolean | cdktf.IResolvable; 
  public get browseOnly() {
    return this.getBooleanAttribute('browse_only');
  }
  public set browseOnly(value: boolean | cdktf.IResolvable) {
    this._browseOnly = value;
  }
  public resetBrowseOnly() {
    this._browseOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browseOnlyInput() {
    return this._browseOnly;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // credential_id - computed: false, optional: true, required: false
  private _credentialId?: string; 
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }
  public set credentialId(value: string) {
    this._credentialId = value;
  }
  public resetCredentialId() {
    this._credentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
  }

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // enable_file_events - computed: false, optional: true, required: false
  private _enableFileEvents?: boolean | cdktf.IResolvable; 
  public get enableFileEvents() {
    return this.getBooleanAttribute('enable_file_events');
  }
  public set enableFileEvents(value: boolean | cdktf.IResolvable) {
    this._enableFileEvents = value;
  }
  public resetEnableFileEvents() {
    this._enableFileEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFileEventsInput() {
    return this._enableFileEvents;
  }

  // fallback - computed: false, optional: true, required: false
  private _fallback?: boolean | cdktf.IResolvable; 
  public get fallback() {
    return this.getBooleanAttribute('fallback');
  }
  public set fallback(value: boolean | cdktf.IResolvable) {
    this._fallback = value;
  }
  public resetFallback() {
    this._fallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback;
  }

  // isolation_mode - computed: false, optional: true, required: false
  private _isolationMode?: string; 
  public get isolationMode() {
    return this.getStringAttribute('isolation_mode');
  }
  public set isolationMode(value: string) {
    this._isolationMode = value;
  }
  public resetIsolationMode() {
    this._isolationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationModeInput() {
    return this._isolationMode;
  }

  // metastore_id - computed: false, optional: true, required: false
  private _metastoreId?: string; 
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }
  public set metastoreId(value: string) {
    this._metastoreId = value;
  }
  public resetMetastoreId() {
    this._metastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreIdInput() {
    return this._metastoreId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // updated_by - computed: false, optional: true, required: false
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // encryption_details - computed: false, optional: true, required: false
  private _encryptionDetails = new DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference(this, "encryption_details");
  public get encryptionDetails() {
    return this._encryptionDetails;
  }
  public putEncryptionDetails(value: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails) {
    this._encryptionDetails.internalValue = value;
  }
  public resetEncryptionDetails() {
    this._encryptionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionDetailsInput() {
    return this._encryptionDetails.internalValue;
  }

  // file_event_queue - computed: false, optional: true, required: false
  private _fileEventQueue = new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference(this, "file_event_queue");
  public get fileEventQueue() {
    return this._fileEventQueue;
  }
  public putFileEventQueue(value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueue) {
    this._fileEventQueue.internalValue = value;
  }
  public resetFileEventQueue() {
    this._fileEventQueue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileEventQueueInput() {
    return this._fileEventQueue.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location databricks_external_location}
*/
export class DataDatabricksExternalLocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_external_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksExternalLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksExternalLocation to import
  * @param importFromId The id of the existing DataDatabricksExternalLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksExternalLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_external_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/external_location databricks_external_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksExternalLocationConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksExternalLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_external_location',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.86.0',
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
    this._id = config.id;
    this._name = config.name;
    this._externalLocationInfo.internalValue = config.externalLocationInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // external_location_info - computed: false, optional: true, required: false
  private _externalLocationInfo = new DataDatabricksExternalLocationExternalLocationInfoOutputReference(this, "external_location_info");
  public get externalLocationInfo() {
    return this._externalLocationInfo;
  }
  public putExternalLocationInfo(value: DataDatabricksExternalLocationExternalLocationInfo) {
    this._externalLocationInfo.internalValue = value;
  }
  public resetExternalLocationInfo() {
    this._externalLocationInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLocationInfoInput() {
    return this._externalLocationInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      external_location_info: dataDatabricksExternalLocationExternalLocationInfoToTerraform(this._externalLocationInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_location_info: {
        value: dataDatabricksExternalLocationExternalLocationInfoToHclTerraform(this._externalLocationInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksExternalLocationExternalLocationInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
