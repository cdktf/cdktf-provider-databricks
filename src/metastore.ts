// https://www.terraform.io/docs/providers/databricks/r/metastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetastoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#default_data_access_config_id Metastore#default_data_access_config_id}
  */
  readonly defaultDataAccessConfigId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#force_destroy Metastore#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/metastore#storage_root Metastore#storage_root}
  */
  readonly storageRoot: string;
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
        providerVersion: '0.5.8',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultDataAccessConfigId = config.defaultDataAccessConfigId;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._name = config.name;
    this._owner = config.owner;
    this._storageRoot = config.storageRoot;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_data_access_config_id: cdktf.stringToTerraform(this._defaultDataAccessConfigId),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      storage_root: cdktf.stringToTerraform(this._storageRoot),
    };
  }
}
