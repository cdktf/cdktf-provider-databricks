// https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/budget_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksBudgetPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/budget_policy#binding_workspace_ids DataDatabricksBudgetPolicy#binding_workspace_ids}
  */
  readonly bindingWorkspaceIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/budget_policy#custom_tags DataDatabricksBudgetPolicy#custom_tags}
  */
  readonly customTags?: DataDatabricksBudgetPolicyCustomTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/budget_policy#policy_name DataDatabricksBudgetPolicy#policy_name}
  */
  readonly policyName?: string;
}
export interface DataDatabricksBudgetPolicyCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/budget_policy#key DataDatabricksBudgetPolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/budget_policy#value DataDatabricksBudgetPolicy#value}
  */
  readonly value?: string;
}

export function dataDatabricksBudgetPolicyCustomTagsToTerraform(struct?: DataDatabricksBudgetPolicyCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksBudgetPolicyCustomTagsToHclTerraform(struct?: DataDatabricksBudgetPolicyCustomTags | cdktf.IResolvable): any {
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

export class DataDatabricksBudgetPolicyCustomTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksBudgetPolicyCustomTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksBudgetPolicyCustomTags | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
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
}

export class DataDatabricksBudgetPolicyCustomTagsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksBudgetPolicyCustomTags[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksBudgetPolicyCustomTagsOutputReference {
    return new DataDatabricksBudgetPolicyCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/budget_policy databricks_budget_policy}
*/
export class DataDatabricksBudgetPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_budget_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksBudgetPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksBudgetPolicy to import
  * @param importFromId The id of the existing DataDatabricksBudgetPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/budget_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksBudgetPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_budget_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/budget_policy databricks_budget_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksBudgetPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksBudgetPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_budget_policy',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.79.0',
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
    this._bindingWorkspaceIds = config.bindingWorkspaceIds;
    this._customTags.internalValue = config.customTags;
    this._policyName = config.policyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binding_workspace_ids - computed: false, optional: true, required: false
  private _bindingWorkspaceIds?: number[]; 
  public get bindingWorkspaceIds() {
    return this.getNumberListAttribute('binding_workspace_ids');
  }
  public set bindingWorkspaceIds(value: number[]) {
    this._bindingWorkspaceIds = value;
  }
  public resetBindingWorkspaceIds() {
    this._bindingWorkspaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingWorkspaceIdsInput() {
    return this._bindingWorkspaceIds;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags = new DataDatabricksBudgetPolicyCustomTagsList(this, "custom_tags", false);
  public get customTags() {
    return this._customTags;
  }
  public putCustomTags(value: DataDatabricksBudgetPolicyCustomTags[] | cdktf.IResolvable) {
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

  // policy_name - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binding_workspace_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._bindingWorkspaceIds),
      custom_tags: cdktf.listMapper(dataDatabricksBudgetPolicyCustomTagsToTerraform, false)(this._customTags.internalValue),
      policy_name: cdktf.stringToTerraform(this._policyName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binding_workspace_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._bindingWorkspaceIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      custom_tags: {
        value: cdktf.listMapperHcl(dataDatabricksBudgetPolicyCustomTagsToHclTerraform, false)(this._customTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksBudgetPolicyCustomTagsList",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
