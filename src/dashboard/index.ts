// https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#create_time Dashboard#create_time}
  */
  readonly createTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#dashboard_change_detected Dashboard#dashboard_change_detected}
  */
  readonly dashboardChangeDetected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#dashboard_id Dashboard#dashboard_id}
  */
  readonly dashboardId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#display_name Dashboard#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#embed_credentials Dashboard#embed_credentials}
  */
  readonly embedCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#etag Dashboard#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#file_path Dashboard#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#lifecycle_state Dashboard#lifecycle_state}
  */
  readonly lifecycleState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#md5 Dashboard#md5}
  */
  readonly md5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#parent_path Dashboard#parent_path}
  */
  readonly parentPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#path Dashboard#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#serialized_dashboard Dashboard#serialized_dashboard}
  */
  readonly serializedDashboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#update_time Dashboard#update_time}
  */
  readonly updateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#warehouse_id Dashboard#warehouse_id}
  */
  readonly warehouseId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard databricks_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dashboard to import
  * @param importFromId The id of the existing Dashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/dashboard databricks_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.67.0',
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
    this._createTime = config.createTime;
    this._dashboardChangeDetected = config.dashboardChangeDetected;
    this._dashboardId = config.dashboardId;
    this._displayName = config.displayName;
    this._embedCredentials = config.embedCredentials;
    this._etag = config.etag;
    this._filePath = config.filePath;
    this._id = config.id;
    this._lifecycleState = config.lifecycleState;
    this._md5 = config.md5;
    this._parentPath = config.parentPath;
    this._path = config.path;
    this._serializedDashboard = config.serializedDashboard;
    this._updateTime = config.updateTime;
    this._warehouseId = config.warehouseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // dashboard_change_detected - computed: false, optional: true, required: false
  private _dashboardChangeDetected?: boolean | cdktf.IResolvable; 
  public get dashboardChangeDetected() {
    return this.getBooleanAttribute('dashboard_change_detected');
  }
  public set dashboardChangeDetected(value: boolean | cdktf.IResolvable) {
    this._dashboardChangeDetected = value;
  }
  public resetDashboardChangeDetected() {
    this._dashboardChangeDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardChangeDetectedInput() {
    return this._dashboardChangeDetected;
  }

  // dashboard_id - computed: true, optional: true, required: false
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  public resetDashboardId() {
    this._dashboardId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
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

  // embed_credentials - computed: false, optional: true, required: false
  private _embedCredentials?: boolean | cdktf.IResolvable; 
  public get embedCredentials() {
    return this.getBooleanAttribute('embed_credentials');
  }
  public set embedCredentials(value: boolean | cdktf.IResolvable) {
    this._embedCredentials = value;
  }
  public resetEmbedCredentials() {
    this._embedCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embedCredentialsInput() {
    return this._embedCredentials;
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
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

  // lifecycle_state - computed: true, optional: true, required: false
  private _lifecycleState?: string; 
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }
  public set lifecycleState(value: string) {
    this._lifecycleState = value;
  }
  public resetLifecycleState() {
    this._lifecycleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStateInput() {
    return this._lifecycleState;
  }

  // md5 - computed: true, optional: true, required: false
  private _md5?: string; 
  public get md5() {
    return this.getStringAttribute('md5');
  }
  public set md5(value: string) {
    this._md5 = value;
  }
  public resetMd5() {
    this._md5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5;
  }

  // parent_path - computed: false, optional: false, required: true
  private _parentPath?: string; 
  public get parentPath() {
    return this.getStringAttribute('parent_path');
  }
  public set parentPath(value: string) {
    this._parentPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPathInput() {
    return this._parentPath;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // serialized_dashboard - computed: false, optional: true, required: false
  private _serializedDashboard?: string; 
  public get serializedDashboard() {
    return this.getStringAttribute('serialized_dashboard');
  }
  public set serializedDashboard(value: string) {
    this._serializedDashboard = value;
  }
  public resetSerializedDashboard() {
    this._serializedDashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializedDashboardInput() {
    return this._serializedDashboard;
  }

  // update_time - computed: true, optional: true, required: false
  private _updateTime?: string; 
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
  public set updateTime(value: string) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime;
  }

  // warehouse_id - computed: false, optional: false, required: true
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_time: cdktf.stringToTerraform(this._createTime),
      dashboard_change_detected: cdktf.booleanToTerraform(this._dashboardChangeDetected),
      dashboard_id: cdktf.stringToTerraform(this._dashboardId),
      display_name: cdktf.stringToTerraform(this._displayName),
      embed_credentials: cdktf.booleanToTerraform(this._embedCredentials),
      etag: cdktf.stringToTerraform(this._etag),
      file_path: cdktf.stringToTerraform(this._filePath),
      id: cdktf.stringToTerraform(this._id),
      lifecycle_state: cdktf.stringToTerraform(this._lifecycleState),
      md5: cdktf.stringToTerraform(this._md5),
      parent_path: cdktf.stringToTerraform(this._parentPath),
      path: cdktf.stringToTerraform(this._path),
      serialized_dashboard: cdktf.stringToTerraform(this._serializedDashboard),
      update_time: cdktf.stringToTerraform(this._updateTime),
      warehouse_id: cdktf.stringToTerraform(this._warehouseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_change_detected: {
        value: cdktf.booleanToHclTerraform(this._dashboardChangeDetected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dashboard_id: {
        value: cdktf.stringToHclTerraform(this._dashboardId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      embed_credentials: {
        value: cdktf.booleanToHclTerraform(this._embedCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_path: {
        value: cdktf.stringToHclTerraform(this._filePath),
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
      lifecycle_state: {
        value: cdktf.stringToHclTerraform(this._lifecycleState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      md5: {
        value: cdktf.stringToHclTerraform(this._md5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_path: {
        value: cdktf.stringToHclTerraform(this._parentPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serialized_dashboard: {
        value: cdktf.stringToHclTerraform(this._serializedDashboard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_time: {
        value: cdktf.stringToHclTerraform(this._updateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse_id: {
        value: cdktf.stringToHclTerraform(this._warehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
