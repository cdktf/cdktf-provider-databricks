/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountNetworkPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#account_id AccountNetworkPolicy#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#egress AccountNetworkPolicy#egress}
  */
  readonly egress?: AccountNetworkPolicyEgress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#network_policy_id AccountNetworkPolicy#network_policy_id}
  */
  readonly networkPolicyId?: string;
}
export interface AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#internet_destination_type AccountNetworkPolicy#internet_destination_type}
  */
  readonly internetDestinationType?: string;
}

export function accountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsToTerraform(struct?: AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    internet_destination_type: cdktf.stringToTerraform(struct!.internetDestinationType),
  }
}


export function accountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsToHclTerraform(struct?: AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_destination_type: {
      value: cdktf.stringToHclTerraform(struct!.internetDestinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._internetDestinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetDestinationType = this._internetDestinationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._internetDestinationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._internetDestinationType = value.internetDestinationType;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // internet_destination_type - computed: false, optional: true, required: false
  private _internetDestinationType?: string; 
  public get internetDestinationType() {
    return this.getStringAttribute('internet_destination_type');
  }
  public set internetDestinationType(value: string) {
    this._internetDestinationType = value;
  }
  public resetInternetDestinationType() {
    this._internetDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetDestinationTypeInput() {
    return this._internetDestinationType;
  }
}

export class AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList extends cdktf.ComplexList {
  public internalValue? : AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[] | cdktf.IResolvable

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
  public get(index: number): AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference {
    return new AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#azure_storage_account AccountNetworkPolicy#azure_storage_account}
  */
  readonly azureStorageAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#azure_storage_service AccountNetworkPolicy#azure_storage_service}
  */
  readonly azureStorageService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#bucket_name AccountNetworkPolicy#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#region AccountNetworkPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#storage_destination_type AccountNetworkPolicy#storage_destination_type}
  */
  readonly storageDestinationType?: string;
}

export function accountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsToTerraform(struct?: AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_storage_account: cdktf.stringToTerraform(struct!.azureStorageAccount),
    azure_storage_service: cdktf.stringToTerraform(struct!.azureStorageService),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    region: cdktf.stringToTerraform(struct!.region),
    storage_destination_type: cdktf.stringToTerraform(struct!.storageDestinationType),
  }
}


export function accountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsToHclTerraform(struct?: AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_storage_account: {
      value: cdktf.stringToHclTerraform(struct!.azureStorageAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_storage_service: {
      value: cdktf.stringToHclTerraform(struct!.azureStorageService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_destination_type: {
      value: cdktf.stringToHclTerraform(struct!.storageDestinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureStorageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorageAccount = this._azureStorageAccount;
    }
    if (this._azureStorageService !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorageService = this._azureStorageService;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._storageDestinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDestinationType = this._storageDestinationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureStorageAccount = undefined;
      this._azureStorageService = undefined;
      this._bucketName = undefined;
      this._region = undefined;
      this._storageDestinationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureStorageAccount = value.azureStorageAccount;
      this._azureStorageService = value.azureStorageService;
      this._bucketName = value.bucketName;
      this._region = value.region;
      this._storageDestinationType = value.storageDestinationType;
    }
  }

  // azure_storage_account - computed: false, optional: true, required: false
  private _azureStorageAccount?: string; 
  public get azureStorageAccount() {
    return this.getStringAttribute('azure_storage_account');
  }
  public set azureStorageAccount(value: string) {
    this._azureStorageAccount = value;
  }
  public resetAzureStorageAccount() {
    this._azureStorageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageAccountInput() {
    return this._azureStorageAccount;
  }

  // azure_storage_service - computed: false, optional: true, required: false
  private _azureStorageService?: string; 
  public get azureStorageService() {
    return this.getStringAttribute('azure_storage_service');
  }
  public set azureStorageService(value: string) {
    this._azureStorageService = value;
  }
  public resetAzureStorageService() {
    this._azureStorageService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageServiceInput() {
    return this._azureStorageService;
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // storage_destination_type - computed: false, optional: true, required: false
  private _storageDestinationType?: string; 
  public get storageDestinationType() {
    return this.getStringAttribute('storage_destination_type');
  }
  public set storageDestinationType(value: string) {
    this._storageDestinationType = value;
  }
  public resetStorageDestinationType() {
    this._storageDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDestinationTypeInput() {
    return this._storageDestinationType;
  }
}

export class AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList extends cdktf.ComplexList {
  public internalValue? : AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[] | cdktf.IResolvable

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
  public get(index: number): AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference {
    return new AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#dry_run_mode_product_filter AccountNetworkPolicy#dry_run_mode_product_filter}
  */
  readonly dryRunModeProductFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#enforcement_mode AccountNetworkPolicy#enforcement_mode}
  */
  readonly enforcementMode?: string;
}

export function accountNetworkPolicyEgressNetworkAccessPolicyEnforcementToTerraform(struct?: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dry_run_mode_product_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dryRunModeProductFilter),
    enforcement_mode: cdktf.stringToTerraform(struct!.enforcementMode),
  }
}


export function accountNetworkPolicyEgressNetworkAccessPolicyEnforcementToHclTerraform(struct?: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dry_run_mode_product_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dryRunModeProductFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enforcement_mode: {
      value: cdktf.stringToHclTerraform(struct!.enforcementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dryRunModeProductFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRunModeProductFilter = this._dryRunModeProductFilter;
    }
    if (this._enforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementMode = this._enforcementMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dryRunModeProductFilter = undefined;
      this._enforcementMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dryRunModeProductFilter = value.dryRunModeProductFilter;
      this._enforcementMode = value.enforcementMode;
    }
  }

  // dry_run_mode_product_filter - computed: false, optional: true, required: false
  private _dryRunModeProductFilter?: string[]; 
  public get dryRunModeProductFilter() {
    return this.getListAttribute('dry_run_mode_product_filter');
  }
  public set dryRunModeProductFilter(value: string[]) {
    this._dryRunModeProductFilter = value;
  }
  public resetDryRunModeProductFilter() {
    this._dryRunModeProductFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunModeProductFilterInput() {
    return this._dryRunModeProductFilter;
  }

  // enforcement_mode - computed: false, optional: true, required: false
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  public resetEnforcementMode() {
    this._enforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }
}
export interface AccountNetworkPolicyEgressNetworkAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#allowed_internet_destinations AccountNetworkPolicy#allowed_internet_destinations}
  */
  readonly allowedInternetDestinations?: AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#allowed_storage_destinations AccountNetworkPolicy#allowed_storage_destinations}
  */
  readonly allowedStorageDestinations?: AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#policy_enforcement AccountNetworkPolicy#policy_enforcement}
  */
  readonly policyEnforcement?: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function accountNetworkPolicyEgressNetworkAccessToTerraform(struct?: AccountNetworkPolicyEgressNetworkAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_internet_destinations: cdktf.listMapper(accountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsToTerraform, false)(struct!.allowedInternetDestinations),
    allowed_storage_destinations: cdktf.listMapper(accountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsToTerraform, false)(struct!.allowedStorageDestinations),
    policy_enforcement: accountNetworkPolicyEgressNetworkAccessPolicyEnforcementToTerraform(struct!.policyEnforcement),
    restriction_mode: cdktf.stringToTerraform(struct!.restrictionMode),
  }
}


export function accountNetworkPolicyEgressNetworkAccessToHclTerraform(struct?: AccountNetworkPolicyEgressNetworkAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_internet_destinations: {
      value: cdktf.listMapperHcl(accountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsToHclTerraform, false)(struct!.allowedInternetDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList",
    },
    allowed_storage_destinations: {
      value: cdktf.listMapperHcl(accountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsToHclTerraform, false)(struct!.allowedStorageDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList",
    },
    policy_enforcement: {
      value: accountNetworkPolicyEgressNetworkAccessPolicyEnforcementToHclTerraform(struct!.policyEnforcement),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement",
    },
    restriction_mode: {
      value: cdktf.stringToHclTerraform(struct!.restrictionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyEgressNetworkAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyEgressNetworkAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedInternetDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedInternetDestinations = this._allowedInternetDestinations?.internalValue;
    }
    if (this._allowedStorageDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedStorageDestinations = this._allowedStorageDestinations?.internalValue;
    }
    if (this._policyEnforcement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyEnforcement = this._policyEnforcement?.internalValue;
    }
    if (this._restrictionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionMode = this._restrictionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountNetworkPolicyEgressNetworkAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedInternetDestinations.internalValue = undefined;
      this._allowedStorageDestinations.internalValue = undefined;
      this._policyEnforcement.internalValue = undefined;
      this._restrictionMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedInternetDestinations.internalValue = value.allowedInternetDestinations;
      this._allowedStorageDestinations.internalValue = value.allowedStorageDestinations;
      this._policyEnforcement.internalValue = value.policyEnforcement;
      this._restrictionMode = value.restrictionMode;
    }
  }

  // allowed_internet_destinations - computed: false, optional: true, required: false
  private _allowedInternetDestinations = new AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList(this, "allowed_internet_destinations", false);
  public get allowedInternetDestinations() {
    return this._allowedInternetDestinations;
  }
  public putAllowedInternetDestinations(value: AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[] | cdktf.IResolvable) {
    this._allowedInternetDestinations.internalValue = value;
  }
  public resetAllowedInternetDestinations() {
    this._allowedInternetDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInternetDestinationsInput() {
    return this._allowedInternetDestinations.internalValue;
  }

  // allowed_storage_destinations - computed: false, optional: true, required: false
  private _allowedStorageDestinations = new AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList(this, "allowed_storage_destinations", false);
  public get allowedStorageDestinations() {
    return this._allowedStorageDestinations;
  }
  public putAllowedStorageDestinations(value: AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[] | cdktf.IResolvable) {
    this._allowedStorageDestinations.internalValue = value;
  }
  public resetAllowedStorageDestinations() {
    this._allowedStorageDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedStorageDestinationsInput() {
    return this._allowedStorageDestinations.internalValue;
  }

  // policy_enforcement - computed: false, optional: true, required: false
  private _policyEnforcement = new AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference(this, "policy_enforcement");
  public get policyEnforcement() {
    return this._policyEnforcement;
  }
  public putPolicyEnforcement(value: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement) {
    this._policyEnforcement.internalValue = value;
  }
  public resetPolicyEnforcement() {
    this._policyEnforcement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEnforcementInput() {
    return this._policyEnforcement.internalValue;
  }

  // restriction_mode - computed: false, optional: false, required: true
  private _restrictionMode?: string; 
  public get restrictionMode() {
    return this.getStringAttribute('restriction_mode');
  }
  public set restrictionMode(value: string) {
    this._restrictionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionModeInput() {
    return this._restrictionMode;
  }
}
export interface AccountNetworkPolicyEgress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#network_access AccountNetworkPolicy#network_access}
  */
  readonly networkAccess?: AccountNetworkPolicyEgressNetworkAccess;
}

export function accountNetworkPolicyEgressToTerraform(struct?: AccountNetworkPolicyEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_access: accountNetworkPolicyEgressNetworkAccessToTerraform(struct!.networkAccess),
  }
}


export function accountNetworkPolicyEgressToHclTerraform(struct?: AccountNetworkPolicyEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_access: {
      value: accountNetworkPolicyEgressNetworkAccessToHclTerraform(struct!.networkAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyEgressNetworkAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyEgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAccess = this._networkAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountNetworkPolicyEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkAccess.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkAccess.internalValue = value.networkAccess;
    }
  }

  // network_access - computed: false, optional: true, required: false
  private _networkAccess = new AccountNetworkPolicyEgressNetworkAccessOutputReference(this, "network_access");
  public get networkAccess() {
    return this._networkAccess;
  }
  public putNetworkAccess(value: AccountNetworkPolicyEgressNetworkAccess) {
    this._networkAccess.internalValue = value;
  }
  public resetNetworkAccess() {
    this._networkAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessInput() {
    return this._networkAccess.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy databricks_account_network_policy}
*/
export class AccountNetworkPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_account_network_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountNetworkPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountNetworkPolicy to import
  * @param importFromId The id of the existing AccountNetworkPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountNetworkPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_network_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/account_network_policy databricks_account_network_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountNetworkPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AccountNetworkPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_account_network_policy',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.94.0',
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
    this._egress.internalValue = config.egress;
    this._networkPolicyId = config.networkPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
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

  // egress - computed: false, optional: true, required: false
  private _egress = new AccountNetworkPolicyEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }
  public putEgress(value: AccountNetworkPolicyEgress) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // network_policy_id - computed: false, optional: true, required: false
  private _networkPolicyId?: string; 
  public get networkPolicyId() {
    return this.getStringAttribute('network_policy_id');
  }
  public set networkPolicyId(value: string) {
    this._networkPolicyId = value;
  }
  public resetNetworkPolicyId() {
    this._networkPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyIdInput() {
    return this._networkPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      egress: accountNetworkPolicyEgressToTerraform(this._egress.internalValue),
      network_policy_id: cdktf.stringToTerraform(this._networkPolicyId),
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
      egress: {
        value: accountNetworkPolicyEgressToHclTerraform(this._egress.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountNetworkPolicyEgress",
      },
      network_policy_id: {
        value: cdktf.stringToHclTerraform(this._networkPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
