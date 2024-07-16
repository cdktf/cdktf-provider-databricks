// https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/resources/catalog_workspace_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalogWorkspaceBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/resources/catalog_workspace_binding#binding_type CatalogWorkspaceBinding#binding_type}
  */
  readonly bindingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/resources/catalog_workspace_binding#catalog_name CatalogWorkspaceBinding#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/resources/catalog_workspace_binding#id CatalogWorkspaceBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/resources/catalog_workspace_binding#securable_name CatalogWorkspaceBinding#securable_name}
  */
  readonly securableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/resources/catalog_workspace_binding#securable_type CatalogWorkspaceBinding#securable_type}
  */
  readonly securableType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}
  */
  readonly workspaceId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/resources/catalog_workspace_binding databricks_catalog_workspace_binding}
*/
export class CatalogWorkspaceBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_catalog_workspace_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalogWorkspaceBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogWorkspaceBinding to import
  * @param importFromId The id of the existing CatalogWorkspaceBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/resources/catalog_workspace_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogWorkspaceBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_catalog_workspace_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/resources/catalog_workspace_binding databricks_catalog_workspace_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogWorkspaceBindingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CatalogWorkspaceBindingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_catalog_workspace_binding',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.48.3',
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
    this._bindingType = config.bindingType;
    this._catalogName = config.catalogName;
    this._id = config.id;
    this._securableName = config.securableName;
    this._securableType = config.securableType;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binding_type - computed: false, optional: true, required: false
  private _bindingType?: string; 
  public get bindingType() {
    return this.getStringAttribute('binding_type');
  }
  public set bindingType(value: string) {
    this._bindingType = value;
  }
  public resetBindingType() {
    this._bindingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingTypeInput() {
    return this._bindingType;
  }

  // catalog_name - computed: false, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
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

  // securable_name - computed: false, optional: true, required: false
  private _securableName?: string; 
  public get securableName() {
    return this.getStringAttribute('securable_name');
  }
  public set securableName(value: string) {
    this._securableName = value;
  }
  public resetSecurableName() {
    this._securableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securableNameInput() {
    return this._securableName;
  }

  // securable_type - computed: false, optional: true, required: false
  private _securableType?: string; 
  public get securableType() {
    return this.getStringAttribute('securable_type');
  }
  public set securableType(value: string) {
    this._securableType = value;
  }
  public resetSecurableType() {
    this._securableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securableTypeInput() {
    return this._securableType;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: number; 
  public get workspaceId() {
    return this.getNumberAttribute('workspace_id');
  }
  public set workspaceId(value: number) {
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
      binding_type: cdktf.stringToTerraform(this._bindingType),
      catalog_name: cdktf.stringToTerraform(this._catalogName),
      id: cdktf.stringToTerraform(this._id),
      securable_name: cdktf.stringToTerraform(this._securableName),
      securable_type: cdktf.stringToTerraform(this._securableType),
      workspace_id: cdktf.numberToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binding_type: {
        value: cdktf.stringToHclTerraform(this._bindingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_name: {
        value: cdktf.stringToHclTerraform(this._catalogName),
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
      securable_name: {
        value: cdktf.stringToHclTerraform(this._securableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      securable_type: {
        value: cdktf.stringToHclTerraform(this._securableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.numberToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
