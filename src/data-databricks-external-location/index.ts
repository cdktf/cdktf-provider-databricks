// https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksExternalLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#id DataDatabricksExternalLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}
  */
  readonly name: string;
  /**
  * external_location_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#external_location_info DataDatabricksExternalLocation#external_location_info}
  */
  readonly externalLocationInfo?: DataDatabricksExternalLocationExternalLocationInfo;
}
export interface DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#algorithm DataDatabricksExternalLocation#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#aws_kms_key_arn DataDatabricksExternalLocation#aws_kms_key_arn}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#sse_encryption_details DataDatabricksExternalLocation#sse_encryption_details}
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
export interface DataDatabricksExternalLocationExternalLocationInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#access_point DataDatabricksExternalLocation#access_point}
  */
  readonly accessPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#browse_only DataDatabricksExternalLocation#browse_only}
  */
  readonly browseOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#comment DataDatabricksExternalLocation#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#created_at DataDatabricksExternalLocation#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#created_by DataDatabricksExternalLocation#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#credential_id DataDatabricksExternalLocation#credential_id}
  */
  readonly credentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#credential_name DataDatabricksExternalLocation#credential_name}
  */
  readonly credentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#fallback DataDatabricksExternalLocation#fallback}
  */
  readonly fallback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#isolation_mode DataDatabricksExternalLocation#isolation_mode}
  */
  readonly isolationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#metastore_id DataDatabricksExternalLocation#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#owner DataDatabricksExternalLocation#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#read_only DataDatabricksExternalLocation#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#updated_at DataDatabricksExternalLocation#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#updated_by DataDatabricksExternalLocation#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#url DataDatabricksExternalLocation#url}
  */
  readonly url?: string;
  /**
  * encryption_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#encryption_details DataDatabricksExternalLocation#encryption_details}
  */
  readonly encryptionDetails?: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails;
}

export function dataDatabricksExternalLocationExternalLocationInfoToTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoOutputReference | DataDatabricksExternalLocationExternalLocationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_point: cdktf.stringToTerraform(struct!.accessPoint),
    browse_only: cdktf.booleanToTerraform(struct!.browseOnly),
    comment: cdktf.stringToTerraform(struct!.comment),
    created_at: cdktf.numberToTerraform(struct!.createdAt),
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    credential_id: cdktf.stringToTerraform(struct!.credentialId),
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
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
  }
}


export function dataDatabricksExternalLocationExternalLocationInfoToHclTerraform(struct?: DataDatabricksExternalLocationExternalLocationInfoOutputReference | DataDatabricksExternalLocationExternalLocationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_point: {
      value: cdktf.stringToHclTerraform(struct!.accessPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    if (this._accessPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPoint = this._accessPoint;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksExternalLocationExternalLocationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessPoint = undefined;
      this._browseOnly = undefined;
      this._comment = undefined;
      this._createdAt = undefined;
      this._createdBy = undefined;
      this._credentialId = undefined;
      this._credentialName = undefined;
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
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessPoint = value.accessPoint;
      this._browseOnly = value.browseOnly;
      this._comment = value.comment;
      this._createdAt = value.createdAt;
      this._createdBy = value.createdBy;
      this._credentialId = value.credentialId;
      this._credentialName = value.credentialName;
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
    }
  }

  // access_point - computed: false, optional: true, required: false
  private _accessPoint?: string; 
  public get accessPoint() {
    return this.getStringAttribute('access_point');
  }
  public set accessPoint(value: string) {
    this._accessPoint = value;
  }
  public resetAccessPoint() {
    this._accessPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointInput() {
    return this._accessPoint;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location databricks_external_location}
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
  * @param importFromId The id of the existing DataDatabricksExternalLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksExternalLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_external_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/external_location databricks_external_location} Data Source
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
        providerVersion: '1.58.0',
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
