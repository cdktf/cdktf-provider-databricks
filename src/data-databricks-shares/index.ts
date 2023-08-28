// https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/shares
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksSharesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/shares#id DataDatabricksShares#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/shares#shares DataDatabricksShares#shares}
  */
  readonly shares?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/shares databricks_shares}
*/
export class DataDatabricksShares extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_shares";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/shares databricks_shares} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksSharesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksSharesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_shares',
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
    this._shares = config.shares;
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

  // shares - computed: true, optional: true, required: false
  private _shares?: string[]; 
  public get shares() {
    return cdktf.Fn.tolist(this.getListAttribute('shares'));
  }
  public set shares(value: string[]) {
    this._shares = value;
  }
  public resetShares() {
    this._shares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharesInput() {
    return this._shares;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      shares: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shares),
    };
  }
}
