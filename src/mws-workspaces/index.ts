/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwsWorkspacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}
  */
  readonly cloud?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}
  */
  readonly creationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}
  */
  readonly credentialsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}
  */
  readonly customerManagedKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}
  */
  readonly deploymentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#id MwsWorkspaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}
  */
  readonly isNoPublicIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#location MwsWorkspaces#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}
  */
  readonly managedServicesCustomerManagedKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}
  */
  readonly pricingTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}
  */
  readonly privateAccessSettingsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}
  */
  readonly storageConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}
  */
  readonly storageCustomerManagedKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}
  */
  readonly workspaceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}
  */
  readonly workspaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}
  */
  readonly workspaceStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}
  */
  readonly workspaceStatusMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}
  */
  readonly workspaceUrl?: string;
  /**
  * cloud_resource_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#cloud_resource_container MwsWorkspaces#cloud_resource_container}
  */
  readonly cloudResourceContainer?: MwsWorkspacesCloudResourceContainer;
  /**
  * external_customer_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#external_customer_info MwsWorkspaces#external_customer_info}
  */
  readonly externalCustomerInfo?: MwsWorkspacesExternalCustomerInfo;
  /**
  * gcp_managed_network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#gcp_managed_network_config MwsWorkspaces#gcp_managed_network_config}
  */
  readonly gcpManagedNetworkConfig?: MwsWorkspacesGcpManagedNetworkConfig;
  /**
  * gke_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#gke_config MwsWorkspaces#gke_config}
  */
  readonly gkeConfig?: MwsWorkspacesGkeConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#timeouts MwsWorkspaces#timeouts}
  */
  readonly timeouts?: MwsWorkspacesTimeouts;
  /**
  * token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#token MwsWorkspaces#token}
  */
  readonly token?: MwsWorkspacesToken;
}
export interface MwsWorkspacesCloudResourceContainerGcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#project_id MwsWorkspaces#project_id}
  */
  readonly projectId: string;
}

export function mwsWorkspacesCloudResourceContainerGcpToTerraform(struct?: MwsWorkspacesCloudResourceContainerGcpOutputReference | MwsWorkspacesCloudResourceContainerGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function mwsWorkspacesCloudResourceContainerGcpToHclTerraform(struct?: MwsWorkspacesCloudResourceContainerGcpOutputReference | MwsWorkspacesCloudResourceContainerGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsWorkspacesCloudResourceContainerGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsWorkspacesCloudResourceContainerGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsWorkspacesCloudResourceContainerGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface MwsWorkspacesCloudResourceContainer {
  /**
  * gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#gcp MwsWorkspaces#gcp}
  */
  readonly gcp: MwsWorkspacesCloudResourceContainerGcp;
}

export function mwsWorkspacesCloudResourceContainerToTerraform(struct?: MwsWorkspacesCloudResourceContainerOutputReference | MwsWorkspacesCloudResourceContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp: mwsWorkspacesCloudResourceContainerGcpToTerraform(struct!.gcp),
  }
}


export function mwsWorkspacesCloudResourceContainerToHclTerraform(struct?: MwsWorkspacesCloudResourceContainerOutputReference | MwsWorkspacesCloudResourceContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp: {
      value: mwsWorkspacesCloudResourceContainerGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "list",
      storageClassType: "MwsWorkspacesCloudResourceContainerGcpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsWorkspacesCloudResourceContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsWorkspacesCloudResourceContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcp = this._gcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsWorkspacesCloudResourceContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcp.internalValue = value.gcp;
    }
  }

  // gcp - computed: false, optional: false, required: true
  private _gcp = new MwsWorkspacesCloudResourceContainerGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: MwsWorkspacesCloudResourceContainerGcp) {
    this._gcp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }
}
export interface MwsWorkspacesExternalCustomerInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#authoritative_user_email MwsWorkspaces#authoritative_user_email}
  */
  readonly authoritativeUserEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#authoritative_user_full_name MwsWorkspaces#authoritative_user_full_name}
  */
  readonly authoritativeUserFullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#customer_name MwsWorkspaces#customer_name}
  */
  readonly customerName: string;
}

export function mwsWorkspacesExternalCustomerInfoToTerraform(struct?: MwsWorkspacesExternalCustomerInfoOutputReference | MwsWorkspacesExternalCustomerInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authoritative_user_email: cdktf.stringToTerraform(struct!.authoritativeUserEmail),
    authoritative_user_full_name: cdktf.stringToTerraform(struct!.authoritativeUserFullName),
    customer_name: cdktf.stringToTerraform(struct!.customerName),
  }
}


export function mwsWorkspacesExternalCustomerInfoToHclTerraform(struct?: MwsWorkspacesExternalCustomerInfoOutputReference | MwsWorkspacesExternalCustomerInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authoritative_user_email: {
      value: cdktf.stringToHclTerraform(struct!.authoritativeUserEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authoritative_user_full_name: {
      value: cdktf.stringToHclTerraform(struct!.authoritativeUserFullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_name: {
      value: cdktf.stringToHclTerraform(struct!.customerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsWorkspacesExternalCustomerInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsWorkspacesExternalCustomerInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authoritativeUserEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.authoritativeUserEmail = this._authoritativeUserEmail;
    }
    if (this._authoritativeUserFullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authoritativeUserFullName = this._authoritativeUserFullName;
    }
    if (this._customerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerName = this._customerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsWorkspacesExternalCustomerInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authoritativeUserEmail = undefined;
      this._authoritativeUserFullName = undefined;
      this._customerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authoritativeUserEmail = value.authoritativeUserEmail;
      this._authoritativeUserFullName = value.authoritativeUserFullName;
      this._customerName = value.customerName;
    }
  }

  // authoritative_user_email - computed: false, optional: false, required: true
  private _authoritativeUserEmail?: string; 
  public get authoritativeUserEmail() {
    return this.getStringAttribute('authoritative_user_email');
  }
  public set authoritativeUserEmail(value: string) {
    this._authoritativeUserEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeUserEmailInput() {
    return this._authoritativeUserEmail;
  }

  // authoritative_user_full_name - computed: false, optional: false, required: true
  private _authoritativeUserFullName?: string; 
  public get authoritativeUserFullName() {
    return this.getStringAttribute('authoritative_user_full_name');
  }
  public set authoritativeUserFullName(value: string) {
    this._authoritativeUserFullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeUserFullNameInput() {
    return this._authoritativeUserFullName;
  }

  // customer_name - computed: false, optional: false, required: true
  private _customerName?: string; 
  public get customerName() {
    return this.getStringAttribute('customer_name');
  }
  public set customerName(value: string) {
    this._customerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerNameInput() {
    return this._customerName;
  }
}
export interface MwsWorkspacesGcpManagedNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#gke_cluster_pod_ip_range MwsWorkspaces#gke_cluster_pod_ip_range}
  */
  readonly gkeClusterPodIpRange: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#gke_cluster_service_ip_range MwsWorkspaces#gke_cluster_service_ip_range}
  */
  readonly gkeClusterServiceIpRange: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#subnet_cidr MwsWorkspaces#subnet_cidr}
  */
  readonly subnetCidr: string;
}

export function mwsWorkspacesGcpManagedNetworkConfigToTerraform(struct?: MwsWorkspacesGcpManagedNetworkConfigOutputReference | MwsWorkspacesGcpManagedNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gke_cluster_pod_ip_range: cdktf.stringToTerraform(struct!.gkeClusterPodIpRange),
    gke_cluster_service_ip_range: cdktf.stringToTerraform(struct!.gkeClusterServiceIpRange),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
  }
}


export function mwsWorkspacesGcpManagedNetworkConfigToHclTerraform(struct?: MwsWorkspacesGcpManagedNetworkConfigOutputReference | MwsWorkspacesGcpManagedNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gke_cluster_pod_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.gkeClusterPodIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gke_cluster_service_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.gkeClusterServiceIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsWorkspacesGcpManagedNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsWorkspacesGcpManagedNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gkeClusterPodIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeClusterPodIpRange = this._gkeClusterPodIpRange;
    }
    if (this._gkeClusterServiceIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeClusterServiceIpRange = this._gkeClusterServiceIpRange;
    }
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsWorkspacesGcpManagedNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gkeClusterPodIpRange = undefined;
      this._gkeClusterServiceIpRange = undefined;
      this._subnetCidr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gkeClusterPodIpRange = value.gkeClusterPodIpRange;
      this._gkeClusterServiceIpRange = value.gkeClusterServiceIpRange;
      this._subnetCidr = value.subnetCidr;
    }
  }

  // gke_cluster_pod_ip_range - computed: false, optional: false, required: true
  private _gkeClusterPodIpRange?: string; 
  public get gkeClusterPodIpRange() {
    return this.getStringAttribute('gke_cluster_pod_ip_range');
  }
  public set gkeClusterPodIpRange(value: string) {
    this._gkeClusterPodIpRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterPodIpRangeInput() {
    return this._gkeClusterPodIpRange;
  }

  // gke_cluster_service_ip_range - computed: false, optional: false, required: true
  private _gkeClusterServiceIpRange?: string; 
  public get gkeClusterServiceIpRange() {
    return this.getStringAttribute('gke_cluster_service_ip_range');
  }
  public set gkeClusterServiceIpRange(value: string) {
    this._gkeClusterServiceIpRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterServiceIpRangeInput() {
    return this._gkeClusterServiceIpRange;
  }

  // subnet_cidr - computed: false, optional: false, required: true
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }
}
export interface MwsWorkspacesGkeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#connectivity_type MwsWorkspaces#connectivity_type}
  */
  readonly connectivityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#master_ip_range MwsWorkspaces#master_ip_range}
  */
  readonly masterIpRange: string;
}

export function mwsWorkspacesGkeConfigToTerraform(struct?: MwsWorkspacesGkeConfigOutputReference | MwsWorkspacesGkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connectivity_type: cdktf.stringToTerraform(struct!.connectivityType),
    master_ip_range: cdktf.stringToTerraform(struct!.masterIpRange),
  }
}


export function mwsWorkspacesGkeConfigToHclTerraform(struct?: MwsWorkspacesGkeConfigOutputReference | MwsWorkspacesGkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connectivity_type: {
      value: cdktf.stringToHclTerraform(struct!.connectivityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.masterIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsWorkspacesGkeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsWorkspacesGkeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityType = this._connectivityType;
    }
    if (this._masterIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterIpRange = this._masterIpRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsWorkspacesGkeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectivityType = undefined;
      this._masterIpRange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectivityType = value.connectivityType;
      this._masterIpRange = value.masterIpRange;
    }
  }

  // connectivity_type - computed: false, optional: false, required: true
  private _connectivityType?: string; 
  public get connectivityType() {
    return this.getStringAttribute('connectivity_type');
  }
  public set connectivityType(value: string) {
    this._connectivityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityTypeInput() {
    return this._connectivityType;
  }

  // master_ip_range - computed: false, optional: false, required: true
  private _masterIpRange?: string; 
  public get masterIpRange() {
    return this.getStringAttribute('master_ip_range');
  }
  public set masterIpRange(value: string) {
    this._masterIpRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIpRangeInput() {
    return this._masterIpRange;
  }
}
export interface MwsWorkspacesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#create MwsWorkspaces#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#read MwsWorkspaces#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#update MwsWorkspaces#update}
  */
  readonly update?: string;
}

export function mwsWorkspacesTimeoutsToTerraform(struct?: MwsWorkspacesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mwsWorkspacesTimeoutsToHclTerraform(struct?: MwsWorkspacesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsWorkspacesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MwsWorkspacesTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsWorkspacesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface MwsWorkspacesToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#comment MwsWorkspaces#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#lifetime_seconds MwsWorkspaces#lifetime_seconds}
  */
  readonly lifetimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#token_id MwsWorkspaces#token_id}
  */
  readonly tokenId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#token_value MwsWorkspaces#token_value}
  */
  readonly tokenValue?: string;
}

export function mwsWorkspacesTokenToTerraform(struct?: MwsWorkspacesTokenOutputReference | MwsWorkspacesToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    lifetime_seconds: cdktf.numberToTerraform(struct!.lifetimeSeconds),
    token_id: cdktf.stringToTerraform(struct!.tokenId),
    token_value: cdktf.stringToTerraform(struct!.tokenValue),
  }
}


export function mwsWorkspacesTokenToHclTerraform(struct?: MwsWorkspacesTokenOutputReference | MwsWorkspacesToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime_seconds: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_id: {
      value: cdktf.stringToHclTerraform(struct!.tokenId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_value: {
      value: cdktf.stringToHclTerraform(struct!.tokenValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsWorkspacesTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsWorkspacesToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._lifetimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeSeconds = this._lifetimeSeconds;
    }
    if (this._tokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenId = this._tokenId;
    }
    if (this._tokenValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenValue = this._tokenValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsWorkspacesToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._lifetimeSeconds = undefined;
      this._tokenId = undefined;
      this._tokenValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._lifetimeSeconds = value.lifetimeSeconds;
      this._tokenId = value.tokenId;
      this._tokenValue = value.tokenValue;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // lifetime_seconds - computed: false, optional: true, required: false
  private _lifetimeSeconds?: number; 
  public get lifetimeSeconds() {
    return this.getNumberAttribute('lifetime_seconds');
  }
  public set lifetimeSeconds(value: number) {
    this._lifetimeSeconds = value;
  }
  public resetLifetimeSeconds() {
    this._lifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeSecondsInput() {
    return this._lifetimeSeconds;
  }

  // token_id - computed: true, optional: true, required: false
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  public resetTokenId() {
    this._tokenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }

  // token_value - computed: true, optional: true, required: false
  private _tokenValue?: string; 
  public get tokenValue() {
    return this.getStringAttribute('token_value');
  }
  public set tokenValue(value: string) {
    this._tokenValue = value;
  }
  public resetTokenValue() {
    this._tokenValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenValueInput() {
    return this._tokenValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces databricks_mws_workspaces}
*/
export class MwsWorkspaces extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mws_workspaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MwsWorkspaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MwsWorkspaces to import
  * @param importFromId The id of the existing MwsWorkspaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MwsWorkspaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_mws_workspaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/mws_workspaces databricks_mws_workspaces} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MwsWorkspacesConfig
  */
  public constructor(scope: Construct, id: string, config: MwsWorkspacesConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mws_workspaces',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.34.0',
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
    this._awsRegion = config.awsRegion;
    this._cloud = config.cloud;
    this._creationTime = config.creationTime;
    this._credentialsId = config.credentialsId;
    this._customerManagedKeyId = config.customerManagedKeyId;
    this._deploymentName = config.deploymentName;
    this._id = config.id;
    this._isNoPublicIpEnabled = config.isNoPublicIpEnabled;
    this._location = config.location;
    this._managedServicesCustomerManagedKeyId = config.managedServicesCustomerManagedKeyId;
    this._networkId = config.networkId;
    this._pricingTier = config.pricingTier;
    this._privateAccessSettingsId = config.privateAccessSettingsId;
    this._storageConfigurationId = config.storageConfigurationId;
    this._storageCustomerManagedKeyId = config.storageCustomerManagedKeyId;
    this._workspaceId = config.workspaceId;
    this._workspaceName = config.workspaceName;
    this._workspaceStatus = config.workspaceStatus;
    this._workspaceStatusMessage = config.workspaceStatusMessage;
    this._workspaceUrl = config.workspaceUrl;
    this._cloudResourceContainer.internalValue = config.cloudResourceContainer;
    this._externalCustomerInfo.internalValue = config.externalCustomerInfo;
    this._gcpManagedNetworkConfig.internalValue = config.gcpManagedNetworkConfig;
    this._gkeConfig.internalValue = config.gkeConfig;
    this._timeouts.internalValue = config.timeouts;
    this._token.internalValue = config.token;
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

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // cloud - computed: true, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
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

  // credentials_id - computed: false, optional: true, required: false
  private _credentialsId?: string; 
  public get credentialsId() {
    return this.getStringAttribute('credentials_id');
  }
  public set credentialsId(value: string) {
    this._credentialsId = value;
  }
  public resetCredentialsId() {
    this._credentialsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsIdInput() {
    return this._credentialsId;
  }

  // customer_managed_key_id - computed: false, optional: true, required: false
  private _customerManagedKeyId?: string; 
  public get customerManagedKeyId() {
    return this.getStringAttribute('customer_managed_key_id');
  }
  public set customerManagedKeyId(value: string) {
    this._customerManagedKeyId = value;
  }
  public resetCustomerManagedKeyId() {
    this._customerManagedKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyIdInput() {
    return this._customerManagedKeyId;
  }

  // deployment_name - computed: false, optional: true, required: false
  private _deploymentName?: string; 
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }
  public set deploymentName(value: string) {
    this._deploymentName = value;
  }
  public resetDeploymentName() {
    this._deploymentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentNameInput() {
    return this._deploymentName;
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

  // is_no_public_ip_enabled - computed: false, optional: true, required: false
  private _isNoPublicIpEnabled?: boolean | cdktf.IResolvable; 
  public get isNoPublicIpEnabled() {
    return this.getBooleanAttribute('is_no_public_ip_enabled');
  }
  public set isNoPublicIpEnabled(value: boolean | cdktf.IResolvable) {
    this._isNoPublicIpEnabled = value;
  }
  public resetIsNoPublicIpEnabled() {
    this._isNoPublicIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNoPublicIpEnabledInput() {
    return this._isNoPublicIpEnabled;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // managed_services_customer_managed_key_id - computed: false, optional: true, required: false
  private _managedServicesCustomerManagedKeyId?: string; 
  public get managedServicesCustomerManagedKeyId() {
    return this.getStringAttribute('managed_services_customer_managed_key_id');
  }
  public set managedServicesCustomerManagedKeyId(value: string) {
    this._managedServicesCustomerManagedKeyId = value;
  }
  public resetManagedServicesCustomerManagedKeyId() {
    this._managedServicesCustomerManagedKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServicesCustomerManagedKeyIdInput() {
    return this._managedServicesCustomerManagedKeyId;
  }

  // network_id - computed: false, optional: true, required: false
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

  // pricing_tier - computed: true, optional: true, required: false
  private _pricingTier?: string; 
  public get pricingTier() {
    return this.getStringAttribute('pricing_tier');
  }
  public set pricingTier(value: string) {
    this._pricingTier = value;
  }
  public resetPricingTier() {
    this._pricingTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingTierInput() {
    return this._pricingTier;
  }

  // private_access_settings_id - computed: false, optional: true, required: false
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

  // storage_configuration_id - computed: false, optional: true, required: false
  private _storageConfigurationId?: string; 
  public get storageConfigurationId() {
    return this.getStringAttribute('storage_configuration_id');
  }
  public set storageConfigurationId(value: string) {
    this._storageConfigurationId = value;
  }
  public resetStorageConfigurationId() {
    this._storageConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationIdInput() {
    return this._storageConfigurationId;
  }

  // storage_customer_managed_key_id - computed: false, optional: true, required: false
  private _storageCustomerManagedKeyId?: string; 
  public get storageCustomerManagedKeyId() {
    return this.getStringAttribute('storage_customer_managed_key_id');
  }
  public set storageCustomerManagedKeyId(value: string) {
    this._storageCustomerManagedKeyId = value;
  }
  public resetStorageCustomerManagedKeyId() {
    this._storageCustomerManagedKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCustomerManagedKeyIdInput() {
    return this._storageCustomerManagedKeyId;
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

  // workspace_name - computed: false, optional: false, required: true
  private _workspaceName?: string; 
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
  public set workspaceName(value: string) {
    this._workspaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceNameInput() {
    return this._workspaceName;
  }

  // workspace_status - computed: true, optional: true, required: false
  private _workspaceStatus?: string; 
  public get workspaceStatus() {
    return this.getStringAttribute('workspace_status');
  }
  public set workspaceStatus(value: string) {
    this._workspaceStatus = value;
  }
  public resetWorkspaceStatus() {
    this._workspaceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceStatusInput() {
    return this._workspaceStatus;
  }

  // workspace_status_message - computed: true, optional: true, required: false
  private _workspaceStatusMessage?: string; 
  public get workspaceStatusMessage() {
    return this.getStringAttribute('workspace_status_message');
  }
  public set workspaceStatusMessage(value: string) {
    this._workspaceStatusMessage = value;
  }
  public resetWorkspaceStatusMessage() {
    this._workspaceStatusMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceStatusMessageInput() {
    return this._workspaceStatusMessage;
  }

  // workspace_url - computed: true, optional: true, required: false
  private _workspaceUrl?: string; 
  public get workspaceUrl() {
    return this.getStringAttribute('workspace_url');
  }
  public set workspaceUrl(value: string) {
    this._workspaceUrl = value;
  }
  public resetWorkspaceUrl() {
    this._workspaceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUrlInput() {
    return this._workspaceUrl;
  }

  // cloud_resource_container - computed: false, optional: true, required: false
  private _cloudResourceContainer = new MwsWorkspacesCloudResourceContainerOutputReference(this, "cloud_resource_container");
  public get cloudResourceContainer() {
    return this._cloudResourceContainer;
  }
  public putCloudResourceContainer(value: MwsWorkspacesCloudResourceContainer) {
    this._cloudResourceContainer.internalValue = value;
  }
  public resetCloudResourceContainer() {
    this._cloudResourceContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudResourceContainerInput() {
    return this._cloudResourceContainer.internalValue;
  }

  // external_customer_info - computed: false, optional: true, required: false
  private _externalCustomerInfo = new MwsWorkspacesExternalCustomerInfoOutputReference(this, "external_customer_info");
  public get externalCustomerInfo() {
    return this._externalCustomerInfo;
  }
  public putExternalCustomerInfo(value: MwsWorkspacesExternalCustomerInfo) {
    this._externalCustomerInfo.internalValue = value;
  }
  public resetExternalCustomerInfo() {
    this._externalCustomerInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalCustomerInfoInput() {
    return this._externalCustomerInfo.internalValue;
  }

  // gcp_managed_network_config - computed: false, optional: true, required: false
  private _gcpManagedNetworkConfig = new MwsWorkspacesGcpManagedNetworkConfigOutputReference(this, "gcp_managed_network_config");
  public get gcpManagedNetworkConfig() {
    return this._gcpManagedNetworkConfig;
  }
  public putGcpManagedNetworkConfig(value: MwsWorkspacesGcpManagedNetworkConfig) {
    this._gcpManagedNetworkConfig.internalValue = value;
  }
  public resetGcpManagedNetworkConfig() {
    this._gcpManagedNetworkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpManagedNetworkConfigInput() {
    return this._gcpManagedNetworkConfig.internalValue;
  }

  // gke_config - computed: false, optional: true, required: false
  private _gkeConfig = new MwsWorkspacesGkeConfigOutputReference(this, "gke_config");
  public get gkeConfig() {
    return this._gkeConfig;
  }
  public putGkeConfig(value: MwsWorkspacesGkeConfig) {
    this._gkeConfig.internalValue = value;
  }
  public resetGkeConfig() {
    this._gkeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeConfigInput() {
    return this._gkeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MwsWorkspacesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MwsWorkspacesTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // token - computed: false, optional: true, required: false
  private _token = new MwsWorkspacesTokenOutputReference(this, "token");
  public get token() {
    return this._token;
  }
  public putToken(value: MwsWorkspacesToken) {
    this._token.internalValue = value;
  }
  public resetToken() {
    this._token.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      cloud: cdktf.stringToTerraform(this._cloud),
      creation_time: cdktf.numberToTerraform(this._creationTime),
      credentials_id: cdktf.stringToTerraform(this._credentialsId),
      customer_managed_key_id: cdktf.stringToTerraform(this._customerManagedKeyId),
      deployment_name: cdktf.stringToTerraform(this._deploymentName),
      id: cdktf.stringToTerraform(this._id),
      is_no_public_ip_enabled: cdktf.booleanToTerraform(this._isNoPublicIpEnabled),
      location: cdktf.stringToTerraform(this._location),
      managed_services_customer_managed_key_id: cdktf.stringToTerraform(this._managedServicesCustomerManagedKeyId),
      network_id: cdktf.stringToTerraform(this._networkId),
      pricing_tier: cdktf.stringToTerraform(this._pricingTier),
      private_access_settings_id: cdktf.stringToTerraform(this._privateAccessSettingsId),
      storage_configuration_id: cdktf.stringToTerraform(this._storageConfigurationId),
      storage_customer_managed_key_id: cdktf.stringToTerraform(this._storageCustomerManagedKeyId),
      workspace_id: cdktf.numberToTerraform(this._workspaceId),
      workspace_name: cdktf.stringToTerraform(this._workspaceName),
      workspace_status: cdktf.stringToTerraform(this._workspaceStatus),
      workspace_status_message: cdktf.stringToTerraform(this._workspaceStatusMessage),
      workspace_url: cdktf.stringToTerraform(this._workspaceUrl),
      cloud_resource_container: mwsWorkspacesCloudResourceContainerToTerraform(this._cloudResourceContainer.internalValue),
      external_customer_info: mwsWorkspacesExternalCustomerInfoToTerraform(this._externalCustomerInfo.internalValue),
      gcp_managed_network_config: mwsWorkspacesGcpManagedNetworkConfigToTerraform(this._gcpManagedNetworkConfig.internalValue),
      gke_config: mwsWorkspacesGkeConfigToTerraform(this._gkeConfig.internalValue),
      timeouts: mwsWorkspacesTimeoutsToTerraform(this._timeouts.internalValue),
      token: mwsWorkspacesTokenToTerraform(this._token.internalValue),
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
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
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
      credentials_id: {
        value: cdktf.stringToHclTerraform(this._credentialsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_managed_key_id: {
        value: cdktf.stringToHclTerraform(this._customerManagedKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_name: {
        value: cdktf.stringToHclTerraform(this._deploymentName),
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
      is_no_public_ip_enabled: {
        value: cdktf.booleanToHclTerraform(this._isNoPublicIpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_services_customer_managed_key_id: {
        value: cdktf.stringToHclTerraform(this._managedServicesCustomerManagedKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pricing_tier: {
        value: cdktf.stringToHclTerraform(this._pricingTier),
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
      storage_configuration_id: {
        value: cdktf.stringToHclTerraform(this._storageConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_customer_managed_key_id: {
        value: cdktf.stringToHclTerraform(this._storageCustomerManagedKeyId),
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
      workspace_name: {
        value: cdktf.stringToHclTerraform(this._workspaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_status: {
        value: cdktf.stringToHclTerraform(this._workspaceStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_status_message: {
        value: cdktf.stringToHclTerraform(this._workspaceStatusMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_url: {
        value: cdktf.stringToHclTerraform(this._workspaceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_resource_container: {
        value: mwsWorkspacesCloudResourceContainerToHclTerraform(this._cloudResourceContainer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MwsWorkspacesCloudResourceContainerList",
      },
      external_customer_info: {
        value: mwsWorkspacesExternalCustomerInfoToHclTerraform(this._externalCustomerInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MwsWorkspacesExternalCustomerInfoList",
      },
      gcp_managed_network_config: {
        value: mwsWorkspacesGcpManagedNetworkConfigToHclTerraform(this._gcpManagedNetworkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MwsWorkspacesGcpManagedNetworkConfigList",
      },
      gke_config: {
        value: mwsWorkspacesGkeConfigToHclTerraform(this._gkeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MwsWorkspacesGkeConfigList",
      },
      timeouts: {
        value: mwsWorkspacesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MwsWorkspacesTimeouts",
      },
      token: {
        value: mwsWorkspacesTokenToHclTerraform(this._token.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MwsWorkspacesTokenList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
