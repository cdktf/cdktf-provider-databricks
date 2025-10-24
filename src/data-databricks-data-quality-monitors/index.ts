/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksDataQualityMonitorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#page_size DataDatabricksDataQualityMonitors#page_size}
  */
  readonly pageSize?: number;
}
export interface DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig {
}

export function dataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigToTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigToHclTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#definition DataDatabricksDataQualityMonitors#definition}
  */
  readonly definition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#input_columns DataDatabricksDataQualityMonitors#input_columns}
  */
  readonly inputColumns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#name DataDatabricksDataQualityMonitors#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#output_data_type DataDatabricksDataQualityMonitors#output_data_type}
  */
  readonly outputDataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#type DataDatabricksDataQualityMonitors#type}
  */
  readonly type: string;
}

export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsToTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics | cdktf.IResolvable): any {
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


export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsToHclTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics | cdktf.IResolvable): any {
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

export class DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics | cdktf.IResolvable | undefined) {
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

  // definition - computed: true, optional: false, required: true
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

  // input_columns - computed: true, optional: false, required: true
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

  // name - computed: true, optional: false, required: true
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

  // output_data_type - computed: true, optional: false, required: true
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

  // type - computed: true, optional: false, required: true
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

export class DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference {
    return new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}
  */
  readonly granularities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#label_column DataDatabricksDataQualityMonitors#label_column}
  */
  readonly labelColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#model_id_column DataDatabricksDataQualityMonitors#model_id_column}
  */
  readonly modelIdColumn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#prediction_column DataDatabricksDataQualityMonitors#prediction_column}
  */
  readonly predictionColumn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#problem_type DataDatabricksDataQualityMonitors#problem_type}
  */
  readonly problemType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}
  */
  readonly timestampColumn: string;
}

export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogToTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    granularities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.granularities),
    label_column: cdktf.stringToTerraform(struct!.labelColumn),
    model_id_column: cdktf.stringToTerraform(struct!.modelIdColumn),
    prediction_column: cdktf.stringToTerraform(struct!.predictionColumn),
    problem_type: cdktf.stringToTerraform(struct!.problemType),
    timestamp_column: cdktf.stringToTerraform(struct!.timestampColumn),
  }
}


export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogToHclTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog | cdktf.IResolvable): any {
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
    label_column: {
      value: cdktf.stringToHclTerraform(struct!.labelColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id_column: {
      value: cdktf.stringToHclTerraform(struct!.modelIdColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prediction_column: {
      value: cdktf.stringToHclTerraform(struct!.predictionColumn),
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
    timestamp_column: {
      value: cdktf.stringToHclTerraform(struct!.timestampColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._granularities !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularities = this._granularities;
    }
    if (this._labelColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelColumn = this._labelColumn;
    }
    if (this._modelIdColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelIdColumn = this._modelIdColumn;
    }
    if (this._predictionColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictionColumn = this._predictionColumn;
    }
    if (this._problemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.problemType = this._problemType;
    }
    if (this._timestampColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampColumn = this._timestampColumn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._granularities = undefined;
      this._labelColumn = undefined;
      this._modelIdColumn = undefined;
      this._predictionColumn = undefined;
      this._problemType = undefined;
      this._timestampColumn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._granularities = value.granularities;
      this._labelColumn = value.labelColumn;
      this._modelIdColumn = value.modelIdColumn;
      this._predictionColumn = value.predictionColumn;
      this._problemType = value.problemType;
      this._timestampColumn = value.timestampColumn;
    }
  }

  // granularities - computed: true, optional: false, required: true
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

  // label_column - computed: true, optional: true, required: false
  private _labelColumn?: string; 
  public get labelColumn() {
    return this.getStringAttribute('label_column');
  }
  public set labelColumn(value: string) {
    this._labelColumn = value;
  }
  public resetLabelColumn() {
    this._labelColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelColumnInput() {
    return this._labelColumn;
  }

  // model_id_column - computed: true, optional: false, required: true
  private _modelIdColumn?: string; 
  public get modelIdColumn() {
    return this.getStringAttribute('model_id_column');
  }
  public set modelIdColumn(value: string) {
    this._modelIdColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdColumnInput() {
    return this._modelIdColumn;
  }

  // prediction_column - computed: true, optional: false, required: true
  private _predictionColumn?: string; 
  public get predictionColumn() {
    return this.getStringAttribute('prediction_column');
  }
  public set predictionColumn(value: string) {
    this._predictionColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predictionColumnInput() {
    return this._predictionColumn;
  }

  // problem_type - computed: true, optional: false, required: true
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

  // timestamp_column - computed: true, optional: false, required: true
  private _timestampColumn?: string; 
  public get timestampColumn() {
    return this.getStringAttribute('timestamp_column');
  }
  public set timestampColumn(value: string) {
    this._timestampColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampColumnInput() {
    return this._timestampColumn;
  }
}
export interface DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#email_addresses DataDatabricksDataQualityMonitors#email_addresses}
  */
  readonly emailAddresses?: string[];
}

export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureToTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailAddresses),
  }
}


export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureToHclTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure | cdktf.IResolvable): any {
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

export class DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure | cdktf.IResolvable | undefined) {
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

  // email_addresses - computed: true, optional: true, required: false
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
export interface DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#on_failure DataDatabricksDataQualityMonitors#on_failure}
  */
  readonly onFailure?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure;
}

export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsToTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_failure: dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureToTerraform(struct!.onFailure),
  }
}


export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsToHclTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_failure: {
      value: dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureToHclTerraform(struct!.onFailure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onFailure.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onFailure.internalValue = value.onFailure;
    }
  }

  // on_failure - computed: true, optional: true, required: false
  private _onFailure = new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }
}
export interface DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#quartz_cron_expression DataDatabricksDataQualityMonitors#quartz_cron_expression}
  */
  readonly quartzCronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#timezone_id DataDatabricksDataQualityMonitors#timezone_id}
  */
  readonly timezoneId: string;
}

export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleToTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quartz_cron_expression: cdktf.stringToTerraform(struct!.quartzCronExpression),
    timezone_id: cdktf.stringToTerraform(struct!.timezoneId),
  }
}


export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleToHclTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule | cdktf.IResolvable): any {
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

export class DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule | cdktf.IResolvable | undefined) {
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

  // quartz_cron_expression - computed: true, optional: false, required: true
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

  // timezone_id - computed: true, optional: false, required: true
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
export interface DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot {
}

export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotToTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotToHclTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot | cdktf.IResolvable | undefined) {
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
export interface DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}
  */
  readonly granularities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}
  */
  readonly timestampColumn: string;
}

export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesToTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    granularities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.granularities),
    timestamp_column: cdktf.stringToTerraform(struct!.timestampColumn),
  }
}


export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesToHclTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries | cdktf.IResolvable): any {
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
    timestamp_column: {
      value: cdktf.stringToHclTerraform(struct!.timestampColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._granularities !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularities = this._granularities;
    }
    if (this._timestampColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampColumn = this._timestampColumn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._granularities = undefined;
      this._timestampColumn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._granularities = value.granularities;
      this._timestampColumn = value.timestampColumn;
    }
  }

  // granularities - computed: true, optional: false, required: true
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

  // timestamp_column - computed: true, optional: false, required: true
  private _timestampColumn?: string; 
  public get timestampColumn() {
    return this.getStringAttribute('timestamp_column');
  }
  public set timestampColumn(value: string) {
    this._timestampColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampColumnInput() {
    return this._timestampColumn;
  }
}
export interface DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#assets_dir DataDatabricksDataQualityMonitors#assets_dir}
  */
  readonly assetsDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#baseline_table_name DataDatabricksDataQualityMonitors#baseline_table_name}
  */
  readonly baselineTableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#custom_metrics DataDatabricksDataQualityMonitors#custom_metrics}
  */
  readonly customMetrics?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#inference_log DataDatabricksDataQualityMonitors#inference_log}
  */
  readonly inferenceLog?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#notification_settings DataDatabricksDataQualityMonitors#notification_settings}
  */
  readonly notificationSettings?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#output_schema_id DataDatabricksDataQualityMonitors#output_schema_id}
  */
  readonly outputSchemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#schedule DataDatabricksDataQualityMonitors#schedule}
  */
  readonly schedule?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#skip_builtin_dashboard DataDatabricksDataQualityMonitors#skip_builtin_dashboard}
  */
  readonly skipBuiltinDashboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#slicing_exprs DataDatabricksDataQualityMonitors#slicing_exprs}
  */
  readonly slicingExprs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#snapshot DataDatabricksDataQualityMonitors#snapshot}
  */
  readonly snapshot?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#time_series DataDatabricksDataQualityMonitors#time_series}
  */
  readonly timeSeries?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#warehouse_id DataDatabricksDataQualityMonitors#warehouse_id}
  */
  readonly warehouseId?: string;
}

export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigToTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assets_dir: cdktf.stringToTerraform(struct!.assetsDir),
    baseline_table_name: cdktf.stringToTerraform(struct!.baselineTableName),
    custom_metrics: cdktf.listMapper(dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsToTerraform, false)(struct!.customMetrics),
    inference_log: dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogToTerraform(struct!.inferenceLog),
    notification_settings: dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsToTerraform(struct!.notificationSettings),
    output_schema_id: cdktf.stringToTerraform(struct!.outputSchemaId),
    schedule: dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleToTerraform(struct!.schedule),
    skip_builtin_dashboard: cdktf.booleanToTerraform(struct!.skipBuiltinDashboard),
    slicing_exprs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.slicingExprs),
    snapshot: dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotToTerraform(struct!.snapshot),
    time_series: dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesToTerraform(struct!.timeSeries),
    warehouse_id: cdktf.stringToTerraform(struct!.warehouseId),
  }
}


export function dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigToHclTerraform(struct?: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assets_dir: {
      value: cdktf.stringToHclTerraform(struct!.assetsDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    baseline_table_name: {
      value: cdktf.stringToHclTerraform(struct!.baselineTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_metrics: {
      value: cdktf.listMapperHcl(dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsToHclTerraform, false)(struct!.customMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList",
    },
    inference_log: {
      value: dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogToHclTerraform(struct!.inferenceLog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog",
    },
    notification_settings: {
      value: dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsToHclTerraform(struct!.notificationSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings",
    },
    output_schema_id: {
      value: cdktf.stringToHclTerraform(struct!.outputSchemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule",
    },
    skip_builtin_dashboard: {
      value: cdktf.booleanToHclTerraform(struct!.skipBuiltinDashboard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    slicing_exprs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.slicingExprs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    snapshot: {
      value: dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotToHclTerraform(struct!.snapshot),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot",
    },
    time_series: {
      value: dataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesToHclTerraform(struct!.timeSeries),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries",
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

export class DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetsDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetsDir = this._assetsDir;
    }
    if (this._baselineTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineTableName = this._baselineTableName;
    }
    if (this._customMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetrics = this._customMetrics?.internalValue;
    }
    if (this._inferenceLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceLog = this._inferenceLog?.internalValue;
    }
    if (this._notificationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationSettings = this._notificationSettings?.internalValue;
    }
    if (this._outputSchemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchemaId = this._outputSchemaId;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._skipBuiltinDashboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipBuiltinDashboard = this._skipBuiltinDashboard;
    }
    if (this._slicingExprs !== undefined) {
      hasAnyValues = true;
      internalValueResult.slicingExprs = this._slicingExprs;
    }
    if (this._snapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot?.internalValue;
    }
    if (this._timeSeries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSeries = this._timeSeries?.internalValue;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assetsDir = undefined;
      this._baselineTableName = undefined;
      this._customMetrics.internalValue = undefined;
      this._inferenceLog.internalValue = undefined;
      this._notificationSettings.internalValue = undefined;
      this._outputSchemaId = undefined;
      this._schedule.internalValue = undefined;
      this._skipBuiltinDashboard = undefined;
      this._slicingExprs = undefined;
      this._snapshot.internalValue = undefined;
      this._timeSeries.internalValue = undefined;
      this._warehouseId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assetsDir = value.assetsDir;
      this._baselineTableName = value.baselineTableName;
      this._customMetrics.internalValue = value.customMetrics;
      this._inferenceLog.internalValue = value.inferenceLog;
      this._notificationSettings.internalValue = value.notificationSettings;
      this._outputSchemaId = value.outputSchemaId;
      this._schedule.internalValue = value.schedule;
      this._skipBuiltinDashboard = value.skipBuiltinDashboard;
      this._slicingExprs = value.slicingExprs;
      this._snapshot.internalValue = value.snapshot;
      this._timeSeries.internalValue = value.timeSeries;
      this._warehouseId = value.warehouseId;
    }
  }

  // assets_dir - computed: true, optional: true, required: false
  private _assetsDir?: string; 
  public get assetsDir() {
    return this.getStringAttribute('assets_dir');
  }
  public set assetsDir(value: string) {
    this._assetsDir = value;
  }
  public resetAssetsDir() {
    this._assetsDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetsDirInput() {
    return this._assetsDir;
  }

  // baseline_table_name - computed: true, optional: true, required: false
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

  // custom_metrics - computed: true, optional: true, required: false
  private _customMetrics = new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList(this, "custom_metrics", false);
  public get customMetrics() {
    return this._customMetrics;
  }
  public putCustomMetrics(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics[] | cdktf.IResolvable) {
    this._customMetrics.internalValue = value;
  }
  public resetCustomMetrics() {
    this._customMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricsInput() {
    return this._customMetrics.internalValue;
  }

  // dashboard_id - computed: true, optional: false, required: false
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }

  // drift_metrics_table_name - computed: true, optional: false, required: false
  public get driftMetricsTableName() {
    return this.getStringAttribute('drift_metrics_table_name');
  }

  // effective_warehouse_id - computed: true, optional: false, required: false
  public get effectiveWarehouseId() {
    return this.getStringAttribute('effective_warehouse_id');
  }

  // inference_log - computed: true, optional: true, required: false
  private _inferenceLog = new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference(this, "inference_log");
  public get inferenceLog() {
    return this._inferenceLog;
  }
  public putInferenceLog(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog) {
    this._inferenceLog.internalValue = value;
  }
  public resetInferenceLog() {
    this._inferenceLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceLogInput() {
    return this._inferenceLog.internalValue;
  }

  // latest_monitor_failure_message - computed: true, optional: false, required: false
  public get latestMonitorFailureMessage() {
    return this.getStringAttribute('latest_monitor_failure_message');
  }

  // monitor_version - computed: true, optional: false, required: false
  public get monitorVersion() {
    return this.getNumberAttribute('monitor_version');
  }

  // monitored_table_name - computed: true, optional: false, required: false
  public get monitoredTableName() {
    return this.getStringAttribute('monitored_table_name');
  }

  // notification_settings - computed: true, optional: true, required: false
  private _notificationSettings = new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // output_schema_id - computed: true, optional: false, required: true
  private _outputSchemaId?: string; 
  public get outputSchemaId() {
    return this.getStringAttribute('output_schema_id');
  }
  public set outputSchemaId(value: string) {
    this._outputSchemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaIdInput() {
    return this._outputSchemaId;
  }

  // profile_metrics_table_name - computed: true, optional: false, required: false
  public get profileMetricsTableName() {
    return this.getStringAttribute('profile_metrics_table_name');
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // skip_builtin_dashboard - computed: true, optional: true, required: false
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

  // slicing_exprs - computed: true, optional: true, required: false
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

  // snapshot - computed: true, optional: true, required: false
  private _snapshot = new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference(this, "snapshot");
  public get snapshot() {
    return this._snapshot;
  }
  public putSnapshot(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot) {
    this._snapshot.internalValue = value;
  }
  public resetSnapshot() {
    this._snapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_series - computed: true, optional: true, required: false
  private _timeSeries = new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference(this, "time_series");
  public get timeSeries() {
    return this._timeSeries;
  }
  public putTimeSeries(value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries) {
    this._timeSeries.internalValue = value;
  }
  public resetTimeSeries() {
    this._timeSeries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesInput() {
    return this._timeSeries.internalValue;
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
export interface DataDatabricksDataQualityMonitorsMonitors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#object_id DataDatabricksDataQualityMonitors#object_id}
  */
  readonly objectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#object_type DataDatabricksDataQualityMonitors#object_type}
  */
  readonly objectType: string;
}

export function dataDatabricksDataQualityMonitorsMonitorsToTerraform(struct?: DataDatabricksDataQualityMonitorsMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id: cdktf.stringToTerraform(struct!.objectId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataDatabricksDataQualityMonitorsMonitorsToHclTerraform(struct?: DataDatabricksDataQualityMonitorsMonitors): any {
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

export class DataDatabricksDataQualityMonitorsMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksDataQualityMonitorsMonitors | undefined {
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

  public set internalValue(value: DataDatabricksDataQualityMonitorsMonitors | undefined) {
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
  private _anomalyDetectionConfig = new DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference(this, "anomaly_detection_config");
  public get anomalyDetectionConfig() {
    return this._anomalyDetectionConfig;
  }

  // data_profiling_config - computed: true, optional: false, required: false
  private _dataProfilingConfig = new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference(this, "data_profiling_config");
  public get dataProfilingConfig() {
    return this._dataProfilingConfig;
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

export class DataDatabricksDataQualityMonitorsMonitorsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksDataQualityMonitorsMonitors[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksDataQualityMonitorsMonitorsOutputReference {
    return new DataDatabricksDataQualityMonitorsMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors databricks_data_quality_monitors}
*/
export class DataDatabricksDataQualityMonitors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_data_quality_monitors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksDataQualityMonitors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksDataQualityMonitors to import
  * @param importFromId The id of the existing DataDatabricksDataQualityMonitors that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDataQualityMonitors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_data_quality_monitors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors databricks_data_quality_monitors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksDataQualityMonitorsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksDataQualityMonitorsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_data_quality_monitors',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.95.0',
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
    this._pageSize = config.pageSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // monitors - computed: true, optional: false, required: false
  private _monitors = new DataDatabricksDataQualityMonitorsMonitorsList(this, "monitors", false);
  public get monitors() {
    return this._monitors;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktf.numberToTerraform(this._pageSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
