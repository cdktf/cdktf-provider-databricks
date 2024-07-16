/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededList,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnFailure,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnFailureToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnFailureToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnFailureList,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStart,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStartToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStartToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStartList,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededList,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskConditionTask,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskConditionTaskToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskConditionTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskConditionTaskOutputReference,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDbtTask,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDbtTaskToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDbtTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDbtTaskOutputReference,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDependsOn,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDependsOnToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDependsOnToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDependsOnList,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskEmailNotifications,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskEmailNotificationsToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskEmailNotificationsToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskEmailNotificationsOutputReference,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskHealth,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskHealthToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskHealthToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskHealthOutputReference,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskLibrary,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskLibraryToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskLibraryToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskLibraryList,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNewCluster,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNewClusterToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNewClusterToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNewClusterOutputReference,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotebookTask,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotebookTaskToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotebookTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotebookTaskOutputReference,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotificationSettings,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotificationSettingsToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotificationSettingsToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotificationSettingsOutputReference,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPipelineTask,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPipelineTaskToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPipelineTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPipelineTaskOutputReference,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPythonWheelTask,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPythonWheelTaskToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPythonWheelTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPythonWheelTaskOutputReference,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskRunJobTask,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskRunJobTaskToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskRunJobTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskRunJobTaskOutputReference,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkJarTask,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkJarTaskToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkJarTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkJarTaskOutputReference,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkPythonTask,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkPythonTaskToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkPythonTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkPythonTaskOutputReference,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkSubmitTask,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkSubmitTaskToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkSubmitTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkSubmitTaskOutputReference,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSqlTask,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSqlTaskToTerraform,
dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSqlTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSqlTaskOutputReference,
DataDatabricksJobJobSettingsSettingsTaskConditionTask,
dataDatabricksJobJobSettingsSettingsTaskConditionTaskToTerraform,
dataDatabricksJobJobSettingsSettingsTaskConditionTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskConditionTaskOutputReference,
DataDatabricksJobJobSettingsSettingsTaskDbtTask,
dataDatabricksJobJobSettingsSettingsTaskDbtTaskToTerraform,
dataDatabricksJobJobSettingsSettingsTaskDbtTaskToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskDbtTaskOutputReference,
DataDatabricksJobJobSettingsSettingsTaskDependsOn,
dataDatabricksJobJobSettingsSettingsTaskDependsOnToTerraform,
dataDatabricksJobJobSettingsSettingsTaskDependsOnToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskDependsOnList,
DataDatabricksJobJobSettingsSettingsTaskEmailNotifications,
dataDatabricksJobJobSettingsSettingsTaskEmailNotificationsToTerraform,
dataDatabricksJobJobSettingsSettingsTaskEmailNotificationsToHclTerraform,
DataDatabricksJobJobSettingsSettingsTaskEmailNotificationsOutputReference,
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
DataDatabricksJobJobSettingsSettingsEnvironment,
dataDatabricksJobJobSettingsSettingsEnvironmentToTerraform,
dataDatabricksJobJobSettingsSettingsEnvironmentToHclTerraform,
DataDatabricksJobJobSettingsSettingsEnvironmentList,
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
DataDatabricksJobJobSettingsSettingsSparkSubmitTaskOutputReference } from './structs0'
export interface DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccessToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccessToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccess | cdktf.IResolvable): any {
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

export class DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccess | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccess | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccessList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccess[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccessOutputReference {
    return new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotifications {
  /**
  * on_duration_warning_threshold_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_duration_warning_threshold_exceeded DataDatabricksJob#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_failure DataDatabricksJob#on_failure}
  */
  readonly onFailure?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnFailure[] | cdktf.IResolvable;
  /**
  * on_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_start DataDatabricksJob#on_start}
  */
  readonly onStart?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStart[] | cdktf.IResolvable;
  /**
  * on_streaming_backlog_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_streaming_backlog_exceeded DataDatabricksJob#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_success DataDatabricksJob#on_success}
  */
  readonly onSuccess?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccess[] | cdktf.IResolvable;
}

export function dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOutputReference | DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_duration_warning_threshold_exceeded: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededToTerraform, true)(struct!.onDurationWarningThresholdExceeded),
    on_failure: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnFailureToTerraform, true)(struct!.onFailure),
    on_start: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStartToTerraform, true)(struct!.onStart),
    on_streaming_backlog_exceeded: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededToTerraform, true)(struct!.onStreamingBacklogExceeded),
    on_success: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccessToTerraform, true)(struct!.onSuccess),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOutputReference | DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_duration_warning_threshold_exceeded: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform, true)(struct!.onDurationWarningThresholdExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededList",
    },
    on_failure: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnFailureToHclTerraform, true)(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnFailureList",
    },
    on_start: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStartToHclTerraform, true)(struct!.onStart),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStartList",
    },
    on_streaming_backlog_exceeded: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededToHclTerraform, true)(struct!.onStreamingBacklogExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededList",
    },
    on_success: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccessToHclTerraform, true)(struct!.onSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotifications | undefined {
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
    if (this._onStreamingBacklogExceeded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStreamingBacklogExceeded = this._onStreamingBacklogExceeded?.internalValue;
    }
    if (this._onSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDurationWarningThresholdExceeded.internalValue = undefined;
      this._onFailure.internalValue = undefined;
      this._onStart.internalValue = undefined;
      this._onStreamingBacklogExceeded.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDurationWarningThresholdExceeded.internalValue = value.onDurationWarningThresholdExceeded;
      this._onFailure.internalValue = value.onFailure;
      this._onStart.internalValue = value.onStart;
      this._onStreamingBacklogExceeded.internalValue = value.onStreamingBacklogExceeded;
      this._onSuccess.internalValue = value.onSuccess;
    }
  }

  // on_duration_warning_threshold_exceeded - computed: false, optional: true, required: false
  private _onDurationWarningThresholdExceeded = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededList(this, "on_duration_warning_threshold_exceeded", false);
  public get onDurationWarningThresholdExceeded() {
    return this._onDurationWarningThresholdExceeded;
  }
  public putOnDurationWarningThresholdExceeded(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable) {
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
  private _onFailure = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnFailureList(this, "on_failure", false);
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnFailure[] | cdktf.IResolvable) {
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
  private _onStart = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStartList(this, "on_start", false);
  public get onStart() {
    return this._onStart;
  }
  public putOnStart(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStart[] | cdktf.IResolvable) {
    this._onStart.internalValue = value;
  }
  public resetOnStart() {
    this._onStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartInput() {
    return this._onStart.internalValue;
  }

  // on_streaming_backlog_exceeded - computed: false, optional: true, required: false
  private _onStreamingBacklogExceeded = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededList(this, "on_streaming_backlog_exceeded", false);
  public get onStreamingBacklogExceeded() {
    return this._onStreamingBacklogExceeded;
  }
  public putOnStreamingBacklogExceeded(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable) {
    this._onStreamingBacklogExceeded.internalValue = value;
  }
  public resetOnStreamingBacklogExceeded() {
    this._onStreamingBacklogExceeded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStreamingBacklogExceededInput() {
    return this._onStreamingBacklogExceeded.internalValue;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccessList(this, "on_success", false);
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOnSuccess[] | cdktf.IResolvable) {
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
export interface DataDatabricksJobJobSettingsSettingsTaskForEachTaskTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#description DataDatabricksJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#environment_key DataDatabricksJob#environment_key}
  */
  readonly environmentKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#existing_cluster_id DataDatabricksJob#existing_cluster_id}
  */
  readonly existingClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#job_cluster_key DataDatabricksJob#job_cluster_key}
  */
  readonly jobClusterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#max_retries DataDatabricksJob#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#min_retry_interval_millis DataDatabricksJob#min_retry_interval_millis}
  */
  readonly minRetryIntervalMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#retry_on_timeout DataDatabricksJob#retry_on_timeout}
  */
  readonly retryOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#run_if DataDatabricksJob#run_if}
  */
  readonly runIf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#task_key DataDatabricksJob#task_key}
  */
  readonly taskKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#timeout_seconds DataDatabricksJob#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * condition_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#condition_task DataDatabricksJob#condition_task}
  */
  readonly conditionTask?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskConditionTask;
  /**
  * dbt_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#dbt_task DataDatabricksJob#dbt_task}
  */
  readonly dbtTask?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDbtTask;
  /**
  * depends_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#depends_on DataDatabricksJob#depends_on}
  */
  readonly dependsOn?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDependsOn[] | cdktf.IResolvable;
  /**
  * email_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#email_notifications DataDatabricksJob#email_notifications}
  */
  readonly emailNotifications?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskEmailNotifications;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#health DataDatabricksJob#health}
  */
  readonly health?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskHealth;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#library DataDatabricksJob#library}
  */
  readonly library?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskLibrary[] | cdktf.IResolvable;
  /**
  * new_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#new_cluster DataDatabricksJob#new_cluster}
  */
  readonly newCluster?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNewCluster;
  /**
  * notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#notebook_task DataDatabricksJob#notebook_task}
  */
  readonly notebookTask?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotebookTask;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#notification_settings DataDatabricksJob#notification_settings}
  */
  readonly notificationSettings?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotificationSettings;
  /**
  * pipeline_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#pipeline_task DataDatabricksJob#pipeline_task}
  */
  readonly pipelineTask?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPipelineTask;
  /**
  * python_wheel_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#python_wheel_task DataDatabricksJob#python_wheel_task}
  */
  readonly pythonWheelTask?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPythonWheelTask;
  /**
  * run_job_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#run_job_task DataDatabricksJob#run_job_task}
  */
  readonly runJobTask?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskRunJobTask;
  /**
  * spark_jar_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#spark_jar_task DataDatabricksJob#spark_jar_task}
  */
  readonly sparkJarTask?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkJarTask;
  /**
  * spark_python_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#spark_python_task DataDatabricksJob#spark_python_task}
  */
  readonly sparkPythonTask?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkPythonTask;
  /**
  * spark_submit_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#spark_submit_task DataDatabricksJob#spark_submit_task}
  */
  readonly sparkSubmitTask?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkSubmitTask;
  /**
  * sql_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#sql_task DataDatabricksJob#sql_task}
  */
  readonly sqlTask?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSqlTask;
  /**
  * webhook_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#webhook_notifications DataDatabricksJob#webhook_notifications}
  */
  readonly webhookNotifications?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotifications;
}

export function dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskForEachTaskTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    environment_key: cdktf.stringToTerraform(struct!.environmentKey),
    existing_cluster_id: cdktf.stringToTerraform(struct!.existingClusterId),
    job_cluster_key: cdktf.stringToTerraform(struct!.jobClusterKey),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    min_retry_interval_millis: cdktf.numberToTerraform(struct!.minRetryIntervalMillis),
    retry_on_timeout: cdktf.booleanToTerraform(struct!.retryOnTimeout),
    run_if: cdktf.stringToTerraform(struct!.runIf),
    task_key: cdktf.stringToTerraform(struct!.taskKey),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    condition_task: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskConditionTaskToTerraform(struct!.conditionTask),
    dbt_task: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDbtTaskToTerraform(struct!.dbtTask),
    depends_on: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDependsOnToTerraform, true)(struct!.dependsOn),
    email_notifications: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskEmailNotificationsToTerraform(struct!.emailNotifications),
    health: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskHealthToTerraform(struct!.health),
    library: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskLibraryToTerraform, true)(struct!.library),
    new_cluster: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNewClusterToTerraform(struct!.newCluster),
    notebook_task: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotebookTaskToTerraform(struct!.notebookTask),
    notification_settings: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotificationSettingsToTerraform(struct!.notificationSettings),
    pipeline_task: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPipelineTaskToTerraform(struct!.pipelineTask),
    python_wheel_task: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPythonWheelTaskToTerraform(struct!.pythonWheelTask),
    run_job_task: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskRunJobTaskToTerraform(struct!.runJobTask),
    spark_jar_task: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkJarTaskToTerraform(struct!.sparkJarTask),
    spark_python_task: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkPythonTaskToTerraform(struct!.sparkPythonTask),
    spark_submit_task: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkSubmitTaskToTerraform(struct!.sparkSubmitTask),
    sql_task: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSqlTaskToTerraform(struct!.sqlTask),
    webhook_notifications: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsToTerraform(struct!.webhookNotifications),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskForEachTaskTask): any {
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
    environment_key: {
      value: cdktf.stringToHclTerraform(struct!.environmentKey),
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
    job_cluster_key: {
      value: cdktf.stringToHclTerraform(struct!.jobClusterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    retry_on_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.retryOnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_if: {
      value: cdktf.stringToHclTerraform(struct!.runIf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_key: {
      value: cdktf.stringToHclTerraform(struct!.taskKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    condition_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskConditionTaskToHclTerraform(struct!.conditionTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskConditionTaskList",
    },
    dbt_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDbtTaskToHclTerraform(struct!.dbtTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDbtTaskList",
    },
    depends_on: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDependsOnToHclTerraform, true)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDependsOnList",
    },
    email_notifications: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskEmailNotificationsToHclTerraform(struct!.emailNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskEmailNotificationsList",
    },
    health: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskHealthToHclTerraform(struct!.health),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskHealthList",
    },
    library: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskLibraryList",
    },
    new_cluster: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNewClusterToHclTerraform(struct!.newCluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNewClusterList",
    },
    notebook_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotebookTaskToHclTerraform(struct!.notebookTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotebookTaskList",
    },
    notification_settings: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotificationSettingsToHclTerraform(struct!.notificationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotificationSettingsList",
    },
    pipeline_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPipelineTaskToHclTerraform(struct!.pipelineTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPipelineTaskList",
    },
    python_wheel_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPythonWheelTaskToHclTerraform(struct!.pythonWheelTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPythonWheelTaskList",
    },
    run_job_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskRunJobTaskToHclTerraform(struct!.runJobTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskRunJobTaskList",
    },
    spark_jar_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkJarTaskToHclTerraform(struct!.sparkJarTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkJarTaskList",
    },
    spark_python_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkPythonTaskToHclTerraform(struct!.sparkPythonTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkPythonTaskList",
    },
    spark_submit_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkSubmitTaskToHclTerraform(struct!.sparkSubmitTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkSubmitTaskList",
    },
    sql_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSqlTaskToHclTerraform(struct!.sqlTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSqlTaskList",
    },
    webhook_notifications: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsToHclTerraform(struct!.webhookNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskForEachTaskTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._environmentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentKey = this._environmentKey;
    }
    if (this._existingClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingClusterId = this._existingClusterId;
    }
    if (this._jobClusterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobClusterKey = this._jobClusterKey;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._minRetryIntervalMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRetryIntervalMillis = this._minRetryIntervalMillis;
    }
    if (this._retryOnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOnTimeout = this._retryOnTimeout;
    }
    if (this._runIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.runIf = this._runIf;
    }
    if (this._taskKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskKey = this._taskKey;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._conditionTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionTask = this._conditionTask?.internalValue;
    }
    if (this._dbtTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtTask = this._dbtTask?.internalValue;
    }
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._emailNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailNotifications = this._emailNotifications?.internalValue;
    }
    if (this._health?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health?.internalValue;
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
    if (this._pipelineTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineTask = this._pipelineTask?.internalValue;
    }
    if (this._pythonWheelTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonWheelTask = this._pythonWheelTask?.internalValue;
    }
    if (this._runJobTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runJobTask = this._runJobTask?.internalValue;
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
    if (this._sqlTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlTask = this._sqlTask?.internalValue;
    }
    if (this._webhookNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookNotifications = this._webhookNotifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._environmentKey = undefined;
      this._existingClusterId = undefined;
      this._jobClusterKey = undefined;
      this._maxRetries = undefined;
      this._minRetryIntervalMillis = undefined;
      this._retryOnTimeout = undefined;
      this._runIf = undefined;
      this._taskKey = undefined;
      this._timeoutSeconds = undefined;
      this._conditionTask.internalValue = undefined;
      this._dbtTask.internalValue = undefined;
      this._dependsOn.internalValue = undefined;
      this._emailNotifications.internalValue = undefined;
      this._health.internalValue = undefined;
      this._library.internalValue = undefined;
      this._newCluster.internalValue = undefined;
      this._notebookTask.internalValue = undefined;
      this._notificationSettings.internalValue = undefined;
      this._pipelineTask.internalValue = undefined;
      this._pythonWheelTask.internalValue = undefined;
      this._runJobTask.internalValue = undefined;
      this._sparkJarTask.internalValue = undefined;
      this._sparkPythonTask.internalValue = undefined;
      this._sparkSubmitTask.internalValue = undefined;
      this._sqlTask.internalValue = undefined;
      this._webhookNotifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._environmentKey = value.environmentKey;
      this._existingClusterId = value.existingClusterId;
      this._jobClusterKey = value.jobClusterKey;
      this._maxRetries = value.maxRetries;
      this._minRetryIntervalMillis = value.minRetryIntervalMillis;
      this._retryOnTimeout = value.retryOnTimeout;
      this._runIf = value.runIf;
      this._taskKey = value.taskKey;
      this._timeoutSeconds = value.timeoutSeconds;
      this._conditionTask.internalValue = value.conditionTask;
      this._dbtTask.internalValue = value.dbtTask;
      this._dependsOn.internalValue = value.dependsOn;
      this._emailNotifications.internalValue = value.emailNotifications;
      this._health.internalValue = value.health;
      this._library.internalValue = value.library;
      this._newCluster.internalValue = value.newCluster;
      this._notebookTask.internalValue = value.notebookTask;
      this._notificationSettings.internalValue = value.notificationSettings;
      this._pipelineTask.internalValue = value.pipelineTask;
      this._pythonWheelTask.internalValue = value.pythonWheelTask;
      this._runJobTask.internalValue = value.runJobTask;
      this._sparkJarTask.internalValue = value.sparkJarTask;
      this._sparkPythonTask.internalValue = value.sparkPythonTask;
      this._sparkSubmitTask.internalValue = value.sparkSubmitTask;
      this._sqlTask.internalValue = value.sqlTask;
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

  // environment_key - computed: false, optional: true, required: false
  private _environmentKey?: string; 
  public get environmentKey() {
    return this.getStringAttribute('environment_key');
  }
  public set environmentKey(value: string) {
    this._environmentKey = value;
  }
  public resetEnvironmentKey() {
    this._environmentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentKeyInput() {
    return this._environmentKey;
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

  // job_cluster_key - computed: false, optional: true, required: false
  private _jobClusterKey?: string; 
  public get jobClusterKey() {
    return this.getStringAttribute('job_cluster_key');
  }
  public set jobClusterKey(value: string) {
    this._jobClusterKey = value;
  }
  public resetJobClusterKey() {
    this._jobClusterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobClusterKeyInput() {
    return this._jobClusterKey;
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

  // retry_on_timeout - computed: true, optional: true, required: false
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

  // run_if - computed: false, optional: true, required: false
  private _runIf?: string; 
  public get runIf() {
    return this.getStringAttribute('run_if');
  }
  public set runIf(value: string) {
    this._runIf = value;
  }
  public resetRunIf() {
    this._runIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runIfInput() {
    return this._runIf;
  }

  // task_key - computed: false, optional: false, required: true
  private _taskKey?: string; 
  public get taskKey() {
    return this.getStringAttribute('task_key');
  }
  public set taskKey(value: string) {
    this._taskKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskKeyInput() {
    return this._taskKey;
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

  // condition_task - computed: false, optional: true, required: false
  private _conditionTask = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskConditionTaskOutputReference(this, "condition_task");
  public get conditionTask() {
    return this._conditionTask;
  }
  public putConditionTask(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskConditionTask) {
    this._conditionTask.internalValue = value;
  }
  public resetConditionTask() {
    this._conditionTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTaskInput() {
    return this._conditionTask.internalValue;
  }

  // dbt_task - computed: false, optional: true, required: false
  private _dbtTask = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDbtTaskOutputReference(this, "dbt_task");
  public get dbtTask() {
    return this._dbtTask;
  }
  public putDbtTask(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDbtTask) {
    this._dbtTask.internalValue = value;
  }
  public resetDbtTask() {
    this._dbtTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtTaskInput() {
    return this._dbtTask.internalValue;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskDependsOn[] | cdktf.IResolvable) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
  }

  // email_notifications - computed: false, optional: true, required: false
  private _emailNotifications = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskEmailNotificationsOutputReference(this, "email_notifications");
  public get emailNotifications() {
    return this._emailNotifications;
  }
  public putEmailNotifications(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskEmailNotifications) {
    this._emailNotifications.internalValue = value;
  }
  public resetEmailNotifications() {
    this._emailNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailNotificationsInput() {
    return this._emailNotifications.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskLibraryList(this, "library", false);
  public get library() {
    return this._library;
  }
  public putLibrary(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskLibrary[] | cdktf.IResolvable) {
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
  private _newCluster = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNewClusterOutputReference(this, "new_cluster");
  public get newCluster() {
    return this._newCluster;
  }
  public putNewCluster(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNewCluster) {
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
  private _notebookTask = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotebookTaskOutputReference(this, "notebook_task");
  public get notebookTask() {
    return this._notebookTask;
  }
  public putNotebookTask(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotebookTask) {
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
  private _notificationSettings = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // pipeline_task - computed: false, optional: true, required: false
  private _pipelineTask = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPipelineTaskOutputReference(this, "pipeline_task");
  public get pipelineTask() {
    return this._pipelineTask;
  }
  public putPipelineTask(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPipelineTask) {
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
  private _pythonWheelTask = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPythonWheelTaskOutputReference(this, "python_wheel_task");
  public get pythonWheelTask() {
    return this._pythonWheelTask;
  }
  public putPythonWheelTask(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskPythonWheelTask) {
    this._pythonWheelTask.internalValue = value;
  }
  public resetPythonWheelTask() {
    this._pythonWheelTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonWheelTaskInput() {
    return this._pythonWheelTask.internalValue;
  }

  // run_job_task - computed: false, optional: true, required: false
  private _runJobTask = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskRunJobTaskOutputReference(this, "run_job_task");
  public get runJobTask() {
    return this._runJobTask;
  }
  public putRunJobTask(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskRunJobTask) {
    this._runJobTask.internalValue = value;
  }
  public resetRunJobTask() {
    this._runJobTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runJobTaskInput() {
    return this._runJobTask.internalValue;
  }

  // spark_jar_task - computed: false, optional: true, required: false
  private _sparkJarTask = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkJarTaskOutputReference(this, "spark_jar_task");
  public get sparkJarTask() {
    return this._sparkJarTask;
  }
  public putSparkJarTask(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkJarTask) {
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
  private _sparkPythonTask = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkPythonTaskOutputReference(this, "spark_python_task");
  public get sparkPythonTask() {
    return this._sparkPythonTask;
  }
  public putSparkPythonTask(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkPythonTask) {
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
  private _sparkSubmitTask = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkSubmitTaskOutputReference(this, "spark_submit_task");
  public get sparkSubmitTask() {
    return this._sparkSubmitTask;
  }
  public putSparkSubmitTask(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSparkSubmitTask) {
    this._sparkSubmitTask.internalValue = value;
  }
  public resetSparkSubmitTask() {
    this._sparkSubmitTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSubmitTaskInput() {
    return this._sparkSubmitTask.internalValue;
  }

  // sql_task - computed: false, optional: true, required: false
  private _sqlTask = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSqlTaskOutputReference(this, "sql_task");
  public get sqlTask() {
    return this._sqlTask;
  }
  public putSqlTask(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskSqlTask) {
    this._sqlTask.internalValue = value;
  }
  public resetSqlTask() {
    this._sqlTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTaskInput() {
    return this._sqlTask.internalValue;
  }

  // webhook_notifications - computed: false, optional: true, required: false
  private _webhookNotifications = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotificationsOutputReference(this, "webhook_notifications");
  public get webhookNotifications() {
    return this._webhookNotifications;
  }
  public putWebhookNotifications(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskWebhookNotifications) {
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
export interface DataDatabricksJobJobSettingsSettingsTaskForEachTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#concurrency DataDatabricksJob#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#inputs DataDatabricksJob#inputs}
  */
  readonly inputs: string;
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#task DataDatabricksJob#task}
  */
  readonly task: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTask;
}

export function dataDatabricksJobJobSettingsSettingsTaskForEachTaskToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskForEachTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    inputs: cdktf.stringToTerraform(struct!.inputs),
    task: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskToTerraform(struct!.task),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskForEachTaskToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskForEachTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskForEachTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inputs: {
      value: cdktf.stringToHclTerraform(struct!.inputs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskToHclTerraform(struct!.task),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskForEachTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskForEachTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._task?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskForEachTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._concurrency = undefined;
      this._inputs = undefined;
      this._task.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._concurrency = value.concurrency;
      this._inputs = value.inputs;
      this._task.internalValue = value.task;
    }
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string; 
  public get inputs() {
    return this.getStringAttribute('inputs');
  }
  public set inputs(value: string) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // task - computed: false, optional: false, required: true
  private _task = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskTaskOutputReference(this, "task");
  public get task() {
    return this._task;
  }
  public putTask(value: DataDatabricksJobJobSettingsSettingsTaskForEachTaskTask) {
    this._task.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskHealthRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#metric DataDatabricksJob#metric}
  */
  readonly metric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#op DataDatabricksJob#op}
  */
  readonly op: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#value DataDatabricksJob#value}
  */
  readonly value: number;
}

export function dataDatabricksJobJobSettingsSettingsTaskHealthRulesToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskHealthRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.stringToTerraform(struct!.metric),
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskHealthRulesToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskHealthRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataDatabricksJobJobSettingsSettingsTaskHealthRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskHealthRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskHealthRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._op = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._op = value.op;
      this._value = value.value;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataDatabricksJobJobSettingsSettingsTaskHealthRulesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsTaskHealthRules[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsTaskHealthRulesOutputReference {
    return new DataDatabricksJobJobSettingsSettingsTaskHealthRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskHealth {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#rules DataDatabricksJob#rules}
  */
  readonly rules: DataDatabricksJobJobSettingsSettingsTaskHealthRules[] | cdktf.IResolvable;
}

export function dataDatabricksJobJobSettingsSettingsTaskHealthToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskHealthOutputReference | DataDatabricksJobJobSettingsSettingsTaskHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskHealthRulesToTerraform, true)(struct!.rules),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskHealthToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskHealthOutputReference | DataDatabricksJobJobSettingsSettingsTaskHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskHealthRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskHealthRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataDatabricksJobJobSettingsSettingsTaskHealthRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataDatabricksJobJobSettingsSettingsTaskHealthRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskLibraryCran {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#package DataDatabricksJob#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#repo DataDatabricksJob#repo}
  */
  readonly repo?: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskLibraryCranToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskLibraryCranOutputReference | DataDatabricksJobJobSettingsSettingsTaskLibraryCran): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskLibraryCranToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskLibraryCranOutputReference | DataDatabricksJobJobSettingsSettingsTaskLibraryCran): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package: {
      value: cdktf.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskLibraryCranOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskLibraryCran | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskLibraryCran | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._package = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._package = value.package;
      this._repo = value.repo;
    }
  }

  // package - computed: false, optional: false, required: true
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#coordinates DataDatabricksJob#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#exclusions DataDatabricksJob#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#repo DataDatabricksJob#repo}
  */
  readonly repo?: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskLibraryMavenToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskLibraryMavenOutputReference | DataDatabricksJobJobSettingsSettingsTaskLibraryMaven): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinates: cdktf.stringToTerraform(struct!.coordinates),
    exclusions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusions),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskLibraryMavenToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskLibraryMavenOutputReference | DataDatabricksJobJobSettingsSettingsTaskLibraryMaven): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coordinates: {
      value: cdktf.stringToHclTerraform(struct!.coordinates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskLibraryMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskLibraryMaven | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinates !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinates = this._coordinates;
    }
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskLibraryMaven | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coordinates = undefined;
      this._exclusions = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coordinates = value.coordinates;
      this._exclusions = value.exclusions;
      this._repo = value.repo;
    }
  }

  // coordinates - computed: false, optional: false, required: true
  private _coordinates?: string; 
  public get coordinates() {
    return this.getStringAttribute('coordinates');
  }
  public set coordinates(value: string) {
    this._coordinates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskLibraryPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#package DataDatabricksJob#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#repo DataDatabricksJob#repo}
  */
  readonly repo?: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskLibraryPypiToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskLibraryPypiOutputReference | DataDatabricksJobJobSettingsSettingsTaskLibraryPypi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskLibraryPypiToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskLibraryPypiOutputReference | DataDatabricksJobJobSettingsSettingsTaskLibraryPypi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package: {
      value: cdktf.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskLibraryPypiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskLibraryPypi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskLibraryPypi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._package = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._package = value.package;
      this._repo = value.repo;
    }
  }

  // package - computed: false, optional: false, required: true
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#egg DataDatabricksJob#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#jar DataDatabricksJob#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#requirements DataDatabricksJob#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#whl DataDatabricksJob#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#cran DataDatabricksJob#cran}
  */
  readonly cran?: DataDatabricksJobJobSettingsSettingsTaskLibraryCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#maven DataDatabricksJob#maven}
  */
  readonly maven?: DataDatabricksJobJobSettingsSettingsTaskLibraryMaven;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#pypi DataDatabricksJob#pypi}
  */
  readonly pypi?: DataDatabricksJobJobSettingsSettingsTaskLibraryPypi;
}

export function dataDatabricksJobJobSettingsSettingsTaskLibraryToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egg: cdktf.stringToTerraform(struct!.egg),
    jar: cdktf.stringToTerraform(struct!.jar),
    requirements: cdktf.stringToTerraform(struct!.requirements),
    whl: cdktf.stringToTerraform(struct!.whl),
    cran: dataDatabricksJobJobSettingsSettingsTaskLibraryCranToTerraform(struct!.cran),
    maven: dataDatabricksJobJobSettingsSettingsTaskLibraryMavenToTerraform(struct!.maven),
    pypi: dataDatabricksJobJobSettingsSettingsTaskLibraryPypiToTerraform(struct!.pypi),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskLibraryToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egg: {
      value: cdktf.stringToHclTerraform(struct!.egg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jar: {
      value: cdktf.stringToHclTerraform(struct!.jar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requirements: {
      value: cdktf.stringToHclTerraform(struct!.requirements),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whl: {
      value: cdktf.stringToHclTerraform(struct!.whl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cran: {
      value: dataDatabricksJobJobSettingsSettingsTaskLibraryCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskLibraryCranList",
    },
    maven: {
      value: dataDatabricksJobJobSettingsSettingsTaskLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskLibraryMavenList",
    },
    pypi: {
      value: dataDatabricksJobJobSettingsSettingsTaskLibraryPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskLibraryPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskLibraryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskLibrary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egg !== undefined) {
      hasAnyValues = true;
      internalValueResult.egg = this._egg;
    }
    if (this._jar !== undefined) {
      hasAnyValues = true;
      internalValueResult.jar = this._jar;
    }
    if (this._requirements !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirements = this._requirements;
    }
    if (this._whl !== undefined) {
      hasAnyValues = true;
      internalValueResult.whl = this._whl;
    }
    if (this._cran?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cran = this._cran?.internalValue;
    }
    if (this._maven?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maven = this._maven?.internalValue;
    }
    if (this._pypi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pypi = this._pypi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskLibrary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egg = undefined;
      this._jar = undefined;
      this._requirements = undefined;
      this._whl = undefined;
      this._cran.internalValue = undefined;
      this._maven.internalValue = undefined;
      this._pypi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egg = value.egg;
      this._jar = value.jar;
      this._requirements = value.requirements;
      this._whl = value.whl;
      this._cran.internalValue = value.cran;
      this._maven.internalValue = value.maven;
      this._pypi.internalValue = value.pypi;
    }
  }

  // egg - computed: false, optional: true, required: false
  private _egg?: string; 
  public get egg() {
    return this.getStringAttribute('egg');
  }
  public set egg(value: string) {
    this._egg = value;
  }
  public resetEgg() {
    this._egg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eggInput() {
    return this._egg;
  }

  // jar - computed: false, optional: true, required: false
  private _jar?: string; 
  public get jar() {
    return this.getStringAttribute('jar');
  }
  public set jar(value: string) {
    this._jar = value;
  }
  public resetJar() {
    this._jar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarInput() {
    return this._jar;
  }

  // requirements - computed: false, optional: true, required: false
  private _requirements?: string; 
  public get requirements() {
    return this.getStringAttribute('requirements');
  }
  public set requirements(value: string) {
    this._requirements = value;
  }
  public resetRequirements() {
    this._requirements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsInput() {
    return this._requirements;
  }

  // whl - computed: false, optional: true, required: false
  private _whl?: string; 
  public get whl() {
    return this.getStringAttribute('whl');
  }
  public set whl(value: string) {
    this._whl = value;
  }
  public resetWhl() {
    this._whl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whlInput() {
    return this._whl;
  }

  // cran - computed: false, optional: true, required: false
  private _cran = new DataDatabricksJobJobSettingsSettingsTaskLibraryCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: DataDatabricksJobJobSettingsSettingsTaskLibraryCran) {
    this._cran.internalValue = value;
  }
  public resetCran() {
    this._cran.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cranInput() {
    return this._cran.internalValue;
  }

  // maven - computed: false, optional: true, required: false
  private _maven = new DataDatabricksJobJobSettingsSettingsTaskLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: DataDatabricksJobJobSettingsSettingsTaskLibraryMaven) {
    this._maven.internalValue = value;
  }
  public resetMaven() {
    this._maven.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenInput() {
    return this._maven.internalValue;
  }

  // pypi - computed: false, optional: true, required: false
  private _pypi = new DataDatabricksJobJobSettingsSettingsTaskLibraryPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: DataDatabricksJobJobSettingsSettingsTaskLibraryPypi) {
    this._pypi.internalValue = value;
  }
  public resetPypi() {
    this._pypi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pypiInput() {
    return this._pypi.internalValue;
  }
}

export class DataDatabricksJobJobSettingsSettingsTaskLibraryList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsTaskLibrary[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsTaskLibraryOutputReference {
    return new DataDatabricksJobJobSettingsSettingsTaskLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#max_workers DataDatabricksJob#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#min_workers DataDatabricksJob#min_workers}
  */
  readonly minWorkers?: number;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscaleToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscaleOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktf.numberToTerraform(struct!.maxWorkers),
    min_workers: cdktf.numberToTerraform(struct!.minWorkers),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscaleToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscaleOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_workers: {
      value: cdktf.numberToHclTerraform(struct!.maxWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_workers: {
      value: cdktf.numberToHclTerraform(struct!.minWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkers = this._maxWorkers;
    }
    if (this._minWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWorkers = this._minWorkers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxWorkers = undefined;
      this._minWorkers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxWorkers = value.maxWorkers;
      this._minWorkers = value.minWorkers;
    }
  }

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // min_workers - computed: false, optional: true, required: false
  private _minWorkers?: number; 
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }
  public set minWorkers(value: number) {
    this._minWorkers = value;
  }
  public resetMinWorkers() {
    this._minWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkersInput() {
    return this._minWorkers;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#availability DataDatabricksJob#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#ebs_volume_count DataDatabricksJob#ebs_volume_count}
  */
  readonly ebsVolumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#ebs_volume_size DataDatabricksJob#ebs_volume_size}
  */
  readonly ebsVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#ebs_volume_type DataDatabricksJob#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#first_on_demand DataDatabricksJob#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#instance_profile_arn DataDatabricksJob#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#spot_bid_price_percent DataDatabricksJob#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#zone_id DataDatabricksJob#zone_id}
  */
  readonly zoneId?: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributesToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributesOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    ebs_volume_count: cdktf.numberToTerraform(struct!.ebsVolumeCount),
    ebs_volume_size: cdktf.numberToTerraform(struct!.ebsVolumeSize),
    ebs_volume_type: cdktf.stringToTerraform(struct!.ebsVolumeType),
    first_on_demand: cdktf.numberToTerraform(struct!.firstOnDemand),
    instance_profile_arn: cdktf.stringToTerraform(struct!.instanceProfileArn),
    spot_bid_price_percent: cdktf.numberToTerraform(struct!.spotBidPricePercent),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributesToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributesOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_volume_count: {
      value: cdktf.numberToHclTerraform(struct!.ebsVolumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.ebsVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.ebsVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_on_demand: {
      value: cdktf.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_profile_arn: {
      value: cdktf.stringToHclTerraform(struct!.instanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_bid_price_percent: {
      value: cdktf.numberToHclTerraform(struct!.spotBidPricePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._ebsVolumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeCount = this._ebsVolumeCount;
    }
    if (this._ebsVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeSize = this._ebsVolumeSize;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._instanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileArn = this._instanceProfileArn;
    }
    if (this._spotBidPricePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidPricePercent = this._spotBidPricePercent;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._ebsVolumeCount = undefined;
      this._ebsVolumeSize = undefined;
      this._ebsVolumeType = undefined;
      this._firstOnDemand = undefined;
      this._instanceProfileArn = undefined;
      this._spotBidPricePercent = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._ebsVolumeCount = value.ebsVolumeCount;
      this._ebsVolumeSize = value.ebsVolumeSize;
      this._ebsVolumeType = value.ebsVolumeType;
      this._firstOnDemand = value.firstOnDemand;
      this._instanceProfileArn = value.instanceProfileArn;
      this._spotBidPricePercent = value.spotBidPricePercent;
      this._zoneId = value.zoneId;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // ebs_volume_count - computed: false, optional: true, required: false
  private _ebsVolumeCount?: number; 
  public get ebsVolumeCount() {
    return this.getNumberAttribute('ebs_volume_count');
  }
  public set ebsVolumeCount(value: number) {
    this._ebsVolumeCount = value;
  }
  public resetEbsVolumeCount() {
    this._ebsVolumeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeCountInput() {
    return this._ebsVolumeCount;
  }

  // ebs_volume_size - computed: false, optional: true, required: false
  private _ebsVolumeSize?: number; 
  public get ebsVolumeSize() {
    return this.getNumberAttribute('ebs_volume_size');
  }
  public set ebsVolumeSize(value: number) {
    this._ebsVolumeSize = value;
  }
  public resetEbsVolumeSize() {
    this._ebsVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeSizeInput() {
    return this._ebsVolumeSize;
  }

  // ebs_volume_type - computed: false, optional: true, required: false
  private _ebsVolumeType?: string; 
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }
  public set ebsVolumeType(value: string) {
    this._ebsVolumeType = value;
  }
  public resetEbsVolumeType() {
    this._ebsVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeTypeInput() {
    return this._ebsVolumeType;
  }

  // first_on_demand - computed: false, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // instance_profile_arn - computed: false, optional: true, required: false
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // spot_bid_price_percent - computed: false, optional: true, required: false
  private _spotBidPricePercent?: number; 
  public get spotBidPricePercent() {
    return this.getNumberAttribute('spot_bid_price_percent');
  }
  public set spotBidPricePercent(value: number) {
    this._spotBidPricePercent = value;
  }
  public resetSpotBidPricePercent() {
    this._spotBidPricePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBidPricePercentInput() {
    return this._spotBidPricePercent;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#availability DataDatabricksJob#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#first_on_demand DataDatabricksJob#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#spot_bid_max_price DataDatabricksJob#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributesToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributesOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    first_on_demand: cdktf.numberToTerraform(struct!.firstOnDemand),
    spot_bid_max_price: cdktf.numberToTerraform(struct!.spotBidMaxPrice),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributesToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributesOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_on_demand: {
      value: cdktf.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_bid_max_price: {
      value: cdktf.numberToHclTerraform(struct!.spotBidMaxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._spotBidMaxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidMaxPrice = this._spotBidMaxPrice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._firstOnDemand = undefined;
      this._spotBidMaxPrice = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._firstOnDemand = value.firstOnDemand;
      this._spotBidMaxPrice = value.spotBidMaxPrice;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // first_on_demand - computed: false, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // spot_bid_max_price - computed: false, optional: true, required: false
  private _spotBidMaxPrice?: number; 
  public get spotBidMaxPrice() {
    return this.getNumberAttribute('spot_bid_max_price');
  }
  public set spotBidMaxPrice(value: number) {
    this._spotBidMaxPrice = value;
  }
  public resetSpotBidMaxPrice() {
    this._spotBidMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBidMaxPriceInput() {
    return this._spotBidMaxPrice;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#destination DataDatabricksJob#destination}
  */
  readonly destination: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfsToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfsOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfsToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfsOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfs): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#canned_acl DataDatabricksJob#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#destination DataDatabricksJob#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#enable_encryption DataDatabricksJob#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#encryption_type DataDatabricksJob#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#endpoint DataDatabricksJob#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#kms_key DataDatabricksJob#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#region DataDatabricksJob#region}
  */
  readonly region?: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3ToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3OutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktf.stringToTerraform(struct!.cannedAcl),
    destination: cdktf.stringToTerraform(struct!.destination),
    enable_encryption: cdktf.booleanToTerraform(struct!.enableEncryption),
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3ToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3OutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canned_acl: {
      value: cdktf.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.enableEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable_encryption - computed: false, optional: true, required: false
  private _enableEncryption?: boolean | cdktf.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktf.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
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
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConf {
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#dbfs DataDatabricksJob#dbfs}
  */
  readonly dbfs?: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#s3 DataDatabricksJob#s3}
  */
  readonly s3?: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbfs: dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfsToTerraform(struct!.dbfs),
    s3: dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3ToTerraform(struct!.s3),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbfs: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfsList",
    },
    s3: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbfs = this._dbfs?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbfs.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbfs.internalValue = value.dbfs;
      this._s3.internalValue = value.s3;
    }
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfDbfs) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#mount_options DataDatabricksJob#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#server_address DataDatabricksJob#server_address}
  */
  readonly serverAddress: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfoToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_options: cdktf.stringToTerraform(struct!.mountOptions),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_options: {
      value: cdktf.stringToHclTerraform(struct!.mountOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountOptions = undefined;
      this._serverAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountOptions = value.mountOptions;
      this._serverAddress = value.serverAddress;
    }
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string; 
  public get mountOptions() {
    return this.getStringAttribute('mount_options');
  }
  public set mountOptions(value: string) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#local_mount_dir_path DataDatabricksJob#local_mount_dir_path}
  */
  readonly localMountDirPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#remote_mount_dir_path DataDatabricksJob#remote_mount_dir_path}
  */
  readonly remoteMountDirPath?: string;
  /**
  * network_filesystem_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#network_filesystem_info DataDatabricksJob#network_filesystem_info}
  */
  readonly networkFilesystemInfo: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfo;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_mount_dir_path: cdktf.stringToTerraform(struct!.localMountDirPath),
    remote_mount_dir_path: cdktf.stringToTerraform(struct!.remoteMountDirPath),
    network_filesystem_info: dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfoToTerraform(struct!.networkFilesystemInfo),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_mount_dir_path: {
      value: cdktf.stringToHclTerraform(struct!.localMountDirPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_mount_dir_path: {
      value: cdktf.stringToHclTerraform(struct!.remoteMountDirPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_filesystem_info: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct!.networkFilesystemInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localMountDirPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMountDirPath = this._localMountDirPath;
    }
    if (this._remoteMountDirPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteMountDirPath = this._remoteMountDirPath;
    }
    if (this._networkFilesystemInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFilesystemInfo = this._networkFilesystemInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localMountDirPath = undefined;
      this._remoteMountDirPath = undefined;
      this._networkFilesystemInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localMountDirPath = value.localMountDirPath;
      this._remoteMountDirPath = value.remoteMountDirPath;
      this._networkFilesystemInfo.internalValue = value.networkFilesystemInfo;
    }
  }

  // local_mount_dir_path - computed: false, optional: false, required: true
  private _localMountDirPath?: string; 
  public get localMountDirPath() {
    return this.getStringAttribute('local_mount_dir_path');
  }
  public set localMountDirPath(value: string) {
    this._localMountDirPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountDirPathInput() {
    return this._localMountDirPath;
  }

  // remote_mount_dir_path - computed: false, optional: true, required: false
  private _remoteMountDirPath?: string; 
  public get remoteMountDirPath() {
    return this.getStringAttribute('remote_mount_dir_path');
  }
  public set remoteMountDirPath(value: string) {
    this._remoteMountDirPath = value;
  }
  public resetRemoteMountDirPath() {
    this._remoteMountDirPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteMountDirPathInput() {
    return this._remoteMountDirPath;
  }

  // network_filesystem_info - computed: false, optional: false, required: true
  private _networkFilesystemInfo = new DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference(this, "network_filesystem_info");
  public get networkFilesystemInfo() {
    return this._networkFilesystemInfo;
  }
  public putNetworkFilesystemInfo(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoNetworkFilesystemInfo) {
    this._networkFilesystemInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFilesystemInfoInput() {
    return this._networkFilesystemInfo.internalValue;
  }
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfo[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoOutputReference {
    return new DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#password DataDatabricksJob#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#username DataDatabricksJob#username}
  */
  readonly username: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuthToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuthOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuthToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuthOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#url DataDatabricksJob#url}
  */
  readonly url: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#basic_auth DataDatabricksJob#basic_auth}
  */
  readonly basicAuth?: DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuth;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    basic_auth: dataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
      this._basicAuth.internalValue = value.basicAuth;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#availability DataDatabricksJob#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#boot_disk_size DataDatabricksJob#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#google_service_account DataDatabricksJob#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#local_ssd_count DataDatabricksJob#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#use_preemptible_executors DataDatabricksJob#use_preemptible_executors}
  */
  readonly usePreemptibleExecutors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#zone_id DataDatabricksJob#zone_id}
  */
  readonly zoneId?: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributesToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributesOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    boot_disk_size: cdktf.numberToTerraform(struct!.bootDiskSize),
    google_service_account: cdktf.stringToTerraform(struct!.googleServiceAccount),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    use_preemptible_executors: cdktf.booleanToTerraform(struct!.usePreemptibleExecutors),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributesToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributesOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.bootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    google_service_account: {
      value: cdktf.stringToHclTerraform(struct!.googleServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_preemptible_executors: {
      value: cdktf.booleanToHclTerraform(struct!.usePreemptibleExecutors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._bootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSize = this._bootDiskSize;
    }
    if (this._googleServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccount = this._googleServiceAccount;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._usePreemptibleExecutors !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePreemptibleExecutors = this._usePreemptibleExecutors;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._bootDiskSize = undefined;
      this._googleServiceAccount = undefined;
      this._localSsdCount = undefined;
      this._usePreemptibleExecutors = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._bootDiskSize = value.bootDiskSize;
      this._googleServiceAccount = value.googleServiceAccount;
      this._localSsdCount = value.localSsdCount;
      this._usePreemptibleExecutors = value.usePreemptibleExecutors;
      this._zoneId = value.zoneId;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // boot_disk_size - computed: false, optional: true, required: false
  private _bootDiskSize?: number; 
  public get bootDiskSize() {
    return this.getNumberAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: number) {
    this._bootDiskSize = value;
  }
  public resetBootDiskSize() {
    this._bootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
  }

  // google_service_account - computed: false, optional: true, required: false
  private _googleServiceAccount?: string; 
  public get googleServiceAccount() {
    return this.getStringAttribute('google_service_account');
  }
  public set googleServiceAccount(value: string) {
    this._googleServiceAccount = value;
  }
  public resetGoogleServiceAccount() {
    this._googleServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountInput() {
    return this._googleServiceAccount;
  }

  // local_ssd_count - computed: false, optional: true, required: false
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }

  // use_preemptible_executors - computed: false, optional: true, required: false
  private _usePreemptibleExecutors?: boolean | cdktf.IResolvable; 
  public get usePreemptibleExecutors() {
    return this.getBooleanAttribute('use_preemptible_executors');
  }
  public set usePreemptibleExecutors(value: boolean | cdktf.IResolvable) {
    this._usePreemptibleExecutors = value;
  }
  public resetUsePreemptibleExecutors() {
    this._usePreemptibleExecutors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePreemptibleExecutorsInput() {
    return this._usePreemptibleExecutors;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#destination DataDatabricksJob#destination}
  */
  readonly destination: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfssToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfssOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfssToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfssOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfss): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfss | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#destination DataDatabricksJob#destination}
  */
  readonly destination: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfsToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfsOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfsToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfsOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfs): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#destination DataDatabricksJob#destination}
  */
  readonly destination: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFileToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFileOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFileToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFileOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFile): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#destination DataDatabricksJob#destination}
  */
  readonly destination: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcsToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcsOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcsToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcsOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcs): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#canned_acl DataDatabricksJob#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#destination DataDatabricksJob#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#enable_encryption DataDatabricksJob#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#encryption_type DataDatabricksJob#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#endpoint DataDatabricksJob#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#kms_key DataDatabricksJob#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#region DataDatabricksJob#region}
  */
  readonly region?: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3ToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3OutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktf.stringToTerraform(struct!.cannedAcl),
    destination: cdktf.stringToTerraform(struct!.destination),
    enable_encryption: cdktf.booleanToTerraform(struct!.enableEncryption),
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3ToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3OutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canned_acl: {
      value: cdktf.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.enableEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable_encryption - computed: false, optional: true, required: false
  private _enableEncryption?: boolean | cdktf.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktf.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
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
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#destination DataDatabricksJob#destination}
  */
  readonly destination: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumesToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumesOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumesToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumesOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumes): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#destination DataDatabricksJob#destination}
  */
  readonly destination: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspaceToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspaceOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspaceToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspaceOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspace): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScripts {
  /**
  * abfss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#abfss DataDatabricksJob#abfss}
  */
  readonly abfss?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfss;
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#dbfs DataDatabricksJob#dbfs}
  */
  readonly dbfs?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfs;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#file DataDatabricksJob#file}
  */
  readonly file?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFile;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#gcs DataDatabricksJob#gcs}
  */
  readonly gcs?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#s3 DataDatabricksJob#s3}
  */
  readonly s3?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#volumes DataDatabricksJob#volumes}
  */
  readonly volumes?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumes;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#workspace DataDatabricksJob#workspace}
  */
  readonly workspace?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspace;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abfss: dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfssToTerraform(struct!.abfss),
    dbfs: dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfsToTerraform(struct!.dbfs),
    file: dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFileToTerraform(struct!.file),
    gcs: dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcsToTerraform(struct!.gcs),
    s3: dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3ToTerraform(struct!.s3),
    volumes: dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumesToTerraform(struct!.volumes),
    workspace: dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspaceToTerraform(struct!.workspace),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abfss: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfssToHclTerraform(struct!.abfss),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfssList",
    },
    dbfs: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfsList",
    },
    file: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFileList",
    },
    gcs: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcsList",
    },
    s3: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3List",
    },
    volumes: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumesList",
    },
    workspace: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScripts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abfss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abfss = this._abfss?.internalValue;
    }
    if (this._dbfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbfs = this._dbfs?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScripts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abfss.internalValue = undefined;
      this._dbfs.internalValue = undefined;
      this._file.internalValue = undefined;
      this._gcs.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abfss.internalValue = value.abfss;
      this._dbfs.internalValue = value.dbfs;
      this._file.internalValue = value.file;
      this._gcs.internalValue = value.gcs;
      this._s3.internalValue = value.s3;
      this._volumes.internalValue = value.volumes;
      this._workspace.internalValue = value.workspace;
    }
  }

  // abfss - computed: false, optional: true, required: false
  private _abfss = new DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfssOutputReference(this, "abfss");
  public get abfss() {
    return this._abfss;
  }
  public putAbfss(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsAbfss) {
    this._abfss.internalValue = value;
  }
  public resetAbfss() {
    this._abfss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abfssInput() {
    return this._abfss.internalValue;
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsDbfs) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsVolumes) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace = new DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsWorkspace) {
    this._workspace.internalValue = value;
  }
  public resetWorkspace() {
    this._workspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScripts[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsOutputReference {
    return new DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#jobs DataDatabricksJob#jobs}
  */
  readonly jobs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#notebooks DataDatabricksJob#notebooks}
  */
  readonly notebooks?: boolean | cdktf.IResolvable;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClientsToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClientsOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jobs: cdktf.booleanToTerraform(struct!.jobs),
    notebooks: cdktf.booleanToTerraform(struct!.notebooks),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClientsToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClientsOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jobs: {
      value: cdktf.booleanToHclTerraform(struct!.jobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notebooks: {
      value: cdktf.booleanToHclTerraform(struct!.notebooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobs = this._jobs;
    }
    if (this._notebooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebooks = this._notebooks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobs = undefined;
      this._notebooks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobs = value.jobs;
      this._notebooks = value.notebooks;
    }
  }

  // jobs - computed: false, optional: true, required: false
  private _jobs?: boolean | cdktf.IResolvable; 
  public get jobs() {
    return this.getBooleanAttribute('jobs');
  }
  public set jobs(value: boolean | cdktf.IResolvable) {
    this._jobs = value;
  }
  public resetJobs() {
    this._jobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs;
  }

  // notebooks - computed: false, optional: true, required: false
  private _notebooks?: boolean | cdktf.IResolvable; 
  public get notebooks() {
    return this.getBooleanAttribute('notebooks');
  }
  public set notebooks(value: boolean | cdktf.IResolvable) {
    this._notebooks = value;
  }
  public resetNotebooks() {
    this._notebooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebooksInput() {
    return this._notebooks;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadType {
  /**
  * clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#clients DataDatabricksJob#clients}
  */
  readonly clients: DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClients;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients: dataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClientsToTerraform(struct!.clients),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clients: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClientsToHclTerraform(struct!.clients),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clients.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clients.internalValue = value.clients;
    }
  }

  // clients - computed: false, optional: false, required: true
  private _clients = new DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClientsOutputReference(this, "clients");
  public get clients() {
    return this._clients;
  }
  public putClients(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeClients) {
    this._clients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients.internalValue;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNewCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#apply_policy_default_values DataDatabricksJob#apply_policy_default_values}
  */
  readonly applyPolicyDefaultValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#autotermination_minutes DataDatabricksJob#autotermination_minutes}
  */
  readonly autoterminationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#cluster_id DataDatabricksJob#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#cluster_name DataDatabricksJob#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#custom_tags DataDatabricksJob#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#data_security_mode DataDatabricksJob#data_security_mode}
  */
  readonly dataSecurityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#driver_instance_pool_id DataDatabricksJob#driver_instance_pool_id}
  */
  readonly driverInstancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#driver_node_type_id DataDatabricksJob#driver_node_type_id}
  */
  readonly driverNodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#enable_elastic_disk DataDatabricksJob#enable_elastic_disk}
  */
  readonly enableElasticDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#enable_local_disk_encryption DataDatabricksJob#enable_local_disk_encryption}
  */
  readonly enableLocalDiskEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#idempotency_token DataDatabricksJob#idempotency_token}
  */
  readonly idempotencyToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#instance_pool_id DataDatabricksJob#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#node_type_id DataDatabricksJob#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#num_workers DataDatabricksJob#num_workers}
  */
  readonly numWorkers: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#policy_id DataDatabricksJob#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#runtime_engine DataDatabricksJob#runtime_engine}
  */
  readonly runtimeEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#single_user_name DataDatabricksJob#single_user_name}
  */
  readonly singleUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#spark_conf DataDatabricksJob#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#spark_env_vars DataDatabricksJob#spark_env_vars}
  */
  readonly sparkEnvVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#spark_version DataDatabricksJob#spark_version}
  */
  readonly sparkVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#ssh_public_keys DataDatabricksJob#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * autoscale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#autoscale DataDatabricksJob#autoscale}
  */
  readonly autoscale?: DataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscale;
  /**
  * aws_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#aws_attributes DataDatabricksJob#aws_attributes}
  */
  readonly awsAttributes?: DataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributes;
  /**
  * azure_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#azure_attributes DataDatabricksJob#azure_attributes}
  */
  readonly azureAttributes?: DataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributes;
  /**
  * cluster_log_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#cluster_log_conf DataDatabricksJob#cluster_log_conf}
  */
  readonly clusterLogConf?: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConf;
  /**
  * cluster_mount_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#cluster_mount_info DataDatabricksJob#cluster_mount_info}
  */
  readonly clusterMountInfo?: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfo[] | cdktf.IResolvable;
  /**
  * docker_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#docker_image DataDatabricksJob#docker_image}
  */
  readonly dockerImage?: DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImage;
  /**
  * gcp_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#gcp_attributes DataDatabricksJob#gcp_attributes}
  */
  readonly gcpAttributes?: DataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributes;
  /**
  * init_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#init_scripts DataDatabricksJob#init_scripts}
  */
  readonly initScripts?: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScripts[] | cdktf.IResolvable;
  /**
  * workload_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#workload_type DataDatabricksJob#workload_type}
  */
  readonly workloadType?: DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadType;
}

export function dataDatabricksJobJobSettingsSettingsTaskNewClusterToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_policy_default_values: cdktf.booleanToTerraform(struct!.applyPolicyDefaultValues),
    autotermination_minutes: cdktf.numberToTerraform(struct!.autoterminationMinutes),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    custom_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customTags),
    data_security_mode: cdktf.stringToTerraform(struct!.dataSecurityMode),
    driver_instance_pool_id: cdktf.stringToTerraform(struct!.driverInstancePoolId),
    driver_node_type_id: cdktf.stringToTerraform(struct!.driverNodeTypeId),
    enable_elastic_disk: cdktf.booleanToTerraform(struct!.enableElasticDisk),
    enable_local_disk_encryption: cdktf.booleanToTerraform(struct!.enableLocalDiskEncryption),
    idempotency_token: cdktf.stringToTerraform(struct!.idempotencyToken),
    instance_pool_id: cdktf.stringToTerraform(struct!.instancePoolId),
    node_type_id: cdktf.stringToTerraform(struct!.nodeTypeId),
    num_workers: cdktf.numberToTerraform(struct!.numWorkers),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    runtime_engine: cdktf.stringToTerraform(struct!.runtimeEngine),
    single_user_name: cdktf.stringToTerraform(struct!.singleUserName),
    spark_conf: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkConf),
    spark_env_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkEnvVars),
    spark_version: cdktf.stringToTerraform(struct!.sparkVersion),
    ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshPublicKeys),
    autoscale: dataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscaleToTerraform(struct!.autoscale),
    aws_attributes: dataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributesToTerraform(struct!.awsAttributes),
    azure_attributes: dataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributesToTerraform(struct!.azureAttributes),
    cluster_log_conf: dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfToTerraform(struct!.clusterLogConf),
    cluster_mount_info: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoToTerraform, true)(struct!.clusterMountInfo),
    docker_image: dataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageToTerraform(struct!.dockerImage),
    gcp_attributes: dataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributesToTerraform(struct!.gcpAttributes),
    init_scripts: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsToTerraform, true)(struct!.initScripts),
    workload_type: dataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeToTerraform(struct!.workloadType),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNewClusterToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNewClusterOutputReference | DataDatabricksJobJobSettingsSettingsTaskNewCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_policy_default_values: {
      value: cdktf.booleanToHclTerraform(struct!.applyPolicyDefaultValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autotermination_minutes: {
      value: cdktf.numberToHclTerraform(struct!.autoterminationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data_security_mode: {
      value: cdktf.stringToHclTerraform(struct!.dataSecurityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_instance_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.driverInstancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_node_type_id: {
      value: cdktf.stringToHclTerraform(struct!.driverNodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_elastic_disk: {
      value: cdktf.booleanToHclTerraform(struct!.enableElasticDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_local_disk_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.enableLocalDiskEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idempotency_token: {
      value: cdktf.stringToHclTerraform(struct!.idempotencyToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.instancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_workers: {
      value: cdktf.numberToHclTerraform(struct!.numWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_id: {
      value: cdktf.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_engine: {
      value: cdktf.stringToHclTerraform(struct!.runtimeEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_user_name: {
      value: cdktf.stringToHclTerraform(struct!.singleUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spark_conf: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sparkConf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spark_env_vars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sparkEnvVars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spark_version: {
      value: cdktf.stringToHclTerraform(struct!.sparkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshPublicKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    autoscale: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscaleToHclTerraform(struct!.autoscale),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscaleList",
    },
    aws_attributes: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributesToHclTerraform(struct!.awsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributesList",
    },
    azure_attributes: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributesToHclTerraform(struct!.azureAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributesList",
    },
    cluster_log_conf: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfToHclTerraform(struct!.clusterLogConf),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfList",
    },
    cluster_mount_info: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoToHclTerraform, true)(struct!.clusterMountInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoList",
    },
    docker_image: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageToHclTerraform(struct!.dockerImage),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageList",
    },
    gcp_attributes: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributesToHclTerraform(struct!.gcpAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributesList",
    },
    init_scripts: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsToHclTerraform, true)(struct!.initScripts),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsList",
    },
    workload_type: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeToHclTerraform(struct!.workloadType),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNewClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNewCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyPolicyDefaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyDefaultValues = this._applyPolicyDefaultValues;
    }
    if (this._autoterminationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoterminationMinutes = this._autoterminationMinutes;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._dataSecurityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSecurityMode = this._dataSecurityMode;
    }
    if (this._driverInstancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverInstancePoolId = this._driverInstancePoolId;
    }
    if (this._driverNodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeTypeId = this._driverNodeTypeId;
    }
    if (this._enableElasticDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableElasticDisk = this._enableElasticDisk;
    }
    if (this._enableLocalDiskEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLocalDiskEncryption = this._enableLocalDiskEncryption;
    }
    if (this._idempotencyToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.idempotencyToken = this._idempotencyToken;
    }
    if (this._instancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolId = this._instancePoolId;
    }
    if (this._nodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeId = this._nodeTypeId;
    }
    if (this._numWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numWorkers = this._numWorkers;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._runtimeEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEngine = this._runtimeEngine;
    }
    if (this._singleUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleUserName = this._singleUserName;
    }
    if (this._sparkConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkConf = this._sparkConf;
    }
    if (this._sparkEnvVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkEnvVars = this._sparkEnvVars;
    }
    if (this._sparkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkVersion = this._sparkVersion;
    }
    if (this._sshPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeys = this._sshPublicKeys;
    }
    if (this._autoscale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale?.internalValue;
    }
    if (this._awsAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAttributes = this._awsAttributes?.internalValue;
    }
    if (this._azureAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAttributes = this._azureAttributes?.internalValue;
    }
    if (this._clusterLogConf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLogConf = this._clusterLogConf?.internalValue;
    }
    if (this._clusterMountInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMountInfo = this._clusterMountInfo?.internalValue;
    }
    if (this._dockerImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage?.internalValue;
    }
    if (this._gcpAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAttributes = this._gcpAttributes?.internalValue;
    }
    if (this._initScripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initScripts = this._initScripts?.internalValue;
    }
    if (this._workloadType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadType = this._workloadType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNewCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyPolicyDefaultValues = undefined;
      this._autoterminationMinutes = undefined;
      this._clusterId = undefined;
      this._clusterName = undefined;
      this._customTags = undefined;
      this._dataSecurityMode = undefined;
      this._driverInstancePoolId = undefined;
      this._driverNodeTypeId = undefined;
      this._enableElasticDisk = undefined;
      this._enableLocalDiskEncryption = undefined;
      this._idempotencyToken = undefined;
      this._instancePoolId = undefined;
      this._nodeTypeId = undefined;
      this._numWorkers = undefined;
      this._policyId = undefined;
      this._runtimeEngine = undefined;
      this._singleUserName = undefined;
      this._sparkConf = undefined;
      this._sparkEnvVars = undefined;
      this._sparkVersion = undefined;
      this._sshPublicKeys = undefined;
      this._autoscale.internalValue = undefined;
      this._awsAttributes.internalValue = undefined;
      this._azureAttributes.internalValue = undefined;
      this._clusterLogConf.internalValue = undefined;
      this._clusterMountInfo.internalValue = undefined;
      this._dockerImage.internalValue = undefined;
      this._gcpAttributes.internalValue = undefined;
      this._initScripts.internalValue = undefined;
      this._workloadType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyPolicyDefaultValues = value.applyPolicyDefaultValues;
      this._autoterminationMinutes = value.autoterminationMinutes;
      this._clusterId = value.clusterId;
      this._clusterName = value.clusterName;
      this._customTags = value.customTags;
      this._dataSecurityMode = value.dataSecurityMode;
      this._driverInstancePoolId = value.driverInstancePoolId;
      this._driverNodeTypeId = value.driverNodeTypeId;
      this._enableElasticDisk = value.enableElasticDisk;
      this._enableLocalDiskEncryption = value.enableLocalDiskEncryption;
      this._idempotencyToken = value.idempotencyToken;
      this._instancePoolId = value.instancePoolId;
      this._nodeTypeId = value.nodeTypeId;
      this._numWorkers = value.numWorkers;
      this._policyId = value.policyId;
      this._runtimeEngine = value.runtimeEngine;
      this._singleUserName = value.singleUserName;
      this._sparkConf = value.sparkConf;
      this._sparkEnvVars = value.sparkEnvVars;
      this._sparkVersion = value.sparkVersion;
      this._sshPublicKeys = value.sshPublicKeys;
      this._autoscale.internalValue = value.autoscale;
      this._awsAttributes.internalValue = value.awsAttributes;
      this._azureAttributes.internalValue = value.azureAttributes;
      this._clusterLogConf.internalValue = value.clusterLogConf;
      this._clusterMountInfo.internalValue = value.clusterMountInfo;
      this._dockerImage.internalValue = value.dockerImage;
      this._gcpAttributes.internalValue = value.gcpAttributes;
      this._initScripts.internalValue = value.initScripts;
      this._workloadType.internalValue = value.workloadType;
    }
  }

  // apply_policy_default_values - computed: false, optional: true, required: false
  private _applyPolicyDefaultValues?: boolean | cdktf.IResolvable; 
  public get applyPolicyDefaultValues() {
    return this.getBooleanAttribute('apply_policy_default_values');
  }
  public set applyPolicyDefaultValues(value: boolean | cdktf.IResolvable) {
    this._applyPolicyDefaultValues = value;
  }
  public resetApplyPolicyDefaultValues() {
    this._applyPolicyDefaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPolicyDefaultValuesInput() {
    return this._applyPolicyDefaultValues;
  }

  // autotermination_minutes - computed: false, optional: true, required: false
  private _autoterminationMinutes?: number; 
  public get autoterminationMinutes() {
    return this.getNumberAttribute('autotermination_minutes');
  }
  public set autoterminationMinutes(value: number) {
    this._autoterminationMinutes = value;
  }
  public resetAutoterminationMinutes() {
    this._autoterminationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoterminationMinutesInput() {
    return this._autoterminationMinutes;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: { [key: string]: string }; 
  public get customTags() {
    return this.getStringMapAttribute('custom_tags');
  }
  public set customTags(value: { [key: string]: string }) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }

  // data_security_mode - computed: false, optional: true, required: false
  private _dataSecurityMode?: string; 
  public get dataSecurityMode() {
    return this.getStringAttribute('data_security_mode');
  }
  public set dataSecurityMode(value: string) {
    this._dataSecurityMode = value;
  }
  public resetDataSecurityMode() {
    this._dataSecurityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSecurityModeInput() {
    return this._dataSecurityMode;
  }

  // driver_instance_pool_id - computed: true, optional: true, required: false
  private _driverInstancePoolId?: string; 
  public get driverInstancePoolId() {
    return this.getStringAttribute('driver_instance_pool_id');
  }
  public set driverInstancePoolId(value: string) {
    this._driverInstancePoolId = value;
  }
  public resetDriverInstancePoolId() {
    this._driverInstancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInstancePoolIdInput() {
    return this._driverInstancePoolId;
  }

  // driver_node_type_id - computed: true, optional: true, required: false
  private _driverNodeTypeId?: string; 
  public get driverNodeTypeId() {
    return this.getStringAttribute('driver_node_type_id');
  }
  public set driverNodeTypeId(value: string) {
    this._driverNodeTypeId = value;
  }
  public resetDriverNodeTypeId() {
    this._driverNodeTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNodeTypeIdInput() {
    return this._driverNodeTypeId;
  }

  // enable_elastic_disk - computed: true, optional: true, required: false
  private _enableElasticDisk?: boolean | cdktf.IResolvable; 
  public get enableElasticDisk() {
    return this.getBooleanAttribute('enable_elastic_disk');
  }
  public set enableElasticDisk(value: boolean | cdktf.IResolvable) {
    this._enableElasticDisk = value;
  }
  public resetEnableElasticDisk() {
    this._enableElasticDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableElasticDiskInput() {
    return this._enableElasticDisk;
  }

  // enable_local_disk_encryption - computed: true, optional: true, required: false
  private _enableLocalDiskEncryption?: boolean | cdktf.IResolvable; 
  public get enableLocalDiskEncryption() {
    return this.getBooleanAttribute('enable_local_disk_encryption');
  }
  public set enableLocalDiskEncryption(value: boolean | cdktf.IResolvable) {
    this._enableLocalDiskEncryption = value;
  }
  public resetEnableLocalDiskEncryption() {
    this._enableLocalDiskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLocalDiskEncryptionInput() {
    return this._enableLocalDiskEncryption;
  }

  // idempotency_token - computed: false, optional: true, required: false
  private _idempotencyToken?: string; 
  public get idempotencyToken() {
    return this.getStringAttribute('idempotency_token');
  }
  public set idempotencyToken(value: string) {
    this._idempotencyToken = value;
  }
  public resetIdempotencyToken() {
    this._idempotencyToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idempotencyTokenInput() {
    return this._idempotencyToken;
  }

  // instance_pool_id - computed: false, optional: true, required: false
  private _instancePoolId?: string; 
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }
  public set instancePoolId(value: string) {
    this._instancePoolId = value;
  }
  public resetInstancePoolId() {
    this._instancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolIdInput() {
    return this._instancePoolId;
  }

  // node_type_id - computed: true, optional: true, required: false
  private _nodeTypeId?: string; 
  public get nodeTypeId() {
    return this.getStringAttribute('node_type_id');
  }
  public set nodeTypeId(value: string) {
    this._nodeTypeId = value;
  }
  public resetNodeTypeId() {
    this._nodeTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIdInput() {
    return this._nodeTypeId;
  }

  // num_workers - computed: false, optional: false, required: true
  private _numWorkers?: number; 
  public get numWorkers() {
    return this.getNumberAttribute('num_workers');
  }
  public set numWorkers(value: number) {
    this._numWorkers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numWorkersInput() {
    return this._numWorkers;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // runtime_engine - computed: false, optional: true, required: false
  private _runtimeEngine?: string; 
  public get runtimeEngine() {
    return this.getStringAttribute('runtime_engine');
  }
  public set runtimeEngine(value: string) {
    this._runtimeEngine = value;
  }
  public resetRuntimeEngine() {
    this._runtimeEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEngineInput() {
    return this._runtimeEngine;
  }

  // single_user_name - computed: false, optional: true, required: false
  private _singleUserName?: string; 
  public get singleUserName() {
    return this.getStringAttribute('single_user_name');
  }
  public set singleUserName(value: string) {
    this._singleUserName = value;
  }
  public resetSingleUserName() {
    this._singleUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleUserNameInput() {
    return this._singleUserName;
  }

  // spark_conf - computed: false, optional: true, required: false
  private _sparkConf?: { [key: string]: string }; 
  public get sparkConf() {
    return this.getStringMapAttribute('spark_conf');
  }
  public set sparkConf(value: { [key: string]: string }) {
    this._sparkConf = value;
  }
  public resetSparkConf() {
    this._sparkConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfInput() {
    return this._sparkConf;
  }

  // spark_env_vars - computed: false, optional: true, required: false
  private _sparkEnvVars?: { [key: string]: string }; 
  public get sparkEnvVars() {
    return this.getStringMapAttribute('spark_env_vars');
  }
  public set sparkEnvVars(value: { [key: string]: string }) {
    this._sparkEnvVars = value;
  }
  public resetSparkEnvVars() {
    this._sparkEnvVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkEnvVarsInput() {
    return this._sparkEnvVars;
  }

  // spark_version - computed: false, optional: false, required: true
  private _sparkVersion?: string; 
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }
  public set sparkVersion(value: string) {
    this._sparkVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkVersionInput() {
    return this._sparkVersion;
  }

  // ssh_public_keys - computed: false, optional: true, required: false
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  public resetSshPublicKeys() {
    this._sshPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale = new DataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscaleOutputReference(this, "autoscale");
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterAutoscale) {
    this._autoscale.internalValue = value;
  }
  public resetAutoscale() {
    this._autoscale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale.internalValue;
  }

  // aws_attributes - computed: false, optional: true, required: false
  private _awsAttributes = new DataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributesOutputReference(this, "aws_attributes");
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterAwsAttributes) {
    this._awsAttributes.internalValue = value;
  }
  public resetAwsAttributes() {
    this._awsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAttributesInput() {
    return this._awsAttributes.internalValue;
  }

  // azure_attributes - computed: false, optional: true, required: false
  private _azureAttributes = new DataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributesOutputReference(this, "azure_attributes");
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterAzureAttributes) {
    this._azureAttributes.internalValue = value;
  }
  public resetAzureAttributes() {
    this._azureAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAttributesInput() {
    return this._azureAttributes.internalValue;
  }

  // cluster_log_conf - computed: false, optional: true, required: false
  private _clusterLogConf = new DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConfOutputReference(this, "cluster_log_conf");
  public get clusterLogConf() {
    return this._clusterLogConf;
  }
  public putClusterLogConf(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterLogConf) {
    this._clusterLogConf.internalValue = value;
  }
  public resetClusterLogConf() {
    this._clusterLogConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLogConfInput() {
    return this._clusterLogConf.internalValue;
  }

  // cluster_mount_info - computed: false, optional: true, required: false
  private _clusterMountInfo = new DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfoList(this, "cluster_mount_info", false);
  public get clusterMountInfo() {
    return this._clusterMountInfo;
  }
  public putClusterMountInfo(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterClusterMountInfo[] | cdktf.IResolvable) {
    this._clusterMountInfo.internalValue = value;
  }
  public resetClusterMountInfo() {
    this._clusterMountInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMountInfoInput() {
    return this._clusterMountInfo.internalValue;
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage = new DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImageOutputReference(this, "docker_image");
  public get dockerImage() {
    return this._dockerImage;
  }
  public putDockerImage(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterDockerImage) {
    this._dockerImage.internalValue = value;
  }
  public resetDockerImage() {
    this._dockerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage.internalValue;
  }

  // gcp_attributes - computed: false, optional: true, required: false
  private _gcpAttributes = new DataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributesOutputReference(this, "gcp_attributes");
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterGcpAttributes) {
    this._gcpAttributes.internalValue = value;
  }
  public resetGcpAttributes() {
    this._gcpAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAttributesInput() {
    return this._gcpAttributes.internalValue;
  }

  // init_scripts - computed: false, optional: true, required: false
  private _initScripts = new DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScriptsList(this, "init_scripts", false);
  public get initScripts() {
    return this._initScripts;
  }
  public putInitScripts(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterInitScripts[] | cdktf.IResolvable) {
    this._initScripts.internalValue = value;
  }
  public resetInitScripts() {
    this._initScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptsInput() {
    return this._initScripts.internalValue;
  }

  // workload_type - computed: false, optional: true, required: false
  private _workloadType = new DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadTypeOutputReference(this, "workload_type");
  public get workloadType() {
    return this._workloadType;
  }
  public putWorkloadType(value: DataDatabricksJobJobSettingsSettingsTaskNewClusterWorkloadType) {
    this._workloadType.internalValue = value;
  }
  public resetWorkloadType() {
    this._workloadType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadTypeInput() {
    return this._workloadType.internalValue;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNotebookTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#base_parameters DataDatabricksJob#base_parameters}
  */
  readonly baseParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#notebook_path DataDatabricksJob#notebook_path}
  */
  readonly notebookPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#source DataDatabricksJob#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#warehouse_id DataDatabricksJob#warehouse_id}
  */
  readonly warehouseId?: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskNotebookTaskToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNotebookTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskNotebookTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.baseParameters),
    notebook_path: cdktf.stringToTerraform(struct!.notebookPath),
    source: cdktf.stringToTerraform(struct!.source),
    warehouse_id: cdktf.stringToTerraform(struct!.warehouseId),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNotebookTaskToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNotebookTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskNotebookTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.baseParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    notebook_path: {
      value: cdktf.stringToHclTerraform(struct!.notebookPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse_id: {
      value: cdktf.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNotebookTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNotebookTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseParameters = this._baseParameters;
    }
    if (this._notebookPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookPath = this._notebookPath;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNotebookTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseParameters = undefined;
      this._notebookPath = undefined;
      this._source = undefined;
      this._warehouseId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseParameters = value.baseParameters;
      this._notebookPath = value.notebookPath;
      this._source = value.source;
      this._warehouseId = value.warehouseId;
    }
  }

  // base_parameters - computed: false, optional: true, required: false
  private _baseParameters?: { [key: string]: string }; 
  public get baseParameters() {
    return this.getStringMapAttribute('base_parameters');
  }
  public set baseParameters(value: { [key: string]: string }) {
    this._baseParameters = value;
  }
  public resetBaseParameters() {
    this._baseParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseParametersInput() {
    return this._baseParameters;
  }

  // notebook_path - computed: false, optional: false, required: true
  private _notebookPath?: string; 
  public get notebookPath() {
    return this.getStringAttribute('notebook_path');
  }
  public set notebookPath(value: string) {
    this._notebookPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookPathInput() {
    return this._notebookPath;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // warehouse_id - computed: false, optional: true, required: false
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  public resetWarehouseId() {
    this._warehouseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskNotificationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#alert_on_last_attempt DataDatabricksJob#alert_on_last_attempt}
  */
  readonly alertOnLastAttempt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#no_alert_for_canceled_runs DataDatabricksJob#no_alert_for_canceled_runs}
  */
  readonly noAlertForCanceledRuns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#no_alert_for_skipped_runs DataDatabricksJob#no_alert_for_skipped_runs}
  */
  readonly noAlertForSkippedRuns?: boolean | cdktf.IResolvable;
}

export function dataDatabricksJobJobSettingsSettingsTaskNotificationSettingsToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNotificationSettingsOutputReference | DataDatabricksJobJobSettingsSettingsTaskNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_on_last_attempt: cdktf.booleanToTerraform(struct!.alertOnLastAttempt),
    no_alert_for_canceled_runs: cdktf.booleanToTerraform(struct!.noAlertForCanceledRuns),
    no_alert_for_skipped_runs: cdktf.booleanToTerraform(struct!.noAlertForSkippedRuns),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskNotificationSettingsToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskNotificationSettingsOutputReference | DataDatabricksJobJobSettingsSettingsTaskNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_on_last_attempt: {
      value: cdktf.booleanToHclTerraform(struct!.alertOnLastAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_alert_for_canceled_runs: {
      value: cdktf.booleanToHclTerraform(struct!.noAlertForCanceledRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_alert_for_skipped_runs: {
      value: cdktf.booleanToHclTerraform(struct!.noAlertForSkippedRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertOnLastAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertOnLastAttempt = this._alertOnLastAttempt;
    }
    if (this._noAlertForCanceledRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAlertForCanceledRuns = this._noAlertForCanceledRuns;
    }
    if (this._noAlertForSkippedRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAlertForSkippedRuns = this._noAlertForSkippedRuns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertOnLastAttempt = undefined;
      this._noAlertForCanceledRuns = undefined;
      this._noAlertForSkippedRuns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertOnLastAttempt = value.alertOnLastAttempt;
      this._noAlertForCanceledRuns = value.noAlertForCanceledRuns;
      this._noAlertForSkippedRuns = value.noAlertForSkippedRuns;
    }
  }

  // alert_on_last_attempt - computed: false, optional: true, required: false
  private _alertOnLastAttempt?: boolean | cdktf.IResolvable; 
  public get alertOnLastAttempt() {
    return this.getBooleanAttribute('alert_on_last_attempt');
  }
  public set alertOnLastAttempt(value: boolean | cdktf.IResolvable) {
    this._alertOnLastAttempt = value;
  }
  public resetAlertOnLastAttempt() {
    this._alertOnLastAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnLastAttemptInput() {
    return this._alertOnLastAttempt;
  }

  // no_alert_for_canceled_runs - computed: false, optional: true, required: false
  private _noAlertForCanceledRuns?: boolean | cdktf.IResolvable; 
  public get noAlertForCanceledRuns() {
    return this.getBooleanAttribute('no_alert_for_canceled_runs');
  }
  public set noAlertForCanceledRuns(value: boolean | cdktf.IResolvable) {
    this._noAlertForCanceledRuns = value;
  }
  public resetNoAlertForCanceledRuns() {
    this._noAlertForCanceledRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAlertForCanceledRunsInput() {
    return this._noAlertForCanceledRuns;
  }

  // no_alert_for_skipped_runs - computed: false, optional: true, required: false
  private _noAlertForSkippedRuns?: boolean | cdktf.IResolvable; 
  public get noAlertForSkippedRuns() {
    return this.getBooleanAttribute('no_alert_for_skipped_runs');
  }
  public set noAlertForSkippedRuns(value: boolean | cdktf.IResolvable) {
    this._noAlertForSkippedRuns = value;
  }
  public resetNoAlertForSkippedRuns() {
    this._noAlertForSkippedRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAlertForSkippedRunsInput() {
    return this._noAlertForSkippedRuns;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskPipelineTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#full_refresh DataDatabricksJob#full_refresh}
  */
  readonly fullRefresh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#pipeline_id DataDatabricksJob#pipeline_id}
  */
  readonly pipelineId: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskPipelineTaskToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskPipelineTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskPipelineTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_refresh: cdktf.booleanToTerraform(struct!.fullRefresh),
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskPipelineTaskToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskPipelineTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskPipelineTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_refresh: {
      value: cdktf.booleanToHclTerraform(struct!.fullRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.pipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskPipelineTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskPipelineTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullRefresh = this._fullRefresh;
    }
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskPipelineTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullRefresh = undefined;
      this._pipelineId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullRefresh = value.fullRefresh;
      this._pipelineId = value.pipelineId;
    }
  }

  // full_refresh - computed: false, optional: true, required: false
  private _fullRefresh?: boolean | cdktf.IResolvable; 
  public get fullRefresh() {
    return this.getBooleanAttribute('full_refresh');
  }
  public set fullRefresh(value: boolean | cdktf.IResolvable) {
    this._fullRefresh = value;
  }
  public resetFullRefresh() {
    this._fullRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullRefreshInput() {
    return this._fullRefresh;
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskPythonWheelTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#entry_point DataDatabricksJob#entry_point}
  */
  readonly entryPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#named_parameters DataDatabricksJob#named_parameters}
  */
  readonly namedParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#package_name DataDatabricksJob#package_name}
  */
  readonly packageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#parameters DataDatabricksJob#parameters}
  */
  readonly parameters?: string[];
}

export function dataDatabricksJobJobSettingsSettingsTaskPythonWheelTaskToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskPythonWheelTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskPythonWheelTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_point: cdktf.stringToTerraform(struct!.entryPoint),
    named_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.namedParameters),
    package_name: cdktf.stringToTerraform(struct!.packageName),
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskPythonWheelTaskToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskPythonWheelTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskPythonWheelTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_point: {
      value: cdktf.stringToHclTerraform(struct!.entryPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    named_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.namedParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    package_name: {
      value: cdktf.stringToHclTerraform(struct!.packageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskPythonWheelTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskPythonWheelTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._namedParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedParameters = this._namedParameters;
    }
    if (this._packageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageName = this._packageName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskPythonWheelTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryPoint = undefined;
      this._namedParameters = undefined;
      this._packageName = undefined;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryPoint = value.entryPoint;
      this._namedParameters = value.namedParameters;
      this._packageName = value.packageName;
      this._parameters = value.parameters;
    }
  }

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string; 
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }
  public set entryPoint(value: string) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // named_parameters - computed: false, optional: true, required: false
  private _namedParameters?: { [key: string]: string }; 
  public get namedParameters() {
    return this.getStringMapAttribute('named_parameters');
  }
  public set namedParameters(value: { [key: string]: string }) {
    this._namedParameters = value;
  }
  public resetNamedParameters() {
    this._namedParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedParametersInput() {
    return this._namedParameters;
  }

  // package_name - computed: false, optional: true, required: false
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  public resetPackageName() {
    this._packageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskRunJobTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#job_id DataDatabricksJob#job_id}
  */
  readonly jobId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#job_parameters DataDatabricksJob#job_parameters}
  */
  readonly jobParameters?: { [key: string]: string };
}

export function dataDatabricksJobJobSettingsSettingsTaskRunJobTaskToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskRunJobTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskRunJobTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_id: cdktf.numberToTerraform(struct!.jobId),
    job_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.jobParameters),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskRunJobTaskToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskRunJobTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskRunJobTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_id: {
      value: cdktf.numberToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.jobParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskRunJobTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskRunJobTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._jobParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobParameters = this._jobParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskRunJobTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobId = undefined;
      this._jobParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobId = value.jobId;
      this._jobParameters = value.jobParameters;
    }
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId?: number; 
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }
  public set jobId(value: number) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_parameters - computed: false, optional: true, required: false
  private _jobParameters?: { [key: string]: string }; 
  public get jobParameters() {
    return this.getStringMapAttribute('job_parameters');
  }
  public set jobParameters(value: { [key: string]: string }) {
    this._jobParameters = value;
  }
  public resetJobParameters() {
    this._jobParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobParametersInput() {
    return this._jobParameters;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskSparkJarTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#jar_uri DataDatabricksJob#jar_uri}
  */
  readonly jarUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#main_class_name DataDatabricksJob#main_class_name}
  */
  readonly mainClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#parameters DataDatabricksJob#parameters}
  */
  readonly parameters?: string[];
}

export function dataDatabricksJobJobSettingsSettingsTaskSparkJarTaskToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSparkJarTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskSparkJarTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jar_uri: cdktf.stringToTerraform(struct!.jarUri),
    main_class_name: cdktf.stringToTerraform(struct!.mainClassName),
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskSparkJarTaskToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSparkJarTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskSparkJarTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jar_uri: {
      value: cdktf.stringToHclTerraform(struct!.jarUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_class_name: {
      value: cdktf.stringToHclTerraform(struct!.mainClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskSparkJarTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskSparkJarTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jarUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarUri = this._jarUri;
    }
    if (this._mainClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainClassName = this._mainClassName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskSparkJarTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jarUri = undefined;
      this._mainClassName = undefined;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jarUri = value.jarUri;
      this._mainClassName = value.mainClassName;
      this._parameters = value.parameters;
    }
  }

  // jar_uri - computed: false, optional: true, required: false
  private _jarUri?: string; 
  public get jarUri() {
    return this.getStringAttribute('jar_uri');
  }
  public set jarUri(value: string) {
    this._jarUri = value;
  }
  public resetJarUri() {
    this._jarUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarUriInput() {
    return this._jarUri;
  }

  // main_class_name - computed: false, optional: true, required: false
  private _mainClassName?: string; 
  public get mainClassName() {
    return this.getStringAttribute('main_class_name');
  }
  public set mainClassName(value: string) {
    this._mainClassName = value;
  }
  public resetMainClassName() {
    this._mainClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClassNameInput() {
    return this._mainClassName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskSparkPythonTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#parameters DataDatabricksJob#parameters}
  */
  readonly parameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#python_file DataDatabricksJob#python_file}
  */
  readonly pythonFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#source DataDatabricksJob#source}
  */
  readonly source?: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskSparkPythonTaskToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSparkPythonTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskSparkPythonTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
    python_file: cdktf.stringToTerraform(struct!.pythonFile),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskSparkPythonTaskToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSparkPythonTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskSparkPythonTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    python_file: {
      value: cdktf.stringToHclTerraform(struct!.pythonFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskSparkPythonTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskSparkPythonTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._pythonFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonFile = this._pythonFile;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskSparkPythonTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
      this._pythonFile = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
      this._pythonFile = value.pythonFile;
      this._source = value.source;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // python_file - computed: false, optional: false, required: true
  private _pythonFile?: string; 
  public get pythonFile() {
    return this.getStringAttribute('python_file');
  }
  public set pythonFile(value: string) {
    this._pythonFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonFileInput() {
    return this._pythonFile;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskSparkSubmitTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#parameters DataDatabricksJob#parameters}
  */
  readonly parameters?: string[];
}

export function dataDatabricksJobJobSettingsSettingsTaskSparkSubmitTaskToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSparkSubmitTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskSparkSubmitTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskSparkSubmitTaskToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSparkSubmitTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskSparkSubmitTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskSparkSubmitTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskSparkSubmitTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskSparkSubmitTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#destination_id DataDatabricksJob#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#user_name DataDatabricksJob#user_name}
  */
  readonly userName?: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptionsToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_id: cdktf.stringToTerraform(struct!.destinationId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptionsToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationId = this._destinationId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationId = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationId = value.destinationId;
      this._userName = value.userName;
    }
  }

  // destination_id - computed: false, optional: true, required: false
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  public resetDestinationId() {
    this._destinationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptionsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptions[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptionsOutputReference {
    return new DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#alert_id DataDatabricksJob#alert_id}
  */
  readonly alertId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#pause_subscriptions DataDatabricksJob#pause_subscriptions}
  */
  readonly pauseSubscriptions?: boolean | cdktf.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#subscriptions DataDatabricksJob#subscriptions}
  */
  readonly subscriptions: DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptions[] | cdktf.IResolvable;
}

export function dataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertOutputReference | DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_id: cdktf.stringToTerraform(struct!.alertId),
    pause_subscriptions: cdktf.booleanToTerraform(struct!.pauseSubscriptions),
    subscriptions: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptionsToTerraform, true)(struct!.subscriptions),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertOutputReference | DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_id: {
      value: cdktf.stringToHclTerraform(struct!.alertId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_subscriptions: {
      value: cdktf.booleanToHclTerraform(struct!.pauseSubscriptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subscriptions: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptionsToHclTerraform, true)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertId = this._alertId;
    }
    if (this._pauseSubscriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseSubscriptions = this._pauseSubscriptions;
    }
    if (this._subscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptions = this._subscriptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertId = undefined;
      this._pauseSubscriptions = undefined;
      this._subscriptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertId = value.alertId;
      this._pauseSubscriptions = value.pauseSubscriptions;
      this._subscriptions.internalValue = value.subscriptions;
    }
  }

  // alert_id - computed: false, optional: false, required: true
  private _alertId?: string; 
  public get alertId() {
    return this.getStringAttribute('alert_id');
  }
  public set alertId(value: string) {
    this._alertId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertIdInput() {
    return this._alertId;
  }

  // pause_subscriptions - computed: false, optional: true, required: false
  private _pauseSubscriptions?: boolean | cdktf.IResolvable; 
  public get pauseSubscriptions() {
    return this.getBooleanAttribute('pause_subscriptions');
  }
  public set pauseSubscriptions(value: boolean | cdktf.IResolvable) {
    this._pauseSubscriptions = value;
  }
  public resetPauseSubscriptions() {
    this._pauseSubscriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseSubscriptionsInput() {
    return this._pauseSubscriptions;
  }

  // subscriptions - computed: false, optional: false, required: true
  private _subscriptions = new DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertSubscriptions[] | cdktf.IResolvable) {
    this._subscriptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions.internalValue;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#destination_id DataDatabricksJob#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#user_name DataDatabricksJob#user_name}
  */
  readonly userName?: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptionsToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_id: cdktf.stringToTerraform(struct!.destinationId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptionsToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationId = this._destinationId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationId = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationId = value.destinationId;
      this._userName = value.userName;
    }
  }

  // destination_id - computed: false, optional: true, required: false
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  public resetDestinationId() {
    this._destinationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptionsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptions[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptionsOutputReference {
    return new DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#custom_subject DataDatabricksJob#custom_subject}
  */
  readonly customSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#dashboard_id DataDatabricksJob#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#pause_subscriptions DataDatabricksJob#pause_subscriptions}
  */
  readonly pauseSubscriptions?: boolean | cdktf.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#subscriptions DataDatabricksJob#subscriptions}
  */
  readonly subscriptions?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptions[] | cdktf.IResolvable;
}

export function dataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardOutputReference | DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_subject: cdktf.stringToTerraform(struct!.customSubject),
    dashboard_id: cdktf.stringToTerraform(struct!.dashboardId),
    pause_subscriptions: cdktf.booleanToTerraform(struct!.pauseSubscriptions),
    subscriptions: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptionsToTerraform, true)(struct!.subscriptions),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardOutputReference | DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_subject: {
      value: cdktf.stringToHclTerraform(struct!.customSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboard_id: {
      value: cdktf.stringToHclTerraform(struct!.dashboardId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_subscriptions: {
      value: cdktf.booleanToHclTerraform(struct!.pauseSubscriptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subscriptions: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptionsToHclTerraform, true)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSubject = this._customSubject;
    }
    if (this._dashboardId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardId = this._dashboardId;
    }
    if (this._pauseSubscriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseSubscriptions = this._pauseSubscriptions;
    }
    if (this._subscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptions = this._subscriptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSubject = undefined;
      this._dashboardId = undefined;
      this._pauseSubscriptions = undefined;
      this._subscriptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSubject = value.customSubject;
      this._dashboardId = value.dashboardId;
      this._pauseSubscriptions = value.pauseSubscriptions;
      this._subscriptions.internalValue = value.subscriptions;
    }
  }

  // custom_subject - computed: false, optional: true, required: false
  private _customSubject?: string; 
  public get customSubject() {
    return this.getStringAttribute('custom_subject');
  }
  public set customSubject(value: string) {
    this._customSubject = value;
  }
  public resetCustomSubject() {
    this._customSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSubjectInput() {
    return this._customSubject;
  }

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // pause_subscriptions - computed: false, optional: true, required: false
  private _pauseSubscriptions?: boolean | cdktf.IResolvable; 
  public get pauseSubscriptions() {
    return this.getBooleanAttribute('pause_subscriptions');
  }
  public set pauseSubscriptions(value: boolean | cdktf.IResolvable) {
    this._pauseSubscriptions = value;
  }
  public resetPauseSubscriptions() {
    this._pauseSubscriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseSubscriptionsInput() {
    return this._pauseSubscriptions;
  }

  // subscriptions - computed: false, optional: true, required: false
  private _subscriptions = new DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardSubscriptions[] | cdktf.IResolvable) {
    this._subscriptions.internalValue = value;
  }
  public resetSubscriptions() {
    this._subscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions.internalValue;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskSqlTaskFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#path DataDatabricksJob#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#source DataDatabricksJob#source}
  */
  readonly source?: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskSqlTaskFileToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskFileOutputReference | DataDatabricksJobJobSettingsSettingsTaskSqlTaskFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskSqlTaskFileToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskFileOutputReference | DataDatabricksJobJobSettingsSettingsTaskSqlTaskFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskSqlTaskFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskSqlTaskFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskSqlTaskFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._source = value.source;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskSqlTaskQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#query_id DataDatabricksJob#query_id}
  */
  readonly queryId: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskSqlTaskQueryToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskQueryOutputReference | DataDatabricksJobJobSettingsSettingsTaskSqlTaskQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_id: cdktf.stringToTerraform(struct!.queryId),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskSqlTaskQueryToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskQueryOutputReference | DataDatabricksJobJobSettingsSettingsTaskSqlTaskQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_id: {
      value: cdktf.stringToHclTerraform(struct!.queryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskSqlTaskQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskSqlTaskQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskSqlTaskQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryId = value.queryId;
    }
  }

  // query_id - computed: false, optional: false, required: true
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskSqlTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#parameters DataDatabricksJob#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#warehouse_id DataDatabricksJob#warehouse_id}
  */
  readonly warehouseId: string;
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#alert DataDatabricksJob#alert}
  */
  readonly alert?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlert;
  /**
  * dashboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#dashboard DataDatabricksJob#dashboard}
  */
  readonly dashboard?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboard;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#file DataDatabricksJob#file}
  */
  readonly file?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskFile;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#query DataDatabricksJob#query}
  */
  readonly query?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskQuery;
}

export function dataDatabricksJobJobSettingsSettingsTaskSqlTaskToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskSqlTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    warehouse_id: cdktf.stringToTerraform(struct!.warehouseId),
    alert: dataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertToTerraform(struct!.alert),
    dashboard: dataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardToTerraform(struct!.dashboard),
    file: dataDatabricksJobJobSettingsSettingsTaskSqlTaskFileToTerraform(struct!.file),
    query: dataDatabricksJobJobSettingsSettingsTaskSqlTaskQueryToTerraform(struct!.query),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskSqlTaskToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskSqlTaskOutputReference | DataDatabricksJobJobSettingsSettingsTaskSqlTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    warehouse_id: {
      value: cdktf.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert: {
      value: dataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertList",
    },
    dashboard: {
      value: dataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardToHclTerraform(struct!.dashboard),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardList",
    },
    file: {
      value: dataDatabricksJobJobSettingsSettingsTaskSqlTaskFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskSqlTaskFileList",
    },
    query: {
      value: dataDatabricksJobJobSettingsSettingsTaskSqlTaskQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskSqlTaskQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskSqlTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskSqlTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._dashboard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboard = this._dashboard?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskSqlTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
      this._warehouseId = undefined;
      this._alert.internalValue = undefined;
      this._dashboard.internalValue = undefined;
      this._file.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
      this._warehouseId = value.warehouseId;
      this._alert.internalValue = value.alert;
      this._dashboard.internalValue = value.dashboard;
      this._file.internalValue = value.file;
      this._query.internalValue = value.query;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // warehouse_id - computed: false, optional: false, required: true
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // alert - computed: false, optional: true, required: false
  private _alert = new DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: DataDatabricksJobJobSettingsSettingsTaskSqlTaskAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // dashboard - computed: false, optional: true, required: false
  private _dashboard = new DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboardOutputReference(this, "dashboard");
  public get dashboard() {
    return this._dashboard;
  }
  public putDashboard(value: DataDatabricksJobJobSettingsSettingsTaskSqlTaskDashboard) {
    this._dashboard.internalValue = value;
  }
  public resetDashboard() {
    this._dashboard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataDatabricksJobJobSettingsSettingsTaskSqlTaskFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataDatabricksJobJobSettingsSettingsTaskSqlTaskFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new DataDatabricksJobJobSettingsSettingsTaskSqlTaskQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: DataDatabricksJobJobSettingsSettingsTaskSqlTaskQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceededToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable): any {
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

export class DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceededList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference {
    return new DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailureToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailureToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailure | cdktf.IResolvable): any {
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

export class DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailure | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailureList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailure[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailureOutputReference {
    return new DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStartToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStartToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStart | cdktf.IResolvable): any {
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

export class DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStart | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStartList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStart[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStartOutputReference {
    return new DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceededToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceededToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable): any {
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

export class DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceededList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference {
    return new DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccessToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccessToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccess | cdktf.IResolvable): any {
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

export class DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccess | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccess | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccessList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccess[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccessOutputReference {
    return new DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsTaskWebhookNotifications {
  /**
  * on_duration_warning_threshold_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_duration_warning_threshold_exceeded DataDatabricksJob#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_failure DataDatabricksJob#on_failure}
  */
  readonly onFailure?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailure[] | cdktf.IResolvable;
  /**
  * on_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_start DataDatabricksJob#on_start}
  */
  readonly onStart?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStart[] | cdktf.IResolvable;
  /**
  * on_streaming_backlog_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_streaming_backlog_exceeded DataDatabricksJob#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_success DataDatabricksJob#on_success}
  */
  readonly onSuccess?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccess[] | cdktf.IResolvable;
}

export function dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOutputReference | DataDatabricksJobJobSettingsSettingsTaskWebhookNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_duration_warning_threshold_exceeded: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceededToTerraform, true)(struct!.onDurationWarningThresholdExceeded),
    on_failure: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailureToTerraform, true)(struct!.onFailure),
    on_start: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStartToTerraform, true)(struct!.onStart),
    on_streaming_backlog_exceeded: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceededToTerraform, true)(struct!.onStreamingBacklogExceeded),
    on_success: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccessToTerraform, true)(struct!.onSuccess),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOutputReference | DataDatabricksJobJobSettingsSettingsTaskWebhookNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_duration_warning_threshold_exceeded: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform, true)(struct!.onDurationWarningThresholdExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceededList",
    },
    on_failure: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailureToHclTerraform, true)(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailureList",
    },
    on_start: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStartToHclTerraform, true)(struct!.onStart),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStartList",
    },
    on_streaming_backlog_exceeded: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceededToHclTerraform, true)(struct!.onStreamingBacklogExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceededList",
    },
    on_success: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccessToHclTerraform, true)(struct!.onSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTaskWebhookNotifications | undefined {
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
    if (this._onStreamingBacklogExceeded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStreamingBacklogExceeded = this._onStreamingBacklogExceeded?.internalValue;
    }
    if (this._onSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTaskWebhookNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDurationWarningThresholdExceeded.internalValue = undefined;
      this._onFailure.internalValue = undefined;
      this._onStart.internalValue = undefined;
      this._onStreamingBacklogExceeded.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDurationWarningThresholdExceeded.internalValue = value.onDurationWarningThresholdExceeded;
      this._onFailure.internalValue = value.onFailure;
      this._onStart.internalValue = value.onStart;
      this._onStreamingBacklogExceeded.internalValue = value.onStreamingBacklogExceeded;
      this._onSuccess.internalValue = value.onSuccess;
    }
  }

  // on_duration_warning_threshold_exceeded - computed: false, optional: true, required: false
  private _onDurationWarningThresholdExceeded = new DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceededList(this, "on_duration_warning_threshold_exceeded", false);
  public get onDurationWarningThresholdExceeded() {
    return this._onDurationWarningThresholdExceeded;
  }
  public putOnDurationWarningThresholdExceeded(value: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable) {
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
  private _onFailure = new DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailureList(this, "on_failure", false);
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnFailure[] | cdktf.IResolvable) {
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
  private _onStart = new DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStartList(this, "on_start", false);
  public get onStart() {
    return this._onStart;
  }
  public putOnStart(value: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStart[] | cdktf.IResolvable) {
    this._onStart.internalValue = value;
  }
  public resetOnStart() {
    this._onStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartInput() {
    return this._onStart.internalValue;
  }

  // on_streaming_backlog_exceeded - computed: false, optional: true, required: false
  private _onStreamingBacklogExceeded = new DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceededList(this, "on_streaming_backlog_exceeded", false);
  public get onStreamingBacklogExceeded() {
    return this._onStreamingBacklogExceeded;
  }
  public putOnStreamingBacklogExceeded(value: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable) {
    this._onStreamingBacklogExceeded.internalValue = value;
  }
  public resetOnStreamingBacklogExceeded() {
    this._onStreamingBacklogExceeded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStreamingBacklogExceededInput() {
    return this._onStreamingBacklogExceeded.internalValue;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess = new DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccessList(this, "on_success", false);
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOnSuccess[] | cdktf.IResolvable) {
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
export interface DataDatabricksJobJobSettingsSettingsTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#description DataDatabricksJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#environment_key DataDatabricksJob#environment_key}
  */
  readonly environmentKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#existing_cluster_id DataDatabricksJob#existing_cluster_id}
  */
  readonly existingClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#job_cluster_key DataDatabricksJob#job_cluster_key}
  */
  readonly jobClusterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#max_retries DataDatabricksJob#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#min_retry_interval_millis DataDatabricksJob#min_retry_interval_millis}
  */
  readonly minRetryIntervalMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#retry_on_timeout DataDatabricksJob#retry_on_timeout}
  */
  readonly retryOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#run_if DataDatabricksJob#run_if}
  */
  readonly runIf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#task_key DataDatabricksJob#task_key}
  */
  readonly taskKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#timeout_seconds DataDatabricksJob#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * condition_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#condition_task DataDatabricksJob#condition_task}
  */
  readonly conditionTask?: DataDatabricksJobJobSettingsSettingsTaskConditionTask;
  /**
  * dbt_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#dbt_task DataDatabricksJob#dbt_task}
  */
  readonly dbtTask?: DataDatabricksJobJobSettingsSettingsTaskDbtTask;
  /**
  * depends_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#depends_on DataDatabricksJob#depends_on}
  */
  readonly dependsOn?: DataDatabricksJobJobSettingsSettingsTaskDependsOn[] | cdktf.IResolvable;
  /**
  * email_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#email_notifications DataDatabricksJob#email_notifications}
  */
  readonly emailNotifications?: DataDatabricksJobJobSettingsSettingsTaskEmailNotifications;
  /**
  * for_each_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#for_each_task DataDatabricksJob#for_each_task}
  */
  readonly forEachTask?: DataDatabricksJobJobSettingsSettingsTaskForEachTask;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#health DataDatabricksJob#health}
  */
  readonly health?: DataDatabricksJobJobSettingsSettingsTaskHealth;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#library DataDatabricksJob#library}
  */
  readonly library?: DataDatabricksJobJobSettingsSettingsTaskLibrary[] | cdktf.IResolvable;
  /**
  * new_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#new_cluster DataDatabricksJob#new_cluster}
  */
  readonly newCluster?: DataDatabricksJobJobSettingsSettingsTaskNewCluster;
  /**
  * notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#notebook_task DataDatabricksJob#notebook_task}
  */
  readonly notebookTask?: DataDatabricksJobJobSettingsSettingsTaskNotebookTask;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#notification_settings DataDatabricksJob#notification_settings}
  */
  readonly notificationSettings?: DataDatabricksJobJobSettingsSettingsTaskNotificationSettings;
  /**
  * pipeline_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#pipeline_task DataDatabricksJob#pipeline_task}
  */
  readonly pipelineTask?: DataDatabricksJobJobSettingsSettingsTaskPipelineTask;
  /**
  * python_wheel_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#python_wheel_task DataDatabricksJob#python_wheel_task}
  */
  readonly pythonWheelTask?: DataDatabricksJobJobSettingsSettingsTaskPythonWheelTask;
  /**
  * run_job_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#run_job_task DataDatabricksJob#run_job_task}
  */
  readonly runJobTask?: DataDatabricksJobJobSettingsSettingsTaskRunJobTask;
  /**
  * spark_jar_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#spark_jar_task DataDatabricksJob#spark_jar_task}
  */
  readonly sparkJarTask?: DataDatabricksJobJobSettingsSettingsTaskSparkJarTask;
  /**
  * spark_python_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#spark_python_task DataDatabricksJob#spark_python_task}
  */
  readonly sparkPythonTask?: DataDatabricksJobJobSettingsSettingsTaskSparkPythonTask;
  /**
  * spark_submit_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#spark_submit_task DataDatabricksJob#spark_submit_task}
  */
  readonly sparkSubmitTask?: DataDatabricksJobJobSettingsSettingsTaskSparkSubmitTask;
  /**
  * sql_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#sql_task DataDatabricksJob#sql_task}
  */
  readonly sqlTask?: DataDatabricksJobJobSettingsSettingsTaskSqlTask;
  /**
  * webhook_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#webhook_notifications DataDatabricksJob#webhook_notifications}
  */
  readonly webhookNotifications?: DataDatabricksJobJobSettingsSettingsTaskWebhookNotifications;
}

export function dataDatabricksJobJobSettingsSettingsTaskToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    environment_key: cdktf.stringToTerraform(struct!.environmentKey),
    existing_cluster_id: cdktf.stringToTerraform(struct!.existingClusterId),
    job_cluster_key: cdktf.stringToTerraform(struct!.jobClusterKey),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    min_retry_interval_millis: cdktf.numberToTerraform(struct!.minRetryIntervalMillis),
    retry_on_timeout: cdktf.booleanToTerraform(struct!.retryOnTimeout),
    run_if: cdktf.stringToTerraform(struct!.runIf),
    task_key: cdktf.stringToTerraform(struct!.taskKey),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    condition_task: dataDatabricksJobJobSettingsSettingsTaskConditionTaskToTerraform(struct!.conditionTask),
    dbt_task: dataDatabricksJobJobSettingsSettingsTaskDbtTaskToTerraform(struct!.dbtTask),
    depends_on: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskDependsOnToTerraform, true)(struct!.dependsOn),
    email_notifications: dataDatabricksJobJobSettingsSettingsTaskEmailNotificationsToTerraform(struct!.emailNotifications),
    for_each_task: dataDatabricksJobJobSettingsSettingsTaskForEachTaskToTerraform(struct!.forEachTask),
    health: dataDatabricksJobJobSettingsSettingsTaskHealthToTerraform(struct!.health),
    library: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsTaskLibraryToTerraform, true)(struct!.library),
    new_cluster: dataDatabricksJobJobSettingsSettingsTaskNewClusterToTerraform(struct!.newCluster),
    notebook_task: dataDatabricksJobJobSettingsSettingsTaskNotebookTaskToTerraform(struct!.notebookTask),
    notification_settings: dataDatabricksJobJobSettingsSettingsTaskNotificationSettingsToTerraform(struct!.notificationSettings),
    pipeline_task: dataDatabricksJobJobSettingsSettingsTaskPipelineTaskToTerraform(struct!.pipelineTask),
    python_wheel_task: dataDatabricksJobJobSettingsSettingsTaskPythonWheelTaskToTerraform(struct!.pythonWheelTask),
    run_job_task: dataDatabricksJobJobSettingsSettingsTaskRunJobTaskToTerraform(struct!.runJobTask),
    spark_jar_task: dataDatabricksJobJobSettingsSettingsTaskSparkJarTaskToTerraform(struct!.sparkJarTask),
    spark_python_task: dataDatabricksJobJobSettingsSettingsTaskSparkPythonTaskToTerraform(struct!.sparkPythonTask),
    spark_submit_task: dataDatabricksJobJobSettingsSettingsTaskSparkSubmitTaskToTerraform(struct!.sparkSubmitTask),
    sql_task: dataDatabricksJobJobSettingsSettingsTaskSqlTaskToTerraform(struct!.sqlTask),
    webhook_notifications: dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsToTerraform(struct!.webhookNotifications),
  }
}


export function dataDatabricksJobJobSettingsSettingsTaskToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTask | cdktf.IResolvable): any {
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
    environment_key: {
      value: cdktf.stringToHclTerraform(struct!.environmentKey),
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
    job_cluster_key: {
      value: cdktf.stringToHclTerraform(struct!.jobClusterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    retry_on_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.retryOnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_if: {
      value: cdktf.stringToHclTerraform(struct!.runIf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_key: {
      value: cdktf.stringToHclTerraform(struct!.taskKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    condition_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskConditionTaskToHclTerraform(struct!.conditionTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskConditionTaskList",
    },
    dbt_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskDbtTaskToHclTerraform(struct!.dbtTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskDbtTaskList",
    },
    depends_on: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskDependsOnToHclTerraform, true)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskDependsOnList",
    },
    email_notifications: {
      value: dataDatabricksJobJobSettingsSettingsTaskEmailNotificationsToHclTerraform(struct!.emailNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskEmailNotificationsList",
    },
    for_each_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskForEachTaskToHclTerraform(struct!.forEachTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskForEachTaskList",
    },
    health: {
      value: dataDatabricksJobJobSettingsSettingsTaskHealthToHclTerraform(struct!.health),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskHealthList",
    },
    library: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsTaskLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskLibraryList",
    },
    new_cluster: {
      value: dataDatabricksJobJobSettingsSettingsTaskNewClusterToHclTerraform(struct!.newCluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNewClusterList",
    },
    notebook_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskNotebookTaskToHclTerraform(struct!.notebookTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNotebookTaskList",
    },
    notification_settings: {
      value: dataDatabricksJobJobSettingsSettingsTaskNotificationSettingsToHclTerraform(struct!.notificationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskNotificationSettingsList",
    },
    pipeline_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskPipelineTaskToHclTerraform(struct!.pipelineTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskPipelineTaskList",
    },
    python_wheel_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskPythonWheelTaskToHclTerraform(struct!.pythonWheelTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskPythonWheelTaskList",
    },
    run_job_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskRunJobTaskToHclTerraform(struct!.runJobTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskRunJobTaskList",
    },
    spark_jar_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskSparkJarTaskToHclTerraform(struct!.sparkJarTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskSparkJarTaskList",
    },
    spark_python_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskSparkPythonTaskToHclTerraform(struct!.sparkPythonTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskSparkPythonTaskList",
    },
    spark_submit_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskSparkSubmitTaskToHclTerraform(struct!.sparkSubmitTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskSparkSubmitTaskList",
    },
    sql_task: {
      value: dataDatabricksJobJobSettingsSettingsTaskSqlTaskToHclTerraform(struct!.sqlTask),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskSqlTaskList",
    },
    webhook_notifications: {
      value: dataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsToHclTerraform(struct!.webhookNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._environmentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentKey = this._environmentKey;
    }
    if (this._existingClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingClusterId = this._existingClusterId;
    }
    if (this._jobClusterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobClusterKey = this._jobClusterKey;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._minRetryIntervalMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRetryIntervalMillis = this._minRetryIntervalMillis;
    }
    if (this._retryOnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOnTimeout = this._retryOnTimeout;
    }
    if (this._runIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.runIf = this._runIf;
    }
    if (this._taskKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskKey = this._taskKey;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._conditionTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionTask = this._conditionTask?.internalValue;
    }
    if (this._dbtTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtTask = this._dbtTask?.internalValue;
    }
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._emailNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailNotifications = this._emailNotifications?.internalValue;
    }
    if (this._forEachTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forEachTask = this._forEachTask?.internalValue;
    }
    if (this._health?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health?.internalValue;
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
    if (this._pipelineTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineTask = this._pipelineTask?.internalValue;
    }
    if (this._pythonWheelTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonWheelTask = this._pythonWheelTask?.internalValue;
    }
    if (this._runJobTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runJobTask = this._runJobTask?.internalValue;
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
    if (this._sqlTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlTask = this._sqlTask?.internalValue;
    }
    if (this._webhookNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookNotifications = this._webhookNotifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._environmentKey = undefined;
      this._existingClusterId = undefined;
      this._jobClusterKey = undefined;
      this._maxRetries = undefined;
      this._minRetryIntervalMillis = undefined;
      this._retryOnTimeout = undefined;
      this._runIf = undefined;
      this._taskKey = undefined;
      this._timeoutSeconds = undefined;
      this._conditionTask.internalValue = undefined;
      this._dbtTask.internalValue = undefined;
      this._dependsOn.internalValue = undefined;
      this._emailNotifications.internalValue = undefined;
      this._forEachTask.internalValue = undefined;
      this._health.internalValue = undefined;
      this._library.internalValue = undefined;
      this._newCluster.internalValue = undefined;
      this._notebookTask.internalValue = undefined;
      this._notificationSettings.internalValue = undefined;
      this._pipelineTask.internalValue = undefined;
      this._pythonWheelTask.internalValue = undefined;
      this._runJobTask.internalValue = undefined;
      this._sparkJarTask.internalValue = undefined;
      this._sparkPythonTask.internalValue = undefined;
      this._sparkSubmitTask.internalValue = undefined;
      this._sqlTask.internalValue = undefined;
      this._webhookNotifications.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._environmentKey = value.environmentKey;
      this._existingClusterId = value.existingClusterId;
      this._jobClusterKey = value.jobClusterKey;
      this._maxRetries = value.maxRetries;
      this._minRetryIntervalMillis = value.minRetryIntervalMillis;
      this._retryOnTimeout = value.retryOnTimeout;
      this._runIf = value.runIf;
      this._taskKey = value.taskKey;
      this._timeoutSeconds = value.timeoutSeconds;
      this._conditionTask.internalValue = value.conditionTask;
      this._dbtTask.internalValue = value.dbtTask;
      this._dependsOn.internalValue = value.dependsOn;
      this._emailNotifications.internalValue = value.emailNotifications;
      this._forEachTask.internalValue = value.forEachTask;
      this._health.internalValue = value.health;
      this._library.internalValue = value.library;
      this._newCluster.internalValue = value.newCluster;
      this._notebookTask.internalValue = value.notebookTask;
      this._notificationSettings.internalValue = value.notificationSettings;
      this._pipelineTask.internalValue = value.pipelineTask;
      this._pythonWheelTask.internalValue = value.pythonWheelTask;
      this._runJobTask.internalValue = value.runJobTask;
      this._sparkJarTask.internalValue = value.sparkJarTask;
      this._sparkPythonTask.internalValue = value.sparkPythonTask;
      this._sparkSubmitTask.internalValue = value.sparkSubmitTask;
      this._sqlTask.internalValue = value.sqlTask;
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

  // environment_key - computed: false, optional: true, required: false
  private _environmentKey?: string; 
  public get environmentKey() {
    return this.getStringAttribute('environment_key');
  }
  public set environmentKey(value: string) {
    this._environmentKey = value;
  }
  public resetEnvironmentKey() {
    this._environmentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentKeyInput() {
    return this._environmentKey;
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

  // job_cluster_key - computed: false, optional: true, required: false
  private _jobClusterKey?: string; 
  public get jobClusterKey() {
    return this.getStringAttribute('job_cluster_key');
  }
  public set jobClusterKey(value: string) {
    this._jobClusterKey = value;
  }
  public resetJobClusterKey() {
    this._jobClusterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobClusterKeyInput() {
    return this._jobClusterKey;
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

  // retry_on_timeout - computed: true, optional: true, required: false
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

  // run_if - computed: false, optional: true, required: false
  private _runIf?: string; 
  public get runIf() {
    return this.getStringAttribute('run_if');
  }
  public set runIf(value: string) {
    this._runIf = value;
  }
  public resetRunIf() {
    this._runIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runIfInput() {
    return this._runIf;
  }

  // task_key - computed: false, optional: false, required: true
  private _taskKey?: string; 
  public get taskKey() {
    return this.getStringAttribute('task_key');
  }
  public set taskKey(value: string) {
    this._taskKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskKeyInput() {
    return this._taskKey;
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

  // condition_task - computed: false, optional: true, required: false
  private _conditionTask = new DataDatabricksJobJobSettingsSettingsTaskConditionTaskOutputReference(this, "condition_task");
  public get conditionTask() {
    return this._conditionTask;
  }
  public putConditionTask(value: DataDatabricksJobJobSettingsSettingsTaskConditionTask) {
    this._conditionTask.internalValue = value;
  }
  public resetConditionTask() {
    this._conditionTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTaskInput() {
    return this._conditionTask.internalValue;
  }

  // dbt_task - computed: false, optional: true, required: false
  private _dbtTask = new DataDatabricksJobJobSettingsSettingsTaskDbtTaskOutputReference(this, "dbt_task");
  public get dbtTask() {
    return this._dbtTask;
  }
  public putDbtTask(value: DataDatabricksJobJobSettingsSettingsTaskDbtTask) {
    this._dbtTask.internalValue = value;
  }
  public resetDbtTask() {
    this._dbtTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtTaskInput() {
    return this._dbtTask.internalValue;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn = new DataDatabricksJobJobSettingsSettingsTaskDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: DataDatabricksJobJobSettingsSettingsTaskDependsOn[] | cdktf.IResolvable) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
  }

  // email_notifications - computed: false, optional: true, required: false
  private _emailNotifications = new DataDatabricksJobJobSettingsSettingsTaskEmailNotificationsOutputReference(this, "email_notifications");
  public get emailNotifications() {
    return this._emailNotifications;
  }
  public putEmailNotifications(value: DataDatabricksJobJobSettingsSettingsTaskEmailNotifications) {
    this._emailNotifications.internalValue = value;
  }
  public resetEmailNotifications() {
    this._emailNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailNotificationsInput() {
    return this._emailNotifications.internalValue;
  }

  // for_each_task - computed: false, optional: true, required: false
  private _forEachTask = new DataDatabricksJobJobSettingsSettingsTaskForEachTaskOutputReference(this, "for_each_task");
  public get forEachTask() {
    return this._forEachTask;
  }
  public putForEachTask(value: DataDatabricksJobJobSettingsSettingsTaskForEachTask) {
    this._forEachTask.internalValue = value;
  }
  public resetForEachTask() {
    this._forEachTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forEachTaskInput() {
    return this._forEachTask.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new DataDatabricksJobJobSettingsSettingsTaskHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: DataDatabricksJobJobSettingsSettingsTaskHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new DataDatabricksJobJobSettingsSettingsTaskLibraryList(this, "library", false);
  public get library() {
    return this._library;
  }
  public putLibrary(value: DataDatabricksJobJobSettingsSettingsTaskLibrary[] | cdktf.IResolvable) {
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
  private _newCluster = new DataDatabricksJobJobSettingsSettingsTaskNewClusterOutputReference(this, "new_cluster");
  public get newCluster() {
    return this._newCluster;
  }
  public putNewCluster(value: DataDatabricksJobJobSettingsSettingsTaskNewCluster) {
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
  private _notebookTask = new DataDatabricksJobJobSettingsSettingsTaskNotebookTaskOutputReference(this, "notebook_task");
  public get notebookTask() {
    return this._notebookTask;
  }
  public putNotebookTask(value: DataDatabricksJobJobSettingsSettingsTaskNotebookTask) {
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
  private _notificationSettings = new DataDatabricksJobJobSettingsSettingsTaskNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: DataDatabricksJobJobSettingsSettingsTaskNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // pipeline_task - computed: false, optional: true, required: false
  private _pipelineTask = new DataDatabricksJobJobSettingsSettingsTaskPipelineTaskOutputReference(this, "pipeline_task");
  public get pipelineTask() {
    return this._pipelineTask;
  }
  public putPipelineTask(value: DataDatabricksJobJobSettingsSettingsTaskPipelineTask) {
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
  private _pythonWheelTask = new DataDatabricksJobJobSettingsSettingsTaskPythonWheelTaskOutputReference(this, "python_wheel_task");
  public get pythonWheelTask() {
    return this._pythonWheelTask;
  }
  public putPythonWheelTask(value: DataDatabricksJobJobSettingsSettingsTaskPythonWheelTask) {
    this._pythonWheelTask.internalValue = value;
  }
  public resetPythonWheelTask() {
    this._pythonWheelTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonWheelTaskInput() {
    return this._pythonWheelTask.internalValue;
  }

  // run_job_task - computed: false, optional: true, required: false
  private _runJobTask = new DataDatabricksJobJobSettingsSettingsTaskRunJobTaskOutputReference(this, "run_job_task");
  public get runJobTask() {
    return this._runJobTask;
  }
  public putRunJobTask(value: DataDatabricksJobJobSettingsSettingsTaskRunJobTask) {
    this._runJobTask.internalValue = value;
  }
  public resetRunJobTask() {
    this._runJobTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runJobTaskInput() {
    return this._runJobTask.internalValue;
  }

  // spark_jar_task - computed: false, optional: true, required: false
  private _sparkJarTask = new DataDatabricksJobJobSettingsSettingsTaskSparkJarTaskOutputReference(this, "spark_jar_task");
  public get sparkJarTask() {
    return this._sparkJarTask;
  }
  public putSparkJarTask(value: DataDatabricksJobJobSettingsSettingsTaskSparkJarTask) {
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
  private _sparkPythonTask = new DataDatabricksJobJobSettingsSettingsTaskSparkPythonTaskOutputReference(this, "spark_python_task");
  public get sparkPythonTask() {
    return this._sparkPythonTask;
  }
  public putSparkPythonTask(value: DataDatabricksJobJobSettingsSettingsTaskSparkPythonTask) {
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
  private _sparkSubmitTask = new DataDatabricksJobJobSettingsSettingsTaskSparkSubmitTaskOutputReference(this, "spark_submit_task");
  public get sparkSubmitTask() {
    return this._sparkSubmitTask;
  }
  public putSparkSubmitTask(value: DataDatabricksJobJobSettingsSettingsTaskSparkSubmitTask) {
    this._sparkSubmitTask.internalValue = value;
  }
  public resetSparkSubmitTask() {
    this._sparkSubmitTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSubmitTaskInput() {
    return this._sparkSubmitTask.internalValue;
  }

  // sql_task - computed: false, optional: true, required: false
  private _sqlTask = new DataDatabricksJobJobSettingsSettingsTaskSqlTaskOutputReference(this, "sql_task");
  public get sqlTask() {
    return this._sqlTask;
  }
  public putSqlTask(value: DataDatabricksJobJobSettingsSettingsTaskSqlTask) {
    this._sqlTask.internalValue = value;
  }
  public resetSqlTask() {
    this._sqlTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTaskInput() {
    return this._sqlTask.internalValue;
  }

  // webhook_notifications - computed: false, optional: true, required: false
  private _webhookNotifications = new DataDatabricksJobJobSettingsSettingsTaskWebhookNotificationsOutputReference(this, "webhook_notifications");
  public get webhookNotifications() {
    return this._webhookNotifications;
  }
  public putWebhookNotifications(value: DataDatabricksJobJobSettingsSettingsTaskWebhookNotifications) {
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

export class DataDatabricksJobJobSettingsSettingsTaskList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsTask[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsTaskOutputReference {
    return new DataDatabricksJobJobSettingsSettingsTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsTriggerFileArrival {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#min_time_between_triggers_seconds DataDatabricksJob#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#url DataDatabricksJob#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#wait_after_last_change_seconds DataDatabricksJob#wait_after_last_change_seconds}
  */
  readonly waitAfterLastChangeSeconds?: number;
}

export function dataDatabricksJobJobSettingsSettingsTriggerFileArrivalToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTriggerFileArrivalOutputReference | DataDatabricksJobJobSettingsSettingsTriggerFileArrival): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_time_between_triggers_seconds: cdktf.numberToTerraform(struct!.minTimeBetweenTriggersSeconds),
    url: cdktf.stringToTerraform(struct!.url),
    wait_after_last_change_seconds: cdktf.numberToTerraform(struct!.waitAfterLastChangeSeconds),
  }
}


export function dataDatabricksJobJobSettingsSettingsTriggerFileArrivalToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTriggerFileArrivalOutputReference | DataDatabricksJobJobSettingsSettingsTriggerFileArrival): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_time_between_triggers_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minTimeBetweenTriggersSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_after_last_change_seconds: {
      value: cdktf.numberToHclTerraform(struct!.waitAfterLastChangeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTriggerFileArrivalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTriggerFileArrival | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minTimeBetweenTriggersSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTimeBetweenTriggersSeconds = this._minTimeBetweenTriggersSeconds;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._waitAfterLastChangeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitAfterLastChangeSeconds = this._waitAfterLastChangeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTriggerFileArrival | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minTimeBetweenTriggersSeconds = undefined;
      this._url = undefined;
      this._waitAfterLastChangeSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minTimeBetweenTriggersSeconds = value.minTimeBetweenTriggersSeconds;
      this._url = value.url;
      this._waitAfterLastChangeSeconds = value.waitAfterLastChangeSeconds;
    }
  }

  // min_time_between_triggers_seconds - computed: false, optional: true, required: false
  private _minTimeBetweenTriggersSeconds?: number; 
  public get minTimeBetweenTriggersSeconds() {
    return this.getNumberAttribute('min_time_between_triggers_seconds');
  }
  public set minTimeBetweenTriggersSeconds(value: number) {
    this._minTimeBetweenTriggersSeconds = value;
  }
  public resetMinTimeBetweenTriggersSeconds() {
    this._minTimeBetweenTriggersSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTimeBetweenTriggersSecondsInput() {
    return this._minTimeBetweenTriggersSeconds;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // wait_after_last_change_seconds - computed: false, optional: true, required: false
  private _waitAfterLastChangeSeconds?: number; 
  public get waitAfterLastChangeSeconds() {
    return this.getNumberAttribute('wait_after_last_change_seconds');
  }
  public set waitAfterLastChangeSeconds(value: number) {
    this._waitAfterLastChangeSeconds = value;
  }
  public resetWaitAfterLastChangeSeconds() {
    this._waitAfterLastChangeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitAfterLastChangeSecondsInput() {
    return this._waitAfterLastChangeSeconds;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTriggerPeriodic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#interval DataDatabricksJob#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#unit DataDatabricksJob#unit}
  */
  readonly unit: string;
}

export function dataDatabricksJobJobSettingsSettingsTriggerPeriodicToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTriggerPeriodicOutputReference | DataDatabricksJobJobSettingsSettingsTriggerPeriodic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataDatabricksJobJobSettingsSettingsTriggerPeriodicToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTriggerPeriodicOutputReference | DataDatabricksJobJobSettingsSettingsTriggerPeriodic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTriggerPeriodicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTriggerPeriodic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTriggerPeriodic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._unit = value.unit;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTriggerTableUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#condition DataDatabricksJob#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#min_time_between_triggers_seconds DataDatabricksJob#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#table_names DataDatabricksJob#table_names}
  */
  readonly tableNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#wait_after_last_change_seconds DataDatabricksJob#wait_after_last_change_seconds}
  */
  readonly waitAfterLastChangeSeconds?: number;
}

export function dataDatabricksJobJobSettingsSettingsTriggerTableUpdateToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTriggerTableUpdateOutputReference | DataDatabricksJobJobSettingsSettingsTriggerTableUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    min_time_between_triggers_seconds: cdktf.numberToTerraform(struct!.minTimeBetweenTriggersSeconds),
    table_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tableNames),
    wait_after_last_change_seconds: cdktf.numberToTerraform(struct!.waitAfterLastChangeSeconds),
  }
}


export function dataDatabricksJobJobSettingsSettingsTriggerTableUpdateToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTriggerTableUpdateOutputReference | DataDatabricksJobJobSettingsSettingsTriggerTableUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_time_between_triggers_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minTimeBetweenTriggersSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    table_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tableNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wait_after_last_change_seconds: {
      value: cdktf.numberToHclTerraform(struct!.waitAfterLastChangeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTriggerTableUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTriggerTableUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._minTimeBetweenTriggersSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTimeBetweenTriggersSeconds = this._minTimeBetweenTriggersSeconds;
    }
    if (this._tableNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNames = this._tableNames;
    }
    if (this._waitAfterLastChangeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitAfterLastChangeSeconds = this._waitAfterLastChangeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTriggerTableUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._minTimeBetweenTriggersSeconds = undefined;
      this._tableNames = undefined;
      this._waitAfterLastChangeSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._minTimeBetweenTriggersSeconds = value.minTimeBetweenTriggersSeconds;
      this._tableNames = value.tableNames;
      this._waitAfterLastChangeSeconds = value.waitAfterLastChangeSeconds;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // min_time_between_triggers_seconds - computed: false, optional: true, required: false
  private _minTimeBetweenTriggersSeconds?: number; 
  public get minTimeBetweenTriggersSeconds() {
    return this.getNumberAttribute('min_time_between_triggers_seconds');
  }
  public set minTimeBetweenTriggersSeconds(value: number) {
    this._minTimeBetweenTriggersSeconds = value;
  }
  public resetMinTimeBetweenTriggersSeconds() {
    this._minTimeBetweenTriggersSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTimeBetweenTriggersSecondsInput() {
    return this._minTimeBetweenTriggersSeconds;
  }

  // table_names - computed: false, optional: false, required: true
  private _tableNames?: string[]; 
  public get tableNames() {
    return this.getListAttribute('table_names');
  }
  public set tableNames(value: string[]) {
    this._tableNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamesInput() {
    return this._tableNames;
  }

  // wait_after_last_change_seconds - computed: false, optional: true, required: false
  private _waitAfterLastChangeSeconds?: number; 
  public get waitAfterLastChangeSeconds() {
    return this.getNumberAttribute('wait_after_last_change_seconds');
  }
  public set waitAfterLastChangeSeconds(value: number) {
    this._waitAfterLastChangeSeconds = value;
  }
  public resetWaitAfterLastChangeSeconds() {
    this._waitAfterLastChangeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitAfterLastChangeSecondsInput() {
    return this._waitAfterLastChangeSeconds;
  }
}
export interface DataDatabricksJobJobSettingsSettingsTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#pause_status DataDatabricksJob#pause_status}
  */
  readonly pauseStatus?: string;
  /**
  * file_arrival block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#file_arrival DataDatabricksJob#file_arrival}
  */
  readonly fileArrival?: DataDatabricksJobJobSettingsSettingsTriggerFileArrival;
  /**
  * periodic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#periodic DataDatabricksJob#periodic}
  */
  readonly periodic?: DataDatabricksJobJobSettingsSettingsTriggerPeriodic;
  /**
  * table_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#table_update DataDatabricksJob#table_update}
  */
  readonly tableUpdate?: DataDatabricksJobJobSettingsSettingsTriggerTableUpdate;
}

export function dataDatabricksJobJobSettingsSettingsTriggerToTerraform(struct?: DataDatabricksJobJobSettingsSettingsTriggerOutputReference | DataDatabricksJobJobSettingsSettingsTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pause_status: cdktf.stringToTerraform(struct!.pauseStatus),
    file_arrival: dataDatabricksJobJobSettingsSettingsTriggerFileArrivalToTerraform(struct!.fileArrival),
    periodic: dataDatabricksJobJobSettingsSettingsTriggerPeriodicToTerraform(struct!.periodic),
    table_update: dataDatabricksJobJobSettingsSettingsTriggerTableUpdateToTerraform(struct!.tableUpdate),
  }
}


export function dataDatabricksJobJobSettingsSettingsTriggerToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsTriggerOutputReference | DataDatabricksJobJobSettingsSettingsTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pause_status: {
      value: cdktf.stringToHclTerraform(struct!.pauseStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_arrival: {
      value: dataDatabricksJobJobSettingsSettingsTriggerFileArrivalToHclTerraform(struct!.fileArrival),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTriggerFileArrivalList",
    },
    periodic: {
      value: dataDatabricksJobJobSettingsSettingsTriggerPeriodicToHclTerraform(struct!.periodic),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTriggerPeriodicList",
    },
    table_update: {
      value: dataDatabricksJobJobSettingsSettingsTriggerTableUpdateToHclTerraform(struct!.tableUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsTriggerTableUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksJobJobSettingsSettingsTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksJobJobSettingsSettingsTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pauseStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseStatus = this._pauseStatus;
    }
    if (this._fileArrival?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileArrival = this._fileArrival?.internalValue;
    }
    if (this._periodic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodic = this._periodic?.internalValue;
    }
    if (this._tableUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableUpdate = this._tableUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pauseStatus = undefined;
      this._fileArrival.internalValue = undefined;
      this._periodic.internalValue = undefined;
      this._tableUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pauseStatus = value.pauseStatus;
      this._fileArrival.internalValue = value.fileArrival;
      this._periodic.internalValue = value.periodic;
      this._tableUpdate.internalValue = value.tableUpdate;
    }
  }

  // pause_status - computed: false, optional: true, required: false
  private _pauseStatus?: string; 
  public get pauseStatus() {
    return this.getStringAttribute('pause_status');
  }
  public set pauseStatus(value: string) {
    this._pauseStatus = value;
  }
  public resetPauseStatus() {
    this._pauseStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseStatusInput() {
    return this._pauseStatus;
  }

  // file_arrival - computed: false, optional: true, required: false
  private _fileArrival = new DataDatabricksJobJobSettingsSettingsTriggerFileArrivalOutputReference(this, "file_arrival");
  public get fileArrival() {
    return this._fileArrival;
  }
  public putFileArrival(value: DataDatabricksJobJobSettingsSettingsTriggerFileArrival) {
    this._fileArrival.internalValue = value;
  }
  public resetFileArrival() {
    this._fileArrival.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileArrivalInput() {
    return this._fileArrival.internalValue;
  }

  // periodic - computed: false, optional: true, required: false
  private _periodic = new DataDatabricksJobJobSettingsSettingsTriggerPeriodicOutputReference(this, "periodic");
  public get periodic() {
    return this._periodic;
  }
  public putPeriodic(value: DataDatabricksJobJobSettingsSettingsTriggerPeriodic) {
    this._periodic.internalValue = value;
  }
  public resetPeriodic() {
    this._periodic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicInput() {
    return this._periodic.internalValue;
  }

  // table_update - computed: false, optional: true, required: false
  private _tableUpdate = new DataDatabricksJobJobSettingsSettingsTriggerTableUpdateOutputReference(this, "table_update");
  public get tableUpdate() {
    return this._tableUpdate;
  }
  public putTableUpdate(value: DataDatabricksJobJobSettingsSettingsTriggerTableUpdate) {
    this._tableUpdate.internalValue = value;
  }
  public resetTableUpdate() {
    this._tableUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableUpdateInput() {
    return this._tableUpdate.internalValue;
  }
}
export interface DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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
export interface DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceededToTerraform(struct?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceededToHclTerraform(struct?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable): any {
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

export class DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceededOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceededList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceededOutputReference {
    return new DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#id DataDatabricksJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_duration_warning_threshold_exceeded DataDatabricksJob#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_failure DataDatabricksJob#on_failure}
  */
  readonly onFailure?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnFailure[] | cdktf.IResolvable;
  /**
  * on_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_start DataDatabricksJob#on_start}
  */
  readonly onStart?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStart[] | cdktf.IResolvable;
  /**
  * on_streaming_backlog_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_streaming_backlog_exceeded DataDatabricksJob#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#on_success DataDatabricksJob#on_success}
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
    on_streaming_backlog_exceeded: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceededToTerraform, true)(struct!.onStreamingBacklogExceeded),
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
    on_streaming_backlog_exceeded: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceededToHclTerraform, true)(struct!.onStreamingBacklogExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceededList",
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
    if (this._onStreamingBacklogExceeded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStreamingBacklogExceeded = this._onStreamingBacklogExceeded?.internalValue;
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
      this._onStreamingBacklogExceeded.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDurationWarningThresholdExceeded.internalValue = value.onDurationWarningThresholdExceeded;
      this._onFailure.internalValue = value.onFailure;
      this._onStart.internalValue = value.onStart;
      this._onStreamingBacklogExceeded.internalValue = value.onStreamingBacklogExceeded;
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

  // on_streaming_backlog_exceeded - computed: false, optional: true, required: false
  private _onStreamingBacklogExceeded = new DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceededList(this, "on_streaming_backlog_exceeded", false);
  public get onStreamingBacklogExceeded() {
    return this._onStreamingBacklogExceeded;
  }
  public putOnStreamingBacklogExceeded(value: DataDatabricksJobJobSettingsSettingsWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable) {
    this._onStreamingBacklogExceeded.internalValue = value;
  }
  public resetOnStreamingBacklogExceeded() {
    this._onStreamingBacklogExceeded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStreamingBacklogExceededInput() {
    return this._onStreamingBacklogExceeded.internalValue;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#description DataDatabricksJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#edit_mode DataDatabricksJob#edit_mode}
  */
  readonly editMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#existing_cluster_id DataDatabricksJob#existing_cluster_id}
  */
  readonly existingClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#format DataDatabricksJob#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#max_concurrent_runs DataDatabricksJob#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#max_retries DataDatabricksJob#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#min_retry_interval_millis DataDatabricksJob#min_retry_interval_millis}
  */
  readonly minRetryIntervalMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#name DataDatabricksJob#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#retry_on_timeout DataDatabricksJob#retry_on_timeout}
  */
  readonly retryOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#tags DataDatabricksJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#timeout_seconds DataDatabricksJob#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * continuous block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#continuous DataDatabricksJob#continuous}
  */
  readonly continuous?: DataDatabricksJobJobSettingsSettingsContinuous;
  /**
  * dbt_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#dbt_task DataDatabricksJob#dbt_task}
  */
  readonly dbtTask?: DataDatabricksJobJobSettingsSettingsDbtTask;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#deployment DataDatabricksJob#deployment}
  */
  readonly deployment?: DataDatabricksJobJobSettingsSettingsDeployment;
  /**
  * email_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#email_notifications DataDatabricksJob#email_notifications}
  */
  readonly emailNotifications?: DataDatabricksJobJobSettingsSettingsEmailNotifications;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#environment DataDatabricksJob#environment}
  */
  readonly environment?: DataDatabricksJobJobSettingsSettingsEnvironment[] | cdktf.IResolvable;
  /**
  * git_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#git_source DataDatabricksJob#git_source}
  */
  readonly gitSource?: DataDatabricksJobJobSettingsSettingsGitSource;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#health DataDatabricksJob#health}
  */
  readonly health?: DataDatabricksJobJobSettingsSettingsHealth;
  /**
  * job_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#job_cluster DataDatabricksJob#job_cluster}
  */
  readonly jobCluster?: DataDatabricksJobJobSettingsSettingsJobCluster[] | cdktf.IResolvable;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#library DataDatabricksJob#library}
  */
  readonly library?: DataDatabricksJobJobSettingsSettingsLibrary[] | cdktf.IResolvable;
  /**
  * new_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#new_cluster DataDatabricksJob#new_cluster}
  */
  readonly newCluster?: DataDatabricksJobJobSettingsSettingsNewCluster;
  /**
  * notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#notebook_task DataDatabricksJob#notebook_task}
  */
  readonly notebookTask?: DataDatabricksJobJobSettingsSettingsNotebookTask;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#notification_settings DataDatabricksJob#notification_settings}
  */
  readonly notificationSettings?: DataDatabricksJobJobSettingsSettingsNotificationSettings;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#parameter DataDatabricksJob#parameter}
  */
  readonly parameter?: DataDatabricksJobJobSettingsSettingsParameter[] | cdktf.IResolvable;
  /**
  * pipeline_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#pipeline_task DataDatabricksJob#pipeline_task}
  */
  readonly pipelineTask?: DataDatabricksJobJobSettingsSettingsPipelineTask;
  /**
  * python_wheel_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#python_wheel_task DataDatabricksJob#python_wheel_task}
  */
  readonly pythonWheelTask?: DataDatabricksJobJobSettingsSettingsPythonWheelTask;
  /**
  * queue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#queue DataDatabricksJob#queue}
  */
  readonly queue?: DataDatabricksJobJobSettingsSettingsQueue;
  /**
  * run_as block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#run_as DataDatabricksJob#run_as}
  */
  readonly runAs?: DataDatabricksJobJobSettingsSettingsRunAs;
  /**
  * run_job_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#run_job_task DataDatabricksJob#run_job_task}
  */
  readonly runJobTask?: DataDatabricksJobJobSettingsSettingsRunJobTask;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#schedule DataDatabricksJob#schedule}
  */
  readonly schedule?: DataDatabricksJobJobSettingsSettingsSchedule;
  /**
  * spark_jar_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#spark_jar_task DataDatabricksJob#spark_jar_task}
  */
  readonly sparkJarTask?: DataDatabricksJobJobSettingsSettingsSparkJarTask;
  /**
  * spark_python_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#spark_python_task DataDatabricksJob#spark_python_task}
  */
  readonly sparkPythonTask?: DataDatabricksJobJobSettingsSettingsSparkPythonTask;
  /**
  * spark_submit_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#spark_submit_task DataDatabricksJob#spark_submit_task}
  */
  readonly sparkSubmitTask?: DataDatabricksJobJobSettingsSettingsSparkSubmitTask;
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#task DataDatabricksJob#task}
  */
  readonly task?: DataDatabricksJobJobSettingsSettingsTask[] | cdktf.IResolvable;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#trigger DataDatabricksJob#trigger}
  */
  readonly trigger?: DataDatabricksJobJobSettingsSettingsTrigger;
  /**
  * webhook_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#webhook_notifications DataDatabricksJob#webhook_notifications}
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
    continuous: dataDatabricksJobJobSettingsSettingsContinuousToTerraform(struct!.continuous),
    dbt_task: dataDatabricksJobJobSettingsSettingsDbtTaskToTerraform(struct!.dbtTask),
    deployment: dataDatabricksJobJobSettingsSettingsDeploymentToTerraform(struct!.deployment),
    email_notifications: dataDatabricksJobJobSettingsSettingsEmailNotificationsToTerraform(struct!.emailNotifications),
    environment: cdktf.listMapper(dataDatabricksJobJobSettingsSettingsEnvironmentToTerraform, true)(struct!.environment),
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
    environment: {
      value: cdktf.listMapperHcl(dataDatabricksJobJobSettingsSettingsEnvironmentToHclTerraform, true)(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksJobJobSettingsSettingsEnvironmentList",
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
      type: "list",
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
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
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
      this._continuous.internalValue = undefined;
      this._dbtTask.internalValue = undefined;
      this._deployment.internalValue = undefined;
      this._emailNotifications.internalValue = undefined;
      this._environment.internalValue = undefined;
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
      this._continuous.internalValue = value.continuous;
      this._dbtTask.internalValue = value.dbtTask;
      this._deployment.internalValue = value.deployment;
      this._emailNotifications.internalValue = value.emailNotifications;
      this._environment.internalValue = value.environment;
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

  // environment - computed: false, optional: true, required: false
  private _environment = new DataDatabricksJobJobSettingsSettingsEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataDatabricksJobJobSettingsSettingsEnvironment[] | cdktf.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
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
  private _library = new DataDatabricksJobJobSettingsSettingsLibraryList(this, "library", false);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#created_time DataDatabricksJob#created_time}
  */
  readonly createdTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#creator_user_name DataDatabricksJob#creator_user_name}
  */
  readonly creatorUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#job_id DataDatabricksJob#job_id}
  */
  readonly jobId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#run_as_user_name DataDatabricksJob#run_as_user_name}
  */
  readonly runAsUserName?: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.3/docs/data-sources/job#settings DataDatabricksJob#settings}
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
