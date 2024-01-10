/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { DataDatabricksJobJobSettingsSettingsCompute,
dataDatabricksJobJobSettingsSettingsComputeToTerraform,
dataDatabricksJobJobSettingsSettingsComputeToHclTerraform,
DataDatabricksJobJobSettingsSettingsComputeList,
DataDatabricksJobJobSettingsSettingsContinuous,
dataDatabricksJobJobSettingsSettingsContinuousToTerraform,
dataDatabricksJobJobSettingsSettingsContinuousToHclTerraform,
DataDatabricksJobJobSettingsSettingsContinuousOutputReference,
DataDatabricksJobJobSettingsSettingsDbtTask,
dataDatabricksJobJobSettingsSettingsDbtTaskToTerraform,
dataDatabricksJobJobSettingsSettingsDbtTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsDbtTaskOutputReference,
DataDatabricksJobJobSettingsSettingsDeployment,
dataDatabricksJobJobSettingsSettingsDeploymentToTerraform,
dataDatabricksJobJobSettingsSettingsDeploymentToHclTerraform,
DataDatabricksJobJobSettingsSettingsDeploymentOutputReference,
DataDatabricksJobJobSettingsSettingsEmailNotifications,
dataDatabricksJobJobSettingsSettingsEmailNotificationsToTerraform,
dataDatabricksJobJobSettingsSettingsEmailNotificationsToHclTerraform,
DataDatabricksJobJobSettingsSettingsEmailNotificationsOutputReference,
DataDatabricksJobJobSettingsSettingsGitSource,
dataDatabricksJobJobSettingsSettingsGitSourceToTerraform,
dataDatabricksJobJobSettingsSettingsGitSourceToHclTerraform,
DataDatabricksJobJobSettingsSettingsGitSourceOutputReference,
DataDatabricksJobJobSettingsSettingsHealth,
dataDatabricksJobJobSettingsSettingsHealthToTerraform,
dataDatabricksJobJobSettingsSettingsHealthToHclTerraform,
DataDatabricksJobJobSettingsSettingsHealthOutputReference,
DataDatabricksJobJobSettingsSettingsJobCluster,
dataDatabricksJobJobSettingsSettingsJobClusterToTerraform,
dataDatabricksJobJobSettingsSettingsJobClusterToHclTerraform,
DataDatabricksJobJobSettingsSettingsJobClusterList,
DataDatabricksJobJobSettingsSettingsLibrary,
dataDatabricksJobJobSettingsSettingsLibraryToTerraform,
dataDatabricksJobJobSettingsSettingsLibraryToHclTerraform,
DataDatabricksJobJobSettingsSettingsLibraryList,
DataDatabricksJobJobSettingsSettingsNewCluster,
dataDatabricksJobJobSettingsSettingsNewClusterToTerraform,
dataDatabricksJobJobSettingsSettingsNewClusterToHclTerraform,
DataDatabricksJobJobSettingsSettingsNewClusterOutputReference,
DataDatabricksJobJobSettingsSettingsNotebookTask,
dataDatabricksJobJobSettingsSettingsNotebookTaskToTerraform,
dataDatabricksJobJobSettingsSettingsNotebookTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsNotebookTaskOutputReference,
DataDatabricksJobJobSettingsSettingsNotificationSettings,
dataDatabricksJobJobSettingsSettingsNotificationSettingsToTerraform,
dataDatabricksJobJobSettingsSettingsNotificationSettingsToHclTerraform,
DataDatabricksJobJobSettingsSettingsNotificationSettingsOutputReference,
DataDatabricksJobJobSettingsSettingsParameter,
dataDatabricksJobJobSettingsSettingsParameterToTerraform,
dataDatabricksJobJobSettingsSettingsParameterToHclTerraform,
DataDatabricksJobJobSettingsSettingsParameterList,
DataDatabricksJobJobSettingsSettingsPipelineTask,
dataDatabricksJobJobSettingsSettingsPipelineTaskToTerraform,
dataDatabricksJobJobSettingsSettingsPipelineTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsPipelineTaskOutputReference,
DataDatabricksJobJobSettingsSettingsPythonWheelTask,
dataDatabricksJobJobSettingsSettingsPythonWheelTaskToTerraform,
dataDatabricksJobJobSettingsSettingsPythonWheelTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsPythonWheelTaskOutputReference,
DataDatabricksJobJobSettingsSettingsQueue,
dataDatabricksJobJobSettingsSettingsQueueToTerraform,
dataDatabricksJobJobSettingsSettingsQueueToHclTerraform,
DataDatabricksJobJobSettingsSettingsQueueOutputReference,
DataDatabricksJobJobSettingsSettingsRunAs,
dataDatabricksJobJobSettingsSettingsRunAsToTerraform,
dataDatabricksJobJobSettingsSettingsRunAsToHclTerraform,
DataDatabricksJobJobSettingsSettingsRunAsOutputReference,
DataDatabricksJobJobSettingsSettingsRunJobTask,
dataDatabricksJobJobSettingsSettingsRunJobTaskToTerraform,
dataDatabricksJobJobSettingsSettingsRunJobTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsRunJobTaskOutputReference,
DataDatabricksJobJobSettingsSettingsSchedule,
dataDatabricksJobJobSettingsSettingsScheduleToTerraform,
dataDatabricksJobJobSettingsSettingsScheduleToHclTerraform,
DataDatabricksJobJobSettingsSettingsScheduleOutputReference,
DataDatabricksJobJobSettingsSettingsSparkJarTask,
dataDatabricksJobJobSettingsSettingsSparkJarTaskToTerraform,
dataDatabricksJobJobSettingsSettingsSparkJarTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsSparkJarTaskOutputReference,
DataDatabricksJobJobSettingsSettingsSparkPythonTask,
dataDatabricksJobJobSettingsSettingsSparkPythonTaskToTerraform,
dataDatabricksJobJobSettingsSettingsSparkPythonTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsSparkPythonTaskOutputReference,
DataDatabricksJobJobSettingsSettingsSparkSubmitTask,
dataDatabricksJobJobSettingsSettingsSparkSubmitTaskToTerraform,
dataDatabricksJobJobSettingsSettingsSparkSubmitTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsSparkSubmitTaskOutputReference,
DataDatabricksJobJobSettingsSettingsTask,
dataDatabricksJobJobSettingsSettingsTaskToTerraform,
dataDatabricksJobJobSettingsSettingsTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskList,
DataDatabricksJobJobSettingsSettingsTrigger,
dataDatabricksJobJobSettingsSettingsTriggerToTerraform,
dataDatabricksJobJobSettingsSettingsTriggerToHclTerraform,
DataDatabricksJobJobSettingsSettingsTriggerOutputReference } from './structs0'
export interface DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceededToTerraform(struct?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceededOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceededList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceededOutputReference {
    return new DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailureToTerraform(struct?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailureToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailureList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailure[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailureOutputReference {
    return new DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStartToTerraform(struct?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStartToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStartList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStart[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStartOutputReference {
    return new DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccessToTerraform(struct?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccessToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccessList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccess[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccessOutputReference {
    return new DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsWebhookNotifications {
  /**
  * on_duration_warning_threshold_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#on_duration_warning_threshold_exceeded DataDatabricksJob#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#on_failure DataDatabricksJob#on_failure}
  */
  readonly onFailure?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailure[] | cdktf.IResolvable;
  /**
  * on_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#on_start DataDatabricksJob#on_start}
  */
  readonly onStart?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStart[] | cdktf.IResolvable;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#on_success DataDatabricksJob#on_success}
  */
  readonly onSuccess?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccess[] | cdktf.IResolvable;
}

export function dataDatabricksJobJobSettingsSettingsWebhookNotificationsToTerraform(struct?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOutputReference | DataDatabricksJobJobSettingsSettingsWebhookNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_duration_warning_threshold_exceeded: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceededToTerraform, true)(struct!.onDurationWarningThresholdExceeded),
    on_failure: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailureToTerraform, true)(struct!.onFailure),
    on_start: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStartToTerraform, true)(struct!.onStart),
    on_success: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccessToTerraform, true)(struct!.onSuccess),
  }
}


export function dataDatabricksJobJobSettingsSettingsWebhookNotificationsToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOutputReference | DataDatabricksJobJobSettingsSettingsWebhookNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_duration_warning_threshold_exceeded: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform, true)(struct!.onDurationWarningThresholdExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceededList",
    },
    on_failure: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailureToHclTerraform, true)(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailureList",
    },
    on_start: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStartToHclTerraform, true)(struct!.onStart),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStartList",
    },
    on_success: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccessToHclTerraform, true)(struct!.onSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsWebhookNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsWebhookNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDurationWarningThresholdExceeded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDurationWarningThresholdExceeded = this._onDurationWarningThresholdExceeded?.internalValue;
    }
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    if (this._onStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStart = this._onStart?.internalValue;
    }
    if (this._onSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsWebhookNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDurationWarningThresholdExceeded.internalValue = undefined;
      this._onFailure.internalValue = undefined;
      this._onStart.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDurationWarningThresholdExceeded.internalValue = value.onDurationWarningThresholdExceeded;
      this._onFailure.internalValue = value.onFailure;
      this._onStart.internalValue = value.onStart;
      this._onSuccess.internalValue = value.onSuccess;
    }
  }

  // on_duration_warning_threshold_exceeded - computed: false, optional: true, required: false
  private _onDurationWarningThresholdExceeded = new DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceededList(this, "on_duration_warning_threshold_exceeded", false);
  public get onDurationWarningThresholdExceeded() {
    return this._onDurationWarningThresholdExceeded;
  }
  public putOnDurationWarningThresholdExceeded(value: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable) {
    this._onDurationWarningThresholdExceeded.internalValue = value;
  }
  public resetOnDurationWarningThresholdExceeded() {
    this._onDurationWarningThresholdExceeded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDurationWarningThresholdExceededInput() {
    return this._onDurationWarningThresholdExceeded.internalValue;
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailureList(this, "on_failure", false);
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailure[] | cdktf.IResolvable) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }

  // on_start - computed: false, optional: true, required: false
  private _onStart = new DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStartList(this, "on_start", false);
  public get onStart() {
    return this._onStart;
  }
  public putOnStart(value: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStart[] | cdktf.IResolvable) {
    this._onStart.internalValue = value;
  }
  public resetOnStart() {
    this._onStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartInput() {
    return this._onStart.internalValue;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess = new DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccessList(this, "on_success", false);
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccess[] | cdktf.IResolvable) {
    this._onSuccess.internalValue = value;
  }
  public resetOnSuccess() {
    this._onSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess.internalValue;
  }
}
export interface DataDatabricksJobJobSettingsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#description DataDatabricksJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#edit_mode DataDatabricksJob#edit_mode}
  */
  readonly editMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#existing_cluster_id DataDatabricksJob#existing_cluster_id}
  */
  readonly existingClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#format DataDatabricksJob#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#max_concurrent_runs DataDatabricksJob#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#max_retries DataDatabricksJob#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#min_retry_interval_millis DataDatabricksJob#min_retry_interval_millis}
  */
  readonly minRetryIntervalMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#name DataDatabricksJob#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#retry_on_timeout DataDatabricksJob#retry_on_timeout}
  */
  readonly retryOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#tags DataDatabricksJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#timeout_seconds DataDatabricksJob#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#compute DataDatabricksJob#compute}
  */
  readonly compute?: DataDatabricksJobJobSettingsSettingsCompute[] | cdktf.IResolvable;
  /**
  * continuous block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#continuous DataDatabricksJob#continuous}
  */
  readonly continuous?: DataDatabricksJobJobSettingsSettingsContinuous;
  /**
  * dbt_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#dbt_task DataDatabricksJob#dbt_task}
  */
  readonly dbtTask?: DataDatabricksJobJobSettingsSettingsDbtTask;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#deployment DataDatabricksJob#deployment}
  */
  readonly deployment?: DataDatabricksJobJobSettingsSettingsDeployment;
  /**
  * email_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#email_notifications DataDatabricksJob#email_notifications}
  */
  readonly emailNotifications?: DataDatabricksJobJobSettingsSettingsEmailNotifications;
  /**
  * git_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#git_source DataDatabricksJob#git_source}
  */
  readonly gitSource?: DataDatabricksJobJobSettingsSettingsGitSource;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#health DataDatabricksJob#health}
  */
  readonly health?: DataDatabricksJobJobSettingsSettingsHealth;
  /**
  * job_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#job_cluster DataDatabricksJob#job_cluster}
  */
  readonly jobCluster?: DataDatabricksJobJobSettingsSettingsJobCluster[] | cdktf.IResolvable;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#library DataDatabricksJob#library}
  */
  readonly library?: DataDatabricksJobJobSettingsSettingsLibrary[] | cdktf.IResolvable;
  /**
  * new_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#new_cluster DataDatabricksJob#new_cluster}
  */
  readonly newCluster?: DataDatabricksJobJobSettingsSettingsNewCluster;
  /**
  * notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#notebook_task DataDatabricksJob#notebook_task}
  */
  readonly notebookTask?: DataDatabricksJobJobSettingsSettingsNotebookTask;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#notification_settings DataDatabricksJob#notification_settings}
  */
  readonly notificationSettings?: DataDatabricksJobJobSettingsSettingsNotificationSettings;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#parameter DataDatabricksJob#parameter}
  */
  readonly parameter?: DataDatabricksJobJobSettingsSettingsParameter[] | cdktf.IResolvable;
  /**
  * pipeline_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#pipeline_task DataDatabricksJob#pipeline_task}
  */
  readonly pipelineTask?: DataDatabricksJobJobSettingsSettingsPipelineTask;
  /**
  * python_wheel_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#python_wheel_task DataDatabricksJob#python_wheel_task}
  */
  readonly pythonWheelTask?: DataDatabricksJobJobSettingsSettingsPythonWheelTask;
  /**
  * queue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#queue DataDatabricksJob#queue}
  */
  readonly queue?: DataDatabricksJobJobSettingsSettingsQueue;
  /**
  * run_as block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#run_as DataDatabricksJob#run_as}
  */
  readonly runAs?: DataDatabricksJobJobSettingsSettingsRunAs;
  /**
  * run_job_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#run_job_task DataDatabricksJob#run_job_task}
  */
  readonly runJobTask?: DataDatabricksJobJobSettingsSettingsRunJobTask;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#schedule DataDatabricksJob#schedule}
  */
  readonly schedule?: DataDatabricksJobJobSettingsSettingsSchedule;
  /**
  * spark_jar_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#spark_jar_task DataDatabricksJob#spark_jar_task}
  */
  readonly sparkJarTask?: DataDatabricksJobJobSettingsSettingsSparkJarTask;
  /**
  * spark_python_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#spark_python_task DataDatabricksJob#spark_python_task}
  */
  readonly sparkPythonTask?: DataDatabricksJobJobSettingsSettingsSparkPythonTask;
  /**
  * spark_submit_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#spark_submit_task DataDatabricksJob#spark_submit_task}
  */
  readonly sparkSubmitTask?: DataDatabricksJobJobSettingsSettingsSparkSubmitTask;
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#task DataDatabricksJob#task}
  */
  readonly task?: DataDatabricksJobJobSettingsSettingsTask[] | cdktf.IResolvable;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#trigger DataDatabricksJob#trigger}
  */
  readonly trigger?: DataDatabricksJobJobSettingsSettingsTrigger;
  /**
  * webhook_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#webhook_notifications DataDatabricksJob#webhook_notifications}
  */
  readonly webhookNotifications?: DataDatabricksJobJobSettingsSettingsWebhookNotifications;
}

export function dataDatabricksJobJobSettingsSettingsToTerraform(struct?: DataDatabricksJobJobSettingsSettingsOutputReference | DataDatabricksJobJobSettingsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    edit_mode: cdktf.stringToTerraform(struct!.editMode),
    existing_cluster_id: cdktf.stringToTerraform(struct!.existingClusterId),
    format: cdktf.stringToTerraform(struct!.format),
    max_concurrent_runs: cdktf.numberToTerraform(struct!.maxConcurrentRuns),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    min_retry_interval_millis: cdktf.numberToTerraform(struct!.minRetryIntervalMillis),
    name: cdktf.stringToTerraform(struct!.name),
    retry_on_timeout: cdktf.booleanToTerraform(struct!.retryOnTimeout),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    compute: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsComputeToTerraform, true)(struct!.compute),
    continuous: dataDatabricksJobJobSettingsSettingsContinuousToTerraform(struct!.continuous),
    dbt_task: dataDatabricksJobJobSettingsSettingsDbtTaskToTerraform(struct!.dbtTask),
    deployment: dataDatabricksJobJobSettingsSettingsDeploymentToTerraform(struct!.deployment),
    email_notifications: dataDatabricksJobJobSettingsSettingsEmailNotificationsToTerraform(struct!.emailNotifications),
    git_source: dataDatabricksJobJobSettingsSettingsGitSourceToTerraform(struct!.gitSource),
    health: dataDatabricksJobJobSettingsSettingsHealthToTerraform(struct!.health),
    job_cluster: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsJobClusterToTerraform, true)(struct!.jobCluster),
    library: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsLibraryToTerraform, true)(struct!.library),
    new_cluster: dataDatabricksJobJobSettingsSettingsNewClusterToTerraform(struct!.newCluster),
    notebook_task: dataDatabricksJobJobSettingsSettingsNotebookTaskToTerraform(struct!.notebookTask),
    notification_settings: dataDatabricksJobJobSettingsSettingsNotificationSettingsToTerraform(struct!.notificationSettings),
    parameter: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsParameterToTerraform, true)(struct!.parameter),
    pipeline_task: dataDatabricksJobJobSettingsSettingsPipelineTaskToTerraform(struct!.pipelineTask),
    python_wheel_task: dataDatabricksJobJobSettingsSettingsPythonWheelTaskToTerraform(struct!.pythonWheelTask),
    queue: dataDatabricksJobJobSettingsSettingsQueueToTerraform(struct!.queue),
    run_as: dataDatabricksJobJobSettingsSettingsRunAsToTerraform(struct!.runAs),
    run_job_task: dataDatabricksJobJobSettingsSettingsRunJobTaskToTerraform(struct!.runJobTask),
    schedule: dataDatabricksJobJobSettingsSettingsScheduleToTerraform(struct!.schedule),
    spark_jar_task: dataDatabricksJobJobSettingsSettingsSparkJarTaskToTerraform(struct!.sparkJarTask),
    spark_python_task: dataDatabricksJobJobSettingsSettingsSparkPythonTaskToTerraform(struct!.sparkPythonTask),
    spark_submit_task: dataDatabricksJobJobSettingsSettingsSparkSubmitTaskToTerraform(struct!.sparkSubmitTask),
    task: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskToTerraform, true)(struct!.task),
    trigger: dataDatabricksJobJobSettingsSettingsTriggerToTerraform(struct!.trigger),
    webhook_notifications: dataDatabricksJobJobSettingsSettingsWebhookNotificationsToTerraform(struct!.webhookNotifications),
  }
}


export function dataDatabricksJobJobSettingsSettingsToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsOutputReference | DataDatabricksJobJobSettingsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edit_mode: {
      value: cdktf.stringToHclTerraform(struct!.editMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    existing_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.existingClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrent_runs: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_retry_interval_millis: {
      value: cdktf.numberToHclTerraform(struct!.minRetryIntervalMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_on_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.retryOnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compute: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsComputeList",
    },
    continuous: {
      value: dataDatabricksJobJobSettingsSettingsContinuousToHclTerraform(struct!.continuous),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsContinuousList",
    },
    dbt_task: {
      value: dataDatabricksJobJobSettingsSettingsDbtTaskToHclTerraform(struct!.dbtTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsDbtTaskList",
    },
    deployment: {
      value: dataDatabricksJobJobSettingsSettingsDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsDeploymentList",
    },
    email_notifications: {
      value: dataDatabricksJobJobSettingsSettingsEmailNotificationsToHclTerraform(struct!.emailNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsEmailNotificationsList",
    },
    git_source: {
      value: dataDatabricksJobJobSettingsSettingsGitSourceToHclTerraform(struct!.gitSource),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsGitSourceList",
    },
    health: {
      value: dataDatabricksJobJobSettingsSettingsHealthToHclTerraform(struct!.health),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsHealthList",
    },
    job_cluster: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsJobClusterToHclTerraform, true)(struct!.jobCluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsJobClusterList",
    },
    library: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "set",
      storageClassType: "DataDatabricksJobJobSettingsSettingsLibraryList",
    },
    new_cluster: {
      value: dataDatabricksJobJobSettingsSettingsNewClusterToHclTerraform(struct!.newCluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsNewClusterList",
    },
    notebook_task: {
      value: dataDatabricksJobJobSettingsSettingsNotebookTaskToHclTerraform(struct!.notebookTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsNotebookTaskList",
    },
    notification_settings: {
      value: dataDatabricksJobJobSettingsSettingsNotificationSettingsToHclTerraform(struct!.notificationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsNotificationSettingsList",
    },
    parameter: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsParameterList",
    },
    pipeline_task: {
      value: dataDatabricksJobJobSettingsSettingsPipelineTaskToHclTerraform(struct!.pipelineTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsPipelineTaskList",
    },
    python_wheel_task: {
      value: dataDatabricksJobJobSettingsSettingsPythonWheelTaskToHclTerraform(struct!.pythonWheelTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsPythonWheelTaskList",
    },
    queue: {
      value: dataDatabricksJobJobSettingsSettingsQueueToHclTerraform(struct!.queue),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsQueueList",
    },
    run_as: {
      value: dataDatabricksJobJobSettingsSettingsRunAsToHclTerraform(struct!.runAs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsRunAsList",
    },
    run_job_task: {
      value: dataDatabricksJobJobSettingsSettingsRunJobTaskToHclTerraform(struct!.runJobTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsRunJobTaskList",
    },
    schedule: {
      value: dataDatabricksJobJobSettingsSettingsScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsScheduleList",
    },
    spark_jar_task: {
      value: dataDatabricksJobJobSettingsSettingsSparkJarTaskToHclTerraform(struct!.sparkJarTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsSparkJarTaskList",
    },
    spark_python_task: {
      value: dataDatabricksJobJobSettingsSettingsSparkPythonTaskToHclTerraform(struct!.sparkPythonTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsSparkPythonTaskList",
    },
    spark_submit_task: {
      value: dataDatabricksJobJobSettingsSettingsSparkSubmitTaskToHclTerraform(struct!.sparkSubmitTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsSparkSubmitTaskList",
    },
    task: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskToHclTerraform, true)(struct!.task),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskList",
    },
    trigger: {
      value: dataDatabricksJobJobSettingsSettingsTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTriggerList",
    },
    webhook_notifications: {
      value: dataDatabricksJobJobSettingsSettingsWebhookNotificationsToHclTerraform(struct!.webhookNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsWebhookNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._editMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.editMode = this._editMode;
    }
    if (this._existingClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingClusterId = this._existingClusterId;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._maxConcurrentRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRuns = this._maxConcurrentRuns;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._minRetryIntervalMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRetryIntervalMillis = this._minRetryIntervalMillis;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retryOnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOnTimeout = this._retryOnTimeout;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    if (this._continuous?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuous = this._continuous?.internalValue;
    }
    if (this._dbtTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtTask = this._dbtTask?.internalValue;
    }
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._emailNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailNotifications = this._emailNotifications?.internalValue;
    }
    if (this._gitSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitSource = this._gitSource?.internalValue;
    }
    if (this._health?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health?.internalValue;
    }
    if (this._jobCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobCluster = this._jobCluster?.internalValue;
    }
    if (this._library?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.library = this._library?.internalValue;
    }
    if (this._newCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newCluster = this._newCluster?.internalValue;
    }
    if (this._notebookTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookTask = this._notebookTask?.internalValue;
    }
    if (this._notificationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationSettings = this._notificationSettings?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    if (this._pipelineTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineTask = this._pipelineTask?.internalValue;
    }
    if (this._pythonWheelTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonWheelTask = this._pythonWheelTask?.internalValue;
    }
    if (this._queue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue?.internalValue;
    }
    if (this._runAs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAs = this._runAs?.internalValue;
    }
    if (this._runJobTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runJobTask = this._runJobTask?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._sparkJarTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkJarTask = this._sparkJarTask?.internalValue;
    }
    if (this._sparkPythonTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkPythonTask = this._sparkPythonTask?.internalValue;
    }
    if (this._sparkSubmitTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkSubmitTask = this._sparkSubmitTask?.internalValue;
    }
    if (this._task?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    if (this._webhookNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookNotifications = this._webhookNotifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._editMode = undefined;
      this._existingClusterId = undefined;
      this._format = undefined;
      this._maxConcurrentRuns = undefined;
      this._maxRetries = undefined;
      this._minRetryIntervalMillis = undefined;
      this._name = undefined;
      this._retryOnTimeout = undefined;
      this._tags = undefined;
      this._timeoutSeconds = undefined;
      this._compute.internalValue = undefined;
      this._continuous.internalValue = undefined;
      this._dbtTask.internalValue = undefined;
      this._deployment.internalValue = undefined;
      this._emailNotifications.internalValue = undefined;
      this._gitSource.internalValue = undefined;
      this._health.internalValue = undefined;
      this._jobCluster.internalValue = undefined;
      this._library.internalValue = undefined;
      this._newCluster.internalValue = undefined;
      this._notebookTask.internalValue = undefined;
      this._notificationSettings.internalValue = undefined;
      this._parameter.internalValue = undefined;
      this._pipelineTask.internalValue = undefined;
      this._pythonWheelTask.internalValue = undefined;
      this._queue.internalValue = undefined;
      this._runAs.internalValue = undefined;
      this._runJobTask.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._sparkJarTask.internalValue = undefined;
      this._sparkPythonTask.internalValue = undefined;
      this._sparkSubmitTask.internalValue = undefined;
      this._task.internalValue = undefined;
      this._trigger.internalValue = undefined;
      this._webhookNotifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._editMode = value.editMode;
      this._existingClusterId = value.existingClusterId;
      this._format = value.format;
      this._maxConcurrentRuns = value.maxConcurrentRuns;
      this._maxRetries = value.maxRetries;
      this._minRetryIntervalMillis = value.minRetryIntervalMillis;
      this._name = value.name;
      this._retryOnTimeout = value.retryOnTimeout;
      this._tags = value.tags;
      this._timeoutSeconds = value.timeoutSeconds;
      this._compute.internalValue = value.compute;
      this._continuous.internalValue = value.continuous;
      this._dbtTask.internalValue = value.dbtTask;
      this._deployment.internalValue = value.deployment;
      this._emailNotifications.internalValue = value.emailNotifications;
      this._gitSource.internalValue = value.gitSource;
      this._health.internalValue = value.health;
      this._jobCluster.internalValue = value.jobCluster;
      this._library.internalValue = value.library;
      this._newCluster.internalValue = value.newCluster;
      this._notebookTask.internalValue = value.notebookTask;
      this._notificationSettings.internalValue = value.notificationSettings;
      this._parameter.internalValue = value.parameter;
      this._pipelineTask.internalValue = value.pipelineTask;
      this._pythonWheelTask.internalValue = value.pythonWheelTask;
      this._queue.internalValue = value.queue;
      this._runAs.internalValue = value.runAs;
      this._runJobTask.internalValue = value.runJobTask;
      this._schedule.internalValue = value.schedule;
      this._sparkJarTask.internalValue = value.sparkJarTask;
      this._sparkPythonTask.internalValue = value.sparkPythonTask;
      this._sparkSubmitTask.internalValue = value.sparkSubmitTask;
      this._task.internalValue = value.task;
      this._trigger.internalValue = value.trigger;
      this._webhookNotifications.internalValue = value.webhookNotifications;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // edit_mode - computed: false, optional: true, required: false
  private _editMode?: string; 
  public get editMode() {
    return this.getStringAttribute('edit_mode');
  }
  public set editMode(value: string) {
    this._editMode = value;
  }
  public resetEditMode() {
    this._editMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editModeInput() {
    return this._editMode;
  }

  // existing_cluster_id - computed: false, optional: true, required: false
  private _existingClusterId?: string; 
  public get existingClusterId() {
    return this.getStringAttribute('existing_cluster_id');
  }
  public set existingClusterId(value: string) {
    this._existingClusterId = value;
  }
  public resetExistingClusterId() {
    this._existingClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingClusterIdInput() {
    return this._existingClusterId;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // max_concurrent_runs - computed: false, optional: true, required: false
  private _maxConcurrentRuns?: number; 
  public get maxConcurrentRuns() {
    return this.getNumberAttribute('max_concurrent_runs');
  }
  public set maxConcurrentRuns(value: number) {
    this._maxConcurrentRuns = value;
  }
  public resetMaxConcurrentRuns() {
    this._maxConcurrentRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunsInput() {
    return this._maxConcurrentRuns;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // min_retry_interval_millis - computed: false, optional: true, required: false
  private _minRetryIntervalMillis?: number; 
  public get minRetryIntervalMillis() {
    return this.getNumberAttribute('min_retry_interval_millis');
  }
  public set minRetryIntervalMillis(value: number) {
    this._minRetryIntervalMillis = value;
  }
  public resetMinRetryIntervalMillis() {
    this._minRetryIntervalMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRetryIntervalMillisInput() {
    return this._minRetryIntervalMillis;
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

  // retry_on_timeout - computed: false, optional: true, required: false
  private _retryOnTimeout?: boolean | cdktf.IResolvable; 
  public get retryOnTimeout() {
    return this.getBooleanAttribute('retry_on_timeout');
  }
  public set retryOnTimeout(value: boolean | cdktf.IResolvable) {
    this._retryOnTimeout = value;
  }
  public resetRetryOnTimeout() {
    this._retryOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnTimeoutInput() {
    return this._retryOnTimeout;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // compute - computed: false, optional: true, required: false
  private _compute = new DataDatabricksJobJobSettingsSettingsComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DataDatabricksJobJobSettingsSettingsCompute[] | cdktf.IResolvable) {
    this._compute.internalValue = value;
  }
  public resetCompute() {
    this._compute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // continuous - computed: false, optional: true, required: false
  private _continuous = new DataDatabricksJobJobSettingsSettingsContinuousOutputReference(this, "continuous");
  public get continuous() {
    return this._continuous;
  }
  public putContinuous(value: DataDatabricksJobJobSettingsSettingsContinuous) {
    this._continuous.internalValue = value;
  }
  public resetContinuous() {
    this._continuous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous.internalValue;
  }

  // dbt_task - computed: false, optional: true, required: false
  private _dbtTask = new DataDatabricksJobJobSettingsSettingsDbtTaskOutputReference(this, "dbt_task");
  public get dbtTask() {
    return this._dbtTask;
  }
  public putDbtTask(value: DataDatabricksJobJobSettingsSettingsDbtTask) {
    this._dbtTask.internalValue = value;
  }
  public resetDbtTask() {
    this._dbtTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtTaskInput() {
    return this._dbtTask.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new DataDatabricksJobJobSettingsSettingsDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataDatabricksJobJobSettingsSettingsDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // email_notifications - computed: false, optional: true, required: false
  private _emailNotifications = new DataDatabricksJobJobSettingsSettingsEmailNotificationsOutputReference(this, "email_notifications");
  public get emailNotifications() {
    return this._emailNotifications;
  }
  public putEmailNotifications(value: DataDatabricksJobJobSettingsSettingsEmailNotifications) {
    this._emailNotifications.internalValue = value;
  }
  public resetEmailNotifications() {
    this._emailNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailNotificationsInput() {
    return this._emailNotifications.internalValue;
  }

  // git_source - computed: false, optional: true, required: false
  private _gitSource = new DataDatabricksJobJobSettingsSettingsGitSourceOutputReference(this, "git_source");
  public get gitSource() {
    return this._gitSource;
  }
  public putGitSource(value: DataDatabricksJobJobSettingsSettingsGitSource) {
    this._gitSource.internalValue = value;
  }
  public resetGitSource() {
    this._gitSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSourceInput() {
    return this._gitSource.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new DataDatabricksJobJobSettingsSettingsHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: DataDatabricksJobJobSettingsSettingsHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // job_cluster - computed: false, optional: true, required: false
  private _jobCluster = new DataDatabricksJobJobSettingsSettingsJobClusterList(this, "job_cluster", false);
  public get jobCluster() {
    return this._jobCluster;
  }
  public putJobCluster(value: DataDatabricksJobJobSettingsSettingsJobCluster[] | cdktf.IResolvable) {
    this._jobCluster.internalValue = value;
  }
  public resetJobCluster() {
    this._jobCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobClusterInput() {
    return this._jobCluster.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new DataDatabricksJobJobSettingsSettingsLibraryList(this, "library", true);
  public get library() {
    return this._library;
  }
  public putLibrary(value: DataDatabricksJobJobSettingsSettingsLibrary[] | cdktf.IResolvable) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }

  // new_cluster - computed: false, optional: true, required: false
  private _newCluster = new DataDatabricksJobJobSettingsSettingsNewClusterOutputReference(this, "new_cluster");
  public get newCluster() {
    return this._newCluster;
  }
  public putNewCluster(value: DataDatabricksJobJobSettingsSettingsNewCluster) {
    this._newCluster.internalValue = value;
  }
  public resetNewCluster() {
    this._newCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newClusterInput() {
    return this._newCluster.internalValue;
  }

  // notebook_task - computed: false, optional: true, required: false
  private _notebookTask = new DataDatabricksJobJobSettingsSettingsNotebookTaskOutputReference(this, "notebook_task");
  public get notebookTask() {
    return this._notebookTask;
  }
  public putNotebookTask(value: DataDatabricksJobJobSettingsSettingsNotebookTask) {
    this._notebookTask.internalValue = value;
  }
  public resetNotebookTask() {
    this._notebookTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookTaskInput() {
    return this._notebookTask.internalValue;
  }

  // notification_settings - computed: false, optional: true, required: false
  private _notificationSettings = new DataDatabricksJobJobSettingsSettingsNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: DataDatabricksJobJobSettingsSettingsNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new DataDatabricksJobJobSettingsSettingsParameterList(this, "parameter", false);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: DataDatabricksJobJobSettingsSettingsParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }

  // pipeline_task - computed: false, optional: true, required: false
  private _pipelineTask = new DataDatabricksJobJobSettingsSettingsPipelineTaskOutputReference(this, "pipeline_task");
  public get pipelineTask() {
    return this._pipelineTask;
  }
  public putPipelineTask(value: DataDatabricksJobJobSettingsSettingsPipelineTask) {
    this._pipelineTask.internalValue = value;
  }
  public resetPipelineTask() {
    this._pipelineTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineTaskInput() {
    return this._pipelineTask.internalValue;
  }

  // python_wheel_task - computed: false, optional: true, required: false
  private _pythonWheelTask = new DataDatabricksJobJobSettingsSettingsPythonWheelTaskOutputReference(this, "python_wheel_task");
  public get pythonWheelTask() {
    return this._pythonWheelTask;
  }
  public putPythonWheelTask(value: DataDatabricksJobJobSettingsSettingsPythonWheelTask) {
    this._pythonWheelTask.internalValue = value;
  }
  public resetPythonWheelTask() {
    this._pythonWheelTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonWheelTaskInput() {
    return this._pythonWheelTask.internalValue;
  }

  // queue - computed: false, optional: true, required: false
  private _queue = new DataDatabricksJobJobSettingsSettingsQueueOutputReference(this, "queue");
  public get queue() {
    return this._queue;
  }
  public putQueue(value: DataDatabricksJobJobSettingsSettingsQueue) {
    this._queue.internalValue = value;
  }
  public resetQueue() {
    this._queue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue.internalValue;
  }

  // run_as - computed: false, optional: true, required: false
  private _runAs = new DataDatabricksJobJobSettingsSettingsRunAsOutputReference(this, "run_as");
  public get runAs() {
    return this._runAs;
  }
  public putRunAs(value: DataDatabricksJobJobSettingsSettingsRunAs) {
    this._runAs.internalValue = value;
  }
  public resetRunAs() {
    this._runAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsInput() {
    return this._runAs.internalValue;
  }

  // run_job_task - computed: false, optional: true, required: false
  private _runJobTask = new DataDatabricksJobJobSettingsSettingsRunJobTaskOutputReference(this, "run_job_task");
  public get runJobTask() {
    return this._runJobTask;
  }
  public putRunJobTask(value: DataDatabricksJobJobSettingsSettingsRunJobTask) {
    this._runJobTask.internalValue = value;
  }
  public resetRunJobTask() {
    this._runJobTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runJobTaskInput() {
    return this._runJobTask.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DataDatabricksJobJobSettingsSettingsScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataDatabricksJobJobSettingsSettingsSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // spark_jar_task - computed: false, optional: true, required: false
  private _sparkJarTask = new DataDatabricksJobJobSettingsSettingsSparkJarTaskOutputReference(this, "spark_jar_task");
  public get sparkJarTask() {
    return this._sparkJarTask;
  }
  public putSparkJarTask(value: DataDatabricksJobJobSettingsSettingsSparkJarTask) {
    this._sparkJarTask.internalValue = value;
  }
  public resetSparkJarTask() {
    this._sparkJarTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkJarTaskInput() {
    return this._sparkJarTask.internalValue;
  }

  // spark_python_task - computed: false, optional: true, required: false
  private _sparkPythonTask = new DataDatabricksJobJobSettingsSettingsSparkPythonTaskOutputReference(this, "spark_python_task");
  public get sparkPythonTask() {
    return this._sparkPythonTask;
  }
  public putSparkPythonTask(value: DataDatabricksJobJobSettingsSettingsSparkPythonTask) {
    this._sparkPythonTask.internalValue = value;
  }
  public resetSparkPythonTask() {
    this._sparkPythonTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkPythonTaskInput() {
    return this._sparkPythonTask.internalValue;
  }

  // spark_submit_task - computed: false, optional: true, required: false
  private _sparkSubmitTask = new DataDatabricksJobJobSettingsSettingsSparkSubmitTaskOutputReference(this, "spark_submit_task");
  public get sparkSubmitTask() {
    return this._sparkSubmitTask;
  }
  public putSparkSubmitTask(value: DataDatabricksJobJobSettingsSettingsSparkSubmitTask) {
    this._sparkSubmitTask.internalValue = value;
  }
  public resetSparkSubmitTask() {
    this._sparkSubmitTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSubmitTaskInput() {
    return this._sparkSubmitTask.internalValue;
  }

  // task - computed: false, optional: true, required: false
  private _task = new DataDatabricksJobJobSettingsSettingsTaskList(this, "task", false);
  public get task() {
    return this._task;
  }
  public putTask(value: DataDatabricksJobJobSettingsSettingsTask[] | cdktf.IResolvable) {
    this._task.internalValue = value;
  }
  public resetTask() {
    this._task.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new DataDatabricksJobJobSettingsSettingsTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: DataDatabricksJobJobSettingsSettingsTrigger) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }

  // webhook_notifications - computed: false, optional: true, required: false
  private _webhookNotifications = new DataDatabricksJobJobSettingsSettingsWebhookNotificationsOutputReference(this, "webhook_notifications");
  public get webhookNotifications() {
    return this._webhookNotifications;
  }
  public putWebhookNotifications(value: DataDatabricksJobJobSettingsSettingsWebhookNotifications) {
    this._webhookNotifications.internalValue = value;
  }
  public resetWebhookNotifications() {
    this._webhookNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookNotificationsInput() {
    return this._webhookNotifications.internalValue;
  }
}
export interface DataDatabricksJobJobSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#created_time DataDatabricksJob#created_time}
  */
  readonly createdTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#creator_user_name DataDatabricksJob#creator_user_name}
  */
  readonly creatorUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#job_id DataDatabricksJob#job_id}
  */
  readonly jobId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#run_as_user_name DataDatabricksJob#run_as_user_name}
  */
  readonly runAsUserName?: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/job#settings DataDatabricksJob#settings}
  */
  readonly settings?: DataDatabricksJobJobSettingsSettings;
}

export function dataDatabricksJobJobSettingsToTerraform(struct?: DataDatabricksJobJobSettingsOutputReference | DataDatabricksJobJobSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_time: cdktf.numberToTerraform(struct!.createdTime),
    creator_user_name: cdktf.stringToTerraform(struct!.creatorUserName),
    job_id: cdktf.numberToTerraform(struct!.jobId),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
    settings: dataDatabricksJobJobSettingsSettingsToTerraform(struct!.settings),
  }
}


export function dataDatabricksJobJobSettingsToHclTerraform(struct?: DataDatabricksJobJobSettingsOutputReference | DataDatabricksJobJobSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_time: {
      value: cdktf.numberToHclTerraform(struct!.createdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    creator_user_name: {
      value: cdktf.stringToHclTerraform(struct!.creatorUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_id: {
      value: cdktf.numberToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataDatabricksJobJobSettingsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdTime = this._createdTime;
    }
    if (this._creatorUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.creatorUserName = this._creatorUserName;
    }
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createdTime = undefined;
      this._creatorUserName = undefined;
      this._jobId = undefined;
      this._runAsUserName = undefined;
      this._settings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createdTime = value.createdTime;
      this._creatorUserName = value.creatorUserName;
      this._jobId = value.jobId;
      this._runAsUserName = value.runAsUserName;
      this._settings.internalValue = value.settings;
    }
  }

  // created_time - computed: false, optional: true, required: false
  private _createdTime?: number; 
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }
  public set createdTime(value: number) {
    this._createdTime = value;
  }
  public resetCreatedTime() {
    this._createdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdTimeInput() {
    return this._createdTime;
  }

  // creator_user_name - computed: false, optional: true, required: false
  private _creatorUserName?: string; 
  public get creatorUserName() {
    return this.getStringAttribute('creator_user_name');
  }
  public set creatorUserName(value: string) {
    this._creatorUserName = value;
  }
  public resetCreatorUserName() {
    this._creatorUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorUserNameInput() {
    return this._creatorUserName;
  }

  // job_id - computed: false, optional: true, required: false
  private _jobId?: number; 
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }
  public set jobId(value: number) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // run_as_user_name - computed: true, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DataDatabricksJobJobSettingsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataDatabricksJobJobSettingsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
