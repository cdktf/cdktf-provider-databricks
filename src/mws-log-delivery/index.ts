/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwsLogDeliveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery#account_id MwsLogDelivery#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery#config_id MwsLogDelivery#config_id}
  */
  readonly configId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery#config_name MwsLogDelivery#config_name}
  */
  readonly configName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery#credentials_id MwsLogDelivery#credentials_id}
  */
  readonly credentialsId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery#delivery_path_prefix MwsLogDelivery#delivery_path_prefix}
  */
  readonly deliveryPathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery#delivery_start_time MwsLogDelivery#delivery_start_time}
  */
  readonly deliveryStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery#id MwsLogDelivery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery#log_type MwsLogDelivery#log_type}
  */
  readonly logType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery#output_format MwsLogDelivery#output_format}
  */
  readonly outputFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery#status MwsLogDelivery#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery#storage_configuration_id MwsLogDelivery#storage_configuration_id}
  */
  readonly storageConfigurationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery#workspace_ids_filter MwsLogDelivery#workspace_ids_filter}
  */
  readonly workspaceIdsFilter?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery databricks_mws_log_delivery}
*/
export class MwsLogDelivery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mws_log_delivery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MwsLogDelivery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MwsLogDelivery to import
  * @param importFromId The id of the existing MwsLogDelivery that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MwsLogDelivery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_mws_log_delivery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_log_delivery databricks_mws_log_delivery} Resource
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
        providerVersion: '1.87.1',
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
    this._configId = config.configId;
    this._configName = config.configName;
    this._credentialsId = config.credentialsId;
    this._deliveryPathPrefix = config.deliveryPathPrefix;
    this._deliveryStartTime = config.deliveryStartTime;
    this._id = config.id;
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
      id: cdktf.stringToTerraform(this._id),
      log_type: cdktf.stringToTerraform(this._logType),
      output_format: cdktf.stringToTerraform(this._outputFormat),
      status: cdktf.stringToTerraform(this._status),
      storage_configuration_id: cdktf.stringToTerraform(this._storageConfigurationId),
      workspace_ids_filter: cdktf.listMapper(cdktf.numberToTerraform, false)(this._workspaceIdsFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_id: {
        value: cdktf.stringToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_name: {
        value: cdktf.stringToHclTerraform(this._configName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials_id: {
        value: cdktf.stringToHclTerraform(this._credentialsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_path_prefix: {
        value: cdktf.stringToHclTerraform(this._deliveryPathPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_start_time: {
        value: cdktf.stringToHclTerraform(this._deliveryStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_type: {
        value: cdktf.stringToHclTerraform(this._logType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_format: {
        value: cdktf.stringToHclTerraform(this._outputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_configuration_id: {
        value: cdktf.stringToHclTerraform(this._storageConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_ids_filter: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._workspaceIdsFilter),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
