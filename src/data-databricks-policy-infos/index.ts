/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksPolicyInfosConfig extends cdktf.TerraformMetaArguments {
}
export interface DataDatabricksPolicyInfosPoliciesColumnMaskUsing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}
  */
  readonly constant?: string;
}

export function dataDatabricksPolicyInfosPoliciesColumnMaskUsingToTerraform(struct?: DataDatabricksPolicyInfosPoliciesColumnMaskUsing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    constant: cdktf.stringToTerraform(struct!.constant),
  }
}


export function dataDatabricksPolicyInfosPoliciesColumnMaskUsingToHclTerraform(struct?: DataDatabricksPolicyInfosPoliciesColumnMaskUsing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksPolicyInfosPoliciesColumnMaskUsing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfosPoliciesColumnMaskUsing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._constant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._constant = value.constant;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // constant - computed: true, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }
}

export class DataDatabricksPolicyInfosPoliciesColumnMaskUsingList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksPolicyInfosPoliciesColumnMaskUsing[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference {
    return new DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPolicyInfosPoliciesColumnMask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#on_column DataDatabricksPolicyInfos#on_column}
  */
  readonly onColumn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}
  */
  readonly using?: DataDatabricksPolicyInfosPoliciesColumnMaskUsing[] | cdktf.IResolvable;
}

export function dataDatabricksPolicyInfosPoliciesColumnMaskToTerraform(struct?: DataDatabricksPolicyInfosPoliciesColumnMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    on_column: cdktf.stringToTerraform(struct!.onColumn),
    using: cdktf.listMapper(dataDatabricksPolicyInfosPoliciesColumnMaskUsingToTerraform, false)(struct!.using),
  }
}


export function dataDatabricksPolicyInfosPoliciesColumnMaskToHclTerraform(struct?: DataDatabricksPolicyInfosPoliciesColumnMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_column: {
      value: cdktf.stringToHclTerraform(struct!.onColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    using: {
      value: cdktf.listMapperHcl(dataDatabricksPolicyInfosPoliciesColumnMaskUsingToHclTerraform, false)(struct!.using),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksPolicyInfosPoliciesColumnMaskUsingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfosPoliciesColumnMask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._onColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.onColumn = this._onColumn;
    }
    if (this._using?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.using = this._using?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfosPoliciesColumnMask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionName = undefined;
      this._onColumn = undefined;
      this._using.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionName = value.functionName;
      this._onColumn = value.onColumn;
      this._using.internalValue = value.using;
    }
  }

  // function_name - computed: true, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // on_column - computed: true, optional: false, required: true
  private _onColumn?: string; 
  public get onColumn() {
    return this.getStringAttribute('on_column');
  }
  public set onColumn(value: string) {
    this._onColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onColumnInput() {
    return this._onColumn;
  }

  // using - computed: true, optional: true, required: false
  private _using = new DataDatabricksPolicyInfosPoliciesColumnMaskUsingList(this, "using", false);
  public get using() {
    return this._using;
  }
  public putUsing(value: DataDatabricksPolicyInfosPoliciesColumnMaskUsing[] | cdktf.IResolvable) {
    this._using.internalValue = value;
  }
  public resetUsing() {
    this._using.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingInput() {
    return this._using.internalValue;
  }
}
export interface DataDatabricksPolicyInfosPoliciesMatchColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#condition DataDatabricksPolicyInfos#condition}
  */
  readonly condition?: string;
}

export function dataDatabricksPolicyInfosPoliciesMatchColumnsToTerraform(struct?: DataDatabricksPolicyInfosPoliciesMatchColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    condition: cdktf.stringToTerraform(struct!.condition),
  }
}


export function dataDatabricksPolicyInfosPoliciesMatchColumnsToHclTerraform(struct?: DataDatabricksPolicyInfosPoliciesMatchColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksPolicyInfosPoliciesMatchColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfosPoliciesMatchColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._condition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._condition = value.condition;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }
}

export class DataDatabricksPolicyInfosPoliciesMatchColumnsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksPolicyInfosPoliciesMatchColumns[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference {
    return new DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPolicyInfosPoliciesRowFilterUsing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}
  */
  readonly constant?: string;
}

export function dataDatabricksPolicyInfosPoliciesRowFilterUsingToTerraform(struct?: DataDatabricksPolicyInfosPoliciesRowFilterUsing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    constant: cdktf.stringToTerraform(struct!.constant),
  }
}


export function dataDatabricksPolicyInfosPoliciesRowFilterUsingToHclTerraform(struct?: DataDatabricksPolicyInfosPoliciesRowFilterUsing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksPolicyInfosPoliciesRowFilterUsing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfosPoliciesRowFilterUsing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._constant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._constant = value.constant;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // constant - computed: true, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }
}

export class DataDatabricksPolicyInfosPoliciesRowFilterUsingList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksPolicyInfosPoliciesRowFilterUsing[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference {
    return new DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPolicyInfosPoliciesRowFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}
  */
  readonly using?: DataDatabricksPolicyInfosPoliciesRowFilterUsing[] | cdktf.IResolvable;
}

export function dataDatabricksPolicyInfosPoliciesRowFilterToTerraform(struct?: DataDatabricksPolicyInfosPoliciesRowFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    using: cdktf.listMapper(dataDatabricksPolicyInfosPoliciesRowFilterUsingToTerraform, false)(struct!.using),
  }
}


export function dataDatabricksPolicyInfosPoliciesRowFilterToHclTerraform(struct?: DataDatabricksPolicyInfosPoliciesRowFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    using: {
      value: cdktf.listMapperHcl(dataDatabricksPolicyInfosPoliciesRowFilterUsingToHclTerraform, false)(struct!.using),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksPolicyInfosPoliciesRowFilterUsingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfosPoliciesRowFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfosPoliciesRowFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._using?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.using = this._using?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfosPoliciesRowFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionName = undefined;
      this._using.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionName = value.functionName;
      this._using.internalValue = value.using;
    }
  }

  // function_name - computed: true, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // using - computed: true, optional: true, required: false
  private _using = new DataDatabricksPolicyInfosPoliciesRowFilterUsingList(this, "using", false);
  public get using() {
    return this._using;
  }
  public putUsing(value: DataDatabricksPolicyInfosPoliciesRowFilterUsing[] | cdktf.IResolvable) {
    this._using.internalValue = value;
  }
  public resetUsing() {
    this._using.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingInput() {
    return this._using.internalValue;
  }
}
export interface DataDatabricksPolicyInfosPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#column_mask DataDatabricksPolicyInfos#column_mask}
  */
  readonly columnMask?: DataDatabricksPolicyInfosPoliciesColumnMask;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#comment DataDatabricksPolicyInfos#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#except_principals DataDatabricksPolicyInfos#except_principals}
  */
  readonly exceptPrincipals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#for_securable_type DataDatabricksPolicyInfos#for_securable_type}
  */
  readonly forSecurableType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#match_columns DataDatabricksPolicyInfos#match_columns}
  */
  readonly matchColumns?: DataDatabricksPolicyInfosPoliciesMatchColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#name DataDatabricksPolicyInfos#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}
  */
  readonly onSecurableFullname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}
  */
  readonly onSecurableType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#policy_type DataDatabricksPolicyInfos#policy_type}
  */
  readonly policyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#row_filter DataDatabricksPolicyInfos#row_filter}
  */
  readonly rowFilter?: DataDatabricksPolicyInfosPoliciesRowFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#to_principals DataDatabricksPolicyInfos#to_principals}
  */
  readonly toPrincipals: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#when_condition DataDatabricksPolicyInfos#when_condition}
  */
  readonly whenCondition?: string;
}

export function dataDatabricksPolicyInfosPoliciesToTerraform(struct?: DataDatabricksPolicyInfosPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_mask: dataDatabricksPolicyInfosPoliciesColumnMaskToTerraform(struct!.columnMask),
    comment: cdktf.stringToTerraform(struct!.comment),
    except_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptPrincipals),
    for_securable_type: cdktf.stringToTerraform(struct!.forSecurableType),
    match_columns: cdktf.listMapper(dataDatabricksPolicyInfosPoliciesMatchColumnsToTerraform, false)(struct!.matchColumns),
    name: cdktf.stringToTerraform(struct!.name),
    on_securable_fullname: cdktf.stringToTerraform(struct!.onSecurableFullname),
    on_securable_type: cdktf.stringToTerraform(struct!.onSecurableType),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    row_filter: dataDatabricksPolicyInfosPoliciesRowFilterToTerraform(struct!.rowFilter),
    to_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.toPrincipals),
    when_condition: cdktf.stringToTerraform(struct!.whenCondition),
  }
}


export function dataDatabricksPolicyInfosPoliciesToHclTerraform(struct?: DataDatabricksPolicyInfosPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_mask: {
      value: dataDatabricksPolicyInfosPoliciesColumnMaskToHclTerraform(struct!.columnMask),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPolicyInfosPoliciesColumnMask",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except_principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptPrincipals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    for_securable_type: {
      value: cdktf.stringToHclTerraform(struct!.forSecurableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_columns: {
      value: cdktf.listMapperHcl(dataDatabricksPolicyInfosPoliciesMatchColumnsToHclTerraform, false)(struct!.matchColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksPolicyInfosPoliciesMatchColumnsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_securable_fullname: {
      value: cdktf.stringToHclTerraform(struct!.onSecurableFullname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_securable_type: {
      value: cdktf.stringToHclTerraform(struct!.onSecurableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row_filter: {
      value: dataDatabricksPolicyInfosPoliciesRowFilterToHclTerraform(struct!.rowFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPolicyInfosPoliciesRowFilter",
    },
    to_principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.toPrincipals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    when_condition: {
      value: cdktf.stringToHclTerraform(struct!.whenCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfosPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksPolicyInfosPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnMask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnMask = this._columnMask?.internalValue;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._exceptPrincipals !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptPrincipals = this._exceptPrincipals;
    }
    if (this._forSecurableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.forSecurableType = this._forSecurableType;
    }
    if (this._matchColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchColumns = this._matchColumns?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onSecurableFullname !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSecurableFullname = this._onSecurableFullname;
    }
    if (this._onSecurableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSecurableType = this._onSecurableType;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._rowFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowFilter = this._rowFilter?.internalValue;
    }
    if (this._toPrincipals !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPrincipals = this._toPrincipals;
    }
    if (this._whenCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenCondition = this._whenCondition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfosPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnMask.internalValue = undefined;
      this._comment = undefined;
      this._exceptPrincipals = undefined;
      this._forSecurableType = undefined;
      this._matchColumns.internalValue = undefined;
      this._name = undefined;
      this._onSecurableFullname = undefined;
      this._onSecurableType = undefined;
      this._policyType = undefined;
      this._rowFilter.internalValue = undefined;
      this._toPrincipals = undefined;
      this._whenCondition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnMask.internalValue = value.columnMask;
      this._comment = value.comment;
      this._exceptPrincipals = value.exceptPrincipals;
      this._forSecurableType = value.forSecurableType;
      this._matchColumns.internalValue = value.matchColumns;
      this._name = value.name;
      this._onSecurableFullname = value.onSecurableFullname;
      this._onSecurableType = value.onSecurableType;
      this._policyType = value.policyType;
      this._rowFilter.internalValue = value.rowFilter;
      this._toPrincipals = value.toPrincipals;
      this._whenCondition = value.whenCondition;
    }
  }

  // column_mask - computed: true, optional: true, required: false
  private _columnMask = new DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference(this, "column_mask");
  public get columnMask() {
    return this._columnMask;
  }
  public putColumnMask(value: DataDatabricksPolicyInfosPoliciesColumnMask) {
    this._columnMask.internalValue = value;
  }
  public resetColumnMask() {
    this._columnMask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnMaskInput() {
    return this._columnMask.internalValue;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // except_principals - computed: true, optional: true, required: false
  private _exceptPrincipals?: string[]; 
  public get exceptPrincipals() {
    return this.getListAttribute('except_principals');
  }
  public set exceptPrincipals(value: string[]) {
    this._exceptPrincipals = value;
  }
  public resetExceptPrincipals() {
    this._exceptPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptPrincipalsInput() {
    return this._exceptPrincipals;
  }

  // for_securable_type - computed: true, optional: false, required: true
  private _forSecurableType?: string; 
  public get forSecurableType() {
    return this.getStringAttribute('for_securable_type');
  }
  public set forSecurableType(value: string) {
    this._forSecurableType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forSecurableTypeInput() {
    return this._forSecurableType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_columns - computed: true, optional: true, required: false
  private _matchColumns = new DataDatabricksPolicyInfosPoliciesMatchColumnsList(this, "match_columns", false);
  public get matchColumns() {
    return this._matchColumns;
  }
  public putMatchColumns(value: DataDatabricksPolicyInfosPoliciesMatchColumns[] | cdktf.IResolvable) {
    this._matchColumns.internalValue = value;
  }
  public resetMatchColumns() {
    this._matchColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchColumnsInput() {
    return this._matchColumns.internalValue;
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

  // on_securable_fullname - computed: true, optional: true, required: false
  private _onSecurableFullname?: string; 
  public get onSecurableFullname() {
    return this.getStringAttribute('on_securable_fullname');
  }
  public set onSecurableFullname(value: string) {
    this._onSecurableFullname = value;
  }
  public resetOnSecurableFullname() {
    this._onSecurableFullname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSecurableFullnameInput() {
    return this._onSecurableFullname;
  }

  // on_securable_type - computed: true, optional: true, required: false
  private _onSecurableType?: string; 
  public get onSecurableType() {
    return this.getStringAttribute('on_securable_type');
  }
  public set onSecurableType(value: string) {
    this._onSecurableType = value;
  }
  public resetOnSecurableType() {
    this._onSecurableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSecurableTypeInput() {
    return this._onSecurableType;
  }

  // policy_type - computed: true, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // row_filter - computed: true, optional: true, required: false
  private _rowFilter = new DataDatabricksPolicyInfosPoliciesRowFilterOutputReference(this, "row_filter");
  public get rowFilter() {
    return this._rowFilter;
  }
  public putRowFilter(value: DataDatabricksPolicyInfosPoliciesRowFilter) {
    this._rowFilter.internalValue = value;
  }
  public resetRowFilter() {
    this._rowFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowFilterInput() {
    return this._rowFilter.internalValue;
  }

  // to_principals - computed: true, optional: false, required: true
  private _toPrincipals?: string[]; 
  public get toPrincipals() {
    return this.getListAttribute('to_principals');
  }
  public set toPrincipals(value: string[]) {
    this._toPrincipals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPrincipalsInput() {
    return this._toPrincipals;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // when_condition - computed: true, optional: true, required: false
  private _whenCondition?: string; 
  public get whenCondition() {
    return this.getStringAttribute('when_condition');
  }
  public set whenCondition(value: string) {
    this._whenCondition = value;
  }
  public resetWhenCondition() {
    this._whenCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenConditionInput() {
    return this._whenCondition;
  }
}

export class DataDatabricksPolicyInfosPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksPolicyInfosPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksPolicyInfosPoliciesOutputReference {
    return new DataDatabricksPolicyInfosPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos databricks_policy_infos}
*/
export class DataDatabricksPolicyInfos extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_policy_infos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksPolicyInfos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksPolicyInfos to import
  * @param importFromId The id of the existing DataDatabricksPolicyInfos that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksPolicyInfos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_policy_infos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_infos databricks_policy_infos} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksPolicyInfosConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksPolicyInfosConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_policy_infos',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // policies - computed: true, optional: false, required: false
  private _policies = new DataDatabricksPolicyInfosPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
