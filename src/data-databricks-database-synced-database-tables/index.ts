/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksDatabaseSyncedDatabaseTablesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // estimated_completion_time_seconds - computed: true, optional: false, required: false
  public get estimatedCompletionTimeSeconds() {
    return this.getNumberAttribute('estimated_completion_time_seconds');
  }

  // latest_version_currently_processing - computed: true, optional: false, required: false
  public get latestVersionCurrentlyProcessing() {
    return this.getNumberAttribute('latest_version_currently_processing');
  }

  // provisioning_phase - computed: true, optional: false, required: false
  public get provisioningPhase() {
    return this.getStringAttribute('provisioning_phase');
  }

  // sync_progress_completion - computed: true, optional: false, required: false
  public get syncProgressCompletion() {
    return this.getNumberAttribute('sync_progress_completion');
  }

  // synced_row_count - computed: true, optional: false, required: false
  public get syncedRowCount() {
    return this.getNumberAttribute('synced_row_count');
  }

  // total_row_count - computed: true, optional: false, required: false
  public get totalRowCount() {
    return this.getNumberAttribute('total_row_count');
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // initial_pipeline_sync_progress - computed: true, optional: false, required: false
  private _initialPipelineSyncProgress = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(this, "initial_pipeline_sync_progress");
  public get initialPipelineSyncProgress() {
    return this._initialPipelineSyncProgress;
  }

  // last_processed_commit_version - computed: true, optional: false, required: false
  public get lastProcessedCommitVersion() {
    return this.getNumberAttribute('last_processed_commit_version');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // last_processed_commit_version - computed: true, optional: false, required: false
  public get lastProcessedCommitVersion() {
    return this.getNumberAttribute('last_processed_commit_version');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delta_commit_timestamp - computed: true, optional: false, required: false
  public get deltaCommitTimestamp() {
    return this.getStringAttribute('delta_commit_timestamp');
  }

  // delta_commit_version - computed: true, optional: false, required: false
  public get deltaCommitVersion() {
    return this.getNumberAttribute('delta_commit_version');
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delta_table_sync_info - computed: true, optional: false, required: false
  private _deltaTableSyncInfo = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference(this, "delta_table_sync_info");
  public get deltaTableSyncInfo() {
    return this._deltaTableSyncInfo;
  }

  // sync_end_timestamp - computed: true, optional: false, required: false
  public get syncEndTimestamp() {
    return this.getStringAttribute('sync_end_timestamp');
  }

  // sync_start_timestamp - computed: true, optional: false, required: false
  public get syncStartTimestamp() {
    return this.getStringAttribute('sync_start_timestamp');
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // estimated_completion_time_seconds - computed: true, optional: false, required: false
  public get estimatedCompletionTimeSeconds() {
    return this.getNumberAttribute('estimated_completion_time_seconds');
  }

  // latest_version_currently_processing - computed: true, optional: false, required: false
  public get latestVersionCurrentlyProcessing() {
    return this.getNumberAttribute('latest_version_currently_processing');
  }

  // provisioning_phase - computed: true, optional: false, required: false
  public get provisioningPhase() {
    return this.getStringAttribute('provisioning_phase');
  }

  // sync_progress_completion - computed: true, optional: false, required: false
  public get syncProgressCompletion() {
    return this.getNumberAttribute('sync_progress_completion');
  }

  // synced_row_count - computed: true, optional: false, required: false
  public get syncedRowCount() {
    return this.getNumberAttribute('synced_row_count');
  }

  // total_row_count - computed: true, optional: false, required: false
  public get totalRowCount() {
    return this.getNumberAttribute('total_row_count');
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // initial_pipeline_sync_progress - computed: true, optional: false, required: false
  private _initialPipelineSyncProgress = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(this, "initial_pipeline_sync_progress");
  public get initialPipelineSyncProgress() {
    return this._initialPipelineSyncProgress;
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // estimated_completion_time_seconds - computed: true, optional: false, required: false
  public get estimatedCompletionTimeSeconds() {
    return this.getNumberAttribute('estimated_completion_time_seconds');
  }

  // latest_version_currently_processing - computed: true, optional: false, required: false
  public get latestVersionCurrentlyProcessing() {
    return this.getNumberAttribute('latest_version_currently_processing');
  }

  // provisioning_phase - computed: true, optional: false, required: false
  public get provisioningPhase() {
    return this.getStringAttribute('provisioning_phase');
  }

  // sync_progress_completion - computed: true, optional: false, required: false
  public get syncProgressCompletion() {
    return this.getNumberAttribute('sync_progress_completion');
  }

  // synced_row_count - computed: true, optional: false, required: false
  public get syncedRowCount() {
    return this.getNumberAttribute('synced_row_count');
  }

  // total_row_count - computed: true, optional: false, required: false
  public get totalRowCount() {
    return this.getNumberAttribute('total_row_count');
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // last_processed_commit_version - computed: true, optional: false, required: false
  public get lastProcessedCommitVersion() {
    return this.getNumberAttribute('last_processed_commit_version');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // triggered_update_progress - computed: true, optional: false, required: false
  private _triggeredUpdateProgress = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(this, "triggered_update_progress");
  public get triggeredUpdateProgress() {
    return this._triggeredUpdateProgress;
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#continuous_update_status DataDatabricksDatabaseSyncedDatabaseTables#continuous_update_status}
  */
  readonly continuousUpdateStatus?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#failed_status DataDatabricksDatabaseSyncedDatabaseTables#failed_status}
  */
  readonly failedStatus?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#provisioning_status DataDatabricksDatabaseSyncedDatabaseTables#provisioning_status}
  */
  readonly provisioningStatus?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#triggered_update_status DataDatabricksDatabaseSyncedDatabaseTables#triggered_update_status}
  */
  readonly triggeredUpdateStatus?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus;
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continuous_update_status: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusToTerraform(struct!.continuousUpdateStatus),
    failed_status: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusToTerraform(struct!.failedStatus),
    provisioning_status: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusToTerraform(struct!.provisioningStatus),
    triggered_update_status: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusToTerraform(struct!.triggeredUpdateStatus),
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continuous_update_status: {
      value: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusToHclTerraform(struct!.continuousUpdateStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus",
    },
    failed_status: {
      value: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusToHclTerraform(struct!.failedStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus",
    },
    provisioning_status: {
      value: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusToHclTerraform(struct!.provisioningStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus",
    },
    triggered_update_status: {
      value: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusToHclTerraform(struct!.triggeredUpdateStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuousUpdateStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousUpdateStatus = this._continuousUpdateStatus?.internalValue;
    }
    if (this._failedStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedStatus = this._failedStatus?.internalValue;
    }
    if (this._provisioningStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningStatus = this._provisioningStatus?.internalValue;
    }
    if (this._triggeredUpdateStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggeredUpdateStatus = this._triggeredUpdateStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continuousUpdateStatus.internalValue = undefined;
      this._failedStatus.internalValue = undefined;
      this._provisioningStatus.internalValue = undefined;
      this._triggeredUpdateStatus.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continuousUpdateStatus.internalValue = value.continuousUpdateStatus;
      this._failedStatus.internalValue = value.failedStatus;
      this._provisioningStatus.internalValue = value.provisioningStatus;
      this._triggeredUpdateStatus.internalValue = value.triggeredUpdateStatus;
    }
  }

  // continuous_update_status - computed: true, optional: true, required: false
  private _continuousUpdateStatus = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference(this, "continuous_update_status");
  public get continuousUpdateStatus() {
    return this._continuousUpdateStatus;
  }
  public putContinuousUpdateStatus(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus) {
    this._continuousUpdateStatus.internalValue = value;
  }
  public resetContinuousUpdateStatus() {
    this._continuousUpdateStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousUpdateStatusInput() {
    return this._continuousUpdateStatus.internalValue;
  }

  // detailed_state - computed: true, optional: false, required: false
  public get detailedState() {
    return this.getStringAttribute('detailed_state');
  }

  // failed_status - computed: true, optional: true, required: false
  private _failedStatus = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference(this, "failed_status");
  public get failedStatus() {
    return this._failedStatus;
  }
  public putFailedStatus(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus) {
    this._failedStatus.internalValue = value;
  }
  public resetFailedStatus() {
    this._failedStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedStatusInput() {
    return this._failedStatus.internalValue;
  }

  // last_sync - computed: true, optional: false, required: false
  private _lastSync = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference(this, "last_sync");
  public get lastSync() {
    return this._lastSync;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // provisioning_status - computed: true, optional: true, required: false
  private _provisioningStatus = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference(this, "provisioning_status");
  public get provisioningStatus() {
    return this._provisioningStatus;
  }
  public putProvisioningStatus(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus) {
    this._provisioningStatus.internalValue = value;
  }
  public resetProvisioningStatus() {
    this._provisioningStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningStatusInput() {
    return this._provisioningStatus.internalValue;
  }

  // triggered_update_status - computed: true, optional: true, required: false
  private _triggeredUpdateStatus = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference(this, "triggered_update_status");
  public get triggeredUpdateStatus() {
    return this._triggeredUpdateStatus;
  }
  public putTriggeredUpdateStatus(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus) {
    this._triggeredUpdateStatus.internalValue = value;
  }
  public resetTriggeredUpdateStatus() {
    this._triggeredUpdateStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeredUpdateStatusInput() {
    return this._triggeredUpdateStatus.internalValue;
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#storage_catalog DataDatabricksDatabaseSyncedDatabaseTables#storage_catalog}
  */
  readonly storageCatalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#storage_schema DataDatabricksDatabaseSyncedDatabaseTables#storage_schema}
  */
  readonly storageSchema?: string;
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_catalog: cdktf.stringToTerraform(struct!.storageCatalog),
    storage_schema: cdktf.stringToTerraform(struct!.storageSchema),
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_catalog: {
      value: cdktf.stringToHclTerraform(struct!.storageCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_schema: {
      value: cdktf.stringToHclTerraform(struct!.storageSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCatalog = this._storageCatalog;
    }
    if (this._storageSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSchema = this._storageSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageCatalog = undefined;
      this._storageSchema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageCatalog = value.storageCatalog;
      this._storageSchema = value.storageSchema;
    }
  }

  // storage_catalog - computed: true, optional: true, required: false
  private _storageCatalog?: string; 
  public get storageCatalog() {
    return this.getStringAttribute('storage_catalog');
  }
  public set storageCatalog(value: string) {
    this._storageCatalog = value;
  }
  public resetStorageCatalog() {
    this._storageCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCatalogInput() {
    return this._storageCatalog;
  }

  // storage_schema - computed: true, optional: true, required: false
  private _storageSchema?: string; 
  public get storageSchema() {
    return this.getStringAttribute('storage_schema');
  }
  public set storageSchema(value: string) {
    this._storageSchema = value;
  }
  public resetStorageSchema() {
    this._storageSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSchemaInput() {
    return this._storageSchema;
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#create_database_objects_if_missing DataDatabricksDatabaseSyncedDatabaseTables#create_database_objects_if_missing}
  */
  readonly createDatabaseObjectsIfMissing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#existing_pipeline_id DataDatabricksDatabaseSyncedDatabaseTables#existing_pipeline_id}
  */
  readonly existingPipelineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#new_pipeline_spec DataDatabricksDatabaseSyncedDatabaseTables#new_pipeline_spec}
  */
  readonly newPipelineSpec?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#primary_key_columns DataDatabricksDatabaseSyncedDatabaseTables#primary_key_columns}
  */
  readonly primaryKeyColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#scheduling_policy DataDatabricksDatabaseSyncedDatabaseTables#scheduling_policy}
  */
  readonly schedulingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#source_table_full_name DataDatabricksDatabaseSyncedDatabaseTables#source_table_full_name}
  */
  readonly sourceTableFullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#timeseries_key DataDatabricksDatabaseSyncedDatabaseTables#timeseries_key}
  */
  readonly timeseriesKey?: string;
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_database_objects_if_missing: cdktf.booleanToTerraform(struct!.createDatabaseObjectsIfMissing),
    existing_pipeline_id: cdktf.stringToTerraform(struct!.existingPipelineId),
    new_pipeline_spec: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecToTerraform(struct!.newPipelineSpec),
    primary_key_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKeyColumns),
    scheduling_policy: cdktf.stringToTerraform(struct!.schedulingPolicy),
    source_table_full_name: cdktf.stringToTerraform(struct!.sourceTableFullName),
    timeseries_key: cdktf.stringToTerraform(struct!.timeseriesKey),
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_database_objects_if_missing: {
      value: cdktf.booleanToHclTerraform(struct!.createDatabaseObjectsIfMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    existing_pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.existingPipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_pipeline_spec: {
      value: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecToHclTerraform(struct!.newPipelineSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec",
    },
    primary_key_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryKeyColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scheduling_policy: {
      value: cdktf.stringToHclTerraform(struct!.schedulingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_table_full_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceTableFullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_key: {
      value: cdktf.stringToHclTerraform(struct!.timeseriesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createDatabaseObjectsIfMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDatabaseObjectsIfMissing = this._createDatabaseObjectsIfMissing;
    }
    if (this._existingPipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingPipelineId = this._existingPipelineId;
    }
    if (this._newPipelineSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPipelineSpec = this._newPipelineSpec?.internalValue;
    }
    if (this._primaryKeyColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeyColumns = this._primaryKeyColumns;
    }
    if (this._schedulingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingPolicy = this._schedulingPolicy;
    }
    if (this._sourceTableFullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTableFullName = this._sourceTableFullName;
    }
    if (this._timeseriesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesKey = this._timeseriesKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createDatabaseObjectsIfMissing = undefined;
      this._existingPipelineId = undefined;
      this._newPipelineSpec.internalValue = undefined;
      this._primaryKeyColumns = undefined;
      this._schedulingPolicy = undefined;
      this._sourceTableFullName = undefined;
      this._timeseriesKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createDatabaseObjectsIfMissing = value.createDatabaseObjectsIfMissing;
      this._existingPipelineId = value.existingPipelineId;
      this._newPipelineSpec.internalValue = value.newPipelineSpec;
      this._primaryKeyColumns = value.primaryKeyColumns;
      this._schedulingPolicy = value.schedulingPolicy;
      this._sourceTableFullName = value.sourceTableFullName;
      this._timeseriesKey = value.timeseriesKey;
    }
  }

  // create_database_objects_if_missing - computed: true, optional: true, required: false
  private _createDatabaseObjectsIfMissing?: boolean | cdktf.IResolvable; 
  public get createDatabaseObjectsIfMissing() {
    return this.getBooleanAttribute('create_database_objects_if_missing');
  }
  public set createDatabaseObjectsIfMissing(value: boolean | cdktf.IResolvable) {
    this._createDatabaseObjectsIfMissing = value;
  }
  public resetCreateDatabaseObjectsIfMissing() {
    this._createDatabaseObjectsIfMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDatabaseObjectsIfMissingInput() {
    return this._createDatabaseObjectsIfMissing;
  }

  // existing_pipeline_id - computed: true, optional: true, required: false
  private _existingPipelineId?: string; 
  public get existingPipelineId() {
    return this.getStringAttribute('existing_pipeline_id');
  }
  public set existingPipelineId(value: string) {
    this._existingPipelineId = value;
  }
  public resetExistingPipelineId() {
    this._existingPipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingPipelineIdInput() {
    return this._existingPipelineId;
  }

  // new_pipeline_spec - computed: true, optional: true, required: false
  private _newPipelineSpec = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference(this, "new_pipeline_spec");
  public get newPipelineSpec() {
    return this._newPipelineSpec;
  }
  public putNewPipelineSpec(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec) {
    this._newPipelineSpec.internalValue = value;
  }
  public resetNewPipelineSpec() {
    this._newPipelineSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPipelineSpecInput() {
    return this._newPipelineSpec.internalValue;
  }

  // primary_key_columns - computed: true, optional: true, required: false
  private _primaryKeyColumns?: string[]; 
  public get primaryKeyColumns() {
    return this.getListAttribute('primary_key_columns');
  }
  public set primaryKeyColumns(value: string[]) {
    this._primaryKeyColumns = value;
  }
  public resetPrimaryKeyColumns() {
    this._primaryKeyColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyColumnsInput() {
    return this._primaryKeyColumns;
  }

  // scheduling_policy - computed: true, optional: true, required: false
  private _schedulingPolicy?: string; 
  public get schedulingPolicy() {
    return this.getStringAttribute('scheduling_policy');
  }
  public set schedulingPolicy(value: string) {
    this._schedulingPolicy = value;
  }
  public resetSchedulingPolicy() {
    this._schedulingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPolicyInput() {
    return this._schedulingPolicy;
  }

  // source_table_full_name - computed: true, optional: true, required: false
  private _sourceTableFullName?: string; 
  public get sourceTableFullName() {
    return this.getStringAttribute('source_table_full_name');
  }
  public set sourceTableFullName(value: string) {
    this._sourceTableFullName = value;
  }
  public resetSourceTableFullName() {
    this._sourceTableFullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTableFullNameInput() {
    return this._sourceTableFullName;
  }

  // timeseries_key - computed: true, optional: true, required: false
  private _timeseriesKey?: string; 
  public get timeseriesKey() {
    return this.getStringAttribute('timeseries_key');
  }
  public set timeseriesKey(value: string) {
    this._timeseriesKey = value;
  }
  public resetTimeseriesKey() {
    this._timeseriesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesKeyInput() {
    return this._timeseriesKey;
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#database_instance_name DataDatabricksDatabaseSyncedDatabaseTables#database_instance_name}
  */
  readonly databaseInstanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#logical_database_name DataDatabricksDatabaseSyncedDatabaseTables#logical_database_name}
  */
  readonly logicalDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#name DataDatabricksDatabaseSyncedDatabaseTables#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#spec DataDatabricksDatabaseSyncedDatabaseTables#spec}
  */
  readonly spec?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec;
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_instance_name: cdktf.stringToTerraform(struct!.databaseInstanceName),
    logical_database_name: cdktf.stringToTerraform(struct!.logicalDatabaseName),
    name: cdktf.stringToTerraform(struct!.name),
    spec: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecToTerraform(struct!.spec),
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_instance_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseInstanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_database_name: {
      value: cdktf.stringToHclTerraform(struct!.logicalDatabaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec: {
      value: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseInstanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseInstanceName = this._databaseInstanceName;
    }
    if (this._logicalDatabaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalDatabaseName = this._logicalDatabaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseInstanceName = undefined;
      this._logicalDatabaseName = undefined;
      this._name = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseInstanceName = value.databaseInstanceName;
      this._logicalDatabaseName = value.logicalDatabaseName;
      this._name = value.name;
      this._spec.internalValue = value.spec;
    }
  }

  // data_synchronization_status - computed: true, optional: false, required: false
  private _dataSynchronizationStatus = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference(this, "data_synchronization_status");
  public get dataSynchronizationStatus() {
    return this._dataSynchronizationStatus;
  }

  // database_instance_name - computed: true, optional: true, required: false
  private _databaseInstanceName?: string; 
  public get databaseInstanceName() {
    return this.getStringAttribute('database_instance_name');
  }
  public set databaseInstanceName(value: string) {
    this._databaseInstanceName = value;
  }
  public resetDatabaseInstanceName() {
    this._databaseInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInstanceNameInput() {
    return this._databaseInstanceName;
  }

  // effective_database_instance_name - computed: true, optional: false, required: false
  public get effectiveDatabaseInstanceName() {
    return this.getStringAttribute('effective_database_instance_name');
  }

  // effective_logical_database_name - computed: true, optional: false, required: false
  public get effectiveLogicalDatabaseName() {
    return this.getStringAttribute('effective_logical_database_name');
  }

  // logical_database_name - computed: true, optional: true, required: false
  private _logicalDatabaseName?: string; 
  public get logicalDatabaseName() {
    return this.getStringAttribute('logical_database_name');
  }
  public set logicalDatabaseName(value: string) {
    this._logicalDatabaseName = value;
  }
  public resetLogicalDatabaseName() {
    this._logicalDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalDatabaseNameInput() {
    return this._logicalDatabaseName;
  }

  // name - computed: true, optional: false, required: true
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

  // spec - computed: true, optional: true, required: false
  private _spec = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // unity_catalog_provisioning_state - computed: true, optional: false, required: false
  public get unityCatalogProvisioningState() {
    return this.getStringAttribute('unity_catalog_provisioning_state');
  }
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference {
    return new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables databricks_database_synced_database_tables}
*/
export class DataDatabricksDatabaseSyncedDatabaseTables extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_database_synced_database_tables";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksDatabaseSyncedDatabaseTables resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksDatabaseSyncedDatabaseTables to import
  * @param importFromId The id of the existing DataDatabricksDatabaseSyncedDatabaseTables that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDatabaseSyncedDatabaseTables to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_database_synced_database_tables", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_synced_database_tables databricks_database_synced_database_tables} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksDatabaseSyncedDatabaseTablesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksDatabaseSyncedDatabaseTablesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_database_synced_database_tables',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.91.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // synced_tables - computed: true, optional: false, required: false
  private _syncedTables = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList(this, "synced_tables", false);
  public get syncedTables() {
    return this._syncedTables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
