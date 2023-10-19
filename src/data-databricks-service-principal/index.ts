// https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/data-sources/service_principal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksServicePrincipalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/data-sources/service_principal#acl_principal_id DataDatabricksServicePrincipal#acl_principal_id}
  */
  readonly aclPrincipalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/data-sources/service_principal#active DataDatabricksServicePrincipal#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/data-sources/service_principal#application_id DataDatabricksServicePrincipal#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/data-sources/service_principal#display_name DataDatabricksServicePrincipal#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/data-sources/service_principal#external_id DataDatabricksServicePrincipal#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/data-sources/service_principal#home DataDatabricksServicePrincipal#home}
  */
  readonly home?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/data-sources/service_principal#id DataDatabricksServicePrincipal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/data-sources/service_principal#repos DataDatabricksServicePrincipal#repos}
  */
  readonly repos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/data-sources/service_principal#sp_id DataDatabricksServicePrincipal#sp_id}
  */
  readonly spId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/data-sources/service_principal databricks_service_principal}
*/
export class DataDatabricksServicePrincipal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_service_principal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksServicePrincipal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksServicePrincipal to import
  * @param importFromId The id of the existing DataDatabricksServicePrincipal that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/data-sources/service_principal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksServicePrincipal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_service_principal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/data-sources/service_principal databricks_service_principal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksServicePrincipalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksServicePrincipalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_service_principal',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.28.1',
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
    this._applicationId = config.applicationId;
    this._displayName = config.displayName;
    this._externalId = config.externalId;
    this._home = config.home;
    this._id = config.id;
    this._repos = config.repos;
    this._spId = config.spId;
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

  // active - computed: true, optional: true, required: false
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

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // sp_id - computed: true, optional: true, required: false
  private _spId?: string; 
  public get spId() {
    return this.getStringAttribute('sp_id');
  }
  public set spId(value: string) {
    this._spId = value;
  }
  public resetSpId() {
    this._spId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spIdInput() {
    return this._spId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_principal_id: cdktf.stringToTerraform(this._aclPrincipalId),
      active: cdktf.booleanToTerraform(this._active),
      application_id: cdktf.stringToTerraform(this._applicationId),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_id: cdktf.stringToTerraform(this._externalId),
      home: cdktf.stringToTerraform(this._home),
      id: cdktf.stringToTerraform(this._id),
      repos: cdktf.stringToTerraform(this._repos),
      sp_id: cdktf.stringToTerraform(this._spId),
    };
  }
}
