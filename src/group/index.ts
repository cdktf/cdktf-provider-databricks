// https://www.terraform.io/docs/providers/databricks/r/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#allow_cluster_create Group#allow_cluster_create}
  */
  readonly allowClusterCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#allow_instance_pool_create Group#allow_instance_pool_create}
  */
  readonly allowInstancePoolCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#databricks_sql_access Group#databricks_sql_access}
  */
  readonly databricksSqlAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#display_name Group#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#external_id Group#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#force Group#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#url Group#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#workspace_access Group#workspace_access}
  */
  readonly workspaceAccess?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/group databricks_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/group databricks_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_group',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.12.0',
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
    this._allowClusterCreate = config.allowClusterCreate;
    this._allowInstancePoolCreate = config.allowInstancePoolCreate;
    this._databricksSqlAccess = config.databricksSqlAccess;
    this._displayName = config.displayName;
    this._externalId = config.externalId;
    this._force = config.force;
    this._id = config.id;
    this._url = config.url;
    this._workspaceAccess = config.workspaceAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      allow_cluster_create: cdktf.booleanToTerraform(this._allowClusterCreate),
      allow_instance_pool_create: cdktf.booleanToTerraform(this._allowInstancePoolCreate),
      databricks_sql_access: cdktf.booleanToTerraform(this._databricksSqlAccess),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_id: cdktf.stringToTerraform(this._externalId),
      force: cdktf.booleanToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      url: cdktf.stringToTerraform(this._url),
      workspace_access: cdktf.booleanToTerraform(this._workspaceAccess),
    };
  }
}
