/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksCleanRoomAutoApprovalRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#workspace_id DataDatabricksCleanRoomAutoApprovalRules#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataDatabricksCleanRoomAutoApprovalRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRules#author_collaborator_alias}
  */
  readonly authorCollaboratorAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#author_scope DataDatabricksCleanRoomAutoApprovalRules#author_scope}
  */
  readonly authorScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#clean_room_name DataDatabricksCleanRoomAutoApprovalRules#clean_room_name}
  */
  readonly cleanRoomName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRules#runner_collaborator_alias}
  */
  readonly runnerCollaboratorAlias?: string;
}

export function dataDatabricksCleanRoomAutoApprovalRulesRulesToTerraform(struct?: DataDatabricksCleanRoomAutoApprovalRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    author_collaborator_alias: cdktf.stringToTerraform(struct!.authorCollaboratorAlias),
    author_scope: cdktf.stringToTerraform(struct!.authorScope),
    clean_room_name: cdktf.stringToTerraform(struct!.cleanRoomName),
    runner_collaborator_alias: cdktf.stringToTerraform(struct!.runnerCollaboratorAlias),
  }
}


export function dataDatabricksCleanRoomAutoApprovalRulesRulesToHclTerraform(struct?: DataDatabricksCleanRoomAutoApprovalRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    author_collaborator_alias: {
      value: cdktf.stringToHclTerraform(struct!.authorCollaboratorAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    author_scope: {
      value: cdktf.stringToHclTerraform(struct!.authorScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clean_room_name: {
      value: cdktf.stringToHclTerraform(struct!.cleanRoomName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runner_collaborator_alias: {
      value: cdktf.stringToHclTerraform(struct!.runnerCollaboratorAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksCleanRoomAutoApprovalRulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorCollaboratorAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorCollaboratorAlias = this._authorCollaboratorAlias;
    }
    if (this._authorScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorScope = this._authorScope;
    }
    if (this._cleanRoomName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanRoomName = this._cleanRoomName;
    }
    if (this._runnerCollaboratorAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.runnerCollaboratorAlias = this._runnerCollaboratorAlias;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCleanRoomAutoApprovalRulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorCollaboratorAlias = undefined;
      this._authorScope = undefined;
      this._cleanRoomName = undefined;
      this._runnerCollaboratorAlias = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorCollaboratorAlias = value.authorCollaboratorAlias;
      this._authorScope = value.authorScope;
      this._cleanRoomName = value.cleanRoomName;
      this._runnerCollaboratorAlias = value.runnerCollaboratorAlias;
    }
  }

  // author_collaborator_alias - computed: true, optional: true, required: false
  private _authorCollaboratorAlias?: string; 
  public get authorCollaboratorAlias() {
    return this.getStringAttribute('author_collaborator_alias');
  }
  public set authorCollaboratorAlias(value: string) {
    this._authorCollaboratorAlias = value;
  }
  public resetAuthorCollaboratorAlias() {
    this._authorCollaboratorAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorCollaboratorAliasInput() {
    return this._authorCollaboratorAlias;
  }

  // author_scope - computed: true, optional: true, required: false
  private _authorScope?: string; 
  public get authorScope() {
    return this.getStringAttribute('author_scope');
  }
  public set authorScope(value: string) {
    this._authorScope = value;
  }
  public resetAuthorScope() {
    this._authorScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorScopeInput() {
    return this._authorScope;
  }

  // clean_room_name - computed: true, optional: true, required: false
  private _cleanRoomName?: string; 
  public get cleanRoomName() {
    return this.getStringAttribute('clean_room_name');
  }
  public set cleanRoomName(value: string) {
    this._cleanRoomName = value;
  }
  public resetCleanRoomName() {
    this._cleanRoomName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanRoomNameInput() {
    return this._cleanRoomName;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_owner_collaborator_alias - computed: true, optional: false, required: false
  public get ruleOwnerCollaboratorAlias() {
    return this.getStringAttribute('rule_owner_collaborator_alias');
  }

  // runner_collaborator_alias - computed: true, optional: true, required: false
  private _runnerCollaboratorAlias?: string; 
  public get runnerCollaboratorAlias() {
    return this.getStringAttribute('runner_collaborator_alias');
  }
  public set runnerCollaboratorAlias(value: string) {
    this._runnerCollaboratorAlias = value;
  }
  public resetRunnerCollaboratorAlias() {
    this._runnerCollaboratorAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerCollaboratorAliasInput() {
    return this._runnerCollaboratorAlias;
  }
}

export class DataDatabricksCleanRoomAutoApprovalRulesRulesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksCleanRoomAutoApprovalRulesRules[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference {
    return new DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules databricks_clean_room_auto_approval_rules}
*/
export class DataDatabricksCleanRoomAutoApprovalRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_clean_room_auto_approval_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksCleanRoomAutoApprovalRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksCleanRoomAutoApprovalRules to import
  * @param importFromId The id of the existing DataDatabricksCleanRoomAutoApprovalRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksCleanRoomAutoApprovalRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_clean_room_auto_approval_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules databricks_clean_room_auto_approval_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksCleanRoomAutoApprovalRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksCleanRoomAutoApprovalRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_clean_room_auto_approval_rules',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.90.0',
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
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // rules - computed: true, optional: false, required: false
  private _rules = new DataDatabricksCleanRoomAutoApprovalRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
