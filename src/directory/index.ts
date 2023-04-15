// https://www.terraform.io/docs/providers/databricks/r/directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/directory#delete_recursive Directory#delete_recursive}
  */
  readonly deleteRecursive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/directory#id Directory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/directory#object_id Directory#object_id}
  */
  readonly objectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/directory#path Directory#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/directory databricks_directory}
*/
export class Directory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_directory";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/directory databricks_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: DirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_directory',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.14.3',
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
    this._deleteRecursive = config.deleteRecursive;
    this._id = config.id;
    this._objectId = config.objectId;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_recursive - computed: false, optional: true, required: false
  private _deleteRecursive?: boolean | cdktf.IResolvable; 
  public get deleteRecursive() {
    return this.getBooleanAttribute('delete_recursive');
  }
  public set deleteRecursive(value: boolean | cdktf.IResolvable) {
    this._deleteRecursive = value;
  }
  public resetDeleteRecursive() {
    this._deleteRecursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRecursiveInput() {
    return this._deleteRecursive;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_recursive: cdktf.booleanToTerraform(this._deleteRecursive),
      id: cdktf.stringToTerraform(this._id),
      object_id: cdktf.numberToTerraform(this._objectId),
      path: cdktf.stringToTerraform(this._path),
    };
  }
}
