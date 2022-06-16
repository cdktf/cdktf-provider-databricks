// https://www.terraform.io/docs/providers/databricks/r/sql_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#data_source_id SqlQuery#data_source_id}
  */
  readonly dataSourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#description SqlQuery#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#id SqlQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#name SqlQuery#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#query SqlQuery#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#run_as_role SqlQuery#run_as_role}
  */
  readonly runAsRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#tags SqlQuery#tags}
  */
  readonly tags?: string[];
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#parameter SqlQuery#parameter}
  */
  readonly parameter?: SqlQueryParameter[] | cdktf.IResolvable;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#schedule SqlQuery#schedule}
  */
  readonly schedule?: SqlQuerySchedule;
}
export interface SqlQueryParameterDate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#value SqlQuery#value}
  */
  readonly value: string;
}

export function sqlQueryParameterDateToTerraform(struct?: SqlQueryParameterDateOutputReference | SqlQueryParameterDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SqlQueryParameterDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryParameterDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQueryParameterDate | undefined) {
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
export interface SqlQueryParameterDateRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#value SqlQuery#value}
  */
  readonly value: string;
}

export function sqlQueryParameterDateRangeToTerraform(struct?: SqlQueryParameterDateRangeOutputReference | SqlQueryParameterDateRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SqlQueryParameterDateRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryParameterDateRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQueryParameterDateRange | undefined) {
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
export interface SqlQueryParameterDatetime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#value SqlQuery#value}
  */
  readonly value: string;
}

export function sqlQueryParameterDatetimeToTerraform(struct?: SqlQueryParameterDatetimeOutputReference | SqlQueryParameterDatetime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SqlQueryParameterDatetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryParameterDatetime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQueryParameterDatetime | undefined) {
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
export interface SqlQueryParameterDatetimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#value SqlQuery#value}
  */
  readonly value: string;
}

export function sqlQueryParameterDatetimeRangeToTerraform(struct?: SqlQueryParameterDatetimeRangeOutputReference | SqlQueryParameterDatetimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SqlQueryParameterDatetimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryParameterDatetimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQueryParameterDatetimeRange | undefined) {
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
export interface SqlQueryParameterDatetimesec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#value SqlQuery#value}
  */
  readonly value: string;
}

export function sqlQueryParameterDatetimesecToTerraform(struct?: SqlQueryParameterDatetimesecOutputReference | SqlQueryParameterDatetimesec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SqlQueryParameterDatetimesecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryParameterDatetimesec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQueryParameterDatetimesec | undefined) {
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
export interface SqlQueryParameterDatetimesecRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#value SqlQuery#value}
  */
  readonly value: string;
}

export function sqlQueryParameterDatetimesecRangeToTerraform(struct?: SqlQueryParameterDatetimesecRangeOutputReference | SqlQueryParameterDatetimesecRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SqlQueryParameterDatetimesecRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryParameterDatetimesecRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQueryParameterDatetimesecRange | undefined) {
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
export interface SqlQueryParameterEnumMultiple {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#prefix SqlQuery#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#separator SqlQuery#separator}
  */
  readonly separator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#suffix SqlQuery#suffix}
  */
  readonly suffix: string;
}

export function sqlQueryParameterEnumMultipleToTerraform(struct?: SqlQueryParameterEnumMultipleOutputReference | SqlQueryParameterEnumMultiple): any {
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

export class SqlQueryParameterEnumMultipleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryParameterEnumMultiple | undefined {
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

  public set internalValue(value: SqlQueryParameterEnumMultiple | undefined) {
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

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // separator - computed: false, optional: false, required: true
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // suffix - computed: false, optional: false, required: true
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface SqlQueryParameterEnum {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#options SqlQuery#options}
  */
  readonly options: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#value SqlQuery#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#values SqlQuery#values}
  */
  readonly values?: string[];
  /**
  * multiple block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#multiple SqlQuery#multiple}
  */
  readonly multiple?: SqlQueryParameterEnumMultiple;
}

export function sqlQueryParameterEnumToTerraform(struct?: SqlQueryParameterEnumOutputReference | SqlQueryParameterEnum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.options),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    multiple: sqlQueryParameterEnumMultipleToTerraform(struct!.multiple),
  }
}

export class SqlQueryParameterEnumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryParameterEnum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._multiple?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiple = this._multiple?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQueryParameterEnum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._options = undefined;
      this._value = undefined;
      this._values = undefined;
      this._multiple.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._options = value.options;
      this._value = value.value;
      this._values = value.values;
      this._multiple.internalValue = value.multiple;
    }
  }

  // options - computed: false, optional: false, required: true
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
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

  // multiple - computed: false, optional: true, required: false
  private _multiple = new SqlQueryParameterEnumMultipleOutputReference(this, "multiple");
  public get multiple() {
    return this._multiple;
  }
  public putMultiple(value: SqlQueryParameterEnumMultiple) {
    this._multiple.internalValue = value;
  }
  public resetMultiple() {
    this._multiple.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleInput() {
    return this._multiple.internalValue;
  }
}
export interface SqlQueryParameterNumber {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#value SqlQuery#value}
  */
  readonly value: number;
}

export function sqlQueryParameterNumberToTerraform(struct?: SqlQueryParameterNumberOutputReference | SqlQueryParameterNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SqlQueryParameterNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryParameterNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQueryParameterNumber | undefined) {
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
export interface SqlQueryParameterQueryMultiple {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#prefix SqlQuery#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#separator SqlQuery#separator}
  */
  readonly separator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#suffix SqlQuery#suffix}
  */
  readonly suffix: string;
}

export function sqlQueryParameterQueryMultipleToTerraform(struct?: SqlQueryParameterQueryMultipleOutputReference | SqlQueryParameterQueryMultiple): any {
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

export class SqlQueryParameterQueryMultipleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryParameterQueryMultiple | undefined {
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

  public set internalValue(value: SqlQueryParameterQueryMultiple | undefined) {
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

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // separator - computed: false, optional: false, required: true
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // suffix - computed: false, optional: false, required: true
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface SqlQueryParameterQuery {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#query_id SqlQuery#query_id}
  */
  readonly queryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#value SqlQuery#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#values SqlQuery#values}
  */
  readonly values?: string[];
  /**
  * multiple block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#multiple SqlQuery#multiple}
  */
  readonly multiple?: SqlQueryParameterQueryMultiple;
}

export function sqlQueryParameterQueryToTerraform(struct?: SqlQueryParameterQueryOutputReference | SqlQueryParameterQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_id: cdktf.stringToTerraform(struct!.queryId),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    multiple: sqlQueryParameterQueryMultipleToTerraform(struct!.multiple),
  }
}

export class SqlQueryParameterQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryParameterQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._multiple?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiple = this._multiple?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQueryParameterQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryId = undefined;
      this._value = undefined;
      this._values = undefined;
      this._multiple.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryId = value.queryId;
      this._value = value.value;
      this._values = value.values;
      this._multiple.internalValue = value.multiple;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
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

  // multiple - computed: false, optional: true, required: false
  private _multiple = new SqlQueryParameterQueryMultipleOutputReference(this, "multiple");
  public get multiple() {
    return this._multiple;
  }
  public putMultiple(value: SqlQueryParameterQueryMultiple) {
    this._multiple.internalValue = value;
  }
  public resetMultiple() {
    this._multiple.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleInput() {
    return this._multiple.internalValue;
  }
}
export interface SqlQueryParameterText {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#value SqlQuery#value}
  */
  readonly value: string;
}

export function sqlQueryParameterTextToTerraform(struct?: SqlQueryParameterTextOutputReference | SqlQueryParameterText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SqlQueryParameterTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryParameterText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQueryParameterText | undefined) {
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
export interface SqlQueryParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#name SqlQuery#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#title SqlQuery#title}
  */
  readonly title?: string;
  /**
  * date block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#date SqlQuery#date}
  */
  readonly date?: SqlQueryParameterDate;
  /**
  * date_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#date_range SqlQuery#date_range}
  */
  readonly dateRange?: SqlQueryParameterDateRange;
  /**
  * datetime block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#datetime SqlQuery#datetime}
  */
  readonly datetime?: SqlQueryParameterDatetime;
  /**
  * datetime_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#datetime_range SqlQuery#datetime_range}
  */
  readonly datetimeRange?: SqlQueryParameterDatetimeRange;
  /**
  * datetimesec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#datetimesec SqlQuery#datetimesec}
  */
  readonly datetimesec?: SqlQueryParameterDatetimesec;
  /**
  * datetimesec_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#datetimesec_range SqlQuery#datetimesec_range}
  */
  readonly datetimesecRange?: SqlQueryParameterDatetimesecRange;
  /**
  * enum block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#enum SqlQuery#enum}
  */
  readonly enum?: SqlQueryParameterEnum;
  /**
  * number block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#number SqlQuery#number}
  */
  readonly number?: SqlQueryParameterNumber;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#query SqlQuery#query}
  */
  readonly query?: SqlQueryParameterQuery;
  /**
  * text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#text SqlQuery#text}
  */
  readonly text?: SqlQueryParameterText;
}

export function sqlQueryParameterToTerraform(struct?: SqlQueryParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    title: cdktf.stringToTerraform(struct!.title),
    date: sqlQueryParameterDateToTerraform(struct!.date),
    date_range: sqlQueryParameterDateRangeToTerraform(struct!.dateRange),
    datetime: sqlQueryParameterDatetimeToTerraform(struct!.datetime),
    datetime_range: sqlQueryParameterDatetimeRangeToTerraform(struct!.datetimeRange),
    datetimesec: sqlQueryParameterDatetimesecToTerraform(struct!.datetimesec),
    datetimesec_range: sqlQueryParameterDatetimesecRangeToTerraform(struct!.datetimesecRange),
    enum: sqlQueryParameterEnumToTerraform(struct!.enum),
    number: sqlQueryParameterNumberToTerraform(struct!.number),
    query: sqlQueryParameterQueryToTerraform(struct!.query),
    text: sqlQueryParameterTextToTerraform(struct!.text),
  }
}

export class SqlQueryParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlQueryParameter | cdktf.IResolvable | undefined {
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
    if (this._date?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date?.internalValue;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    if (this._datetime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datetime = this._datetime?.internalValue;
    }
    if (this._datetimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datetimeRange = this._datetimeRange?.internalValue;
    }
    if (this._datetimesec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datetimesec = this._datetimesec?.internalValue;
    }
    if (this._datetimesecRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datetimesecRange = this._datetimesecRange?.internalValue;
    }
    if (this._enum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum?.internalValue;
    }
    if (this._number?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQueryParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._title = undefined;
      this._date.internalValue = undefined;
      this._dateRange.internalValue = undefined;
      this._datetime.internalValue = undefined;
      this._datetimeRange.internalValue = undefined;
      this._datetimesec.internalValue = undefined;
      this._datetimesecRange.internalValue = undefined;
      this._enum.internalValue = undefined;
      this._number.internalValue = undefined;
      this._query.internalValue = undefined;
      this._text.internalValue = undefined;
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
      this._date.internalValue = value.date;
      this._dateRange.internalValue = value.dateRange;
      this._datetime.internalValue = value.datetime;
      this._datetimeRange.internalValue = value.datetimeRange;
      this._datetimesec.internalValue = value.datetimesec;
      this._datetimesecRange.internalValue = value.datetimesecRange;
      this._enum.internalValue = value.enum;
      this._number.internalValue = value.number;
      this._query.internalValue = value.query;
      this._text.internalValue = value.text;
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

  // date - computed: false, optional: true, required: false
  private _date = new SqlQueryParameterDateOutputReference(this, "date");
  public get date() {
    return this._date;
  }
  public putDate(value: SqlQueryParameterDate) {
    this._date.internalValue = value;
  }
  public resetDate() {
    this._date.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date.internalValue;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new SqlQueryParameterDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SqlQueryParameterDateRange) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }

  // datetime - computed: false, optional: true, required: false
  private _datetime = new SqlQueryParameterDatetimeOutputReference(this, "datetime");
  public get datetime() {
    return this._datetime;
  }
  public putDatetime(value: SqlQueryParameterDatetime) {
    this._datetime.internalValue = value;
  }
  public resetDatetime() {
    this._datetime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeInput() {
    return this._datetime.internalValue;
  }

  // datetime_range - computed: false, optional: true, required: false
  private _datetimeRange = new SqlQueryParameterDatetimeRangeOutputReference(this, "datetime_range");
  public get datetimeRange() {
    return this._datetimeRange;
  }
  public putDatetimeRange(value: SqlQueryParameterDatetimeRange) {
    this._datetimeRange.internalValue = value;
  }
  public resetDatetimeRange() {
    this._datetimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeRangeInput() {
    return this._datetimeRange.internalValue;
  }

  // datetimesec - computed: false, optional: true, required: false
  private _datetimesec = new SqlQueryParameterDatetimesecOutputReference(this, "datetimesec");
  public get datetimesec() {
    return this._datetimesec;
  }
  public putDatetimesec(value: SqlQueryParameterDatetimesec) {
    this._datetimesec.internalValue = value;
  }
  public resetDatetimesec() {
    this._datetimesec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimesecInput() {
    return this._datetimesec.internalValue;
  }

  // datetimesec_range - computed: false, optional: true, required: false
  private _datetimesecRange = new SqlQueryParameterDatetimesecRangeOutputReference(this, "datetimesec_range");
  public get datetimesecRange() {
    return this._datetimesecRange;
  }
  public putDatetimesecRange(value: SqlQueryParameterDatetimesecRange) {
    this._datetimesecRange.internalValue = value;
  }
  public resetDatetimesecRange() {
    this._datetimesecRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimesecRangeInput() {
    return this._datetimesecRange.internalValue;
  }

  // enum - computed: false, optional: true, required: false
  private _enum = new SqlQueryParameterEnumOutputReference(this, "enum");
  public get enum() {
    return this._enum;
  }
  public putEnum(value: SqlQueryParameterEnum) {
    this._enum.internalValue = value;
  }
  public resetEnum() {
    this._enum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum.internalValue;
  }

  // number - computed: false, optional: true, required: false
  private _number = new SqlQueryParameterNumberOutputReference(this, "number");
  public get number() {
    return this._number;
  }
  public putNumber(value: SqlQueryParameterNumber) {
    this._number.internalValue = value;
  }
  public resetNumber() {
    this._number.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new SqlQueryParameterQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: SqlQueryParameterQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text = new SqlQueryParameterTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: SqlQueryParameterText) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}

export class SqlQueryParameterList extends cdktf.ComplexList {
  public internalValue? : SqlQueryParameter[] | cdktf.IResolvable

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
  public get(index: number): SqlQueryParameterOutputReference {
    return new SqlQueryParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlQueryScheduleContinuous {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#interval_seconds SqlQuery#interval_seconds}
  */
  readonly intervalSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#until_date SqlQuery#until_date}
  */
  readonly untilDate?: string;
}

export function sqlQueryScheduleContinuousToTerraform(struct?: SqlQueryScheduleContinuousOutputReference | SqlQueryScheduleContinuous): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_seconds: cdktf.numberToTerraform(struct!.intervalSeconds),
    until_date: cdktf.stringToTerraform(struct!.untilDate),
  }
}

export class SqlQueryScheduleContinuousOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryScheduleContinuous | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._untilDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.untilDate = this._untilDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQueryScheduleContinuous | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intervalSeconds = undefined;
      this._untilDate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intervalSeconds = value.intervalSeconds;
      this._untilDate = value.untilDate;
    }
  }

  // interval_seconds - computed: false, optional: false, required: true
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // until_date - computed: false, optional: true, required: false
  private _untilDate?: string; 
  public get untilDate() {
    return this.getStringAttribute('until_date');
  }
  public set untilDate(value: string) {
    this._untilDate = value;
  }
  public resetUntilDate() {
    this._untilDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilDateInput() {
    return this._untilDate;
  }
}
export interface SqlQueryScheduleDaily {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#interval_days SqlQuery#interval_days}
  */
  readonly intervalDays: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#time_of_day SqlQuery#time_of_day}
  */
  readonly timeOfDay: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#until_date SqlQuery#until_date}
  */
  readonly untilDate?: string;
}

export function sqlQueryScheduleDailyToTerraform(struct?: SqlQueryScheduleDailyOutputReference | SqlQueryScheduleDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_days: cdktf.numberToTerraform(struct!.intervalDays),
    time_of_day: cdktf.stringToTerraform(struct!.timeOfDay),
    until_date: cdktf.stringToTerraform(struct!.untilDate),
  }
}

export class SqlQueryScheduleDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryScheduleDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalDays = this._intervalDays;
    }
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    if (this._untilDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.untilDate = this._untilDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQueryScheduleDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intervalDays = undefined;
      this._timeOfDay = undefined;
      this._untilDate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intervalDays = value.intervalDays;
      this._timeOfDay = value.timeOfDay;
      this._untilDate = value.untilDate;
    }
  }

  // interval_days - computed: false, optional: false, required: true
  private _intervalDays?: number; 
  public get intervalDays() {
    return this.getNumberAttribute('interval_days');
  }
  public set intervalDays(value: number) {
    this._intervalDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalDaysInput() {
    return this._intervalDays;
  }

  // time_of_day - computed: false, optional: false, required: true
  private _timeOfDay?: string; 
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }

  // until_date - computed: false, optional: true, required: false
  private _untilDate?: string; 
  public get untilDate() {
    return this.getStringAttribute('until_date');
  }
  public set untilDate(value: string) {
    this._untilDate = value;
  }
  public resetUntilDate() {
    this._untilDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilDateInput() {
    return this._untilDate;
  }
}
export interface SqlQueryScheduleWeekly {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#day_of_week SqlQuery#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#interval_weeks SqlQuery#interval_weeks}
  */
  readonly intervalWeeks: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#time_of_day SqlQuery#time_of_day}
  */
  readonly timeOfDay: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#until_date SqlQuery#until_date}
  */
  readonly untilDate?: string;
}

export function sqlQueryScheduleWeeklyToTerraform(struct?: SqlQueryScheduleWeeklyOutputReference | SqlQueryScheduleWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    interval_weeks: cdktf.numberToTerraform(struct!.intervalWeeks),
    time_of_day: cdktf.stringToTerraform(struct!.timeOfDay),
    until_date: cdktf.stringToTerraform(struct!.untilDate),
  }
}

export class SqlQueryScheduleWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQueryScheduleWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._intervalWeeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalWeeks = this._intervalWeeks;
    }
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    if (this._untilDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.untilDate = this._untilDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQueryScheduleWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._intervalWeeks = undefined;
      this._timeOfDay = undefined;
      this._untilDate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._intervalWeeks = value.intervalWeeks;
      this._timeOfDay = value.timeOfDay;
      this._untilDate = value.untilDate;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // interval_weeks - computed: false, optional: false, required: true
  private _intervalWeeks?: number; 
  public get intervalWeeks() {
    return this.getNumberAttribute('interval_weeks');
  }
  public set intervalWeeks(value: number) {
    this._intervalWeeks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalWeeksInput() {
    return this._intervalWeeks;
  }

  // time_of_day - computed: false, optional: false, required: true
  private _timeOfDay?: string; 
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }

  // until_date - computed: false, optional: true, required: false
  private _untilDate?: string; 
  public get untilDate() {
    return this.getStringAttribute('until_date');
  }
  public set untilDate(value: string) {
    this._untilDate = value;
  }
  public resetUntilDate() {
    this._untilDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilDateInput() {
    return this._untilDate;
  }
}
export interface SqlQuerySchedule {
  /**
  * continuous block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#continuous SqlQuery#continuous}
  */
  readonly continuous?: SqlQueryScheduleContinuous;
  /**
  * daily block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#daily SqlQuery#daily}
  */
  readonly daily?: SqlQueryScheduleDaily;
  /**
  * weekly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_query#weekly SqlQuery#weekly}
  */
  readonly weekly?: SqlQueryScheduleWeekly;
}

export function sqlQueryScheduleToTerraform(struct?: SqlQueryScheduleOutputReference | SqlQuerySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continuous: sqlQueryScheduleContinuousToTerraform(struct!.continuous),
    daily: sqlQueryScheduleDailyToTerraform(struct!.daily),
    weekly: sqlQueryScheduleWeeklyToTerraform(struct!.weekly),
  }
}

export class SqlQueryScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlQuerySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuous?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuous = this._continuous?.internalValue;
    }
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlQuerySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continuous.internalValue = undefined;
      this._daily.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continuous.internalValue = value.continuous;
      this._daily.internalValue = value.daily;
      this._weekly.internalValue = value.weekly;
    }
  }

  // continuous - computed: false, optional: true, required: false
  private _continuous = new SqlQueryScheduleContinuousOutputReference(this, "continuous");
  public get continuous() {
    return this._continuous;
  }
  public putContinuous(value: SqlQueryScheduleContinuous) {
    this._continuous.internalValue = value;
  }
  public resetContinuous() {
    this._continuous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous.internalValue;
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new SqlQueryScheduleDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: SqlQueryScheduleDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new SqlQueryScheduleWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: SqlQueryScheduleWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/sql_query databricks_sql_query}
*/
export class SqlQuery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_query";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/sql_query databricks_sql_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlQueryConfig
  */
  public constructor(scope: Construct, id: string, config: SqlQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_sql_query',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '0.6.1',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataSourceId = config.dataSourceId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._query = config.query;
    this._runAsRole = config.runAsRole;
    this._tags = config.tags;
    this._parameter.internalValue = config.parameter;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // run_as_role - computed: false, optional: true, required: false
  private _runAsRole?: string; 
  public get runAsRole() {
    return this.getStringAttribute('run_as_role');
  }
  public set runAsRole(value: string) {
    this._runAsRole = value;
  }
  public resetRunAsRole() {
    this._runAsRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsRoleInput() {
    return this._runAsRole;
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

  // parameter - computed: false, optional: true, required: false
  private _parameter = new SqlQueryParameterList(this, "parameter", false);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: SqlQueryParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new SqlQueryScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: SqlQuerySchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      run_as_role: cdktf.stringToTerraform(this._runAsRole),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      parameter: cdktf.listMapper(sqlQueryParameterToTerraform)(this._parameter.internalValue),
      schedule: sqlQueryScheduleToTerraform(this._schedule.internalValue),
    };
  }
}
