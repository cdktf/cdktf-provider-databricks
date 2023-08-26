/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#acl_principal_id DataDatabricksGroup#acl_principal_id}
  */
  readonly aclPrincipalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#allow_cluster_create DataDatabricksGroup#allow_cluster_create}
  */
  readonly allowClusterCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#allow_instance_pool_create DataDatabricksGroup#allow_instance_pool_create}
  */
  readonly allowInstancePoolCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#child_groups DataDatabricksGroup#child_groups}
  */
  readonly childGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#databricks_sql_access DataDatabricksGroup#databricks_sql_access}
  */
  readonly databricksSqlAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#display_name DataDatabricksGroup#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#external_id DataDatabricksGroup#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#groups DataDatabricksGroup#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#id DataDatabricksGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#instance_profiles DataDatabricksGroup#instance_profiles}
  */
  readonly instanceProfiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#members DataDatabricksGroup#members}
  */
  readonly members?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#recursive DataDatabricksGroup#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#service_principals DataDatabricksGroup#service_principals}
  */
  readonly servicePrincipals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#users DataDatabricksGroup#users}
  */
  readonly users?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group#workspace_access DataDatabricksGroup#workspace_access}
  */
  readonly workspaceAccess?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group databricks_group}
*/
export class DataDatabricksGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/group databricks_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_group',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.24.0',
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
    this._aclPrincipalId = config.aclPrincipalId;
    this._allowClusterCreate = config.allowClusterCreate;
    this._allowInstancePoolCreate = config.allowInstancePoolCreate;
    this._childGroups = config.childGroups;
    this._databricksSqlAccess = config.databricksSqlAccess;
    this._displayName = config.displayName;
    this._externalId = config.externalId;
    this._groups = config.groups;
    this._id = config.id;
    this._instanceProfiles = config.instanceProfiles;
    this._members = config.members;
    this._recursive = config.recursive;
    this._servicePrincipals = config.servicePrincipals;
    this._users = config.users;
    this._workspaceAccess = config.workspaceAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_principal_id - computed: true, optional: true, required: false
  private _aclPrincipalId?: string; 
  public get aclPrincipalId() {
    return this.getStringAttribute('acl_principal_id');
  }
  public set aclPrincipalId(value: string) {
    this._aclPrincipalId = value;
  }
  public resetAclPrincipalId() {
    this._aclPrincipalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclPrincipalIdInput() {
    return this._aclPrincipalId;
  }

  // allow_cluster_create - computed: false, optional: true, required: false
  private _allowClusterCreate?: boolean | cdktf.IResolvable; 
  public get allowClusterCreate() {
    return this.getBooleanAttribute('allow_cluster_create');
  }
  public set allowClusterCreate(value: boolean | cdktf.IResolvable) {
    this._allowClusterCreate = value;
  }
  public resetAllowClusterCreate() {
    this._allowClusterCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClusterCreateInput() {
    return this._allowClusterCreate;
  }

  // allow_instance_pool_create - computed: false, optional: true, required: false
  private _allowInstancePoolCreate?: boolean | cdktf.IResolvable; 
  public get allowInstancePoolCreate() {
    return this.getBooleanAttribute('allow_instance_pool_create');
  }
  public set allowInstancePoolCreate(value: boolean | cdktf.IResolvable) {
    this._allowInstancePoolCreate = value;
  }
  public resetAllowInstancePoolCreate() {
    this._allowInstancePoolCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInstancePoolCreateInput() {
    return this._allowInstancePoolCreate;
  }

  // child_groups - computed: true, optional: true, required: false
  private _childGroups?: string[]; 
  public get childGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('child_groups'));
  }
  public set childGroups(value: string[]) {
    this._childGroups = value;
  }
  public resetChildGroups() {
    this._childGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childGroupsInput() {
    return this._childGroups;
  }

  // databricks_sql_access - computed: false, optional: true, required: false
  private _databricksSqlAccess?: boolean | cdktf.IResolvable; 
  public get databricksSqlAccess() {
    return this.getBooleanAttribute('databricks_sql_access');
  }
  public set databricksSqlAccess(value: boolean | cdktf.IResolvable) {
    this._databricksSqlAccess = value;
  }
  public resetDatabricksSqlAccess() {
    this._databricksSqlAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksSqlAccessInput() {
    return this._databricksSqlAccess;
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

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // instance_profiles - computed: true, optional: true, required: false
  private _instanceProfiles?: string[]; 
  public get instanceProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_profiles'));
  }
  public set instanceProfiles(value: string[]) {
    this._instanceProfiles = value;
  }
  public resetInstanceProfiles() {
    this._instanceProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfilesInput() {
    return this._instanceProfiles;
  }

  // members - computed: true, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // recursive - computed: false, optional: true, required: false
  private _recursive?: boolean | cdktf.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktf.IResolvable) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }

  // service_principals - computed: true, optional: true, required: false
  private _servicePrincipals?: string[]; 
  public get servicePrincipals() {
    return cdktf.Fn.tolist(this.getListAttribute('service_principals'));
  }
  public set servicePrincipals(value: string[]) {
    this._servicePrincipals = value;
  }
  public resetServicePrincipals() {
    this._servicePrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalsInput() {
    return this._servicePrincipals;
  }

  // users - computed: true, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // workspace_access - computed: false, optional: true, required: false
  private _workspaceAccess?: boolean | cdktf.IResolvable; 
  public get workspaceAccess() {
    return this.getBooleanAttribute('workspace_access');
  }
  public set workspaceAccess(value: boolean | cdktf.IResolvable) {
    this._workspaceAccess = value;
  }
  public resetWorkspaceAccess() {
    this._workspaceAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceAccessInput() {
    return this._workspaceAccess;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_principal_id: cdktf.stringToTerraform(this._aclPrincipalId),
      allow_cluster_create: cdktf.booleanToTerraform(this._allowClusterCreate),
      allow_instance_pool_create: cdktf.booleanToTerraform(this._allowInstancePoolCreate),
      child_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._childGroups),
      databricks_sql_access: cdktf.booleanToTerraform(this._databricksSqlAccess),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_id: cdktf.stringToTerraform(this._externalId),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      instance_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceProfiles),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      recursive: cdktf.booleanToTerraform(this._recursive),
      service_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servicePrincipals),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      workspace_access: cdktf.booleanToTerraform(this._workspaceAccess),
    };
  }
}
