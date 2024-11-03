// https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QualityMonitorPluginframeworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#assets_dir QualityMonitorPluginframework#assets_dir}
  */
  readonly assetsDir: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#baseline_table_name QualityMonitorPluginframework#baseline_table_name}
  */
  readonly baselineTableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#latest_monitor_failure_msg QualityMonitorPluginframework#latest_monitor_failure_msg}
  */
  readonly latestMonitorFailureMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#output_schema_name QualityMonitorPluginframework#output_schema_name}
  */
  readonly outputSchemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#skip_builtin_dashboard QualityMonitorPluginframework#skip_builtin_dashboard}
  */
  readonly skipBuiltinDashboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#slicing_exprs QualityMonitorPluginframework#slicing_exprs}
  */
  readonly slicingExprs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#table_name QualityMonitorPluginframework#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#warehouse_id QualityMonitorPluginframework#warehouse_id}
  */
  readonly warehouseId?: string;
  /**
  * custom_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#custom_metrics QualityMonitorPluginframework#custom_metrics}
  */
  readonly customMetrics?: QualityMonitorPluginframeworkCustomMetrics[] | cdktf.IResolvable;
  /**
  * data_classification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#data_classification_config QualityMonitorPluginframework#data_classification_config}
  */
  readonly dataClassificationConfig?: QualityMonitorPluginframeworkDataClassificationConfig[] | cdktf.IResolvable;
  /**
  * inference_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#inference_log QualityMonitorPluginframework#inference_log}
  */
  readonly inferenceLog?: QualityMonitorPluginframeworkInferenceLog[] | cdktf.IResolvable;
  /**
  * notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#notifications QualityMonitorPluginframework#notifications}
  */
  readonly notifications?: QualityMonitorPluginframeworkNotifications[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#schedule QualityMonitorPluginframework#schedule}
  */
  readonly schedule?: QualityMonitorPluginframeworkSchedule[] | cdktf.IResolvable;
  /**
  * snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#snapshot QualityMonitorPluginframework#snapshot}
  */
  readonly snapshot?: QualityMonitorPluginframeworkSnapshot[] | cdktf.IResolvable;
  /**
  * time_series block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#time_series QualityMonitorPluginframework#time_series}
  */
  readonly timeSeries?: QualityMonitorPluginframeworkTimeSeries[] | cdktf.IResolvable;
}
export interface QualityMonitorPluginframeworkCustomMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#definition QualityMonitorPluginframework#definition}
  */
  readonly definition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#input_columns QualityMonitorPluginframework#input_columns}
  */
  readonly inputColumns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#name QualityMonitorPluginframework#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#output_data_type QualityMonitorPluginframework#output_data_type}
  */
  readonly outputDataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#type QualityMonitorPluginframework#type}
  */
  readonly type: string;
}

export function qualityMonitorPluginframeworkCustomMetricsToTerraform(struct?: QualityMonitorPluginframeworkCustomMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    input_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputColumns),
    name: cdktf.stringToTerraform(struct!.name),
    output_data_type: cdktf.stringToTerraform(struct!.outputDataType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function qualityMonitorPluginframeworkCustomMetricsToHclTerraform(struct?: QualityMonitorPluginframeworkCustomMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_data_type: {
      value: cdktf.stringToHclTerraform(struct!.outputDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityMonitorPluginframeworkCustomMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QualityMonitorPluginframeworkCustomMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._inputColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputColumns = this._inputColumns;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outputDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputDataType = this._outputDataType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityMonitorPluginframeworkCustomMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._inputColumns = undefined;
      this._name = undefined;
      this._outputDataType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._inputColumns = value.inputColumns;
      this._name = value.name;
      this._outputDataType = value.outputDataType;
      this._type = value.type;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // input_columns - computed: false, optional: false, required: true
  private _inputColumns?: string[]; 
  public get inputColumns() {
    return this.getListAttribute('input_columns');
  }
  public set inputColumns(value: string[]) {
    this._inputColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputColumnsInput() {
    return this._inputColumns;
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

  // output_data_type - computed: false, optional: false, required: true
  private _outputDataType?: string; 
  public get outputDataType() {
    return this.getStringAttribute('output_data_type');
  }
  public set outputDataType(value: string) {
    this._outputDataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataTypeInput() {
    return this._outputDataType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class QualityMonitorPluginframeworkCustomMetricsList extends cdktf.ComplexList {
  public internalValue? : QualityMonitorPluginframeworkCustomMetrics[] | cdktf.IResolvable

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
  public get(index: number): QualityMonitorPluginframeworkCustomMetricsOutputReference {
    return new QualityMonitorPluginframeworkCustomMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityMonitorPluginframeworkDataClassificationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#enabled QualityMonitorPluginframework#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function qualityMonitorPluginframeworkDataClassificationConfigToTerraform(struct?: QualityMonitorPluginframeworkDataClassificationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function qualityMonitorPluginframeworkDataClassificationConfigToHclTerraform(struct?: QualityMonitorPluginframeworkDataClassificationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityMonitorPluginframeworkDataClassificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QualityMonitorPluginframeworkDataClassificationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityMonitorPluginframeworkDataClassificationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class QualityMonitorPluginframeworkDataClassificationConfigList extends cdktf.ComplexList {
  public internalValue? : QualityMonitorPluginframeworkDataClassificationConfig[] | cdktf.IResolvable

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
  public get(index: number): QualityMonitorPluginframeworkDataClassificationConfigOutputReference {
    return new QualityMonitorPluginframeworkDataClassificationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityMonitorPluginframeworkInferenceLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}
  */
  readonly granularities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#label_col QualityMonitorPluginframework#label_col}
  */
  readonly labelCol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#model_id_col QualityMonitorPluginframework#model_id_col}
  */
  readonly modelIdCol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#prediction_col QualityMonitorPluginframework#prediction_col}
  */
  readonly predictionCol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#prediction_proba_col QualityMonitorPluginframework#prediction_proba_col}
  */
  readonly predictionProbaCol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#problem_type QualityMonitorPluginframework#problem_type}
  */
  readonly problemType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}
  */
  readonly timestampCol: string;
}

export function qualityMonitorPluginframeworkInferenceLogToTerraform(struct?: QualityMonitorPluginframeworkInferenceLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    granularities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.granularities),
    label_col: cdktf.stringToTerraform(struct!.labelCol),
    model_id_col: cdktf.stringToTerraform(struct!.modelIdCol),
    prediction_col: cdktf.stringToTerraform(struct!.predictionCol),
    prediction_proba_col: cdktf.stringToTerraform(struct!.predictionProbaCol),
    problem_type: cdktf.stringToTerraform(struct!.problemType),
    timestamp_col: cdktf.stringToTerraform(struct!.timestampCol),
  }
}


export function qualityMonitorPluginframeworkInferenceLogToHclTerraform(struct?: QualityMonitorPluginframeworkInferenceLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    granularities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.granularities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label_col: {
      value: cdktf.stringToHclTerraform(struct!.labelCol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id_col: {
      value: cdktf.stringToHclTerraform(struct!.modelIdCol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prediction_col: {
      value: cdktf.stringToHclTerraform(struct!.predictionCol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prediction_proba_col: {
      value: cdktf.stringToHclTerraform(struct!.predictionProbaCol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    problem_type: {
      value: cdktf.stringToHclTerraform(struct!.problemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_col: {
      value: cdktf.stringToHclTerraform(struct!.timestampCol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityMonitorPluginframeworkInferenceLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QualityMonitorPluginframeworkInferenceLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._granularities !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularities = this._granularities;
    }
    if (this._labelCol !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelCol = this._labelCol;
    }
    if (this._modelIdCol !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelIdCol = this._modelIdCol;
    }
    if (this._predictionCol !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictionCol = this._predictionCol;
    }
    if (this._predictionProbaCol !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictionProbaCol = this._predictionProbaCol;
    }
    if (this._problemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.problemType = this._problemType;
    }
    if (this._timestampCol !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampCol = this._timestampCol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityMonitorPluginframeworkInferenceLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._granularities = undefined;
      this._labelCol = undefined;
      this._modelIdCol = undefined;
      this._predictionCol = undefined;
      this._predictionProbaCol = undefined;
      this._problemType = undefined;
      this._timestampCol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._granularities = value.granularities;
      this._labelCol = value.labelCol;
      this._modelIdCol = value.modelIdCol;
      this._predictionCol = value.predictionCol;
      this._predictionProbaCol = value.predictionProbaCol;
      this._problemType = value.problemType;
      this._timestampCol = value.timestampCol;
    }
  }

  // granularities - computed: false, optional: false, required: true
  private _granularities?: string[]; 
  public get granularities() {
    return this.getListAttribute('granularities');
  }
  public set granularities(value: string[]) {
    this._granularities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granularitiesInput() {
    return this._granularities;
  }

  // label_col - computed: false, optional: true, required: false
  private _labelCol?: string; 
  public get labelCol() {
    return this.getStringAttribute('label_col');
  }
  public set labelCol(value: string) {
    this._labelCol = value;
  }
  public resetLabelCol() {
    this._labelCol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelColInput() {
    return this._labelCol;
  }

  // model_id_col - computed: false, optional: false, required: true
  private _modelIdCol?: string; 
  public get modelIdCol() {
    return this.getStringAttribute('model_id_col');
  }
  public set modelIdCol(value: string) {
    this._modelIdCol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdColInput() {
    return this._modelIdCol;
  }

  // prediction_col - computed: false, optional: false, required: true
  private _predictionCol?: string; 
  public get predictionCol() {
    return this.getStringAttribute('prediction_col');
  }
  public set predictionCol(value: string) {
    this._predictionCol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predictionColInput() {
    return this._predictionCol;
  }

  // prediction_proba_col - computed: false, optional: true, required: false
  private _predictionProbaCol?: string; 
  public get predictionProbaCol() {
    return this.getStringAttribute('prediction_proba_col');
  }
  public set predictionProbaCol(value: string) {
    this._predictionProbaCol = value;
  }
  public resetPredictionProbaCol() {
    this._predictionProbaCol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictionProbaColInput() {
    return this._predictionProbaCol;
  }

  // problem_type - computed: false, optional: false, required: true
  private _problemType?: string; 
  public get problemType() {
    return this.getStringAttribute('problem_type');
  }
  public set problemType(value: string) {
    this._problemType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get problemTypeInput() {
    return this._problemType;
  }

  // timestamp_col - computed: false, optional: false, required: true
  private _timestampCol?: string; 
  public get timestampCol() {
    return this.getStringAttribute('timestamp_col');
  }
  public set timestampCol(value: string) {
    this._timestampCol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampColInput() {
    return this._timestampCol;
  }
}

export class QualityMonitorPluginframeworkInferenceLogList extends cdktf.ComplexList {
  public internalValue? : QualityMonitorPluginframeworkInferenceLog[] | cdktf.IResolvable

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
  public get(index: number): QualityMonitorPluginframeworkInferenceLogOutputReference {
    return new QualityMonitorPluginframeworkInferenceLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityMonitorPluginframeworkNotificationsOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}
  */
  readonly emailAddresses?: string[];
}

export function qualityMonitorPluginframeworkNotificationsOnFailureToTerraform(struct?: QualityMonitorPluginframeworkNotificationsOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailAddresses),
  }
}


export function qualityMonitorPluginframeworkNotificationsOnFailureToHclTerraform(struct?: QualityMonitorPluginframeworkNotificationsOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityMonitorPluginframeworkNotificationsOnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QualityMonitorPluginframeworkNotificationsOnFailure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddresses = this._emailAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityMonitorPluginframeworkNotificationsOnFailure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddresses = value.emailAddresses;
    }
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }
}

export class QualityMonitorPluginframeworkNotificationsOnFailureList extends cdktf.ComplexList {
  public internalValue? : QualityMonitorPluginframeworkNotificationsOnFailure[] | cdktf.IResolvable

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
  public get(index: number): QualityMonitorPluginframeworkNotificationsOnFailureOutputReference {
    return new QualityMonitorPluginframeworkNotificationsOnFailureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}
  */
  readonly emailAddresses?: string[];
}

export function qualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedToTerraform(struct?: QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailAddresses),
  }
}


export function qualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedToHclTerraform(struct?: QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddresses = this._emailAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddresses = value.emailAddresses;
    }
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }
}

export class QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedList extends cdktf.ComplexList {
  public internalValue? : QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected[] | cdktf.IResolvable

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
  public get(index: number): QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference {
    return new QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityMonitorPluginframeworkNotifications {
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#on_failure QualityMonitorPluginframework#on_failure}
  */
  readonly onFailure?: QualityMonitorPluginframeworkNotificationsOnFailure[] | cdktf.IResolvable;
  /**
  * on_new_classification_tag_detected block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#on_new_classification_tag_detected QualityMonitorPluginframework#on_new_classification_tag_detected}
  */
  readonly onNewClassificationTagDetected?: QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected[] | cdktf.IResolvable;
}

export function qualityMonitorPluginframeworkNotificationsToTerraform(struct?: QualityMonitorPluginframeworkNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_failure: cdktf.listMapper(qualityMonitorPluginframeworkNotificationsOnFailureToTerraform, true)(struct!.onFailure),
    on_new_classification_tag_detected: cdktf.listMapper(qualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedToTerraform, true)(struct!.onNewClassificationTagDetected),
  }
}


export function qualityMonitorPluginframeworkNotificationsToHclTerraform(struct?: QualityMonitorPluginframeworkNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_failure: {
      value: cdktf.listMapperHcl(qualityMonitorPluginframeworkNotificationsOnFailureToHclTerraform, true)(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "QualityMonitorPluginframeworkNotificationsOnFailureList",
    },
    on_new_classification_tag_detected: {
      value: cdktf.listMapperHcl(qualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedToHclTerraform, true)(struct!.onNewClassificationTagDetected),
      isBlock: true,
      type: "list",
      storageClassType: "QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityMonitorPluginframeworkNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QualityMonitorPluginframeworkNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    if (this._onNewClassificationTagDetected?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onNewClassificationTagDetected = this._onNewClassificationTagDetected?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityMonitorPluginframeworkNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onFailure.internalValue = undefined;
      this._onNewClassificationTagDetected.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onFailure.internalValue = value.onFailure;
      this._onNewClassificationTagDetected.internalValue = value.onNewClassificationTagDetected;
    }
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new QualityMonitorPluginframeworkNotificationsOnFailureList(this, "on_failure", false);
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: QualityMonitorPluginframeworkNotificationsOnFailure[] | cdktf.IResolvable) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }

  // on_new_classification_tag_detected - computed: false, optional: true, required: false
  private _onNewClassificationTagDetected = new QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedList(this, "on_new_classification_tag_detected", false);
  public get onNewClassificationTagDetected() {
    return this._onNewClassificationTagDetected;
  }
  public putOnNewClassificationTagDetected(value: QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected[] | cdktf.IResolvable) {
    this._onNewClassificationTagDetected.internalValue = value;
  }
  public resetOnNewClassificationTagDetected() {
    this._onNewClassificationTagDetected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onNewClassificationTagDetectedInput() {
    return this._onNewClassificationTagDetected.internalValue;
  }
}

export class QualityMonitorPluginframeworkNotificationsList extends cdktf.ComplexList {
  public internalValue? : QualityMonitorPluginframeworkNotifications[] | cdktf.IResolvable

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
  public get(index: number): QualityMonitorPluginframeworkNotificationsOutputReference {
    return new QualityMonitorPluginframeworkNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityMonitorPluginframeworkSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#quartz_cron_expression QualityMonitorPluginframework#quartz_cron_expression}
  */
  readonly quartzCronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#timezone_id QualityMonitorPluginframework#timezone_id}
  */
  readonly timezoneId: string;
}

export function qualityMonitorPluginframeworkScheduleToTerraform(struct?: QualityMonitorPluginframeworkSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quartz_cron_expression: cdktf.stringToTerraform(struct!.quartzCronExpression),
    timezone_id: cdktf.stringToTerraform(struct!.timezoneId),
  }
}


export function qualityMonitorPluginframeworkScheduleToHclTerraform(struct?: QualityMonitorPluginframeworkSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quartz_cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.quartzCronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone_id: {
      value: cdktf.stringToHclTerraform(struct!.timezoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityMonitorPluginframeworkScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QualityMonitorPluginframeworkSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quartzCronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.quartzCronExpression = this._quartzCronExpression;
    }
    if (this._timezoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezoneId = this._timezoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityMonitorPluginframeworkSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quartzCronExpression = undefined;
      this._timezoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quartzCronExpression = value.quartzCronExpression;
      this._timezoneId = value.timezoneId;
    }
  }

  // pause_status - computed: true, optional: false, required: false
  public get pauseStatus() {
    return this.getStringAttribute('pause_status');
  }

  // quartz_cron_expression - computed: false, optional: false, required: true
  private _quartzCronExpression?: string; 
  public get quartzCronExpression() {
    return this.getStringAttribute('quartz_cron_expression');
  }
  public set quartzCronExpression(value: string) {
    this._quartzCronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quartzCronExpressionInput() {
    return this._quartzCronExpression;
  }

  // timezone_id - computed: false, optional: false, required: true
  private _timezoneId?: string; 
  public get timezoneId() {
    return this.getStringAttribute('timezone_id');
  }
  public set timezoneId(value: string) {
    this._timezoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneIdInput() {
    return this._timezoneId;
  }
}

export class QualityMonitorPluginframeworkScheduleList extends cdktf.ComplexList {
  public internalValue? : QualityMonitorPluginframeworkSchedule[] | cdktf.IResolvable

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
  public get(index: number): QualityMonitorPluginframeworkScheduleOutputReference {
    return new QualityMonitorPluginframeworkScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityMonitorPluginframeworkSnapshot {
}

export function qualityMonitorPluginframeworkSnapshotToTerraform(struct?: QualityMonitorPluginframeworkSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function qualityMonitorPluginframeworkSnapshotToHclTerraform(struct?: QualityMonitorPluginframeworkSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class QualityMonitorPluginframeworkSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QualityMonitorPluginframeworkSnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityMonitorPluginframeworkSnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class QualityMonitorPluginframeworkSnapshotList extends cdktf.ComplexList {
  public internalValue? : QualityMonitorPluginframeworkSnapshot[] | cdktf.IResolvable

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
  public get(index: number): QualityMonitorPluginframeworkSnapshotOutputReference {
    return new QualityMonitorPluginframeworkSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityMonitorPluginframeworkTimeSeries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}
  */
  readonly granularities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}
  */
  readonly timestampCol: string;
}

export function qualityMonitorPluginframeworkTimeSeriesToTerraform(struct?: QualityMonitorPluginframeworkTimeSeries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    granularities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.granularities),
    timestamp_col: cdktf.stringToTerraform(struct!.timestampCol),
  }
}


export function qualityMonitorPluginframeworkTimeSeriesToHclTerraform(struct?: QualityMonitorPluginframeworkTimeSeries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    granularities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.granularities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    timestamp_col: {
      value: cdktf.stringToHclTerraform(struct!.timestampCol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityMonitorPluginframeworkTimeSeriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QualityMonitorPluginframeworkTimeSeries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._granularities !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularities = this._granularities;
    }
    if (this._timestampCol !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampCol = this._timestampCol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityMonitorPluginframeworkTimeSeries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._granularities = undefined;
      this._timestampCol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._granularities = value.granularities;
      this._timestampCol = value.timestampCol;
    }
  }

  // granularities - computed: false, optional: false, required: true
  private _granularities?: string[]; 
  public get granularities() {
    return this.getListAttribute('granularities');
  }
  public set granularities(value: string[]) {
    this._granularities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granularitiesInput() {
    return this._granularities;
  }

  // timestamp_col - computed: false, optional: false, required: true
  private _timestampCol?: string; 
  public get timestampCol() {
    return this.getStringAttribute('timestamp_col');
  }
  public set timestampCol(value: string) {
    this._timestampCol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampColInput() {
    return this._timestampCol;
  }
}

export class QualityMonitorPluginframeworkTimeSeriesList extends cdktf.ComplexList {
  public internalValue? : QualityMonitorPluginframeworkTimeSeries[] | cdktf.IResolvable

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
  public get(index: number): QualityMonitorPluginframeworkTimeSeriesOutputReference {
    return new QualityMonitorPluginframeworkTimeSeriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework databricks_quality_monitor_pluginframework}
*/
export class QualityMonitorPluginframework extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_quality_monitor_pluginframework";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QualityMonitorPluginframework resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QualityMonitorPluginframework to import
  * @param importFromId The id of the existing QualityMonitorPluginframework that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QualityMonitorPluginframework to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_quality_monitor_pluginframework", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/quality_monitor_pluginframework databricks_quality_monitor_pluginframework} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QualityMonitorPluginframeworkConfig
  */
  public constructor(scope: Construct, id: string, config: QualityMonitorPluginframeworkConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_quality_monitor_pluginframework',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.56.0',
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
    this._assetsDir = config.assetsDir;
    this._baselineTableName = config.baselineTableName;
    this._latestMonitorFailureMsg = config.latestMonitorFailureMsg;
    this._outputSchemaName = config.outputSchemaName;
    this._skipBuiltinDashboard = config.skipBuiltinDashboard;
    this._slicingExprs = config.slicingExprs;
    this._tableName = config.tableName;
    this._warehouseId = config.warehouseId;
    this._customMetrics.internalValue = config.customMetrics;
    this._dataClassificationConfig.internalValue = config.dataClassificationConfig;
    this._inferenceLog.internalValue = config.inferenceLog;
    this._notifications.internalValue = config.notifications;
    this._schedule.internalValue = config.schedule;
    this._snapshot.internalValue = config.snapshot;
    this._timeSeries.internalValue = config.timeSeries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assets_dir - computed: false, optional: false, required: true
  private _assetsDir?: string; 
  public get assetsDir() {
    return this.getStringAttribute('assets_dir');
  }
  public set assetsDir(value: string) {
    this._assetsDir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetsDirInput() {
    return this._assetsDir;
  }

  // baseline_table_name - computed: false, optional: true, required: false
  private _baselineTableName?: string; 
  public get baselineTableName() {
    return this.getStringAttribute('baseline_table_name');
  }
  public set baselineTableName(value: string) {
    this._baselineTableName = value;
  }
  public resetBaselineTableName() {
    this._baselineTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineTableNameInput() {
    return this._baselineTableName;
  }

  // dashboard_id - computed: true, optional: false, required: false
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }

  // drift_metrics_table_name - computed: true, optional: false, required: false
  public get driftMetricsTableName() {
    return this.getStringAttribute('drift_metrics_table_name');
  }

  // latest_monitor_failure_msg - computed: false, optional: true, required: false
  private _latestMonitorFailureMsg?: string; 
  public get latestMonitorFailureMsg() {
    return this.getStringAttribute('latest_monitor_failure_msg');
  }
  public set latestMonitorFailureMsg(value: string) {
    this._latestMonitorFailureMsg = value;
  }
  public resetLatestMonitorFailureMsg() {
    this._latestMonitorFailureMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestMonitorFailureMsgInput() {
    return this._latestMonitorFailureMsg;
  }

  // monitor_version - computed: true, optional: false, required: false
  public get monitorVersion() {
    return this.getStringAttribute('monitor_version');
  }

  // output_schema_name - computed: false, optional: false, required: true
  private _outputSchemaName?: string; 
  public get outputSchemaName() {
    return this.getStringAttribute('output_schema_name');
  }
  public set outputSchemaName(value: string) {
    this._outputSchemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaNameInput() {
    return this._outputSchemaName;
  }

  // profile_metrics_table_name - computed: true, optional: false, required: false
  public get profileMetricsTableName() {
    return this.getStringAttribute('profile_metrics_table_name');
  }

  // skip_builtin_dashboard - computed: false, optional: true, required: false
  private _skipBuiltinDashboard?: boolean | cdktf.IResolvable; 
  public get skipBuiltinDashboard() {
    return this.getBooleanAttribute('skip_builtin_dashboard');
  }
  public set skipBuiltinDashboard(value: boolean | cdktf.IResolvable) {
    this._skipBuiltinDashboard = value;
  }
  public resetSkipBuiltinDashboard() {
    this._skipBuiltinDashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipBuiltinDashboardInput() {
    return this._skipBuiltinDashboard;
  }

  // slicing_exprs - computed: false, optional: true, required: false
  private _slicingExprs?: string[]; 
  public get slicingExprs() {
    return this.getListAttribute('slicing_exprs');
  }
  public set slicingExprs(value: string[]) {
    this._slicingExprs = value;
  }
  public resetSlicingExprs() {
    this._slicingExprs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slicingExprsInput() {
    return this._slicingExprs;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // warehouse_id - computed: false, optional: true, required: false
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

  // custom_metrics - computed: false, optional: true, required: false
  private _customMetrics = new QualityMonitorPluginframeworkCustomMetricsList(this, "custom_metrics", false);
  public get customMetrics() {
    return this._customMetrics;
  }
  public putCustomMetrics(value: QualityMonitorPluginframeworkCustomMetrics[] | cdktf.IResolvable) {
    this._customMetrics.internalValue = value;
  }
  public resetCustomMetrics() {
    this._customMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricsInput() {
    return this._customMetrics.internalValue;
  }

  // data_classification_config - computed: false, optional: true, required: false
  private _dataClassificationConfig = new QualityMonitorPluginframeworkDataClassificationConfigList(this, "data_classification_config", false);
  public get dataClassificationConfig() {
    return this._dataClassificationConfig;
  }
  public putDataClassificationConfig(value: QualityMonitorPluginframeworkDataClassificationConfig[] | cdktf.IResolvable) {
    this._dataClassificationConfig.internalValue = value;
  }
  public resetDataClassificationConfig() {
    this._dataClassificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataClassificationConfigInput() {
    return this._dataClassificationConfig.internalValue;
  }

  // inference_log - computed: false, optional: true, required: false
  private _inferenceLog = new QualityMonitorPluginframeworkInferenceLogList(this, "inference_log", false);
  public get inferenceLog() {
    return this._inferenceLog;
  }
  public putInferenceLog(value: QualityMonitorPluginframeworkInferenceLog[] | cdktf.IResolvable) {
    this._inferenceLog.internalValue = value;
  }
  public resetInferenceLog() {
    this._inferenceLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceLogInput() {
    return this._inferenceLog.internalValue;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications = new QualityMonitorPluginframeworkNotificationsList(this, "notifications", false);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: QualityMonitorPluginframeworkNotifications[] | cdktf.IResolvable) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new QualityMonitorPluginframeworkScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: QualityMonitorPluginframeworkSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot = new QualityMonitorPluginframeworkSnapshotList(this, "snapshot", false);
  public get snapshot() {
    return this._snapshot;
  }
  public putSnapshot(value: QualityMonitorPluginframeworkSnapshot[] | cdktf.IResolvable) {
    this._snapshot.internalValue = value;
  }
  public resetSnapshot() {
    this._snapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot.internalValue;
  }

  // time_series - computed: false, optional: true, required: false
  private _timeSeries = new QualityMonitorPluginframeworkTimeSeriesList(this, "time_series", false);
  public get timeSeries() {
    return this._timeSeries;
  }
  public putTimeSeries(value: QualityMonitorPluginframeworkTimeSeries[] | cdktf.IResolvable) {
    this._timeSeries.internalValue = value;
  }
  public resetTimeSeries() {
    this._timeSeries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesInput() {
    return this._timeSeries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assets_dir: cdktf.stringToTerraform(this._assetsDir),
      baseline_table_name: cdktf.stringToTerraform(this._baselineTableName),
      latest_monitor_failure_msg: cdktf.stringToTerraform(this._latestMonitorFailureMsg),
      output_schema_name: cdktf.stringToTerraform(this._outputSchemaName),
      skip_builtin_dashboard: cdktf.booleanToTerraform(this._skipBuiltinDashboard),
      slicing_exprs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._slicingExprs),
      table_name: cdktf.stringToTerraform(this._tableName),
      warehouse_id: cdktf.stringToTerraform(this._warehouseId),
      custom_metrics: cdktf.listMapper(qualityMonitorPluginframeworkCustomMetricsToTerraform, true)(this._customMetrics.internalValue),
      data_classification_config: cdktf.listMapper(qualityMonitorPluginframeworkDataClassificationConfigToTerraform, true)(this._dataClassificationConfig.internalValue),
      inference_log: cdktf.listMapper(qualityMonitorPluginframeworkInferenceLogToTerraform, true)(this._inferenceLog.internalValue),
      notifications: cdktf.listMapper(qualityMonitorPluginframeworkNotificationsToTerraform, true)(this._notifications.internalValue),
      schedule: cdktf.listMapper(qualityMonitorPluginframeworkScheduleToTerraform, true)(this._schedule.internalValue),
      snapshot: cdktf.listMapper(qualityMonitorPluginframeworkSnapshotToTerraform, true)(this._snapshot.internalValue),
      time_series: cdktf.listMapper(qualityMonitorPluginframeworkTimeSeriesToTerraform, true)(this._timeSeries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assets_dir: {
        value: cdktf.stringToHclTerraform(this._assetsDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      baseline_table_name: {
        value: cdktf.stringToHclTerraform(this._baselineTableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latest_monitor_failure_msg: {
        value: cdktf.stringToHclTerraform(this._latestMonitorFailureMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_schema_name: {
        value: cdktf.stringToHclTerraform(this._outputSchemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_builtin_dashboard: {
        value: cdktf.booleanToHclTerraform(this._skipBuiltinDashboard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slicing_exprs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._slicingExprs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse_id: {
        value: cdktf.stringToHclTerraform(this._warehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_metrics: {
        value: cdktf.listMapperHcl(qualityMonitorPluginframeworkCustomMetricsToHclTerraform, true)(this._customMetrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QualityMonitorPluginframeworkCustomMetricsList",
      },
      data_classification_config: {
        value: cdktf.listMapperHcl(qualityMonitorPluginframeworkDataClassificationConfigToHclTerraform, true)(this._dataClassificationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QualityMonitorPluginframeworkDataClassificationConfigList",
      },
      inference_log: {
        value: cdktf.listMapperHcl(qualityMonitorPluginframeworkInferenceLogToHclTerraform, true)(this._inferenceLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QualityMonitorPluginframeworkInferenceLogList",
      },
      notifications: {
        value: cdktf.listMapperHcl(qualityMonitorPluginframeworkNotificationsToHclTerraform, true)(this._notifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QualityMonitorPluginframeworkNotificationsList",
      },
      schedule: {
        value: cdktf.listMapperHcl(qualityMonitorPluginframeworkScheduleToHclTerraform, true)(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QualityMonitorPluginframeworkScheduleList",
      },
      snapshot: {
        value: cdktf.listMapperHcl(qualityMonitorPluginframeworkSnapshotToHclTerraform, true)(this._snapshot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QualityMonitorPluginframeworkSnapshotList",
      },
      time_series: {
        value: cdktf.listMapperHcl(qualityMonitorPluginframeworkTimeSeriesToHclTerraform, true)(this._timeSeries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QualityMonitorPluginframeworkTimeSeriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
