/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwsNetworkConnectivityConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#account_id MwsNetworkConnectivityConfig#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#creation_time MwsNetworkConnectivityConfig#creation_time}
  */
  readonly creationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#id MwsNetworkConnectivityConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#name MwsNetworkConnectivityConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#network_connectivity_config_id MwsNetworkConnectivityConfig#network_connectivity_config_id}
  */
  readonly networkConnectivityConfigId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#region MwsNetworkConnectivityConfig#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#updated_time MwsNetworkConnectivityConfig#updated_time}
  */
  readonly updatedTime?: number;
  /**
  * egress_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#egress_config MwsNetworkConnectivityConfig#egress_config}
  */
  readonly egressConfig?: MwsNetworkConnectivityConfigEgressConfig;
}
export interface MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#cidr_blocks MwsNetworkConnectivityConfig#cidr_blocks}
  */
  readonly cidrBlocks?: string[];
}

export function mwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleToTerraform(struct?: MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference | MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function mwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleToHclTerraform(struct?: MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference | MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrBlocks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: true, required: false
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}
export interface MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#subnets MwsNetworkConnectivityConfig#subnets}
  */
  readonly subnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#target_region MwsNetworkConnectivityConfig#target_region}
  */
  readonly targetRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#target_services MwsNetworkConnectivityConfig#target_services}
  */
  readonly targetServices?: string[];
}

export function mwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleToTerraform(struct?: MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference | MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
    target_region: cdktf.stringToTerraform(struct!.targetRegion),
    target_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetServices),
  }
}


export function mwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleToHclTerraform(struct?: MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference | MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_region: {
      value: cdktf.stringToHclTerraform(struct!.targetRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    if (this._targetRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRegion = this._targetRegion;
    }
    if (this._targetServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetServices = this._targetServices;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnets = undefined;
      this._targetRegion = undefined;
      this._targetServices = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnets = value.subnets;
      this._targetRegion = value.targetRegion;
      this._targetServices = value.targetServices;
    }
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // target_region - computed: false, optional: true, required: false
  private _targetRegion?: string; 
  public get targetRegion() {
    return this.getStringAttribute('target_region');
  }
  public set targetRegion(value: string) {
    this._targetRegion = value;
  }
  public resetTargetRegion() {
    this._targetRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion;
  }

  // target_services - computed: false, optional: true, required: false
  private _targetServices?: string[]; 
  public get targetServices() {
    return this.getListAttribute('target_services');
  }
  public set targetServices(value: string[]) {
    this._targetServices = value;
  }
  public resetTargetServices() {
    this._targetServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServicesInput() {
    return this._targetServices;
  }
}
export interface MwsNetworkConnectivityConfigEgressConfigDefaultRules {
  /**
  * aws_stable_ip_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#aws_stable_ip_rule MwsNetworkConnectivityConfig#aws_stable_ip_rule}
  */
  readonly awsStableIpRule?: MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule;
  /**
  * azure_service_endpoint_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#azure_service_endpoint_rule MwsNetworkConnectivityConfig#azure_service_endpoint_rule}
  */
  readonly azureServiceEndpointRule?: MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule;
}

export function mwsNetworkConnectivityConfigEgressConfigDefaultRulesToTerraform(struct?: MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference | MwsNetworkConnectivityConfigEgressConfigDefaultRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_stable_ip_rule: mwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleToTerraform(struct!.awsStableIpRule),
    azure_service_endpoint_rule: mwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleToTerraform(struct!.azureServiceEndpointRule),
  }
}


export function mwsNetworkConnectivityConfigEgressConfigDefaultRulesToHclTerraform(struct?: MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference | MwsNetworkConnectivityConfigEgressConfigDefaultRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_stable_ip_rule: {
      value: mwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleToHclTerraform(struct!.awsStableIpRule),
      isBlock: true,
      type: "list",
      storageClassType: "MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleList",
    },
    azure_service_endpoint_rule: {
      value: mwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleToHclTerraform(struct!.azureServiceEndpointRule),
      isBlock: true,
      type: "list",
      storageClassType: "MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsNetworkConnectivityConfigEgressConfigDefaultRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsStableIpRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsStableIpRule = this._awsStableIpRule?.internalValue;
    }
    if (this._azureServiceEndpointRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureServiceEndpointRule = this._azureServiceEndpointRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsNetworkConnectivityConfigEgressConfigDefaultRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsStableIpRule.internalValue = undefined;
      this._azureServiceEndpointRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsStableIpRule.internalValue = value.awsStableIpRule;
      this._azureServiceEndpointRule.internalValue = value.azureServiceEndpointRule;
    }
  }

  // aws_stable_ip_rule - computed: false, optional: true, required: false
  private _awsStableIpRule = new MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference(this, "aws_stable_ip_rule");
  public get awsStableIpRule() {
    return this._awsStableIpRule;
  }
  public putAwsStableIpRule(value: MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule) {
    this._awsStableIpRule.internalValue = value;
  }
  public resetAwsStableIpRule() {
    this._awsStableIpRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStableIpRuleInput() {
    return this._awsStableIpRule.internalValue;
  }

  // azure_service_endpoint_rule - computed: false, optional: true, required: false
  private _azureServiceEndpointRule = new MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference(this, "azure_service_endpoint_rule");
  public get azureServiceEndpointRule() {
    return this._azureServiceEndpointRule;
  }
  public putAzureServiceEndpointRule(value: MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule) {
    this._azureServiceEndpointRule.internalValue = value;
  }
  public resetAzureServiceEndpointRule() {
    this._azureServiceEndpointRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureServiceEndpointRuleInput() {
    return this._azureServiceEndpointRule.internalValue;
  }
}
export interface MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#account_id MwsNetworkConnectivityConfig#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#connection_state MwsNetworkConnectivityConfig#connection_state}
  */
  readonly connectionState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#creation_time MwsNetworkConnectivityConfig#creation_time}
  */
  readonly creationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#deactivated MwsNetworkConnectivityConfig#deactivated}
  */
  readonly deactivated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#deactivated_at MwsNetworkConnectivityConfig#deactivated_at}
  */
  readonly deactivatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#domain_names MwsNetworkConnectivityConfig#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#enabled MwsNetworkConnectivityConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#endpoint_service MwsNetworkConnectivityConfig#endpoint_service}
  */
  readonly endpointService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#network_connectivity_config_id MwsNetworkConnectivityConfig#network_connectivity_config_id}
  */
  readonly networkConnectivityConfigId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#resource_names MwsNetworkConnectivityConfig#resource_names}
  */
  readonly resourceNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#rule_id MwsNetworkConnectivityConfig#rule_id}
  */
  readonly ruleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#updated_time MwsNetworkConnectivityConfig#updated_time}
  */
  readonly updatedTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#vpc_endpoint_id MwsNetworkConnectivityConfig#vpc_endpoint_id}
  */
  readonly vpcEndpointId?: string;
}

export function mwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesToTerraform(struct?: MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    connection_state: cdktf.stringToTerraform(struct!.connectionState),
    creation_time: cdktf.numberToTerraform(struct!.creationTime),
    deactivated: cdktf.booleanToTerraform(struct!.deactivated),
    deactivated_at: cdktf.numberToTerraform(struct!.deactivatedAt),
    domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainNames),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    endpoint_service: cdktf.stringToTerraform(struct!.endpointService),
    network_connectivity_config_id: cdktf.stringToTerraform(struct!.networkConnectivityConfigId),
    resource_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceNames),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    updated_time: cdktf.numberToTerraform(struct!.updatedTime),
    vpc_endpoint_id: cdktf.stringToTerraform(struct!.vpcEndpointId),
  }
}


export function mwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesToHclTerraform(struct?: MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_state: {
      value: cdktf.stringToHclTerraform(struct!.connectionState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creation_time: {
      value: cdktf.numberToHclTerraform(struct!.creationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deactivated: {
      value: cdktf.booleanToHclTerraform(struct!.deactivated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deactivated_at: {
      value: cdktf.numberToHclTerraform(struct!.deactivatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_service: {
      value: cdktf.stringToHclTerraform(struct!.endpointService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_connectivity_config_id: {
      value: cdktf.stringToHclTerraform(struct!.networkConnectivityConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_time: {
      value: cdktf.numberToHclTerraform(struct!.updatedTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._connectionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionState = this._connectionState;
    }
    if (this._creationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationTime = this._creationTime;
    }
    if (this._deactivated !== undefined) {
      hasAnyValues = true;
      internalValueResult.deactivated = this._deactivated;
    }
    if (this._deactivatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.deactivatedAt = this._deactivatedAt;
    }
    if (this._domainNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNames = this._domainNames;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._endpointService !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointService = this._endpointService;
    }
    if (this._networkConnectivityConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConnectivityConfigId = this._networkConnectivityConfigId;
    }
    if (this._resourceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNames = this._resourceNames;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._updatedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedTime = this._updatedTime;
    }
    if (this._vpcEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointId = this._vpcEndpointId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._connectionState = undefined;
      this._creationTime = undefined;
      this._deactivated = undefined;
      this._deactivatedAt = undefined;
      this._domainNames = undefined;
      this._enabled = undefined;
      this._endpointService = undefined;
      this._networkConnectivityConfigId = undefined;
      this._resourceNames = undefined;
      this._ruleId = undefined;
      this._updatedTime = undefined;
      this._vpcEndpointId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._connectionState = value.connectionState;
      this._creationTime = value.creationTime;
      this._deactivated = value.deactivated;
      this._deactivatedAt = value.deactivatedAt;
      this._domainNames = value.domainNames;
      this._enabled = value.enabled;
      this._endpointService = value.endpointService;
      this._networkConnectivityConfigId = value.networkConnectivityConfigId;
      this._resourceNames = value.resourceNames;
      this._ruleId = value.ruleId;
      this._updatedTime = value.updatedTime;
      this._vpcEndpointId = value.vpcEndpointId;
    }
  }

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

  // connection_state - computed: false, optional: true, required: false
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

  // creation_time - computed: false, optional: true, required: false
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

  // domain_names - computed: false, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

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

  // endpoint_service - computed: false, optional: true, required: false
  private _endpointService?: string; 
  public get endpointService() {
    return this.getStringAttribute('endpoint_service');
  }
  public set endpointService(value: string) {
    this._endpointService = value;
  }
  public resetEndpointService() {
    this._endpointService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointServiceInput() {
    return this._endpointService;
  }

  // network_connectivity_config_id - computed: false, optional: true, required: false
  private _networkConnectivityConfigId?: string; 
  public get networkConnectivityConfigId() {
    return this.getStringAttribute('network_connectivity_config_id');
  }
  public set networkConnectivityConfigId(value: string) {
    this._networkConnectivityConfigId = value;
  }
  public resetNetworkConnectivityConfigId() {
    this._networkConnectivityConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectivityConfigIdInput() {
    return this._networkConnectivityConfigId;
  }

  // resource_names - computed: false, optional: true, required: false
  private _resourceNames?: string[]; 
  public get resourceNames() {
    return this.getListAttribute('resource_names');
  }
  public set resourceNames(value: string[]) {
    this._resourceNames = value;
  }
  public resetResourceNames() {
    this._resourceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamesInput() {
    return this._resourceNames;
  }

  // rule_id - computed: false, optional: true, required: false
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

  // updated_time - computed: false, optional: true, required: false
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

  // vpc_endpoint_id - computed: false, optional: true, required: false
  private _vpcEndpointId?: string; 
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  public resetVpcEndpointId() {
    this._vpcEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }
}

export class MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList extends cdktf.ComplexList {
  public internalValue? : MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules[] | cdktf.IResolvable

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
  public get(index: number): MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference {
    return new MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#connection_state MwsNetworkConnectivityConfig#connection_state}
  */
  readonly connectionState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#creation_time MwsNetworkConnectivityConfig#creation_time}
  */
  readonly creationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#deactivated MwsNetworkConnectivityConfig#deactivated}
  */
  readonly deactivated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#deactivated_at MwsNetworkConnectivityConfig#deactivated_at}
  */
  readonly deactivatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#domain_names MwsNetworkConnectivityConfig#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#endpoint_name MwsNetworkConnectivityConfig#endpoint_name}
  */
  readonly endpointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#group_id MwsNetworkConnectivityConfig#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#network_connectivity_config_id MwsNetworkConnectivityConfig#network_connectivity_config_id}
  */
  readonly networkConnectivityConfigId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#resource_id MwsNetworkConnectivityConfig#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#rule_id MwsNetworkConnectivityConfig#rule_id}
  */
  readonly ruleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#updated_time MwsNetworkConnectivityConfig#updated_time}
  */
  readonly updatedTime?: number;
}

export function mwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesToTerraform(struct?: MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_state: cdktf.stringToTerraform(struct!.connectionState),
    creation_time: cdktf.numberToTerraform(struct!.creationTime),
    deactivated: cdktf.booleanToTerraform(struct!.deactivated),
    deactivated_at: cdktf.numberToTerraform(struct!.deactivatedAt),
    domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainNames),
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    network_connectivity_config_id: cdktf.stringToTerraform(struct!.networkConnectivityConfigId),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    updated_time: cdktf.numberToTerraform(struct!.updatedTime),
  }
}


export function mwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesToHclTerraform(struct?: MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_state: {
      value: cdktf.stringToHclTerraform(struct!.connectionState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creation_time: {
      value: cdktf.numberToHclTerraform(struct!.creationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deactivated: {
      value: cdktf.booleanToHclTerraform(struct!.deactivated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deactivated_at: {
      value: cdktf.numberToHclTerraform(struct!.deactivatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_connectivity_config_id: {
      value: cdktf.stringToHclTerraform(struct!.networkConnectivityConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_time: {
      value: cdktf.numberToHclTerraform(struct!.updatedTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionState = this._connectionState;
    }
    if (this._creationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationTime = this._creationTime;
    }
    if (this._deactivated !== undefined) {
      hasAnyValues = true;
      internalValueResult.deactivated = this._deactivated;
    }
    if (this._deactivatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.deactivatedAt = this._deactivatedAt;
    }
    if (this._domainNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNames = this._domainNames;
    }
    if (this._endpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointName = this._endpointName;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._networkConnectivityConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConnectivityConfigId = this._networkConnectivityConfigId;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._updatedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedTime = this._updatedTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionState = undefined;
      this._creationTime = undefined;
      this._deactivated = undefined;
      this._deactivatedAt = undefined;
      this._domainNames = undefined;
      this._endpointName = undefined;
      this._groupId = undefined;
      this._networkConnectivityConfigId = undefined;
      this._resourceId = undefined;
      this._ruleId = undefined;
      this._updatedTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionState = value.connectionState;
      this._creationTime = value.creationTime;
      this._deactivated = value.deactivated;
      this._deactivatedAt = value.deactivatedAt;
      this._domainNames = value.domainNames;
      this._endpointName = value.endpointName;
      this._groupId = value.groupId;
      this._networkConnectivityConfigId = value.networkConnectivityConfigId;
      this._resourceId = value.resourceId;
      this._ruleId = value.ruleId;
      this._updatedTime = value.updatedTime;
    }
  }

  // connection_state - computed: false, optional: true, required: false
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

  // creation_time - computed: false, optional: true, required: false
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

  // domain_names - computed: false, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // endpoint_name - computed: false, optional: true, required: false
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

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // network_connectivity_config_id - computed: false, optional: true, required: false
  private _networkConnectivityConfigId?: string; 
  public get networkConnectivityConfigId() {
    return this.getStringAttribute('network_connectivity_config_id');
  }
  public set networkConnectivityConfigId(value: string) {
    this._networkConnectivityConfigId = value;
  }
  public resetNetworkConnectivityConfigId() {
    this._networkConnectivityConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectivityConfigIdInput() {
    return this._networkConnectivityConfigId;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // rule_id - computed: false, optional: true, required: false
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

  // updated_time - computed: false, optional: true, required: false
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
}

export class MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList extends cdktf.ComplexList {
  public internalValue? : MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules[] | cdktf.IResolvable

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
  public get(index: number): MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference {
    return new MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MwsNetworkConnectivityConfigEgressConfigTargetRules {
  /**
  * aws_private_endpoint_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#aws_private_endpoint_rules MwsNetworkConnectivityConfig#aws_private_endpoint_rules}
  */
  readonly awsPrivateEndpointRules?: MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules[] | cdktf.IResolvable;
  /**
  * azure_private_endpoint_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#azure_private_endpoint_rules MwsNetworkConnectivityConfig#azure_private_endpoint_rules}
  */
  readonly azurePrivateEndpointRules?: MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules[] | cdktf.IResolvable;
}

export function mwsNetworkConnectivityConfigEgressConfigTargetRulesToTerraform(struct?: MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference | MwsNetworkConnectivityConfigEgressConfigTargetRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_private_endpoint_rules: cdktf.listMapper(mwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesToTerraform, true)(struct!.awsPrivateEndpointRules),
    azure_private_endpoint_rules: cdktf.listMapper(mwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesToTerraform, true)(struct!.azurePrivateEndpointRules),
  }
}


export function mwsNetworkConnectivityConfigEgressConfigTargetRulesToHclTerraform(struct?: MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference | MwsNetworkConnectivityConfigEgressConfigTargetRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_private_endpoint_rules: {
      value: cdktf.listMapperHcl(mwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesToHclTerraform, true)(struct!.awsPrivateEndpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList",
    },
    azure_private_endpoint_rules: {
      value: cdktf.listMapperHcl(mwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesToHclTerraform, true)(struct!.azurePrivateEndpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsNetworkConnectivityConfigEgressConfigTargetRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsPrivateEndpointRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsPrivateEndpointRules = this._awsPrivateEndpointRules?.internalValue;
    }
    if (this._azurePrivateEndpointRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurePrivateEndpointRules = this._azurePrivateEndpointRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsNetworkConnectivityConfigEgressConfigTargetRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsPrivateEndpointRules.internalValue = undefined;
      this._azurePrivateEndpointRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsPrivateEndpointRules.internalValue = value.awsPrivateEndpointRules;
      this._azurePrivateEndpointRules.internalValue = value.azurePrivateEndpointRules;
    }
  }

  // aws_private_endpoint_rules - computed: false, optional: true, required: false
  private _awsPrivateEndpointRules = new MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList(this, "aws_private_endpoint_rules", false);
  public get awsPrivateEndpointRules() {
    return this._awsPrivateEndpointRules;
  }
  public putAwsPrivateEndpointRules(value: MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules[] | cdktf.IResolvable) {
    this._awsPrivateEndpointRules.internalValue = value;
  }
  public resetAwsPrivateEndpointRules() {
    this._awsPrivateEndpointRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPrivateEndpointRulesInput() {
    return this._awsPrivateEndpointRules.internalValue;
  }

  // azure_private_endpoint_rules - computed: false, optional: true, required: false
  private _azurePrivateEndpointRules = new MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList(this, "azure_private_endpoint_rules", false);
  public get azurePrivateEndpointRules() {
    return this._azurePrivateEndpointRules;
  }
  public putAzurePrivateEndpointRules(value: MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules[] | cdktf.IResolvable) {
    this._azurePrivateEndpointRules.internalValue = value;
  }
  public resetAzurePrivateEndpointRules() {
    this._azurePrivateEndpointRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePrivateEndpointRulesInput() {
    return this._azurePrivateEndpointRules.internalValue;
  }
}
export interface MwsNetworkConnectivityConfigEgressConfig {
  /**
  * default_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#default_rules MwsNetworkConnectivityConfig#default_rules}
  */
  readonly defaultRules?: MwsNetworkConnectivityConfigEgressConfigDefaultRules;
  /**
  * target_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#target_rules MwsNetworkConnectivityConfig#target_rules}
  */
  readonly targetRules?: MwsNetworkConnectivityConfigEgressConfigTargetRules;
}

export function mwsNetworkConnectivityConfigEgressConfigToTerraform(struct?: MwsNetworkConnectivityConfigEgressConfigOutputReference | MwsNetworkConnectivityConfigEgressConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_rules: mwsNetworkConnectivityConfigEgressConfigDefaultRulesToTerraform(struct!.defaultRules),
    target_rules: mwsNetworkConnectivityConfigEgressConfigTargetRulesToTerraform(struct!.targetRules),
  }
}


export function mwsNetworkConnectivityConfigEgressConfigToHclTerraform(struct?: MwsNetworkConnectivityConfigEgressConfigOutputReference | MwsNetworkConnectivityConfigEgressConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_rules: {
      value: mwsNetworkConnectivityConfigEgressConfigDefaultRulesToHclTerraform(struct!.defaultRules),
      isBlock: true,
      type: "list",
      storageClassType: "MwsNetworkConnectivityConfigEgressConfigDefaultRulesList",
    },
    target_rules: {
      value: mwsNetworkConnectivityConfigEgressConfigTargetRulesToHclTerraform(struct!.targetRules),
      isBlock: true,
      type: "list",
      storageClassType: "MwsNetworkConnectivityConfigEgressConfigTargetRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsNetworkConnectivityConfigEgressConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsNetworkConnectivityConfigEgressConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRules = this._defaultRules?.internalValue;
    }
    if (this._targetRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRules = this._targetRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsNetworkConnectivityConfigEgressConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultRules.internalValue = undefined;
      this._targetRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultRules.internalValue = value.defaultRules;
      this._targetRules.internalValue = value.targetRules;
    }
  }

  // default_rules - computed: false, optional: true, required: false
  private _defaultRules = new MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference(this, "default_rules");
  public get defaultRules() {
    return this._defaultRules;
  }
  public putDefaultRules(value: MwsNetworkConnectivityConfigEgressConfigDefaultRules) {
    this._defaultRules.internalValue = value;
  }
  public resetDefaultRules() {
    this._defaultRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRulesInput() {
    return this._defaultRules.internalValue;
  }

  // target_rules - computed: false, optional: true, required: false
  private _targetRules = new MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference(this, "target_rules");
  public get targetRules() {
    return this._targetRules;
  }
  public putTargetRules(value: MwsNetworkConnectivityConfigEgressConfigTargetRules) {
    this._targetRules.internalValue = value;
  }
  public resetTargetRules() {
    this._targetRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRulesInput() {
    return this._targetRules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config databricks_mws_network_connectivity_config}
*/
export class MwsNetworkConnectivityConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mws_network_connectivity_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MwsNetworkConnectivityConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MwsNetworkConnectivityConfig to import
  * @param importFromId The id of the existing MwsNetworkConnectivityConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MwsNetworkConnectivityConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_mws_network_connectivity_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/mws_network_connectivity_config databricks_mws_network_connectivity_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MwsNetworkConnectivityConfigConfig
  */
  public constructor(scope: Construct, id: string, config: MwsNetworkConnectivityConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mws_network_connectivity_config',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.85.0',
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
    this._name = config.name;
    this._networkConnectivityConfigId = config.networkConnectivityConfigId;
    this._region = config.region;
    this._updatedTime = config.updatedTime;
    this._egressConfig.internalValue = config.egressConfig;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_connectivity_config_id - computed: true, optional: true, required: false
  private _networkConnectivityConfigId?: string; 
  public get networkConnectivityConfigId() {
    return this.getStringAttribute('network_connectivity_config_id');
  }
  public set networkConnectivityConfigId(value: string) {
    this._networkConnectivityConfigId = value;
  }
  public resetNetworkConnectivityConfigId() {
    this._networkConnectivityConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectivityConfigIdInput() {
    return this._networkConnectivityConfigId;
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

  // egress_config - computed: false, optional: true, required: false
  private _egressConfig = new MwsNetworkConnectivityConfigEgressConfigOutputReference(this, "egress_config");
  public get egressConfig() {
    return this._egressConfig;
  }
  public putEgressConfig(value: MwsNetworkConnectivityConfigEgressConfig) {
    this._egressConfig.internalValue = value;
  }
  public resetEgressConfig() {
    this._egressConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressConfigInput() {
    return this._egressConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      creation_time: cdktf.numberToTerraform(this._creationTime),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_connectivity_config_id: cdktf.stringToTerraform(this._networkConnectivityConfigId),
      region: cdktf.stringToTerraform(this._region),
      updated_time: cdktf.numberToTerraform(this._updatedTime),
      egress_config: mwsNetworkConnectivityConfigEgressConfigToTerraform(this._egressConfig.internalValue),
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
      creation_time: {
        value: cdktf.numberToHclTerraform(this._creationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      egress_config: {
        value: mwsNetworkConnectivityConfigEgressConfigToHclTerraform(this._egressConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MwsNetworkConnectivityConfigEgressConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
