// https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomaticClusterUpdateWorkspaceSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#etag AutomaticClusterUpdateWorkspaceSetting#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#id AutomaticClusterUpdateWorkspaceSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#setting_name AutomaticClusterUpdateWorkspaceSetting#setting_name}
  */
  readonly settingName?: string;
  /**
  * automatic_cluster_update_workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#automatic_cluster_update_workspace AutomaticClusterUpdateWorkspaceSetting#automatic_cluster_update_workspace}
  */
  readonly automaticClusterUpdateWorkspace: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace;
}
export interface AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#forced_for_compliance_mode AutomaticClusterUpdateWorkspaceSetting#forced_for_compliance_mode}
  */
  readonly forcedForComplianceMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#unavailable_for_disabled_entitlement AutomaticClusterUpdateWorkspaceSetting#unavailable_for_disabled_entitlement}
  */
  readonly unavailableForDisabledEntitlement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#unavailable_for_non_enterprise_tier AutomaticClusterUpdateWorkspaceSetting#unavailable_for_non_enterprise_tier}
  */
  readonly unavailableForNonEnterpriseTier?: boolean | cdktf.IResolvable;
}

export function automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct?: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference | AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails): any {
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


export function automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct?: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference | AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails): any {
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

export class AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails | undefined {
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

  public set internalValue(value: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forcedForComplianceMode = undefined;
      this._unavailableForDisabledEntitlement = undefined;
      this._unavailableForNonEnterpriseTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#hours AutomaticClusterUpdateWorkspaceSetting#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#minutes AutomaticClusterUpdateWorkspaceSetting#minutes}
  */
  readonly minutes?: number;
}

export function automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct?: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference | AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct?: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference | AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime): any {
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

export class AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | undefined {
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

  public set internalValue(value: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#day_of_week AutomaticClusterUpdateWorkspaceSetting#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#frequency AutomaticClusterUpdateWorkspaceSetting#frequency}
  */
  readonly frequency?: string;
  /**
  * window_start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#window_start_time AutomaticClusterUpdateWorkspaceSetting#window_start_time}
  */
  readonly windowStartTime?: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
}

export function automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct?: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference | AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    window_start_time: automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct!.windowStartTime),
  }
}


export function automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct?: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference | AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule): any {
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
      value: automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct!.windowStartTime),
      isBlock: true,
      type: "list",
      storageClassType: "AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | undefined {
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

  public set internalValue(value: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._frequency = undefined;
      this._windowStartTime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _windowStartTime = new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(this, "window_start_time");
  public get windowStartTime() {
    return this._windowStartTime;
  }
  public putWindowStartTime(value: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime) {
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
export interface AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow {
  /**
  * week_day_based_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#week_day_based_schedule AutomaticClusterUpdateWorkspaceSetting#week_day_based_schedule}
  */
  readonly weekDayBasedSchedule?: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
}

export function automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct?: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference | AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    week_day_based_schedule: automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct!.weekDayBasedSchedule),
  }
}


export function automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct?: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference | AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    week_day_based_schedule: {
      value: automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct!.weekDayBasedSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weekDayBasedSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDayBasedSchedule = this._weekDayBasedSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weekDayBasedSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weekDayBasedSchedule.internalValue = value.weekDayBasedSchedule;
    }
  }

  // week_day_based_schedule - computed: false, optional: true, required: false
  private _weekDayBasedSchedule = new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(this, "week_day_based_schedule");
  public get weekDayBasedSchedule() {
    return this._weekDayBasedSchedule;
  }
  public putWeekDayBasedSchedule(value: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule) {
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
export interface AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#can_toggle AutomaticClusterUpdateWorkspaceSetting#can_toggle}
  */
  readonly canToggle?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#enabled AutomaticClusterUpdateWorkspaceSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#restart_even_if_no_updates_available AutomaticClusterUpdateWorkspaceSetting#restart_even_if_no_updates_available}
  */
  readonly restartEvenIfNoUpdatesAvailable?: boolean | cdktf.IResolvable;
  /**
  * enablement_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#enablement_details AutomaticClusterUpdateWorkspaceSetting#enablement_details}
  */
  readonly enablementDetails?: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#maintenance_window AutomaticClusterUpdateWorkspaceSetting#maintenance_window}
  */
  readonly maintenanceWindow?: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow;
}

export function automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceToTerraform(struct?: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference | AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_toggle: cdktf.booleanToTerraform(struct!.canToggle),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    restart_even_if_no_updates_available: cdktf.booleanToTerraform(struct!.restartEvenIfNoUpdatesAvailable),
    enablement_details: automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct!.enablementDetails),
    maintenance_window: automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct!.maintenanceWindow),
  }
}


export function automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceToHclTerraform(struct?: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference | AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace): any {
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
    restart_even_if_no_updates_available: {
      value: cdktf.booleanToHclTerraform(struct!.restartEvenIfNoUpdatesAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enablement_details: {
      value: automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct!.enablementDetails),
      isBlock: true,
      type: "list",
      storageClassType: "AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList",
    },
    maintenance_window: {
      value: automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace | undefined {
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
    if (this._restartEvenIfNoUpdatesAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartEvenIfNoUpdatesAvailable = this._restartEvenIfNoUpdatesAvailable;
    }
    if (this._enablementDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablementDetails = this._enablementDetails?.internalValue;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canToggle = undefined;
      this._enabled = undefined;
      this._restartEvenIfNoUpdatesAvailable = undefined;
      this._enablementDetails.internalValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canToggle = value.canToggle;
      this._enabled = value.enabled;
      this._restartEvenIfNoUpdatesAvailable = value.restartEvenIfNoUpdatesAvailable;
      this._enablementDetails.internalValue = value.enablementDetails;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
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

  // enablement_details - computed: false, optional: true, required: false
  private _enablementDetails = new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(this, "enablement_details");
  public get enablementDetails() {
    return this._enablementDetails;
  }
  public putEnablementDetails(value: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails) {
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
  private _maintenanceWindow = new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting databricks_automatic_cluster_update_workspace_setting}
*/
export class AutomaticClusterUpdateWorkspaceSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_automatic_cluster_update_workspace_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomaticClusterUpdateWorkspaceSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomaticClusterUpdateWorkspaceSetting to import
  * @param importFromId The id of the existing AutomaticClusterUpdateWorkspaceSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomaticClusterUpdateWorkspaceSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_automatic_cluster_update_workspace_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/automatic_cluster_update_workspace_setting databricks_automatic_cluster_update_workspace_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomaticClusterUpdateWorkspaceSettingConfig
  */
  public constructor(scope: Construct, id: string, config: AutomaticClusterUpdateWorkspaceSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_automatic_cluster_update_workspace_setting',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.45.0',
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
    this._etag = config.etag;
    this._id = config.id;
    this._settingName = config.settingName;
    this._automaticClusterUpdateWorkspace.internalValue = config.automaticClusterUpdateWorkspace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
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

  // setting_name - computed: true, optional: true, required: false
  private _settingName?: string; 
  public get settingName() {
    return this.getStringAttribute('setting_name');
  }
  public set settingName(value: string) {
    this._settingName = value;
  }
  public resetSettingName() {
    this._settingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingNameInput() {
    return this._settingName;
  }

  // automatic_cluster_update_workspace - computed: false, optional: false, required: true
  private _automaticClusterUpdateWorkspace = new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference(this, "automatic_cluster_update_workspace");
  public get automaticClusterUpdateWorkspace() {
    return this._automaticClusterUpdateWorkspace;
  }
  public putAutomaticClusterUpdateWorkspace(value: AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace) {
    this._automaticClusterUpdateWorkspace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticClusterUpdateWorkspaceInput() {
    return this._automaticClusterUpdateWorkspace.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      etag: cdktf.stringToTerraform(this._etag),
      id: cdktf.stringToTerraform(this._id),
      setting_name: cdktf.stringToTerraform(this._settingName),
      automatic_cluster_update_workspace: automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceToTerraform(this._automaticClusterUpdateWorkspace.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
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
      setting_name: {
        value: cdktf.stringToHclTerraform(this._settingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatic_cluster_update_workspace: {
        value: automaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceToHclTerraform(this._automaticClusterUpdateWorkspace.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}