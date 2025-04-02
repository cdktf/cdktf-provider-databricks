// https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}
  */
  readonly applyAutoLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#catalog Query#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#description Query#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#display_name Query#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#owner_user_name Query#owner_user_name}
  */
  readonly ownerUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#parent_path Query#parent_path}
  */
  readonly parentPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#query_text Query#query_text}
  */
  readonly queryText: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#run_as_mode Query#run_as_mode}
  */
  readonly runAsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#schema Query#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#tags Query#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#warehouse_id Query#warehouse_id}
  */
  readonly warehouseId: string;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#parameter Query#parameter}
  */
  readonly parameter?: QueryParameter[] | cdktf.IResolvable;
}
export interface QueryParameterDateRangeValueDateRangeValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#end Query#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#start Query#start}
  */
  readonly start: string;
}

export function queryParameterDateRangeValueDateRangeValueToTerraform(struct?: QueryParameterDateRangeValueDateRangeValueOutputReference | QueryParameterDateRangeValueDateRangeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function queryParameterDateRangeValueDateRangeValueToHclTerraform(struct?: QueryParameterDateRangeValueDateRangeValueOutputReference | QueryParameterDateRangeValueDateRangeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueryParameterDateRangeValueDateRangeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QueryParameterDateRangeValueDateRangeValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryParameterDateRangeValueDateRangeValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface QueryParameterDateRangeValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#dynamic_date_range_value Query#dynamic_date_range_value}
  */
  readonly dynamicDateRangeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#precision Query#precision}
  */
  readonly precision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#start_day_of_week Query#start_day_of_week}
  */
  readonly startDayOfWeek?: number;
  /**
  * date_range_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#date_range_value Query#date_range_value}
  */
  readonly dateRangeValue?: QueryParameterDateRangeValueDateRangeValue;
}

export function queryParameterDateRangeValueToTerraform(struct?: QueryParameterDateRangeValueOutputReference | QueryParameterDateRangeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_date_range_value: cdktf.stringToTerraform(struct!.dynamicDateRangeValue),
    precision: cdktf.stringToTerraform(struct!.precision),
    start_day_of_week: cdktf.numberToTerraform(struct!.startDayOfWeek),
    date_range_value: queryParameterDateRangeValueDateRangeValueToTerraform(struct!.dateRangeValue),
  }
}


export function queryParameterDateRangeValueToHclTerraform(struct?: QueryParameterDateRangeValueOutputReference | QueryParameterDateRangeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_date_range_value: {
      value: cdktf.stringToHclTerraform(struct!.dynamicDateRangeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktf.stringToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_day_of_week: {
      value: cdktf.numberToHclTerraform(struct!.startDayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    date_range_value: {
      value: queryParameterDateRangeValueDateRangeValueToHclTerraform(struct!.dateRangeValue),
      isBlock: true,
      type: "list",
      storageClassType: "QueryParameterDateRangeValueDateRangeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueryParameterDateRangeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QueryParameterDateRangeValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicDateRangeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicDateRangeValue = this._dynamicDateRangeValue;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._startDayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDayOfWeek = this._startDayOfWeek;
    }
    if (this._dateRangeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRangeValue = this._dateRangeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryParameterDateRangeValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dynamicDateRangeValue = undefined;
      this._precision = undefined;
      this._startDayOfWeek = undefined;
      this._dateRangeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dynamicDateRangeValue = value.dynamicDateRangeValue;
      this._precision = value.precision;
      this._startDayOfWeek = value.startDayOfWeek;
      this._dateRangeValue.internalValue = value.dateRangeValue;
    }
  }

  // dynamic_date_range_value - computed: false, optional: true, required: false
  private _dynamicDateRangeValue?: string; 
  public get dynamicDateRangeValue() {
    return this.getStringAttribute('dynamic_date_range_value');
  }
  public set dynamicDateRangeValue(value: string) {
    this._dynamicDateRangeValue = value;
  }
  public resetDynamicDateRangeValue() {
    this._dynamicDateRangeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDateRangeValueInput() {
    return this._dynamicDateRangeValue;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: string; 
  public get precision() {
    return this.getStringAttribute('precision');
  }
  public set precision(value: string) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // start_day_of_week - computed: false, optional: true, required: false
  private _startDayOfWeek?: number; 
  public get startDayOfWeek() {
    return this.getNumberAttribute('start_day_of_week');
  }
  public set startDayOfWeek(value: number) {
    this._startDayOfWeek = value;
  }
  public resetStartDayOfWeek() {
    this._startDayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDayOfWeekInput() {
    return this._startDayOfWeek;
  }

  // date_range_value - computed: false, optional: true, required: false
  private _dateRangeValue = new QueryParameterDateRangeValueDateRangeValueOutputReference(this, "date_range_value");
  public get dateRangeValue() {
    return this._dateRangeValue;
  }
  public putDateRangeValue(value: QueryParameterDateRangeValueDateRangeValue) {
    this._dateRangeValue.internalValue = value;
  }
  public resetDateRangeValue() {
    this._dateRangeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeValueInput() {
    return this._dateRangeValue.internalValue;
  }
}
export interface QueryParameterDateValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#date_value Query#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#dynamic_date_value Query#dynamic_date_value}
  */
  readonly dynamicDateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#precision Query#precision}
  */
  readonly precision?: string;
}

export function queryParameterDateValueToTerraform(struct?: QueryParameterDateValueOutputReference | QueryParameterDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_value: cdktf.stringToTerraform(struct!.dateValue),
    dynamic_date_value: cdktf.stringToTerraform(struct!.dynamicDateValue),
    precision: cdktf.stringToTerraform(struct!.precision),
  }
}


export function queryParameterDateValueToHclTerraform(struct?: QueryParameterDateValueOutputReference | QueryParameterDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date_value: {
      value: cdktf.stringToHclTerraform(struct!.dateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_date_value: {
      value: cdktf.stringToHclTerraform(struct!.dynamicDateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktf.stringToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueryParameterDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QueryParameterDateValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue;
    }
    if (this._dynamicDateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicDateValue = this._dynamicDateValue;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryParameterDateValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateValue = undefined;
      this._dynamicDateValue = undefined;
      this._precision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateValue = value.dateValue;
      this._dynamicDateValue = value.dynamicDateValue;
      this._precision = value.precision;
    }
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue?: string; 
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }
  public set dateValue(value: string) {
    this._dateValue = value;
  }
  public resetDateValue() {
    this._dateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue;
  }

  // dynamic_date_value - computed: false, optional: true, required: false
  private _dynamicDateValue?: string; 
  public get dynamicDateValue() {
    return this.getStringAttribute('dynamic_date_value');
  }
  public set dynamicDateValue(value: string) {
    this._dynamicDateValue = value;
  }
  public resetDynamicDateValue() {
    this._dynamicDateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDateValueInput() {
    return this._dynamicDateValue;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: string; 
  public get precision() {
    return this.getStringAttribute('precision');
  }
  public set precision(value: string) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }
}
export interface QueryParameterEnumValueMultiValuesOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#prefix Query#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#separator Query#separator}
  */
  readonly separator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#suffix Query#suffix}
  */
  readonly suffix?: string;
}

export function queryParameterEnumValueMultiValuesOptionsToTerraform(struct?: QueryParameterEnumValueMultiValuesOptionsOutputReference | QueryParameterEnumValueMultiValuesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    separator: cdktf.stringToTerraform(struct!.separator),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function queryParameterEnumValueMultiValuesOptionsToHclTerraform(struct?: QueryParameterEnumValueMultiValuesOptionsOutputReference | QueryParameterEnumValueMultiValuesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueryParameterEnumValueMultiValuesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QueryParameterEnumValueMultiValuesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryParameterEnumValueMultiValuesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._separator = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
      this._separator = value.separator;
      this._suffix = value.suffix;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface QueryParameterEnumValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#enum_options Query#enum_options}
  */
  readonly enumOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#values Query#values}
  */
  readonly values?: string[];
  /**
  * multi_values_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#multi_values_options Query#multi_values_options}
  */
  readonly multiValuesOptions?: QueryParameterEnumValueMultiValuesOptions;
}

export function queryParameterEnumValueToTerraform(struct?: QueryParameterEnumValueOutputReference | QueryParameterEnumValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enum_options: cdktf.stringToTerraform(struct!.enumOptions),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    multi_values_options: queryParameterEnumValueMultiValuesOptionsToTerraform(struct!.multiValuesOptions),
  }
}


export function queryParameterEnumValueToHclTerraform(struct?: QueryParameterEnumValueOutputReference | QueryParameterEnumValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enum_options: {
      value: cdktf.stringToHclTerraform(struct!.enumOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    multi_values_options: {
      value: queryParameterEnumValueMultiValuesOptionsToHclTerraform(struct!.multiValuesOptions),
      isBlock: true,
      type: "list",
      storageClassType: "QueryParameterEnumValueMultiValuesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueryParameterEnumValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QueryParameterEnumValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enumOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumOptions = this._enumOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._multiValuesOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValuesOptions = this._multiValuesOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryParameterEnumValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enumOptions = undefined;
      this._values = undefined;
      this._multiValuesOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enumOptions = value.enumOptions;
      this._values = value.values;
      this._multiValuesOptions.internalValue = value.multiValuesOptions;
    }
  }

  // enum_options - computed: false, optional: true, required: false
  private _enumOptions?: string; 
  public get enumOptions() {
    return this.getStringAttribute('enum_options');
  }
  public set enumOptions(value: string) {
    this._enumOptions = value;
  }
  public resetEnumOptions() {
    this._enumOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumOptionsInput() {
    return this._enumOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // multi_values_options - computed: false, optional: true, required: false
  private _multiValuesOptions = new QueryParameterEnumValueMultiValuesOptionsOutputReference(this, "multi_values_options");
  public get multiValuesOptions() {
    return this._multiValuesOptions;
  }
  public putMultiValuesOptions(value: QueryParameterEnumValueMultiValuesOptions) {
    this._multiValuesOptions.internalValue = value;
  }
  public resetMultiValuesOptions() {
    this._multiValuesOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValuesOptionsInput() {
    return this._multiValuesOptions.internalValue;
  }
}
export interface QueryParameterNumericValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#value Query#value}
  */
  readonly value: number;
}

export function queryParameterNumericValueToTerraform(struct?: QueryParameterNumericValueOutputReference | QueryParameterNumericValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function queryParameterNumericValueToHclTerraform(struct?: QueryParameterNumericValueOutputReference | QueryParameterNumericValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueryParameterNumericValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QueryParameterNumericValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryParameterNumericValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface QueryParameterQueryBackedValueMultiValuesOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#prefix Query#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#separator Query#separator}
  */
  readonly separator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#suffix Query#suffix}
  */
  readonly suffix?: string;
}

export function queryParameterQueryBackedValueMultiValuesOptionsToTerraform(struct?: QueryParameterQueryBackedValueMultiValuesOptionsOutputReference | QueryParameterQueryBackedValueMultiValuesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    separator: cdktf.stringToTerraform(struct!.separator),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function queryParameterQueryBackedValueMultiValuesOptionsToHclTerraform(struct?: QueryParameterQueryBackedValueMultiValuesOptionsOutputReference | QueryParameterQueryBackedValueMultiValuesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueryParameterQueryBackedValueMultiValuesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QueryParameterQueryBackedValueMultiValuesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryParameterQueryBackedValueMultiValuesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._separator = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
      this._separator = value.separator;
      this._suffix = value.suffix;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface QueryParameterQueryBackedValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#query_id Query#query_id}
  */
  readonly queryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#values Query#values}
  */
  readonly values?: string[];
  /**
  * multi_values_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#multi_values_options Query#multi_values_options}
  */
  readonly multiValuesOptions?: QueryParameterQueryBackedValueMultiValuesOptions;
}

export function queryParameterQueryBackedValueToTerraform(struct?: QueryParameterQueryBackedValueOutputReference | QueryParameterQueryBackedValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_id: cdktf.stringToTerraform(struct!.queryId),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    multi_values_options: queryParameterQueryBackedValueMultiValuesOptionsToTerraform(struct!.multiValuesOptions),
  }
}


export function queryParameterQueryBackedValueToHclTerraform(struct?: QueryParameterQueryBackedValueOutputReference | QueryParameterQueryBackedValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_id: {
      value: cdktf.stringToHclTerraform(struct!.queryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    multi_values_options: {
      value: queryParameterQueryBackedValueMultiValuesOptionsToHclTerraform(struct!.multiValuesOptions),
      isBlock: true,
      type: "list",
      storageClassType: "QueryParameterQueryBackedValueMultiValuesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueryParameterQueryBackedValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QueryParameterQueryBackedValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._multiValuesOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValuesOptions = this._multiValuesOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryParameterQueryBackedValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryId = undefined;
      this._values = undefined;
      this._multiValuesOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryId = value.queryId;
      this._values = value.values;
      this._multiValuesOptions.internalValue = value.multiValuesOptions;
    }
  }

  // query_id - computed: false, optional: false, required: true
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // multi_values_options - computed: false, optional: true, required: false
  private _multiValuesOptions = new QueryParameterQueryBackedValueMultiValuesOptionsOutputReference(this, "multi_values_options");
  public get multiValuesOptions() {
    return this._multiValuesOptions;
  }
  public putMultiValuesOptions(value: QueryParameterQueryBackedValueMultiValuesOptions) {
    this._multiValuesOptions.internalValue = value;
  }
  public resetMultiValuesOptions() {
    this._multiValuesOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValuesOptionsInput() {
    return this._multiValuesOptions.internalValue;
  }
}
export interface QueryParameterTextValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#value Query#value}
  */
  readonly value: string;
}

export function queryParameterTextValueToTerraform(struct?: QueryParameterTextValueOutputReference | QueryParameterTextValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function queryParameterTextValueToHclTerraform(struct?: QueryParameterTextValueOutputReference | QueryParameterTextValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueryParameterTextValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QueryParameterTextValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryParameterTextValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface QueryParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#name Query#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#title Query#title}
  */
  readonly title?: string;
  /**
  * date_range_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#date_range_value Query#date_range_value}
  */
  readonly dateRangeValue?: QueryParameterDateRangeValue;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#date_value Query#date_value}
  */
  readonly dateValue?: QueryParameterDateValue;
  /**
  * enum_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#enum_value Query#enum_value}
  */
  readonly enumValue?: QueryParameterEnumValue;
  /**
  * numeric_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#numeric_value Query#numeric_value}
  */
  readonly numericValue?: QueryParameterNumericValue;
  /**
  * query_backed_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#query_backed_value Query#query_backed_value}
  */
  readonly queryBackedValue?: QueryParameterQueryBackedValue;
  /**
  * text_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#text_value Query#text_value}
  */
  readonly textValue?: QueryParameterTextValue;
}

export function queryParameterToTerraform(struct?: QueryParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    title: cdktf.stringToTerraform(struct!.title),
    date_range_value: queryParameterDateRangeValueToTerraform(struct!.dateRangeValue),
    date_value: queryParameterDateValueToTerraform(struct!.dateValue),
    enum_value: queryParameterEnumValueToTerraform(struct!.enumValue),
    numeric_value: queryParameterNumericValueToTerraform(struct!.numericValue),
    query_backed_value: queryParameterQueryBackedValueToTerraform(struct!.queryBackedValue),
    text_value: queryParameterTextValueToTerraform(struct!.textValue),
  }
}


export function queryParameterToHclTerraform(struct?: QueryParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range_value: {
      value: queryParameterDateRangeValueToHclTerraform(struct!.dateRangeValue),
      isBlock: true,
      type: "list",
      storageClassType: "QueryParameterDateRangeValueList",
    },
    date_value: {
      value: queryParameterDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "QueryParameterDateValueList",
    },
    enum_value: {
      value: queryParameterEnumValueToHclTerraform(struct!.enumValue),
      isBlock: true,
      type: "list",
      storageClassType: "QueryParameterEnumValueList",
    },
    numeric_value: {
      value: queryParameterNumericValueToHclTerraform(struct!.numericValue),
      isBlock: true,
      type: "list",
      storageClassType: "QueryParameterNumericValueList",
    },
    query_backed_value: {
      value: queryParameterQueryBackedValueToHclTerraform(struct!.queryBackedValue),
      isBlock: true,
      type: "list",
      storageClassType: "QueryParameterQueryBackedValueList",
    },
    text_value: {
      value: queryParameterTextValueToHclTerraform(struct!.textValue),
      isBlock: true,
      type: "list",
      storageClassType: "QueryParameterTextValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueryParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QueryParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._dateRangeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRangeValue = this._dateRangeValue?.internalValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._enumValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumValue = this._enumValue?.internalValue;
    }
    if (this._numericValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericValue = this._numericValue?.internalValue;
    }
    if (this._queryBackedValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryBackedValue = this._queryBackedValue?.internalValue;
    }
    if (this._textValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textValue = this._textValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._title = undefined;
      this._dateRangeValue.internalValue = undefined;
      this._dateValue.internalValue = undefined;
      this._enumValue.internalValue = undefined;
      this._numericValue.internalValue = undefined;
      this._queryBackedValue.internalValue = undefined;
      this._textValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._title = value.title;
      this._dateRangeValue.internalValue = value.dateRangeValue;
      this._dateValue.internalValue = value.dateValue;
      this._enumValue.internalValue = value.enumValue;
      this._numericValue.internalValue = value.numericValue;
      this._queryBackedValue.internalValue = value.queryBackedValue;
      this._textValue.internalValue = value.textValue;
    }
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // date_range_value - computed: false, optional: true, required: false
  private _dateRangeValue = new QueryParameterDateRangeValueOutputReference(this, "date_range_value");
  public get dateRangeValue() {
    return this._dateRangeValue;
  }
  public putDateRangeValue(value: QueryParameterDateRangeValue) {
    this._dateRangeValue.internalValue = value;
  }
  public resetDateRangeValue() {
    this._dateRangeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeValueInput() {
    return this._dateRangeValue.internalValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new QueryParameterDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: QueryParameterDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // enum_value - computed: false, optional: true, required: false
  private _enumValue = new QueryParameterEnumValueOutputReference(this, "enum_value");
  public get enumValue() {
    return this._enumValue;
  }
  public putEnumValue(value: QueryParameterEnumValue) {
    this._enumValue.internalValue = value;
  }
  public resetEnumValue() {
    this._enumValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumValueInput() {
    return this._enumValue.internalValue;
  }

  // numeric_value - computed: false, optional: true, required: false
  private _numericValue = new QueryParameterNumericValueOutputReference(this, "numeric_value");
  public get numericValue() {
    return this._numericValue;
  }
  public putNumericValue(value: QueryParameterNumericValue) {
    this._numericValue.internalValue = value;
  }
  public resetNumericValue() {
    this._numericValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericValueInput() {
    return this._numericValue.internalValue;
  }

  // query_backed_value - computed: false, optional: true, required: false
  private _queryBackedValue = new QueryParameterQueryBackedValueOutputReference(this, "query_backed_value");
  public get queryBackedValue() {
    return this._queryBackedValue;
  }
  public putQueryBackedValue(value: QueryParameterQueryBackedValue) {
    this._queryBackedValue.internalValue = value;
  }
  public resetQueryBackedValue() {
    this._queryBackedValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryBackedValueInput() {
    return this._queryBackedValue.internalValue;
  }

  // text_value - computed: false, optional: true, required: false
  private _textValue = new QueryParameterTextValueOutputReference(this, "text_value");
  public get textValue() {
    return this._textValue;
  }
  public putTextValue(value: QueryParameterTextValue) {
    this._textValue.internalValue = value;
  }
  public resetTextValue() {
    this._textValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValueInput() {
    return this._textValue.internalValue;
  }
}

export class QueryParameterList extends cdktf.ComplexList {
  public internalValue? : QueryParameter[] | cdktf.IResolvable

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
  public get(index: number): QueryParameterOutputReference {
    return new QueryParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query databricks_query}
*/
export class Query extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Query resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Query to import
  * @param importFromId The id of the existing Query that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Query to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/resources/query databricks_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QueryConfig
  */
  public constructor(scope: Construct, id: string, config: QueryConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_query',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.71.0',
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
    this._applyAutoLimit = config.applyAutoLimit;
    this._catalog = config.catalog;
    this._description = config.description;
    this._displayName = config.displayName;
    this._ownerUserName = config.ownerUserName;
    this._parentPath = config.parentPath;
    this._queryText = config.queryText;
    this._runAsMode = config.runAsMode;
    this._schema = config.schema;
    this._tags = config.tags;
    this._warehouseId = config.warehouseId;
    this._parameter.internalValue = config.parameter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_auto_limit - computed: false, optional: true, required: false
  private _applyAutoLimit?: boolean | cdktf.IResolvable; 
  public get applyAutoLimit() {
    return this.getBooleanAttribute('apply_auto_limit');
  }
  public set applyAutoLimit(value: boolean | cdktf.IResolvable) {
    this._applyAutoLimit = value;
  }
  public resetApplyAutoLimit() {
    this._applyAutoLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyAutoLimitInput() {
    return this._applyAutoLimit;
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modifier_user_name - computed: true, optional: false, required: false
  public get lastModifierUserName() {
    return this.getStringAttribute('last_modifier_user_name');
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // owner_user_name - computed: false, optional: true, required: false
  private _ownerUserName?: string; 
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }
  public set ownerUserName(value: string) {
    this._ownerUserName = value;
  }
  public resetOwnerUserName() {
    this._ownerUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserNameInput() {
    return this._ownerUserName;
  }

  // parent_path - computed: false, optional: true, required: false
  private _parentPath?: string; 
  public get parentPath() {
    return this.getStringAttribute('parent_path');
  }
  public set parentPath(value: string) {
    this._parentPath = value;
  }
  public resetParentPath() {
    this._parentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPathInput() {
    return this._parentPath;
  }

  // query_text - computed: false, optional: false, required: true
  private _queryText?: string; 
  public get queryText() {
    return this.getStringAttribute('query_text');
  }
  public set queryText(value: string) {
    this._queryText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTextInput() {
    return this._queryText;
  }

  // run_as_mode - computed: false, optional: true, required: false
  private _runAsMode?: string; 
  public get runAsMode() {
    return this.getStringAttribute('run_as_mode');
  }
  public set runAsMode(value: string) {
    this._runAsMode = value;
  }
  public resetRunAsMode() {
    this._runAsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsModeInput() {
    return this._runAsMode;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // warehouse_id - computed: false, optional: false, required: true
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new QueryParameterList(this, "parameter", false);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: QueryParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_auto_limit: cdktf.booleanToTerraform(this._applyAutoLimit),
      catalog: cdktf.stringToTerraform(this._catalog),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      owner_user_name: cdktf.stringToTerraform(this._ownerUserName),
      parent_path: cdktf.stringToTerraform(this._parentPath),
      query_text: cdktf.stringToTerraform(this._queryText),
      run_as_mode: cdktf.stringToTerraform(this._runAsMode),
      schema: cdktf.stringToTerraform(this._schema),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      warehouse_id: cdktf.stringToTerraform(this._warehouseId),
      parameter: cdktf.listMapper(queryParameterToTerraform, true)(this._parameter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_auto_limit: {
        value: cdktf.booleanToHclTerraform(this._applyAutoLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      catalog: {
        value: cdktf.stringToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_user_name: {
        value: cdktf.stringToHclTerraform(this._ownerUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_path: {
        value: cdktf.stringToHclTerraform(this._parentPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_text: {
        value: cdktf.stringToHclTerraform(this._queryText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_as_mode: {
        value: cdktf.stringToHclTerraform(this._runAsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      warehouse_id: {
        value: cdktf.stringToHclTerraform(this._warehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameter: {
        value: cdktf.listMapperHcl(queryParameterToHclTerraform, true)(this._parameter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QueryParameterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
