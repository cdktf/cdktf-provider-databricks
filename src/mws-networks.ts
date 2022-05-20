// https://www.terraform.io/docs/providers/databricks/r/mws_networks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwsNetworksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#account_id MwsNetworks#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#creation_time MwsNetworks#creation_time}
  */
  readonly creationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#network_id MwsNetworks#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#network_name MwsNetworks#network_name}
  */
  readonly networkName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#security_group_ids MwsNetworks#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#subnet_ids MwsNetworks#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#vpc_id MwsNetworks#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#vpc_status MwsNetworks#vpc_status}
  */
  readonly vpcStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#workspace_id MwsNetworks#workspace_id}
  */
  readonly workspaceId?: number;
  /**
  * error_messages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#error_messages MwsNetworks#error_messages}
  */
  readonly errorMessages?: MwsNetworksErrorMessages[] | cdktf.IResolvable;
  /**
  * vpc_endpoints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#vpc_endpoints MwsNetworks#vpc_endpoints}
  */
  readonly vpcEndpoints?: MwsNetworksVpcEndpoints;
}
export interface MwsNetworksErrorMessages {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#error_message MwsNetworks#error_message}
  */
  readonly errorMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#error_type MwsNetworks#error_type}
  */
  readonly errorType?: string;
}

export function mwsNetworksErrorMessagesToTerraform(struct?: MwsNetworksErrorMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_message: cdktf.stringToTerraform(struct!.errorMessage),
    error_type: cdktf.stringToTerraform(struct!.errorType),
  }
}

export interface MwsNetworksVpcEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#dataplane_relay MwsNetworks#dataplane_relay}
  */
  readonly dataplaneRelay: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks#rest_api MwsNetworks#rest_api}
  */
  readonly restApi: string[];
}

export function mwsNetworksVpcEndpointsToTerraform(struct?: MwsNetworksVpcEndpointsOutputReference | MwsNetworksVpcEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataplane_relay: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dataplaneRelay),
    rest_api: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restApi),
  }
}

export class MwsNetworksVpcEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsNetworksVpcEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataplaneRelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataplaneRelay = this._dataplaneRelay;
    }
    if (this._restApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.restApi = this._restApi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsNetworksVpcEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataplaneRelay = undefined;
      this._restApi = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataplaneRelay = value.dataplaneRelay;
      this._restApi = value.restApi;
    }
  }

  // dataplane_relay - computed: false, optional: false, required: true
  private _dataplaneRelay?: string[]; 
  public get dataplaneRelay() {
    return cdktf.Fn.tolist(this.getListAttribute('dataplane_relay'));
  }
  public set dataplaneRelay(value: string[]) {
    this._dataplaneRelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplaneRelayInput() {
    return this._dataplaneRelay;
  }

  // rest_api - computed: false, optional: false, required: true
  private _restApi?: string[]; 
  public get restApi() {
    return cdktf.Fn.tolist(this.getListAttribute('rest_api'));
  }
  public set restApi(value: string[]) {
    this._restApi = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiInput() {
    return this._restApi;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks databricks_mws_networks}
*/
export class MwsNetworks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mws_networks";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/mws_networks databricks_mws_networks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MwsNetworksConfig
  */
  public constructor(scope: Construct, id: string, config: MwsNetworksConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mws_networks',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '0.5.8',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._creationTime = config.creationTime;
    this._networkId = config.networkId;
    this._networkName = config.networkName;
    this._securityGroupIds = config.securityGroupIds;
    this._subnetIds = config.subnetIds;
    this._vpcId = config.vpcId;
    this._vpcStatus = config.vpcStatus;
    this._workspaceId = config.workspaceId;
    this._errorMessages = config.errorMessages;
    this._vpcEndpoints.internalValue = config.vpcEndpoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: true, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // network_name - computed: false, optional: false, required: true
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_status - computed: true, optional: true, required: false
  private _vpcStatus?: string; 
  public get vpcStatus() {
    return this.getStringAttribute('vpc_status');
  }
  public set vpcStatus(value: string) {
    this._vpcStatus = value;
  }
  public resetVpcStatus() {
    this._vpcStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcStatusInput() {
    return this._vpcStatus;
  }

  // workspace_id - computed: true, optional: true, required: false
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

  // error_messages - computed: false, optional: true, required: false
  private _errorMessages?: MwsNetworksErrorMessages[] | cdktf.IResolvable; 
  public get errorMessages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('error_messages');
  }
  public set errorMessages(value: MwsNetworksErrorMessages[] | cdktf.IResolvable) {
    this._errorMessages = value;
  }
  public resetErrorMessages() {
    this._errorMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessagesInput() {
    return this._errorMessages;
  }

  // vpc_endpoints - computed: false, optional: true, required: false
  private _vpcEndpoints = new MwsNetworksVpcEndpointsOutputReference(this, "vpc_endpoints");
  public get vpcEndpoints() {
    return this._vpcEndpoints;
  }
  public putVpcEndpoints(value: MwsNetworksVpcEndpoints) {
    this._vpcEndpoints.internalValue = value;
  }
  public resetVpcEndpoints() {
    this._vpcEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointsInput() {
    return this._vpcEndpoints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      creation_time: cdktf.numberToTerraform(this._creationTime),
      network_id: cdktf.stringToTerraform(this._networkId),
      network_name: cdktf.stringToTerraform(this._networkName),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpc_status: cdktf.stringToTerraform(this._vpcStatus),
      workspace_id: cdktf.numberToTerraform(this._workspaceId),
      error_messages: cdktf.listMapper(mwsNetworksErrorMessagesToTerraform)(this._errorMessages),
      vpc_endpoints: mwsNetworksVpcEndpointsToTerraform(this._vpcEndpoints.internalValue),
    };
  }
}
