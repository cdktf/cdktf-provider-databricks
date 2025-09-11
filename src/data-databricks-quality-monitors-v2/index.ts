/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/quality_monitors_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksQualityMonitorsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/quality_monitors_v2#workspace_id DataDatabricksQualityMonitorsV2#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig {
}

export function dataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigToTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigToHclTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_run_id - computed: true, optional: false, required: false
  public get lastRunId() {
    return this.getStringAttribute('last_run_id');
  }

  // latest_run_status - computed: true, optional: false, required: false
  public get latestRunStatus() {
    return this.getStringAttribute('latest_run_status');
  }
}
export interface DataDatabricksQualityMonitorsV2QualityMonitors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/quality_monitors_v2#object_id DataDatabricksQualityMonitorsV2#object_id}
  */
  readonly objectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/quality_monitors_v2#object_type DataDatabricksQualityMonitorsV2#object_type}
  */
  readonly objectType: string;
}

export function dataDatabricksQualityMonitorsV2QualityMonitorsToTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id: cdktf.stringToTerraform(struct!.objectId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataDatabricksQualityMonitorsV2QualityMonitorsToHclTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksQualityMonitorsV2QualityMonitors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksQualityMonitorsV2QualityMonitors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectId = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectId = value.objectId;
      this._objectType = value.objectType;
    }
  }

  // anomaly_detection_config - computed: true, optional: false, required: false
  private _anomalyDetectionConfig = new DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference(this, "anomaly_detection_config");
  public get anomalyDetectionConfig() {
    return this._anomalyDetectionConfig;
  }

  // object_id - computed: true, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // object_type - computed: true, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class DataDatabricksQualityMonitorsV2QualityMonitorsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksQualityMonitorsV2QualityMonitors[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference {
    return new DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/quality_monitors_v2 databricks_quality_monitors_v2}
*/
export class DataDatabricksQualityMonitorsV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_quality_monitors_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksQualityMonitorsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksQualityMonitorsV2 to import
  * @param importFromId The id of the existing DataDatabricksQualityMonitorsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/quality_monitors_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksQualityMonitorsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_quality_monitors_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/quality_monitors_v2 databricks_quality_monitors_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksQualityMonitorsV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksQualityMonitorsV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_quality_monitors_v2',
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
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // quality_monitors - computed: true, optional: false, required: false
  private _qualityMonitors = new DataDatabricksQualityMonitorsV2QualityMonitorsList(this, "quality_monitors", false);
  public get qualityMonitors() {
    return this._qualityMonitors;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
