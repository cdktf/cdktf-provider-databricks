/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountSettingV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_access_policy AccountSettingV2#aibi_dashboard_embedding_access_policy}
  */
  readonly aibiDashboardEmbeddingAccessPolicy?: AccountSettingV2AibiDashboardEmbeddingAccessPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_approved_domains AccountSettingV2#aibi_dashboard_embedding_approved_domains}
  */
  readonly aibiDashboardEmbeddingApprovedDomains?: AccountSettingV2AibiDashboardEmbeddingApprovedDomains;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#automatic_cluster_update_workspace AccountSettingV2#automatic_cluster_update_workspace}
  */
  readonly automaticClusterUpdateWorkspace?: AccountSettingV2AutomaticClusterUpdateWorkspace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#boolean_val AccountSettingV2#boolean_val}
  */
  readonly booleanVal?: AccountSettingV2BooleanVal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_access_policy AccountSettingV2#effective_aibi_dashboard_embedding_access_policy}
  */
  readonly effectiveAibiDashboardEmbeddingAccessPolicy?: AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_approved_domains AccountSettingV2#effective_aibi_dashboard_embedding_approved_domains}
  */
  readonly effectiveAibiDashboardEmbeddingApprovedDomains?: AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#effective_automatic_cluster_update_workspace AccountSettingV2#effective_automatic_cluster_update_workspace}
  */
  readonly effectiveAutomaticClusterUpdateWorkspace?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#effective_personal_compute AccountSettingV2#effective_personal_compute}
  */
  readonly effectivePersonalCompute?: AccountSettingV2EffectivePersonalCompute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#effective_restrict_workspace_admins AccountSettingV2#effective_restrict_workspace_admins}
  */
  readonly effectiveRestrictWorkspaceAdmins?: AccountSettingV2EffectiveRestrictWorkspaceAdmins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#integer_val AccountSettingV2#integer_val}
  */
  readonly integerVal?: AccountSettingV2IntegerVal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#name AccountSettingV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#personal_compute AccountSettingV2#personal_compute}
  */
  readonly personalCompute?: AccountSettingV2PersonalCompute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#restrict_workspace_admins AccountSettingV2#restrict_workspace_admins}
  */
  readonly restrictWorkspaceAdmins?: AccountSettingV2RestrictWorkspaceAdmins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#string_val AccountSettingV2#string_val}
  */
  readonly stringVal?: AccountSettingV2StringVal;
}
export interface AccountSettingV2AibiDashboardEmbeddingAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#access_policy_type AccountSettingV2#access_policy_type}
  */
  readonly accessPolicyType: string;
}

export function accountSettingV2AibiDashboardEmbeddingAccessPolicyToTerraform(struct?: AccountSettingV2AibiDashboardEmbeddingAccessPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_policy_type: cdktf.stringToTerraform(struct!.accessPolicyType),
  }
}


export function accountSettingV2AibiDashboardEmbeddingAccessPolicyToHclTerraform(struct?: AccountSettingV2AibiDashboardEmbeddingAccessPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_policy_type: {
      value: cdktf.stringToHclTerraform(struct!.accessPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AibiDashboardEmbeddingAccessPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicyType = this._accessPolicyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AibiDashboardEmbeddingAccessPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPolicyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPolicyType = value.accessPolicyType;
    }
  }

  // access_policy_type - computed: false, optional: false, required: true
  private _accessPolicyType?: string; 
  public get accessPolicyType() {
    return this.getStringAttribute('access_policy_type');
  }
  public set accessPolicyType(value: string) {
    this._accessPolicyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyTypeInput() {
    return this._accessPolicyType;
  }
}
export interface AccountSettingV2AibiDashboardEmbeddingApprovedDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#approved_domains AccountSettingV2#approved_domains}
  */
  readonly approvedDomains?: string[];
}

export function accountSettingV2AibiDashboardEmbeddingApprovedDomainsToTerraform(struct?: AccountSettingV2AibiDashboardEmbeddingApprovedDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approved_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.approvedDomains),
  }
}


export function accountSettingV2AibiDashboardEmbeddingApprovedDomainsToHclTerraform(struct?: AccountSettingV2AibiDashboardEmbeddingApprovedDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approved_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.approvedDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AibiDashboardEmbeddingApprovedDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvedDomains = this._approvedDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AibiDashboardEmbeddingApprovedDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvedDomains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approvedDomains = value.approvedDomains;
    }
  }

  // approved_domains - computed: false, optional: true, required: false
  private _approvedDomains?: string[]; 
  public get approvedDomains() {
    return this.getListAttribute('approved_domains');
  }
  public set approvedDomains(value: string[]) {
    this._approvedDomains = value;
  }
  public resetApprovedDomains() {
    this._approvedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedDomainsInput() {
    return this._approvedDomains;
  }
}
export interface AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#forced_for_compliance_mode AccountSettingV2#forced_for_compliance_mode}
  */
  readonly forcedForComplianceMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#unavailable_for_disabled_entitlement AccountSettingV2#unavailable_for_disabled_entitlement}
  */
  readonly unavailableForDisabledEntitlement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#unavailable_for_non_enterprise_tier AccountSettingV2#unavailable_for_non_enterprise_tier}
  */
  readonly unavailableForNonEnterpriseTier?: boolean | cdktf.IResolvable;
}

export function accountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forced_for_compliance_mode: cdktf.booleanToTerraform(struct!.forcedForComplianceMode),
    unavailable_for_disabled_entitlement: cdktf.booleanToTerraform(struct!.unavailableForDisabledEntitlement),
    unavailable_for_non_enterprise_tier: cdktf.booleanToTerraform(struct!.unavailableForNonEnterpriseTier),
  }
}


export function accountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forced_for_compliance_mode: {
      value: cdktf.booleanToHclTerraform(struct!.forcedForComplianceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unavailable_for_disabled_entitlement: {
      value: cdktf.booleanToHclTerraform(struct!.unavailableForDisabledEntitlement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unavailable_for_non_enterprise_tier: {
      value: cdktf.booleanToHclTerraform(struct!.unavailableForNonEnterpriseTier),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forcedForComplianceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcedForComplianceMode = this._forcedForComplianceMode;
    }
    if (this._unavailableForDisabledEntitlement !== undefined) {
      hasAnyValues = true;
      internalValueResult.unavailableForDisabledEntitlement = this._unavailableForDisabledEntitlement;
    }
    if (this._unavailableForNonEnterpriseTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.unavailableForNonEnterpriseTier = this._unavailableForNonEnterpriseTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forcedForComplianceMode = undefined;
      this._unavailableForDisabledEntitlement = undefined;
      this._unavailableForNonEnterpriseTier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forcedForComplianceMode = value.forcedForComplianceMode;
      this._unavailableForDisabledEntitlement = value.unavailableForDisabledEntitlement;
      this._unavailableForNonEnterpriseTier = value.unavailableForNonEnterpriseTier;
    }
  }

  // forced_for_compliance_mode - computed: false, optional: true, required: false
  private _forcedForComplianceMode?: boolean | cdktf.IResolvable; 
  public get forcedForComplianceMode() {
    return this.getBooleanAttribute('forced_for_compliance_mode');
  }
  public set forcedForComplianceMode(value: boolean | cdktf.IResolvable) {
    this._forcedForComplianceMode = value;
  }
  public resetForcedForComplianceMode() {
    this._forcedForComplianceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedForComplianceModeInput() {
    return this._forcedForComplianceMode;
  }

  // unavailable_for_disabled_entitlement - computed: false, optional: true, required: false
  private _unavailableForDisabledEntitlement?: boolean | cdktf.IResolvable; 
  public get unavailableForDisabledEntitlement() {
    return this.getBooleanAttribute('unavailable_for_disabled_entitlement');
  }
  public set unavailableForDisabledEntitlement(value: boolean | cdktf.IResolvable) {
    this._unavailableForDisabledEntitlement = value;
  }
  public resetUnavailableForDisabledEntitlement() {
    this._unavailableForDisabledEntitlement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailableForDisabledEntitlementInput() {
    return this._unavailableForDisabledEntitlement;
  }

  // unavailable_for_non_enterprise_tier - computed: false, optional: true, required: false
  private _unavailableForNonEnterpriseTier?: boolean | cdktf.IResolvable; 
  public get unavailableForNonEnterpriseTier() {
    return this.getBooleanAttribute('unavailable_for_non_enterprise_tier');
  }
  public set unavailableForNonEnterpriseTier(value: boolean | cdktf.IResolvable) {
    this._unavailableForNonEnterpriseTier = value;
  }
  public resetUnavailableForNonEnterpriseTier() {
    this._unavailableForNonEnterpriseTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailableForNonEnterpriseTierInput() {
    return this._unavailableForNonEnterpriseTier;
  }
}
export interface AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#hours AccountSettingV2#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#minutes AccountSettingV2#minutes}
  */
  readonly minutes?: number;
}

export function accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#day_of_week AccountSettingV2#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#frequency AccountSettingV2#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#window_start_time AccountSettingV2#window_start_time}
  */
  readonly windowStartTime?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
}

export function accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    window_start_time: accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct!.windowStartTime),
  }
}


export function accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_start_time: {
      value: accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct!.windowStartTime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._windowStartTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowStartTime = this._windowStartTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._frequency = undefined;
      this._windowStartTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._frequency = value.frequency;
      this._windowStartTime.internalValue = value.windowStartTime;
    }
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // window_start_time - computed: false, optional: true, required: false
  private _windowStartTime = new AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(this, "window_start_time");
  public get windowStartTime() {
    return this._windowStartTime;
  }
  public putWindowStartTime(value: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime) {
    this._windowStartTime.internalValue = value;
  }
  public resetWindowStartTime() {
    this._windowStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowStartTimeInput() {
    return this._windowStartTime.internalValue;
  }
}
export interface AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#week_day_based_schedule AccountSettingV2#week_day_based_schedule}
  */
  readonly weekDayBasedSchedule?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
}

export function accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    week_day_based_schedule: accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct!.weekDayBasedSchedule),
  }
}


export function accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    week_day_based_schedule: {
      value: accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct!.weekDayBasedSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weekDayBasedSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDayBasedSchedule = this._weekDayBasedSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weekDayBasedSchedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weekDayBasedSchedule.internalValue = value.weekDayBasedSchedule;
    }
  }

  // week_day_based_schedule - computed: false, optional: true, required: false
  private _weekDayBasedSchedule = new AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(this, "week_day_based_schedule");
  public get weekDayBasedSchedule() {
    return this._weekDayBasedSchedule;
  }
  public putWeekDayBasedSchedule(value: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule) {
    this._weekDayBasedSchedule.internalValue = value;
  }
  public resetWeekDayBasedSchedule() {
    this._weekDayBasedSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayBasedScheduleInput() {
    return this._weekDayBasedSchedule.internalValue;
  }
}
export interface AccountSettingV2AutomaticClusterUpdateWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#can_toggle AccountSettingV2#can_toggle}
  */
  readonly canToggle?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#enabled AccountSettingV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#enablement_details AccountSettingV2#enablement_details}
  */
  readonly enablementDetails?: AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#maintenance_window AccountSettingV2#maintenance_window}
  */
  readonly maintenanceWindow?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#restart_even_if_no_updates_available AccountSettingV2#restart_even_if_no_updates_available}
  */
  readonly restartEvenIfNoUpdatesAvailable?: boolean | cdktf.IResolvable;
}

export function accountSettingV2AutomaticClusterUpdateWorkspaceToTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_toggle: cdktf.booleanToTerraform(struct!.canToggle),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    enablement_details: accountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct!.enablementDetails),
    maintenance_window: accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    restart_even_if_no_updates_available: cdktf.booleanToTerraform(struct!.restartEvenIfNoUpdatesAvailable),
  }
}


export function accountSettingV2AutomaticClusterUpdateWorkspaceToHclTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_toggle: {
      value: cdktf.booleanToHclTerraform(struct!.canToggle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enablement_details: {
      value: accountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct!.enablementDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails",
    },
    maintenance_window: {
      value: accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow",
    },
    restart_even_if_no_updates_available: {
      value: cdktf.booleanToHclTerraform(struct!.restartEvenIfNoUpdatesAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AutomaticClusterUpdateWorkspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canToggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.canToggle = this._canToggle;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._enablementDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablementDetails = this._enablementDetails?.internalValue;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    if (this._restartEvenIfNoUpdatesAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartEvenIfNoUpdatesAvailable = this._restartEvenIfNoUpdatesAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AutomaticClusterUpdateWorkspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canToggle = undefined;
      this._enabled = undefined;
      this._enablementDetails.internalValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
      this._restartEvenIfNoUpdatesAvailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canToggle = value.canToggle;
      this._enabled = value.enabled;
      this._enablementDetails.internalValue = value.enablementDetails;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
      this._restartEvenIfNoUpdatesAvailable = value.restartEvenIfNoUpdatesAvailable;
    }
  }

  // can_toggle - computed: false, optional: true, required: false
  private _canToggle?: boolean | cdktf.IResolvable; 
  public get canToggle() {
    return this.getBooleanAttribute('can_toggle');
  }
  public set canToggle(value: boolean | cdktf.IResolvable) {
    this._canToggle = value;
  }
  public resetCanToggle() {
    this._canToggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canToggleInput() {
    return this._canToggle;
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

  // enablement_details - computed: false, optional: true, required: false
  private _enablementDetails = new AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(this, "enablement_details");
  public get enablementDetails() {
    return this._enablementDetails;
  }
  public putEnablementDetails(value: AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails) {
    this._enablementDetails.internalValue = value;
  }
  public resetEnablementDetails() {
    this._enablementDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablementDetailsInput() {
    return this._enablementDetails.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // restart_even_if_no_updates_available - computed: false, optional: true, required: false
  private _restartEvenIfNoUpdatesAvailable?: boolean | cdktf.IResolvable; 
  public get restartEvenIfNoUpdatesAvailable() {
    return this.getBooleanAttribute('restart_even_if_no_updates_available');
  }
  public set restartEvenIfNoUpdatesAvailable(value: boolean | cdktf.IResolvable) {
    this._restartEvenIfNoUpdatesAvailable = value;
  }
  public resetRestartEvenIfNoUpdatesAvailable() {
    this._restartEvenIfNoUpdatesAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartEvenIfNoUpdatesAvailableInput() {
    return this._restartEvenIfNoUpdatesAvailable;
  }
}
export interface AccountSettingV2BooleanVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function accountSettingV2BooleanValToTerraform(struct?: AccountSettingV2BooleanVal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function accountSettingV2BooleanValToHclTerraform(struct?: AccountSettingV2BooleanVal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2BooleanValOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2BooleanVal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2BooleanVal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#access_policy_type AccountSettingV2#access_policy_type}
  */
  readonly accessPolicyType: string;
}

export function accountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToTerraform(struct?: AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_policy_type: cdktf.stringToTerraform(struct!.accessPolicyType),
  }
}


export function accountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToHclTerraform(struct?: AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_policy_type: {
      value: cdktf.stringToHclTerraform(struct!.accessPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicyType = this._accessPolicyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPolicyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPolicyType = value.accessPolicyType;
    }
  }

  // access_policy_type - computed: false, optional: false, required: true
  private _accessPolicyType?: string; 
  public get accessPolicyType() {
    return this.getStringAttribute('access_policy_type');
  }
  public set accessPolicyType(value: string) {
    this._accessPolicyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyTypeInput() {
    return this._accessPolicyType;
  }
}
export interface AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#approved_domains AccountSettingV2#approved_domains}
  */
  readonly approvedDomains?: string[];
}

export function accountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToTerraform(struct?: AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approved_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.approvedDomains),
  }
}


export function accountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToHclTerraform(struct?: AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approved_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.approvedDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvedDomains = this._approvedDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvedDomains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approvedDomains = value.approvedDomains;
    }
  }

  // approved_domains - computed: false, optional: true, required: false
  private _approvedDomains?: string[]; 
  public get approvedDomains() {
    return this.getListAttribute('approved_domains');
  }
  public set approvedDomains(value: string[]) {
    this._approvedDomains = value;
  }
  public resetApprovedDomains() {
    this._approvedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedDomainsInput() {
    return this._approvedDomains;
  }
}
export interface AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#forced_for_compliance_mode AccountSettingV2#forced_for_compliance_mode}
  */
  readonly forcedForComplianceMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#unavailable_for_disabled_entitlement AccountSettingV2#unavailable_for_disabled_entitlement}
  */
  readonly unavailableForDisabledEntitlement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#unavailable_for_non_enterprise_tier AccountSettingV2#unavailable_for_non_enterprise_tier}
  */
  readonly unavailableForNonEnterpriseTier?: boolean | cdktf.IResolvable;
}

export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forced_for_compliance_mode: cdktf.booleanToTerraform(struct!.forcedForComplianceMode),
    unavailable_for_disabled_entitlement: cdktf.booleanToTerraform(struct!.unavailableForDisabledEntitlement),
    unavailable_for_non_enterprise_tier: cdktf.booleanToTerraform(struct!.unavailableForNonEnterpriseTier),
  }
}


export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forced_for_compliance_mode: {
      value: cdktf.booleanToHclTerraform(struct!.forcedForComplianceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unavailable_for_disabled_entitlement: {
      value: cdktf.booleanToHclTerraform(struct!.unavailableForDisabledEntitlement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unavailable_for_non_enterprise_tier: {
      value: cdktf.booleanToHclTerraform(struct!.unavailableForNonEnterpriseTier),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forcedForComplianceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcedForComplianceMode = this._forcedForComplianceMode;
    }
    if (this._unavailableForDisabledEntitlement !== undefined) {
      hasAnyValues = true;
      internalValueResult.unavailableForDisabledEntitlement = this._unavailableForDisabledEntitlement;
    }
    if (this._unavailableForNonEnterpriseTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.unavailableForNonEnterpriseTier = this._unavailableForNonEnterpriseTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forcedForComplianceMode = undefined;
      this._unavailableForDisabledEntitlement = undefined;
      this._unavailableForNonEnterpriseTier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forcedForComplianceMode = value.forcedForComplianceMode;
      this._unavailableForDisabledEntitlement = value.unavailableForDisabledEntitlement;
      this._unavailableForNonEnterpriseTier = value.unavailableForNonEnterpriseTier;
    }
  }

  // forced_for_compliance_mode - computed: false, optional: true, required: false
  private _forcedForComplianceMode?: boolean | cdktf.IResolvable; 
  public get forcedForComplianceMode() {
    return this.getBooleanAttribute('forced_for_compliance_mode');
  }
  public set forcedForComplianceMode(value: boolean | cdktf.IResolvable) {
    this._forcedForComplianceMode = value;
  }
  public resetForcedForComplianceMode() {
    this._forcedForComplianceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedForComplianceModeInput() {
    return this._forcedForComplianceMode;
  }

  // unavailable_for_disabled_entitlement - computed: false, optional: true, required: false
  private _unavailableForDisabledEntitlement?: boolean | cdktf.IResolvable; 
  public get unavailableForDisabledEntitlement() {
    return this.getBooleanAttribute('unavailable_for_disabled_entitlement');
  }
  public set unavailableForDisabledEntitlement(value: boolean | cdktf.IResolvable) {
    this._unavailableForDisabledEntitlement = value;
  }
  public resetUnavailableForDisabledEntitlement() {
    this._unavailableForDisabledEntitlement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailableForDisabledEntitlementInput() {
    return this._unavailableForDisabledEntitlement;
  }

  // unavailable_for_non_enterprise_tier - computed: false, optional: true, required: false
  private _unavailableForNonEnterpriseTier?: boolean | cdktf.IResolvable; 
  public get unavailableForNonEnterpriseTier() {
    return this.getBooleanAttribute('unavailable_for_non_enterprise_tier');
  }
  public set unavailableForNonEnterpriseTier(value: boolean | cdktf.IResolvable) {
    this._unavailableForNonEnterpriseTier = value;
  }
  public resetUnavailableForNonEnterpriseTier() {
    this._unavailableForNonEnterpriseTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailableForNonEnterpriseTierInput() {
    return this._unavailableForNonEnterpriseTier;
  }
}
export interface AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#hours AccountSettingV2#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#minutes AccountSettingV2#minutes}
  */
  readonly minutes?: number;
}

export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#day_of_week AccountSettingV2#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#frequency AccountSettingV2#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#window_start_time AccountSettingV2#window_start_time}
  */
  readonly windowStartTime?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
}

export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    window_start_time: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct!.windowStartTime),
  }
}


export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_start_time: {
      value: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct!.windowStartTime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._windowStartTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowStartTime = this._windowStartTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._frequency = undefined;
      this._windowStartTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._frequency = value.frequency;
      this._windowStartTime.internalValue = value.windowStartTime;
    }
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // window_start_time - computed: false, optional: true, required: false
  private _windowStartTime = new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(this, "window_start_time");
  public get windowStartTime() {
    return this._windowStartTime;
  }
  public putWindowStartTime(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime) {
    this._windowStartTime.internalValue = value;
  }
  public resetWindowStartTime() {
    this._windowStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowStartTimeInput() {
    return this._windowStartTime.internalValue;
  }
}
export interface AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#week_day_based_schedule AccountSettingV2#week_day_based_schedule}
  */
  readonly weekDayBasedSchedule?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
}

export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    week_day_based_schedule: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct!.weekDayBasedSchedule),
  }
}


export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    week_day_based_schedule: {
      value: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct!.weekDayBasedSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weekDayBasedSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDayBasedSchedule = this._weekDayBasedSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weekDayBasedSchedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weekDayBasedSchedule.internalValue = value.weekDayBasedSchedule;
    }
  }

  // week_day_based_schedule - computed: false, optional: true, required: false
  private _weekDayBasedSchedule = new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(this, "week_day_based_schedule");
  public get weekDayBasedSchedule() {
    return this._weekDayBasedSchedule;
  }
  public putWeekDayBasedSchedule(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule) {
    this._weekDayBasedSchedule.internalValue = value;
  }
  public resetWeekDayBasedSchedule() {
    this._weekDayBasedSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayBasedScheduleInput() {
    return this._weekDayBasedSchedule.internalValue;
  }
}
export interface AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#can_toggle AccountSettingV2#can_toggle}
  */
  readonly canToggle?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#enabled AccountSettingV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#enablement_details AccountSettingV2#enablement_details}
  */
  readonly enablementDetails?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#maintenance_window AccountSettingV2#maintenance_window}
  */
  readonly maintenanceWindow?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#restart_even_if_no_updates_available AccountSettingV2#restart_even_if_no_updates_available}
  */
  readonly restartEvenIfNoUpdatesAvailable?: boolean | cdktf.IResolvable;
}

export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceToTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_toggle: cdktf.booleanToTerraform(struct!.canToggle),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    enablement_details: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct!.enablementDetails),
    maintenance_window: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    restart_even_if_no_updates_available: cdktf.booleanToTerraform(struct!.restartEvenIfNoUpdatesAvailable),
  }
}


export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceToHclTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_toggle: {
      value: cdktf.booleanToHclTerraform(struct!.canToggle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enablement_details: {
      value: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct!.enablementDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails",
    },
    maintenance_window: {
      value: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow",
    },
    restart_even_if_no_updates_available: {
      value: cdktf.booleanToHclTerraform(struct!.restartEvenIfNoUpdatesAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canToggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.canToggle = this._canToggle;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._enablementDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablementDetails = this._enablementDetails?.internalValue;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    if (this._restartEvenIfNoUpdatesAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartEvenIfNoUpdatesAvailable = this._restartEvenIfNoUpdatesAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canToggle = undefined;
      this._enabled = undefined;
      this._enablementDetails.internalValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
      this._restartEvenIfNoUpdatesAvailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canToggle = value.canToggle;
      this._enabled = value.enabled;
      this._enablementDetails.internalValue = value.enablementDetails;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
      this._restartEvenIfNoUpdatesAvailable = value.restartEvenIfNoUpdatesAvailable;
    }
  }

  // can_toggle - computed: false, optional: true, required: false
  private _canToggle?: boolean | cdktf.IResolvable; 
  public get canToggle() {
    return this.getBooleanAttribute('can_toggle');
  }
  public set canToggle(value: boolean | cdktf.IResolvable) {
    this._canToggle = value;
  }
  public resetCanToggle() {
    this._canToggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canToggleInput() {
    return this._canToggle;
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

  // enablement_details - computed: false, optional: true, required: false
  private _enablementDetails = new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(this, "enablement_details");
  public get enablementDetails() {
    return this._enablementDetails;
  }
  public putEnablementDetails(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails) {
    this._enablementDetails.internalValue = value;
  }
  public resetEnablementDetails() {
    this._enablementDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablementDetailsInput() {
    return this._enablementDetails.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // restart_even_if_no_updates_available - computed: false, optional: true, required: false
  private _restartEvenIfNoUpdatesAvailable?: boolean | cdktf.IResolvable; 
  public get restartEvenIfNoUpdatesAvailable() {
    return this.getBooleanAttribute('restart_even_if_no_updates_available');
  }
  public set restartEvenIfNoUpdatesAvailable(value: boolean | cdktf.IResolvable) {
    this._restartEvenIfNoUpdatesAvailable = value;
  }
  public resetRestartEvenIfNoUpdatesAvailable() {
    this._restartEvenIfNoUpdatesAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartEvenIfNoUpdatesAvailableInput() {
    return this._restartEvenIfNoUpdatesAvailable;
  }
}
export interface AccountSettingV2EffectiveBooleanVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function accountSettingV2EffectiveBooleanValToTerraform(struct?: AccountSettingV2EffectiveBooleanVal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function accountSettingV2EffectiveBooleanValToHclTerraform(struct?: AccountSettingV2EffectiveBooleanVal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveBooleanValOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveBooleanVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveBooleanVal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2EffectiveIntegerVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: number;
}

export function accountSettingV2EffectiveIntegerValToTerraform(struct?: AccountSettingV2EffectiveIntegerVal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function accountSettingV2EffectiveIntegerValToHclTerraform(struct?: AccountSettingV2EffectiveIntegerVal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveIntegerValOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveIntegerVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveIntegerVal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2EffectivePersonalCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: string;
}

export function accountSettingV2EffectivePersonalComputeToTerraform(struct?: AccountSettingV2EffectivePersonalCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function accountSettingV2EffectivePersonalComputeToHclTerraform(struct?: AccountSettingV2EffectivePersonalCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectivePersonalComputeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectivePersonalCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectivePersonalCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2EffectiveRestrictWorkspaceAdmins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#status AccountSettingV2#status}
  */
  readonly status: string;
}

export function accountSettingV2EffectiveRestrictWorkspaceAdminsToTerraform(struct?: AccountSettingV2EffectiveRestrictWorkspaceAdmins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function accountSettingV2EffectiveRestrictWorkspaceAdminsToHclTerraform(struct?: AccountSettingV2EffectiveRestrictWorkspaceAdmins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveRestrictWorkspaceAdmins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveRestrictWorkspaceAdmins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface AccountSettingV2EffectiveStringVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: string;
}

export function accountSettingV2EffectiveStringValToTerraform(struct?: AccountSettingV2EffectiveStringVal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function accountSettingV2EffectiveStringValToHclTerraform(struct?: AccountSettingV2EffectiveStringVal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveStringValOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveStringVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveStringVal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2IntegerVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: number;
}

export function accountSettingV2IntegerValToTerraform(struct?: AccountSettingV2IntegerVal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function accountSettingV2IntegerValToHclTerraform(struct?: AccountSettingV2IntegerVal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2IntegerValOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2IntegerVal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2IntegerVal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2PersonalCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: string;
}

export function accountSettingV2PersonalComputeToTerraform(struct?: AccountSettingV2PersonalCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function accountSettingV2PersonalComputeToHclTerraform(struct?: AccountSettingV2PersonalCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2PersonalComputeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2PersonalCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2PersonalCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2RestrictWorkspaceAdmins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#status AccountSettingV2#status}
  */
  readonly status: string;
}

export function accountSettingV2RestrictWorkspaceAdminsToTerraform(struct?: AccountSettingV2RestrictWorkspaceAdmins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function accountSettingV2RestrictWorkspaceAdminsToHclTerraform(struct?: AccountSettingV2RestrictWorkspaceAdmins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2RestrictWorkspaceAdminsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2RestrictWorkspaceAdmins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2RestrictWorkspaceAdmins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface AccountSettingV2StringVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: string;
}

export function accountSettingV2StringValToTerraform(struct?: AccountSettingV2StringVal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function accountSettingV2StringValToHclTerraform(struct?: AccountSettingV2StringVal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2StringValOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2StringVal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2StringVal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2 databricks_account_setting_v2}
*/
export class AccountSettingV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_account_setting_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountSettingV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountSettingV2 to import
  * @param importFromId The id of the existing AccountSettingV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountSettingV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_setting_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/account_setting_v2 databricks_account_setting_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountSettingV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: AccountSettingV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_account_setting_v2',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.92.0',
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
    this._aibiDashboardEmbeddingAccessPolicy.internalValue = config.aibiDashboardEmbeddingAccessPolicy;
    this._aibiDashboardEmbeddingApprovedDomains.internalValue = config.aibiDashboardEmbeddingApprovedDomains;
    this._automaticClusterUpdateWorkspace.internalValue = config.automaticClusterUpdateWorkspace;
    this._booleanVal.internalValue = config.booleanVal;
    this._effectiveAibiDashboardEmbeddingAccessPolicy.internalValue = config.effectiveAibiDashboardEmbeddingAccessPolicy;
    this._effectiveAibiDashboardEmbeddingApprovedDomains.internalValue = config.effectiveAibiDashboardEmbeddingApprovedDomains;
    this._effectiveAutomaticClusterUpdateWorkspace.internalValue = config.effectiveAutomaticClusterUpdateWorkspace;
    this._effectivePersonalCompute.internalValue = config.effectivePersonalCompute;
    this._effectiveRestrictWorkspaceAdmins.internalValue = config.effectiveRestrictWorkspaceAdmins;
    this._integerVal.internalValue = config.integerVal;
    this._name = config.name;
    this._personalCompute.internalValue = config.personalCompute;
    this._restrictWorkspaceAdmins.internalValue = config.restrictWorkspaceAdmins;
    this._stringVal.internalValue = config.stringVal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aibi_dashboard_embedding_access_policy - computed: false, optional: true, required: false
  private _aibiDashboardEmbeddingAccessPolicy = new AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference(this, "aibi_dashboard_embedding_access_policy");
  public get aibiDashboardEmbeddingAccessPolicy() {
    return this._aibiDashboardEmbeddingAccessPolicy;
  }
  public putAibiDashboardEmbeddingAccessPolicy(value: AccountSettingV2AibiDashboardEmbeddingAccessPolicy) {
    this._aibiDashboardEmbeddingAccessPolicy.internalValue = value;
  }
  public resetAibiDashboardEmbeddingAccessPolicy() {
    this._aibiDashboardEmbeddingAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aibiDashboardEmbeddingAccessPolicyInput() {
    return this._aibiDashboardEmbeddingAccessPolicy.internalValue;
  }

  // aibi_dashboard_embedding_approved_domains - computed: false, optional: true, required: false
  private _aibiDashboardEmbeddingApprovedDomains = new AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference(this, "aibi_dashboard_embedding_approved_domains");
  public get aibiDashboardEmbeddingApprovedDomains() {
    return this._aibiDashboardEmbeddingApprovedDomains;
  }
  public putAibiDashboardEmbeddingApprovedDomains(value: AccountSettingV2AibiDashboardEmbeddingApprovedDomains) {
    this._aibiDashboardEmbeddingApprovedDomains.internalValue = value;
  }
  public resetAibiDashboardEmbeddingApprovedDomains() {
    this._aibiDashboardEmbeddingApprovedDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aibiDashboardEmbeddingApprovedDomainsInput() {
    return this._aibiDashboardEmbeddingApprovedDomains.internalValue;
  }

  // automatic_cluster_update_workspace - computed: false, optional: true, required: false
  private _automaticClusterUpdateWorkspace = new AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference(this, "automatic_cluster_update_workspace");
  public get automaticClusterUpdateWorkspace() {
    return this._automaticClusterUpdateWorkspace;
  }
  public putAutomaticClusterUpdateWorkspace(value: AccountSettingV2AutomaticClusterUpdateWorkspace) {
    this._automaticClusterUpdateWorkspace.internalValue = value;
  }
  public resetAutomaticClusterUpdateWorkspace() {
    this._automaticClusterUpdateWorkspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticClusterUpdateWorkspaceInput() {
    return this._automaticClusterUpdateWorkspace.internalValue;
  }

  // boolean_val - computed: false, optional: true, required: false
  private _booleanVal = new AccountSettingV2BooleanValOutputReference(this, "boolean_val");
  public get booleanVal() {
    return this._booleanVal;
  }
  public putBooleanVal(value: AccountSettingV2BooleanVal) {
    this._booleanVal.internalValue = value;
  }
  public resetBooleanVal() {
    this._booleanVal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValInput() {
    return this._booleanVal.internalValue;
  }

  // effective_aibi_dashboard_embedding_access_policy - computed: false, optional: true, required: false
  private _effectiveAibiDashboardEmbeddingAccessPolicy = new AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference(this, "effective_aibi_dashboard_embedding_access_policy");
  public get effectiveAibiDashboardEmbeddingAccessPolicy() {
    return this._effectiveAibiDashboardEmbeddingAccessPolicy;
  }
  public putEffectiveAibiDashboardEmbeddingAccessPolicy(value: AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy) {
    this._effectiveAibiDashboardEmbeddingAccessPolicy.internalValue = value;
  }
  public resetEffectiveAibiDashboardEmbeddingAccessPolicy() {
    this._effectiveAibiDashboardEmbeddingAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveAibiDashboardEmbeddingAccessPolicyInput() {
    return this._effectiveAibiDashboardEmbeddingAccessPolicy.internalValue;
  }

  // effective_aibi_dashboard_embedding_approved_domains - computed: false, optional: true, required: false
  private _effectiveAibiDashboardEmbeddingApprovedDomains = new AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference(this, "effective_aibi_dashboard_embedding_approved_domains");
  public get effectiveAibiDashboardEmbeddingApprovedDomains() {
    return this._effectiveAibiDashboardEmbeddingApprovedDomains;
  }
  public putEffectiveAibiDashboardEmbeddingApprovedDomains(value: AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains) {
    this._effectiveAibiDashboardEmbeddingApprovedDomains.internalValue = value;
  }
  public resetEffectiveAibiDashboardEmbeddingApprovedDomains() {
    this._effectiveAibiDashboardEmbeddingApprovedDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveAibiDashboardEmbeddingApprovedDomainsInput() {
    return this._effectiveAibiDashboardEmbeddingApprovedDomains.internalValue;
  }

  // effective_automatic_cluster_update_workspace - computed: false, optional: true, required: false
  private _effectiveAutomaticClusterUpdateWorkspace = new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference(this, "effective_automatic_cluster_update_workspace");
  public get effectiveAutomaticClusterUpdateWorkspace() {
    return this._effectiveAutomaticClusterUpdateWorkspace;
  }
  public putEffectiveAutomaticClusterUpdateWorkspace(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace) {
    this._effectiveAutomaticClusterUpdateWorkspace.internalValue = value;
  }
  public resetEffectiveAutomaticClusterUpdateWorkspace() {
    this._effectiveAutomaticClusterUpdateWorkspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveAutomaticClusterUpdateWorkspaceInput() {
    return this._effectiveAutomaticClusterUpdateWorkspace.internalValue;
  }

  // effective_boolean_val - computed: true, optional: false, required: false
  private _effectiveBooleanVal = new AccountSettingV2EffectiveBooleanValOutputReference(this, "effective_boolean_val");
  public get effectiveBooleanVal() {
    return this._effectiveBooleanVal;
  }

  // effective_integer_val - computed: true, optional: false, required: false
  private _effectiveIntegerVal = new AccountSettingV2EffectiveIntegerValOutputReference(this, "effective_integer_val");
  public get effectiveIntegerVal() {
    return this._effectiveIntegerVal;
  }

  // effective_personal_compute - computed: false, optional: true, required: false
  private _effectivePersonalCompute = new AccountSettingV2EffectivePersonalComputeOutputReference(this, "effective_personal_compute");
  public get effectivePersonalCompute() {
    return this._effectivePersonalCompute;
  }
  public putEffectivePersonalCompute(value: AccountSettingV2EffectivePersonalCompute) {
    this._effectivePersonalCompute.internalValue = value;
  }
  public resetEffectivePersonalCompute() {
    this._effectivePersonalCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectivePersonalComputeInput() {
    return this._effectivePersonalCompute.internalValue;
  }

  // effective_restrict_workspace_admins - computed: false, optional: true, required: false
  private _effectiveRestrictWorkspaceAdmins = new AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference(this, "effective_restrict_workspace_admins");
  public get effectiveRestrictWorkspaceAdmins() {
    return this._effectiveRestrictWorkspaceAdmins;
  }
  public putEffectiveRestrictWorkspaceAdmins(value: AccountSettingV2EffectiveRestrictWorkspaceAdmins) {
    this._effectiveRestrictWorkspaceAdmins.internalValue = value;
  }
  public resetEffectiveRestrictWorkspaceAdmins() {
    this._effectiveRestrictWorkspaceAdmins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveRestrictWorkspaceAdminsInput() {
    return this._effectiveRestrictWorkspaceAdmins.internalValue;
  }

  // effective_string_val - computed: true, optional: false, required: false
  private _effectiveStringVal = new AccountSettingV2EffectiveStringValOutputReference(this, "effective_string_val");
  public get effectiveStringVal() {
    return this._effectiveStringVal;
  }

  // integer_val - computed: false, optional: true, required: false
  private _integerVal = new AccountSettingV2IntegerValOutputReference(this, "integer_val");
  public get integerVal() {
    return this._integerVal;
  }
  public putIntegerVal(value: AccountSettingV2IntegerVal) {
    this._integerVal.internalValue = value;
  }
  public resetIntegerVal() {
    this._integerVal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValInput() {
    return this._integerVal.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // personal_compute - computed: false, optional: true, required: false
  private _personalCompute = new AccountSettingV2PersonalComputeOutputReference(this, "personal_compute");
  public get personalCompute() {
    return this._personalCompute;
  }
  public putPersonalCompute(value: AccountSettingV2PersonalCompute) {
    this._personalCompute.internalValue = value;
  }
  public resetPersonalCompute() {
    this._personalCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalComputeInput() {
    return this._personalCompute.internalValue;
  }

  // restrict_workspace_admins - computed: false, optional: true, required: false
  private _restrictWorkspaceAdmins = new AccountSettingV2RestrictWorkspaceAdminsOutputReference(this, "restrict_workspace_admins");
  public get restrictWorkspaceAdmins() {
    return this._restrictWorkspaceAdmins;
  }
  public putRestrictWorkspaceAdmins(value: AccountSettingV2RestrictWorkspaceAdmins) {
    this._restrictWorkspaceAdmins.internalValue = value;
  }
  public resetRestrictWorkspaceAdmins() {
    this._restrictWorkspaceAdmins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictWorkspaceAdminsInput() {
    return this._restrictWorkspaceAdmins.internalValue;
  }

  // string_val - computed: false, optional: true, required: false
  private _stringVal = new AccountSettingV2StringValOutputReference(this, "string_val");
  public get stringVal() {
    return this._stringVal;
  }
  public putStringVal(value: AccountSettingV2StringVal) {
    this._stringVal.internalValue = value;
  }
  public resetStringVal() {
    this._stringVal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValInput() {
    return this._stringVal.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aibi_dashboard_embedding_access_policy: accountSettingV2AibiDashboardEmbeddingAccessPolicyToTerraform(this._aibiDashboardEmbeddingAccessPolicy.internalValue),
      aibi_dashboard_embedding_approved_domains: accountSettingV2AibiDashboardEmbeddingApprovedDomainsToTerraform(this._aibiDashboardEmbeddingApprovedDomains.internalValue),
      automatic_cluster_update_workspace: accountSettingV2AutomaticClusterUpdateWorkspaceToTerraform(this._automaticClusterUpdateWorkspace.internalValue),
      boolean_val: accountSettingV2BooleanValToTerraform(this._booleanVal.internalValue),
      effective_aibi_dashboard_embedding_access_policy: accountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToTerraform(this._effectiveAibiDashboardEmbeddingAccessPolicy.internalValue),
      effective_aibi_dashboard_embedding_approved_domains: accountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToTerraform(this._effectiveAibiDashboardEmbeddingApprovedDomains.internalValue),
      effective_automatic_cluster_update_workspace: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceToTerraform(this._effectiveAutomaticClusterUpdateWorkspace.internalValue),
      effective_personal_compute: accountSettingV2EffectivePersonalComputeToTerraform(this._effectivePersonalCompute.internalValue),
      effective_restrict_workspace_admins: accountSettingV2EffectiveRestrictWorkspaceAdminsToTerraform(this._effectiveRestrictWorkspaceAdmins.internalValue),
      integer_val: accountSettingV2IntegerValToTerraform(this._integerVal.internalValue),
      name: cdktf.stringToTerraform(this._name),
      personal_compute: accountSettingV2PersonalComputeToTerraform(this._personalCompute.internalValue),
      restrict_workspace_admins: accountSettingV2RestrictWorkspaceAdminsToTerraform(this._restrictWorkspaceAdmins.internalValue),
      string_val: accountSettingV2StringValToTerraform(this._stringVal.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aibi_dashboard_embedding_access_policy: {
        value: accountSettingV2AibiDashboardEmbeddingAccessPolicyToHclTerraform(this._aibiDashboardEmbeddingAccessPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2AibiDashboardEmbeddingAccessPolicy",
      },
      aibi_dashboard_embedding_approved_domains: {
        value: accountSettingV2AibiDashboardEmbeddingApprovedDomainsToHclTerraform(this._aibiDashboardEmbeddingApprovedDomains.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2AibiDashboardEmbeddingApprovedDomains",
      },
      automatic_cluster_update_workspace: {
        value: accountSettingV2AutomaticClusterUpdateWorkspaceToHclTerraform(this._automaticClusterUpdateWorkspace.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2AutomaticClusterUpdateWorkspace",
      },
      boolean_val: {
        value: accountSettingV2BooleanValToHclTerraform(this._booleanVal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2BooleanVal",
      },
      effective_aibi_dashboard_embedding_access_policy: {
        value: accountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToHclTerraform(this._effectiveAibiDashboardEmbeddingAccessPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy",
      },
      effective_aibi_dashboard_embedding_approved_domains: {
        value: accountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToHclTerraform(this._effectiveAibiDashboardEmbeddingApprovedDomains.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains",
      },
      effective_automatic_cluster_update_workspace: {
        value: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceToHclTerraform(this._effectiveAutomaticClusterUpdateWorkspace.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace",
      },
      effective_personal_compute: {
        value: accountSettingV2EffectivePersonalComputeToHclTerraform(this._effectivePersonalCompute.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2EffectivePersonalCompute",
      },
      effective_restrict_workspace_admins: {
        value: accountSettingV2EffectiveRestrictWorkspaceAdminsToHclTerraform(this._effectiveRestrictWorkspaceAdmins.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2EffectiveRestrictWorkspaceAdmins",
      },
      integer_val: {
        value: accountSettingV2IntegerValToHclTerraform(this._integerVal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2IntegerVal",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      personal_compute: {
        value: accountSettingV2PersonalComputeToHclTerraform(this._personalCompute.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2PersonalCompute",
      },
      restrict_workspace_admins: {
        value: accountSettingV2RestrictWorkspaceAdminsToHclTerraform(this._restrictWorkspaceAdmins.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2RestrictWorkspaceAdmins",
      },
      string_val: {
        value: accountSettingV2StringValToHclTerraform(this._stringVal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2StringVal",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
