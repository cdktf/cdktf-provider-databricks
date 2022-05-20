// https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen1_mount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureAdlsGen1MountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}
  */
  readonly clientSecretKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}
  */
  readonly clientSecretScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}
  */
  readonly mountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}
  */
  readonly sparkConfPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}
  */
  readonly storageResourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen1_mount databricks_azure_adls_gen1_mount}
*/
export class AzureAdlsGen1Mount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_azure_adls_gen1_mount";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/azure_adls_gen1_mount databricks_azure_adls_gen1_mount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureAdlsGen1MountConfig
  */
  public constructor(scope: Construct, id: string, config: AzureAdlsGen1MountConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_azure_adls_gen1_mount',
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
    this._clientId = config.clientId;
    this._clientSecretKey = config.clientSecretKey;
    this._clientSecretScope = config.clientSecretScope;
    this._clusterId = config.clusterId;
    this._directory = config.directory;
    this._mountName = config.mountName;
    this._sparkConfPrefix = config.sparkConfPrefix;
    this._storageResourceName = config.storageResourceName;
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
  public get id() {
    return this.getStringAttribute('id');
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

  // storage_resource_name - computed: false, optional: false, required: true
  private _storageResourceName?: string; 
  public get storageResourceName() {
    return this.getStringAttribute('storage_resource_name');
  }
  public set storageResourceName(value: string) {
    this._storageResourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageResourceNameInput() {
    return this._storageResourceName;
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
      directory: cdktf.stringToTerraform(this._directory),
      mount_name: cdktf.stringToTerraform(this._mountName),
      spark_conf_prefix: cdktf.stringToTerraform(this._sparkConfPrefix),
      storage_resource_name: cdktf.stringToTerraform(this._storageResourceName),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }
}
