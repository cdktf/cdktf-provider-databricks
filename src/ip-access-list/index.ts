// https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/ip_access_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpAccessListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/ip_access_list#enabled IpAccessList#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/ip_access_list#id IpAccessList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/ip_access_list#ip_addresses IpAccessList#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/ip_access_list#label IpAccessList#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/ip_access_list#list_type IpAccessList#list_type}
  */
  readonly listType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/ip_access_list databricks_ip_access_list}
*/
export class IpAccessList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_ip_access_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpAccessList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpAccessList to import
  * @param importFromId The id of the existing IpAccessList that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/ip_access_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpAccessList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_ip_access_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/ip_access_list databricks_ip_access_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpAccessListConfig
  */
  public constructor(scope: Construct, id: string, config: IpAccessListConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_ip_access_list',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.46.0',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._ipAddresses = config.ipAddresses;
    this._label = config.label;
    this._listType = config.listType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // list_type - computed: false, optional: false, required: true
  private _listType?: string; 
  public get listType() {
    return this.getStringAttribute('list_type');
  }
  public set listType(value: string) {
    this._listType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listTypeInput() {
    return this._listType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddresses),
      label: cdktf.stringToTerraform(this._label),
      list_type: cdktf.stringToTerraform(this._listType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_type: {
        value: cdktf.stringToHclTerraform(this._listType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
