/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/mws_private_access_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwsPrivateAccessSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}
  */
  readonly allowedVpcEndpointIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}
  */
  readonly privateAccessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}
  */
  readonly privateAccessSettingsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}
  */
  readonly privateAccessSettingsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}
  */
  readonly publicAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/mws_private_access_settings databricks_mws_private_access_settings}
*/
export class MwsPrivateAccessSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mws_private_access_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MwsPrivateAccessSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MwsPrivateAccessSettings to import
  * @param importFromId The id of the existing MwsPrivateAccessSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/mws_private_access_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MwsPrivateAccessSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_mws_private_access_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/mws_private_access_settings databricks_mws_private_access_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MwsPrivateAccessSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: MwsPrivateAccessSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mws_private_access_settings',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.48.1',
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
    this._accountId = config.accountId;
    this._allowedVpcEndpointIds = config.allowedVpcEndpointIds;
    this._id = config.id;
    this._privateAccessLevel = config.privateAccessLevel;
    this._privateAccessSettingsId = config.privateAccessSettingsId;
    this._privateAccessSettingsName = config.privateAccessSettingsName;
    this._publicAccessEnabled = config.publicAccessEnabled;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // allowed_vpc_endpoint_ids - computed: false, optional: true, required: false
  private _allowedVpcEndpointIds?: string[]; 
  public get allowedVpcEndpointIds() {
    return this.getListAttribute('allowed_vpc_endpoint_ids');
  }
  public set allowedVpcEndpointIds(value: string[]) {
    this._allowedVpcEndpointIds = value;
  }
  public resetAllowedVpcEndpointIds() {
    this._allowedVpcEndpointIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVpcEndpointIdsInput() {
    return this._allowedVpcEndpointIds;
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

  // private_access_level - computed: false, optional: true, required: false
  private _privateAccessLevel?: string; 
  public get privateAccessLevel() {
    return this.getStringAttribute('private_access_level');
  }
  public set privateAccessLevel(value: string) {
    this._privateAccessLevel = value;
  }
  public resetPrivateAccessLevel() {
    this._privateAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessLevelInput() {
    return this._privateAccessLevel;
  }

  // private_access_settings_id - computed: true, optional: true, required: false
  private _privateAccessSettingsId?: string; 
  public get privateAccessSettingsId() {
    return this.getStringAttribute('private_access_settings_id');
  }
  public set privateAccessSettingsId(value: string) {
    this._privateAccessSettingsId = value;
  }
  public resetPrivateAccessSettingsId() {
    this._privateAccessSettingsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessSettingsIdInput() {
    return this._privateAccessSettingsId;
  }

  // private_access_settings_name - computed: false, optional: false, required: true
  private _privateAccessSettingsName?: string; 
  public get privateAccessSettingsName() {
    return this.getStringAttribute('private_access_settings_name');
  }
  public set privateAccessSettingsName(value: string) {
    this._privateAccessSettingsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessSettingsNameInput() {
    return this._privateAccessSettingsName;
  }

  // public_access_enabled - computed: false, optional: true, required: false
  private _publicAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicAccessEnabled() {
    return this.getBooleanAttribute('public_access_enabled');
  }
  public set publicAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicAccessEnabled = value;
  }
  public resetPublicAccessEnabled() {
    this._publicAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessEnabledInput() {
    return this._publicAccessEnabled;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allowed_vpc_endpoint_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedVpcEndpointIds),
      id: cdktf.stringToTerraform(this._id),
      private_access_level: cdktf.stringToTerraform(this._privateAccessLevel),
      private_access_settings_id: cdktf.stringToTerraform(this._privateAccessSettingsId),
      private_access_settings_name: cdktf.stringToTerraform(this._privateAccessSettingsName),
      public_access_enabled: cdktf.booleanToTerraform(this._publicAccessEnabled),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_vpc_endpoint_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedVpcEndpointIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_access_level: {
        value: cdktf.stringToHclTerraform(this._privateAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_access_settings_id: {
        value: cdktf.stringToHclTerraform(this._privateAccessSettingsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_access_settings_name: {
        value: cdktf.stringToHclTerraform(this._privateAccessSettingsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
