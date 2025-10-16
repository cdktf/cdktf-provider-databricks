/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/data_quality_refresh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksDataQualityRefreshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/data_quality_refresh#object_id DataDatabricksDataQualityRefresh#object_id}
  */
  readonly objectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/data_quality_refresh#object_type DataDatabricksDataQualityRefresh#object_type}
  */
  readonly objectType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/data_quality_refresh databricks_data_quality_refresh}
*/
export class DataDatabricksDataQualityRefresh extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_data_quality_refresh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksDataQualityRefresh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksDataQualityRefresh to import
  * @param importFromId The id of the existing DataDatabricksDataQualityRefresh that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/data_quality_refresh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDataQualityRefresh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_data_quality_refresh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/data_quality_refresh databricks_data_quality_refresh} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksDataQualityRefreshConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksDataQualityRefreshConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_data_quality_refresh',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.92.0',
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
    this._objectId = config.objectId;
    this._objectType = config.objectType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_time_ms - computed: true, optional: false, required: false
  public get endTimeMs() {
    return this.getNumberAttribute('end_time_ms');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // refresh_id - computed: true, optional: false, required: false
  public get refreshId() {
    return this.getNumberAttribute('refresh_id');
  }

  // start_time_ms - computed: true, optional: false, required: false
  public get startTimeMs() {
    return this.getNumberAttribute('start_time_ms');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // trigger - computed: true, optional: false, required: false
  public get trigger() {
    return this.getStringAttribute('trigger');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      object_id: cdktf.stringToTerraform(this._objectId),
      object_type: cdktf.stringToTerraform(this._objectType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
