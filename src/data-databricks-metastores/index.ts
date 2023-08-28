// https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/metastores
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksMetastoresConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/metastores#id DataDatabricksMetastores#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/metastores#ids DataDatabricksMetastores#ids}
  */
  readonly ids?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/metastores databricks_metastores}
*/
export class DataDatabricksMetastores extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_metastores";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/metastores databricks_metastores} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksMetastoresConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksMetastoresConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_metastores',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.24.0',
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
    this._ids = config.ids;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: { [key: string]: string }; 
  public get ids() {
    return this.getStringMapAttribute('ids');
  }
  public set ids(value: { [key: string]: string }) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.hashMapper(cdktf.stringToTerraform)(this._ids),
    };
  }
}
