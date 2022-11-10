// https://www.terraform.io/docs/providers/databricks/r/metastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetastoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#cloud Metastore#cloud}
  */
  readonly cloud?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#created_at Metastore#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#created_by Metastore#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#default_data_access_config_id Metastore#default_data_access_config_id}
  */
  readonly defaultDataAccessConfigId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#delta_sharing_organization_name Metastore#delta_sharing_organization_name}
  */
  readonly deltaSharingOrganizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#delta_sharing_recipient_token_lifetime_in_seconds Metastore#delta_sharing_recipient_token_lifetime_in_seconds}
  */
  readonly deltaSharingRecipientTokenLifetimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#delta_sharing_scope Metastore#delta_sharing_scope}
  */
  readonly deltaSharingScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#force_destroy Metastore#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#global_metastore_id Metastore#global_metastore_id}
  */
  readonly globalMetastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#id Metastore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#name Metastore#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#owner Metastore#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#region Metastore#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#storage_root Metastore#storage_root}
  */
  readonly storageRoot: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#updated_at Metastore#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#updated_by Metastore#updated_by}
  */
  readonly updatedBy?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/metastore databricks_metastore}
*/
export class Metastore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_metastore";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/metastore databricks_metastore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetastoreConfig
  */
  public constructor(scope: Construct, id: string, config: MetastoreConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_metastore',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.6.4',
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
    this._cloud = config.cloud;
    this._createdAt = config.createdAt;
    this._createdBy = config.createdBy;
    this._defaultDataAccessConfigId = config.defaultDataAccessConfigId;
    this._deltaSharingOrganizationName = config.deltaSharingOrganizationName;
    this._deltaSharingRecipientTokenLifetimeInSeconds = config.deltaSharingRecipientTokenLifetimeInSeconds;
    this._deltaSharingScope = config.deltaSharingScope;
    this._forceDestroy = config.forceDestroy;
    this._globalMetastoreId = config.globalMetastoreId;
    this._id = config.id;
    this._name = config.name;
    this._owner = config.owner;
    this._region = config.region;
    this._storageRoot = config.storageRoot;
    this._updatedAt = config.updatedAt;
    this._updatedBy = config.updatedBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud - computed: true, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // created_at - computed: true, optional: true, required: false
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

  // created_by - computed: true, optional: true, required: false
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

  // default_data_access_config_id - computed: false, optional: true, required: false
  private _defaultDataAccessConfigId?: string; 
  public get defaultDataAccessConfigId() {
    return this.getStringAttribute('default_data_access_config_id');
  }
  public set defaultDataAccessConfigId(value: string) {
    this._defaultDataAccessConfigId = value;
  }
  public resetDefaultDataAccessConfigId() {
    this._defaultDataAccessConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDataAccessConfigIdInput() {
    return this._defaultDataAccessConfigId;
  }

  // delta_sharing_organization_name - computed: false, optional: true, required: false
  private _deltaSharingOrganizationName?: string; 
  public get deltaSharingOrganizationName() {
    return this.getStringAttribute('delta_sharing_organization_name');
  }
  public set deltaSharingOrganizationName(value: string) {
    this._deltaSharingOrganizationName = value;
  }
  public resetDeltaSharingOrganizationName() {
    this._deltaSharingOrganizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSharingOrganizationNameInput() {
    return this._deltaSharingOrganizationName;
  }

  // delta_sharing_recipient_token_lifetime_in_seconds - computed: false, optional: true, required: false
  private _deltaSharingRecipientTokenLifetimeInSeconds?: number; 
  public get deltaSharingRecipientTokenLifetimeInSeconds() {
    return this.getNumberAttribute('delta_sharing_recipient_token_lifetime_in_seconds');
  }
  public set deltaSharingRecipientTokenLifetimeInSeconds(value: number) {
    this._deltaSharingRecipientTokenLifetimeInSeconds = value;
  }
  public resetDeltaSharingRecipientTokenLifetimeInSeconds() {
    this._deltaSharingRecipientTokenLifetimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSharingRecipientTokenLifetimeInSecondsInput() {
    return this._deltaSharingRecipientTokenLifetimeInSeconds;
  }

  // delta_sharing_scope - computed: false, optional: true, required: false
  private _deltaSharingScope?: string; 
  public get deltaSharingScope() {
    return this.getStringAttribute('delta_sharing_scope');
  }
  public set deltaSharingScope(value: string) {
    this._deltaSharingScope = value;
  }
  public resetDeltaSharingScope() {
    this._deltaSharingScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSharingScopeInput() {
    return this._deltaSharingScope;
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

  // global_metastore_id - computed: true, optional: true, required: false
  private _globalMetastoreId?: string; 
  public get globalMetastoreId() {
    return this.getStringAttribute('global_metastore_id');
  }
  public set globalMetastoreId(value: string) {
    this._globalMetastoreId = value;
  }
  public resetGlobalMetastoreId() {
    this._globalMetastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalMetastoreIdInput() {
    return this._globalMetastoreId;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // storage_root - computed: false, optional: false, required: true
  private _storageRoot?: string; 
  public get storageRoot() {
    return this.getStringAttribute('storage_root');
  }
  public set storageRoot(value: string) {
    this._storageRoot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRootInput() {
    return this._storageRoot;
  }

  // updated_at - computed: true, optional: true, required: false
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

  // updated_by - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud: cdktf.stringToTerraform(this._cloud),
      created_at: cdktf.numberToTerraform(this._createdAt),
      created_by: cdktf.stringToTerraform(this._createdBy),
      default_data_access_config_id: cdktf.stringToTerraform(this._defaultDataAccessConfigId),
      delta_sharing_organization_name: cdktf.stringToTerraform(this._deltaSharingOrganizationName),
      delta_sharing_recipient_token_lifetime_in_seconds: cdktf.numberToTerraform(this._deltaSharingRecipientTokenLifetimeInSeconds),
      delta_sharing_scope: cdktf.stringToTerraform(this._deltaSharingScope),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      global_metastore_id: cdktf.stringToTerraform(this._globalMetastoreId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      region: cdktf.stringToTerraform(this._region),
      storage_root: cdktf.stringToTerraform(this._storageRoot),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
      updated_by: cdktf.stringToTerraform(this._updatedBy),
    };
  }
}
