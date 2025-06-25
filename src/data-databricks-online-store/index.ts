/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/online_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksOnlineStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/online_store#capacity DataDatabricksOnlineStore#capacity}
  */
  readonly capacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/online_store#name DataDatabricksOnlineStore#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/online_store databricks_online_store}
*/
export class DataDatabricksOnlineStore extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_online_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksOnlineStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksOnlineStore to import
  * @param importFromId The id of the existing DataDatabricksOnlineStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/online_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksOnlineStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_online_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/online_store databricks_online_store} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksOnlineStoreConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksOnlineStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_online_store',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.84.0',
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
    this._capacity = config.capacity;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity: cdktf.stringToTerraform(this._capacity),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity: {
        value: cdktf.stringToHclTerraform(this._capacity),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
