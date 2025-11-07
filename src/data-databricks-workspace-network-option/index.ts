/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/workspace_network_option
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksWorkspaceNetworkOptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/workspace_network_option#workspace_id DataDatabricksWorkspaceNetworkOption#workspace_id}
  */
  readonly workspaceId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/workspace_network_option databricks_workspace_network_option}
*/
export class DataDatabricksWorkspaceNetworkOption extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_workspace_network_option";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksWorkspaceNetworkOption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksWorkspaceNetworkOption to import
  * @param importFromId The id of the existing DataDatabricksWorkspaceNetworkOption that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/workspace_network_option#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksWorkspaceNetworkOption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_workspace_network_option", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/workspace_network_option databricks_workspace_network_option} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksWorkspaceNetworkOptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksWorkspaceNetworkOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_workspace_network_option',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.97.0',
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
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // network_policy_id - computed: true, optional: false, required: false
  public get networkPolicyId() {
    return this.getStringAttribute('network_policy_id');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: number; 
  public get workspaceId() {
    return this.getNumberAttribute('workspace_id');
  }
  public set workspaceId(value: number) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      workspace_id: cdktf.numberToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      workspace_id: {
        value: cdktf.numberToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
