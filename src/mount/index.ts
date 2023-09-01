// https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#cluster_id Mount#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#encryption_type Mount#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#extra_configs Mount#extra_configs}
  */
  readonly extraConfigs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#id Mount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#name Mount#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#resource_id Mount#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#uri Mount#uri}
  */
  readonly uri?: string;
  /**
  * abfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#abfs Mount#abfs}
  */
  readonly abfs?: MountAbfs;
  /**
  * adl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#adl Mount#adl}
  */
  readonly adl?: MountAdl;
  /**
  * gs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#gs Mount#gs}
  */
  readonly gs?: MountGs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#s3 Mount#s3}
  */
  readonly s3?: MountS3;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#timeouts Mount#timeouts}
  */
  readonly timeouts?: MountTimeouts;
  /**
  * wasb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#wasb Mount#wasb}
  */
  readonly wasb?: MountWasb;
}
export interface MountAbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#client_id Mount#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#client_secret_key Mount#client_secret_key}
  */
  readonly clientSecretKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#client_secret_scope Mount#client_secret_scope}
  */
  readonly clientSecretScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#container_name Mount#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#directory Mount#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#initialize_file_system Mount#initialize_file_system}
  */
  readonly initializeFileSystem: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#storage_account_name Mount#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#tenant_id Mount#tenant_id}
  */
  readonly tenantId?: string;
}

export function mountAbfsToTerraform(struct?: MountAbfsOutputReference | MountAbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_key: cdktf.stringToTerraform(struct!.clientSecretKey),
    client_secret_scope: cdktf.stringToTerraform(struct!.clientSecretScope),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    directory: cdktf.stringToTerraform(struct!.directory),
    initialize_file_system: cdktf.booleanToTerraform(struct!.initializeFileSystem),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export class MountAbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MountAbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretKey = this._clientSecretKey;
    }
    if (this._clientSecretScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretScope = this._clientSecretScope;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._initializeFileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializeFileSystem = this._initializeFileSystem;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MountAbfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecretKey = undefined;
      this._clientSecretScope = undefined;
      this._containerName = undefined;
      this._directory = undefined;
      this._initializeFileSystem = undefined;
      this._storageAccountName = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecretKey = value.clientSecretKey;
      this._clientSecretScope = value.clientSecretScope;
      this._containerName = value.containerName;
      this._directory = value.directory;
      this._initializeFileSystem = value.initializeFileSystem;
      this._storageAccountName = value.storageAccountName;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_key - computed: false, optional: false, required: true
  private _clientSecretKey?: string; 
  public get clientSecretKey() {
    return this.getStringAttribute('client_secret_key');
  }
  public set clientSecretKey(value: string) {
    this._clientSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretKeyInput() {
    return this._clientSecretKey;
  }

  // client_secret_scope - computed: false, optional: false, required: true
  private _clientSecretScope?: string; 
  public get clientSecretScope() {
    return this.getStringAttribute('client_secret_scope');
  }
  public set clientSecretScope(value: string) {
    this._clientSecretScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretScopeInput() {
    return this._clientSecretScope;
  }

  // container_name - computed: true, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // initialize_file_system - computed: false, optional: false, required: true
  private _initializeFileSystem?: boolean | cdktf.IResolvable; 
  public get initializeFileSystem() {
    return this.getBooleanAttribute('initialize_file_system');
  }
  public set initializeFileSystem(value: boolean | cdktf.IResolvable) {
    this._initializeFileSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeFileSystemInput() {
    return this._initializeFileSystem;
  }

  // storage_account_name - computed: true, optional: true, required: false
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface MountAdl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#client_id Mount#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#client_secret_key Mount#client_secret_key}
  */
  readonly clientSecretKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#client_secret_scope Mount#client_secret_scope}
  */
  readonly clientSecretScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#directory Mount#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#spark_conf_prefix Mount#spark_conf_prefix}
  */
  readonly sparkConfPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#storage_resource_name Mount#storage_resource_name}
  */
  readonly storageResourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#tenant_id Mount#tenant_id}
  */
  readonly tenantId?: string;
}

export function mountAdlToTerraform(struct?: MountAdlOutputReference | MountAdl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_key: cdktf.stringToTerraform(struct!.clientSecretKey),
    client_secret_scope: cdktf.stringToTerraform(struct!.clientSecretScope),
    directory: cdktf.stringToTerraform(struct!.directory),
    spark_conf_prefix: cdktf.stringToTerraform(struct!.sparkConfPrefix),
    storage_resource_name: cdktf.stringToTerraform(struct!.storageResourceName),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export class MountAdlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MountAdl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretKey = this._clientSecretKey;
    }
    if (this._clientSecretScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretScope = this._clientSecretScope;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._sparkConfPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkConfPrefix = this._sparkConfPrefix;
    }
    if (this._storageResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageResourceName = this._storageResourceName;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MountAdl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecretKey = undefined;
      this._clientSecretScope = undefined;
      this._directory = undefined;
      this._sparkConfPrefix = undefined;
      this._storageResourceName = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecretKey = value.clientSecretKey;
      this._clientSecretScope = value.clientSecretScope;
      this._directory = value.directory;
      this._sparkConfPrefix = value.sparkConfPrefix;
      this._storageResourceName = value.storageResourceName;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_key - computed: false, optional: false, required: true
  private _clientSecretKey?: string; 
  public get clientSecretKey() {
    return this.getStringAttribute('client_secret_key');
  }
  public set clientSecretKey(value: string) {
    this._clientSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretKeyInput() {
    return this._clientSecretKey;
  }

  // client_secret_scope - computed: false, optional: false, required: true
  private _clientSecretScope?: string; 
  public get clientSecretScope() {
    return this.getStringAttribute('client_secret_scope');
  }
  public set clientSecretScope(value: string) {
    this._clientSecretScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretScopeInput() {
    return this._clientSecretScope;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // spark_conf_prefix - computed: false, optional: true, required: false
  private _sparkConfPrefix?: string; 
  public get sparkConfPrefix() {
    return this.getStringAttribute('spark_conf_prefix');
  }
  public set sparkConfPrefix(value: string) {
    this._sparkConfPrefix = value;
  }
  public resetSparkConfPrefix() {
    this._sparkConfPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfPrefixInput() {
    return this._sparkConfPrefix;
  }

  // storage_resource_name - computed: true, optional: true, required: false
  private _storageResourceName?: string; 
  public get storageResourceName() {
    return this.getStringAttribute('storage_resource_name');
  }
  public set storageResourceName(value: string) {
    this._storageResourceName = value;
  }
  public resetStorageResourceName() {
    this._storageResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageResourceNameInput() {
    return this._storageResourceName;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface MountGs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#bucket_name Mount#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#service_account Mount#service_account}
  */
  readonly serviceAccount?: string;
}

export function mountGsToTerraform(struct?: MountGsOutputReference | MountGs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}

export class MountGsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MountGs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MountGs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface MountS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#bucket_name Mount#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#instance_profile Mount#instance_profile}
  */
  readonly instanceProfile?: string;
}

export function mountS3ToTerraform(struct?: MountS3OutputReference | MountS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    instance_profile: cdktf.stringToTerraform(struct!.instanceProfile),
  }
}

export class MountS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MountS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._instanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfile = this._instanceProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MountS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._instanceProfile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._instanceProfile = value.instanceProfile;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // instance_profile - computed: false, optional: true, required: false
  private _instanceProfile?: string; 
  public get instanceProfile() {
    return this.getStringAttribute('instance_profile');
  }
  public set instanceProfile(value: string) {
    this._instanceProfile = value;
  }
  public resetInstanceProfile() {
    this._instanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileInput() {
    return this._instanceProfile;
  }
}
export interface MountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#default Mount#default}
  */
  readonly default?: string;
}

export function mountTimeoutsToTerraform(struct?: MountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class MountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MountTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MountTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}
export interface MountWasb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#auth_type Mount#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#container_name Mount#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#directory Mount#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#storage_account_name Mount#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#token_secret_key Mount#token_secret_key}
  */
  readonly tokenSecretKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount#token_secret_scope Mount#token_secret_scope}
  */
  readonly tokenSecretScope: string;
}

export function mountWasbToTerraform(struct?: MountWasbOutputReference | MountWasb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    directory: cdktf.stringToTerraform(struct!.directory),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    token_secret_key: cdktf.stringToTerraform(struct!.tokenSecretKey),
    token_secret_scope: cdktf.stringToTerraform(struct!.tokenSecretScope),
  }
}

export class MountWasbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MountWasb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._tokenSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecretKey = this._tokenSecretKey;
    }
    if (this._tokenSecretScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecretScope = this._tokenSecretScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MountWasb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authType = undefined;
      this._containerName = undefined;
      this._directory = undefined;
      this._storageAccountName = undefined;
      this._tokenSecretKey = undefined;
      this._tokenSecretScope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._containerName = value.containerName;
      this._directory = value.directory;
      this._storageAccountName = value.storageAccountName;
      this._tokenSecretKey = value.tokenSecretKey;
      this._tokenSecretScope = value.tokenSecretScope;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // container_name - computed: true, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // storage_account_name - computed: true, optional: true, required: false
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // token_secret_key - computed: false, optional: false, required: true
  private _tokenSecretKey?: string; 
  public get tokenSecretKey() {
    return this.getStringAttribute('token_secret_key');
  }
  public set tokenSecretKey(value: string) {
    this._tokenSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretKeyInput() {
    return this._tokenSecretKey;
  }

  // token_secret_scope - computed: false, optional: false, required: true
  private _tokenSecretScope?: string; 
  public get tokenSecretScope() {
    return this.getStringAttribute('token_secret_scope');
  }
  public set tokenSecretScope(value: string) {
    this._tokenSecretScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretScopeInput() {
    return this._tokenSecretScope;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount databricks_mount}
*/
export class Mount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mount";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/resources/mount databricks_mount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_mount',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.24.1',
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
    this._clusterId = config.clusterId;
    this._encryptionType = config.encryptionType;
    this._extraConfigs = config.extraConfigs;
    this._id = config.id;
    this._name = config.name;
    this._resourceId = config.resourceId;
    this._uri = config.uri;
    this._abfs.internalValue = config.abfs;
    this._adl.internalValue = config.adl;
    this._gs.internalValue = config.gs;
    this._s3.internalValue = config.s3;
    this._timeouts.internalValue = config.timeouts;
    this._wasb.internalValue = config.wasb;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // extra_configs - computed: false, optional: true, required: false
  private _extraConfigs?: { [key: string]: string }; 
  public get extraConfigs() {
    return this.getStringMapAttribute('extra_configs');
  }
  public set extraConfigs(value: { [key: string]: string }) {
    this._extraConfigs = value;
  }
  public resetExtraConfigs() {
    this._extraConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigsInput() {
    return this._extraConfigs;
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

  // name - computed: true, optional: true, required: false
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

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // abfs - computed: false, optional: true, required: false
  private _abfs = new MountAbfsOutputReference(this, "abfs");
  public get abfs() {
    return this._abfs;
  }
  public putAbfs(value: MountAbfs) {
    this._abfs.internalValue = value;
  }
  public resetAbfs() {
    this._abfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abfsInput() {
    return this._abfs.internalValue;
  }

  // adl - computed: false, optional: true, required: false
  private _adl = new MountAdlOutputReference(this, "adl");
  public get adl() {
    return this._adl;
  }
  public putAdl(value: MountAdl) {
    this._adl.internalValue = value;
  }
  public resetAdl() {
    this._adl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adlInput() {
    return this._adl.internalValue;
  }

  // gs - computed: false, optional: true, required: false
  private _gs = new MountGsOutputReference(this, "gs");
  public get gs() {
    return this._gs;
  }
  public putGs(value: MountGs) {
    this._gs.internalValue = value;
  }
  public resetGs() {
    this._gs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsInput() {
    return this._gs.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new MountS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: MountS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MountTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // wasb - computed: false, optional: true, required: false
  private _wasb = new MountWasbOutputReference(this, "wasb");
  public get wasb() {
    return this._wasb;
  }
  public putWasb(value: MountWasb) {
    this._wasb.internalValue = value;
  }
  public resetWasb() {
    this._wasb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wasbInput() {
    return this._wasb.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      encryption_type: cdktf.stringToTerraform(this._encryptionType),
      extra_configs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraConfigs),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      uri: cdktf.stringToTerraform(this._uri),
      abfs: mountAbfsToTerraform(this._abfs.internalValue),
      adl: mountAdlToTerraform(this._adl.internalValue),
      gs: mountGsToTerraform(this._gs.internalValue),
      s3: mountS3ToTerraform(this._s3.internalValue),
      timeouts: mountTimeoutsToTerraform(this._timeouts.internalValue),
      wasb: mountWasbToTerraform(this._wasb.internalValue),
    };
  }
}
