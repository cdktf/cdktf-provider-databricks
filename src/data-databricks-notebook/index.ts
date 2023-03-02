// https://www.terraform.io/docs/providers/databricks/d/notebook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksNotebookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook#format DataDatabricksNotebook#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook#id DataDatabricksNotebook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook#language DataDatabricksNotebook#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook#object_id DataDatabricksNotebook#object_id}
  */
  readonly objectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook#object_type DataDatabricksNotebook#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook#path DataDatabricksNotebook#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/d/notebook databricks_notebook}
*/
export class DataDatabricksNotebook extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_notebook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/d/notebook databricks_notebook} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksNotebookConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksNotebookConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_notebook',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.11.0',
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
    this._format = config.format;
    this._id = config.id;
    this._language = config.language;
    this._objectId = config.objectId;
    this._objectType = config.objectType;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // language - computed: true, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
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

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
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
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      language: cdktf.stringToTerraform(this._language),
      object_id: cdktf.numberToTerraform(this._objectId),
      object_type: cdktf.stringToTerraform(this._objectType),
      path: cdktf.stringToTerraform(this._path),
    };
  }
}
