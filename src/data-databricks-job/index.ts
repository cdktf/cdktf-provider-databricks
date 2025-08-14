/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { DataDatabricksJobJobSettings, 
dataDatabricksJobJobSettingsToTerraform, 
dataDatabricksJobJobSettingsToHclTerraform, 
DataDatabricksJobJobSettingsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataDatabricksJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/job#job_id DataDatabricksJob#job_id}
  */
  readonly jobId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/job#job_name DataDatabricksJob#job_name}
  */
  readonly jobName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/job#name DataDatabricksJob#name}
  */
  readonly name?: string;
  /**
  * job_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/job#job_settings DataDatabricksJob#job_settings}
  */
  readonly jobSettings?: DataDatabricksJobJobSettings;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/job databricks_job}
*/
export class DataDatabricksJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksJob to import
  * @param importFromId The id of the existing DataDatabricksJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/job databricks_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksJobConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksJobConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_job',
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
    this._id = config.id;
    this._jobId = config.jobId;
    this._jobName = config.jobName;
    this._name = config.name;
    this._jobSettings.internalValue = config.jobSettings;
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

  // job_id - computed: true, optional: true, required: false
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_name - computed: true, optional: true, required: false
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  public resetJobName() {
    this._jobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
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

  // job_settings - computed: false, optional: true, required: false
  private _jobSettings = new DataDatabricksJobJobSettingsOutputReference(this, "job_settings");
  public get jobSettings() {
    return this._jobSettings;
  }
  public putJobSettings(value: DataDatabricksJobJobSettings) {
    this._jobSettings.internalValue = value;
  }
  public resetJobSettings() {
    this._jobSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobSettingsInput() {
    return this._jobSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      job_name: cdktf.stringToTerraform(this._jobName),
      name: cdktf.stringToTerraform(this._name),
      job_settings: dataDatabricksJobJobSettingsToTerraform(this._jobSettings.internalValue),
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
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_name: {
        value: cdktf.stringToHclTerraform(this._jobName),
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
      job_settings: {
        value: dataDatabricksJobJobSettingsToHclTerraform(this._jobSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksJobJobSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
