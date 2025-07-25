/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/access_control_rule_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessControlRuleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/access_control_rule_set#id AccessControlRuleSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/access_control_rule_set#name AccessControlRuleSet#name}
  */
  readonly name: string;
  /**
  * grant_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/access_control_rule_set#grant_rules AccessControlRuleSet#grant_rules}
  */
  readonly grantRules?: AccessControlRuleSetGrantRules[] | cdktf.IResolvable;
}
export interface AccessControlRuleSetGrantRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/access_control_rule_set#principals AccessControlRuleSet#principals}
  */
  readonly principals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/access_control_rule_set#role AccessControlRuleSet#role}
  */
  readonly role: string;
}

export function accessControlRuleSetGrantRulesToTerraform(struct?: AccessControlRuleSetGrantRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.principals),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function accessControlRuleSetGrantRulesToHclTerraform(struct?: AccessControlRuleSetGrantRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.principals),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessControlRuleSetGrantRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessControlRuleSetGrantRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlRuleSetGrantRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principals = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principals = value.principals;
      this._role = value.role;
    }
  }

  // principals - computed: false, optional: true, required: false
  private _principals?: string[]; 
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  public resetPrincipals() {
    this._principals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class AccessControlRuleSetGrantRulesList extends cdktf.ComplexList {
  public internalValue? : AccessControlRuleSetGrantRules[] | cdktf.IResolvable

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
  public get(index: number): AccessControlRuleSetGrantRulesOutputReference {
    return new AccessControlRuleSetGrantRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/access_control_rule_set databricks_access_control_rule_set}
*/
export class AccessControlRuleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_access_control_rule_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessControlRuleSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessControlRuleSet to import
  * @param importFromId The id of the existing AccessControlRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/access_control_rule_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessControlRuleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_access_control_rule_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/access_control_rule_set databricks_access_control_rule_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessControlRuleSetConfig
  */
  public constructor(scope: Construct, id: string, config: AccessControlRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_access_control_rule_set',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.85.0',
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
    this._id = config.id;
    this._name = config.name;
    this._grantRules.internalValue = config.grantRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // grant_rules - computed: false, optional: true, required: false
  private _grantRules = new AccessControlRuleSetGrantRulesList(this, "grant_rules", true);
  public get grantRules() {
    return this._grantRules;
  }
  public putGrantRules(value: AccessControlRuleSetGrantRules[] | cdktf.IResolvable) {
    this._grantRules.internalValue = value;
  }
  public resetGrantRules() {
    this._grantRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantRulesInput() {
    return this._grantRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      grant_rules: cdktf.listMapper(accessControlRuleSetGrantRulesToTerraform, true)(this._grantRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grant_rules: {
        value: cdktf.listMapperHcl(accessControlRuleSetGrantRulesToHclTerraform, true)(this._grantRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AccessControlRuleSetGrantRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
