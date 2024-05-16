/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#acl_principal_id User#acl_principal_id}
  */
  readonly aclPrincipalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#active User#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#allow_cluster_create User#allow_cluster_create}
  */
  readonly allowClusterCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#allow_instance_pool_create User#allow_instance_pool_create}
  */
  readonly allowInstancePoolCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#databricks_sql_access User#databricks_sql_access}
  */
  readonly databricksSqlAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#disable_as_user_deletion User#disable_as_user_deletion}
  */
  readonly disableAsUserDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#display_name User#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#external_id User#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#force User#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#force_delete_home_dir User#force_delete_home_dir}
  */
  readonly forceDeleteHomeDir?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#force_delete_repos User#force_delete_repos}
  */
  readonly forceDeleteRepos?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#home User#home}
  */
  readonly home?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#repos User#repos}
  */
  readonly repos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#user_name User#user_name}
  */
  readonly userName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#workspace_access User#workspace_access}
  */
  readonly workspaceAccess?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user databricks_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/user databricks_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_user',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.44.0',
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
    this._active = config.active;
    this._allowClusterCreate = config.allowClusterCreate;
    this._allowInstancePoolCreate = config.allowInstancePoolCreate;
    this._databricksSqlAccess = config.databricksSqlAccess;
    this._disableAsUserDeletion = config.disableAsUserDeletion;
    this._displayName = config.displayName;
    this._externalId = config.externalId;
    this._force = config.force;
    this._forceDeleteHomeDir = config.forceDeleteHomeDir;
    this._forceDeleteRepos = config.forceDeleteRepos;
    this._home = config.home;
    this._id = config.id;
    this._repos = config.repos;
    this._userName = config.userName;
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

  // disable_as_user_deletion - computed: true, optional: true, required: false
  private _disableAsUserDeletion?: boolean | cdktf.IResolvable; 
  public get disableAsUserDeletion() {
    return this.getBooleanAttribute('disable_as_user_deletion');
  }
  public set disableAsUserDeletion(value: boolean | cdktf.IResolvable) {
    this._disableAsUserDeletion = value;
  }
  public resetDisableAsUserDeletion() {
    this._disableAsUserDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAsUserDeletionInput() {
    return this._disableAsUserDeletion;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // external_id - computed: false, optional: true, required: false
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

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // force_delete_home_dir - computed: false, optional: true, required: false
  private _forceDeleteHomeDir?: boolean | cdktf.IResolvable; 
  public get forceDeleteHomeDir() {
    return this.getBooleanAttribute('force_delete_home_dir');
  }
  public set forceDeleteHomeDir(value: boolean | cdktf.IResolvable) {
    this._forceDeleteHomeDir = value;
  }
  public resetForceDeleteHomeDir() {
    this._forceDeleteHomeDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteHomeDirInput() {
    return this._forceDeleteHomeDir;
  }

  // force_delete_repos - computed: false, optional: true, required: false
  private _forceDeleteRepos?: boolean | cdktf.IResolvable; 
  public get forceDeleteRepos() {
    return this.getBooleanAttribute('force_delete_repos');
  }
  public set forceDeleteRepos(value: boolean | cdktf.IResolvable) {
    this._forceDeleteRepos = value;
  }
  public resetForceDeleteRepos() {
    this._forceDeleteRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteReposInput() {
    return this._forceDeleteRepos;
  }

  // home - computed: true, optional: true, required: false
  private _home?: string; 
  public get home() {
    return this.getStringAttribute('home');
  }
  public set home(value: string) {
    this._home = value;
  }
  public resetHome() {
    this._home = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeInput() {
    return this._home;
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

  // repos - computed: true, optional: true, required: false
  private _repos?: string; 
  public get repos() {
    return this.getStringAttribute('repos');
  }
  public set repos(value: string) {
    this._repos = value;
  }
  public resetRepos() {
    this._repos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reposInput() {
    return this._repos;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
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
      active: cdktf.booleanToTerraform(this._active),
      allow_cluster_create: cdktf.booleanToTerraform(this._allowClusterCreate),
      allow_instance_pool_create: cdktf.booleanToTerraform(this._allowInstancePoolCreate),
      databricks_sql_access: cdktf.booleanToTerraform(this._databricksSqlAccess),
      disable_as_user_deletion: cdktf.booleanToTerraform(this._disableAsUserDeletion),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_id: cdktf.stringToTerraform(this._externalId),
      force: cdktf.booleanToTerraform(this._force),
      force_delete_home_dir: cdktf.booleanToTerraform(this._forceDeleteHomeDir),
      force_delete_repos: cdktf.booleanToTerraform(this._forceDeleteRepos),
      home: cdktf.stringToTerraform(this._home),
      id: cdktf.stringToTerraform(this._id),
      repos: cdktf.stringToTerraform(this._repos),
      user_name: cdktf.stringToTerraform(this._userName),
      workspace_access: cdktf.booleanToTerraform(this._workspaceAccess),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_principal_id: {
        value: cdktf.stringToHclTerraform(this._aclPrincipalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_cluster_create: {
        value: cdktf.booleanToHclTerraform(this._allowClusterCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_instance_pool_create: {
        value: cdktf.booleanToHclTerraform(this._allowInstancePoolCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      databricks_sql_access: {
        value: cdktf.booleanToHclTerraform(this._databricksSqlAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_as_user_deletion: {
        value: cdktf.booleanToHclTerraform(this._disableAsUserDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete_home_dir: {
        value: cdktf.booleanToHclTerraform(this._forceDeleteHomeDir),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete_repos: {
        value: cdktf.booleanToHclTerraform(this._forceDeleteRepos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      home: {
        value: cdktf.stringToHclTerraform(this._home),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repos: {
        value: cdktf.stringToHclTerraform(this._repos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_access: {
        value: cdktf.booleanToHclTerraform(this._workspaceAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
