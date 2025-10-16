/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksPolicyInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#column_mask DataDatabricksPolicyInfo#column_mask}
  */
  readonly columnMask?: DataDatabricksPolicyInfoColumnMask;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#comment DataDatabricksPolicyInfo#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#except_principals DataDatabricksPolicyInfo#except_principals}
  */
  readonly exceptPrincipals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#for_securable_type DataDatabricksPolicyInfo#for_securable_type}
  */
  readonly forSecurableType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#match_columns DataDatabricksPolicyInfo#match_columns}
  */
  readonly matchColumns?: DataDatabricksPolicyInfoMatchColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}
  */
  readonly onSecurableFullname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}
  */
  readonly onSecurableType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#policy_type DataDatabricksPolicyInfo#policy_type}
  */
  readonly policyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#row_filter DataDatabricksPolicyInfo#row_filter}
  */
  readonly rowFilter?: DataDatabricksPolicyInfoRowFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#to_principals DataDatabricksPolicyInfo#to_principals}
  */
  readonly toPrincipals: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#when_condition DataDatabricksPolicyInfo#when_condition}
  */
  readonly whenCondition?: string;
}
export interface DataDatabricksPolicyInfoColumnMaskUsing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}
  */
  readonly constant?: string;
}

export function dataDatabricksPolicyInfoColumnMaskUsingToTerraform(struct?: DataDatabricksPolicyInfoColumnMaskUsing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    constant: cdktf.stringToTerraform(struct!.constant),
  }
}


export function dataDatabricksPolicyInfoColumnMaskUsingToHclTerraform(struct?: DataDatabricksPolicyInfoColumnMaskUsing | cdktf.IResolvable): any {
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

export class DataDatabricksPolicyInfoColumnMaskUsingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksPolicyInfoColumnMaskUsing | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPolicyInfoColumnMaskUsing | cdktf.IResolvable | undefined) {
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

  // alias - computed: false, optional: true, required: false
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

  // constant - computed: false, optional: true, required: false
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

export class DataDatabricksPolicyInfoColumnMaskUsingList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksPolicyInfoColumnMaskUsing[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksPolicyInfoColumnMaskUsingOutputReference {
    return new DataDatabricksPolicyInfoColumnMaskUsingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPolicyInfoColumnMask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#on_column DataDatabricksPolicyInfo#on_column}
  */
  readonly onColumn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}
  */
  readonly using?: DataDatabricksPolicyInfoColumnMaskUsing[] | cdktf.IResolvable;
}

export function dataDatabricksPolicyInfoColumnMaskToTerraform(struct?: DataDatabricksPolicyInfoColumnMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    on_column: cdktf.stringToTerraform(struct!.onColumn),
    using: cdktf.listMapper(dataDatabricksPolicyInfoColumnMaskUsingToTerraform, false)(struct!.using),
  }
}


export function dataDatabricksPolicyInfoColumnMaskToHclTerraform(struct?: DataDatabricksPolicyInfoColumnMask | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataDatabricksPolicyInfoColumnMaskUsingToHclTerraform, false)(struct!.using),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksPolicyInfoColumnMaskUsingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoColumnMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoColumnMask | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPolicyInfoColumnMask | cdktf.IResolvable | undefined) {
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

  // function_name - computed: false, optional: false, required: true
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

  // on_column - computed: false, optional: false, required: true
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

  // using - computed: false, optional: true, required: false
  private _using = new DataDatabricksPolicyInfoColumnMaskUsingList(this, "using", false);
  public get using() {
    return this._using;
  }
  public putUsing(value: DataDatabricksPolicyInfoColumnMaskUsing[] | cdktf.IResolvable) {
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
export interface DataDatabricksPolicyInfoMatchColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#condition DataDatabricksPolicyInfo#condition}
  */
  readonly condition?: string;
}

export function dataDatabricksPolicyInfoMatchColumnsToTerraform(struct?: DataDatabricksPolicyInfoMatchColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    condition: cdktf.stringToTerraform(struct!.condition),
  }
}


export function dataDatabricksPolicyInfoMatchColumnsToHclTerraform(struct?: DataDatabricksPolicyInfoMatchColumns | cdktf.IResolvable): any {
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

export class DataDatabricksPolicyInfoMatchColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksPolicyInfoMatchColumns | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPolicyInfoMatchColumns | cdktf.IResolvable | undefined) {
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

  // alias - computed: false, optional: true, required: false
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

  // condition - computed: false, optional: true, required: false
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

export class DataDatabricksPolicyInfoMatchColumnsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksPolicyInfoMatchColumns[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksPolicyInfoMatchColumnsOutputReference {
    return new DataDatabricksPolicyInfoMatchColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPolicyInfoRowFilterUsing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}
  */
  readonly constant?: string;
}

export function dataDatabricksPolicyInfoRowFilterUsingToTerraform(struct?: DataDatabricksPolicyInfoRowFilterUsing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    constant: cdktf.stringToTerraform(struct!.constant),
  }
}


export function dataDatabricksPolicyInfoRowFilterUsingToHclTerraform(struct?: DataDatabricksPolicyInfoRowFilterUsing | cdktf.IResolvable): any {
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

export class DataDatabricksPolicyInfoRowFilterUsingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksPolicyInfoRowFilterUsing | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPolicyInfoRowFilterUsing | cdktf.IResolvable | undefined) {
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

  // alias - computed: false, optional: true, required: false
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

  // constant - computed: false, optional: true, required: false
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

export class DataDatabricksPolicyInfoRowFilterUsingList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksPolicyInfoRowFilterUsing[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksPolicyInfoRowFilterUsingOutputReference {
    return new DataDatabricksPolicyInfoRowFilterUsingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPolicyInfoRowFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}
  */
  readonly using?: DataDatabricksPolicyInfoRowFilterUsing[] | cdktf.IResolvable;
}

export function dataDatabricksPolicyInfoRowFilterToTerraform(struct?: DataDatabricksPolicyInfoRowFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    using: cdktf.listMapper(dataDatabricksPolicyInfoRowFilterUsingToTerraform, false)(struct!.using),
  }
}


export function dataDatabricksPolicyInfoRowFilterToHclTerraform(struct?: DataDatabricksPolicyInfoRowFilter | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataDatabricksPolicyInfoRowFilterUsingToHclTerraform, false)(struct!.using),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksPolicyInfoRowFilterUsingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoRowFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoRowFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPolicyInfoRowFilter | cdktf.IResolvable | undefined) {
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

  // function_name - computed: false, optional: false, required: true
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

  // using - computed: false, optional: true, required: false
  private _using = new DataDatabricksPolicyInfoRowFilterUsingList(this, "using", false);
  public get using() {
    return this._using;
  }
  public putUsing(value: DataDatabricksPolicyInfoRowFilterUsing[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info databricks_policy_info}
*/
export class DataDatabricksPolicyInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_policy_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksPolicyInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksPolicyInfo to import
  * @param importFromId The id of the existing DataDatabricksPolicyInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksPolicyInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_policy_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/policy_info databricks_policy_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksPolicyInfoConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksPolicyInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_policy_info',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.92.0',
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
    this._columnMask.internalValue = config.columnMask;
    this._comment = config.comment;
    this._exceptPrincipals = config.exceptPrincipals;
    this._forSecurableType = config.forSecurableType;
    this._matchColumns.internalValue = config.matchColumns;
    this._name = config.name;
    this._onSecurableFullname = config.onSecurableFullname;
    this._onSecurableType = config.onSecurableType;
    this._policyType = config.policyType;
    this._rowFilter.internalValue = config.rowFilter;
    this._toPrincipals = config.toPrincipals;
    this._whenCondition = config.whenCondition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // column_mask - computed: false, optional: true, required: false
  private _columnMask = new DataDatabricksPolicyInfoColumnMaskOutputReference(this, "column_mask");
  public get columnMask() {
    return this._columnMask;
  }
  public putColumnMask(value: DataDatabricksPolicyInfoColumnMask) {
    this._columnMask.internalValue = value;
  }
  public resetColumnMask() {
    this._columnMask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnMaskInput() {
    return this._columnMask.internalValue;
  }

  // comment - computed: false, optional: true, required: false
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

  // except_principals - computed: false, optional: true, required: false
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

  // for_securable_type - computed: false, optional: false, required: true
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

  // match_columns - computed: false, optional: true, required: false
  private _matchColumns = new DataDatabricksPolicyInfoMatchColumnsList(this, "match_columns", false);
  public get matchColumns() {
    return this._matchColumns;
  }
  public putMatchColumns(value: DataDatabricksPolicyInfoMatchColumns[] | cdktf.IResolvable) {
    this._matchColumns.internalValue = value;
  }
  public resetMatchColumns() {
    this._matchColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchColumnsInput() {
    return this._matchColumns.internalValue;
  }

  // name - computed: false, optional: true, required: false
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

  // on_securable_fullname - computed: false, optional: true, required: false
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

  // on_securable_type - computed: false, optional: true, required: false
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

  // policy_type - computed: false, optional: false, required: true
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

  // row_filter - computed: false, optional: true, required: false
  private _rowFilter = new DataDatabricksPolicyInfoRowFilterOutputReference(this, "row_filter");
  public get rowFilter() {
    return this._rowFilter;
  }
  public putRowFilter(value: DataDatabricksPolicyInfoRowFilter) {
    this._rowFilter.internalValue = value;
  }
  public resetRowFilter() {
    this._rowFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowFilterInput() {
    return this._rowFilter.internalValue;
  }

  // to_principals - computed: false, optional: false, required: true
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

  // when_condition - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      column_mask: dataDatabricksPolicyInfoColumnMaskToTerraform(this._columnMask.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      except_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exceptPrincipals),
      for_securable_type: cdktf.stringToTerraform(this._forSecurableType),
      match_columns: cdktf.listMapper(dataDatabricksPolicyInfoMatchColumnsToTerraform, false)(this._matchColumns.internalValue),
      name: cdktf.stringToTerraform(this._name),
      on_securable_fullname: cdktf.stringToTerraform(this._onSecurableFullname),
      on_securable_type: cdktf.stringToTerraform(this._onSecurableType),
      policy_type: cdktf.stringToTerraform(this._policyType),
      row_filter: dataDatabricksPolicyInfoRowFilterToTerraform(this._rowFilter.internalValue),
      to_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._toPrincipals),
      when_condition: cdktf.stringToTerraform(this._whenCondition),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      column_mask: {
        value: dataDatabricksPolicyInfoColumnMaskToHclTerraform(this._columnMask.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksPolicyInfoColumnMask",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      except_principals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exceptPrincipals),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      for_securable_type: {
        value: cdktf.stringToHclTerraform(this._forSecurableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_columns: {
        value: cdktf.listMapperHcl(dataDatabricksPolicyInfoMatchColumnsToHclTerraform, false)(this._matchColumns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksPolicyInfoMatchColumnsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_securable_fullname: {
        value: cdktf.stringToHclTerraform(this._onSecurableFullname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_securable_type: {
        value: cdktf.stringToHclTerraform(this._onSecurableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      row_filter: {
        value: dataDatabricksPolicyInfoRowFilterToHclTerraform(this._rowFilter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksPolicyInfoRowFilter",
      },
      to_principals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._toPrincipals),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      when_condition: {
        value: cdktf.stringToHclTerraform(this._whenCondition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
