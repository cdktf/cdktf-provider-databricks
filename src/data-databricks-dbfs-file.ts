// https://www.terraform.io/docs/providers/databricks/d/dbfs_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksDbfsFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/dbfs_file#limit_file_size DataDatabricksDbfsFile#limit_file_size}
  */
  readonly limitFileSize: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/dbfs_file#path DataDatabricksDbfsFile#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/d/dbfs_file databricks_dbfs_file}
*/
export class DataDatabricksDbfsFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_dbfs_file";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/d/dbfs_file databricks_dbfs_file} Data Source
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
        providerVersion: '0.5.8',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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
  public get id() {
    return this.getStringAttribute('id');
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
      limit_file_size: cdktf.booleanToTerraform(this._limitFileSize),
      path: cdktf.stringToTerraform(this._path),
    };
  }
}
