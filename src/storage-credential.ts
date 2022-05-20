// https://www.terraform.io/docs/providers/databricks/r/storage_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#comment StorageCredential#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#metastore_id StorageCredential#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#name StorageCredential#name}
  */
  readonly name: string;
  /**
  * aws_iam_role block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#aws_iam_role StorageCredential#aws_iam_role}
  */
  readonly awsIamRole?: StorageCredentialAwsIamRole;
  /**
  * azure_service_principal block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#azure_service_principal StorageCredential#azure_service_principal}
  */
  readonly azureServicePrincipal?: StorageCredentialAzureServicePrincipal;
}
export interface StorageCredentialAwsIamRole {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#role_arn StorageCredential#role_arn}
  */
  readonly roleArn: string;
}

export function storageCredentialAwsIamRoleToTerraform(struct?: StorageCredentialAwsIamRoleOutputReference | StorageCredentialAwsIamRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class StorageCredentialAwsIamRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageCredentialAwsIamRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCredentialAwsIamRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface StorageCredentialAzureServicePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#application_id StorageCredential#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#client_secret StorageCredential#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#directory_id StorageCredential#directory_id}
  */
  readonly directoryId: string;
}

export function storageCredentialAzureServicePrincipalToTerraform(struct?: StorageCredentialAzureServicePrincipalOutputReference | StorageCredentialAzureServicePrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    directory_id: cdktf.stringToTerraform(struct!.directoryId),
  }
}

export class StorageCredentialAzureServicePrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageCredentialAzureServicePrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._directoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryId = this._directoryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCredentialAzureServicePrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationId = undefined;
      this._clientSecret = undefined;
      this._directoryId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationId = value.applicationId;
      this._clientSecret = value.clientSecret;
      this._directoryId = value.directoryId;
    }
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // directory_id - computed: false, optional: false, required: true
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential databricks_storage_credential}
*/
export class StorageCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_storage_credential";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential databricks_storage_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: StorageCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_storage_credential',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '0.5.8',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._metastoreId = config.metastoreId;
    this._name = config.name;
    this._awsIamRole.internalValue = config.awsIamRole;
    this._azureServicePrincipal.internalValue = config.azureServicePrincipal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // aws_iam_role - computed: false, optional: true, required: false
  private _awsIamRole = new StorageCredentialAwsIamRoleOutputReference(this, "aws_iam_role");
  public get awsIamRole() {
    return this._awsIamRole;
  }
  public putAwsIamRole(value: StorageCredentialAwsIamRole) {
    this._awsIamRole.internalValue = value;
  }
  public resetAwsIamRole() {
    this._awsIamRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleInput() {
    return this._awsIamRole.internalValue;
  }

  // azure_service_principal - computed: false, optional: true, required: false
  private _azureServicePrincipal = new StorageCredentialAzureServicePrincipalOutputReference(this, "azure_service_principal");
  public get azureServicePrincipal() {
    return this._azureServicePrincipal;
  }
  public putAzureServicePrincipal(value: StorageCredentialAzureServicePrincipal) {
    this._azureServicePrincipal.internalValue = value;
  }
  public resetAzureServicePrincipal() {
    this._azureServicePrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureServicePrincipalInput() {
    return this._azureServicePrincipal.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      metastore_id: cdktf.stringToTerraform(this._metastoreId),
      name: cdktf.stringToTerraform(this._name),
      aws_iam_role: storageCredentialAwsIamRoleToTerraform(this._awsIamRole.internalValue),
      azure_service_principal: storageCredentialAzureServicePrincipalToTerraform(this._azureServicePrincipal.internalValue),
    };
  }
}
