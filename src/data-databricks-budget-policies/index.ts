/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/budget_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksBudgetPoliciesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataDatabricksBudgetPoliciesBudgetPoliciesCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/budget_policies#key DataDatabricksBudgetPolicies#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/budget_policies#value DataDatabricksBudgetPolicies#value}
  */
  readonly value?: string;
}

export function dataDatabricksBudgetPoliciesBudgetPoliciesCustomTagsToTerraform(struct?: DataDatabricksBudgetPoliciesBudgetPoliciesCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksBudgetPoliciesBudgetPoliciesCustomTagsToHclTerraform(struct?: DataDatabricksBudgetPoliciesBudgetPoliciesCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataDatabricksBudgetPoliciesBudgetPoliciesCustomTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksBudgetPoliciesBudgetPoliciesCustomTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksBudgetPoliciesBudgetPoliciesCustomTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
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
}

export class DataDatabricksBudgetPoliciesBudgetPoliciesCustomTagsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksBudgetPoliciesBudgetPoliciesCustomTags[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksBudgetPoliciesBudgetPoliciesCustomTagsOutputReference {
    return new DataDatabricksBudgetPoliciesBudgetPoliciesCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksBudgetPoliciesBudgetPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/budget_policies#custom_tags DataDatabricksBudgetPolicies#custom_tags}
  */
  readonly customTags?: DataDatabricksBudgetPoliciesBudgetPoliciesCustomTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/budget_policies#policy_name DataDatabricksBudgetPolicies#policy_name}
  */
  readonly policyName?: string;
}

export function dataDatabricksBudgetPoliciesBudgetPoliciesToTerraform(struct?: DataDatabricksBudgetPoliciesBudgetPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_tags: cdktf.listMapper(dataDatabricksBudgetPoliciesBudgetPoliciesCustomTagsToTerraform, false)(struct!.customTags),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
  }
}


export function dataDatabricksBudgetPoliciesBudgetPoliciesToHclTerraform(struct?: DataDatabricksBudgetPoliciesBudgetPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_tags: {
      value: cdktf.listMapperHcl(dataDatabricksBudgetPoliciesBudgetPoliciesCustomTagsToHclTerraform, false)(struct!.customTags),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksBudgetPoliciesBudgetPoliciesCustomTagsList",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksBudgetPoliciesBudgetPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksBudgetPoliciesBudgetPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags?.internalValue;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksBudgetPoliciesBudgetPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customTags.internalValue = undefined;
      this._policyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customTags.internalValue = value.customTags;
      this._policyName = value.policyName;
    }
  }

  // custom_tags - computed: true, optional: true, required: false
  private _customTags = new DataDatabricksBudgetPoliciesBudgetPoliciesCustomTagsList(this, "custom_tags", false);
  public get customTags() {
    return this._customTags;
  }
  public putCustomTags(value: DataDatabricksBudgetPoliciesBudgetPoliciesCustomTags[] | cdktf.IResolvable) {
    this._customTags.internalValue = value;
  }
  public resetCustomTags() {
    this._customTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags.internalValue;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // policy_name - computed: true, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }
}

export class DataDatabricksBudgetPoliciesBudgetPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksBudgetPoliciesBudgetPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksBudgetPoliciesBudgetPoliciesOutputReference {
    return new DataDatabricksBudgetPoliciesBudgetPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/budget_policies databricks_budget_policies}
*/
export class DataDatabricksBudgetPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_budget_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksBudgetPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksBudgetPolicies to import
  * @param importFromId The id of the existing DataDatabricksBudgetPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/budget_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksBudgetPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_budget_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/budget_policies databricks_budget_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksBudgetPoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksBudgetPoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_budget_policies',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // budget_policies - computed: true, optional: false, required: false
  private _budgetPolicies = new DataDatabricksBudgetPoliciesBudgetPoliciesList(this, "budget_policies", false);
  public get budgetPolicies() {
    return this._budgetPolicies;
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
