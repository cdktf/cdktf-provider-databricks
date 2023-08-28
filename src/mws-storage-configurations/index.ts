// https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_storage_configurations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwsStorageConfigurationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_storage_configurations#account_id MwsStorageConfigurations#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_storage_configurations#bucket_name MwsStorageConfigurations#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_storage_configurations#id MwsStorageConfigurations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_storage_configurations#storage_configuration_name MwsStorageConfigurations#storage_configuration_name}
  */
  readonly storageConfigurationName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_storage_configurations databricks_mws_storage_configurations}
*/
export class MwsStorageConfigurations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mws_storage_configurations";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_storage_configurations databricks_mws_storage_configurations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MwsStorageConfigurationsConfig
  */
  public constructor(scope: Construct, id: string, config: MwsStorageConfigurationsConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mws_storage_configurations',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.24.0',
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
    this._accountId = config.accountId;
    this._bucketName = config.bucketName;
    this._id = config.id;
    this._storageConfigurationName = config.storageConfigurationName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
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

  // storage_configuration_id - computed: true, optional: false, required: false
  public get storageConfigurationId() {
    return this.getStringAttribute('storage_configuration_id');
  }

  // storage_configuration_name - computed: false, optional: false, required: true
  private _storageConfigurationName?: string; 
  public get storageConfigurationName() {
    return this.getStringAttribute('storage_configuration_name');
  }
  public set storageConfigurationName(value: string) {
    this._storageConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationNameInput() {
    return this._storageConfigurationName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      id: cdktf.stringToTerraform(this._id),
      storage_configuration_name: cdktf.stringToTerraform(this._storageConfigurationName),
    };
  }
}
