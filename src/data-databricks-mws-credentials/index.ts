// https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/mws_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksMwsCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/mws_credentials#id DataDatabricksMwsCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/mws_credentials#ids DataDatabricksMwsCredentials#ids}
  */
  readonly ids?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/mws_credentials databricks_mws_credentials}
*/
export class DataDatabricksMwsCredentials extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mws_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksMwsCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksMwsCredentials to import
  * @param importFromId The id of the existing DataDatabricksMwsCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/mws_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksMwsCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_mws_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/mws_credentials databricks_mws_credentials} Data Source
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
        providerVersion: '1.64.0',
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ids),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
