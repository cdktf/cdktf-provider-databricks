// https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen2_mount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureAdlsGen2MountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen2_mount#client_id AzureAdlsGen2Mount#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen2_mount#client_secret_key AzureAdlsGen2Mount#client_secret_key}
  */
  readonly clientSecretKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen2_mount#client_secret_scope AzureAdlsGen2Mount#client_secret_scope}
  */
  readonly clientSecretScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen2_mount#cluster_id AzureAdlsGen2Mount#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen2_mount#container_name AzureAdlsGen2Mount#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen2_mount#directory AzureAdlsGen2Mount#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen2_mount#id AzureAdlsGen2Mount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen2_mount#initialize_file_system AzureAdlsGen2Mount#initialize_file_system}
  */
  readonly initializeFileSystem: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen2_mount#mount_name AzureAdlsGen2Mount#mount_name}
  */
  readonly mountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen2_mount#storage_account_name AzureAdlsGen2Mount#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen2_mount#tenant_id AzureAdlsGen2Mount#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen2_mount databricks_azure_adls_gen2_mount}
*/
export class AzureAdlsGen2Mount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_azure_adls_gen2_mount";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen2_mount databricks_azure_adls_gen2_mount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureAdlsGen2MountConfig
  */
  public constructor(scope: Construct, id: string, config: AzureAdlsGen2MountConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_azure_adls_gen2_mount',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.6.3',
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
    this._clientId = config.clientId;
    this._clientSecretKey = config.clientSecretKey;
    this._clientSecretScope = config.clientSecretScope;
    this._clusterId = config.clusterId;
    this._containerName = config.containerName;
    this._directory = config.directory;
    this._id = config.id;
    this._initializeFileSystem = config.initializeFileSystem;
    this._mountName = config.mountName;
    this._storageAccountName = config.storageAccountName;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cluster_id - computed: false, optional: true, required: false
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

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // directory - computed: true, optional: true, required: false
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

  // mount_name - computed: false, optional: false, required: true
  private _mountName?: string; 
  public get mountName() {
    return this.getStringAttribute('mount_name');
  }
  public set mountName(value: string) {
    this._mountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountNameInput() {
    return this._mountName;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret_key: cdktf.stringToTerraform(this._clientSecretKey),
      client_secret_scope: cdktf.stringToTerraform(this._clientSecretScope),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      container_name: cdktf.stringToTerraform(this._containerName),
      directory: cdktf.stringToTerraform(this._directory),
      id: cdktf.stringToTerraform(this._id),
      initialize_file_system: cdktf.booleanToTerraform(this._initializeFileSystem),
      mount_name: cdktf.stringToTerraform(this._mountName),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }
}
