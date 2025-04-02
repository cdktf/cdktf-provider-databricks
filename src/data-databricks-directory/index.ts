// https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/directory#id DataDatabricksDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/directory#object_id DataDatabricksDirectory#object_id}
  */
  readonly objectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/directory#path DataDatabricksDirectory#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/directory#workspace_path DataDatabricksDirectory#workspace_path}
  */
  readonly workspacePath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/directory databricks_directory}
*/
export class DataDatabricksDirectory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksDirectory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksDirectory to import
  * @param importFromId The id of the existing DataDatabricksDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/directory databricks_directory} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_directory',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.71.0',
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
    this._objectId = config.objectId;
    this._path = config.path;
    this._workspacePath = config.workspacePath;
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

  // object_id - computed: true, optional: true, required: false
  private _objectId?: number; 
  public get objectId() {
    return this.getNumberAttribute('object_id');
  }
  public set objectId(value: number) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
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

  // workspace_path - computed: true, optional: true, required: false
  private _workspacePath?: string; 
  public get workspacePath() {
    return this.getStringAttribute('workspace_path');
  }
  public set workspacePath(value: string) {
    this._workspacePath = value;
  }
  public resetWorkspacePath() {
    this._workspacePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspacePathInput() {
    return this._workspacePath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      object_id: cdktf.numberToTerraform(this._objectId),
      path: cdktf.stringToTerraform(this._path),
      workspace_path: cdktf.stringToTerraform(this._workspacePath),
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
      object_id: {
        value: cdktf.numberToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_path: {
        value: cdktf.stringToHclTerraform(this._workspacePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
