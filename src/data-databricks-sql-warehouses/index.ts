// https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/sql_warehouses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksSqlWarehousesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/sql_warehouses#id DataDatabricksSqlWarehouses#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/sql_warehouses#ids DataDatabricksSqlWarehouses#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/sql_warehouses#warehouse_name_contains DataDatabricksSqlWarehouses#warehouse_name_contains}
  */
  readonly warehouseNameContains?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/sql_warehouses databricks_sql_warehouses}
*/
export class DataDatabricksSqlWarehouses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_warehouses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksSqlWarehouses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksSqlWarehouses to import
  * @param importFromId The id of the existing DataDatabricksSqlWarehouses that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/sql_warehouses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksSqlWarehouses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_sql_warehouses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/sql_warehouses databricks_sql_warehouses} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksSqlWarehousesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksSqlWarehousesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_sql_warehouses',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.75.0',
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
    this._warehouseNameContains = config.warehouseNameContains;
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
  private _ids?: string[]; 
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // warehouse_name_contains - computed: false, optional: true, required: false
  private _warehouseNameContains?: string; 
  public get warehouseNameContains() {
    return this.getStringAttribute('warehouse_name_contains');
  }
  public set warehouseNameContains(value: string) {
    this._warehouseNameContains = value;
  }
  public resetWarehouseNameContains() {
    this._warehouseNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseNameContainsInput() {
    return this._warehouseNameContains;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      warehouse_name_contains: cdktf.stringToTerraform(this._warehouseNameContains),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      warehouse_name_contains: {
        value: cdktf.stringToHclTerraform(this._warehouseNameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
