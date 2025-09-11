/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/dashboards
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksDashboardsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/dashboards#dashboard_name_contains DataDatabricksDashboards#dashboard_name_contains}
  */
  readonly dashboardNameContains?: string;
}
export interface DataDatabricksDashboardsDashboards {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/dashboards#display_name DataDatabricksDashboards#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/dashboards#serialized_dashboard DataDatabricksDashboards#serialized_dashboard}
  */
  readonly serializedDashboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/dashboards#warehouse_id DataDatabricksDashboards#warehouse_id}
  */
  readonly warehouseId?: string;
}

export function dataDatabricksDashboardsDashboardsToTerraform(struct?: DataDatabricksDashboardsDashboards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    serialized_dashboard: cdktf.stringToTerraform(struct!.serializedDashboard),
    warehouse_id: cdktf.stringToTerraform(struct!.warehouseId),
  }
}


export function dataDatabricksDashboardsDashboardsToHclTerraform(struct?: DataDatabricksDashboardsDashboards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serialized_dashboard: {
      value: cdktf.stringToHclTerraform(struct!.serializedDashboard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse_id: {
      value: cdktf.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDashboardsDashboardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksDashboardsDashboards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._serializedDashboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializedDashboard = this._serializedDashboard;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDashboardsDashboards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._serializedDashboard = undefined;
      this._warehouseId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._serializedDashboard = value.serializedDashboard;
      this._warehouseId = value.warehouseId;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dashboard_id - computed: true, optional: false, required: false
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // parent_path - computed: true, optional: false, required: false
  public get parentPath() {
    return this.getStringAttribute('parent_path');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // serialized_dashboard - computed: true, optional: true, required: false
  private _serializedDashboard?: string; 
  public get serializedDashboard() {
    return this.getStringAttribute('serialized_dashboard');
  }
  public set serializedDashboard(value: string) {
    this._serializedDashboard = value;
  }
  public resetSerializedDashboard() {
    this._serializedDashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializedDashboardInput() {
    return this._serializedDashboard;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // warehouse_id - computed: true, optional: true, required: false
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  public resetWarehouseId() {
    this._warehouseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }
}

export class DataDatabricksDashboardsDashboardsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksDashboardsDashboards[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksDashboardsDashboardsOutputReference {
    return new DataDatabricksDashboardsDashboardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/dashboards databricks_dashboards}
*/
export class DataDatabricksDashboards extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_dashboards";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksDashboards resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksDashboards to import
  * @param importFromId The id of the existing DataDatabricksDashboards that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/dashboards#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDashboards to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_dashboards", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/dashboards databricks_dashboards} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksDashboardsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksDashboardsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_dashboards',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.89.0',
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
    this._dashboardNameContains = config.dashboardNameContains;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_name_contains - computed: false, optional: true, required: false
  private _dashboardNameContains?: string; 
  public get dashboardNameContains() {
    return this.getStringAttribute('dashboard_name_contains');
  }
  public set dashboardNameContains(value: string) {
    this._dashboardNameContains = value;
  }
  public resetDashboardNameContains() {
    this._dashboardNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardNameContainsInput() {
    return this._dashboardNameContains;
  }

  // dashboards - computed: true, optional: false, required: false
  private _dashboards = new DataDatabricksDashboardsDashboardsList(this, "dashboards", false);
  public get dashboards() {
    return this._dashboards;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_name_contains: cdktf.stringToTerraform(this._dashboardNameContains),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_name_contains: {
        value: cdktf.stringToHclTerraform(this._dashboardNameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
