// https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LakehouseMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#assets_dir LakehouseMonitor#assets_dir}
  */
  readonly assetsDir: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#baseline_table_name LakehouseMonitor#baseline_table_name}
  */
  readonly baselineTableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#id LakehouseMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#latest_monitor_failure_msg LakehouseMonitor#latest_monitor_failure_msg}
  */
  readonly latestMonitorFailureMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#output_schema_name LakehouseMonitor#output_schema_name}
  */
  readonly outputSchemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#skip_builtin_dashboard LakehouseMonitor#skip_builtin_dashboard}
  */
  readonly skipBuiltinDashboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#slicing_exprs LakehouseMonitor#slicing_exprs}
  */
  readonly slicingExprs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#table_name LakehouseMonitor#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#warehouse_id LakehouseMonitor#warehouse_id}
  */
  readonly warehouseId?: string;
  /**
  * custom_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#custom_metrics LakehouseMonitor#custom_metrics}
  */
  readonly customMetrics?: LakehouseMonitorCustomMetrics[] | cdktf.IResolvable;
  /**
  * data_classification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#data_classification_config LakehouseMonitor#data_classification_config}
  */
  readonly dataClassificationConfig?: LakehouseMonitorDataClassificationConfig;
  /**
  * inference_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#inference_log LakehouseMonitor#inference_log}
  */
  readonly inferenceLog?: LakehouseMonitorInferenceLog;
  /**
  * notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#notifications LakehouseMonitor#notifications}
  */
  readonly notifications?: LakehouseMonitorNotifications;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#schedule LakehouseMonitor#schedule}
  */
  readonly schedule?: LakehouseMonitorSchedule;
  /**
  * snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#snapshot LakehouseMonitor#snapshot}
  */
  readonly snapshot?: LakehouseMonitorSnapshot;
  /**
  * time_series block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#time_series LakehouseMonitor#time_series}
  */
  readonly timeSeries?: LakehouseMonitorTimeSeries;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#timeouts LakehouseMonitor#timeouts}
  */
  readonly timeouts?: LakehouseMonitorTimeouts;
}
export interface LakehouseMonitorCustomMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#definition LakehouseMonitor#definition}
  */
  readonly definition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#input_columns LakehouseMonitor#input_columns}
  */
  readonly inputColumns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#name LakehouseMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#output_data_type LakehouseMonitor#output_data_type}
  */
  readonly outputDataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#type LakehouseMonitor#type}
  */
  readonly type: string;
}

export function lakehouseMonitorCustomMetricsToTerraform(struct?: LakehouseMonitorCustomMetrics | cdktf.IResolvable): any {
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


export function lakehouseMonitorCustomMetricsToHclTerraform(struct?: LakehouseMonitorCustomMetrics | cdktf.IResolvable): any {
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

export class LakehouseMonitorCustomMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakehouseMonitorCustomMetrics | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LakehouseMonitorCustomMetrics | cdktf.IResolvable | undefined) {
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

export class LakehouseMonitorCustomMetricsList extends cdktf.ComplexList {
  public internalValue? : LakehouseMonitorCustomMetrics[] | cdktf.IResolvable

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
  public get(index: number): LakehouseMonitorCustomMetricsOutputReference {
    return new LakehouseMonitorCustomMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakehouseMonitorDataClassificationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#enabled LakehouseMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function lakehouseMonitorDataClassificationConfigToTerraform(struct?: LakehouseMonitorDataClassificationConfigOutputReference | LakehouseMonitorDataClassificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function lakehouseMonitorDataClassificationConfigToHclTerraform(struct?: LakehouseMonitorDataClassificationConfigOutputReference | LakehouseMonitorDataClassificationConfig): any {
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

export class LakehouseMonitorDataClassificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakehouseMonitorDataClassificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakehouseMonitorDataClassificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface LakehouseMonitorInferenceLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}
  */
  readonly granularities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#label_col LakehouseMonitor#label_col}
  */
  readonly labelCol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#model_id_col LakehouseMonitor#model_id_col}
  */
  readonly modelIdCol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#prediction_col LakehouseMonitor#prediction_col}
  */
  readonly predictionCol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#prediction_proba_col LakehouseMonitor#prediction_proba_col}
  */
  readonly predictionProbaCol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#problem_type LakehouseMonitor#problem_type}
  */
  readonly problemType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}
  */
  readonly timestampCol: string;
}

export function lakehouseMonitorInferenceLogToTerraform(struct?: LakehouseMonitorInferenceLogOutputReference | LakehouseMonitorInferenceLog): any {
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


export function lakehouseMonitorInferenceLogToHclTerraform(struct?: LakehouseMonitorInferenceLogOutputReference | LakehouseMonitorInferenceLog): any {
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

export class LakehouseMonitorInferenceLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakehouseMonitorInferenceLog | undefined {
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

  public set internalValue(value: LakehouseMonitorInferenceLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._granularities = undefined;
      this._labelCol = undefined;
      this._modelIdCol = undefined;
      this._predictionCol = undefined;
      this._predictionProbaCol = undefined;
      this._problemType = undefined;
      this._timestampCol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface LakehouseMonitorNotificationsOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}
  */
  readonly emailAddresses?: string[];
}

export function lakehouseMonitorNotificationsOnFailureToTerraform(struct?: LakehouseMonitorNotificationsOnFailureOutputReference | LakehouseMonitorNotificationsOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailAddresses),
  }
}


export function lakehouseMonitorNotificationsOnFailureToHclTerraform(struct?: LakehouseMonitorNotificationsOnFailureOutputReference | LakehouseMonitorNotificationsOnFailure): any {
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

export class LakehouseMonitorNotificationsOnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakehouseMonitorNotificationsOnFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddresses = this._emailAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakehouseMonitorNotificationsOnFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailAddresses = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface LakehouseMonitorNotificationsOnNewClassificationTagDetected {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}
  */
  readonly emailAddresses?: string[];
}

export function lakehouseMonitorNotificationsOnNewClassificationTagDetectedToTerraform(struct?: LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference | LakehouseMonitorNotificationsOnNewClassificationTagDetected): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailAddresses),
  }
}


export function lakehouseMonitorNotificationsOnNewClassificationTagDetectedToHclTerraform(struct?: LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference | LakehouseMonitorNotificationsOnNewClassificationTagDetected): any {
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

export class LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakehouseMonitorNotificationsOnNewClassificationTagDetected | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddresses = this._emailAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakehouseMonitorNotificationsOnNewClassificationTagDetected | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailAddresses = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface LakehouseMonitorNotifications {
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#on_failure LakehouseMonitor#on_failure}
  */
  readonly onFailure?: LakehouseMonitorNotificationsOnFailure;
  /**
  * on_new_classification_tag_detected block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#on_new_classification_tag_detected LakehouseMonitor#on_new_classification_tag_detected}
  */
  readonly onNewClassificationTagDetected?: LakehouseMonitorNotificationsOnNewClassificationTagDetected;
}

export function lakehouseMonitorNotificationsToTerraform(struct?: LakehouseMonitorNotificationsOutputReference | LakehouseMonitorNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_failure: lakehouseMonitorNotificationsOnFailureToTerraform(struct!.onFailure),
    on_new_classification_tag_detected: lakehouseMonitorNotificationsOnNewClassificationTagDetectedToTerraform(struct!.onNewClassificationTagDetected),
  }
}


export function lakehouseMonitorNotificationsToHclTerraform(struct?: LakehouseMonitorNotificationsOutputReference | LakehouseMonitorNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_failure: {
      value: lakehouseMonitorNotificationsOnFailureToHclTerraform(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "LakehouseMonitorNotificationsOnFailureList",
    },
    on_new_classification_tag_detected: {
      value: lakehouseMonitorNotificationsOnNewClassificationTagDetectedToHclTerraform(struct!.onNewClassificationTagDetected),
      isBlock: true,
      type: "list",
      storageClassType: "LakehouseMonitorNotificationsOnNewClassificationTagDetectedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakehouseMonitorNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakehouseMonitorNotifications | undefined {
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

  public set internalValue(value: LakehouseMonitorNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onFailure.internalValue = undefined;
      this._onNewClassificationTagDetected.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onFailure.internalValue = value.onFailure;
      this._onNewClassificationTagDetected.internalValue = value.onNewClassificationTagDetected;
    }
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new LakehouseMonitorNotificationsOnFailureOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: LakehouseMonitorNotificationsOnFailure) {
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
  private _onNewClassificationTagDetected = new LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference(this, "on_new_classification_tag_detected");
  public get onNewClassificationTagDetected() {
    return this._onNewClassificationTagDetected;
  }
  public putOnNewClassificationTagDetected(value: LakehouseMonitorNotificationsOnNewClassificationTagDetected) {
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
export interface LakehouseMonitorSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#quartz_cron_expression LakehouseMonitor#quartz_cron_expression}
  */
  readonly quartzCronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#timezone_id LakehouseMonitor#timezone_id}
  */
  readonly timezoneId: string;
}

export function lakehouseMonitorScheduleToTerraform(struct?: LakehouseMonitorScheduleOutputReference | LakehouseMonitorSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quartz_cron_expression: cdktf.stringToTerraform(struct!.quartzCronExpression),
    timezone_id: cdktf.stringToTerraform(struct!.timezoneId),
  }
}


export function lakehouseMonitorScheduleToHclTerraform(struct?: LakehouseMonitorScheduleOutputReference | LakehouseMonitorSchedule): any {
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

export class LakehouseMonitorScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakehouseMonitorSchedule | undefined {
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

  public set internalValue(value: LakehouseMonitorSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._quartzCronExpression = undefined;
      this._timezoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface LakehouseMonitorSnapshot {
}

export function lakehouseMonitorSnapshotToTerraform(struct?: LakehouseMonitorSnapshotOutputReference | LakehouseMonitorSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function lakehouseMonitorSnapshotToHclTerraform(struct?: LakehouseMonitorSnapshotOutputReference | LakehouseMonitorSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LakehouseMonitorSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakehouseMonitorSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakehouseMonitorSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface LakehouseMonitorTimeSeries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}
  */
  readonly granularities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}
  */
  readonly timestampCol: string;
}

export function lakehouseMonitorTimeSeriesToTerraform(struct?: LakehouseMonitorTimeSeriesOutputReference | LakehouseMonitorTimeSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    granularities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.granularities),
    timestamp_col: cdktf.stringToTerraform(struct!.timestampCol),
  }
}


export function lakehouseMonitorTimeSeriesToHclTerraform(struct?: LakehouseMonitorTimeSeriesOutputReference | LakehouseMonitorTimeSeries): any {
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

export class LakehouseMonitorTimeSeriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakehouseMonitorTimeSeries | undefined {
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

  public set internalValue(value: LakehouseMonitorTimeSeries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._granularities = undefined;
      this._timestampCol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface LakehouseMonitorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#create LakehouseMonitor#create}
  */
  readonly create?: string;
}

export function lakehouseMonitorTimeoutsToTerraform(struct?: LakehouseMonitorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function lakehouseMonitorTimeoutsToHclTerraform(struct?: LakehouseMonitorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakehouseMonitorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakehouseMonitorTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakehouseMonitorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor databricks_lakehouse_monitor}
*/
export class LakehouseMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_lakehouse_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LakehouseMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LakehouseMonitor to import
  * @param importFromId The id of the existing LakehouseMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LakehouseMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_lakehouse_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/lakehouse_monitor databricks_lakehouse_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LakehouseMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: LakehouseMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_lakehouse_monitor',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.81.1',
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
    this._id = config.id;
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
    this._timeouts.internalValue = config.timeouts;
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
  private _customMetrics = new LakehouseMonitorCustomMetricsList(this, "custom_metrics", false);
  public get customMetrics() {
    return this._customMetrics;
  }
  public putCustomMetrics(value: LakehouseMonitorCustomMetrics[] | cdktf.IResolvable) {
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
  private _dataClassificationConfig = new LakehouseMonitorDataClassificationConfigOutputReference(this, "data_classification_config");
  public get dataClassificationConfig() {
    return this._dataClassificationConfig;
  }
  public putDataClassificationConfig(value: LakehouseMonitorDataClassificationConfig) {
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
  private _inferenceLog = new LakehouseMonitorInferenceLogOutputReference(this, "inference_log");
  public get inferenceLog() {
    return this._inferenceLog;
  }
  public putInferenceLog(value: LakehouseMonitorInferenceLog) {
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
  private _notifications = new LakehouseMonitorNotificationsOutputReference(this, "notifications");
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: LakehouseMonitorNotifications) {
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
  private _schedule = new LakehouseMonitorScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: LakehouseMonitorSchedule) {
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
  private _snapshot = new LakehouseMonitorSnapshotOutputReference(this, "snapshot");
  public get snapshot() {
    return this._snapshot;
  }
  public putSnapshot(value: LakehouseMonitorSnapshot) {
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
  private _timeSeries = new LakehouseMonitorTimeSeriesOutputReference(this, "time_series");
  public get timeSeries() {
    return this._timeSeries;
  }
  public putTimeSeries(value: LakehouseMonitorTimeSeries) {
    this._timeSeries.internalValue = value;
  }
  public resetTimeSeries() {
    this._timeSeries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesInput() {
    return this._timeSeries.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LakehouseMonitorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LakehouseMonitorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assets_dir: cdktf.stringToTerraform(this._assetsDir),
      baseline_table_name: cdktf.stringToTerraform(this._baselineTableName),
      id: cdktf.stringToTerraform(this._id),
      latest_monitor_failure_msg: cdktf.stringToTerraform(this._latestMonitorFailureMsg),
      output_schema_name: cdktf.stringToTerraform(this._outputSchemaName),
      skip_builtin_dashboard: cdktf.booleanToTerraform(this._skipBuiltinDashboard),
      slicing_exprs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._slicingExprs),
      table_name: cdktf.stringToTerraform(this._tableName),
      warehouse_id: cdktf.stringToTerraform(this._warehouseId),
      custom_metrics: cdktf.listMapper(lakehouseMonitorCustomMetricsToTerraform, true)(this._customMetrics.internalValue),
      data_classification_config: lakehouseMonitorDataClassificationConfigToTerraform(this._dataClassificationConfig.internalValue),
      inference_log: lakehouseMonitorInferenceLogToTerraform(this._inferenceLog.internalValue),
      notifications: lakehouseMonitorNotificationsToTerraform(this._notifications.internalValue),
      schedule: lakehouseMonitorScheduleToTerraform(this._schedule.internalValue),
      snapshot: lakehouseMonitorSnapshotToTerraform(this._snapshot.internalValue),
      time_series: lakehouseMonitorTimeSeriesToTerraform(this._timeSeries.internalValue),
      timeouts: lakehouseMonitorTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
        value: cdktf.listMapperHcl(lakehouseMonitorCustomMetricsToHclTerraform, true)(this._customMetrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakehouseMonitorCustomMetricsList",
      },
      data_classification_config: {
        value: lakehouseMonitorDataClassificationConfigToHclTerraform(this._dataClassificationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakehouseMonitorDataClassificationConfigList",
      },
      inference_log: {
        value: lakehouseMonitorInferenceLogToHclTerraform(this._inferenceLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakehouseMonitorInferenceLogList",
      },
      notifications: {
        value: lakehouseMonitorNotificationsToHclTerraform(this._notifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakehouseMonitorNotificationsList",
      },
      schedule: {
        value: lakehouseMonitorScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakehouseMonitorScheduleList",
      },
      snapshot: {
        value: lakehouseMonitorSnapshotToHclTerraform(this._snapshot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakehouseMonitorSnapshotList",
      },
      time_series: {
        value: lakehouseMonitorTimeSeriesToHclTerraform(this._timeSeries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakehouseMonitorTimeSeriesList",
      },
      timeouts: {
        value: lakehouseMonitorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LakehouseMonitorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
