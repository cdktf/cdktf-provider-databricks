// https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetastoreDataAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#configuration_type MetastoreDataAccess#configuration_type}
  */
  readonly configurationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#id MetastoreDataAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#is_default MetastoreDataAccess#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#metastore_id MetastoreDataAccess#metastore_id}
  */
  readonly metastoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#name MetastoreDataAccess#name}
  */
  readonly name: string;
  /**
  * aws_iam_role block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#aws_iam_role MetastoreDataAccess#aws_iam_role}
  */
  readonly awsIamRole?: MetastoreDataAccessAwsIamRole;
  /**
  * azure_managed_identity block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#azure_managed_identity MetastoreDataAccess#azure_managed_identity}
  */
  readonly azureManagedIdentity?: MetastoreDataAccessAzureManagedIdentity;
  /**
  * azure_service_principal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#azure_service_principal MetastoreDataAccess#azure_service_principal}
  */
  readonly azureServicePrincipal?: MetastoreDataAccessAzureServicePrincipal;
  /**
  * databricks_gcp_service_account block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#databricks_gcp_service_account MetastoreDataAccess#databricks_gcp_service_account}
  */
  readonly databricksGcpServiceAccount?: MetastoreDataAccessDatabricksGcpServiceAccount;
  /**
  * gcp_service_account_key block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#gcp_service_account_key MetastoreDataAccess#gcp_service_account_key}
  */
  readonly gcpServiceAccountKey?: MetastoreDataAccessGcpServiceAccountKey;
}
export interface MetastoreDataAccessAwsIamRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#role_arn MetastoreDataAccess#role_arn}
  */
  readonly roleArn: string;
}

export function metastoreDataAccessAwsIamRoleToTerraform(struct?: MetastoreDataAccessAwsIamRoleOutputReference | MetastoreDataAccessAwsIamRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class MetastoreDataAccessAwsIamRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetastoreDataAccessAwsIamRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetastoreDataAccessAwsIamRole | undefined) {
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
export interface MetastoreDataAccessAzureManagedIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#access_connector_id MetastoreDataAccess#access_connector_id}
  */
  readonly accessConnectorId: string;
}

export function metastoreDataAccessAzureManagedIdentityToTerraform(struct?: MetastoreDataAccessAzureManagedIdentityOutputReference | MetastoreDataAccessAzureManagedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_connector_id: cdktf.stringToTerraform(struct!.accessConnectorId),
  }
}

export class MetastoreDataAccessAzureManagedIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetastoreDataAccessAzureManagedIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessConnectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConnectorId = this._accessConnectorId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetastoreDataAccessAzureManagedIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessConnectorId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessConnectorId = value.accessConnectorId;
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
}
export interface MetastoreDataAccessAzureServicePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#application_id MetastoreDataAccess#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#client_secret MetastoreDataAccess#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#directory_id MetastoreDataAccess#directory_id}
  */
  readonly directoryId: string;
}

export function metastoreDataAccessAzureServicePrincipalToTerraform(struct?: MetastoreDataAccessAzureServicePrincipalOutputReference | MetastoreDataAccessAzureServicePrincipal): any {
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

export class MetastoreDataAccessAzureServicePrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetastoreDataAccessAzureServicePrincipal | undefined {
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

  public set internalValue(value: MetastoreDataAccessAzureServicePrincipal | undefined) {
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
export interface MetastoreDataAccessDatabricksGcpServiceAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#email MetastoreDataAccess#email}
  */
  readonly email?: string;
}

export function metastoreDataAccessDatabricksGcpServiceAccountToTerraform(struct?: MetastoreDataAccessDatabricksGcpServiceAccountOutputReference | MetastoreDataAccessDatabricksGcpServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}

export class MetastoreDataAccessDatabricksGcpServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetastoreDataAccessDatabricksGcpServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetastoreDataAccessDatabricksGcpServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
    }
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
export interface MetastoreDataAccessGcpServiceAccountKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#email MetastoreDataAccess#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#private_key MetastoreDataAccess#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access#private_key_id MetastoreDataAccess#private_key_id}
  */
  readonly privateKeyId: string;
}

export function metastoreDataAccessGcpServiceAccountKeyToTerraform(struct?: MetastoreDataAccessGcpServiceAccountKeyOutputReference | MetastoreDataAccessGcpServiceAccountKey): any {
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

export class MetastoreDataAccessGcpServiceAccountKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetastoreDataAccessGcpServiceAccountKey | undefined {
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

  public set internalValue(value: MetastoreDataAccessGcpServiceAccountKey | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access databricks_metastore_data_access}
*/
export class MetastoreDataAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_metastore_data_access";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.16.0/docs/resources/metastore_data_access databricks_metastore_data_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetastoreDataAccessConfig
  */
  public constructor(scope: Construct, id: string, config: MetastoreDataAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_metastore_data_access',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.16.0',
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
    this._configurationType = config.configurationType;
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._metastoreId = config.metastoreId;
    this._name = config.name;
    this._awsIamRole.internalValue = config.awsIamRole;
    this._azureManagedIdentity.internalValue = config.azureManagedIdentity;
    this._azureServicePrincipal.internalValue = config.azureServicePrincipal;
    this._databricksGcpServiceAccount.internalValue = config.databricksGcpServiceAccount;
    this._gcpServiceAccountKey.internalValue = config.gcpServiceAccountKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_type - computed: true, optional: true, required: false
  private _configurationType?: string; 
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }
  public set configurationType(value: string) {
    this._configurationType = value;
  }
  public resetConfigurationType() {
    this._configurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTypeInput() {
    return this._configurationType;
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

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // metastore_id - computed: false, optional: false, required: true
  private _metastoreId?: string; 
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }
  public set metastoreId(value: string) {
    this._metastoreId = value;
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
  private _awsIamRole = new MetastoreDataAccessAwsIamRoleOutputReference(this, "aws_iam_role");
  public get awsIamRole() {
    return this._awsIamRole;
  }
  public putAwsIamRole(value: MetastoreDataAccessAwsIamRole) {
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
  private _azureManagedIdentity = new MetastoreDataAccessAzureManagedIdentityOutputReference(this, "azure_managed_identity");
  public get azureManagedIdentity() {
    return this._azureManagedIdentity;
  }
  public putAzureManagedIdentity(value: MetastoreDataAccessAzureManagedIdentity) {
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
  private _azureServicePrincipal = new MetastoreDataAccessAzureServicePrincipalOutputReference(this, "azure_service_principal");
  public get azureServicePrincipal() {
    return this._azureServicePrincipal;
  }
  public putAzureServicePrincipal(value: MetastoreDataAccessAzureServicePrincipal) {
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
  private _databricksGcpServiceAccount = new MetastoreDataAccessDatabricksGcpServiceAccountOutputReference(this, "databricks_gcp_service_account");
  public get databricksGcpServiceAccount() {
    return this._databricksGcpServiceAccount;
  }
  public putDatabricksGcpServiceAccount(value: MetastoreDataAccessDatabricksGcpServiceAccount) {
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
  private _gcpServiceAccountKey = new MetastoreDataAccessGcpServiceAccountKeyOutputReference(this, "gcp_service_account_key");
  public get gcpServiceAccountKey() {
    return this._gcpServiceAccountKey;
  }
  public putGcpServiceAccountKey(value: MetastoreDataAccessGcpServiceAccountKey) {
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
      configuration_type: cdktf.stringToTerraform(this._configurationType),
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      metastore_id: cdktf.stringToTerraform(this._metastoreId),
      name: cdktf.stringToTerraform(this._name),
      aws_iam_role: metastoreDataAccessAwsIamRoleToTerraform(this._awsIamRole.internalValue),
      azure_managed_identity: metastoreDataAccessAzureManagedIdentityToTerraform(this._azureManagedIdentity.internalValue),
      azure_service_principal: metastoreDataAccessAzureServicePrincipalToTerraform(this._azureServicePrincipal.internalValue),
      databricks_gcp_service_account: metastoreDataAccessDatabricksGcpServiceAccountToTerraform(this._databricksGcpServiceAccount.internalValue),
      gcp_service_account_key: metastoreDataAccessGcpServiceAccountKeyToTerraform(this._gcpServiceAccountKey.internalValue),
    };
  }
}
