/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwsNccPrivateEndpointRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule#connection_state MwsNccPrivateEndpointRule#connection_state}
  */
  readonly connectionState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule#creation_time MwsNccPrivateEndpointRule#creation_time}
  */
  readonly creationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated MwsNccPrivateEndpointRule#deactivated}
  */
  readonly deactivated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated_at MwsNccPrivateEndpointRule#deactivated_at}
  */
  readonly deactivatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_name MwsNccPrivateEndpointRule#endpoint_name}
  */
  readonly endpointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}
  */
  readonly networkConnectivityConfigId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule#rule_id MwsNccPrivateEndpointRule#rule_id}
  */
  readonly ruleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule#updated_time MwsNccPrivateEndpointRule#updated_time}
  */
  readonly updatedTime?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule databricks_mws_ncc_private_endpoint_rule}
*/
export class MwsNccPrivateEndpointRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mws_ncc_private_endpoint_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MwsNccPrivateEndpointRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MwsNccPrivateEndpointRule to import
  * @param importFromId The id of the existing MwsNccPrivateEndpointRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MwsNccPrivateEndpointRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_mws_ncc_private_endpoint_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/resources/mws_ncc_private_endpoint_rule databricks_mws_ncc_private_endpoint_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MwsNccPrivateEndpointRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MwsNccPrivateEndpointRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mws_ncc_private_endpoint_rule',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.43.0',
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
    this._connectionState = config.connectionState;
    this._creationTime = config.creationTime;
    this._deactivated = config.deactivated;
    this._deactivatedAt = config.deactivatedAt;
    this._endpointName = config.endpointName;
    this._groupId = config.groupId;
    this._id = config.id;
    this._networkConnectivityConfigId = config.networkConnectivityConfigId;
    this._resourceId = config.resourceId;
    this._ruleId = config.ruleId;
    this._updatedTime = config.updatedTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_state - computed: true, optional: true, required: false
  private _connectionState?: string; 
  public get connectionState() {
    return this.getStringAttribute('connection_state');
  }
  public set connectionState(value: string) {
    this._connectionState = value;
  }
  public resetConnectionState() {
    this._connectionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStateInput() {
    return this._connectionState;
  }

  // creation_time - computed: true, optional: true, required: false
  private _creationTime?: number; 
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }
  public set creationTime(value: number) {
    this._creationTime = value;
  }
  public resetCreationTime() {
    this._creationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeInput() {
    return this._creationTime;
  }

  // deactivated - computed: false, optional: true, required: false
  private _deactivated?: boolean | cdktf.IResolvable; 
  public get deactivated() {
    return this.getBooleanAttribute('deactivated');
  }
  public set deactivated(value: boolean | cdktf.IResolvable) {
    this._deactivated = value;
  }
  public resetDeactivated() {
    this._deactivated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivatedInput() {
    return this._deactivated;
  }

  // deactivated_at - computed: false, optional: true, required: false
  private _deactivatedAt?: number; 
  public get deactivatedAt() {
    return this.getNumberAttribute('deactivated_at');
  }
  public set deactivatedAt(value: number) {
    this._deactivatedAt = value;
  }
  public resetDeactivatedAt() {
    this._deactivatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivatedAtInput() {
    return this._deactivatedAt;
  }

  // endpoint_name - computed: true, optional: true, required: false
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  public resetEndpointName() {
    this._endpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // network_connectivity_config_id - computed: false, optional: false, required: true
  private _networkConnectivityConfigId?: string; 
  public get networkConnectivityConfigId() {
    return this.getStringAttribute('network_connectivity_config_id');
  }
  public set networkConnectivityConfigId(value: string) {
    this._networkConnectivityConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectivityConfigIdInput() {
    return this._networkConnectivityConfigId;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // rule_id - computed: true, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // updated_time - computed: true, optional: true, required: false
  private _updatedTime?: number; 
  public get updatedTime() {
    return this.getNumberAttribute('updated_time');
  }
  public set updatedTime(value: number) {
    this._updatedTime = value;
  }
  public resetUpdatedTime() {
    this._updatedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedTimeInput() {
    return this._updatedTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_state: cdktf.stringToTerraform(this._connectionState),
      creation_time: cdktf.numberToTerraform(this._creationTime),
      deactivated: cdktf.booleanToTerraform(this._deactivated),
      deactivated_at: cdktf.numberToTerraform(this._deactivatedAt),
      endpoint_name: cdktf.stringToTerraform(this._endpointName),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      network_connectivity_config_id: cdktf.stringToTerraform(this._networkConnectivityConfigId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      updated_time: cdktf.numberToTerraform(this._updatedTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_state: {
        value: cdktf.stringToHclTerraform(this._connectionState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creation_time: {
        value: cdktf.numberToHclTerraform(this._creationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deactivated: {
        value: cdktf.booleanToHclTerraform(this._deactivated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deactivated_at: {
        value: cdktf.numberToHclTerraform(this._deactivatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      endpoint_name: {
        value: cdktf.stringToHclTerraform(this._endpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      network_connectivity_config_id: {
        value: cdktf.stringToHclTerraform(this._networkConnectivityConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_time: {
        value: cdktf.numberToHclTerraform(this._updatedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
