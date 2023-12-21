// https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#comment StorageCredential#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#force_destroy StorageCredential#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#force_update StorageCredential#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#id StorageCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#metastore_id StorageCredential#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#name StorageCredential#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#owner StorageCredential#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#read_only StorageCredential#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * aws_iam_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#aws_iam_role StorageCredential#aws_iam_role}
  */
  readonly awsIamRole?: StorageCredentialAwsIamRole;
  /**
  * azure_managed_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#azure_managed_identity StorageCredential#azure_managed_identity}
  */
  readonly azureManagedIdentity?: StorageCredentialAzureManagedIdentity;
  /**
  * azure_service_principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#azure_service_principal StorageCredential#azure_service_principal}
  */
  readonly azureServicePrincipal?: StorageCredentialAzureServicePrincipal;
  /**
  * databricks_gcp_service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#databricks_gcp_service_account StorageCredential#databricks_gcp_service_account}
  */
  readonly databricksGcpServiceAccount?: StorageCredentialDatabricksGcpServiceAccount;
  /**
  * gcp_service_account_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#gcp_service_account_key StorageCredential#gcp_service_account_key}
  */
  readonly gcpServiceAccountKey?: StorageCredentialGcpServiceAccountKey;
}
export interface StorageCredentialAwsIamRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#external_id StorageCredential#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#role_arn StorageCredential#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#unity_catalog_iam_arn StorageCredential#unity_catalog_iam_arn}
  */
  readonly unityCatalogIamArn?: string;
}

export function storageCredentialAwsIamRoleToTerraform(struct?: StorageCredentialAwsIamRoleOutputReference | StorageCredentialAwsIamRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    unity_catalog_iam_arn: cdktf.stringToTerraform(struct!.unityCatalogIamArn),
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
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._unityCatalogIamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.unityCatalogIamArn = this._unityCatalogIamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCredentialAwsIamRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalId = undefined;
      this._roleArn = undefined;
      this._unityCatalogIamArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
      this._unityCatalogIamArn = value.unityCatalogIamArn;
    }
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // unity_catalog_iam_arn - computed: true, optional: true, required: false
  private _unityCatalogIamArn?: string; 
  public get unityCatalogIamArn() {
    return this.getStringAttribute('unity_catalog_iam_arn');
  }
  public set unityCatalogIamArn(value: string) {
    this._unityCatalogIamArn = value;
  }
  public resetUnityCatalogIamArn() {
    this._unityCatalogIamArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unityCatalogIamArnInput() {
    return this._unityCatalogIamArn;
  }
}
export interface StorageCredentialAzureManagedIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#access_connector_id StorageCredential#access_connector_id}
  */
  readonly accessConnectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#credential_id StorageCredential#credential_id}
  */
  readonly credentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#managed_identity_id StorageCredential#managed_identity_id}
  */
  readonly managedIdentityId?: string;
}

export function storageCredentialAzureManagedIdentityToTerraform(struct?: StorageCredentialAzureManagedIdentityOutputReference | StorageCredentialAzureManagedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_connector_id: cdktf.stringToTerraform(struct!.accessConnectorId),
    credential_id: cdktf.stringToTerraform(struct!.credentialId),
    managed_identity_id: cdktf.stringToTerraform(struct!.managedIdentityId),
  }
}

export class StorageCredentialAzureManagedIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageCredentialAzureManagedIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessConnectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConnectorId = this._accessConnectorId;
    }
    if (this._credentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialId = this._credentialId;
    }
    if (this._managedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedIdentityId = this._managedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCredentialAzureManagedIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessConnectorId = undefined;
      this._credentialId = undefined;
      this._managedIdentityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessConnectorId = value.accessConnectorId;
      this._credentialId = value.credentialId;
      this._managedIdentityId = value.managedIdentityId;
    }
  }

  // access_connector_id - computed: false, optional: false, required: true
  private _accessConnectorId?: string; 
  public get accessConnectorId() {
    return this.getStringAttribute('access_connector_id');
  }
  public set accessConnectorId(value: string) {
    this._accessConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConnectorIdInput() {
    return this._accessConnectorId;
  }

  // credential_id - computed: true, optional: true, required: false
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

  // managed_identity_id - computed: false, optional: true, required: false
  private _managedIdentityId?: string; 
  public get managedIdentityId() {
    return this.getStringAttribute('managed_identity_id');
  }
  public set managedIdentityId(value: string) {
    this._managedIdentityId = value;
  }
  public resetManagedIdentityId() {
    this._managedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIdentityIdInput() {
    return this._managedIdentityId;
  }
}
export interface StorageCredentialAzureServicePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#application_id StorageCredential#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#client_secret StorageCredential#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#directory_id StorageCredential#directory_id}
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
export interface StorageCredentialDatabricksGcpServiceAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#credential_id StorageCredential#credential_id}
  */
  readonly credentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#email StorageCredential#email}
  */
  readonly email?: string;
}

export function storageCredentialDatabricksGcpServiceAccountToTerraform(struct?: StorageCredentialDatabricksGcpServiceAccountOutputReference | StorageCredentialDatabricksGcpServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_id: cdktf.stringToTerraform(struct!.credentialId),
    email: cdktf.stringToTerraform(struct!.email),
  }
}

export class StorageCredentialDatabricksGcpServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageCredentialDatabricksGcpServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialId = this._credentialId;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCredentialDatabricksGcpServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialId = undefined;
      this._email = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialId = value.credentialId;
      this._email = value.email;
    }
  }

  // credential_id - computed: true, optional: true, required: false
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

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}
export interface StorageCredentialGcpServiceAccountKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#email StorageCredential#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#private_key StorageCredential#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#private_key_id StorageCredential#private_key_id}
  */
  readonly privateKeyId: string;
}

export function storageCredentialGcpServiceAccountKeyToTerraform(struct?: StorageCredentialGcpServiceAccountKeyOutputReference | StorageCredentialGcpServiceAccountKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_id: cdktf.stringToTerraform(struct!.privateKeyId),
  }
}

export class StorageCredentialGcpServiceAccountKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageCredentialGcpServiceAccountKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyId = this._privateKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCredentialGcpServiceAccountKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._privateKey = undefined;
      this._privateKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._privateKey = value.privateKey;
      this._privateKeyId = value.privateKeyId;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: false, optional: false, required: true
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential databricks_storage_credential}
*/
export class StorageCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_storage_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageCredential to import
  * @param importFromId The id of the existing StorageCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_storage_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/storage_credential databricks_storage_credential} Resource
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
        providerVersion: '1.33.0',
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
    this._forceDestroy = config.forceDestroy;
    this._forceUpdate = config.forceUpdate;
    this._id = config.id;
    this._metastoreId = config.metastoreId;
    this._name = config.name;
    this._owner = config.owner;
    this._readOnly = config.readOnly;
    this._awsIamRole.internalValue = config.awsIamRole;
    this._azureManagedIdentity.internalValue = config.azureManagedIdentity;
    this._azureServicePrincipal.internalValue = config.azureServicePrincipal;
    this._databricksGcpServiceAccount.internalValue = config.databricksGcpServiceAccount;
    this._gcpServiceAccountKey.internalValue = config.gcpServiceAccountKey;
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

  // azure_managed_identity - computed: false, optional: true, required: false
  private _azureManagedIdentity = new StorageCredentialAzureManagedIdentityOutputReference(this, "azure_managed_identity");
  public get azureManagedIdentity() {
    return this._azureManagedIdentity;
  }
  public putAzureManagedIdentity(value: StorageCredentialAzureManagedIdentity) {
    this._azureManagedIdentity.internalValue = value;
  }
  public resetAzureManagedIdentity() {
    this._azureManagedIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureManagedIdentityInput() {
    return this._azureManagedIdentity.internalValue;
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

  // databricks_gcp_service_account - computed: false, optional: true, required: false
  private _databricksGcpServiceAccount = new StorageCredentialDatabricksGcpServiceAccountOutputReference(this, "databricks_gcp_service_account");
  public get databricksGcpServiceAccount() {
    return this._databricksGcpServiceAccount;
  }
  public putDatabricksGcpServiceAccount(value: StorageCredentialDatabricksGcpServiceAccount) {
    this._databricksGcpServiceAccount.internalValue = value;
  }
  public resetDatabricksGcpServiceAccount() {
    this._databricksGcpServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksGcpServiceAccountInput() {
    return this._databricksGcpServiceAccount.internalValue;
  }

  // gcp_service_account_key - computed: false, optional: true, required: false
  private _gcpServiceAccountKey = new StorageCredentialGcpServiceAccountKeyOutputReference(this, "gcp_service_account_key");
  public get gcpServiceAccountKey() {
    return this._gcpServiceAccountKey;
  }
  public putGcpServiceAccountKey(value: StorageCredentialGcpServiceAccountKey) {
    this._gcpServiceAccountKey.internalValue = value;
  }
  public resetGcpServiceAccountKey() {
    this._gcpServiceAccountKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountKeyInput() {
    return this._gcpServiceAccountKey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      id: cdktf.stringToTerraform(this._id),
      metastore_id: cdktf.stringToTerraform(this._metastoreId),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      aws_iam_role: storageCredentialAwsIamRoleToTerraform(this._awsIamRole.internalValue),
      azure_managed_identity: storageCredentialAzureManagedIdentityToTerraform(this._azureManagedIdentity.internalValue),
      azure_service_principal: storageCredentialAzureServicePrincipalToTerraform(this._azureServicePrincipal.internalValue),
      databricks_gcp_service_account: storageCredentialDatabricksGcpServiceAccountToTerraform(this._databricksGcpServiceAccount.internalValue),
      gcp_service_account_key: storageCredentialGcpServiceAccountKeyToTerraform(this._gcpServiceAccountKey.internalValue),
    };
  }
}
