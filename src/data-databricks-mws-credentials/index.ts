// https://www.terraform.io/docs/providers/databricks/d/mws_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksMwsCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/mws_credentials#id DataDatabricksMwsCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/mws_credentials#ids DataDatabricksMwsCredentials#ids}
  */
  readonly ids?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/d/mws_credentials databricks_mws_credentials}
*/
export class DataDatabricksMwsCredentials extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mws_credentials";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/d/mws_credentials databricks_mws_credentials} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksMwsCredentialsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksMwsCredentialsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_mws_credentials',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.9.0',
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