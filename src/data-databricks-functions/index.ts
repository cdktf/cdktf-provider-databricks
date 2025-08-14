/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksFunctionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#functions DataDatabricksFunctions#functions}
  */
  readonly functions?: DataDatabricksFunctionsFunctions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#include_browse DataDatabricksFunctions#include_browse}
  */
  readonly includeBrowse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}
  */
  readonly schemaName: string;
}
export interface DataDatabricksFunctionsFunctionsInputParamsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#comment DataDatabricksFunctions#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#name DataDatabricksFunctions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}
  */
  readonly parameterDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}
  */
  readonly parameterMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}
  */
  readonly parameterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#position DataDatabricksFunctions#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}
  */
  readonly typeIntervalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}
  */
  readonly typeJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}
  */
  readonly typeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}
  */
  readonly typePrecision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}
  */
  readonly typeScale?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}
  */
  readonly typeText: string;
}

export function dataDatabricksFunctionsFunctionsInputParamsParametersToTerraform(struct?: DataDatabricksFunctionsFunctionsInputParamsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    parameter_default: cdktf.stringToTerraform(struct!.parameterDefault),
    parameter_mode: cdktf.stringToTerraform(struct!.parameterMode),
    parameter_type: cdktf.stringToTerraform(struct!.parameterType),
    position: cdktf.numberToTerraform(struct!.position),
    type_interval_type: cdktf.stringToTerraform(struct!.typeIntervalType),
    type_json: cdktf.stringToTerraform(struct!.typeJson),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    type_precision: cdktf.numberToTerraform(struct!.typePrecision),
    type_scale: cdktf.numberToTerraform(struct!.typeScale),
    type_text: cdktf.stringToTerraform(struct!.typeText),
  }
}


export function dataDatabricksFunctionsFunctionsInputParamsParametersToHclTerraform(struct?: DataDatabricksFunctionsFunctionsInputParamsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
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
    parameter_default: {
      value: cdktf.stringToHclTerraform(struct!.parameterDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_mode: {
      value: cdktf.stringToHclTerraform(struct!.parameterMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_type: {
      value: cdktf.stringToHclTerraform(struct!.parameterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_interval_type: {
      value: cdktf.stringToHclTerraform(struct!.typeIntervalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_json: {
      value: cdktf.stringToHclTerraform(struct!.typeJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_precision: {
      value: cdktf.numberToHclTerraform(struct!.typePrecision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_scale: {
      value: cdktf.numberToHclTerraform(struct!.typeScale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_text: {
      value: cdktf.stringToHclTerraform(struct!.typeText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksFunctionsFunctionsInputParamsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameterDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterDefault = this._parameterDefault;
    }
    if (this._parameterMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterMode = this._parameterMode;
    }
    if (this._parameterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterType = this._parameterType;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._typeIntervalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeIntervalType = this._typeIntervalType;
    }
    if (this._typeJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeJson = this._typeJson;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._typePrecision !== undefined) {
      hasAnyValues = true;
      internalValueResult.typePrecision = this._typePrecision;
    }
    if (this._typeScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeScale = this._typeScale;
    }
    if (this._typeText !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeText = this._typeText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFunctionsFunctionsInputParamsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._parameterDefault = undefined;
      this._parameterMode = undefined;
      this._parameterType = undefined;
      this._position = undefined;
      this._typeIntervalType = undefined;
      this._typeJson = undefined;
      this._typeName = undefined;
      this._typePrecision = undefined;
      this._typeScale = undefined;
      this._typeText = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
      this._parameterDefault = value.parameterDefault;
      this._parameterMode = value.parameterMode;
      this._parameterType = value.parameterType;
      this._position = value.position;
      this._typeIntervalType = value.typeIntervalType;
      this._typeJson = value.typeJson;
      this._typeName = value.typeName;
      this._typePrecision = value.typePrecision;
      this._typeScale = value.typeScale;
      this._typeText = value.typeText;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // parameter_default - computed: true, optional: true, required: false
  private _parameterDefault?: string; 
  public get parameterDefault() {
    return this.getStringAttribute('parameter_default');
  }
  public set parameterDefault(value: string) {
    this._parameterDefault = value;
  }
  public resetParameterDefault() {
    this._parameterDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterDefaultInput() {
    return this._parameterDefault;
  }

  // parameter_mode - computed: true, optional: true, required: false
  private _parameterMode?: string; 
  public get parameterMode() {
    return this.getStringAttribute('parameter_mode');
  }
  public set parameterMode(value: string) {
    this._parameterMode = value;
  }
  public resetParameterMode() {
    this._parameterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterModeInput() {
    return this._parameterMode;
  }

  // parameter_type - computed: true, optional: true, required: false
  private _parameterType?: string; 
  public get parameterType() {
    return this.getStringAttribute('parameter_type');
  }
  public set parameterType(value: string) {
    this._parameterType = value;
  }
  public resetParameterType() {
    this._parameterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterTypeInput() {
    return this._parameterType;
  }

  // position - computed: true, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // type_interval_type - computed: true, optional: true, required: false
  private _typeIntervalType?: string; 
  public get typeIntervalType() {
    return this.getStringAttribute('type_interval_type');
  }
  public set typeIntervalType(value: string) {
    this._typeIntervalType = value;
  }
  public resetTypeIntervalType() {
    this._typeIntervalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIntervalTypeInput() {
    return this._typeIntervalType;
  }

  // type_json - computed: true, optional: true, required: false
  private _typeJson?: string; 
  public get typeJson() {
    return this.getStringAttribute('type_json');
  }
  public set typeJson(value: string) {
    this._typeJson = value;
  }
  public resetTypeJson() {
    this._typeJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeJsonInput() {
    return this._typeJson;
  }

  // type_name - computed: true, optional: false, required: true
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // type_precision - computed: true, optional: true, required: false
  private _typePrecision?: number; 
  public get typePrecision() {
    return this.getNumberAttribute('type_precision');
  }
  public set typePrecision(value: number) {
    this._typePrecision = value;
  }
  public resetTypePrecision() {
    this._typePrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typePrecisionInput() {
    return this._typePrecision;
  }

  // type_scale - computed: true, optional: true, required: false
  private _typeScale?: number; 
  public get typeScale() {
    return this.getNumberAttribute('type_scale');
  }
  public set typeScale(value: number) {
    this._typeScale = value;
  }
  public resetTypeScale() {
    this._typeScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeScaleInput() {
    return this._typeScale;
  }

  // type_text - computed: true, optional: false, required: true
  private _typeText?: string; 
  public get typeText() {
    return this.getStringAttribute('type_text');
  }
  public set typeText(value: string) {
    this._typeText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeTextInput() {
    return this._typeText;
  }
}

export class DataDatabricksFunctionsFunctionsInputParamsParametersList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksFunctionsFunctionsInputParamsParameters[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference {
    return new DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFunctionsFunctionsInputParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}
  */
  readonly parameters?: DataDatabricksFunctionsFunctionsInputParamsParameters[] | cdktf.IResolvable;
}

export function dataDatabricksFunctionsFunctionsInputParamsToTerraform(struct?: DataDatabricksFunctionsFunctionsInputParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(dataDatabricksFunctionsFunctionsInputParamsParametersToTerraform, false)(struct!.parameters),
  }
}


export function dataDatabricksFunctionsFunctionsInputParamsToHclTerraform(struct?: DataDatabricksFunctionsFunctionsInputParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.listMapperHcl(dataDatabricksFunctionsFunctionsInputParamsParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksFunctionsFunctionsInputParamsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFunctionsFunctionsInputParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFunctionsFunctionsInputParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFunctionsFunctionsInputParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameters.internalValue = value.parameters;
    }
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters = new DataDatabricksFunctionsFunctionsInputParamsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataDatabricksFunctionsFunctionsInputParamsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface DataDatabricksFunctionsFunctionsReturnParamsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#comment DataDatabricksFunctions#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#name DataDatabricksFunctions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}
  */
  readonly parameterDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}
  */
  readonly parameterMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}
  */
  readonly parameterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#position DataDatabricksFunctions#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}
  */
  readonly typeIntervalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}
  */
  readonly typeJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}
  */
  readonly typeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}
  */
  readonly typePrecision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}
  */
  readonly typeScale?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}
  */
  readonly typeText: string;
}

export function dataDatabricksFunctionsFunctionsReturnParamsParametersToTerraform(struct?: DataDatabricksFunctionsFunctionsReturnParamsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    parameter_default: cdktf.stringToTerraform(struct!.parameterDefault),
    parameter_mode: cdktf.stringToTerraform(struct!.parameterMode),
    parameter_type: cdktf.stringToTerraform(struct!.parameterType),
    position: cdktf.numberToTerraform(struct!.position),
    type_interval_type: cdktf.stringToTerraform(struct!.typeIntervalType),
    type_json: cdktf.stringToTerraform(struct!.typeJson),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    type_precision: cdktf.numberToTerraform(struct!.typePrecision),
    type_scale: cdktf.numberToTerraform(struct!.typeScale),
    type_text: cdktf.stringToTerraform(struct!.typeText),
  }
}


export function dataDatabricksFunctionsFunctionsReturnParamsParametersToHclTerraform(struct?: DataDatabricksFunctionsFunctionsReturnParamsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
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
    parameter_default: {
      value: cdktf.stringToHclTerraform(struct!.parameterDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_mode: {
      value: cdktf.stringToHclTerraform(struct!.parameterMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_type: {
      value: cdktf.stringToHclTerraform(struct!.parameterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_interval_type: {
      value: cdktf.stringToHclTerraform(struct!.typeIntervalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_json: {
      value: cdktf.stringToHclTerraform(struct!.typeJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_precision: {
      value: cdktf.numberToHclTerraform(struct!.typePrecision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_scale: {
      value: cdktf.numberToHclTerraform(struct!.typeScale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_text: {
      value: cdktf.stringToHclTerraform(struct!.typeText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksFunctionsFunctionsReturnParamsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameterDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterDefault = this._parameterDefault;
    }
    if (this._parameterMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterMode = this._parameterMode;
    }
    if (this._parameterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterType = this._parameterType;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._typeIntervalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeIntervalType = this._typeIntervalType;
    }
    if (this._typeJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeJson = this._typeJson;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._typePrecision !== undefined) {
      hasAnyValues = true;
      internalValueResult.typePrecision = this._typePrecision;
    }
    if (this._typeScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeScale = this._typeScale;
    }
    if (this._typeText !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeText = this._typeText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFunctionsFunctionsReturnParamsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._parameterDefault = undefined;
      this._parameterMode = undefined;
      this._parameterType = undefined;
      this._position = undefined;
      this._typeIntervalType = undefined;
      this._typeJson = undefined;
      this._typeName = undefined;
      this._typePrecision = undefined;
      this._typeScale = undefined;
      this._typeText = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
      this._parameterDefault = value.parameterDefault;
      this._parameterMode = value.parameterMode;
      this._parameterType = value.parameterType;
      this._position = value.position;
      this._typeIntervalType = value.typeIntervalType;
      this._typeJson = value.typeJson;
      this._typeName = value.typeName;
      this._typePrecision = value.typePrecision;
      this._typeScale = value.typeScale;
      this._typeText = value.typeText;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // parameter_default - computed: true, optional: true, required: false
  private _parameterDefault?: string; 
  public get parameterDefault() {
    return this.getStringAttribute('parameter_default');
  }
  public set parameterDefault(value: string) {
    this._parameterDefault = value;
  }
  public resetParameterDefault() {
    this._parameterDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterDefaultInput() {
    return this._parameterDefault;
  }

  // parameter_mode - computed: true, optional: true, required: false
  private _parameterMode?: string; 
  public get parameterMode() {
    return this.getStringAttribute('parameter_mode');
  }
  public set parameterMode(value: string) {
    this._parameterMode = value;
  }
  public resetParameterMode() {
    this._parameterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterModeInput() {
    return this._parameterMode;
  }

  // parameter_type - computed: true, optional: true, required: false
  private _parameterType?: string; 
  public get parameterType() {
    return this.getStringAttribute('parameter_type');
  }
  public set parameterType(value: string) {
    this._parameterType = value;
  }
  public resetParameterType() {
    this._parameterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterTypeInput() {
    return this._parameterType;
  }

  // position - computed: true, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // type_interval_type - computed: true, optional: true, required: false
  private _typeIntervalType?: string; 
  public get typeIntervalType() {
    return this.getStringAttribute('type_interval_type');
  }
  public set typeIntervalType(value: string) {
    this._typeIntervalType = value;
  }
  public resetTypeIntervalType() {
    this._typeIntervalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIntervalTypeInput() {
    return this._typeIntervalType;
  }

  // type_json - computed: true, optional: true, required: false
  private _typeJson?: string; 
  public get typeJson() {
    return this.getStringAttribute('type_json');
  }
  public set typeJson(value: string) {
    this._typeJson = value;
  }
  public resetTypeJson() {
    this._typeJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeJsonInput() {
    return this._typeJson;
  }

  // type_name - computed: true, optional: false, required: true
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // type_precision - computed: true, optional: true, required: false
  private _typePrecision?: number; 
  public get typePrecision() {
    return this.getNumberAttribute('type_precision');
  }
  public set typePrecision(value: number) {
    this._typePrecision = value;
  }
  public resetTypePrecision() {
    this._typePrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typePrecisionInput() {
    return this._typePrecision;
  }

  // type_scale - computed: true, optional: true, required: false
  private _typeScale?: number; 
  public get typeScale() {
    return this.getNumberAttribute('type_scale');
  }
  public set typeScale(value: number) {
    this._typeScale = value;
  }
  public resetTypeScale() {
    this._typeScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeScaleInput() {
    return this._typeScale;
  }

  // type_text - computed: true, optional: false, required: true
  private _typeText?: string; 
  public get typeText() {
    return this.getStringAttribute('type_text');
  }
  public set typeText(value: string) {
    this._typeText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeTextInput() {
    return this._typeText;
  }
}

export class DataDatabricksFunctionsFunctionsReturnParamsParametersList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksFunctionsFunctionsReturnParamsParameters[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference {
    return new DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFunctionsFunctionsReturnParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}
  */
  readonly parameters?: DataDatabricksFunctionsFunctionsReturnParamsParameters[] | cdktf.IResolvable;
}

export function dataDatabricksFunctionsFunctionsReturnParamsToTerraform(struct?: DataDatabricksFunctionsFunctionsReturnParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(dataDatabricksFunctionsFunctionsReturnParamsParametersToTerraform, false)(struct!.parameters),
  }
}


export function dataDatabricksFunctionsFunctionsReturnParamsToHclTerraform(struct?: DataDatabricksFunctionsFunctionsReturnParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.listMapperHcl(dataDatabricksFunctionsFunctionsReturnParamsParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksFunctionsFunctionsReturnParamsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFunctionsFunctionsReturnParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFunctionsFunctionsReturnParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFunctionsFunctionsReturnParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameters.internalValue = value.parameters;
    }
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters = new DataDatabricksFunctionsFunctionsReturnParamsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataDatabricksFunctionsFunctionsReturnParamsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#connection_name DataDatabricksFunctions#connection_name}
  */
  readonly connectionName?: string;
}

export function dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionToTerraform(struct?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
  }
}


export function dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionToHclTerraform(struct?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
    }
  }

  // connection_name - computed: true, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }
}
export interface DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#credential_name DataDatabricksFunctions#credential_name}
  */
  readonly credentialName?: string;
}

export function dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialToTerraform(struct?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
  }
}


export function dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialToHclTerraform(struct?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialName = value.credentialName;
    }
  }

  // credential_name - computed: true, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }
}
export interface DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#function_full_name DataDatabricksFunctions#function_full_name}
  */
  readonly functionFullName: string;
}

export function dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionToTerraform(struct?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_full_name: cdktf.stringToTerraform(struct!.functionFullName),
  }
}


export function dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionToHclTerraform(struct?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_full_name: {
      value: cdktf.stringToHclTerraform(struct!.functionFullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionFullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionFullName = this._functionFullName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionFullName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionFullName = value.functionFullName;
    }
  }

  // function_full_name - computed: true, optional: false, required: true
  private _functionFullName?: string; 
  public get functionFullName() {
    return this.getStringAttribute('function_full_name');
  }
  public set functionFullName(value: string) {
    this._functionFullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionFullNameInput() {
    return this._functionFullName;
  }
}
export interface DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#table_full_name DataDatabricksFunctions#table_full_name}
  */
  readonly tableFullName: string;
}

export function dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableToTerraform(struct?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_full_name: cdktf.stringToTerraform(struct!.tableFullName),
  }
}


export function dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableToHclTerraform(struct?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_full_name: {
      value: cdktf.stringToHclTerraform(struct!.tableFullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableFullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFullName = this._tableFullName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableFullName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableFullName = value.tableFullName;
    }
  }

  // table_full_name - computed: true, optional: false, required: true
  private _tableFullName?: string; 
  public get tableFullName() {
    return this.getStringAttribute('table_full_name');
  }
  public set tableFullName(value: string) {
    this._tableFullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFullNameInput() {
    return this._tableFullName;
  }
}
export interface DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#connection DataDatabricksFunctions#connection}
  */
  readonly connection?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#credential DataDatabricksFunctions#credential}
  */
  readonly credential?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#function DataDatabricksFunctions#function}
  */
  readonly function?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#table DataDatabricksFunctions#table}
  */
  readonly table?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable;
}

export function dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesToTerraform(struct?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection: dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionToTerraform(struct!.connection),
    credential: dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialToTerraform(struct!.credential),
    function: dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionToTerraform(struct!.function),
    table: dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableToTerraform(struct!.table),
  }
}


export function dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesToHclTerraform(struct?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection: {
      value: dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection",
    },
    credential: {
      value: dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialToHclTerraform(struct!.credential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential",
    },
    function: {
      value: dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionToHclTerraform(struct!.function),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction",
    },
    table: {
      value: dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableToHclTerraform(struct!.table),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential?.internalValue;
    }
    if (this._function?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function?.internalValue;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connection.internalValue = undefined;
      this._credential.internalValue = undefined;
      this._function.internalValue = undefined;
      this._table.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connection.internalValue = value.connection;
      this._credential.internalValue = value.credential;
      this._function.internalValue = value.function;
      this._table.internalValue = value.table;
    }
  }

  // connection - computed: true, optional: true, required: false
  private _connection = new DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // credential - computed: true, optional: true, required: false
  private _credential = new DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential) {
    this._credential.internalValue = value;
  }
  public resetCredential() {
    this._credential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // function - computed: true, optional: true, required: false
  private _function = new DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }
  public putFunction(value: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction) {
    this._function.internalValue = value;
  }
  public resetFunction() {
    this._function.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function.internalValue;
  }

  // table - computed: true, optional: true, required: false
  private _table = new DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }
  public putTable(value: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }
}

export class DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference {
    return new DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFunctionsFunctionsRoutineDependencies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#dependencies DataDatabricksFunctions#dependencies}
  */
  readonly dependencies?: DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies[] | cdktf.IResolvable;
}

export function dataDatabricksFunctionsFunctionsRoutineDependenciesToTerraform(struct?: DataDatabricksFunctionsFunctionsRoutineDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependencies: cdktf.listMapper(dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesToTerraform, false)(struct!.dependencies),
  }
}


export function dataDatabricksFunctionsFunctionsRoutineDependenciesToHclTerraform(struct?: DataDatabricksFunctionsFunctionsRoutineDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependencies: {
      value: cdktf.listMapperHcl(dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesToHclTerraform, false)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFunctionsFunctionsRoutineDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFunctionsFunctionsRoutineDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencies.internalValue = value.dependencies;
    }
  }

  // dependencies - computed: true, optional: true, required: false
  private _dependencies = new DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }
}
export interface DataDatabricksFunctionsFunctions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#browse_only DataDatabricksFunctions#browse_only}
  */
  readonly browseOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#comment DataDatabricksFunctions#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#created_at DataDatabricksFunctions#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#created_by DataDatabricksFunctions#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#data_type DataDatabricksFunctions#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#external_language DataDatabricksFunctions#external_language}
  */
  readonly externalLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#external_name DataDatabricksFunctions#external_name}
  */
  readonly externalName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#full_data_type DataDatabricksFunctions#full_data_type}
  */
  readonly fullDataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#full_name DataDatabricksFunctions#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#function_id DataDatabricksFunctions#function_id}
  */
  readonly functionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#input_params DataDatabricksFunctions#input_params}
  */
  readonly inputParams?: DataDatabricksFunctionsFunctionsInputParams;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#is_deterministic DataDatabricksFunctions#is_deterministic}
  */
  readonly isDeterministic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#is_null_call DataDatabricksFunctions#is_null_call}
  */
  readonly isNullCall?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#metastore_id DataDatabricksFunctions#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#name DataDatabricksFunctions#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#owner DataDatabricksFunctions#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#parameter_style DataDatabricksFunctions#parameter_style}
  */
  readonly parameterStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#properties DataDatabricksFunctions#properties}
  */
  readonly properties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#return_params DataDatabricksFunctions#return_params}
  */
  readonly returnParams?: DataDatabricksFunctionsFunctionsReturnParams;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#routine_body DataDatabricksFunctions#routine_body}
  */
  readonly routineBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#routine_definition DataDatabricksFunctions#routine_definition}
  */
  readonly routineDefinition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#routine_dependencies DataDatabricksFunctions#routine_dependencies}
  */
  readonly routineDependencies?: DataDatabricksFunctionsFunctionsRoutineDependencies;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#security_type DataDatabricksFunctions#security_type}
  */
  readonly securityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#specific_name DataDatabricksFunctions#specific_name}
  */
  readonly specificName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#sql_data_access DataDatabricksFunctions#sql_data_access}
  */
  readonly sqlDataAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#sql_path DataDatabricksFunctions#sql_path}
  */
  readonly sqlPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#updated_at DataDatabricksFunctions#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#updated_by DataDatabricksFunctions#updated_by}
  */
  readonly updatedBy?: string;
}

export function dataDatabricksFunctionsFunctionsToTerraform(struct?: DataDatabricksFunctionsFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browse_only: cdktf.booleanToTerraform(struct!.browseOnly),
    catalog_name: cdktf.stringToTerraform(struct!.catalogName),
    comment: cdktf.stringToTerraform(struct!.comment),
    created_at: cdktf.numberToTerraform(struct!.createdAt),
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    external_language: cdktf.stringToTerraform(struct!.externalLanguage),
    external_name: cdktf.stringToTerraform(struct!.externalName),
    full_data_type: cdktf.stringToTerraform(struct!.fullDataType),
    full_name: cdktf.stringToTerraform(struct!.fullName),
    function_id: cdktf.stringToTerraform(struct!.functionId),
    input_params: dataDatabricksFunctionsFunctionsInputParamsToTerraform(struct!.inputParams),
    is_deterministic: cdktf.booleanToTerraform(struct!.isDeterministic),
    is_null_call: cdktf.booleanToTerraform(struct!.isNullCall),
    metastore_id: cdktf.stringToTerraform(struct!.metastoreId),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    parameter_style: cdktf.stringToTerraform(struct!.parameterStyle),
    properties: cdktf.stringToTerraform(struct!.properties),
    return_params: dataDatabricksFunctionsFunctionsReturnParamsToTerraform(struct!.returnParams),
    routine_body: cdktf.stringToTerraform(struct!.routineBody),
    routine_definition: cdktf.stringToTerraform(struct!.routineDefinition),
    routine_dependencies: dataDatabricksFunctionsFunctionsRoutineDependenciesToTerraform(struct!.routineDependencies),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    security_type: cdktf.stringToTerraform(struct!.securityType),
    specific_name: cdktf.stringToTerraform(struct!.specificName),
    sql_data_access: cdktf.stringToTerraform(struct!.sqlDataAccess),
    sql_path: cdktf.stringToTerraform(struct!.sqlPath),
    updated_at: cdktf.numberToTerraform(struct!.updatedAt),
    updated_by: cdktf.stringToTerraform(struct!.updatedBy),
  }
}


export function dataDatabricksFunctionsFunctionsToHclTerraform(struct?: DataDatabricksFunctionsFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    browse_only: {
      value: cdktf.booleanToHclTerraform(struct!.browseOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    catalog_name: {
      value: cdktf.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_at: {
      value: cdktf.numberToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_language: {
      value: cdktf.stringToHclTerraform(struct!.externalLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_name: {
      value: cdktf.stringToHclTerraform(struct!.externalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_data_type: {
      value: cdktf.stringToHclTerraform(struct!.fullDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_name: {
      value: cdktf.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_id: {
      value: cdktf.stringToHclTerraform(struct!.functionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_params: {
      value: dataDatabricksFunctionsFunctionsInputParamsToHclTerraform(struct!.inputParams),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFunctionsFunctionsInputParams",
    },
    is_deterministic: {
      value: cdktf.booleanToHclTerraform(struct!.isDeterministic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_null_call: {
      value: cdktf.booleanToHclTerraform(struct!.isNullCall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metastore_id: {
      value: cdktf.stringToHclTerraform(struct!.metastoreId),
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
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_style: {
      value: cdktf.stringToHclTerraform(struct!.parameterStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.stringToHclTerraform(struct!.properties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_params: {
      value: dataDatabricksFunctionsFunctionsReturnParamsToHclTerraform(struct!.returnParams),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFunctionsFunctionsReturnParams",
    },
    routine_body: {
      value: cdktf.stringToHclTerraform(struct!.routineBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine_definition: {
      value: cdktf.stringToHclTerraform(struct!.routineDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine_dependencies: {
      value: dataDatabricksFunctionsFunctionsRoutineDependenciesToHclTerraform(struct!.routineDependencies),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFunctionsFunctionsRoutineDependencies",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_type: {
      value: cdktf.stringToHclTerraform(struct!.securityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_name: {
      value: cdktf.stringToHclTerraform(struct!.specificName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_data_access: {
      value: cdktf.stringToHclTerraform(struct!.sqlDataAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_path: {
      value: cdktf.stringToHclTerraform(struct!.sqlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.numberToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    updated_by: {
      value: cdktf.stringToHclTerraform(struct!.updatedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFunctionsFunctionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksFunctionsFunctions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browseOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.browseOnly = this._browseOnly;
    }
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._externalLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalLanguage = this._externalLanguage;
    }
    if (this._externalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalName = this._externalName;
    }
    if (this._fullDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullDataType = this._fullDataType;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._functionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionId = this._functionId;
    }
    if (this._inputParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputParams = this._inputParams?.internalValue;
    }
    if (this._isDeterministic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeterministic = this._isDeterministic;
    }
    if (this._isNullCall !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNullCall = this._isNullCall;
    }
    if (this._metastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreId = this._metastoreId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._parameterStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterStyle = this._parameterStyle;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._returnParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnParams = this._returnParams?.internalValue;
    }
    if (this._routineBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.routineBody = this._routineBody;
    }
    if (this._routineDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.routineDefinition = this._routineDefinition;
    }
    if (this._routineDependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routineDependencies = this._routineDependencies?.internalValue;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._securityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityType = this._securityType;
    }
    if (this._specificName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificName = this._specificName;
    }
    if (this._sqlDataAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlDataAccess = this._sqlDataAccess;
    }
    if (this._sqlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlPath = this._sqlPath;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._updatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedBy = this._updatedBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFunctionsFunctions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._browseOnly = undefined;
      this._catalogName = undefined;
      this._comment = undefined;
      this._createdAt = undefined;
      this._createdBy = undefined;
      this._dataType = undefined;
      this._externalLanguage = undefined;
      this._externalName = undefined;
      this._fullDataType = undefined;
      this._fullName = undefined;
      this._functionId = undefined;
      this._inputParams.internalValue = undefined;
      this._isDeterministic = undefined;
      this._isNullCall = undefined;
      this._metastoreId = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._parameterStyle = undefined;
      this._properties = undefined;
      this._returnParams.internalValue = undefined;
      this._routineBody = undefined;
      this._routineDefinition = undefined;
      this._routineDependencies.internalValue = undefined;
      this._schemaName = undefined;
      this._securityType = undefined;
      this._specificName = undefined;
      this._sqlDataAccess = undefined;
      this._sqlPath = undefined;
      this._updatedAt = undefined;
      this._updatedBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._browseOnly = value.browseOnly;
      this._catalogName = value.catalogName;
      this._comment = value.comment;
      this._createdAt = value.createdAt;
      this._createdBy = value.createdBy;
      this._dataType = value.dataType;
      this._externalLanguage = value.externalLanguage;
      this._externalName = value.externalName;
      this._fullDataType = value.fullDataType;
      this._fullName = value.fullName;
      this._functionId = value.functionId;
      this._inputParams.internalValue = value.inputParams;
      this._isDeterministic = value.isDeterministic;
      this._isNullCall = value.isNullCall;
      this._metastoreId = value.metastoreId;
      this._name = value.name;
      this._owner = value.owner;
      this._parameterStyle = value.parameterStyle;
      this._properties = value.properties;
      this._returnParams.internalValue = value.returnParams;
      this._routineBody = value.routineBody;
      this._routineDefinition = value.routineDefinition;
      this._routineDependencies.internalValue = value.routineDependencies;
      this._schemaName = value.schemaName;
      this._securityType = value.securityType;
      this._specificName = value.specificName;
      this._sqlDataAccess = value.sqlDataAccess;
      this._sqlPath = value.sqlPath;
      this._updatedAt = value.updatedAt;
      this._updatedBy = value.updatedBy;
    }
  }

  // browse_only - computed: true, optional: true, required: false
  private _browseOnly?: boolean | cdktf.IResolvable; 
  public get browseOnly() {
    return this.getBooleanAttribute('browse_only');
  }
  public set browseOnly(value: boolean | cdktf.IResolvable) {
    this._browseOnly = value;
  }
  public resetBrowseOnly() {
    this._browseOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browseOnlyInput() {
    return this._browseOnly;
  }

  // catalog_name - computed: true, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // data_type - computed: true, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // external_language - computed: true, optional: true, required: false
  private _externalLanguage?: string; 
  public get externalLanguage() {
    return this.getStringAttribute('external_language');
  }
  public set externalLanguage(value: string) {
    this._externalLanguage = value;
  }
  public resetExternalLanguage() {
    this._externalLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLanguageInput() {
    return this._externalLanguage;
  }

  // external_name - computed: true, optional: true, required: false
  private _externalName?: string; 
  public get externalName() {
    return this.getStringAttribute('external_name');
  }
  public set externalName(value: string) {
    this._externalName = value;
  }
  public resetExternalName() {
    this._externalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNameInput() {
    return this._externalName;
  }

  // full_data_type - computed: true, optional: true, required: false
  private _fullDataType?: string; 
  public get fullDataType() {
    return this.getStringAttribute('full_data_type');
  }
  public set fullDataType(value: string) {
    this._fullDataType = value;
  }
  public resetFullDataType() {
    this._fullDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullDataTypeInput() {
    return this._fullDataType;
  }

  // full_name - computed: true, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // function_id - computed: true, optional: true, required: false
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  public resetFunctionId() {
    this._functionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
  }

  // input_params - computed: true, optional: true, required: false
  private _inputParams = new DataDatabricksFunctionsFunctionsInputParamsOutputReference(this, "input_params");
  public get inputParams() {
    return this._inputParams;
  }
  public putInputParams(value: DataDatabricksFunctionsFunctionsInputParams) {
    this._inputParams.internalValue = value;
  }
  public resetInputParams() {
    this._inputParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputParamsInput() {
    return this._inputParams.internalValue;
  }

  // is_deterministic - computed: true, optional: true, required: false
  private _isDeterministic?: boolean | cdktf.IResolvable; 
  public get isDeterministic() {
    return this.getBooleanAttribute('is_deterministic');
  }
  public set isDeterministic(value: boolean | cdktf.IResolvable) {
    this._isDeterministic = value;
  }
  public resetIsDeterministic() {
    this._isDeterministic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeterministicInput() {
    return this._isDeterministic;
  }

  // is_null_call - computed: true, optional: true, required: false
  private _isNullCall?: boolean | cdktf.IResolvable; 
  public get isNullCall() {
    return this.getBooleanAttribute('is_null_call');
  }
  public set isNullCall(value: boolean | cdktf.IResolvable) {
    this._isNullCall = value;
  }
  public resetIsNullCall() {
    this._isNullCall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNullCallInput() {
    return this._isNullCall;
  }

  // metastore_id - computed: true, optional: true, required: false
  private _metastoreId?: string; 
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }
  public set metastoreId(value: string) {
    this._metastoreId = value;
  }
  public resetMetastoreId() {
    this._metastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreIdInput() {
    return this._metastoreId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // parameter_style - computed: true, optional: true, required: false
  private _parameterStyle?: string; 
  public get parameterStyle() {
    return this.getStringAttribute('parameter_style');
  }
  public set parameterStyle(value: string) {
    this._parameterStyle = value;
  }
  public resetParameterStyle() {
    this._parameterStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterStyleInput() {
    return this._parameterStyle;
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // return_params - computed: true, optional: true, required: false
  private _returnParams = new DataDatabricksFunctionsFunctionsReturnParamsOutputReference(this, "return_params");
  public get returnParams() {
    return this._returnParams;
  }
  public putReturnParams(value: DataDatabricksFunctionsFunctionsReturnParams) {
    this._returnParams.internalValue = value;
  }
  public resetReturnParams() {
    this._returnParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnParamsInput() {
    return this._returnParams.internalValue;
  }

  // routine_body - computed: true, optional: true, required: false
  private _routineBody?: string; 
  public get routineBody() {
    return this.getStringAttribute('routine_body');
  }
  public set routineBody(value: string) {
    this._routineBody = value;
  }
  public resetRoutineBody() {
    this._routineBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineBodyInput() {
    return this._routineBody;
  }

  // routine_definition - computed: true, optional: true, required: false
  private _routineDefinition?: string; 
  public get routineDefinition() {
    return this.getStringAttribute('routine_definition');
  }
  public set routineDefinition(value: string) {
    this._routineDefinition = value;
  }
  public resetRoutineDefinition() {
    this._routineDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineDefinitionInput() {
    return this._routineDefinition;
  }

  // routine_dependencies - computed: true, optional: true, required: false
  private _routineDependencies = new DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference(this, "routine_dependencies");
  public get routineDependencies() {
    return this._routineDependencies;
  }
  public putRoutineDependencies(value: DataDatabricksFunctionsFunctionsRoutineDependencies) {
    this._routineDependencies.internalValue = value;
  }
  public resetRoutineDependencies() {
    this._routineDependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineDependenciesInput() {
    return this._routineDependencies.internalValue;
  }

  // schema_name - computed: true, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // security_type - computed: true, optional: true, required: false
  private _securityType?: string; 
  public get securityType() {
    return this.getStringAttribute('security_type');
  }
  public set securityType(value: string) {
    this._securityType = value;
  }
  public resetSecurityType() {
    this._securityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTypeInput() {
    return this._securityType;
  }

  // specific_name - computed: true, optional: true, required: false
  private _specificName?: string; 
  public get specificName() {
    return this.getStringAttribute('specific_name');
  }
  public set specificName(value: string) {
    this._specificName = value;
  }
  public resetSpecificName() {
    this._specificName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificNameInput() {
    return this._specificName;
  }

  // sql_data_access - computed: true, optional: true, required: false
  private _sqlDataAccess?: string; 
  public get sqlDataAccess() {
    return this.getStringAttribute('sql_data_access');
  }
  public set sqlDataAccess(value: string) {
    this._sqlDataAccess = value;
  }
  public resetSqlDataAccess() {
    this._sqlDataAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlDataAccessInput() {
    return this._sqlDataAccess;
  }

  // sql_path - computed: true, optional: true, required: false
  private _sqlPath?: string; 
  public get sqlPath() {
    return this.getStringAttribute('sql_path');
  }
  public set sqlPath(value: string) {
    this._sqlPath = value;
  }
  public resetSqlPath() {
    this._sqlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlPathInput() {
    return this._sqlPath;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // updated_by - computed: true, optional: true, required: false
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }
}

export class DataDatabricksFunctionsFunctionsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksFunctionsFunctions[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksFunctionsFunctionsOutputReference {
    return new DataDatabricksFunctionsFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions databricks_functions}
*/
export class DataDatabricksFunctions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_functions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksFunctions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksFunctions to import
  * @param importFromId The id of the existing DataDatabricksFunctions that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksFunctions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_functions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/functions databricks_functions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksFunctionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksFunctionsConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_functions',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.87.1',
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
    this._catalogName = config.catalogName;
    this._functions.internalValue = config.functions;
    this._includeBrowse = config.includeBrowse;
    this._schemaName = config.schemaName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // functions - computed: true, optional: true, required: false
  private _functions = new DataDatabricksFunctionsFunctionsList(this, "functions", false);
  public get functions() {
    return this._functions;
  }
  public putFunctions(value: DataDatabricksFunctionsFunctions[] | cdktf.IResolvable) {
    this._functions.internalValue = value;
  }
  public resetFunctions() {
    this._functions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions.internalValue;
  }

  // include_browse - computed: false, optional: true, required: false
  private _includeBrowse?: boolean | cdktf.IResolvable; 
  public get includeBrowse() {
    return this.getBooleanAttribute('include_browse');
  }
  public set includeBrowse(value: boolean | cdktf.IResolvable) {
    this._includeBrowse = value;
  }
  public resetIncludeBrowse() {
    this._includeBrowse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBrowseInput() {
    return this._includeBrowse;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_name: cdktf.stringToTerraform(this._catalogName),
      functions: cdktf.listMapper(dataDatabricksFunctionsFunctionsToTerraform, false)(this._functions.internalValue),
      include_browse: cdktf.booleanToTerraform(this._includeBrowse),
      schema_name: cdktf.stringToTerraform(this._schemaName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_name: {
        value: cdktf.stringToHclTerraform(this._catalogName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      functions: {
        value: cdktf.listMapperHcl(dataDatabricksFunctionsFunctionsToHclTerraform, false)(this._functions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksFunctionsFunctionsList",
      },
      include_browse: {
        value: cdktf.booleanToHclTerraform(this._includeBrowse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
