// https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/data-sources/shares_pluginframework
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksSharesPluginframeworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/data-sources/shares_pluginframework#shares DataDatabricksSharesPluginframework#shares}
  */
  readonly shares?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/data-sources/shares_pluginframework databricks_shares_pluginframework}
*/
export class DataDatabricksSharesPluginframework extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_shares_pluginframework";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksSharesPluginframework resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksSharesPluginframework to import
  * @param importFromId The id of the existing DataDatabricksSharesPluginframework that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/data-sources/shares_pluginframework#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksSharesPluginframework to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_shares_pluginframework", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/data-sources/shares_pluginframework databricks_shares_pluginframework} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksSharesPluginframeworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksSharesPluginframeworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_shares_pluginframework',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.66.0',
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
    this._shares = config.shares;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // shares - computed: true, optional: true, required: false
  private _shares?: string[]; 
  public get shares() {
    return this.getListAttribute('shares');
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
      shares: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shares),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      shares: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._shares),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
