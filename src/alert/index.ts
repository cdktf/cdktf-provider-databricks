/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#custom_body Alert#custom_body}
  */
  readonly customBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#custom_subject Alert#custom_subject}
  */
  readonly customSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#display_name Alert#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#notify_on_ok Alert#notify_on_ok}
  */
  readonly notifyOnOk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#owner_user_name Alert#owner_user_name}
  */
  readonly ownerUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#parent_path Alert#parent_path}
  */
  readonly parentPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#query_id Alert#query_id}
  */
  readonly queryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#seconds_to_retrigger Alert#seconds_to_retrigger}
  */
  readonly secondsToRetrigger?: number;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#condition Alert#condition}
  */
  readonly condition: AlertCondition;
}
export interface AlertConditionOperandColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#name Alert#name}
  */
  readonly name: string;
}

export function alertConditionOperandColumnToTerraform(struct?: AlertConditionOperandColumnOutputReference | AlertConditionOperandColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function alertConditionOperandColumnToHclTerraform(struct?: AlertConditionOperandColumnOutputReference | AlertConditionOperandColumn): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertConditionOperandColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertConditionOperandColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertConditionOperandColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface AlertConditionOperand {
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#column Alert#column}
  */
  readonly column: AlertConditionOperandColumn;
}

export function alertConditionOperandToTerraform(struct?: AlertConditionOperandOutputReference | AlertConditionOperand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: alertConditionOperandColumnToTerraform(struct!.column),
  }
}


export function alertConditionOperandToHclTerraform(struct?: AlertConditionOperandOutputReference | AlertConditionOperand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: alertConditionOperandColumnToHclTerraform(struct!.column),
      isBlock: true,
      type: "list",
      storageClassType: "AlertConditionOperandColumnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertConditionOperandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertConditionOperand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertConditionOperand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column.internalValue = value.column;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column = new AlertConditionOperandColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: AlertConditionOperandColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface AlertConditionThresholdValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#bool_value Alert#bool_value}
  */
  readonly boolValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#double_value Alert#double_value}
  */
  readonly doubleValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#string_value Alert#string_value}
  */
  readonly stringValue?: string;
}

export function alertConditionThresholdValueToTerraform(struct?: AlertConditionThresholdValueOutputReference | AlertConditionThresholdValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_value: cdktf.booleanToTerraform(struct!.boolValue),
    double_value: cdktf.numberToTerraform(struct!.doubleValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function alertConditionThresholdValueToHclTerraform(struct?: AlertConditionThresholdValueOutputReference | AlertConditionThresholdValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_value: {
      value: cdktf.booleanToHclTerraform(struct!.boolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    double_value: {
      value: cdktf.numberToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertConditionThresholdValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertConditionThresholdValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolValue = this._boolValue;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertConditionThresholdValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._boolValue = undefined;
      this._doubleValue = undefined;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._boolValue = value.boolValue;
      this._doubleValue = value.doubleValue;
      this._stringValue = value.stringValue;
    }
  }

  // bool_value - computed: false, optional: true, required: false
  private _boolValue?: boolean | cdktf.IResolvable; 
  public get boolValue() {
    return this.getBooleanAttribute('bool_value');
  }
  public set boolValue(value: boolean | cdktf.IResolvable) {
    this._boolValue = value;
  }
  public resetBoolValue() {
    this._boolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValueInput() {
    return this._boolValue;
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue?: number; 
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }
  public set doubleValue(value: number) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface AlertConditionThreshold {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#value Alert#value}
  */
  readonly value: AlertConditionThresholdValue;
}

export function alertConditionThresholdToTerraform(struct?: AlertConditionThresholdOutputReference | AlertConditionThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: alertConditionThresholdValueToTerraform(struct!.value),
  }
}


export function alertConditionThresholdToHclTerraform(struct?: AlertConditionThresholdOutputReference | AlertConditionThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: alertConditionThresholdValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "AlertConditionThresholdValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertConditionThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertConditionThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertConditionThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value.internalValue = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value = new AlertConditionThresholdValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertConditionThresholdValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface AlertCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#empty_result_state Alert#empty_result_state}
  */
  readonly emptyResultState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#op Alert#op}
  */
  readonly op: string;
  /**
  * operand block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#operand Alert#operand}
  */
  readonly operand: AlertConditionOperand;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#threshold Alert#threshold}
  */
  readonly threshold?: AlertConditionThreshold;
}

export function alertConditionToTerraform(struct?: AlertConditionOutputReference | AlertCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    empty_result_state: cdktf.stringToTerraform(struct!.emptyResultState),
    op: cdktf.stringToTerraform(struct!.op),
    operand: alertConditionOperandToTerraform(struct!.operand),
    threshold: alertConditionThresholdToTerraform(struct!.threshold),
  }
}


export function alertConditionToHclTerraform(struct?: AlertConditionOutputReference | AlertCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    empty_result_state: {
      value: cdktf.stringToHclTerraform(struct!.emptyResultState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operand: {
      value: alertConditionOperandToHclTerraform(struct!.operand),
      isBlock: true,
      type: "list",
      storageClassType: "AlertConditionOperandList",
    },
    threshold: {
      value: alertConditionThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "AlertConditionThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emptyResultState !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyResultState = this._emptyResultState;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._operand?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operand = this._operand?.internalValue;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emptyResultState = undefined;
      this._op = undefined;
      this._operand.internalValue = undefined;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emptyResultState = value.emptyResultState;
      this._op = value.op;
      this._operand.internalValue = value.operand;
      this._threshold.internalValue = value.threshold;
    }
  }

  // empty_result_state - computed: false, optional: true, required: false
  private _emptyResultState?: string; 
  public get emptyResultState() {
    return this.getStringAttribute('empty_result_state');
  }
  public set emptyResultState(value: string) {
    this._emptyResultState = value;
  }
  public resetEmptyResultState() {
    this._emptyResultState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyResultStateInput() {
    return this._emptyResultState;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // operand - computed: false, optional: false, required: true
  private _operand = new AlertConditionOperandOutputReference(this, "operand");
  public get operand() {
    return this._operand;
  }
  public putOperand(value: AlertConditionOperand) {
    this._operand.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operandInput() {
    return this._operand.internalValue;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new AlertConditionThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: AlertConditionThreshold) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert databricks_alert}
*/
export class Alert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alert to import
  * @param importFromId The id of the existing Alert that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/alert databricks_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertConfig
  */
  public constructor(scope: Construct, id: string, config: AlertConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_alert',
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
    this._customBody = config.customBody;
    this._customSubject = config.customSubject;
    this._displayName = config.displayName;
    this._notifyOnOk = config.notifyOnOk;
    this._ownerUserName = config.ownerUserName;
    this._parentPath = config.parentPath;
    this._queryId = config.queryId;
    this._secondsToRetrigger = config.secondsToRetrigger;
    this._condition.internalValue = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // custom_body - computed: false, optional: true, required: false
  private _customBody?: string; 
  public get customBody() {
    return this.getStringAttribute('custom_body');
  }
  public set customBody(value: string) {
    this._customBody = value;
  }
  public resetCustomBody() {
    this._customBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBodyInput() {
    return this._customBody;
  }

  // custom_subject - computed: false, optional: true, required: false
  private _customSubject?: string; 
  public get customSubject() {
    return this.getStringAttribute('custom_subject');
  }
  public set customSubject(value: string) {
    this._customSubject = value;
  }
  public resetCustomSubject() {
    this._customSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSubjectInput() {
    return this._customSubject;
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

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // notify_on_ok - computed: false, optional: true, required: false
  private _notifyOnOk?: boolean | cdktf.IResolvable; 
  public get notifyOnOk() {
    return this.getBooleanAttribute('notify_on_ok');
  }
  public set notifyOnOk(value: boolean | cdktf.IResolvable) {
    this._notifyOnOk = value;
  }
  public resetNotifyOnOk() {
    this._notifyOnOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnOkInput() {
    return this._notifyOnOk;
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

  // seconds_to_retrigger - computed: false, optional: true, required: false
  private _secondsToRetrigger?: number; 
  public get secondsToRetrigger() {
    return this.getNumberAttribute('seconds_to_retrigger');
  }
  public set secondsToRetrigger(value: number) {
    this._secondsToRetrigger = value;
  }
  public resetSecondsToRetrigger() {
    this._secondsToRetrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsToRetriggerInput() {
    return this._secondsToRetrigger;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // trigger_time - computed: true, optional: false, required: false
  public get triggerTime() {
    return this.getStringAttribute('trigger_time');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AlertConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AlertCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_body: cdktf.stringToTerraform(this._customBody),
      custom_subject: cdktf.stringToTerraform(this._customSubject),
      display_name: cdktf.stringToTerraform(this._displayName),
      notify_on_ok: cdktf.booleanToTerraform(this._notifyOnOk),
      owner_user_name: cdktf.stringToTerraform(this._ownerUserName),
      parent_path: cdktf.stringToTerraform(this._parentPath),
      query_id: cdktf.stringToTerraform(this._queryId),
      seconds_to_retrigger: cdktf.numberToTerraform(this._secondsToRetrigger),
      condition: alertConditionToTerraform(this._condition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_body: {
        value: cdktf.stringToHclTerraform(this._customBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_subject: {
        value: cdktf.stringToHclTerraform(this._customSubject),
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
      notify_on_ok: {
        value: cdktf.booleanToHclTerraform(this._notifyOnOk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      query_id: {
        value: cdktf.stringToHclTerraform(this._queryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seconds_to_retrigger: {
        value: cdktf.numberToHclTerraform(this._secondsToRetrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      condition: {
        value: alertConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertConditionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
