/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/dbfs_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksDbfsFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/dbfs_file#id DataDatabricksDbfsFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/dbfs_file#limit_file_size DataDatabricksDbfsFile#limit_file_size}
  */
  readonly limitFileSize: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/dbfs_file#path DataDatabricksDbfsFile#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/dbfs_file databricks_dbfs_file}
*/
export class DataDatabricksDbfsFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_dbfs_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksDbfsFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksDbfsFile to import
  * @param importFromId The id of the existing DataDatabricksDbfsFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/dbfs_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDbfsFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_dbfs_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/dbfs_file databricks_dbfs_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksDbfsFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksDbfsFileConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_dbfs_file',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.53.0',
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
    this._limitFileSize = config.limitFileSize;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // file_size - computed: true, optional: false, required: false
  public get fileSize() {
    return this.getNumberAttribute('file_size');
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

  // limit_file_size - computed: false, optional: false, required: true
  private _limitFileSize?: boolean | cdktf.IResolvable; 
  public get limitFileSize() {
    return this.getBooleanAttribute('limit_file_size');
  }
  public set limitFileSize(value: boolean | cdktf.IResolvable) {
    this._limitFileSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitFileSizeInput() {
    return this._limitFileSize;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      limit_file_size: cdktf.booleanToTerraform(this._limitFileSize),
      path: cdktf.stringToTerraform(this._path),
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
      limit_file_size: {
        value: cdktf.booleanToHclTerraform(this._limitFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
