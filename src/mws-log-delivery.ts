// https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwsLogDeliveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#account_id MwsLogDelivery#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#config_id MwsLogDelivery#config_id}
  */
  readonly configId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#config_name MwsLogDelivery#config_name}
  */
  readonly configName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#credentials_id MwsLogDelivery#credentials_id}
  */
  readonly credentialsId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#delivery_path_prefix MwsLogDelivery#delivery_path_prefix}
  */
  readonly deliveryPathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#delivery_start_time MwsLogDelivery#delivery_start_time}
  */
  readonly deliveryStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#log_type MwsLogDelivery#log_type}
  */
  readonly logType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#output_format MwsLogDelivery#output_format}
  */
  readonly outputFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#status MwsLogDelivery#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#storage_configuration_id MwsLogDelivery#storage_configuration_id}
  */
  readonly storageConfigurationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#workspace_ids_filter MwsLogDelivery#workspace_ids_filter}
  */
  readonly workspaceIdsFilter?: number[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery databricks_mws_log_delivery}
*/
export class MwsLogDelivery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mws_log_delivery";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery databricks_mws_log_delivery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MwsLogDeliveryConfig
  */
  public constructor(scope: Construct, id: string, config: MwsLogDeliveryConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mws_log_delivery',
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
    this._accountId = config.accountId;
    this._configId = config.configId;
    this._configName = config.configName;
    this._credentialsId = config.credentialsId;
    this._deliveryPathPrefix = config.deliveryPathPrefix;
    this._deliveryStartTime = config.deliveryStartTime;
    this._logType = config.logType;
    this._outputFormat = config.outputFormat;
    this._status = config.status;
    this._storageConfigurationId = config.storageConfigurationId;
    this._workspaceIdsFilter = config.workspaceIdsFilter;
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

  // config_id - computed: true, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // config_name - computed: false, optional: true, required: false
  private _configName?: string; 
  public get configName() {
    return this.getStringAttribute('config_name');
  }
  public set configName(value: string) {
    this._configName = value;
  }
  public resetConfigName() {
    this._configName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configNameInput() {
    return this._configName;
  }

  // credentials_id - computed: false, optional: false, required: true
  private _credentialsId?: string; 
  public get credentialsId() {
    return this.getStringAttribute('credentials_id');
  }
  public set credentialsId(value: string) {
    this._credentialsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsIdInput() {
    return this._credentialsId;
  }

  // delivery_path_prefix - computed: false, optional: true, required: false
  private _deliveryPathPrefix?: string; 
  public get deliveryPathPrefix() {
    return this.getStringAttribute('delivery_path_prefix');
  }
  public set deliveryPathPrefix(value: string) {
    this._deliveryPathPrefix = value;
  }
  public resetDeliveryPathPrefix() {
    this._deliveryPathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryPathPrefixInput() {
    return this._deliveryPathPrefix;
  }

  // delivery_start_time - computed: true, optional: true, required: false
  private _deliveryStartTime?: string; 
  public get deliveryStartTime() {
    return this.getStringAttribute('delivery_start_time');
  }
  public set deliveryStartTime(value: string) {
    this._deliveryStartTime = value;
  }
  public resetDeliveryStartTime() {
    this._deliveryStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStartTimeInput() {
    return this._deliveryStartTime;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // output_format - computed: false, optional: false, required: true
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // storage_configuration_id - computed: false, optional: false, required: true
  private _storageConfigurationId?: string; 
  public get storageConfigurationId() {
    return this.getStringAttribute('storage_configuration_id');
  }
  public set storageConfigurationId(value: string) {
    this._storageConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationIdInput() {
    return this._storageConfigurationId;
  }

  // workspace_ids_filter - computed: false, optional: true, required: false
  private _workspaceIdsFilter?: number[]; 
  public get workspaceIdsFilter() {
    return this.getNumberListAttribute('workspace_ids_filter');
  }
  public set workspaceIdsFilter(value: number[]) {
    this._workspaceIdsFilter = value;
  }
  public resetWorkspaceIdsFilter() {
    this._workspaceIdsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdsFilterInput() {
    return this._workspaceIdsFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      config_id: cdktf.stringToTerraform(this._configId),
      config_name: cdktf.stringToTerraform(this._configName),
      credentials_id: cdktf.stringToTerraform(this._credentialsId),
      delivery_path_prefix: cdktf.stringToTerraform(this._deliveryPathPrefix),
      delivery_start_time: cdktf.stringToTerraform(this._deliveryStartTime),
      log_type: cdktf.stringToTerraform(this._logType),
      output_format: cdktf.stringToTerraform(this._outputFormat),
      status: cdktf.stringToTerraform(this._status),
      storage_configuration_id: cdktf.stringToTerraform(this._storageConfigurationId),
      workspace_ids_filter: cdktf.listMapper(cdktf.numberToTerraform)(this._workspaceIdsFilter),
    };
  }
}
