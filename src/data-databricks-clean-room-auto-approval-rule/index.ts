/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksCleanRoomAutoApprovalRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#author_collaborator_alias}
  */
  readonly authorCollaboratorAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#author_scope DataDatabricksCleanRoomAutoApprovalRule#author_scope}
  */
  readonly authorScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#clean_room_name DataDatabricksCleanRoomAutoApprovalRule#clean_room_name}
  */
  readonly cleanRoomName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#runner_collaborator_alias}
  */
  readonly runnerCollaboratorAlias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule databricks_clean_room_auto_approval_rule}
*/
export class DataDatabricksCleanRoomAutoApprovalRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_clean_room_auto_approval_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksCleanRoomAutoApprovalRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksCleanRoomAutoApprovalRule to import
  * @param importFromId The id of the existing DataDatabricksCleanRoomAutoApprovalRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksCleanRoomAutoApprovalRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_clean_room_auto_approval_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule databricks_clean_room_auto_approval_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksCleanRoomAutoApprovalRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksCleanRoomAutoApprovalRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_clean_room_auto_approval_rule',
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
    this._authorCollaboratorAlias = config.authorCollaboratorAlias;
    this._authorScope = config.authorScope;
    this._cleanRoomName = config.cleanRoomName;
    this._runnerCollaboratorAlias = config.runnerCollaboratorAlias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author_collaborator_alias - computed: false, optional: true, required: false
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

  // author_scope - computed: false, optional: true, required: false
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

  // clean_room_name - computed: false, optional: true, required: false
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

  // runner_collaborator_alias - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      author_collaborator_alias: cdktf.stringToTerraform(this._authorCollaboratorAlias),
      author_scope: cdktf.stringToTerraform(this._authorScope),
      clean_room_name: cdktf.stringToTerraform(this._cleanRoomName),
      runner_collaborator_alias: cdktf.stringToTerraform(this._runnerCollaboratorAlias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      author_collaborator_alias: {
        value: cdktf.stringToHclTerraform(this._authorCollaboratorAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      author_scope: {
        value: cdktf.stringToHclTerraform(this._authorScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clean_room_name: {
        value: cdktf.stringToHclTerraform(this._cleanRoomName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runner_collaborator_alias: {
        value: cdktf.stringToHclTerraform(this._runnerCollaboratorAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
