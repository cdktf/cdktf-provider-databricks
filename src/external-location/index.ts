/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#comment ExternalLocation#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}
  */
  readonly credentialName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#enable_file_events ExternalLocation#enable_file_events}
  */
  readonly enableFileEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#fallback ExternalLocation#fallback}
  */
  readonly fallback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#force_destroy ExternalLocation#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#force_update ExternalLocation#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#id ExternalLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#isolation_mode ExternalLocation#isolation_mode}
  */
  readonly isolationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#name ExternalLocation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#owner ExternalLocation#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#read_only ExternalLocation#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}
  */
  readonly skipValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#url ExternalLocation#url}
  */
  readonly url: string;
  /**
  * encryption_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#encryption_details ExternalLocation#encryption_details}
  */
  readonly encryptionDetails?: ExternalLocationEncryptionDetails;
  /**
  * file_event_queue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#file_event_queue ExternalLocation#file_event_queue}
  */
  readonly fileEventQueue?: ExternalLocationFileEventQueue;
}
export interface ExternalLocationEncryptionDetailsSseEncryptionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#algorithm ExternalLocation#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#aws_kms_key_arn ExternalLocation#aws_kms_key_arn}
  */
  readonly awsKmsKeyArn?: string;
}

export function externalLocationEncryptionDetailsSseEncryptionDetailsToTerraform(struct?: ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference | ExternalLocationEncryptionDetailsSseEncryptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    aws_kms_key_arn: cdktf.stringToTerraform(struct!.awsKmsKeyArn),
  }
}


export function externalLocationEncryptionDetailsSseEncryptionDetailsToHclTerraform(struct?: ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference | ExternalLocationEncryptionDetailsSseEncryptionDetails): any {
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

export class ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalLocationEncryptionDetailsSseEncryptionDetails | undefined {
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

  public set internalValue(value: ExternalLocationEncryptionDetailsSseEncryptionDetails | undefined) {
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
export interface ExternalLocationEncryptionDetails {
  /**
  * sse_encryption_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#sse_encryption_details ExternalLocation#sse_encryption_details}
  */
  readonly sseEncryptionDetails?: ExternalLocationEncryptionDetailsSseEncryptionDetails;
}

export function externalLocationEncryptionDetailsToTerraform(struct?: ExternalLocationEncryptionDetailsOutputReference | ExternalLocationEncryptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sse_encryption_details: externalLocationEncryptionDetailsSseEncryptionDetailsToTerraform(struct!.sseEncryptionDetails),
  }
}


export function externalLocationEncryptionDetailsToHclTerraform(struct?: ExternalLocationEncryptionDetailsOutputReference | ExternalLocationEncryptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sse_encryption_details: {
      value: externalLocationEncryptionDetailsSseEncryptionDetailsToHclTerraform(struct!.sseEncryptionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalLocationEncryptionDetailsSseEncryptionDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalLocationEncryptionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalLocationEncryptionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sseEncryptionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseEncryptionDetails = this._sseEncryptionDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalLocationEncryptionDetails | undefined) {
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
  private _sseEncryptionDetails = new ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference(this, "sse_encryption_details");
  public get sseEncryptionDetails() {
    return this._sseEncryptionDetails;
  }
  public putSseEncryptionDetails(value: ExternalLocationEncryptionDetailsSseEncryptionDetails) {
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
export interface ExternalLocationFileEventQueueManagedAqs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}
  */
  readonly queueUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}
  */
  readonly subscriptionId: string;
}

export function externalLocationFileEventQueueManagedAqsToTerraform(struct?: ExternalLocationFileEventQueueManagedAqsOutputReference | ExternalLocationFileEventQueueManagedAqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function externalLocationFileEventQueueManagedAqsToHclTerraform(struct?: ExternalLocationFileEventQueueManagedAqsOutputReference | ExternalLocationFileEventQueueManagedAqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ExternalLocationFileEventQueueManagedAqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalLocationFileEventQueueManagedAqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ExternalLocationFileEventQueueManagedAqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queueUrl = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queueUrl = value.queueUrl;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
    }
  }

  // managed_resource_id - computed: true, optional: false, required: false
  public get managedResourceId() {
    return this.getStringAttribute('managed_resource_id');
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

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}
export interface ExternalLocationFileEventQueueManagedPubsub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}
  */
  readonly subscriptionName?: string;
}

export function externalLocationFileEventQueueManagedPubsubToTerraform(struct?: ExternalLocationFileEventQueueManagedPubsubOutputReference | ExternalLocationFileEventQueueManagedPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subscription_name: cdktf.stringToTerraform(struct!.subscriptionName),
  }
}


export function externalLocationFileEventQueueManagedPubsubToHclTerraform(struct?: ExternalLocationFileEventQueueManagedPubsubOutputReference | ExternalLocationFileEventQueueManagedPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ExternalLocationFileEventQueueManagedPubsubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalLocationFileEventQueueManagedPubsub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subscriptionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionName = this._subscriptionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalLocationFileEventQueueManagedPubsub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subscriptionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subscriptionName = value.subscriptionName;
    }
  }

  // managed_resource_id - computed: true, optional: false, required: false
  public get managedResourceId() {
    return this.getStringAttribute('managed_resource_id');
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
export interface ExternalLocationFileEventQueueManagedSqs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}
  */
  readonly queueUrl?: string;
}

export function externalLocationFileEventQueueManagedSqsToTerraform(struct?: ExternalLocationFileEventQueueManagedSqsOutputReference | ExternalLocationFileEventQueueManagedSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
  }
}


export function externalLocationFileEventQueueManagedSqsToHclTerraform(struct?: ExternalLocationFileEventQueueManagedSqsOutputReference | ExternalLocationFileEventQueueManagedSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ExternalLocationFileEventQueueManagedSqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalLocationFileEventQueueManagedSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalLocationFileEventQueueManagedSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queueUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queueUrl = value.queueUrl;
    }
  }

  // managed_resource_id - computed: true, optional: false, required: false
  public get managedResourceId() {
    return this.getStringAttribute('managed_resource_id');
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
export interface ExternalLocationFileEventQueueProvidedAqs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}
  */
  readonly subscriptionId?: string;
}

export function externalLocationFileEventQueueProvidedAqsToTerraform(struct?: ExternalLocationFileEventQueueProvidedAqsOutputReference | ExternalLocationFileEventQueueProvidedAqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function externalLocationFileEventQueueProvidedAqsToHclTerraform(struct?: ExternalLocationFileEventQueueProvidedAqsOutputReference | ExternalLocationFileEventQueueProvidedAqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ExternalLocationFileEventQueueProvidedAqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalLocationFileEventQueueProvidedAqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ExternalLocationFileEventQueueProvidedAqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queueUrl = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queueUrl = value.queueUrl;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
    }
  }

  // managed_resource_id - computed: true, optional: false, required: false
  public get managedResourceId() {
    return this.getStringAttribute('managed_resource_id');
  }

  // queue_url - computed: false, optional: false, required: true
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
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
export interface ExternalLocationFileEventQueueProvidedPubsub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}
  */
  readonly subscriptionName: string;
}

export function externalLocationFileEventQueueProvidedPubsubToTerraform(struct?: ExternalLocationFileEventQueueProvidedPubsubOutputReference | ExternalLocationFileEventQueueProvidedPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subscription_name: cdktf.stringToTerraform(struct!.subscriptionName),
  }
}


export function externalLocationFileEventQueueProvidedPubsubToHclTerraform(struct?: ExternalLocationFileEventQueueProvidedPubsubOutputReference | ExternalLocationFileEventQueueProvidedPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ExternalLocationFileEventQueueProvidedPubsubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalLocationFileEventQueueProvidedPubsub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subscriptionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionName = this._subscriptionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalLocationFileEventQueueProvidedPubsub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subscriptionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subscriptionName = value.subscriptionName;
    }
  }

  // managed_resource_id - computed: true, optional: false, required: false
  public get managedResourceId() {
    return this.getStringAttribute('managed_resource_id');
  }

  // subscription_name - computed: false, optional: false, required: true
  private _subscriptionName?: string; 
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionNameInput() {
    return this._subscriptionName;
  }
}
export interface ExternalLocationFileEventQueueProvidedSqs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}
  */
  readonly queueUrl: string;
}

export function externalLocationFileEventQueueProvidedSqsToTerraform(struct?: ExternalLocationFileEventQueueProvidedSqsOutputReference | ExternalLocationFileEventQueueProvidedSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
  }
}


export function externalLocationFileEventQueueProvidedSqsToHclTerraform(struct?: ExternalLocationFileEventQueueProvidedSqsOutputReference | ExternalLocationFileEventQueueProvidedSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ExternalLocationFileEventQueueProvidedSqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalLocationFileEventQueueProvidedSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalLocationFileEventQueueProvidedSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queueUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queueUrl = value.queueUrl;
    }
  }

  // managed_resource_id - computed: true, optional: false, required: false
  public get managedResourceId() {
    return this.getStringAttribute('managed_resource_id');
  }

  // queue_url - computed: false, optional: false, required: true
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }
}
export interface ExternalLocationFileEventQueue {
  /**
  * managed_aqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#managed_aqs ExternalLocation#managed_aqs}
  */
  readonly managedAqs?: ExternalLocationFileEventQueueManagedAqs;
  /**
  * managed_pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#managed_pubsub ExternalLocation#managed_pubsub}
  */
  readonly managedPubsub?: ExternalLocationFileEventQueueManagedPubsub;
  /**
  * managed_sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#managed_sqs ExternalLocation#managed_sqs}
  */
  readonly managedSqs?: ExternalLocationFileEventQueueManagedSqs;
  /**
  * provided_aqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#provided_aqs ExternalLocation#provided_aqs}
  */
  readonly providedAqs?: ExternalLocationFileEventQueueProvidedAqs;
  /**
  * provided_pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#provided_pubsub ExternalLocation#provided_pubsub}
  */
  readonly providedPubsub?: ExternalLocationFileEventQueueProvidedPubsub;
  /**
  * provided_sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#provided_sqs ExternalLocation#provided_sqs}
  */
  readonly providedSqs?: ExternalLocationFileEventQueueProvidedSqs;
}

export function externalLocationFileEventQueueToTerraform(struct?: ExternalLocationFileEventQueueOutputReference | ExternalLocationFileEventQueue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_aqs: externalLocationFileEventQueueManagedAqsToTerraform(struct!.managedAqs),
    managed_pubsub: externalLocationFileEventQueueManagedPubsubToTerraform(struct!.managedPubsub),
    managed_sqs: externalLocationFileEventQueueManagedSqsToTerraform(struct!.managedSqs),
    provided_aqs: externalLocationFileEventQueueProvidedAqsToTerraform(struct!.providedAqs),
    provided_pubsub: externalLocationFileEventQueueProvidedPubsubToTerraform(struct!.providedPubsub),
    provided_sqs: externalLocationFileEventQueueProvidedSqsToTerraform(struct!.providedSqs),
  }
}


export function externalLocationFileEventQueueToHclTerraform(struct?: ExternalLocationFileEventQueueOutputReference | ExternalLocationFileEventQueue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_aqs: {
      value: externalLocationFileEventQueueManagedAqsToHclTerraform(struct!.managedAqs),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalLocationFileEventQueueManagedAqsList",
    },
    managed_pubsub: {
      value: externalLocationFileEventQueueManagedPubsubToHclTerraform(struct!.managedPubsub),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalLocationFileEventQueueManagedPubsubList",
    },
    managed_sqs: {
      value: externalLocationFileEventQueueManagedSqsToHclTerraform(struct!.managedSqs),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalLocationFileEventQueueManagedSqsList",
    },
    provided_aqs: {
      value: externalLocationFileEventQueueProvidedAqsToHclTerraform(struct!.providedAqs),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalLocationFileEventQueueProvidedAqsList",
    },
    provided_pubsub: {
      value: externalLocationFileEventQueueProvidedPubsubToHclTerraform(struct!.providedPubsub),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalLocationFileEventQueueProvidedPubsubList",
    },
    provided_sqs: {
      value: externalLocationFileEventQueueProvidedSqsToHclTerraform(struct!.providedSqs),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalLocationFileEventQueueProvidedSqsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalLocationFileEventQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalLocationFileEventQueue | undefined {
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

  public set internalValue(value: ExternalLocationFileEventQueue | undefined) {
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
  private _managedAqs = new ExternalLocationFileEventQueueManagedAqsOutputReference(this, "managed_aqs");
  public get managedAqs() {
    return this._managedAqs;
  }
  public putManagedAqs(value: ExternalLocationFileEventQueueManagedAqs) {
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
  private _managedPubsub = new ExternalLocationFileEventQueueManagedPubsubOutputReference(this, "managed_pubsub");
  public get managedPubsub() {
    return this._managedPubsub;
  }
  public putManagedPubsub(value: ExternalLocationFileEventQueueManagedPubsub) {
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
  private _managedSqs = new ExternalLocationFileEventQueueManagedSqsOutputReference(this, "managed_sqs");
  public get managedSqs() {
    return this._managedSqs;
  }
  public putManagedSqs(value: ExternalLocationFileEventQueueManagedSqs) {
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
  private _providedAqs = new ExternalLocationFileEventQueueProvidedAqsOutputReference(this, "provided_aqs");
  public get providedAqs() {
    return this._providedAqs;
  }
  public putProvidedAqs(value: ExternalLocationFileEventQueueProvidedAqs) {
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
  private _providedPubsub = new ExternalLocationFileEventQueueProvidedPubsubOutputReference(this, "provided_pubsub");
  public get providedPubsub() {
    return this._providedPubsub;
  }
  public putProvidedPubsub(value: ExternalLocationFileEventQueueProvidedPubsub) {
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
  private _providedSqs = new ExternalLocationFileEventQueueProvidedSqsOutputReference(this, "provided_sqs");
  public get providedSqs() {
    return this._providedSqs;
  }
  public putProvidedSqs(value: ExternalLocationFileEventQueueProvidedSqs) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location databricks_external_location}
*/
export class ExternalLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_external_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalLocation to import
  * @param importFromId The id of the existing ExternalLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_external_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/external_location databricks_external_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalLocationConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_external_location',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.89.0',
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
    this._comment = config.comment;
    this._credentialName = config.credentialName;
    this._enableFileEvents = config.enableFileEvents;
    this._fallback = config.fallback;
    this._forceDestroy = config.forceDestroy;
    this._forceUpdate = config.forceUpdate;
    this._id = config.id;
    this._isolationMode = config.isolationMode;
    this._metastoreId = config.metastoreId;
    this._name = config.name;
    this._owner = config.owner;
    this._readOnly = config.readOnly;
    this._skipValidation = config.skipValidation;
    this._url = config.url;
    this._encryptionDetails.internalValue = config.encryptionDetails;
    this._fileEventQueue.internalValue = config.fileEventQueue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // browse_only - computed: true, optional: false, required: false
  public get browseOnly() {
    return this.getBooleanAttribute('browse_only');
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }

  // credential_name - computed: false, optional: false, required: true
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
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

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // force_update - computed: false, optional: true, required: false
  private _forceUpdate?: boolean | cdktf.IResolvable; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
  }
  public set forceUpdate(value: boolean | cdktf.IResolvable) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate;
  }

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

  // isolation_mode - computed: true, optional: true, required: false
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

  // metastore_id - computed: true, optional: true, required: false
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

  // owner - computed: true, optional: true, required: false
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

  // skip_validation - computed: false, optional: true, required: false
  private _skipValidation?: boolean | cdktf.IResolvable; 
  public get skipValidation() {
    return this.getBooleanAttribute('skip_validation');
  }
  public set skipValidation(value: boolean | cdktf.IResolvable) {
    this._skipValidation = value;
  }
  public resetSkipValidation() {
    this._skipValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipValidationInput() {
    return this._skipValidation;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // encryption_details - computed: false, optional: true, required: false
  private _encryptionDetails = new ExternalLocationEncryptionDetailsOutputReference(this, "encryption_details");
  public get encryptionDetails() {
    return this._encryptionDetails;
  }
  public putEncryptionDetails(value: ExternalLocationEncryptionDetails) {
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
  private _fileEventQueue = new ExternalLocationFileEventQueueOutputReference(this, "file_event_queue");
  public get fileEventQueue() {
    return this._fileEventQueue;
  }
  public putFileEventQueue(value: ExternalLocationFileEventQueue) {
    this._fileEventQueue.internalValue = value;
  }
  public resetFileEventQueue() {
    this._fileEventQueue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileEventQueueInput() {
    return this._fileEventQueue.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      credential_name: cdktf.stringToTerraform(this._credentialName),
      enable_file_events: cdktf.booleanToTerraform(this._enableFileEvents),
      fallback: cdktf.booleanToTerraform(this._fallback),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      id: cdktf.stringToTerraform(this._id),
      isolation_mode: cdktf.stringToTerraform(this._isolationMode),
      metastore_id: cdktf.stringToTerraform(this._metastoreId),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      skip_validation: cdktf.booleanToTerraform(this._skipValidation),
      url: cdktf.stringToTerraform(this._url),
      encryption_details: externalLocationEncryptionDetailsToTerraform(this._encryptionDetails.internalValue),
      file_event_queue: externalLocationFileEventQueueToTerraform(this._fileEventQueue.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_name: {
        value: cdktf.stringToHclTerraform(this._credentialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_file_events: {
        value: cdktf.booleanToHclTerraform(this._enableFileEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fallback: {
        value: cdktf.booleanToHclTerraform(this._fallback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_update: {
        value: cdktf.booleanToHclTerraform(this._forceUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isolation_mode: {
        value: cdktf.stringToHclTerraform(this._isolationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metastore_id: {
        value: cdktf.stringToHclTerraform(this._metastoreId),
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
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_validation: {
        value: cdktf.booleanToHclTerraform(this._skipValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_details: {
        value: externalLocationEncryptionDetailsToHclTerraform(this._encryptionDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalLocationEncryptionDetailsList",
      },
      file_event_queue: {
        value: externalLocationFileEventQueueToHclTerraform(this._fileEventQueue.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalLocationFileEventQueueList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
