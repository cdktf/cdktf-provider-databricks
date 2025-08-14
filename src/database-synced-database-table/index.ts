/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseSyncedDatabaseTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#database_instance_name DatabaseSyncedDatabaseTable#database_instance_name}
  */
  readonly databaseInstanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#logical_database_name DatabaseSyncedDatabaseTable#logical_database_name}
  */
  readonly logicalDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#name DatabaseSyncedDatabaseTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#spec DatabaseSyncedDatabaseTable#spec}
  */
  readonly spec?: DatabaseSyncedDatabaseTableSpec;
}
export interface DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress {
}

export function databaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressToTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressToHclTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress | undefined) {
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
export interface DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus {
}

export function databaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusToTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusToHclTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus | cdktf.IResolvable | undefined) {
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
  private _initialPipelineSyncProgress = new DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(this, "initial_pipeline_sync_progress");
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
export interface DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus {
}

export function databaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusToTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusToHclTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus | cdktf.IResolvable | undefined) {
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
export interface DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo {
}

export function databaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoToTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoToHclTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo | undefined) {
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
export interface DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync {
}

export function databaseSyncedDatabaseTableDataSynchronizationStatusLastSyncToTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseSyncedDatabaseTableDataSynchronizationStatusLastSyncToHclTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delta_table_sync_info - computed: true, optional: false, required: false
  private _deltaTableSyncInfo = new DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference(this, "delta_table_sync_info");
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
export interface DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress {
}

export function databaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressToTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressToHclTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress | undefined) {
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
export interface DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus {
}

export function databaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusToTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusToHclTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus | cdktf.IResolvable | undefined) {
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
  private _initialPipelineSyncProgress = new DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(this, "initial_pipeline_sync_progress");
  public get initialPipelineSyncProgress() {
    return this._initialPipelineSyncProgress;
  }
}
export interface DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress {
}

export function databaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressToTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressToHclTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress | undefined) {
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
export interface DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus {
}

export function databaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusToTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusToHclTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus | cdktf.IResolvable | undefined) {
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
  private _triggeredUpdateProgress = new DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(this, "triggered_update_progress");
  public get triggeredUpdateProgress() {
    return this._triggeredUpdateProgress;
  }
}
export interface DatabaseSyncedDatabaseTableDataSynchronizationStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#continuous_update_status DatabaseSyncedDatabaseTable#continuous_update_status}
  */
  readonly continuousUpdateStatus?: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#failed_status DatabaseSyncedDatabaseTable#failed_status}
  */
  readonly failedStatus?: DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#provisioning_status DatabaseSyncedDatabaseTable#provisioning_status}
  */
  readonly provisioningStatus?: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#triggered_update_status DatabaseSyncedDatabaseTable#triggered_update_status}
  */
  readonly triggeredUpdateStatus?: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus;
}

export function databaseSyncedDatabaseTableDataSynchronizationStatusToTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continuous_update_status: databaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusToTerraform(struct!.continuousUpdateStatus),
    failed_status: databaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusToTerraform(struct!.failedStatus),
    provisioning_status: databaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusToTerraform(struct!.provisioningStatus),
    triggered_update_status: databaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusToTerraform(struct!.triggeredUpdateStatus),
  }
}


export function databaseSyncedDatabaseTableDataSynchronizationStatusToHclTerraform(struct?: DatabaseSyncedDatabaseTableDataSynchronizationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continuous_update_status: {
      value: databaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusToHclTerraform(struct!.continuousUpdateStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus",
    },
    failed_status: {
      value: databaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusToHclTerraform(struct!.failedStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus",
    },
    provisioning_status: {
      value: databaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusToHclTerraform(struct!.provisioningStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus",
    },
    triggered_update_status: {
      value: databaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusToHclTerraform(struct!.triggeredUpdateStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseSyncedDatabaseTableDataSynchronizationStatus | undefined {
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

  public set internalValue(value: DatabaseSyncedDatabaseTableDataSynchronizationStatus | undefined) {
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
  private _continuousUpdateStatus = new DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference(this, "continuous_update_status");
  public get continuousUpdateStatus() {
    return this._continuousUpdateStatus;
  }
  public putContinuousUpdateStatus(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus) {
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
  private _failedStatus = new DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference(this, "failed_status");
  public get failedStatus() {
    return this._failedStatus;
  }
  public putFailedStatus(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus) {
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
  private _lastSync = new DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference(this, "last_sync");
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
  private _provisioningStatus = new DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference(this, "provisioning_status");
  public get provisioningStatus() {
    return this._provisioningStatus;
  }
  public putProvisioningStatus(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus) {
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
  private _triggeredUpdateStatus = new DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference(this, "triggered_update_status");
  public get triggeredUpdateStatus() {
    return this._triggeredUpdateStatus;
  }
  public putTriggeredUpdateStatus(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus) {
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
export interface DatabaseSyncedDatabaseTableSpecNewPipelineSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#storage_catalog DatabaseSyncedDatabaseTable#storage_catalog}
  */
  readonly storageCatalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#storage_schema DatabaseSyncedDatabaseTable#storage_schema}
  */
  readonly storageSchema?: string;
}

export function databaseSyncedDatabaseTableSpecNewPipelineSpecToTerraform(struct?: DatabaseSyncedDatabaseTableSpecNewPipelineSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_catalog: cdktf.stringToTerraform(struct!.storageCatalog),
    storage_schema: cdktf.stringToTerraform(struct!.storageSchema),
  }
}


export function databaseSyncedDatabaseTableSpecNewPipelineSpecToHclTerraform(struct?: DatabaseSyncedDatabaseTableSpecNewPipelineSpec | cdktf.IResolvable): any {
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

export class DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseSyncedDatabaseTableSpecNewPipelineSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseSyncedDatabaseTableSpecNewPipelineSpec | cdktf.IResolvable | undefined) {
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
export interface DatabaseSyncedDatabaseTableSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#create_database_objects_if_missing DatabaseSyncedDatabaseTable#create_database_objects_if_missing}
  */
  readonly createDatabaseObjectsIfMissing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#existing_pipeline_id DatabaseSyncedDatabaseTable#existing_pipeline_id}
  */
  readonly existingPipelineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#new_pipeline_spec DatabaseSyncedDatabaseTable#new_pipeline_spec}
  */
  readonly newPipelineSpec?: DatabaseSyncedDatabaseTableSpecNewPipelineSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#primary_key_columns DatabaseSyncedDatabaseTable#primary_key_columns}
  */
  readonly primaryKeyColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#scheduling_policy DatabaseSyncedDatabaseTable#scheduling_policy}
  */
  readonly schedulingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#source_table_full_name DatabaseSyncedDatabaseTable#source_table_full_name}
  */
  readonly sourceTableFullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#timeseries_key DatabaseSyncedDatabaseTable#timeseries_key}
  */
  readonly timeseriesKey?: string;
}

export function databaseSyncedDatabaseTableSpecToTerraform(struct?: DatabaseSyncedDatabaseTableSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_database_objects_if_missing: cdktf.booleanToTerraform(struct!.createDatabaseObjectsIfMissing),
    existing_pipeline_id: cdktf.stringToTerraform(struct!.existingPipelineId),
    new_pipeline_spec: databaseSyncedDatabaseTableSpecNewPipelineSpecToTerraform(struct!.newPipelineSpec),
    primary_key_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKeyColumns),
    scheduling_policy: cdktf.stringToTerraform(struct!.schedulingPolicy),
    source_table_full_name: cdktf.stringToTerraform(struct!.sourceTableFullName),
    timeseries_key: cdktf.stringToTerraform(struct!.timeseriesKey),
  }
}


export function databaseSyncedDatabaseTableSpecToHclTerraform(struct?: DatabaseSyncedDatabaseTableSpec | cdktf.IResolvable): any {
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
      value: databaseSyncedDatabaseTableSpecNewPipelineSpecToHclTerraform(struct!.newPipelineSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabaseSyncedDatabaseTableSpecNewPipelineSpec",
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

export class DatabaseSyncedDatabaseTableSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseSyncedDatabaseTableSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseSyncedDatabaseTableSpec | cdktf.IResolvable | undefined) {
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
  private _newPipelineSpec = new DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference(this, "new_pipeline_spec");
  public get newPipelineSpec() {
    return this._newPipelineSpec;
  }
  public putNewPipelineSpec(value: DatabaseSyncedDatabaseTableSpecNewPipelineSpec) {
    this._newPipelineSpec.internalValue = value;
  }
  public resetNewPipelineSpec() {
    this._newPipelineSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPipelineSpecInput() {
    return this._newPipelineSpec.internalValue;
  }

  // primary_key_columns - computed: false, optional: true, required: false
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

  // scheduling_policy - computed: false, optional: true, required: false
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

  // source_table_full_name - computed: false, optional: true, required: false
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

  // timeseries_key - computed: false, optional: true, required: false
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table databricks_database_synced_database_table}
*/
export class DatabaseSyncedDatabaseTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_database_synced_database_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseSyncedDatabaseTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseSyncedDatabaseTable to import
  * @param importFromId The id of the existing DatabaseSyncedDatabaseTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseSyncedDatabaseTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_database_synced_database_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/database_synced_database_table databricks_database_synced_database_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseSyncedDatabaseTableConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseSyncedDatabaseTableConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_database_synced_database_table',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.87.1',
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
    this._databaseInstanceName = config.databaseInstanceName;
    this._logicalDatabaseName = config.logicalDatabaseName;
    this._name = config.name;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_synchronization_status - computed: true, optional: false, required: false
  private _dataSynchronizationStatus = new DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference(this, "data_synchronization_status");
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

  // spec - computed: false, optional: true, required: false
  private _spec = new DatabaseSyncedDatabaseTableSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DatabaseSyncedDatabaseTableSpec) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_instance_name: cdktf.stringToTerraform(this._databaseInstanceName),
      logical_database_name: cdktf.stringToTerraform(this._logicalDatabaseName),
      name: cdktf.stringToTerraform(this._name),
      spec: databaseSyncedDatabaseTableSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_instance_name: {
        value: cdktf.stringToHclTerraform(this._databaseInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_database_name: {
        value: cdktf.stringToHclTerraform(this._logicalDatabaseName),
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
      spec: {
        value: databaseSyncedDatabaseTableSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseSyncedDatabaseTableSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
