// https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksStorageCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#id DataDatabricksStorageCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#name DataDatabricksStorageCredential#name}
  */
  readonly name: string;
  /**
  * storage_credential_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#storage_credential_info DataDatabricksStorageCredential#storage_credential_info}
  */
  readonly storageCredentialInfo?: DataDatabricksStorageCredentialStorageCredentialInfo;
}
export interface DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#external_id DataDatabricksStorageCredential#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#role_arn DataDatabricksStorageCredential#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#unity_catalog_iam_arn DataDatabricksStorageCredential#unity_catalog_iam_arn}
  */
  readonly unityCatalogIamArn?: string;
}

export function dataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleToTerraform(struct?: DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference | DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole): any {
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


export function dataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleToHclTerraform(struct?: DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference | DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unity_catalog_iam_arn: {
      value: cdktf.stringToHclTerraform(struct!.unityCatalogIamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole | undefined {
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

  public set internalValue(value: DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole | undefined) {
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

  // external_id - computed: false, optional: true, required: false
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

  // unity_catalog_iam_arn - computed: false, optional: true, required: false
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
export interface DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#access_connector_id DataDatabricksStorageCredential#access_connector_id}
  */
  readonly accessConnectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#credential_id DataDatabricksStorageCredential#credential_id}
  */
  readonly credentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#managed_identity_id DataDatabricksStorageCredential#managed_identity_id}
  */
  readonly managedIdentityId?: string;
}

export function dataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityToTerraform(struct?: DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference | DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity): any {
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


export function dataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityToHclTerraform(struct?: DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference | DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_connector_id: {
      value: cdktf.stringToHclTerraform(struct!.accessConnectorId),
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
    managed_identity_id: {
      value: cdktf.stringToHclTerraform(struct!.managedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity | undefined {
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

  public set internalValue(value: DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity | undefined) {
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
export interface DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#application_id DataDatabricksStorageCredential#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#client_secret DataDatabricksStorageCredential#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#directory_id DataDatabricksStorageCredential#directory_id}
  */
  readonly directoryId: string;
}

export function dataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalToTerraform(struct?: DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference | DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal): any {
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


export function dataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalToHclTerraform(struct?: DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference | DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory_id: {
      value: cdktf.stringToHclTerraform(struct!.directoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal | undefined {
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

  public set internalValue(value: DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal | undefined) {
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
export interface DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#access_key_id DataDatabricksStorageCredential#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#account_id DataDatabricksStorageCredential#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#secret_access_key DataDatabricksStorageCredential#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function dataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenToTerraform(struct?: DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference | DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    account_id: cdktf.stringToTerraform(struct!.accountId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function dataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenToHclTerraform(struct?: DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference | DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._accountId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._accountId = value.accountId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#credential_id DataDatabricksStorageCredential#credential_id}
  */
  readonly credentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#email DataDatabricksStorageCredential#email}
  */
  readonly email?: string;
}

export function dataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountToTerraform(struct?: DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference | DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_id: cdktf.stringToTerraform(struct!.credentialId),
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function dataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountToHclTerraform(struct?: DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference | DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_id: {
      value: cdktf.stringToHclTerraform(struct!.credentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount | undefined {
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

  public set internalValue(value: DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount | undefined) {
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

  // email - computed: false, optional: true, required: false
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
export interface DataDatabricksStorageCredentialStorageCredentialInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#comment DataDatabricksStorageCredential#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#created_at DataDatabricksStorageCredential#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#created_by DataDatabricksStorageCredential#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#full_name DataDatabricksStorageCredential#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#id DataDatabricksStorageCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#isolation_mode DataDatabricksStorageCredential#isolation_mode}
  */
  readonly isolationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#metastore_id DataDatabricksStorageCredential#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#name DataDatabricksStorageCredential#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#owner DataDatabricksStorageCredential#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#read_only DataDatabricksStorageCredential#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#updated_at DataDatabricksStorageCredential#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#updated_by DataDatabricksStorageCredential#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#used_for_managed_storage DataDatabricksStorageCredential#used_for_managed_storage}
  */
  readonly usedForManagedStorage?: boolean | cdktf.IResolvable;
  /**
  * aws_iam_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#aws_iam_role DataDatabricksStorageCredential#aws_iam_role}
  */
  readonly awsIamRole?: DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole;
  /**
  * azure_managed_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#azure_managed_identity DataDatabricksStorageCredential#azure_managed_identity}
  */
  readonly azureManagedIdentity?: DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity;
  /**
  * azure_service_principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#azure_service_principal DataDatabricksStorageCredential#azure_service_principal}
  */
  readonly azureServicePrincipal?: DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal;
  /**
  * cloudflare_api_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#cloudflare_api_token DataDatabricksStorageCredential#cloudflare_api_token}
  */
  readonly cloudflareApiToken?: DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken;
  /**
  * databricks_gcp_service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#databricks_gcp_service_account DataDatabricksStorageCredential#databricks_gcp_service_account}
  */
  readonly databricksGcpServiceAccount?: DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount;
}

export function dataDatabricksStorageCredentialStorageCredentialInfoToTerraform(struct?: DataDatabricksStorageCredentialStorageCredentialInfoOutputReference | DataDatabricksStorageCredentialStorageCredentialInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    created_at: cdktf.numberToTerraform(struct!.createdAt),
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    full_name: cdktf.stringToTerraform(struct!.fullName),
    id: cdktf.stringToTerraform(struct!.id),
    isolation_mode: cdktf.stringToTerraform(struct!.isolationMode),
    metastore_id: cdktf.stringToTerraform(struct!.metastoreId),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    updated_at: cdktf.numberToTerraform(struct!.updatedAt),
    updated_by: cdktf.stringToTerraform(struct!.updatedBy),
    used_for_managed_storage: cdktf.booleanToTerraform(struct!.usedForManagedStorage),
    aws_iam_role: dataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleToTerraform(struct!.awsIamRole),
    azure_managed_identity: dataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityToTerraform(struct!.azureManagedIdentity),
    azure_service_principal: dataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalToTerraform(struct!.azureServicePrincipal),
    cloudflare_api_token: dataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenToTerraform(struct!.cloudflareApiToken),
    databricks_gcp_service_account: dataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountToTerraform(struct!.databricksGcpServiceAccount),
  }
}


export function dataDatabricksStorageCredentialStorageCredentialInfoToHclTerraform(struct?: DataDatabricksStorageCredentialStorageCredentialInfoOutputReference | DataDatabricksStorageCredentialStorageCredentialInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    full_name: {
      value: cdktf.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    used_for_managed_storage: {
      value: cdktf.booleanToHclTerraform(struct!.usedForManagedStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_iam_role: {
      value: dataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleToHclTerraform(struct!.awsIamRole),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleList",
    },
    azure_managed_identity: {
      value: dataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityToHclTerraform(struct!.azureManagedIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityList",
    },
    azure_service_principal: {
      value: dataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalToHclTerraform(struct!.azureServicePrincipal),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalList",
    },
    cloudflare_api_token: {
      value: dataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenToHclTerraform(struct!.cloudflareApiToken),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenList",
    },
    databricks_gcp_service_account: {
      value: dataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountToHclTerraform(struct!.databricksGcpServiceAccount),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksStorageCredentialStorageCredentialInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksStorageCredentialStorageCredentialInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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
    if (this._usedForManagedStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedForManagedStorage = this._usedForManagedStorage;
    }
    if (this._awsIamRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamRole = this._awsIamRole?.internalValue;
    }
    if (this._azureManagedIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureManagedIdentity = this._azureManagedIdentity?.internalValue;
    }
    if (this._azureServicePrincipal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureServicePrincipal = this._azureServicePrincipal?.internalValue;
    }
    if (this._cloudflareApiToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudflareApiToken = this._cloudflareApiToken?.internalValue;
    }
    if (this._databricksGcpServiceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksGcpServiceAccount = this._databricksGcpServiceAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksStorageCredentialStorageCredentialInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._createdAt = undefined;
      this._createdBy = undefined;
      this._fullName = undefined;
      this._id = undefined;
      this._isolationMode = undefined;
      this._metastoreId = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._readOnly = undefined;
      this._updatedAt = undefined;
      this._updatedBy = undefined;
      this._usedForManagedStorage = undefined;
      this._awsIamRole.internalValue = undefined;
      this._azureManagedIdentity.internalValue = undefined;
      this._azureServicePrincipal.internalValue = undefined;
      this._cloudflareApiToken.internalValue = undefined;
      this._databricksGcpServiceAccount.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._createdAt = value.createdAt;
      this._createdBy = value.createdBy;
      this._fullName = value.fullName;
      this._id = value.id;
      this._isolationMode = value.isolationMode;
      this._metastoreId = value.metastoreId;
      this._name = value.name;
      this._owner = value.owner;
      this._readOnly = value.readOnly;
      this._updatedAt = value.updatedAt;
      this._updatedBy = value.updatedBy;
      this._usedForManagedStorage = value.usedForManagedStorage;
      this._awsIamRole.internalValue = value.awsIamRole;
      this._azureManagedIdentity.internalValue = value.azureManagedIdentity;
      this._azureServicePrincipal.internalValue = value.azureServicePrincipal;
      this._cloudflareApiToken.internalValue = value.cloudflareApiToken;
      this._databricksGcpServiceAccount.internalValue = value.databricksGcpServiceAccount;
    }
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

  // full_name - computed: false, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // id - computed: false, optional: true, required: false
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

  // used_for_managed_storage - computed: false, optional: true, required: false
  private _usedForManagedStorage?: boolean | cdktf.IResolvable; 
  public get usedForManagedStorage() {
    return this.getBooleanAttribute('used_for_managed_storage');
  }
  public set usedForManagedStorage(value: boolean | cdktf.IResolvable) {
    this._usedForManagedStorage = value;
  }
  public resetUsedForManagedStorage() {
    this._usedForManagedStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedForManagedStorageInput() {
    return this._usedForManagedStorage;
  }

  // aws_iam_role - computed: false, optional: true, required: false
  private _awsIamRole = new DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference(this, "aws_iam_role");
  public get awsIamRole() {
    return this._awsIamRole;
  }
  public putAwsIamRole(value: DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole) {
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
  private _azureManagedIdentity = new DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference(this, "azure_managed_identity");
  public get azureManagedIdentity() {
    return this._azureManagedIdentity;
  }
  public putAzureManagedIdentity(value: DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity) {
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
  private _azureServicePrincipal = new DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference(this, "azure_service_principal");
  public get azureServicePrincipal() {
    return this._azureServicePrincipal;
  }
  public putAzureServicePrincipal(value: DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal) {
    this._azureServicePrincipal.internalValue = value;
  }
  public resetAzureServicePrincipal() {
    this._azureServicePrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureServicePrincipalInput() {
    return this._azureServicePrincipal.internalValue;
  }

  // cloudflare_api_token - computed: false, optional: true, required: false
  private _cloudflareApiToken = new DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference(this, "cloudflare_api_token");
  public get cloudflareApiToken() {
    return this._cloudflareApiToken;
  }
  public putCloudflareApiToken(value: DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken) {
    this._cloudflareApiToken.internalValue = value;
  }
  public resetCloudflareApiToken() {
    this._cloudflareApiToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareApiTokenInput() {
    return this._cloudflareApiToken.internalValue;
  }

  // databricks_gcp_service_account - computed: false, optional: true, required: false
  private _databricksGcpServiceAccount = new DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference(this, "databricks_gcp_service_account");
  public get databricksGcpServiceAccount() {
    return this._databricksGcpServiceAccount;
  }
  public putDatabricksGcpServiceAccount(value: DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount) {
    this._databricksGcpServiceAccount.internalValue = value;
  }
  public resetDatabricksGcpServiceAccount() {
    this._databricksGcpServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksGcpServiceAccountInput() {
    return this._databricksGcpServiceAccount.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential databricks_storage_credential}
*/
export class DataDatabricksStorageCredential extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_storage_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksStorageCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksStorageCredential to import
  * @param importFromId The id of the existing DataDatabricksStorageCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksStorageCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_storage_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/storage_credential databricks_storage_credential} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksStorageCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksStorageCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_storage_credential',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.71.0',
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
    this._storageCredentialInfo.internalValue = config.storageCredentialInfo;
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

  // storage_credential_info - computed: false, optional: true, required: false
  private _storageCredentialInfo = new DataDatabricksStorageCredentialStorageCredentialInfoOutputReference(this, "storage_credential_info");
  public get storageCredentialInfo() {
    return this._storageCredentialInfo;
  }
  public putStorageCredentialInfo(value: DataDatabricksStorageCredentialStorageCredentialInfo) {
    this._storageCredentialInfo.internalValue = value;
  }
  public resetStorageCredentialInfo() {
    this._storageCredentialInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCredentialInfoInput() {
    return this._storageCredentialInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      storage_credential_info: dataDatabricksStorageCredentialStorageCredentialInfoToTerraform(this._storageCredentialInfo.internalValue),
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
      storage_credential_info: {
        value: dataDatabricksStorageCredentialStorageCredentialInfoToHclTerraform(this._storageCredentialInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksStorageCredentialStorageCredentialInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
