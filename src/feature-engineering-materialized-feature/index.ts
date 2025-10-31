/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FeatureEngineeringMaterializedFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#feature_name FeatureEngineeringMaterializedFeature#feature_name}
  */
  readonly featureName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#offline_store_config FeatureEngineeringMaterializedFeature#offline_store_config}
  */
  readonly offlineStoreConfig?: FeatureEngineeringMaterializedFeatureOfflineStoreConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#online_store_config FeatureEngineeringMaterializedFeature#online_store_config}
  */
  readonly onlineStoreConfig?: FeatureEngineeringMaterializedFeatureOnlineStoreConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#pipeline_schedule_state FeatureEngineeringMaterializedFeature#pipeline_schedule_state}
  */
  readonly pipelineScheduleState?: string;
}
export interface FeatureEngineeringMaterializedFeatureOfflineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#catalog_name FeatureEngineeringMaterializedFeature#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#schema_name FeatureEngineeringMaterializedFeature#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#table_name_prefix FeatureEngineeringMaterializedFeature#table_name_prefix}
  */
  readonly tableNamePrefix: string;
}

export function featureEngineeringMaterializedFeatureOfflineStoreConfigToTerraform(struct?: FeatureEngineeringMaterializedFeatureOfflineStoreConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_name: cdktf.stringToTerraform(struct!.catalogName),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    table_name_prefix: cdktf.stringToTerraform(struct!.tableNamePrefix),
  }
}


export function featureEngineeringMaterializedFeatureOfflineStoreConfigToHclTerraform(struct?: FeatureEngineeringMaterializedFeatureOfflineStoreConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_name: {
      value: cdktf.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.tableNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringMaterializedFeatureOfflineStoreConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNamePrefix = this._tableNamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringMaterializedFeatureOfflineStoreConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogName = undefined;
      this._schemaName = undefined;
      this._tableNamePrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogName = value.catalogName;
      this._schemaName = value.schemaName;
      this._tableNamePrefix = value.tableNamePrefix;
    }
  }

  // catalog_name - computed: false, optional: false, required: true
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // table_name_prefix - computed: false, optional: false, required: true
  private _tableNamePrefix?: string; 
  public get tableNamePrefix() {
    return this.getStringAttribute('table_name_prefix');
  }
  public set tableNamePrefix(value: string) {
    this._tableNamePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamePrefixInput() {
    return this._tableNamePrefix;
  }
}
export interface FeatureEngineeringMaterializedFeatureOnlineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#capacity FeatureEngineeringMaterializedFeature#capacity}
  */
  readonly capacity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#name FeatureEngineeringMaterializedFeature#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#read_replica_count FeatureEngineeringMaterializedFeature#read_replica_count}
  */
  readonly readReplicaCount?: number;
}

export function featureEngineeringMaterializedFeatureOnlineStoreConfigToTerraform(struct?: FeatureEngineeringMaterializedFeatureOnlineStoreConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
    read_replica_count: cdktf.numberToTerraform(struct!.readReplicaCount),
  }
}


export function featureEngineeringMaterializedFeatureOnlineStoreConfigToHclTerraform(struct?: FeatureEngineeringMaterializedFeatureOnlineStoreConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_replica_count: {
      value: cdktf.numberToHclTerraform(struct!.readReplicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringMaterializedFeatureOnlineStoreConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.readReplicaCount = this._readReplicaCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringMaterializedFeatureOnlineStoreConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._name = undefined;
      this._readReplicaCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._name = value.name;
      this._readReplicaCount = value.readReplicaCount;
    }
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // read_replica_count - computed: false, optional: true, required: false
  private _readReplicaCount?: number; 
  public get readReplicaCount() {
    return this.getNumberAttribute('read_replica_count');
  }
  public set readReplicaCount(value: number) {
    this._readReplicaCount = value;
  }
  public resetReadReplicaCount() {
    this._readReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readReplicaCountInput() {
    return this._readReplicaCount;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature databricks_feature_engineering_materialized_feature}
*/
export class FeatureEngineeringMaterializedFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_feature_engineering_materialized_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FeatureEngineeringMaterializedFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FeatureEngineeringMaterializedFeature to import
  * @param importFromId The id of the existing FeatureEngineeringMaterializedFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FeatureEngineeringMaterializedFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_feature_engineering_materialized_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature databricks_feature_engineering_materialized_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureEngineeringMaterializedFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: FeatureEngineeringMaterializedFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_feature_engineering_materialized_feature',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.96.0',
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
    this._featureName = config.featureName;
    this._offlineStoreConfig.internalValue = config.offlineStoreConfig;
    this._onlineStoreConfig.internalValue = config.onlineStoreConfig;
    this._pipelineScheduleState = config.pipelineScheduleState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature_name - computed: false, optional: false, required: true
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // last_materialization_time - computed: true, optional: false, required: false
  public get lastMaterializationTime() {
    return this.getStringAttribute('last_materialization_time');
  }

  // materialized_feature_id - computed: true, optional: false, required: false
  public get materializedFeatureId() {
    return this.getStringAttribute('materialized_feature_id');
  }

  // offline_store_config - computed: false, optional: true, required: false
  private _offlineStoreConfig = new FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference(this, "offline_store_config");
  public get offlineStoreConfig() {
    return this._offlineStoreConfig;
  }
  public putOfflineStoreConfig(value: FeatureEngineeringMaterializedFeatureOfflineStoreConfig) {
    this._offlineStoreConfig.internalValue = value;
  }
  public resetOfflineStoreConfig() {
    this._offlineStoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineStoreConfigInput() {
    return this._offlineStoreConfig.internalValue;
  }

  // online_store_config - computed: false, optional: true, required: false
  private _onlineStoreConfig = new FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference(this, "online_store_config");
  public get onlineStoreConfig() {
    return this._onlineStoreConfig;
  }
  public putOnlineStoreConfig(value: FeatureEngineeringMaterializedFeatureOnlineStoreConfig) {
    this._onlineStoreConfig.internalValue = value;
  }
  public resetOnlineStoreConfig() {
    this._onlineStoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineStoreConfigInput() {
    return this._onlineStoreConfig.internalValue;
  }

  // pipeline_schedule_state - computed: false, optional: true, required: false
  private _pipelineScheduleState?: string; 
  public get pipelineScheduleState() {
    return this.getStringAttribute('pipeline_schedule_state');
  }
  public set pipelineScheduleState(value: string) {
    this._pipelineScheduleState = value;
  }
  public resetPipelineScheduleState() {
    this._pipelineScheduleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineScheduleStateInput() {
    return this._pipelineScheduleState;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_name: cdktf.stringToTerraform(this._featureName),
      offline_store_config: featureEngineeringMaterializedFeatureOfflineStoreConfigToTerraform(this._offlineStoreConfig.internalValue),
      online_store_config: featureEngineeringMaterializedFeatureOnlineStoreConfigToTerraform(this._onlineStoreConfig.internalValue),
      pipeline_schedule_state: cdktf.stringToTerraform(this._pipelineScheduleState),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_name: {
        value: cdktf.stringToHclTerraform(this._featureName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offline_store_config: {
        value: featureEngineeringMaterializedFeatureOfflineStoreConfigToHclTerraform(this._offlineStoreConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringMaterializedFeatureOfflineStoreConfig",
      },
      online_store_config: {
        value: featureEngineeringMaterializedFeatureOnlineStoreConfigToHclTerraform(this._onlineStoreConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringMaterializedFeatureOnlineStoreConfig",
      },
      pipeline_schedule_state: {
        value: cdktf.stringToHclTerraform(this._pipelineScheduleState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
