// https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwsNetworksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#account_id MwsNetworks#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}
  */
  readonly creationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#id MwsNetworks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#network_id MwsNetworks#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#network_name MwsNetworks#network_name}
  */
  readonly networkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}
  */
  readonly vpcStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}
  */
  readonly workspaceId?: number;
  /**
  * error_messages block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#error_messages MwsNetworks#error_messages}
  */
  readonly errorMessages?: MwsNetworksErrorMessages[] | cdktf.IResolvable;
  /**
  * gcp_network_info block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#gcp_network_info MwsNetworks#gcp_network_info}
  */
  readonly gcpNetworkInfo?: MwsNetworksGcpNetworkInfo;
  /**
  * vpc_endpoints block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#vpc_endpoints MwsNetworks#vpc_endpoints}
  */
  readonly vpcEndpoints?: MwsNetworksVpcEndpoints;
}
export interface MwsNetworksErrorMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#error_message MwsNetworks#error_message}
  */
  readonly errorMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#error_type MwsNetworks#error_type}
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

export class MwsNetworksErrorMessagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MwsNetworksErrorMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorMessage = this._errorMessage;
    }
    if (this._errorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorType = this._errorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsNetworksErrorMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorMessage = undefined;
      this._errorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorMessage = value.errorMessage;
      this._errorType = value.errorType;
    }
  }

  // error_message - computed: false, optional: true, required: false
  private _errorMessage?: string; 
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
  public set errorMessage(value: string) {
    this._errorMessage = value;
  }
  public resetErrorMessage() {
    this._errorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageInput() {
    return this._errorMessage;
  }

  // error_type - computed: false, optional: true, required: false
  private _errorType?: string; 
  public get errorType() {
    return this.getStringAttribute('error_type');
  }
  public set errorType(value: string) {
    this._errorType = value;
  }
  public resetErrorType() {
    this._errorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorTypeInput() {
    return this._errorType;
  }
}

export class MwsNetworksErrorMessagesList extends cdktf.ComplexList {
  public internalValue? : MwsNetworksErrorMessages[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MwsNetworksErrorMessagesOutputReference {
    return new MwsNetworksErrorMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MwsNetworksGcpNetworkInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#network_project_id MwsNetworks#network_project_id}
  */
  readonly networkProjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#pod_ip_range_name MwsNetworks#pod_ip_range_name}
  */
  readonly podIpRangeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#service_ip_range_name MwsNetworks#service_ip_range_name}
  */
  readonly serviceIpRangeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#subnet_id MwsNetworks#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#subnet_region MwsNetworks#subnet_region}
  */
  readonly subnetRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}
  */
  readonly vpcId: string;
}

export function mwsNetworksGcpNetworkInfoToTerraform(struct?: MwsNetworksGcpNetworkInfoOutputReference | MwsNetworksGcpNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_project_id: cdktf.stringToTerraform(struct!.networkProjectId),
    pod_ip_range_name: cdktf.stringToTerraform(struct!.podIpRangeName),
    service_ip_range_name: cdktf.stringToTerraform(struct!.serviceIpRangeName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    subnet_region: cdktf.stringToTerraform(struct!.subnetRegion),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}

export class MwsNetworksGcpNetworkInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsNetworksGcpNetworkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProjectId = this._networkProjectId;
    }
    if (this._podIpRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIpRangeName = this._podIpRangeName;
    }
    if (this._serviceIpRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIpRangeName = this._serviceIpRangeName;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._subnetRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetRegion = this._subnetRegion;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsNetworksGcpNetworkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkProjectId = undefined;
      this._podIpRangeName = undefined;
      this._serviceIpRangeName = undefined;
      this._subnetId = undefined;
      this._subnetRegion = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkProjectId = value.networkProjectId;
      this._podIpRangeName = value.podIpRangeName;
      this._serviceIpRangeName = value.serviceIpRangeName;
      this._subnetId = value.subnetId;
      this._subnetRegion = value.subnetRegion;
      this._vpcId = value.vpcId;
    }
  }

  // network_project_id - computed: false, optional: false, required: true
  private _networkProjectId?: string; 
  public get networkProjectId() {
    return this.getStringAttribute('network_project_id');
  }
  public set networkProjectId(value: string) {
    this._networkProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProjectIdInput() {
    return this._networkProjectId;
  }

  // pod_ip_range_name - computed: false, optional: false, required: true
  private _podIpRangeName?: string; 
  public get podIpRangeName() {
    return this.getStringAttribute('pod_ip_range_name');
  }
  public set podIpRangeName(value: string) {
    this._podIpRangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podIpRangeNameInput() {
    return this._podIpRangeName;
  }

  // service_ip_range_name - computed: false, optional: false, required: true
  private _serviceIpRangeName?: string; 
  public get serviceIpRangeName() {
    return this.getStringAttribute('service_ip_range_name');
  }
  public set serviceIpRangeName(value: string) {
    this._serviceIpRangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpRangeNameInput() {
    return this._serviceIpRangeName;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subnet_region - computed: false, optional: false, required: true
  private _subnetRegion?: string; 
  public get subnetRegion() {
    return this.getStringAttribute('subnet_region');
  }
  public set subnetRegion(value: string) {
    this._subnetRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetRegionInput() {
    return this._subnetRegion;
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
}
export interface MwsNetworksVpcEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#dataplane_relay MwsNetworks#dataplane_relay}
  */
  readonly dataplaneRelay: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks#rest_api MwsNetworks#rest_api}
  */
  readonly restApi: string[];
}

export function mwsNetworksVpcEndpointsToTerraform(struct?: MwsNetworksVpcEndpointsOutputReference | MwsNetworksVpcEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataplane_relay: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataplaneRelay),
    rest_api: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restApi),
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks databricks_mws_networks}
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
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.16.1/docs/resources/mws_networks databricks_mws_networks} Resource
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
        providerVersion: '1.16.1',
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
    this._creationTime = config.creationTime;
    this._id = config.id;
    this._networkId = config.networkId;
    this._networkName = config.networkName;
    this._securityGroupIds = config.securityGroupIds;
    this._subnetIds = config.subnetIds;
    this._vpcId = config.vpcId;
    this._vpcStatus = config.vpcStatus;
    this._workspaceId = config.workspaceId;
    this._errorMessages.internalValue = config.errorMessages;
    this._gcpNetworkInfo.internalValue = config.gcpNetworkInfo;
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

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
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
  private _errorMessages = new MwsNetworksErrorMessagesList(this, "error_messages", false);
  public get errorMessages() {
    return this._errorMessages;
  }
  public putErrorMessages(value: MwsNetworksErrorMessages[] | cdktf.IResolvable) {
    this._errorMessages.internalValue = value;
  }
  public resetErrorMessages() {
    this._errorMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessagesInput() {
    return this._errorMessages.internalValue;
  }

  // gcp_network_info - computed: false, optional: true, required: false
  private _gcpNetworkInfo = new MwsNetworksGcpNetworkInfoOutputReference(this, "gcp_network_info");
  public get gcpNetworkInfo() {
    return this._gcpNetworkInfo;
  }
  public putGcpNetworkInfo(value: MwsNetworksGcpNetworkInfo) {
    this._gcpNetworkInfo.internalValue = value;
  }
  public resetGcpNetworkInfo() {
    this._gcpNetworkInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpNetworkInfoInput() {
    return this._gcpNetworkInfo.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      network_id: cdktf.stringToTerraform(this._networkId),
      network_name: cdktf.stringToTerraform(this._networkName),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpc_status: cdktf.stringToTerraform(this._vpcStatus),
      workspace_id: cdktf.numberToTerraform(this._workspaceId),
      error_messages: cdktf.listMapper(mwsNetworksErrorMessagesToTerraform, true)(this._errorMessages.internalValue),
      gcp_network_info: mwsNetworksGcpNetworkInfoToTerraform(this._gcpNetworkInfo.internalValue),
      vpc_endpoints: mwsNetworksVpcEndpointsToTerraform(this._vpcEndpoints.internalValue),
    };
  }
}
