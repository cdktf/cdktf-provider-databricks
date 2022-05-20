// https://www.terraform.io/docs/providers/databricks/r/notebook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotebookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/notebook#content_base64 Notebook#content_base64}
  */
  readonly contentBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/notebook#format Notebook#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/notebook#language Notebook#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/notebook#md5 Notebook#md5}
  */
  readonly md5?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/notebook#object_id Notebook#object_id}
  */
  readonly objectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/notebook#object_type Notebook#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/notebook#path Notebook#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/notebook#source Notebook#source}
  */
  readonly source?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/notebook databricks_notebook}
*/
export class Notebook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_notebook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/notebook databricks_notebook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotebookConfig
  */
  public constructor(scope: Construct, id: string, config: NotebookConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_notebook',
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
    this._contentBase64 = config.contentBase64;
    this._format = config.format;
    this._language = config.language;
    this._md5 = config.md5;
    this._objectId = config.objectId;
    this._objectType = config.objectType;
    this._path = config.path;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_base64 - computed: false, optional: true, required: false
  private _contentBase64?: string; 
  public get contentBase64() {
    return this.getStringAttribute('content_base64');
  }
  public set contentBase64(value: string) {
    this._contentBase64 = value;
  }
  public resetContentBase64() {
    this._contentBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBase64Input() {
    return this._contentBase64;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language - computed: false, optional: true, required: false
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

  // md5 - computed: false, optional: true, required: false
  private _md5?: string; 
  public get md5() {
    return this.getStringAttribute('md5');
  }
  public set md5(value: string) {
    this._md5 = value;
  }
  public resetMd5() {
    this._md5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_base64: cdktf.stringToTerraform(this._contentBase64),
      format: cdktf.stringToTerraform(this._format),
      language: cdktf.stringToTerraform(this._language),
      md5: cdktf.stringToTerraform(this._md5),
      object_id: cdktf.numberToTerraform(this._objectId),
      object_type: cdktf.stringToTerraform(this._objectType),
      path: cdktf.stringToTerraform(this._path),
      source: cdktf.stringToTerraform(this._source),
    };
  }
}
