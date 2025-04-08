/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
export interface JobContinuous {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#pause_status Job#pause_status}
  */
  readonly pauseStatus?: string;
}

export function jobContinuousToTerraform(struct?: JobContinuousOutputReference | JobContinuous): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pause_status: cdktf.stringToTerraform(struct!.pauseStatus),
  }
}


export function jobContinuousToHclTerraform(struct?: JobContinuousOutputReference | JobContinuous): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobContinuousOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobContinuous | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pauseStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseStatus = this._pauseStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobContinuous | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pauseStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pauseStatus = value.pauseStatus;
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
}
export interface JobDbtTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#catalog Job#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#commands Job#commands}
  */
  readonly commands: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#profiles_directory Job#profiles_directory}
  */
  readonly profilesDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#project_directory Job#project_directory}
  */
  readonly projectDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#schema Job#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId?: string;
}

export function jobDbtTaskToTerraform(struct?: JobDbtTaskOutputReference | JobDbtTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    profiles_directory: cdktf.stringToTerraform(struct!.profilesDirectory),
    project_directory: cdktf.stringToTerraform(struct!.projectDirectory),
    schema: cdktf.stringToTerraform(struct!.schema),
    source: cdktf.stringToTerraform(struct!.source),
    warehouse_id: cdktf.stringToTerraform(struct!.warehouseId),
  }
}


export function jobDbtTaskToHclTerraform(struct?: JobDbtTaskOutputReference | JobDbtTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    profiles_directory: {
      value: cdktf.stringToHclTerraform(struct!.profilesDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_directory: {
      value: cdktf.stringToHclTerraform(struct!.projectDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
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

export class JobDbtTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobDbtTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._profilesDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilesDirectory = this._profilesDirectory;
    }
    if (this._projectDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectDirectory = this._projectDirectory;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
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

  public set internalValue(value: JobDbtTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._commands = undefined;
      this._profilesDirectory = undefined;
      this._projectDirectory = undefined;
      this._schema = undefined;
      this._source = undefined;
      this._warehouseId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._commands = value.commands;
      this._profilesDirectory = value.profilesDirectory;
      this._projectDirectory = value.projectDirectory;
      this._schema = value.schema;
      this._source = value.source;
      this._warehouseId = value.warehouseId;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // commands - computed: false, optional: false, required: true
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // profiles_directory - computed: false, optional: true, required: false
  private _profilesDirectory?: string; 
  public get profilesDirectory() {
    return this.getStringAttribute('profiles_directory');
  }
  public set profilesDirectory(value: string) {
    this._profilesDirectory = value;
  }
  public resetProfilesDirectory() {
    this._profilesDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesDirectoryInput() {
    return this._profilesDirectory;
  }

  // project_directory - computed: false, optional: true, required: false
  private _projectDirectory?: string; 
  public get projectDirectory() {
    return this.getStringAttribute('project_directory');
  }
  public set projectDirectory(value: string) {
    this._projectDirectory = value;
  }
  public resetProjectDirectory() {
    this._projectDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDirectoryInput() {
    return this._projectDirectory;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
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
export interface JobDeployment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#kind Job#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#metadata_file_path Job#metadata_file_path}
  */
  readonly metadataFilePath?: string;
}

export function jobDeploymentToTerraform(struct?: JobDeploymentOutputReference | JobDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata_file_path: cdktf.stringToTerraform(struct!.metadataFilePath),
  }
}


export function jobDeploymentToHclTerraform(struct?: JobDeploymentOutputReference | JobDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_file_path: {
      value: cdktf.stringToHclTerraform(struct!.metadataFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._metadataFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataFilePath = this._metadataFilePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._metadataFilePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._metadataFilePath = value.metadataFilePath;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // metadata_file_path - computed: false, optional: true, required: false
  private _metadataFilePath?: string; 
  public get metadataFilePath() {
    return this.getStringAttribute('metadata_file_path');
  }
  public set metadataFilePath(value: string) {
    this._metadataFilePath = value;
  }
  public resetMetadataFilePath() {
    this._metadataFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFilePathInput() {
    return this._metadataFilePath;
  }
}
export interface JobEmailNotifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#no_alert_for_skipped_runs Job#no_alert_for_skipped_runs}
  */
  readonly noAlertForSkippedRuns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_duration_warning_threshold_exceeded Job#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_failure Job#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_start Job#on_start}
  */
  readonly onStart?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_streaming_backlog_exceeded Job#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_success Job#on_success}
  */
  readonly onSuccess?: string[];
}

export function jobEmailNotificationsToTerraform(struct?: JobEmailNotificationsOutputReference | JobEmailNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_alert_for_skipped_runs: cdktf.booleanToTerraform(struct!.noAlertForSkippedRuns),
    on_duration_warning_threshold_exceeded: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onDurationWarningThresholdExceeded),
    on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onFailure),
    on_start: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onStart),
    on_streaming_backlog_exceeded: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onStreamingBacklogExceeded),
    on_success: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onSuccess),
  }
}


export function jobEmailNotificationsToHclTerraform(struct?: JobEmailNotificationsOutputReference | JobEmailNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_alert_for_skipped_runs: {
      value: cdktf.booleanToHclTerraform(struct!.noAlertForSkippedRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_duration_warning_threshold_exceeded: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onDurationWarningThresholdExceeded),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_failure: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onFailure),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_start: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onStart),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_streaming_backlog_exceeded: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onStreamingBacklogExceeded),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_success: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onSuccess),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobEmailNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobEmailNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noAlertForSkippedRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAlertForSkippedRuns = this._noAlertForSkippedRuns;
    }
    if (this._onDurationWarningThresholdExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDurationWarningThresholdExceeded = this._onDurationWarningThresholdExceeded;
    }
    if (this._onFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure;
    }
    if (this._onStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStart = this._onStart;
    }
    if (this._onStreamingBacklogExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStreamingBacklogExceeded = this._onStreamingBacklogExceeded;
    }
    if (this._onSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobEmailNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noAlertForSkippedRuns = undefined;
      this._onDurationWarningThresholdExceeded = undefined;
      this._onFailure = undefined;
      this._onStart = undefined;
      this._onStreamingBacklogExceeded = undefined;
      this._onSuccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noAlertForSkippedRuns = value.noAlertForSkippedRuns;
      this._onDurationWarningThresholdExceeded = value.onDurationWarningThresholdExceeded;
      this._onFailure = value.onFailure;
      this._onStart = value.onStart;
      this._onStreamingBacklogExceeded = value.onStreamingBacklogExceeded;
      this._onSuccess = value.onSuccess;
    }
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

  // on_duration_warning_threshold_exceeded - computed: false, optional: true, required: false
  private _onDurationWarningThresholdExceeded?: string[]; 
  public get onDurationWarningThresholdExceeded() {
    return this.getListAttribute('on_duration_warning_threshold_exceeded');
  }
  public set onDurationWarningThresholdExceeded(value: string[]) {
    this._onDurationWarningThresholdExceeded = value;
  }
  public resetOnDurationWarningThresholdExceeded() {
    this._onDurationWarningThresholdExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDurationWarningThresholdExceededInput() {
    return this._onDurationWarningThresholdExceeded;
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: string[]; 
  public get onFailure() {
    return this.getListAttribute('on_failure');
  }
  public set onFailure(value: string[]) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
  }

  // on_start - computed: false, optional: true, required: false
  private _onStart?: string[]; 
  public get onStart() {
    return this.getListAttribute('on_start');
  }
  public set onStart(value: string[]) {
    this._onStart = value;
  }
  public resetOnStart() {
    this._onStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartInput() {
    return this._onStart;
  }

  // on_streaming_backlog_exceeded - computed: false, optional: true, required: false
  private _onStreamingBacklogExceeded?: string[]; 
  public get onStreamingBacklogExceeded() {
    return this.getListAttribute('on_streaming_backlog_exceeded');
  }
  public set onStreamingBacklogExceeded(value: string[]) {
    this._onStreamingBacklogExceeded = value;
  }
  public resetOnStreamingBacklogExceeded() {
    this._onStreamingBacklogExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStreamingBacklogExceededInput() {
    return this._onStreamingBacklogExceeded;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess?: string[]; 
  public get onSuccess() {
    return this.getListAttribute('on_success');
  }
  public set onSuccess(value: string[]) {
    this._onSuccess = value;
  }
  public resetOnSuccess() {
    this._onSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess;
  }
}
export interface JobEnvironmentSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#client Job#client}
  */
  readonly client: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#dependencies Job#dependencies}
  */
  readonly dependencies?: string[];
}

export function jobEnvironmentSpecToTerraform(struct?: JobEnvironmentSpecOutputReference | JobEnvironmentSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: cdktf.stringToTerraform(struct!.client),
    dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependencies),
  }
}


export function jobEnvironmentSpecToHclTerraform(struct?: JobEnvironmentSpecOutputReference | JobEnvironmentSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: cdktf.stringToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobEnvironmentSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobEnvironmentSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._dependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobEnvironmentSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._client = undefined;
      this._dependencies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._client = value.client;
      this._dependencies = value.dependencies;
    }
  }

  // client - computed: false, optional: false, required: true
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies?: string[]; 
  public get dependencies() {
    return this.getListAttribute('dependencies');
  }
  public set dependencies(value: string[]) {
    this._dependencies = value;
  }
  public resetDependencies() {
    this._dependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies;
  }
}
export interface JobEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#environment_key Job#environment_key}
  */
  readonly environmentKey: string;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#spec Job#spec}
  */
  readonly spec?: JobEnvironmentSpec;
}

export function jobEnvironmentToTerraform(struct?: JobEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_key: cdktf.stringToTerraform(struct!.environmentKey),
    spec: jobEnvironmentSpecToTerraform(struct!.spec),
  }
}


export function jobEnvironmentToHclTerraform(struct?: JobEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_key: {
      value: cdktf.stringToHclTerraform(struct!.environmentKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec: {
      value: jobEnvironmentSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "JobEnvironmentSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentKey = this._environmentKey;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentKey = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentKey = value.environmentKey;
      this._spec.internalValue = value.spec;
    }
  }

  // environment_key - computed: false, optional: false, required: true
  private _environmentKey?: string; 
  public get environmentKey() {
    return this.getStringAttribute('environment_key');
  }
  public set environmentKey(value: string) {
    this._environmentKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentKeyInput() {
    return this._environmentKey;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new JobEnvironmentSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: JobEnvironmentSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class JobEnvironmentList extends cdktf.ComplexList {
  public internalValue? : JobEnvironment[] | cdktf.IResolvable

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
  public get(index: number): JobEnvironmentOutputReference {
    return new JobEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobGitSourceGitSnapshot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#used_commit Job#used_commit}
  */
  readonly usedCommit?: string;
}

export function jobGitSourceGitSnapshotToTerraform(struct?: JobGitSourceGitSnapshotOutputReference | JobGitSourceGitSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    used_commit: cdktf.stringToTerraform(struct!.usedCommit),
  }
}


export function jobGitSourceGitSnapshotToHclTerraform(struct?: JobGitSourceGitSnapshotOutputReference | JobGitSourceGitSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    used_commit: {
      value: cdktf.stringToHclTerraform(struct!.usedCommit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobGitSourceGitSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobGitSourceGitSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usedCommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedCommit = this._usedCommit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobGitSourceGitSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._usedCommit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._usedCommit = value.usedCommit;
    }
  }

  // used_commit - computed: false, optional: true, required: false
  private _usedCommit?: string; 
  public get usedCommit() {
    return this.getStringAttribute('used_commit');
  }
  public set usedCommit(value: string) {
    this._usedCommit = value;
  }
  public resetUsedCommit() {
    this._usedCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedCommitInput() {
    return this._usedCommit;
  }
}
export interface JobGitSourceJobSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#dirty_state Job#dirty_state}
  */
  readonly dirtyState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#import_from_git_branch Job#import_from_git_branch}
  */
  readonly importFromGitBranch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#job_config_path Job#job_config_path}
  */
  readonly jobConfigPath: string;
}

export function jobGitSourceJobSourceToTerraform(struct?: JobGitSourceJobSourceOutputReference | JobGitSourceJobSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dirty_state: cdktf.stringToTerraform(struct!.dirtyState),
    import_from_git_branch: cdktf.stringToTerraform(struct!.importFromGitBranch),
    job_config_path: cdktf.stringToTerraform(struct!.jobConfigPath),
  }
}


export function jobGitSourceJobSourceToHclTerraform(struct?: JobGitSourceJobSourceOutputReference | JobGitSourceJobSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dirty_state: {
      value: cdktf.stringToHclTerraform(struct!.dirtyState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_from_git_branch: {
      value: cdktf.stringToHclTerraform(struct!.importFromGitBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_config_path: {
      value: cdktf.stringToHclTerraform(struct!.jobConfigPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobGitSourceJobSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobGitSourceJobSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dirtyState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dirtyState = this._dirtyState;
    }
    if (this._importFromGitBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.importFromGitBranch = this._importFromGitBranch;
    }
    if (this._jobConfigPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobConfigPath = this._jobConfigPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobGitSourceJobSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dirtyState = undefined;
      this._importFromGitBranch = undefined;
      this._jobConfigPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dirtyState = value.dirtyState;
      this._importFromGitBranch = value.importFromGitBranch;
      this._jobConfigPath = value.jobConfigPath;
    }
  }

  // dirty_state - computed: false, optional: true, required: false
  private _dirtyState?: string; 
  public get dirtyState() {
    return this.getStringAttribute('dirty_state');
  }
  public set dirtyState(value: string) {
    this._dirtyState = value;
  }
  public resetDirtyState() {
    this._dirtyState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirtyStateInput() {
    return this._dirtyState;
  }

  // import_from_git_branch - computed: false, optional: false, required: true
  private _importFromGitBranch?: string; 
  public get importFromGitBranch() {
    return this.getStringAttribute('import_from_git_branch');
  }
  public set importFromGitBranch(value: string) {
    this._importFromGitBranch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importFromGitBranchInput() {
    return this._importFromGitBranch;
  }

  // job_config_path - computed: false, optional: false, required: true
  private _jobConfigPath?: string; 
  public get jobConfigPath() {
    return this.getStringAttribute('job_config_path');
  }
  public set jobConfigPath(value: string) {
    this._jobConfigPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobConfigPathInput() {
    return this._jobConfigPath;
  }
}
export interface JobGitSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#branch Job#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#commit Job#commit}
  */
  readonly commit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#provider Job#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#tag Job#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#url Job#url}
  */
  readonly url: string;
  /**
  * git_snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#git_snapshot Job#git_snapshot}
  */
  readonly gitSnapshot?: JobGitSourceGitSnapshot;
  /**
  * job_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#job_source Job#job_source}
  */
  readonly jobSource?: JobGitSourceJobSource;
}

export function jobGitSourceToTerraform(struct?: JobGitSourceOutputReference | JobGitSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    commit: cdktf.stringToTerraform(struct!.commit),
    provider: cdktf.stringToTerraform(struct!.provider),
    tag: cdktf.stringToTerraform(struct!.tag),
    url: cdktf.stringToTerraform(struct!.url),
    git_snapshot: jobGitSourceGitSnapshotToTerraform(struct!.gitSnapshot),
    job_source: jobGitSourceJobSourceToTerraform(struct!.jobSource),
  }
}


export function jobGitSourceToHclTerraform(struct?: JobGitSourceOutputReference | JobGitSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit: {
      value: cdktf.stringToHclTerraform(struct!.commit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_snapshot: {
      value: jobGitSourceGitSnapshotToHclTerraform(struct!.gitSnapshot),
      isBlock: true,
      type: "list",
      storageClassType: "JobGitSourceGitSnapshotList",
    },
    job_source: {
      value: jobGitSourceJobSourceToHclTerraform(struct!.jobSource),
      isBlock: true,
      type: "list",
      storageClassType: "JobGitSourceJobSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobGitSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobGitSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._gitSnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitSnapshot = this._gitSnapshot?.internalValue;
    }
    if (this._jobSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobSource = this._jobSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobGitSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._commit = undefined;
      this._provider = undefined;
      this._tag = undefined;
      this._url = undefined;
      this._gitSnapshot.internalValue = undefined;
      this._jobSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._commit = value.commit;
      this._provider = value.provider;
      this._tag = value.tag;
      this._url = value.url;
      this._gitSnapshot.internalValue = value.gitSnapshot;
      this._jobSource.internalValue = value.jobSource;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // commit - computed: false, optional: true, required: false
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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

  // git_snapshot - computed: false, optional: true, required: false
  private _gitSnapshot = new JobGitSourceGitSnapshotOutputReference(this, "git_snapshot");
  public get gitSnapshot() {
    return this._gitSnapshot;
  }
  public putGitSnapshot(value: JobGitSourceGitSnapshot) {
    this._gitSnapshot.internalValue = value;
  }
  public resetGitSnapshot() {
    this._gitSnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSnapshotInput() {
    return this._gitSnapshot.internalValue;
  }

  // job_source - computed: false, optional: true, required: false
  private _jobSource = new JobGitSourceJobSourceOutputReference(this, "job_source");
  public get jobSource() {
    return this._jobSource;
  }
  public putJobSource(value: JobGitSourceJobSource) {
    this._jobSource.internalValue = value;
  }
  public resetJobSource() {
    this._jobSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobSourceInput() {
    return this._jobSource.internalValue;
  }
}
export interface JobHealthRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#metric Job#metric}
  */
  readonly metric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#op Job#op}
  */
  readonly op: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#value Job#value}
  */
  readonly value: number;
}

export function jobHealthRulesToTerraform(struct?: JobHealthRules | cdktf.IResolvable): any {
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


export function jobHealthRulesToHclTerraform(struct?: JobHealthRules | cdktf.IResolvable): any {
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

export class JobHealthRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobHealthRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobHealthRules | cdktf.IResolvable | undefined) {
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

export class JobHealthRulesList extends cdktf.ComplexList {
  public internalValue? : JobHealthRules[] | cdktf.IResolvable

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
  public get(index: number): JobHealthRulesOutputReference {
    return new JobHealthRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobHealth {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#rules Job#rules}
  */
  readonly rules: JobHealthRules[] | cdktf.IResolvable;
}

export function jobHealthToTerraform(struct?: JobHealthOutputReference | JobHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(jobHealthRulesToTerraform, true)(struct!.rules),
  }
}


export function jobHealthToHclTerraform(struct?: JobHealthOutputReference | JobHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(jobHealthRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "JobHealthRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobHealth | undefined) {
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
  private _rules = new JobHealthRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: JobHealthRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface JobJobClusterNewClusterAutoscale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#max_workers Job#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#min_workers Job#min_workers}
  */
  readonly minWorkers?: number;
}

export function jobJobClusterNewClusterAutoscaleToTerraform(struct?: JobJobClusterNewClusterAutoscaleOutputReference | JobJobClusterNewClusterAutoscale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktf.numberToTerraform(struct!.maxWorkers),
    min_workers: cdktf.numberToTerraform(struct!.minWorkers),
  }
}


export function jobJobClusterNewClusterAutoscaleToHclTerraform(struct?: JobJobClusterNewClusterAutoscaleOutputReference | JobJobClusterNewClusterAutoscale): any {
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

export class JobJobClusterNewClusterAutoscaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterAutoscale | undefined {
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

  public set internalValue(value: JobJobClusterNewClusterAutoscale | undefined) {
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
export interface JobJobClusterNewClusterAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_count Job#ebs_volume_count}
  */
  readonly ebsVolumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_iops Job#ebs_volume_iops}
  */
  readonly ebsVolumeIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_size Job#ebs_volume_size}
  */
  readonly ebsVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_throughput Job#ebs_volume_throughput}
  */
  readonly ebsVolumeThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_type Job#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#instance_profile_arn Job#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#spot_bid_price_percent Job#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#zone_id Job#zone_id}
  */
  readonly zoneId?: string;
}

export function jobJobClusterNewClusterAwsAttributesToTerraform(struct?: JobJobClusterNewClusterAwsAttributesOutputReference | JobJobClusterNewClusterAwsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    ebs_volume_count: cdktf.numberToTerraform(struct!.ebsVolumeCount),
    ebs_volume_iops: cdktf.numberToTerraform(struct!.ebsVolumeIops),
    ebs_volume_size: cdktf.numberToTerraform(struct!.ebsVolumeSize),
    ebs_volume_throughput: cdktf.numberToTerraform(struct!.ebsVolumeThroughput),
    ebs_volume_type: cdktf.stringToTerraform(struct!.ebsVolumeType),
    first_on_demand: cdktf.numberToTerraform(struct!.firstOnDemand),
    instance_profile_arn: cdktf.stringToTerraform(struct!.instanceProfileArn),
    spot_bid_price_percent: cdktf.numberToTerraform(struct!.spotBidPricePercent),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function jobJobClusterNewClusterAwsAttributesToHclTerraform(struct?: JobJobClusterNewClusterAwsAttributesOutputReference | JobJobClusterNewClusterAwsAttributes): any {
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
    ebs_volume_iops: {
      value: cdktf.numberToHclTerraform(struct!.ebsVolumeIops),
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
    ebs_volume_throughput: {
      value: cdktf.numberToHclTerraform(struct!.ebsVolumeThroughput),
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

export class JobJobClusterNewClusterAwsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterAwsAttributes | undefined {
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
    if (this._ebsVolumeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeIops = this._ebsVolumeIops;
    }
    if (this._ebsVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeSize = this._ebsVolumeSize;
    }
    if (this._ebsVolumeThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeThroughput = this._ebsVolumeThroughput;
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

  public set internalValue(value: JobJobClusterNewClusterAwsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._ebsVolumeCount = undefined;
      this._ebsVolumeIops = undefined;
      this._ebsVolumeSize = undefined;
      this._ebsVolumeThroughput = undefined;
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
      this._ebsVolumeIops = value.ebsVolumeIops;
      this._ebsVolumeSize = value.ebsVolumeSize;
      this._ebsVolumeThroughput = value.ebsVolumeThroughput;
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

  // ebs_volume_iops - computed: false, optional: true, required: false
  private _ebsVolumeIops?: number; 
  public get ebsVolumeIops() {
    return this.getNumberAttribute('ebs_volume_iops');
  }
  public set ebsVolumeIops(value: number) {
    this._ebsVolumeIops = value;
  }
  public resetEbsVolumeIops() {
    this._ebsVolumeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeIopsInput() {
    return this._ebsVolumeIops;
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

  // ebs_volume_throughput - computed: false, optional: true, required: false
  private _ebsVolumeThroughput?: number; 
  public get ebsVolumeThroughput() {
    return this.getNumberAttribute('ebs_volume_throughput');
  }
  public set ebsVolumeThroughput(value: number) {
    this._ebsVolumeThroughput = value;
  }
  public resetEbsVolumeThroughput() {
    this._ebsVolumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeThroughputInput() {
    return this._ebsVolumeThroughput;
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
export interface JobJobClusterNewClusterAzureAttributesLogAnalyticsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#log_analytics_primary_key Job#log_analytics_primary_key}
  */
  readonly logAnalyticsPrimaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#log_analytics_workspace_id Job#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
}

export function jobJobClusterNewClusterAzureAttributesLogAnalyticsInfoToTerraform(struct?: JobJobClusterNewClusterAzureAttributesLogAnalyticsInfoOutputReference | JobJobClusterNewClusterAzureAttributesLogAnalyticsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_primary_key: cdktf.stringToTerraform(struct!.logAnalyticsPrimaryKey),
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}


export function jobJobClusterNewClusterAzureAttributesLogAnalyticsInfoToHclTerraform(struct?: JobJobClusterNewClusterAzureAttributesLogAnalyticsInfoOutputReference | JobJobClusterNewClusterAzureAttributesLogAnalyticsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_primary_key: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsPrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_analytics_workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobJobClusterNewClusterAzureAttributesLogAnalyticsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterAzureAttributesLogAnalyticsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsPrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsPrimaryKey = this._logAnalyticsPrimaryKey;
    }
    if (this._logAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceId = this._logAnalyticsWorkspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobClusterNewClusterAzureAttributesLogAnalyticsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalyticsPrimaryKey = undefined;
      this._logAnalyticsWorkspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalyticsPrimaryKey = value.logAnalyticsPrimaryKey;
      this._logAnalyticsWorkspaceId = value.logAnalyticsWorkspaceId;
    }
  }

  // log_analytics_primary_key - computed: false, optional: true, required: false
  private _logAnalyticsPrimaryKey?: string; 
  public get logAnalyticsPrimaryKey() {
    return this.getStringAttribute('log_analytics_primary_key');
  }
  public set logAnalyticsPrimaryKey(value: string) {
    this._logAnalyticsPrimaryKey = value;
  }
  public resetLogAnalyticsPrimaryKey() {
    this._logAnalyticsPrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsPrimaryKeyInput() {
    return this._logAnalyticsPrimaryKey;
  }

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }
}
export interface JobJobClusterNewClusterAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#spot_bid_max_price Job#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
  /**
  * log_analytics_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#log_analytics_info Job#log_analytics_info}
  */
  readonly logAnalyticsInfo?: JobJobClusterNewClusterAzureAttributesLogAnalyticsInfo;
}

export function jobJobClusterNewClusterAzureAttributesToTerraform(struct?: JobJobClusterNewClusterAzureAttributesOutputReference | JobJobClusterNewClusterAzureAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    first_on_demand: cdktf.numberToTerraform(struct!.firstOnDemand),
    spot_bid_max_price: cdktf.numberToTerraform(struct!.spotBidMaxPrice),
    log_analytics_info: jobJobClusterNewClusterAzureAttributesLogAnalyticsInfoToTerraform(struct!.logAnalyticsInfo),
  }
}


export function jobJobClusterNewClusterAzureAttributesToHclTerraform(struct?: JobJobClusterNewClusterAzureAttributesOutputReference | JobJobClusterNewClusterAzureAttributes): any {
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
    log_analytics_info: {
      value: jobJobClusterNewClusterAzureAttributesLogAnalyticsInfoToHclTerraform(struct!.logAnalyticsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterAzureAttributesLogAnalyticsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobJobClusterNewClusterAzureAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterAzureAttributes | undefined {
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
    if (this._logAnalyticsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsInfo = this._logAnalyticsInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobClusterNewClusterAzureAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._firstOnDemand = undefined;
      this._spotBidMaxPrice = undefined;
      this._logAnalyticsInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._firstOnDemand = value.firstOnDemand;
      this._spotBidMaxPrice = value.spotBidMaxPrice;
      this._logAnalyticsInfo.internalValue = value.logAnalyticsInfo;
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

  // log_analytics_info - computed: false, optional: true, required: false
  private _logAnalyticsInfo = new JobJobClusterNewClusterAzureAttributesLogAnalyticsInfoOutputReference(this, "log_analytics_info");
  public get logAnalyticsInfo() {
    return this._logAnalyticsInfo;
  }
  public putLogAnalyticsInfo(value: JobJobClusterNewClusterAzureAttributesLogAnalyticsInfo) {
    this._logAnalyticsInfo.internalValue = value;
  }
  public resetLogAnalyticsInfo() {
    this._logAnalyticsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsInfoInput() {
    return this._logAnalyticsInfo.internalValue;
  }
}
export interface JobJobClusterNewClusterClusterLogConfDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobJobClusterNewClusterClusterLogConfDbfsToTerraform(struct?: JobJobClusterNewClusterClusterLogConfDbfsOutputReference | JobJobClusterNewClusterClusterLogConfDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobJobClusterNewClusterClusterLogConfDbfsToHclTerraform(struct?: JobJobClusterNewClusterClusterLogConfDbfsOutputReference | JobJobClusterNewClusterClusterLogConfDbfs): any {
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

export class JobJobClusterNewClusterClusterLogConfDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterClusterLogConfDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobClusterNewClusterClusterLogConfDbfs | undefined) {
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
export interface JobJobClusterNewClusterClusterLogConfS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#canned_acl Job#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#enable_encryption Job#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#encryption_type Job#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#endpoint Job#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#kms_key Job#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#region Job#region}
  */
  readonly region?: string;
}

export function jobJobClusterNewClusterClusterLogConfS3ToTerraform(struct?: JobJobClusterNewClusterClusterLogConfS3OutputReference | JobJobClusterNewClusterClusterLogConfS3): any {
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


export function jobJobClusterNewClusterClusterLogConfS3ToHclTerraform(struct?: JobJobClusterNewClusterClusterLogConfS3OutputReference | JobJobClusterNewClusterClusterLogConfS3): any {
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

export class JobJobClusterNewClusterClusterLogConfS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterClusterLogConfS3 | undefined {
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

  public set internalValue(value: JobJobClusterNewClusterClusterLogConfS3 | undefined) {
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
export interface JobJobClusterNewClusterClusterLogConfVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobJobClusterNewClusterClusterLogConfVolumesToTerraform(struct?: JobJobClusterNewClusterClusterLogConfVolumesOutputReference | JobJobClusterNewClusterClusterLogConfVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobJobClusterNewClusterClusterLogConfVolumesToHclTerraform(struct?: JobJobClusterNewClusterClusterLogConfVolumesOutputReference | JobJobClusterNewClusterClusterLogConfVolumes): any {
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

export class JobJobClusterNewClusterClusterLogConfVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterClusterLogConfVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobClusterNewClusterClusterLogConfVolumes | undefined) {
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
export interface JobJobClusterNewClusterClusterLogConf {
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#dbfs Job#dbfs}
  */
  readonly dbfs?: JobJobClusterNewClusterClusterLogConfDbfs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#s3 Job#s3}
  */
  readonly s3?: JobJobClusterNewClusterClusterLogConfS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#volumes Job#volumes}
  */
  readonly volumes?: JobJobClusterNewClusterClusterLogConfVolumes;
}

export function jobJobClusterNewClusterClusterLogConfToTerraform(struct?: JobJobClusterNewClusterClusterLogConfOutputReference | JobJobClusterNewClusterClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbfs: jobJobClusterNewClusterClusterLogConfDbfsToTerraform(struct!.dbfs),
    s3: jobJobClusterNewClusterClusterLogConfS3ToTerraform(struct!.s3),
    volumes: jobJobClusterNewClusterClusterLogConfVolumesToTerraform(struct!.volumes),
  }
}


export function jobJobClusterNewClusterClusterLogConfToHclTerraform(struct?: JobJobClusterNewClusterClusterLogConfOutputReference | JobJobClusterNewClusterClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbfs: {
      value: jobJobClusterNewClusterClusterLogConfDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterClusterLogConfDbfsList",
    },
    s3: {
      value: jobJobClusterNewClusterClusterLogConfS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterClusterLogConfS3List",
    },
    volumes: {
      value: jobJobClusterNewClusterClusterLogConfVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterClusterLogConfVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobJobClusterNewClusterClusterLogConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterClusterLogConf | undefined {
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
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobClusterNewClusterClusterLogConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbfs.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbfs.internalValue = value.dbfs;
      this._s3.internalValue = value.s3;
      this._volumes.internalValue = value.volumes;
    }
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new JobJobClusterNewClusterClusterLogConfDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: JobJobClusterNewClusterClusterLogConfDbfs) {
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
  private _s3 = new JobJobClusterNewClusterClusterLogConfS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: JobJobClusterNewClusterClusterLogConfS3) {
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
  private _volumes = new JobJobClusterNewClusterClusterLogConfVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: JobJobClusterNewClusterClusterLogConfVolumes) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface JobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#mount_options Job#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#server_address Job#server_address}
  */
  readonly serverAddress: string;
}

export function jobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfoToTerraform(struct?: JobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference | JobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_options: cdktf.stringToTerraform(struct!.mountOptions),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
  }
}


export function jobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct?: JobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference | JobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfo): any {
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

export class JobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfo | undefined {
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

  public set internalValue(value: JobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfo | undefined) {
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
export interface JobJobClusterNewClusterClusterMountInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#local_mount_dir_path Job#local_mount_dir_path}
  */
  readonly localMountDirPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#remote_mount_dir_path Job#remote_mount_dir_path}
  */
  readonly remoteMountDirPath?: string;
  /**
  * network_filesystem_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#network_filesystem_info Job#network_filesystem_info}
  */
  readonly networkFilesystemInfo: JobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfo;
}

export function jobJobClusterNewClusterClusterMountInfoToTerraform(struct?: JobJobClusterNewClusterClusterMountInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_mount_dir_path: cdktf.stringToTerraform(struct!.localMountDirPath),
    remote_mount_dir_path: cdktf.stringToTerraform(struct!.remoteMountDirPath),
    network_filesystem_info: jobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfoToTerraform(struct!.networkFilesystemInfo),
  }
}


export function jobJobClusterNewClusterClusterMountInfoToHclTerraform(struct?: JobJobClusterNewClusterClusterMountInfo | cdktf.IResolvable): any {
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
      value: jobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct!.networkFilesystemInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobJobClusterNewClusterClusterMountInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobJobClusterNewClusterClusterMountInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobJobClusterNewClusterClusterMountInfo | cdktf.IResolvable | undefined) {
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
  private _networkFilesystemInfo = new JobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference(this, "network_filesystem_info");
  public get networkFilesystemInfo() {
    return this._networkFilesystemInfo;
  }
  public putNetworkFilesystemInfo(value: JobJobClusterNewClusterClusterMountInfoNetworkFilesystemInfo) {
    this._networkFilesystemInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFilesystemInfoInput() {
    return this._networkFilesystemInfo.internalValue;
  }
}

export class JobJobClusterNewClusterClusterMountInfoList extends cdktf.ComplexList {
  public internalValue? : JobJobClusterNewClusterClusterMountInfo[] | cdktf.IResolvable

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
  public get(index: number): JobJobClusterNewClusterClusterMountInfoOutputReference {
    return new JobJobClusterNewClusterClusterMountInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobJobClusterNewClusterDockerImageBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#password Job#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#username Job#username}
  */
  readonly username: string;
}

export function jobJobClusterNewClusterDockerImageBasicAuthToTerraform(struct?: JobJobClusterNewClusterDockerImageBasicAuthOutputReference | JobJobClusterNewClusterDockerImageBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function jobJobClusterNewClusterDockerImageBasicAuthToHclTerraform(struct?: JobJobClusterNewClusterDockerImageBasicAuthOutputReference | JobJobClusterNewClusterDockerImageBasicAuth): any {
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

export class JobJobClusterNewClusterDockerImageBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterDockerImageBasicAuth | undefined {
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

  public set internalValue(value: JobJobClusterNewClusterDockerImageBasicAuth | undefined) {
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
export interface JobJobClusterNewClusterDockerImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#url Job#url}
  */
  readonly url: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#basic_auth Job#basic_auth}
  */
  readonly basicAuth?: JobJobClusterNewClusterDockerImageBasicAuth;
}

export function jobJobClusterNewClusterDockerImageToTerraform(struct?: JobJobClusterNewClusterDockerImageOutputReference | JobJobClusterNewClusterDockerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    basic_auth: jobJobClusterNewClusterDockerImageBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function jobJobClusterNewClusterDockerImageToHclTerraform(struct?: JobJobClusterNewClusterDockerImageOutputReference | JobJobClusterNewClusterDockerImage): any {
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
      value: jobJobClusterNewClusterDockerImageBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterDockerImageBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobJobClusterNewClusterDockerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterDockerImage | undefined {
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

  public set internalValue(value: JobJobClusterNewClusterDockerImage | undefined) {
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
  private _basicAuth = new JobJobClusterNewClusterDockerImageBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: JobJobClusterNewClusterDockerImageBasicAuth) {
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
export interface JobJobClusterNewClusterGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#boot_disk_size Job#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#google_service_account Job#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#local_ssd_count Job#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#use_preemptible_executors Job#use_preemptible_executors}
  */
  readonly usePreemptibleExecutors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#zone_id Job#zone_id}
  */
  readonly zoneId?: string;
}

export function jobJobClusterNewClusterGcpAttributesToTerraform(struct?: JobJobClusterNewClusterGcpAttributesOutputReference | JobJobClusterNewClusterGcpAttributes): any {
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


export function jobJobClusterNewClusterGcpAttributesToHclTerraform(struct?: JobJobClusterNewClusterGcpAttributesOutputReference | JobJobClusterNewClusterGcpAttributes): any {
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

export class JobJobClusterNewClusterGcpAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterGcpAttributes | undefined {
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

  public set internalValue(value: JobJobClusterNewClusterGcpAttributes | undefined) {
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
export interface JobJobClusterNewClusterInitScriptsAbfss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobJobClusterNewClusterInitScriptsAbfssToTerraform(struct?: JobJobClusterNewClusterInitScriptsAbfssOutputReference | JobJobClusterNewClusterInitScriptsAbfss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobJobClusterNewClusterInitScriptsAbfssToHclTerraform(struct?: JobJobClusterNewClusterInitScriptsAbfssOutputReference | JobJobClusterNewClusterInitScriptsAbfss): any {
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

export class JobJobClusterNewClusterInitScriptsAbfssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterInitScriptsAbfss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobClusterNewClusterInitScriptsAbfss | undefined) {
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
export interface JobJobClusterNewClusterInitScriptsDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobJobClusterNewClusterInitScriptsDbfsToTerraform(struct?: JobJobClusterNewClusterInitScriptsDbfsOutputReference | JobJobClusterNewClusterInitScriptsDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobJobClusterNewClusterInitScriptsDbfsToHclTerraform(struct?: JobJobClusterNewClusterInitScriptsDbfsOutputReference | JobJobClusterNewClusterInitScriptsDbfs): any {
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

export class JobJobClusterNewClusterInitScriptsDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterInitScriptsDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobClusterNewClusterInitScriptsDbfs | undefined) {
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
export interface JobJobClusterNewClusterInitScriptsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobJobClusterNewClusterInitScriptsFileToTerraform(struct?: JobJobClusterNewClusterInitScriptsFileOutputReference | JobJobClusterNewClusterInitScriptsFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobJobClusterNewClusterInitScriptsFileToHclTerraform(struct?: JobJobClusterNewClusterInitScriptsFileOutputReference | JobJobClusterNewClusterInitScriptsFile): any {
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

export class JobJobClusterNewClusterInitScriptsFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterInitScriptsFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobClusterNewClusterInitScriptsFile | undefined) {
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
export interface JobJobClusterNewClusterInitScriptsGcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobJobClusterNewClusterInitScriptsGcsToTerraform(struct?: JobJobClusterNewClusterInitScriptsGcsOutputReference | JobJobClusterNewClusterInitScriptsGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobJobClusterNewClusterInitScriptsGcsToHclTerraform(struct?: JobJobClusterNewClusterInitScriptsGcsOutputReference | JobJobClusterNewClusterInitScriptsGcs): any {
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

export class JobJobClusterNewClusterInitScriptsGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterInitScriptsGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobClusterNewClusterInitScriptsGcs | undefined) {
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
export interface JobJobClusterNewClusterInitScriptsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#canned_acl Job#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#enable_encryption Job#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#encryption_type Job#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#endpoint Job#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#kms_key Job#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#region Job#region}
  */
  readonly region?: string;
}

export function jobJobClusterNewClusterInitScriptsS3ToTerraform(struct?: JobJobClusterNewClusterInitScriptsS3OutputReference | JobJobClusterNewClusterInitScriptsS3): any {
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


export function jobJobClusterNewClusterInitScriptsS3ToHclTerraform(struct?: JobJobClusterNewClusterInitScriptsS3OutputReference | JobJobClusterNewClusterInitScriptsS3): any {
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

export class JobJobClusterNewClusterInitScriptsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterInitScriptsS3 | undefined {
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

  public set internalValue(value: JobJobClusterNewClusterInitScriptsS3 | undefined) {
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
export interface JobJobClusterNewClusterInitScriptsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobJobClusterNewClusterInitScriptsVolumesToTerraform(struct?: JobJobClusterNewClusterInitScriptsVolumesOutputReference | JobJobClusterNewClusterInitScriptsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobJobClusterNewClusterInitScriptsVolumesToHclTerraform(struct?: JobJobClusterNewClusterInitScriptsVolumesOutputReference | JobJobClusterNewClusterInitScriptsVolumes): any {
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

export class JobJobClusterNewClusterInitScriptsVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterInitScriptsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobClusterNewClusterInitScriptsVolumes | undefined) {
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
export interface JobJobClusterNewClusterInitScriptsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobJobClusterNewClusterInitScriptsWorkspaceToTerraform(struct?: JobJobClusterNewClusterInitScriptsWorkspaceOutputReference | JobJobClusterNewClusterInitScriptsWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobJobClusterNewClusterInitScriptsWorkspaceToHclTerraform(struct?: JobJobClusterNewClusterInitScriptsWorkspaceOutputReference | JobJobClusterNewClusterInitScriptsWorkspace): any {
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

export class JobJobClusterNewClusterInitScriptsWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterInitScriptsWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobClusterNewClusterInitScriptsWorkspace | undefined) {
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
export interface JobJobClusterNewClusterInitScripts {
  /**
  * abfss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#abfss Job#abfss}
  */
  readonly abfss?: JobJobClusterNewClusterInitScriptsAbfss;
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#dbfs Job#dbfs}
  */
  readonly dbfs?: JobJobClusterNewClusterInitScriptsDbfs;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#file Job#file}
  */
  readonly file?: JobJobClusterNewClusterInitScriptsFile;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#gcs Job#gcs}
  */
  readonly gcs?: JobJobClusterNewClusterInitScriptsGcs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#s3 Job#s3}
  */
  readonly s3?: JobJobClusterNewClusterInitScriptsS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#volumes Job#volumes}
  */
  readonly volumes?: JobJobClusterNewClusterInitScriptsVolumes;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#workspace Job#workspace}
  */
  readonly workspace?: JobJobClusterNewClusterInitScriptsWorkspace;
}

export function jobJobClusterNewClusterInitScriptsToTerraform(struct?: JobJobClusterNewClusterInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abfss: jobJobClusterNewClusterInitScriptsAbfssToTerraform(struct!.abfss),
    dbfs: jobJobClusterNewClusterInitScriptsDbfsToTerraform(struct!.dbfs),
    file: jobJobClusterNewClusterInitScriptsFileToTerraform(struct!.file),
    gcs: jobJobClusterNewClusterInitScriptsGcsToTerraform(struct!.gcs),
    s3: jobJobClusterNewClusterInitScriptsS3ToTerraform(struct!.s3),
    volumes: jobJobClusterNewClusterInitScriptsVolumesToTerraform(struct!.volumes),
    workspace: jobJobClusterNewClusterInitScriptsWorkspaceToTerraform(struct!.workspace),
  }
}


export function jobJobClusterNewClusterInitScriptsToHclTerraform(struct?: JobJobClusterNewClusterInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abfss: {
      value: jobJobClusterNewClusterInitScriptsAbfssToHclTerraform(struct!.abfss),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterInitScriptsAbfssList",
    },
    dbfs: {
      value: jobJobClusterNewClusterInitScriptsDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterInitScriptsDbfsList",
    },
    file: {
      value: jobJobClusterNewClusterInitScriptsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterInitScriptsFileList",
    },
    gcs: {
      value: jobJobClusterNewClusterInitScriptsGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterInitScriptsGcsList",
    },
    s3: {
      value: jobJobClusterNewClusterInitScriptsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterInitScriptsS3List",
    },
    volumes: {
      value: jobJobClusterNewClusterInitScriptsVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterInitScriptsVolumesList",
    },
    workspace: {
      value: jobJobClusterNewClusterInitScriptsWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterInitScriptsWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobJobClusterNewClusterInitScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobJobClusterNewClusterInitScripts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobJobClusterNewClusterInitScripts | cdktf.IResolvable | undefined) {
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
  private _abfss = new JobJobClusterNewClusterInitScriptsAbfssOutputReference(this, "abfss");
  public get abfss() {
    return this._abfss;
  }
  public putAbfss(value: JobJobClusterNewClusterInitScriptsAbfss) {
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
  private _dbfs = new JobJobClusterNewClusterInitScriptsDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: JobJobClusterNewClusterInitScriptsDbfs) {
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
  private _file = new JobJobClusterNewClusterInitScriptsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: JobJobClusterNewClusterInitScriptsFile) {
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
  private _gcs = new JobJobClusterNewClusterInitScriptsGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: JobJobClusterNewClusterInitScriptsGcs) {
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
  private _s3 = new JobJobClusterNewClusterInitScriptsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: JobJobClusterNewClusterInitScriptsS3) {
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
  private _volumes = new JobJobClusterNewClusterInitScriptsVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: JobJobClusterNewClusterInitScriptsVolumes) {
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
  private _workspace = new JobJobClusterNewClusterInitScriptsWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: JobJobClusterNewClusterInitScriptsWorkspace) {
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

export class JobJobClusterNewClusterInitScriptsList extends cdktf.ComplexList {
  public internalValue? : JobJobClusterNewClusterInitScripts[] | cdktf.IResolvable

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
  public get(index: number): JobJobClusterNewClusterInitScriptsOutputReference {
    return new JobJobClusterNewClusterInitScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobJobClusterNewClusterLibraryCran {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobJobClusterNewClusterLibraryCranToTerraform(struct?: JobJobClusterNewClusterLibraryCranOutputReference | JobJobClusterNewClusterLibraryCran): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function jobJobClusterNewClusterLibraryCranToHclTerraform(struct?: JobJobClusterNewClusterLibraryCranOutputReference | JobJobClusterNewClusterLibraryCran): any {
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

export class JobJobClusterNewClusterLibraryCranOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterLibraryCran | undefined {
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

  public set internalValue(value: JobJobClusterNewClusterLibraryCran | undefined) {
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
export interface JobJobClusterNewClusterLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#coordinates Job#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#exclusions Job#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobJobClusterNewClusterLibraryMavenToTerraform(struct?: JobJobClusterNewClusterLibraryMavenOutputReference | JobJobClusterNewClusterLibraryMaven): any {
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


export function jobJobClusterNewClusterLibraryMavenToHclTerraform(struct?: JobJobClusterNewClusterLibraryMavenOutputReference | JobJobClusterNewClusterLibraryMaven): any {
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

export class JobJobClusterNewClusterLibraryMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterLibraryMaven | undefined {
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

  public set internalValue(value: JobJobClusterNewClusterLibraryMaven | undefined) {
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
export interface JobJobClusterNewClusterLibraryPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobJobClusterNewClusterLibraryPypiToTerraform(struct?: JobJobClusterNewClusterLibraryPypiOutputReference | JobJobClusterNewClusterLibraryPypi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function jobJobClusterNewClusterLibraryPypiToHclTerraform(struct?: JobJobClusterNewClusterLibraryPypiOutputReference | JobJobClusterNewClusterLibraryPypi): any {
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

export class JobJobClusterNewClusterLibraryPypiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterLibraryPypi | undefined {
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

  public set internalValue(value: JobJobClusterNewClusterLibraryPypi | undefined) {
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
export interface JobJobClusterNewClusterLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#egg Job#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#jar Job#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#requirements Job#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#whl Job#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#cran Job#cran}
  */
  readonly cran?: JobJobClusterNewClusterLibraryCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#maven Job#maven}
  */
  readonly maven?: JobJobClusterNewClusterLibraryMaven;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#pypi Job#pypi}
  */
  readonly pypi?: JobJobClusterNewClusterLibraryPypi;
}

export function jobJobClusterNewClusterLibraryToTerraform(struct?: JobJobClusterNewClusterLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egg: cdktf.stringToTerraform(struct!.egg),
    jar: cdktf.stringToTerraform(struct!.jar),
    requirements: cdktf.stringToTerraform(struct!.requirements),
    whl: cdktf.stringToTerraform(struct!.whl),
    cran: jobJobClusterNewClusterLibraryCranToTerraform(struct!.cran),
    maven: jobJobClusterNewClusterLibraryMavenToTerraform(struct!.maven),
    pypi: jobJobClusterNewClusterLibraryPypiToTerraform(struct!.pypi),
  }
}


export function jobJobClusterNewClusterLibraryToHclTerraform(struct?: JobJobClusterNewClusterLibrary | cdktf.IResolvable): any {
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
      value: jobJobClusterNewClusterLibraryCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterLibraryCranList",
    },
    maven: {
      value: jobJobClusterNewClusterLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterLibraryMavenList",
    },
    pypi: {
      value: jobJobClusterNewClusterLibraryPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterLibraryPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobJobClusterNewClusterLibraryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobJobClusterNewClusterLibrary | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobJobClusterNewClusterLibrary | cdktf.IResolvable | undefined) {
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
  private _cran = new JobJobClusterNewClusterLibraryCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: JobJobClusterNewClusterLibraryCran) {
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
  private _maven = new JobJobClusterNewClusterLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: JobJobClusterNewClusterLibraryMaven) {
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
  private _pypi = new JobJobClusterNewClusterLibraryPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: JobJobClusterNewClusterLibraryPypi) {
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

export class JobJobClusterNewClusterLibraryList extends cdktf.ComplexList {
  public internalValue? : JobJobClusterNewClusterLibrary[] | cdktf.IResolvable

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
  public get(index: number): JobJobClusterNewClusterLibraryOutputReference {
    return new JobJobClusterNewClusterLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobJobClusterNewClusterWorkloadTypeClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#jobs Job#jobs}
  */
  readonly jobs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#notebooks Job#notebooks}
  */
  readonly notebooks?: boolean | cdktf.IResolvable;
}

export function jobJobClusterNewClusterWorkloadTypeClientsToTerraform(struct?: JobJobClusterNewClusterWorkloadTypeClientsOutputReference | JobJobClusterNewClusterWorkloadTypeClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jobs: cdktf.booleanToTerraform(struct!.jobs),
    notebooks: cdktf.booleanToTerraform(struct!.notebooks),
  }
}


export function jobJobClusterNewClusterWorkloadTypeClientsToHclTerraform(struct?: JobJobClusterNewClusterWorkloadTypeClientsOutputReference | JobJobClusterNewClusterWorkloadTypeClients): any {
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

export class JobJobClusterNewClusterWorkloadTypeClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterWorkloadTypeClients | undefined {
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

  public set internalValue(value: JobJobClusterNewClusterWorkloadTypeClients | undefined) {
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
export interface JobJobClusterNewClusterWorkloadType {
  /**
  * clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#clients Job#clients}
  */
  readonly clients: JobJobClusterNewClusterWorkloadTypeClients;
}

export function jobJobClusterNewClusterWorkloadTypeToTerraform(struct?: JobJobClusterNewClusterWorkloadTypeOutputReference | JobJobClusterNewClusterWorkloadType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients: jobJobClusterNewClusterWorkloadTypeClientsToTerraform(struct!.clients),
  }
}


export function jobJobClusterNewClusterWorkloadTypeToHclTerraform(struct?: JobJobClusterNewClusterWorkloadTypeOutputReference | JobJobClusterNewClusterWorkloadType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clients: {
      value: jobJobClusterNewClusterWorkloadTypeClientsToHclTerraform(struct!.clients),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterWorkloadTypeClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobJobClusterNewClusterWorkloadTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewClusterWorkloadType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobClusterNewClusterWorkloadType | undefined) {
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
  private _clients = new JobJobClusterNewClusterWorkloadTypeClientsOutputReference(this, "clients");
  public get clients() {
    return this._clients;
  }
  public putClients(value: JobJobClusterNewClusterWorkloadTypeClients) {
    this._clients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients.internalValue;
  }
}
export interface JobJobClusterNewCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#apply_policy_default_values Job#apply_policy_default_values}
  */
  readonly applyPolicyDefaultValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#cluster_id Job#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#cluster_name Job#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#custom_tags Job#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#data_security_mode Job#data_security_mode}
  */
  readonly dataSecurityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#driver_instance_pool_id Job#driver_instance_pool_id}
  */
  readonly driverInstancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#driver_node_type_id Job#driver_node_type_id}
  */
  readonly driverNodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#enable_elastic_disk Job#enable_elastic_disk}
  */
  readonly enableElasticDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#enable_local_disk_encryption Job#enable_local_disk_encryption}
  */
  readonly enableLocalDiskEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#idempotency_token Job#idempotency_token}
  */
  readonly idempotencyToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#instance_pool_id Job#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#is_single_node Job#is_single_node}
  */
  readonly isSingleNode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#kind Job#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#node_type_id Job#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#num_workers Job#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#policy_id Job#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#runtime_engine Job#runtime_engine}
  */
  readonly runtimeEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#single_user_name Job#single_user_name}
  */
  readonly singleUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#spark_conf Job#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#spark_env_vars Job#spark_env_vars}
  */
  readonly sparkEnvVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#spark_version Job#spark_version}
  */
  readonly sparkVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ssh_public_keys Job#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#use_ml_runtime Job#use_ml_runtime}
  */
  readonly useMlRuntime?: boolean | cdktf.IResolvable;
  /**
  * autoscale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#autoscale Job#autoscale}
  */
  readonly autoscale?: JobJobClusterNewClusterAutoscale;
  /**
  * aws_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#aws_attributes Job#aws_attributes}
  */
  readonly awsAttributes?: JobJobClusterNewClusterAwsAttributes;
  /**
  * azure_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#azure_attributes Job#azure_attributes}
  */
  readonly azureAttributes?: JobJobClusterNewClusterAzureAttributes;
  /**
  * cluster_log_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#cluster_log_conf Job#cluster_log_conf}
  */
  readonly clusterLogConf?: JobJobClusterNewClusterClusterLogConf;
  /**
  * cluster_mount_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#cluster_mount_info Job#cluster_mount_info}
  */
  readonly clusterMountInfo?: JobJobClusterNewClusterClusterMountInfo[] | cdktf.IResolvable;
  /**
  * docker_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#docker_image Job#docker_image}
  */
  readonly dockerImage?: JobJobClusterNewClusterDockerImage;
  /**
  * gcp_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#gcp_attributes Job#gcp_attributes}
  */
  readonly gcpAttributes?: JobJobClusterNewClusterGcpAttributes;
  /**
  * init_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#init_scripts Job#init_scripts}
  */
  readonly initScripts?: JobJobClusterNewClusterInitScripts[] | cdktf.IResolvable;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#library Job#library}
  */
  readonly library?: JobJobClusterNewClusterLibrary[] | cdktf.IResolvable;
  /**
  * workload_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#workload_type Job#workload_type}
  */
  readonly workloadType?: JobJobClusterNewClusterWorkloadType;
}

export function jobJobClusterNewClusterToTerraform(struct?: JobJobClusterNewClusterOutputReference | JobJobClusterNewCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_policy_default_values: cdktf.booleanToTerraform(struct!.applyPolicyDefaultValues),
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
    is_single_node: cdktf.booleanToTerraform(struct!.isSingleNode),
    kind: cdktf.stringToTerraform(struct!.kind),
    node_type_id: cdktf.stringToTerraform(struct!.nodeTypeId),
    num_workers: cdktf.numberToTerraform(struct!.numWorkers),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    runtime_engine: cdktf.stringToTerraform(struct!.runtimeEngine),
    single_user_name: cdktf.stringToTerraform(struct!.singleUserName),
    spark_conf: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkConf),
    spark_env_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkEnvVars),
    spark_version: cdktf.stringToTerraform(struct!.sparkVersion),
    ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshPublicKeys),
    use_ml_runtime: cdktf.booleanToTerraform(struct!.useMlRuntime),
    autoscale: jobJobClusterNewClusterAutoscaleToTerraform(struct!.autoscale),
    aws_attributes: jobJobClusterNewClusterAwsAttributesToTerraform(struct!.awsAttributes),
    azure_attributes: jobJobClusterNewClusterAzureAttributesToTerraform(struct!.azureAttributes),
    cluster_log_conf: jobJobClusterNewClusterClusterLogConfToTerraform(struct!.clusterLogConf),
    cluster_mount_info: cdktf.listMapper(jobJobClusterNewClusterClusterMountInfoToTerraform, true)(struct!.clusterMountInfo),
    docker_image: jobJobClusterNewClusterDockerImageToTerraform(struct!.dockerImage),
    gcp_attributes: jobJobClusterNewClusterGcpAttributesToTerraform(struct!.gcpAttributes),
    init_scripts: cdktf.listMapper(jobJobClusterNewClusterInitScriptsToTerraform, true)(struct!.initScripts),
    library: cdktf.listMapper(jobJobClusterNewClusterLibraryToTerraform, true)(struct!.library),
    workload_type: jobJobClusterNewClusterWorkloadTypeToTerraform(struct!.workloadType),
  }
}


export function jobJobClusterNewClusterToHclTerraform(struct?: JobJobClusterNewClusterOutputReference | JobJobClusterNewCluster): any {
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
    is_single_node: {
      value: cdktf.booleanToHclTerraform(struct!.isSingleNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    use_ml_runtime: {
      value: cdktf.booleanToHclTerraform(struct!.useMlRuntime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoscale: {
      value: jobJobClusterNewClusterAutoscaleToHclTerraform(struct!.autoscale),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterAutoscaleList",
    },
    aws_attributes: {
      value: jobJobClusterNewClusterAwsAttributesToHclTerraform(struct!.awsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterAwsAttributesList",
    },
    azure_attributes: {
      value: jobJobClusterNewClusterAzureAttributesToHclTerraform(struct!.azureAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterAzureAttributesList",
    },
    cluster_log_conf: {
      value: jobJobClusterNewClusterClusterLogConfToHclTerraform(struct!.clusterLogConf),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterClusterLogConfList",
    },
    cluster_mount_info: {
      value: cdktf.listMapperHcl(jobJobClusterNewClusterClusterMountInfoToHclTerraform, true)(struct!.clusterMountInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterClusterMountInfoList",
    },
    docker_image: {
      value: jobJobClusterNewClusterDockerImageToHclTerraform(struct!.dockerImage),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterDockerImageList",
    },
    gcp_attributes: {
      value: jobJobClusterNewClusterGcpAttributesToHclTerraform(struct!.gcpAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterGcpAttributesList",
    },
    init_scripts: {
      value: cdktf.listMapperHcl(jobJobClusterNewClusterInitScriptsToHclTerraform, true)(struct!.initScripts),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterInitScriptsList",
    },
    library: {
      value: cdktf.listMapperHcl(jobJobClusterNewClusterLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "set",
      storageClassType: "JobJobClusterNewClusterLibraryList",
    },
    workload_type: {
      value: jobJobClusterNewClusterWorkloadTypeToHclTerraform(struct!.workloadType),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterWorkloadTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobJobClusterNewClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobJobClusterNewCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyPolicyDefaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyDefaultValues = this._applyPolicyDefaultValues;
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
    if (this._isSingleNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSingleNode = this._isSingleNode;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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
    if (this._useMlRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMlRuntime = this._useMlRuntime;
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
    if (this._library?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.library = this._library?.internalValue;
    }
    if (this._workloadType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadType = this._workloadType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobClusterNewCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyPolicyDefaultValues = undefined;
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
      this._isSingleNode = undefined;
      this._kind = undefined;
      this._nodeTypeId = undefined;
      this._numWorkers = undefined;
      this._policyId = undefined;
      this._runtimeEngine = undefined;
      this._singleUserName = undefined;
      this._sparkConf = undefined;
      this._sparkEnvVars = undefined;
      this._sparkVersion = undefined;
      this._sshPublicKeys = undefined;
      this._useMlRuntime = undefined;
      this._autoscale.internalValue = undefined;
      this._awsAttributes.internalValue = undefined;
      this._azureAttributes.internalValue = undefined;
      this._clusterLogConf.internalValue = undefined;
      this._clusterMountInfo.internalValue = undefined;
      this._dockerImage.internalValue = undefined;
      this._gcpAttributes.internalValue = undefined;
      this._initScripts.internalValue = undefined;
      this._library.internalValue = undefined;
      this._workloadType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyPolicyDefaultValues = value.applyPolicyDefaultValues;
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
      this._isSingleNode = value.isSingleNode;
      this._kind = value.kind;
      this._nodeTypeId = value.nodeTypeId;
      this._numWorkers = value.numWorkers;
      this._policyId = value.policyId;
      this._runtimeEngine = value.runtimeEngine;
      this._singleUserName = value.singleUserName;
      this._sparkConf = value.sparkConf;
      this._sparkEnvVars = value.sparkEnvVars;
      this._sparkVersion = value.sparkVersion;
      this._sshPublicKeys = value.sshPublicKeys;
      this._useMlRuntime = value.useMlRuntime;
      this._autoscale.internalValue = value.autoscale;
      this._awsAttributes.internalValue = value.awsAttributes;
      this._azureAttributes.internalValue = value.azureAttributes;
      this._clusterLogConf.internalValue = value.clusterLogConf;
      this._clusterMountInfo.internalValue = value.clusterMountInfo;
      this._dockerImage.internalValue = value.dockerImage;
      this._gcpAttributes.internalValue = value.gcpAttributes;
      this._initScripts.internalValue = value.initScripts;
      this._library.internalValue = value.library;
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

  // is_single_node - computed: false, optional: true, required: false
  private _isSingleNode?: boolean | cdktf.IResolvable; 
  public get isSingleNode() {
    return this.getBooleanAttribute('is_single_node');
  }
  public set isSingleNode(value: boolean | cdktf.IResolvable) {
    this._isSingleNode = value;
  }
  public resetIsSingleNode() {
    this._isSingleNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSingleNodeInput() {
    return this._isSingleNode;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // num_workers - computed: false, optional: true, required: false
  private _numWorkers?: number; 
  public get numWorkers() {
    return this.getNumberAttribute('num_workers');
  }
  public set numWorkers(value: number) {
    this._numWorkers = value;
  }
  public resetNumWorkers() {
    this._numWorkers = undefined;
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

  // use_ml_runtime - computed: false, optional: true, required: false
  private _useMlRuntime?: boolean | cdktf.IResolvable; 
  public get useMlRuntime() {
    return this.getBooleanAttribute('use_ml_runtime');
  }
  public set useMlRuntime(value: boolean | cdktf.IResolvable) {
    this._useMlRuntime = value;
  }
  public resetUseMlRuntime() {
    this._useMlRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMlRuntimeInput() {
    return this._useMlRuntime;
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale = new JobJobClusterNewClusterAutoscaleOutputReference(this, "autoscale");
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: JobJobClusterNewClusterAutoscale) {
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
  private _awsAttributes = new JobJobClusterNewClusterAwsAttributesOutputReference(this, "aws_attributes");
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: JobJobClusterNewClusterAwsAttributes) {
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
  private _azureAttributes = new JobJobClusterNewClusterAzureAttributesOutputReference(this, "azure_attributes");
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: JobJobClusterNewClusterAzureAttributes) {
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
  private _clusterLogConf = new JobJobClusterNewClusterClusterLogConfOutputReference(this, "cluster_log_conf");
  public get clusterLogConf() {
    return this._clusterLogConf;
  }
  public putClusterLogConf(value: JobJobClusterNewClusterClusterLogConf) {
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
  private _clusterMountInfo = new JobJobClusterNewClusterClusterMountInfoList(this, "cluster_mount_info", false);
  public get clusterMountInfo() {
    return this._clusterMountInfo;
  }
  public putClusterMountInfo(value: JobJobClusterNewClusterClusterMountInfo[] | cdktf.IResolvable) {
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
  private _dockerImage = new JobJobClusterNewClusterDockerImageOutputReference(this, "docker_image");
  public get dockerImage() {
    return this._dockerImage;
  }
  public putDockerImage(value: JobJobClusterNewClusterDockerImage) {
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
  private _gcpAttributes = new JobJobClusterNewClusterGcpAttributesOutputReference(this, "gcp_attributes");
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: JobJobClusterNewClusterGcpAttributes) {
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
  private _initScripts = new JobJobClusterNewClusterInitScriptsList(this, "init_scripts", false);
  public get initScripts() {
    return this._initScripts;
  }
  public putInitScripts(value: JobJobClusterNewClusterInitScripts[] | cdktf.IResolvable) {
    this._initScripts.internalValue = value;
  }
  public resetInitScripts() {
    this._initScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptsInput() {
    return this._initScripts.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new JobJobClusterNewClusterLibraryList(this, "library", true);
  public get library() {
    return this._library;
  }
  public putLibrary(value: JobJobClusterNewClusterLibrary[] | cdktf.IResolvable) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }

  // workload_type - computed: false, optional: true, required: false
  private _workloadType = new JobJobClusterNewClusterWorkloadTypeOutputReference(this, "workload_type");
  public get workloadType() {
    return this._workloadType;
  }
  public putWorkloadType(value: JobJobClusterNewClusterWorkloadType) {
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
export interface JobJobCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#job_cluster_key Job#job_cluster_key}
  */
  readonly jobClusterKey: string;
  /**
  * new_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#new_cluster Job#new_cluster}
  */
  readonly newCluster: JobJobClusterNewCluster;
}

export function jobJobClusterToTerraform(struct?: JobJobCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_cluster_key: cdktf.stringToTerraform(struct!.jobClusterKey),
    new_cluster: jobJobClusterNewClusterToTerraform(struct!.newCluster),
  }
}


export function jobJobClusterToHclTerraform(struct?: JobJobCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_cluster_key: {
      value: cdktf.stringToHclTerraform(struct!.jobClusterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_cluster: {
      value: jobJobClusterNewClusterToHclTerraform(struct!.newCluster),
      isBlock: true,
      type: "list",
      storageClassType: "JobJobClusterNewClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobJobClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobJobCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobClusterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobClusterKey = this._jobClusterKey;
    }
    if (this._newCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newCluster = this._newCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobClusterKey = undefined;
      this._newCluster.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobClusterKey = value.jobClusterKey;
      this._newCluster.internalValue = value.newCluster;
    }
  }

  // job_cluster_key - computed: false, optional: false, required: true
  private _jobClusterKey?: string; 
  public get jobClusterKey() {
    return this.getStringAttribute('job_cluster_key');
  }
  public set jobClusterKey(value: string) {
    this._jobClusterKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobClusterKeyInput() {
    return this._jobClusterKey;
  }

  // new_cluster - computed: false, optional: false, required: true
  private _newCluster = new JobJobClusterNewClusterOutputReference(this, "new_cluster");
  public get newCluster() {
    return this._newCluster;
  }
  public putNewCluster(value: JobJobClusterNewCluster) {
    this._newCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newClusterInput() {
    return this._newCluster.internalValue;
  }
}

export class JobJobClusterList extends cdktf.ComplexList {
  public internalValue? : JobJobCluster[] | cdktf.IResolvable

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
  public get(index: number): JobJobClusterOutputReference {
    return new JobJobClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobLibraryCran {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobLibraryCranToTerraform(struct?: JobLibraryCranOutputReference | JobLibraryCran): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function jobLibraryCranToHclTerraform(struct?: JobLibraryCranOutputReference | JobLibraryCran): any {
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

export class JobLibraryCranOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobLibraryCran | undefined {
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

  public set internalValue(value: JobLibraryCran | undefined) {
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
export interface JobLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#coordinates Job#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#exclusions Job#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobLibraryMavenToTerraform(struct?: JobLibraryMavenOutputReference | JobLibraryMaven): any {
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


export function jobLibraryMavenToHclTerraform(struct?: JobLibraryMavenOutputReference | JobLibraryMaven): any {
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

export class JobLibraryMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobLibraryMaven | undefined {
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

  public set internalValue(value: JobLibraryMaven | undefined) {
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
export interface JobLibraryPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobLibraryPypiToTerraform(struct?: JobLibraryPypiOutputReference | JobLibraryPypi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function jobLibraryPypiToHclTerraform(struct?: JobLibraryPypiOutputReference | JobLibraryPypi): any {
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

export class JobLibraryPypiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobLibraryPypi | undefined {
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

  public set internalValue(value: JobLibraryPypi | undefined) {
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
export interface JobLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#egg Job#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#jar Job#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#requirements Job#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#whl Job#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#cran Job#cran}
  */
  readonly cran?: JobLibraryCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#maven Job#maven}
  */
  readonly maven?: JobLibraryMaven;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#pypi Job#pypi}
  */
  readonly pypi?: JobLibraryPypi;
}

export function jobLibraryToTerraform(struct?: JobLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egg: cdktf.stringToTerraform(struct!.egg),
    jar: cdktf.stringToTerraform(struct!.jar),
    requirements: cdktf.stringToTerraform(struct!.requirements),
    whl: cdktf.stringToTerraform(struct!.whl),
    cran: jobLibraryCranToTerraform(struct!.cran),
    maven: jobLibraryMavenToTerraform(struct!.maven),
    pypi: jobLibraryPypiToTerraform(struct!.pypi),
  }
}


export function jobLibraryToHclTerraform(struct?: JobLibrary | cdktf.IResolvable): any {
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
      value: jobLibraryCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "JobLibraryCranList",
    },
    maven: {
      value: jobLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "JobLibraryMavenList",
    },
    pypi: {
      value: jobLibraryPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "JobLibraryPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobLibraryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobLibrary | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobLibrary | cdktf.IResolvable | undefined) {
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
  private _cran = new JobLibraryCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: JobLibraryCran) {
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
  private _maven = new JobLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: JobLibraryMaven) {
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
  private _pypi = new JobLibraryPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: JobLibraryPypi) {
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

export class JobLibraryList extends cdktf.ComplexList {
  public internalValue? : JobLibrary[] | cdktf.IResolvable

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
  public get(index: number): JobLibraryOutputReference {
    return new JobLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobNewClusterAutoscale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#max_workers Job#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#min_workers Job#min_workers}
  */
  readonly minWorkers?: number;
}

export function jobNewClusterAutoscaleToTerraform(struct?: JobNewClusterAutoscaleOutputReference | JobNewClusterAutoscale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktf.numberToTerraform(struct!.maxWorkers),
    min_workers: cdktf.numberToTerraform(struct!.minWorkers),
  }
}


export function jobNewClusterAutoscaleToHclTerraform(struct?: JobNewClusterAutoscaleOutputReference | JobNewClusterAutoscale): any {
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

export class JobNewClusterAutoscaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterAutoscale | undefined {
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

  public set internalValue(value: JobNewClusterAutoscale | undefined) {
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
export interface JobNewClusterAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_count Job#ebs_volume_count}
  */
  readonly ebsVolumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_iops Job#ebs_volume_iops}
  */
  readonly ebsVolumeIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_size Job#ebs_volume_size}
  */
  readonly ebsVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_throughput Job#ebs_volume_throughput}
  */
  readonly ebsVolumeThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_type Job#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#instance_profile_arn Job#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#spot_bid_price_percent Job#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#zone_id Job#zone_id}
  */
  readonly zoneId?: string;
}

export function jobNewClusterAwsAttributesToTerraform(struct?: JobNewClusterAwsAttributesOutputReference | JobNewClusterAwsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    ebs_volume_count: cdktf.numberToTerraform(struct!.ebsVolumeCount),
    ebs_volume_iops: cdktf.numberToTerraform(struct!.ebsVolumeIops),
    ebs_volume_size: cdktf.numberToTerraform(struct!.ebsVolumeSize),
    ebs_volume_throughput: cdktf.numberToTerraform(struct!.ebsVolumeThroughput),
    ebs_volume_type: cdktf.stringToTerraform(struct!.ebsVolumeType),
    first_on_demand: cdktf.numberToTerraform(struct!.firstOnDemand),
    instance_profile_arn: cdktf.stringToTerraform(struct!.instanceProfileArn),
    spot_bid_price_percent: cdktf.numberToTerraform(struct!.spotBidPricePercent),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function jobNewClusterAwsAttributesToHclTerraform(struct?: JobNewClusterAwsAttributesOutputReference | JobNewClusterAwsAttributes): any {
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
    ebs_volume_iops: {
      value: cdktf.numberToHclTerraform(struct!.ebsVolumeIops),
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
    ebs_volume_throughput: {
      value: cdktf.numberToHclTerraform(struct!.ebsVolumeThroughput),
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

export class JobNewClusterAwsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterAwsAttributes | undefined {
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
    if (this._ebsVolumeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeIops = this._ebsVolumeIops;
    }
    if (this._ebsVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeSize = this._ebsVolumeSize;
    }
    if (this._ebsVolumeThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeThroughput = this._ebsVolumeThroughput;
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

  public set internalValue(value: JobNewClusterAwsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._ebsVolumeCount = undefined;
      this._ebsVolumeIops = undefined;
      this._ebsVolumeSize = undefined;
      this._ebsVolumeThroughput = undefined;
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
      this._ebsVolumeIops = value.ebsVolumeIops;
      this._ebsVolumeSize = value.ebsVolumeSize;
      this._ebsVolumeThroughput = value.ebsVolumeThroughput;
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

  // ebs_volume_iops - computed: false, optional: true, required: false
  private _ebsVolumeIops?: number; 
  public get ebsVolumeIops() {
    return this.getNumberAttribute('ebs_volume_iops');
  }
  public set ebsVolumeIops(value: number) {
    this._ebsVolumeIops = value;
  }
  public resetEbsVolumeIops() {
    this._ebsVolumeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeIopsInput() {
    return this._ebsVolumeIops;
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

  // ebs_volume_throughput - computed: false, optional: true, required: false
  private _ebsVolumeThroughput?: number; 
  public get ebsVolumeThroughput() {
    return this.getNumberAttribute('ebs_volume_throughput');
  }
  public set ebsVolumeThroughput(value: number) {
    this._ebsVolumeThroughput = value;
  }
  public resetEbsVolumeThroughput() {
    this._ebsVolumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeThroughputInput() {
    return this._ebsVolumeThroughput;
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
export interface JobNewClusterAzureAttributesLogAnalyticsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#log_analytics_primary_key Job#log_analytics_primary_key}
  */
  readonly logAnalyticsPrimaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#log_analytics_workspace_id Job#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
}

export function jobNewClusterAzureAttributesLogAnalyticsInfoToTerraform(struct?: JobNewClusterAzureAttributesLogAnalyticsInfoOutputReference | JobNewClusterAzureAttributesLogAnalyticsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_primary_key: cdktf.stringToTerraform(struct!.logAnalyticsPrimaryKey),
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}


export function jobNewClusterAzureAttributesLogAnalyticsInfoToHclTerraform(struct?: JobNewClusterAzureAttributesLogAnalyticsInfoOutputReference | JobNewClusterAzureAttributesLogAnalyticsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_primary_key: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsPrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_analytics_workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobNewClusterAzureAttributesLogAnalyticsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterAzureAttributesLogAnalyticsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsPrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsPrimaryKey = this._logAnalyticsPrimaryKey;
    }
    if (this._logAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceId = this._logAnalyticsWorkspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNewClusterAzureAttributesLogAnalyticsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalyticsPrimaryKey = undefined;
      this._logAnalyticsWorkspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalyticsPrimaryKey = value.logAnalyticsPrimaryKey;
      this._logAnalyticsWorkspaceId = value.logAnalyticsWorkspaceId;
    }
  }

  // log_analytics_primary_key - computed: false, optional: true, required: false
  private _logAnalyticsPrimaryKey?: string; 
  public get logAnalyticsPrimaryKey() {
    return this.getStringAttribute('log_analytics_primary_key');
  }
  public set logAnalyticsPrimaryKey(value: string) {
    this._logAnalyticsPrimaryKey = value;
  }
  public resetLogAnalyticsPrimaryKey() {
    this._logAnalyticsPrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsPrimaryKeyInput() {
    return this._logAnalyticsPrimaryKey;
  }

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }
}
export interface JobNewClusterAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#spot_bid_max_price Job#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
  /**
  * log_analytics_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#log_analytics_info Job#log_analytics_info}
  */
  readonly logAnalyticsInfo?: JobNewClusterAzureAttributesLogAnalyticsInfo;
}

export function jobNewClusterAzureAttributesToTerraform(struct?: JobNewClusterAzureAttributesOutputReference | JobNewClusterAzureAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    first_on_demand: cdktf.numberToTerraform(struct!.firstOnDemand),
    spot_bid_max_price: cdktf.numberToTerraform(struct!.spotBidMaxPrice),
    log_analytics_info: jobNewClusterAzureAttributesLogAnalyticsInfoToTerraform(struct!.logAnalyticsInfo),
  }
}


export function jobNewClusterAzureAttributesToHclTerraform(struct?: JobNewClusterAzureAttributesOutputReference | JobNewClusterAzureAttributes): any {
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
    log_analytics_info: {
      value: jobNewClusterAzureAttributesLogAnalyticsInfoToHclTerraform(struct!.logAnalyticsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterAzureAttributesLogAnalyticsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobNewClusterAzureAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterAzureAttributes | undefined {
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
    if (this._logAnalyticsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsInfo = this._logAnalyticsInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNewClusterAzureAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._firstOnDemand = undefined;
      this._spotBidMaxPrice = undefined;
      this._logAnalyticsInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._firstOnDemand = value.firstOnDemand;
      this._spotBidMaxPrice = value.spotBidMaxPrice;
      this._logAnalyticsInfo.internalValue = value.logAnalyticsInfo;
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

  // log_analytics_info - computed: false, optional: true, required: false
  private _logAnalyticsInfo = new JobNewClusterAzureAttributesLogAnalyticsInfoOutputReference(this, "log_analytics_info");
  public get logAnalyticsInfo() {
    return this._logAnalyticsInfo;
  }
  public putLogAnalyticsInfo(value: JobNewClusterAzureAttributesLogAnalyticsInfo) {
    this._logAnalyticsInfo.internalValue = value;
  }
  public resetLogAnalyticsInfo() {
    this._logAnalyticsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsInfoInput() {
    return this._logAnalyticsInfo.internalValue;
  }
}
export interface JobNewClusterClusterLogConfDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobNewClusterClusterLogConfDbfsToTerraform(struct?: JobNewClusterClusterLogConfDbfsOutputReference | JobNewClusterClusterLogConfDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobNewClusterClusterLogConfDbfsToHclTerraform(struct?: JobNewClusterClusterLogConfDbfsOutputReference | JobNewClusterClusterLogConfDbfs): any {
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

export class JobNewClusterClusterLogConfDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterClusterLogConfDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNewClusterClusterLogConfDbfs | undefined) {
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
export interface JobNewClusterClusterLogConfS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#canned_acl Job#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#enable_encryption Job#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#encryption_type Job#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#endpoint Job#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#kms_key Job#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#region Job#region}
  */
  readonly region?: string;
}

export function jobNewClusterClusterLogConfS3ToTerraform(struct?: JobNewClusterClusterLogConfS3OutputReference | JobNewClusterClusterLogConfS3): any {
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


export function jobNewClusterClusterLogConfS3ToHclTerraform(struct?: JobNewClusterClusterLogConfS3OutputReference | JobNewClusterClusterLogConfS3): any {
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

export class JobNewClusterClusterLogConfS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterClusterLogConfS3 | undefined {
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

  public set internalValue(value: JobNewClusterClusterLogConfS3 | undefined) {
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
export interface JobNewClusterClusterLogConfVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobNewClusterClusterLogConfVolumesToTerraform(struct?: JobNewClusterClusterLogConfVolumesOutputReference | JobNewClusterClusterLogConfVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobNewClusterClusterLogConfVolumesToHclTerraform(struct?: JobNewClusterClusterLogConfVolumesOutputReference | JobNewClusterClusterLogConfVolumes): any {
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

export class JobNewClusterClusterLogConfVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterClusterLogConfVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNewClusterClusterLogConfVolumes | undefined) {
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
export interface JobNewClusterClusterLogConf {
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#dbfs Job#dbfs}
  */
  readonly dbfs?: JobNewClusterClusterLogConfDbfs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#s3 Job#s3}
  */
  readonly s3?: JobNewClusterClusterLogConfS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#volumes Job#volumes}
  */
  readonly volumes?: JobNewClusterClusterLogConfVolumes;
}

export function jobNewClusterClusterLogConfToTerraform(struct?: JobNewClusterClusterLogConfOutputReference | JobNewClusterClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbfs: jobNewClusterClusterLogConfDbfsToTerraform(struct!.dbfs),
    s3: jobNewClusterClusterLogConfS3ToTerraform(struct!.s3),
    volumes: jobNewClusterClusterLogConfVolumesToTerraform(struct!.volumes),
  }
}


export function jobNewClusterClusterLogConfToHclTerraform(struct?: JobNewClusterClusterLogConfOutputReference | JobNewClusterClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbfs: {
      value: jobNewClusterClusterLogConfDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterClusterLogConfDbfsList",
    },
    s3: {
      value: jobNewClusterClusterLogConfS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterClusterLogConfS3List",
    },
    volumes: {
      value: jobNewClusterClusterLogConfVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterClusterLogConfVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobNewClusterClusterLogConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterClusterLogConf | undefined {
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
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNewClusterClusterLogConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbfs.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbfs.internalValue = value.dbfs;
      this._s3.internalValue = value.s3;
      this._volumes.internalValue = value.volumes;
    }
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new JobNewClusterClusterLogConfDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: JobNewClusterClusterLogConfDbfs) {
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
  private _s3 = new JobNewClusterClusterLogConfS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: JobNewClusterClusterLogConfS3) {
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
  private _volumes = new JobNewClusterClusterLogConfVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: JobNewClusterClusterLogConfVolumes) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface JobNewClusterClusterMountInfoNetworkFilesystemInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#mount_options Job#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#server_address Job#server_address}
  */
  readonly serverAddress: string;
}

export function jobNewClusterClusterMountInfoNetworkFilesystemInfoToTerraform(struct?: JobNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference | JobNewClusterClusterMountInfoNetworkFilesystemInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_options: cdktf.stringToTerraform(struct!.mountOptions),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
  }
}


export function jobNewClusterClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct?: JobNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference | JobNewClusterClusterMountInfoNetworkFilesystemInfo): any {
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

export class JobNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterClusterMountInfoNetworkFilesystemInfo | undefined {
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

  public set internalValue(value: JobNewClusterClusterMountInfoNetworkFilesystemInfo | undefined) {
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
export interface JobNewClusterClusterMountInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#local_mount_dir_path Job#local_mount_dir_path}
  */
  readonly localMountDirPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#remote_mount_dir_path Job#remote_mount_dir_path}
  */
  readonly remoteMountDirPath?: string;
  /**
  * network_filesystem_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#network_filesystem_info Job#network_filesystem_info}
  */
  readonly networkFilesystemInfo: JobNewClusterClusterMountInfoNetworkFilesystemInfo;
}

export function jobNewClusterClusterMountInfoToTerraform(struct?: JobNewClusterClusterMountInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_mount_dir_path: cdktf.stringToTerraform(struct!.localMountDirPath),
    remote_mount_dir_path: cdktf.stringToTerraform(struct!.remoteMountDirPath),
    network_filesystem_info: jobNewClusterClusterMountInfoNetworkFilesystemInfoToTerraform(struct!.networkFilesystemInfo),
  }
}


export function jobNewClusterClusterMountInfoToHclTerraform(struct?: JobNewClusterClusterMountInfo | cdktf.IResolvable): any {
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
      value: jobNewClusterClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct!.networkFilesystemInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterClusterMountInfoNetworkFilesystemInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobNewClusterClusterMountInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobNewClusterClusterMountInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobNewClusterClusterMountInfo | cdktf.IResolvable | undefined) {
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
  private _networkFilesystemInfo = new JobNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference(this, "network_filesystem_info");
  public get networkFilesystemInfo() {
    return this._networkFilesystemInfo;
  }
  public putNetworkFilesystemInfo(value: JobNewClusterClusterMountInfoNetworkFilesystemInfo) {
    this._networkFilesystemInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFilesystemInfoInput() {
    return this._networkFilesystemInfo.internalValue;
  }
}

export class JobNewClusterClusterMountInfoList extends cdktf.ComplexList {
  public internalValue? : JobNewClusterClusterMountInfo[] | cdktf.IResolvable

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
  public get(index: number): JobNewClusterClusterMountInfoOutputReference {
    return new JobNewClusterClusterMountInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobNewClusterDockerImageBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#password Job#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#username Job#username}
  */
  readonly username: string;
}

export function jobNewClusterDockerImageBasicAuthToTerraform(struct?: JobNewClusterDockerImageBasicAuthOutputReference | JobNewClusterDockerImageBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function jobNewClusterDockerImageBasicAuthToHclTerraform(struct?: JobNewClusterDockerImageBasicAuthOutputReference | JobNewClusterDockerImageBasicAuth): any {
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

export class JobNewClusterDockerImageBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterDockerImageBasicAuth | undefined {
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

  public set internalValue(value: JobNewClusterDockerImageBasicAuth | undefined) {
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
export interface JobNewClusterDockerImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#url Job#url}
  */
  readonly url: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#basic_auth Job#basic_auth}
  */
  readonly basicAuth?: JobNewClusterDockerImageBasicAuth;
}

export function jobNewClusterDockerImageToTerraform(struct?: JobNewClusterDockerImageOutputReference | JobNewClusterDockerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    basic_auth: jobNewClusterDockerImageBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function jobNewClusterDockerImageToHclTerraform(struct?: JobNewClusterDockerImageOutputReference | JobNewClusterDockerImage): any {
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
      value: jobNewClusterDockerImageBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterDockerImageBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobNewClusterDockerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterDockerImage | undefined {
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

  public set internalValue(value: JobNewClusterDockerImage | undefined) {
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
  private _basicAuth = new JobNewClusterDockerImageBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: JobNewClusterDockerImageBasicAuth) {
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
export interface JobNewClusterGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#boot_disk_size Job#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#google_service_account Job#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#local_ssd_count Job#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#use_preemptible_executors Job#use_preemptible_executors}
  */
  readonly usePreemptibleExecutors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#zone_id Job#zone_id}
  */
  readonly zoneId?: string;
}

export function jobNewClusterGcpAttributesToTerraform(struct?: JobNewClusterGcpAttributesOutputReference | JobNewClusterGcpAttributes): any {
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


export function jobNewClusterGcpAttributesToHclTerraform(struct?: JobNewClusterGcpAttributesOutputReference | JobNewClusterGcpAttributes): any {
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

export class JobNewClusterGcpAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterGcpAttributes | undefined {
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

  public set internalValue(value: JobNewClusterGcpAttributes | undefined) {
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
export interface JobNewClusterInitScriptsAbfss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobNewClusterInitScriptsAbfssToTerraform(struct?: JobNewClusterInitScriptsAbfssOutputReference | JobNewClusterInitScriptsAbfss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobNewClusterInitScriptsAbfssToHclTerraform(struct?: JobNewClusterInitScriptsAbfssOutputReference | JobNewClusterInitScriptsAbfss): any {
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

export class JobNewClusterInitScriptsAbfssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterInitScriptsAbfss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNewClusterInitScriptsAbfss | undefined) {
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
export interface JobNewClusterInitScriptsDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobNewClusterInitScriptsDbfsToTerraform(struct?: JobNewClusterInitScriptsDbfsOutputReference | JobNewClusterInitScriptsDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobNewClusterInitScriptsDbfsToHclTerraform(struct?: JobNewClusterInitScriptsDbfsOutputReference | JobNewClusterInitScriptsDbfs): any {
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

export class JobNewClusterInitScriptsDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterInitScriptsDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNewClusterInitScriptsDbfs | undefined) {
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
export interface JobNewClusterInitScriptsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobNewClusterInitScriptsFileToTerraform(struct?: JobNewClusterInitScriptsFileOutputReference | JobNewClusterInitScriptsFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobNewClusterInitScriptsFileToHclTerraform(struct?: JobNewClusterInitScriptsFileOutputReference | JobNewClusterInitScriptsFile): any {
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

export class JobNewClusterInitScriptsFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterInitScriptsFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNewClusterInitScriptsFile | undefined) {
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
export interface JobNewClusterInitScriptsGcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobNewClusterInitScriptsGcsToTerraform(struct?: JobNewClusterInitScriptsGcsOutputReference | JobNewClusterInitScriptsGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobNewClusterInitScriptsGcsToHclTerraform(struct?: JobNewClusterInitScriptsGcsOutputReference | JobNewClusterInitScriptsGcs): any {
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

export class JobNewClusterInitScriptsGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterInitScriptsGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNewClusterInitScriptsGcs | undefined) {
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
export interface JobNewClusterInitScriptsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#canned_acl Job#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#enable_encryption Job#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#encryption_type Job#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#endpoint Job#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#kms_key Job#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#region Job#region}
  */
  readonly region?: string;
}

export function jobNewClusterInitScriptsS3ToTerraform(struct?: JobNewClusterInitScriptsS3OutputReference | JobNewClusterInitScriptsS3): any {
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


export function jobNewClusterInitScriptsS3ToHclTerraform(struct?: JobNewClusterInitScriptsS3OutputReference | JobNewClusterInitScriptsS3): any {
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

export class JobNewClusterInitScriptsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterInitScriptsS3 | undefined {
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

  public set internalValue(value: JobNewClusterInitScriptsS3 | undefined) {
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
export interface JobNewClusterInitScriptsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobNewClusterInitScriptsVolumesToTerraform(struct?: JobNewClusterInitScriptsVolumesOutputReference | JobNewClusterInitScriptsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobNewClusterInitScriptsVolumesToHclTerraform(struct?: JobNewClusterInitScriptsVolumesOutputReference | JobNewClusterInitScriptsVolumes): any {
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

export class JobNewClusterInitScriptsVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterInitScriptsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNewClusterInitScriptsVolumes | undefined) {
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
export interface JobNewClusterInitScriptsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobNewClusterInitScriptsWorkspaceToTerraform(struct?: JobNewClusterInitScriptsWorkspaceOutputReference | JobNewClusterInitScriptsWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobNewClusterInitScriptsWorkspaceToHclTerraform(struct?: JobNewClusterInitScriptsWorkspaceOutputReference | JobNewClusterInitScriptsWorkspace): any {
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

export class JobNewClusterInitScriptsWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterInitScriptsWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNewClusterInitScriptsWorkspace | undefined) {
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
export interface JobNewClusterInitScripts {
  /**
  * abfss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#abfss Job#abfss}
  */
  readonly abfss?: JobNewClusterInitScriptsAbfss;
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#dbfs Job#dbfs}
  */
  readonly dbfs?: JobNewClusterInitScriptsDbfs;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#file Job#file}
  */
  readonly file?: JobNewClusterInitScriptsFile;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#gcs Job#gcs}
  */
  readonly gcs?: JobNewClusterInitScriptsGcs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#s3 Job#s3}
  */
  readonly s3?: JobNewClusterInitScriptsS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#volumes Job#volumes}
  */
  readonly volumes?: JobNewClusterInitScriptsVolumes;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#workspace Job#workspace}
  */
  readonly workspace?: JobNewClusterInitScriptsWorkspace;
}

export function jobNewClusterInitScriptsToTerraform(struct?: JobNewClusterInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abfss: jobNewClusterInitScriptsAbfssToTerraform(struct!.abfss),
    dbfs: jobNewClusterInitScriptsDbfsToTerraform(struct!.dbfs),
    file: jobNewClusterInitScriptsFileToTerraform(struct!.file),
    gcs: jobNewClusterInitScriptsGcsToTerraform(struct!.gcs),
    s3: jobNewClusterInitScriptsS3ToTerraform(struct!.s3),
    volumes: jobNewClusterInitScriptsVolumesToTerraform(struct!.volumes),
    workspace: jobNewClusterInitScriptsWorkspaceToTerraform(struct!.workspace),
  }
}


export function jobNewClusterInitScriptsToHclTerraform(struct?: JobNewClusterInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abfss: {
      value: jobNewClusterInitScriptsAbfssToHclTerraform(struct!.abfss),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterInitScriptsAbfssList",
    },
    dbfs: {
      value: jobNewClusterInitScriptsDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterInitScriptsDbfsList",
    },
    file: {
      value: jobNewClusterInitScriptsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterInitScriptsFileList",
    },
    gcs: {
      value: jobNewClusterInitScriptsGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterInitScriptsGcsList",
    },
    s3: {
      value: jobNewClusterInitScriptsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterInitScriptsS3List",
    },
    volumes: {
      value: jobNewClusterInitScriptsVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterInitScriptsVolumesList",
    },
    workspace: {
      value: jobNewClusterInitScriptsWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterInitScriptsWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobNewClusterInitScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobNewClusterInitScripts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobNewClusterInitScripts | cdktf.IResolvable | undefined) {
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
  private _abfss = new JobNewClusterInitScriptsAbfssOutputReference(this, "abfss");
  public get abfss() {
    return this._abfss;
  }
  public putAbfss(value: JobNewClusterInitScriptsAbfss) {
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
  private _dbfs = new JobNewClusterInitScriptsDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: JobNewClusterInitScriptsDbfs) {
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
  private _file = new JobNewClusterInitScriptsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: JobNewClusterInitScriptsFile) {
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
  private _gcs = new JobNewClusterInitScriptsGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: JobNewClusterInitScriptsGcs) {
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
  private _s3 = new JobNewClusterInitScriptsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: JobNewClusterInitScriptsS3) {
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
  private _volumes = new JobNewClusterInitScriptsVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: JobNewClusterInitScriptsVolumes) {
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
  private _workspace = new JobNewClusterInitScriptsWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: JobNewClusterInitScriptsWorkspace) {
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

export class JobNewClusterInitScriptsList extends cdktf.ComplexList {
  public internalValue? : JobNewClusterInitScripts[] | cdktf.IResolvable

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
  public get(index: number): JobNewClusterInitScriptsOutputReference {
    return new JobNewClusterInitScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobNewClusterLibraryCran {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobNewClusterLibraryCranToTerraform(struct?: JobNewClusterLibraryCranOutputReference | JobNewClusterLibraryCran): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function jobNewClusterLibraryCranToHclTerraform(struct?: JobNewClusterLibraryCranOutputReference | JobNewClusterLibraryCran): any {
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

export class JobNewClusterLibraryCranOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterLibraryCran | undefined {
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

  public set internalValue(value: JobNewClusterLibraryCran | undefined) {
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
export interface JobNewClusterLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#coordinates Job#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#exclusions Job#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobNewClusterLibraryMavenToTerraform(struct?: JobNewClusterLibraryMavenOutputReference | JobNewClusterLibraryMaven): any {
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


export function jobNewClusterLibraryMavenToHclTerraform(struct?: JobNewClusterLibraryMavenOutputReference | JobNewClusterLibraryMaven): any {
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

export class JobNewClusterLibraryMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterLibraryMaven | undefined {
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

  public set internalValue(value: JobNewClusterLibraryMaven | undefined) {
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
export interface JobNewClusterLibraryPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobNewClusterLibraryPypiToTerraform(struct?: JobNewClusterLibraryPypiOutputReference | JobNewClusterLibraryPypi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function jobNewClusterLibraryPypiToHclTerraform(struct?: JobNewClusterLibraryPypiOutputReference | JobNewClusterLibraryPypi): any {
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

export class JobNewClusterLibraryPypiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterLibraryPypi | undefined {
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

  public set internalValue(value: JobNewClusterLibraryPypi | undefined) {
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
export interface JobNewClusterLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#egg Job#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#jar Job#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#requirements Job#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#whl Job#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#cran Job#cran}
  */
  readonly cran?: JobNewClusterLibraryCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#maven Job#maven}
  */
  readonly maven?: JobNewClusterLibraryMaven;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#pypi Job#pypi}
  */
  readonly pypi?: JobNewClusterLibraryPypi;
}

export function jobNewClusterLibraryToTerraform(struct?: JobNewClusterLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egg: cdktf.stringToTerraform(struct!.egg),
    jar: cdktf.stringToTerraform(struct!.jar),
    requirements: cdktf.stringToTerraform(struct!.requirements),
    whl: cdktf.stringToTerraform(struct!.whl),
    cran: jobNewClusterLibraryCranToTerraform(struct!.cran),
    maven: jobNewClusterLibraryMavenToTerraform(struct!.maven),
    pypi: jobNewClusterLibraryPypiToTerraform(struct!.pypi),
  }
}


export function jobNewClusterLibraryToHclTerraform(struct?: JobNewClusterLibrary | cdktf.IResolvable): any {
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
      value: jobNewClusterLibraryCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterLibraryCranList",
    },
    maven: {
      value: jobNewClusterLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterLibraryMavenList",
    },
    pypi: {
      value: jobNewClusterLibraryPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterLibraryPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobNewClusterLibraryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobNewClusterLibrary | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobNewClusterLibrary | cdktf.IResolvable | undefined) {
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
  private _cran = new JobNewClusterLibraryCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: JobNewClusterLibraryCran) {
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
  private _maven = new JobNewClusterLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: JobNewClusterLibraryMaven) {
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
  private _pypi = new JobNewClusterLibraryPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: JobNewClusterLibraryPypi) {
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

export class JobNewClusterLibraryList extends cdktf.ComplexList {
  public internalValue? : JobNewClusterLibrary[] | cdktf.IResolvable

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
  public get(index: number): JobNewClusterLibraryOutputReference {
    return new JobNewClusterLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobNewClusterWorkloadTypeClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#jobs Job#jobs}
  */
  readonly jobs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#notebooks Job#notebooks}
  */
  readonly notebooks?: boolean | cdktf.IResolvable;
}

export function jobNewClusterWorkloadTypeClientsToTerraform(struct?: JobNewClusterWorkloadTypeClientsOutputReference | JobNewClusterWorkloadTypeClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jobs: cdktf.booleanToTerraform(struct!.jobs),
    notebooks: cdktf.booleanToTerraform(struct!.notebooks),
  }
}


export function jobNewClusterWorkloadTypeClientsToHclTerraform(struct?: JobNewClusterWorkloadTypeClientsOutputReference | JobNewClusterWorkloadTypeClients): any {
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

export class JobNewClusterWorkloadTypeClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterWorkloadTypeClients | undefined {
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

  public set internalValue(value: JobNewClusterWorkloadTypeClients | undefined) {
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
export interface JobNewClusterWorkloadType {
  /**
  * clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#clients Job#clients}
  */
  readonly clients: JobNewClusterWorkloadTypeClients;
}

export function jobNewClusterWorkloadTypeToTerraform(struct?: JobNewClusterWorkloadTypeOutputReference | JobNewClusterWorkloadType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients: jobNewClusterWorkloadTypeClientsToTerraform(struct!.clients),
  }
}


export function jobNewClusterWorkloadTypeToHclTerraform(struct?: JobNewClusterWorkloadTypeOutputReference | JobNewClusterWorkloadType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clients: {
      value: jobNewClusterWorkloadTypeClientsToHclTerraform(struct!.clients),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterWorkloadTypeClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobNewClusterWorkloadTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewClusterWorkloadType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNewClusterWorkloadType | undefined) {
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
  private _clients = new JobNewClusterWorkloadTypeClientsOutputReference(this, "clients");
  public get clients() {
    return this._clients;
  }
  public putClients(value: JobNewClusterWorkloadTypeClients) {
    this._clients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients.internalValue;
  }
}
export interface JobNewCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#apply_policy_default_values Job#apply_policy_default_values}
  */
  readonly applyPolicyDefaultValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#cluster_id Job#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#cluster_name Job#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#custom_tags Job#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#data_security_mode Job#data_security_mode}
  */
  readonly dataSecurityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#driver_instance_pool_id Job#driver_instance_pool_id}
  */
  readonly driverInstancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#driver_node_type_id Job#driver_node_type_id}
  */
  readonly driverNodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#enable_elastic_disk Job#enable_elastic_disk}
  */
  readonly enableElasticDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#enable_local_disk_encryption Job#enable_local_disk_encryption}
  */
  readonly enableLocalDiskEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#idempotency_token Job#idempotency_token}
  */
  readonly idempotencyToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#instance_pool_id Job#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#is_single_node Job#is_single_node}
  */
  readonly isSingleNode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#kind Job#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#node_type_id Job#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#num_workers Job#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#policy_id Job#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#runtime_engine Job#runtime_engine}
  */
  readonly runtimeEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#single_user_name Job#single_user_name}
  */
  readonly singleUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#spark_conf Job#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#spark_env_vars Job#spark_env_vars}
  */
  readonly sparkEnvVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#spark_version Job#spark_version}
  */
  readonly sparkVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ssh_public_keys Job#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#use_ml_runtime Job#use_ml_runtime}
  */
  readonly useMlRuntime?: boolean | cdktf.IResolvable;
  /**
  * autoscale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#autoscale Job#autoscale}
  */
  readonly autoscale?: JobNewClusterAutoscale;
  /**
  * aws_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#aws_attributes Job#aws_attributes}
  */
  readonly awsAttributes?: JobNewClusterAwsAttributes;
  /**
  * azure_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#azure_attributes Job#azure_attributes}
  */
  readonly azureAttributes?: JobNewClusterAzureAttributes;
  /**
  * cluster_log_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#cluster_log_conf Job#cluster_log_conf}
  */
  readonly clusterLogConf?: JobNewClusterClusterLogConf;
  /**
  * cluster_mount_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#cluster_mount_info Job#cluster_mount_info}
  */
  readonly clusterMountInfo?: JobNewClusterClusterMountInfo[] | cdktf.IResolvable;
  /**
  * docker_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#docker_image Job#docker_image}
  */
  readonly dockerImage?: JobNewClusterDockerImage;
  /**
  * gcp_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#gcp_attributes Job#gcp_attributes}
  */
  readonly gcpAttributes?: JobNewClusterGcpAttributes;
  /**
  * init_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#init_scripts Job#init_scripts}
  */
  readonly initScripts?: JobNewClusterInitScripts[] | cdktf.IResolvable;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#library Job#library}
  */
  readonly library?: JobNewClusterLibrary[] | cdktf.IResolvable;
  /**
  * workload_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#workload_type Job#workload_type}
  */
  readonly workloadType?: JobNewClusterWorkloadType;
}

export function jobNewClusterToTerraform(struct?: JobNewClusterOutputReference | JobNewCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_policy_default_values: cdktf.booleanToTerraform(struct!.applyPolicyDefaultValues),
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
    is_single_node: cdktf.booleanToTerraform(struct!.isSingleNode),
    kind: cdktf.stringToTerraform(struct!.kind),
    node_type_id: cdktf.stringToTerraform(struct!.nodeTypeId),
    num_workers: cdktf.numberToTerraform(struct!.numWorkers),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    runtime_engine: cdktf.stringToTerraform(struct!.runtimeEngine),
    single_user_name: cdktf.stringToTerraform(struct!.singleUserName),
    spark_conf: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkConf),
    spark_env_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkEnvVars),
    spark_version: cdktf.stringToTerraform(struct!.sparkVersion),
    ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshPublicKeys),
    use_ml_runtime: cdktf.booleanToTerraform(struct!.useMlRuntime),
    autoscale: jobNewClusterAutoscaleToTerraform(struct!.autoscale),
    aws_attributes: jobNewClusterAwsAttributesToTerraform(struct!.awsAttributes),
    azure_attributes: jobNewClusterAzureAttributesToTerraform(struct!.azureAttributes),
    cluster_log_conf: jobNewClusterClusterLogConfToTerraform(struct!.clusterLogConf),
    cluster_mount_info: cdktf.listMapper(jobNewClusterClusterMountInfoToTerraform, true)(struct!.clusterMountInfo),
    docker_image: jobNewClusterDockerImageToTerraform(struct!.dockerImage),
    gcp_attributes: jobNewClusterGcpAttributesToTerraform(struct!.gcpAttributes),
    init_scripts: cdktf.listMapper(jobNewClusterInitScriptsToTerraform, true)(struct!.initScripts),
    library: cdktf.listMapper(jobNewClusterLibraryToTerraform, true)(struct!.library),
    workload_type: jobNewClusterWorkloadTypeToTerraform(struct!.workloadType),
  }
}


export function jobNewClusterToHclTerraform(struct?: JobNewClusterOutputReference | JobNewCluster): any {
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
    is_single_node: {
      value: cdktf.booleanToHclTerraform(struct!.isSingleNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    use_ml_runtime: {
      value: cdktf.booleanToHclTerraform(struct!.useMlRuntime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoscale: {
      value: jobNewClusterAutoscaleToHclTerraform(struct!.autoscale),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterAutoscaleList",
    },
    aws_attributes: {
      value: jobNewClusterAwsAttributesToHclTerraform(struct!.awsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterAwsAttributesList",
    },
    azure_attributes: {
      value: jobNewClusterAzureAttributesToHclTerraform(struct!.azureAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterAzureAttributesList",
    },
    cluster_log_conf: {
      value: jobNewClusterClusterLogConfToHclTerraform(struct!.clusterLogConf),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterClusterLogConfList",
    },
    cluster_mount_info: {
      value: cdktf.listMapperHcl(jobNewClusterClusterMountInfoToHclTerraform, true)(struct!.clusterMountInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterClusterMountInfoList",
    },
    docker_image: {
      value: jobNewClusterDockerImageToHclTerraform(struct!.dockerImage),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterDockerImageList",
    },
    gcp_attributes: {
      value: jobNewClusterGcpAttributesToHclTerraform(struct!.gcpAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterGcpAttributesList",
    },
    init_scripts: {
      value: cdktf.listMapperHcl(jobNewClusterInitScriptsToHclTerraform, true)(struct!.initScripts),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterInitScriptsList",
    },
    library: {
      value: cdktf.listMapperHcl(jobNewClusterLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "set",
      storageClassType: "JobNewClusterLibraryList",
    },
    workload_type: {
      value: jobNewClusterWorkloadTypeToHclTerraform(struct!.workloadType),
      isBlock: true,
      type: "list",
      storageClassType: "JobNewClusterWorkloadTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobNewClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNewCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyPolicyDefaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyDefaultValues = this._applyPolicyDefaultValues;
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
    if (this._isSingleNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSingleNode = this._isSingleNode;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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
    if (this._useMlRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMlRuntime = this._useMlRuntime;
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
    if (this._library?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.library = this._library?.internalValue;
    }
    if (this._workloadType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadType = this._workloadType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNewCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyPolicyDefaultValues = undefined;
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
      this._isSingleNode = undefined;
      this._kind = undefined;
      this._nodeTypeId = undefined;
      this._numWorkers = undefined;
      this._policyId = undefined;
      this._runtimeEngine = undefined;
      this._singleUserName = undefined;
      this._sparkConf = undefined;
      this._sparkEnvVars = undefined;
      this._sparkVersion = undefined;
      this._sshPublicKeys = undefined;
      this._useMlRuntime = undefined;
      this._autoscale.internalValue = undefined;
      this._awsAttributes.internalValue = undefined;
      this._azureAttributes.internalValue = undefined;
      this._clusterLogConf.internalValue = undefined;
      this._clusterMountInfo.internalValue = undefined;
      this._dockerImage.internalValue = undefined;
      this._gcpAttributes.internalValue = undefined;
      this._initScripts.internalValue = undefined;
      this._library.internalValue = undefined;
      this._workloadType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyPolicyDefaultValues = value.applyPolicyDefaultValues;
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
      this._isSingleNode = value.isSingleNode;
      this._kind = value.kind;
      this._nodeTypeId = value.nodeTypeId;
      this._numWorkers = value.numWorkers;
      this._policyId = value.policyId;
      this._runtimeEngine = value.runtimeEngine;
      this._singleUserName = value.singleUserName;
      this._sparkConf = value.sparkConf;
      this._sparkEnvVars = value.sparkEnvVars;
      this._sparkVersion = value.sparkVersion;
      this._sshPublicKeys = value.sshPublicKeys;
      this._useMlRuntime = value.useMlRuntime;
      this._autoscale.internalValue = value.autoscale;
      this._awsAttributes.internalValue = value.awsAttributes;
      this._azureAttributes.internalValue = value.azureAttributes;
      this._clusterLogConf.internalValue = value.clusterLogConf;
      this._clusterMountInfo.internalValue = value.clusterMountInfo;
      this._dockerImage.internalValue = value.dockerImage;
      this._gcpAttributes.internalValue = value.gcpAttributes;
      this._initScripts.internalValue = value.initScripts;
      this._library.internalValue = value.library;
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

  // is_single_node - computed: false, optional: true, required: false
  private _isSingleNode?: boolean | cdktf.IResolvable; 
  public get isSingleNode() {
    return this.getBooleanAttribute('is_single_node');
  }
  public set isSingleNode(value: boolean | cdktf.IResolvable) {
    this._isSingleNode = value;
  }
  public resetIsSingleNode() {
    this._isSingleNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSingleNodeInput() {
    return this._isSingleNode;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // num_workers - computed: false, optional: true, required: false
  private _numWorkers?: number; 
  public get numWorkers() {
    return this.getNumberAttribute('num_workers');
  }
  public set numWorkers(value: number) {
    this._numWorkers = value;
  }
  public resetNumWorkers() {
    this._numWorkers = undefined;
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

  // use_ml_runtime - computed: false, optional: true, required: false
  private _useMlRuntime?: boolean | cdktf.IResolvable; 
  public get useMlRuntime() {
    return this.getBooleanAttribute('use_ml_runtime');
  }
  public set useMlRuntime(value: boolean | cdktf.IResolvable) {
    this._useMlRuntime = value;
  }
  public resetUseMlRuntime() {
    this._useMlRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMlRuntimeInput() {
    return this._useMlRuntime;
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale = new JobNewClusterAutoscaleOutputReference(this, "autoscale");
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: JobNewClusterAutoscale) {
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
  private _awsAttributes = new JobNewClusterAwsAttributesOutputReference(this, "aws_attributes");
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: JobNewClusterAwsAttributes) {
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
  private _azureAttributes = new JobNewClusterAzureAttributesOutputReference(this, "azure_attributes");
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: JobNewClusterAzureAttributes) {
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
  private _clusterLogConf = new JobNewClusterClusterLogConfOutputReference(this, "cluster_log_conf");
  public get clusterLogConf() {
    return this._clusterLogConf;
  }
  public putClusterLogConf(value: JobNewClusterClusterLogConf) {
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
  private _clusterMountInfo = new JobNewClusterClusterMountInfoList(this, "cluster_mount_info", false);
  public get clusterMountInfo() {
    return this._clusterMountInfo;
  }
  public putClusterMountInfo(value: JobNewClusterClusterMountInfo[] | cdktf.IResolvable) {
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
  private _dockerImage = new JobNewClusterDockerImageOutputReference(this, "docker_image");
  public get dockerImage() {
    return this._dockerImage;
  }
  public putDockerImage(value: JobNewClusterDockerImage) {
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
  private _gcpAttributes = new JobNewClusterGcpAttributesOutputReference(this, "gcp_attributes");
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: JobNewClusterGcpAttributes) {
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
  private _initScripts = new JobNewClusterInitScriptsList(this, "init_scripts", false);
  public get initScripts() {
    return this._initScripts;
  }
  public putInitScripts(value: JobNewClusterInitScripts[] | cdktf.IResolvable) {
    this._initScripts.internalValue = value;
  }
  public resetInitScripts() {
    this._initScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptsInput() {
    return this._initScripts.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new JobNewClusterLibraryList(this, "library", true);
  public get library() {
    return this._library;
  }
  public putLibrary(value: JobNewClusterLibrary[] | cdktf.IResolvable) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }

  // workload_type - computed: false, optional: true, required: false
  private _workloadType = new JobNewClusterWorkloadTypeOutputReference(this, "workload_type");
  public get workloadType() {
    return this._workloadType;
  }
  public putWorkloadType(value: JobNewClusterWorkloadType) {
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
export interface JobNotebookTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#base_parameters Job#base_parameters}
  */
  readonly baseParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#notebook_path Job#notebook_path}
  */
  readonly notebookPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId?: string;
}

export function jobNotebookTaskToTerraform(struct?: JobNotebookTaskOutputReference | JobNotebookTask): any {
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


export function jobNotebookTaskToHclTerraform(struct?: JobNotebookTaskOutputReference | JobNotebookTask): any {
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

export class JobNotebookTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNotebookTask | undefined {
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

  public set internalValue(value: JobNotebookTask | undefined) {
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
export interface JobNotificationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#no_alert_for_canceled_runs Job#no_alert_for_canceled_runs}
  */
  readonly noAlertForCanceledRuns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#no_alert_for_skipped_runs Job#no_alert_for_skipped_runs}
  */
  readonly noAlertForSkippedRuns?: boolean | cdktf.IResolvable;
}

export function jobNotificationSettingsToTerraform(struct?: JobNotificationSettingsOutputReference | JobNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_alert_for_canceled_runs: cdktf.booleanToTerraform(struct!.noAlertForCanceledRuns),
    no_alert_for_skipped_runs: cdktf.booleanToTerraform(struct!.noAlertForSkippedRuns),
  }
}


export function jobNotificationSettingsToHclTerraform(struct?: JobNotificationSettingsOutputReference | JobNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class JobNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: JobNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noAlertForCanceledRuns = undefined;
      this._noAlertForSkippedRuns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noAlertForCanceledRuns = value.noAlertForCanceledRuns;
      this._noAlertForSkippedRuns = value.noAlertForSkippedRuns;
    }
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
export interface JobParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#default Job#default}
  */
  readonly default: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#name Job#name}
  */
  readonly name: string;
}

export function jobParameterToTerraform(struct?: JobParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function jobParameterToHclTerraform(struct?: JobParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._name = value.name;
    }
  }

  // default - computed: false, optional: false, required: true
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
}

export class JobParameterList extends cdktf.ComplexList {
  public internalValue? : JobParameter[] | cdktf.IResolvable

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
  public get(index: number): JobParameterOutputReference {
    return new JobParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobPipelineTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#full_refresh Job#full_refresh}
  */
  readonly fullRefresh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#pipeline_id Job#pipeline_id}
  */
  readonly pipelineId: string;
}

export function jobPipelineTaskToTerraform(struct?: JobPipelineTaskOutputReference | JobPipelineTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_refresh: cdktf.booleanToTerraform(struct!.fullRefresh),
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
  }
}


export function jobPipelineTaskToHclTerraform(struct?: JobPipelineTaskOutputReference | JobPipelineTask): any {
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

export class JobPipelineTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobPipelineTask | undefined {
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

  public set internalValue(value: JobPipelineTask | undefined) {
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
export interface JobPythonWheelTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#entry_point Job#entry_point}
  */
  readonly entryPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#named_parameters Job#named_parameters}
  */
  readonly namedParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#package_name Job#package_name}
  */
  readonly packageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
}

export function jobPythonWheelTaskToTerraform(struct?: JobPythonWheelTaskOutputReference | JobPythonWheelTask): any {
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


export function jobPythonWheelTaskToHclTerraform(struct?: JobPythonWheelTaskOutputReference | JobPythonWheelTask): any {
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

export class JobPythonWheelTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobPythonWheelTask | undefined {
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

  public set internalValue(value: JobPythonWheelTask | undefined) {
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
export interface JobQueue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#enabled Job#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function jobQueueToTerraform(struct?: JobQueueOutputReference | JobQueue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function jobQueueToHclTerraform(struct?: JobQueueOutputReference | JobQueue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobQueue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobQueue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface JobRunAs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#service_principal_name Job#service_principal_name}
  */
  readonly servicePrincipalName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#user_name Job#user_name}
  */
  readonly userName?: string;
}

export function jobRunAsToTerraform(struct?: JobRunAsOutputReference | JobRunAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_principal_name: cdktf.stringToTerraform(struct!.servicePrincipalName),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function jobRunAsToHclTerraform(struct?: JobRunAsOutputReference | JobRunAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_principal_name: {
      value: cdktf.stringToHclTerraform(struct!.servicePrincipalName),
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

export class JobRunAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobRunAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servicePrincipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalName = this._servicePrincipalName;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobRunAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._servicePrincipalName = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._servicePrincipalName = value.servicePrincipalName;
      this._userName = value.userName;
    }
  }

  // service_principal_name - computed: false, optional: true, required: false
  private _servicePrincipalName?: string; 
  public get servicePrincipalName() {
    return this.getStringAttribute('service_principal_name');
  }
  public set servicePrincipalName(value: string) {
    this._servicePrincipalName = value;
  }
  public resetServicePrincipalName() {
    this._servicePrincipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalNameInput() {
    return this._servicePrincipalName;
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
export interface JobRunJobTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#job_id Job#job_id}
  */
  readonly jobId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#job_parameters Job#job_parameters}
  */
  readonly jobParameters?: { [key: string]: string };
}

export function jobRunJobTaskToTerraform(struct?: JobRunJobTaskOutputReference | JobRunJobTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_id: cdktf.numberToTerraform(struct!.jobId),
    job_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.jobParameters),
  }
}


export function jobRunJobTaskToHclTerraform(struct?: JobRunJobTaskOutputReference | JobRunJobTask): any {
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

export class JobRunJobTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobRunJobTask | undefined {
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

  public set internalValue(value: JobRunJobTask | undefined) {
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
export interface JobSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#pause_status Job#pause_status}
  */
  readonly pauseStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#quartz_cron_expression Job#quartz_cron_expression}
  */
  readonly quartzCronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#timezone_id Job#timezone_id}
  */
  readonly timezoneId: string;
}

export function jobScheduleToTerraform(struct?: JobScheduleOutputReference | JobSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pause_status: cdktf.stringToTerraform(struct!.pauseStatus),
    quartz_cron_expression: cdktf.stringToTerraform(struct!.quartzCronExpression),
    timezone_id: cdktf.stringToTerraform(struct!.timezoneId),
  }
}


export function jobScheduleToHclTerraform(struct?: JobScheduleOutputReference | JobSchedule): any {
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
    quartz_cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.quartzCronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone_id: {
      value: cdktf.stringToHclTerraform(struct!.timezoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pauseStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseStatus = this._pauseStatus;
    }
    if (this._quartzCronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.quartzCronExpression = this._quartzCronExpression;
    }
    if (this._timezoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezoneId = this._timezoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pauseStatus = undefined;
      this._quartzCronExpression = undefined;
      this._timezoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pauseStatus = value.pauseStatus;
      this._quartzCronExpression = value.quartzCronExpression;
      this._timezoneId = value.timezoneId;
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

  // quartz_cron_expression - computed: false, optional: false, required: true
  private _quartzCronExpression?: string; 
  public get quartzCronExpression() {
    return this.getStringAttribute('quartz_cron_expression');
  }
  public set quartzCronExpression(value: string) {
    this._quartzCronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quartzCronExpressionInput() {
    return this._quartzCronExpression;
  }

  // timezone_id - computed: false, optional: false, required: true
  private _timezoneId?: string; 
  public get timezoneId() {
    return this.getStringAttribute('timezone_id');
  }
  public set timezoneId(value: string) {
    this._timezoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneIdInput() {
    return this._timezoneId;
  }
}
export interface JobSparkJarTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#jar_uri Job#jar_uri}
  */
  readonly jarUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#main_class_name Job#main_class_name}
  */
  readonly mainClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
}

export function jobSparkJarTaskToTerraform(struct?: JobSparkJarTaskOutputReference | JobSparkJarTask): any {
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


export function jobSparkJarTaskToHclTerraform(struct?: JobSparkJarTaskOutputReference | JobSparkJarTask): any {
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

export class JobSparkJarTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobSparkJarTask | undefined {
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

  public set internalValue(value: JobSparkJarTask | undefined) {
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
export interface JobSparkPythonTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#python_file Job#python_file}
  */
  readonly pythonFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
}

export function jobSparkPythonTaskToTerraform(struct?: JobSparkPythonTaskOutputReference | JobSparkPythonTask): any {
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


export function jobSparkPythonTaskToHclTerraform(struct?: JobSparkPythonTaskOutputReference | JobSparkPythonTask): any {
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

export class JobSparkPythonTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobSparkPythonTask | undefined {
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

  public set internalValue(value: JobSparkPythonTask | undefined) {
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
export interface JobSparkSubmitTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
}

export function jobSparkSubmitTaskToTerraform(struct?: JobSparkSubmitTaskOutputReference | JobSparkSubmitTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
  }
}


export function jobSparkSubmitTaskToHclTerraform(struct?: JobSparkSubmitTaskOutputReference | JobSparkSubmitTask): any {
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

export class JobSparkSubmitTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobSparkSubmitTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobSparkSubmitTask | undefined) {
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
export interface JobTaskCleanRoomsNotebookTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#clean_room_name Job#clean_room_name}
  */
  readonly cleanRoomName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#etag Job#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#notebook_base_parameters Job#notebook_base_parameters}
  */
  readonly notebookBaseParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#notebook_name Job#notebook_name}
  */
  readonly notebookName: string;
}

export function jobTaskCleanRoomsNotebookTaskToTerraform(struct?: JobTaskCleanRoomsNotebookTaskOutputReference | JobTaskCleanRoomsNotebookTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clean_room_name: cdktf.stringToTerraform(struct!.cleanRoomName),
    etag: cdktf.stringToTerraform(struct!.etag),
    notebook_base_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.notebookBaseParameters),
    notebook_name: cdktf.stringToTerraform(struct!.notebookName),
  }
}


export function jobTaskCleanRoomsNotebookTaskToHclTerraform(struct?: JobTaskCleanRoomsNotebookTaskOutputReference | JobTaskCleanRoomsNotebookTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clean_room_name: {
      value: cdktf.stringToHclTerraform(struct!.cleanRoomName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etag: {
      value: cdktf.stringToHclTerraform(struct!.etag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notebook_base_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.notebookBaseParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    notebook_name: {
      value: cdktf.stringToHclTerraform(struct!.notebookName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskCleanRoomsNotebookTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskCleanRoomsNotebookTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanRoomName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanRoomName = this._cleanRoomName;
    }
    if (this._etag !== undefined) {
      hasAnyValues = true;
      internalValueResult.etag = this._etag;
    }
    if (this._notebookBaseParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookBaseParameters = this._notebookBaseParameters;
    }
    if (this._notebookName !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookName = this._notebookName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskCleanRoomsNotebookTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleanRoomName = undefined;
      this._etag = undefined;
      this._notebookBaseParameters = undefined;
      this._notebookName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleanRoomName = value.cleanRoomName;
      this._etag = value.etag;
      this._notebookBaseParameters = value.notebookBaseParameters;
      this._notebookName = value.notebookName;
    }
  }

  // clean_room_name - computed: false, optional: false, required: true
  private _cleanRoomName?: string; 
  public get cleanRoomName() {
    return this.getStringAttribute('clean_room_name');
  }
  public set cleanRoomName(value: string) {
    this._cleanRoomName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanRoomNameInput() {
    return this._cleanRoomName;
  }

  // etag - computed: false, optional: true, required: false
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

  // notebook_base_parameters - computed: false, optional: true, required: false
  private _notebookBaseParameters?: { [key: string]: string }; 
  public get notebookBaseParameters() {
    return this.getStringMapAttribute('notebook_base_parameters');
  }
  public set notebookBaseParameters(value: { [key: string]: string }) {
    this._notebookBaseParameters = value;
  }
  public resetNotebookBaseParameters() {
    this._notebookBaseParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookBaseParametersInput() {
    return this._notebookBaseParameters;
  }

  // notebook_name - computed: false, optional: false, required: true
  private _notebookName?: string; 
  public get notebookName() {
    return this.getStringAttribute('notebook_name');
  }
  public set notebookName(value: string) {
    this._notebookName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookNameInput() {
    return this._notebookName;
  }
}
export interface JobTaskConditionTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#left Job#left}
  */
  readonly left: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#op Job#op}
  */
  readonly op: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#right Job#right}
  */
  readonly right: string;
}

export function jobTaskConditionTaskToTerraform(struct?: JobTaskConditionTaskOutputReference | JobTaskConditionTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    left: cdktf.stringToTerraform(struct!.left),
    op: cdktf.stringToTerraform(struct!.op),
    right: cdktf.stringToTerraform(struct!.right),
  }
}


export function jobTaskConditionTaskToHclTerraform(struct?: JobTaskConditionTaskOutputReference | JobTaskConditionTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    left: {
      value: cdktf.stringToHclTerraform(struct!.left),
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
    right: {
      value: cdktf.stringToHclTerraform(struct!.right),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskConditionTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskConditionTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._right !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskConditionTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._left = undefined;
      this._op = undefined;
      this._right = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._left = value.left;
      this._op = value.op;
      this._right = value.right;
    }
  }

  // left - computed: false, optional: false, required: true
  private _left?: string; 
  public get left() {
    return this.getStringAttribute('left');
  }
  public set left(value: string) {
    this._left = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
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

  // right - computed: false, optional: false, required: true
  private _right?: string; 
  public get right() {
    return this.getStringAttribute('right');
  }
  public set right(value: string) {
    this._right = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right;
  }
}
export interface JobTaskDbtTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#catalog Job#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#commands Job#commands}
  */
  readonly commands: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#profiles_directory Job#profiles_directory}
  */
  readonly profilesDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#project_directory Job#project_directory}
  */
  readonly projectDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#schema Job#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId?: string;
}

export function jobTaskDbtTaskToTerraform(struct?: JobTaskDbtTaskOutputReference | JobTaskDbtTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    profiles_directory: cdktf.stringToTerraform(struct!.profilesDirectory),
    project_directory: cdktf.stringToTerraform(struct!.projectDirectory),
    schema: cdktf.stringToTerraform(struct!.schema),
    source: cdktf.stringToTerraform(struct!.source),
    warehouse_id: cdktf.stringToTerraform(struct!.warehouseId),
  }
}


export function jobTaskDbtTaskToHclTerraform(struct?: JobTaskDbtTaskOutputReference | JobTaskDbtTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    profiles_directory: {
      value: cdktf.stringToHclTerraform(struct!.profilesDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_directory: {
      value: cdktf.stringToHclTerraform(struct!.projectDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
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

export class JobTaskDbtTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskDbtTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._profilesDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilesDirectory = this._profilesDirectory;
    }
    if (this._projectDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectDirectory = this._projectDirectory;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
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

  public set internalValue(value: JobTaskDbtTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._commands = undefined;
      this._profilesDirectory = undefined;
      this._projectDirectory = undefined;
      this._schema = undefined;
      this._source = undefined;
      this._warehouseId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._commands = value.commands;
      this._profilesDirectory = value.profilesDirectory;
      this._projectDirectory = value.projectDirectory;
      this._schema = value.schema;
      this._source = value.source;
      this._warehouseId = value.warehouseId;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // commands - computed: false, optional: false, required: true
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // profiles_directory - computed: false, optional: true, required: false
  private _profilesDirectory?: string; 
  public get profilesDirectory() {
    return this.getStringAttribute('profiles_directory');
  }
  public set profilesDirectory(value: string) {
    this._profilesDirectory = value;
  }
  public resetProfilesDirectory() {
    this._profilesDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesDirectoryInput() {
    return this._profilesDirectory;
  }

  // project_directory - computed: false, optional: true, required: false
  private _projectDirectory?: string; 
  public get projectDirectory() {
    return this.getStringAttribute('project_directory');
  }
  public set projectDirectory(value: string) {
    this._projectDirectory = value;
  }
  public resetProjectDirectory() {
    this._projectDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDirectoryInput() {
    return this._projectDirectory;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
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
export interface JobTaskDependsOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#outcome Job#outcome}
  */
  readonly outcome?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#task_key Job#task_key}
  */
  readonly taskKey: string;
}

export function jobTaskDependsOnToTerraform(struct?: JobTaskDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    outcome: cdktf.stringToTerraform(struct!.outcome),
    task_key: cdktf.stringToTerraform(struct!.taskKey),
  }
}


export function jobTaskDependsOnToHclTerraform(struct?: JobTaskDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    outcome: {
      value: cdktf.stringToHclTerraform(struct!.outcome),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskDependsOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskDependsOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outcome !== undefined) {
      hasAnyValues = true;
      internalValueResult.outcome = this._outcome;
    }
    if (this._taskKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskKey = this._taskKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskDependsOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._outcome = undefined;
      this._taskKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._outcome = value.outcome;
      this._taskKey = value.taskKey;
    }
  }

  // outcome - computed: false, optional: true, required: false
  private _outcome?: string; 
  public get outcome() {
    return this.getStringAttribute('outcome');
  }
  public set outcome(value: string) {
    this._outcome = value;
  }
  public resetOutcome() {
    this._outcome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeInput() {
    return this._outcome;
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
}

export class JobTaskDependsOnList extends cdktf.ComplexList {
  public internalValue? : JobTaskDependsOn[] | cdktf.IResolvable

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
  public get(index: number): JobTaskDependsOnOutputReference {
    return new JobTaskDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskEmailNotifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#no_alert_for_skipped_runs Job#no_alert_for_skipped_runs}
  */
  readonly noAlertForSkippedRuns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_duration_warning_threshold_exceeded Job#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_failure Job#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_start Job#on_start}
  */
  readonly onStart?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_streaming_backlog_exceeded Job#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_success Job#on_success}
  */
  readonly onSuccess?: string[];
}

export function jobTaskEmailNotificationsToTerraform(struct?: JobTaskEmailNotificationsOutputReference | JobTaskEmailNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_alert_for_skipped_runs: cdktf.booleanToTerraform(struct!.noAlertForSkippedRuns),
    on_duration_warning_threshold_exceeded: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onDurationWarningThresholdExceeded),
    on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onFailure),
    on_start: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onStart),
    on_streaming_backlog_exceeded: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onStreamingBacklogExceeded),
    on_success: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onSuccess),
  }
}


export function jobTaskEmailNotificationsToHclTerraform(struct?: JobTaskEmailNotificationsOutputReference | JobTaskEmailNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_alert_for_skipped_runs: {
      value: cdktf.booleanToHclTerraform(struct!.noAlertForSkippedRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_duration_warning_threshold_exceeded: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onDurationWarningThresholdExceeded),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_failure: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onFailure),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_start: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onStart),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_streaming_backlog_exceeded: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onStreamingBacklogExceeded),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_success: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onSuccess),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskEmailNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskEmailNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noAlertForSkippedRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAlertForSkippedRuns = this._noAlertForSkippedRuns;
    }
    if (this._onDurationWarningThresholdExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDurationWarningThresholdExceeded = this._onDurationWarningThresholdExceeded;
    }
    if (this._onFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure;
    }
    if (this._onStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStart = this._onStart;
    }
    if (this._onStreamingBacklogExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStreamingBacklogExceeded = this._onStreamingBacklogExceeded;
    }
    if (this._onSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskEmailNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noAlertForSkippedRuns = undefined;
      this._onDurationWarningThresholdExceeded = undefined;
      this._onFailure = undefined;
      this._onStart = undefined;
      this._onStreamingBacklogExceeded = undefined;
      this._onSuccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noAlertForSkippedRuns = value.noAlertForSkippedRuns;
      this._onDurationWarningThresholdExceeded = value.onDurationWarningThresholdExceeded;
      this._onFailure = value.onFailure;
      this._onStart = value.onStart;
      this._onStreamingBacklogExceeded = value.onStreamingBacklogExceeded;
      this._onSuccess = value.onSuccess;
    }
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

  // on_duration_warning_threshold_exceeded - computed: false, optional: true, required: false
  private _onDurationWarningThresholdExceeded?: string[]; 
  public get onDurationWarningThresholdExceeded() {
    return this.getListAttribute('on_duration_warning_threshold_exceeded');
  }
  public set onDurationWarningThresholdExceeded(value: string[]) {
    this._onDurationWarningThresholdExceeded = value;
  }
  public resetOnDurationWarningThresholdExceeded() {
    this._onDurationWarningThresholdExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDurationWarningThresholdExceededInput() {
    return this._onDurationWarningThresholdExceeded;
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: string[]; 
  public get onFailure() {
    return this.getListAttribute('on_failure');
  }
  public set onFailure(value: string[]) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
  }

  // on_start - computed: false, optional: true, required: false
  private _onStart?: string[]; 
  public get onStart() {
    return this.getListAttribute('on_start');
  }
  public set onStart(value: string[]) {
    this._onStart = value;
  }
  public resetOnStart() {
    this._onStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartInput() {
    return this._onStart;
  }

  // on_streaming_backlog_exceeded - computed: false, optional: true, required: false
  private _onStreamingBacklogExceeded?: string[]; 
  public get onStreamingBacklogExceeded() {
    return this.getListAttribute('on_streaming_backlog_exceeded');
  }
  public set onStreamingBacklogExceeded(value: string[]) {
    this._onStreamingBacklogExceeded = value;
  }
  public resetOnStreamingBacklogExceeded() {
    this._onStreamingBacklogExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStreamingBacklogExceededInput() {
    return this._onStreamingBacklogExceeded;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess?: string[]; 
  public get onSuccess() {
    return this.getListAttribute('on_success');
  }
  public set onSuccess(value: string[]) {
    this._onSuccess = value;
  }
  public resetOnSuccess() {
    this._onSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess;
  }
}
export interface JobTaskForEachTaskTaskCleanRoomsNotebookTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#clean_room_name Job#clean_room_name}
  */
  readonly cleanRoomName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#etag Job#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#notebook_base_parameters Job#notebook_base_parameters}
  */
  readonly notebookBaseParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#notebook_name Job#notebook_name}
  */
  readonly notebookName: string;
}

export function jobTaskForEachTaskTaskCleanRoomsNotebookTaskToTerraform(struct?: JobTaskForEachTaskTaskCleanRoomsNotebookTaskOutputReference | JobTaskForEachTaskTaskCleanRoomsNotebookTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clean_room_name: cdktf.stringToTerraform(struct!.cleanRoomName),
    etag: cdktf.stringToTerraform(struct!.etag),
    notebook_base_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.notebookBaseParameters),
    notebook_name: cdktf.stringToTerraform(struct!.notebookName),
  }
}


export function jobTaskForEachTaskTaskCleanRoomsNotebookTaskToHclTerraform(struct?: JobTaskForEachTaskTaskCleanRoomsNotebookTaskOutputReference | JobTaskForEachTaskTaskCleanRoomsNotebookTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clean_room_name: {
      value: cdktf.stringToHclTerraform(struct!.cleanRoomName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etag: {
      value: cdktf.stringToHclTerraform(struct!.etag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notebook_base_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.notebookBaseParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    notebook_name: {
      value: cdktf.stringToHclTerraform(struct!.notebookName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskCleanRoomsNotebookTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskCleanRoomsNotebookTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanRoomName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanRoomName = this._cleanRoomName;
    }
    if (this._etag !== undefined) {
      hasAnyValues = true;
      internalValueResult.etag = this._etag;
    }
    if (this._notebookBaseParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookBaseParameters = this._notebookBaseParameters;
    }
    if (this._notebookName !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookName = this._notebookName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskCleanRoomsNotebookTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleanRoomName = undefined;
      this._etag = undefined;
      this._notebookBaseParameters = undefined;
      this._notebookName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleanRoomName = value.cleanRoomName;
      this._etag = value.etag;
      this._notebookBaseParameters = value.notebookBaseParameters;
      this._notebookName = value.notebookName;
    }
  }

  // clean_room_name - computed: false, optional: false, required: true
  private _cleanRoomName?: string; 
  public get cleanRoomName() {
    return this.getStringAttribute('clean_room_name');
  }
  public set cleanRoomName(value: string) {
    this._cleanRoomName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanRoomNameInput() {
    return this._cleanRoomName;
  }

  // etag - computed: false, optional: true, required: false
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

  // notebook_base_parameters - computed: false, optional: true, required: false
  private _notebookBaseParameters?: { [key: string]: string }; 
  public get notebookBaseParameters() {
    return this.getStringMapAttribute('notebook_base_parameters');
  }
  public set notebookBaseParameters(value: { [key: string]: string }) {
    this._notebookBaseParameters = value;
  }
  public resetNotebookBaseParameters() {
    this._notebookBaseParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookBaseParametersInput() {
    return this._notebookBaseParameters;
  }

  // notebook_name - computed: false, optional: false, required: true
  private _notebookName?: string; 
  public get notebookName() {
    return this.getStringAttribute('notebook_name');
  }
  public set notebookName(value: string) {
    this._notebookName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookNameInput() {
    return this._notebookName;
  }
}
export interface JobTaskForEachTaskTaskConditionTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#left Job#left}
  */
  readonly left: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#op Job#op}
  */
  readonly op: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#right Job#right}
  */
  readonly right: string;
}

export function jobTaskForEachTaskTaskConditionTaskToTerraform(struct?: JobTaskForEachTaskTaskConditionTaskOutputReference | JobTaskForEachTaskTaskConditionTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    left: cdktf.stringToTerraform(struct!.left),
    op: cdktf.stringToTerraform(struct!.op),
    right: cdktf.stringToTerraform(struct!.right),
  }
}


export function jobTaskForEachTaskTaskConditionTaskToHclTerraform(struct?: JobTaskForEachTaskTaskConditionTaskOutputReference | JobTaskForEachTaskTaskConditionTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    left: {
      value: cdktf.stringToHclTerraform(struct!.left),
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
    right: {
      value: cdktf.stringToHclTerraform(struct!.right),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskConditionTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskConditionTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._right !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskConditionTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._left = undefined;
      this._op = undefined;
      this._right = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._left = value.left;
      this._op = value.op;
      this._right = value.right;
    }
  }

  // left - computed: false, optional: false, required: true
  private _left?: string; 
  public get left() {
    return this.getStringAttribute('left');
  }
  public set left(value: string) {
    this._left = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
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

  // right - computed: false, optional: false, required: true
  private _right?: string; 
  public get right() {
    return this.getStringAttribute('right');
  }
  public set right(value: string) {
    this._right = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right;
  }
}
export interface JobTaskForEachTaskTaskDbtTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#catalog Job#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#commands Job#commands}
  */
  readonly commands: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#profiles_directory Job#profiles_directory}
  */
  readonly profilesDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#project_directory Job#project_directory}
  */
  readonly projectDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#schema Job#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId?: string;
}

export function jobTaskForEachTaskTaskDbtTaskToTerraform(struct?: JobTaskForEachTaskTaskDbtTaskOutputReference | JobTaskForEachTaskTaskDbtTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    profiles_directory: cdktf.stringToTerraform(struct!.profilesDirectory),
    project_directory: cdktf.stringToTerraform(struct!.projectDirectory),
    schema: cdktf.stringToTerraform(struct!.schema),
    source: cdktf.stringToTerraform(struct!.source),
    warehouse_id: cdktf.stringToTerraform(struct!.warehouseId),
  }
}


export function jobTaskForEachTaskTaskDbtTaskToHclTerraform(struct?: JobTaskForEachTaskTaskDbtTaskOutputReference | JobTaskForEachTaskTaskDbtTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    profiles_directory: {
      value: cdktf.stringToHclTerraform(struct!.profilesDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_directory: {
      value: cdktf.stringToHclTerraform(struct!.projectDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
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

export class JobTaskForEachTaskTaskDbtTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskDbtTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._profilesDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilesDirectory = this._profilesDirectory;
    }
    if (this._projectDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectDirectory = this._projectDirectory;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
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

  public set internalValue(value: JobTaskForEachTaskTaskDbtTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._commands = undefined;
      this._profilesDirectory = undefined;
      this._projectDirectory = undefined;
      this._schema = undefined;
      this._source = undefined;
      this._warehouseId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._commands = value.commands;
      this._profilesDirectory = value.profilesDirectory;
      this._projectDirectory = value.projectDirectory;
      this._schema = value.schema;
      this._source = value.source;
      this._warehouseId = value.warehouseId;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // commands - computed: false, optional: false, required: true
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // profiles_directory - computed: false, optional: true, required: false
  private _profilesDirectory?: string; 
  public get profilesDirectory() {
    return this.getStringAttribute('profiles_directory');
  }
  public set profilesDirectory(value: string) {
    this._profilesDirectory = value;
  }
  public resetProfilesDirectory() {
    this._profilesDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesDirectoryInput() {
    return this._profilesDirectory;
  }

  // project_directory - computed: false, optional: true, required: false
  private _projectDirectory?: string; 
  public get projectDirectory() {
    return this.getStringAttribute('project_directory');
  }
  public set projectDirectory(value: string) {
    this._projectDirectory = value;
  }
  public resetProjectDirectory() {
    this._projectDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDirectoryInput() {
    return this._projectDirectory;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
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
export interface JobTaskForEachTaskTaskDependsOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#outcome Job#outcome}
  */
  readonly outcome?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#task_key Job#task_key}
  */
  readonly taskKey: string;
}

export function jobTaskForEachTaskTaskDependsOnToTerraform(struct?: JobTaskForEachTaskTaskDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    outcome: cdktf.stringToTerraform(struct!.outcome),
    task_key: cdktf.stringToTerraform(struct!.taskKey),
  }
}


export function jobTaskForEachTaskTaskDependsOnToHclTerraform(struct?: JobTaskForEachTaskTaskDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    outcome: {
      value: cdktf.stringToHclTerraform(struct!.outcome),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskDependsOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskDependsOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outcome !== undefined) {
      hasAnyValues = true;
      internalValueResult.outcome = this._outcome;
    }
    if (this._taskKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskKey = this._taskKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskDependsOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._outcome = undefined;
      this._taskKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._outcome = value.outcome;
      this._taskKey = value.taskKey;
    }
  }

  // outcome - computed: false, optional: true, required: false
  private _outcome?: string; 
  public get outcome() {
    return this.getStringAttribute('outcome');
  }
  public set outcome(value: string) {
    this._outcome = value;
  }
  public resetOutcome() {
    this._outcome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeInput() {
    return this._outcome;
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
}

export class JobTaskForEachTaskTaskDependsOnList extends cdktf.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskDependsOn[] | cdktf.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskDependsOnOutputReference {
    return new JobTaskForEachTaskTaskDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskEmailNotifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#no_alert_for_skipped_runs Job#no_alert_for_skipped_runs}
  */
  readonly noAlertForSkippedRuns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_duration_warning_threshold_exceeded Job#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_failure Job#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_start Job#on_start}
  */
  readonly onStart?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_streaming_backlog_exceeded Job#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#on_success Job#on_success}
  */
  readonly onSuccess?: string[];
}

export function jobTaskForEachTaskTaskEmailNotificationsToTerraform(struct?: JobTaskForEachTaskTaskEmailNotificationsOutputReference | JobTaskForEachTaskTaskEmailNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_alert_for_skipped_runs: cdktf.booleanToTerraform(struct!.noAlertForSkippedRuns),
    on_duration_warning_threshold_exceeded: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onDurationWarningThresholdExceeded),
    on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onFailure),
    on_start: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onStart),
    on_streaming_backlog_exceeded: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onStreamingBacklogExceeded),
    on_success: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onSuccess),
  }
}


export function jobTaskForEachTaskTaskEmailNotificationsToHclTerraform(struct?: JobTaskForEachTaskTaskEmailNotificationsOutputReference | JobTaskForEachTaskTaskEmailNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_alert_for_skipped_runs: {
      value: cdktf.booleanToHclTerraform(struct!.noAlertForSkippedRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_duration_warning_threshold_exceeded: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onDurationWarningThresholdExceeded),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_failure: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onFailure),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_start: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onStart),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_streaming_backlog_exceeded: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onStreamingBacklogExceeded),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_success: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onSuccess),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskEmailNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskEmailNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noAlertForSkippedRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAlertForSkippedRuns = this._noAlertForSkippedRuns;
    }
    if (this._onDurationWarningThresholdExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDurationWarningThresholdExceeded = this._onDurationWarningThresholdExceeded;
    }
    if (this._onFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure;
    }
    if (this._onStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStart = this._onStart;
    }
    if (this._onStreamingBacklogExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStreamingBacklogExceeded = this._onStreamingBacklogExceeded;
    }
    if (this._onSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskEmailNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noAlertForSkippedRuns = undefined;
      this._onDurationWarningThresholdExceeded = undefined;
      this._onFailure = undefined;
      this._onStart = undefined;
      this._onStreamingBacklogExceeded = undefined;
      this._onSuccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noAlertForSkippedRuns = value.noAlertForSkippedRuns;
      this._onDurationWarningThresholdExceeded = value.onDurationWarningThresholdExceeded;
      this._onFailure = value.onFailure;
      this._onStart = value.onStart;
      this._onStreamingBacklogExceeded = value.onStreamingBacklogExceeded;
      this._onSuccess = value.onSuccess;
    }
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

  // on_duration_warning_threshold_exceeded - computed: false, optional: true, required: false
  private _onDurationWarningThresholdExceeded?: string[]; 
  public get onDurationWarningThresholdExceeded() {
    return this.getListAttribute('on_duration_warning_threshold_exceeded');
  }
  public set onDurationWarningThresholdExceeded(value: string[]) {
    this._onDurationWarningThresholdExceeded = value;
  }
  public resetOnDurationWarningThresholdExceeded() {
    this._onDurationWarningThresholdExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDurationWarningThresholdExceededInput() {
    return this._onDurationWarningThresholdExceeded;
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: string[]; 
  public get onFailure() {
    return this.getListAttribute('on_failure');
  }
  public set onFailure(value: string[]) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
  }

  // on_start - computed: false, optional: true, required: false
  private _onStart?: string[]; 
  public get onStart() {
    return this.getListAttribute('on_start');
  }
  public set onStart(value: string[]) {
    this._onStart = value;
  }
  public resetOnStart() {
    this._onStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartInput() {
    return this._onStart;
  }

  // on_streaming_backlog_exceeded - computed: false, optional: true, required: false
  private _onStreamingBacklogExceeded?: string[]; 
  public get onStreamingBacklogExceeded() {
    return this.getListAttribute('on_streaming_backlog_exceeded');
  }
  public set onStreamingBacklogExceeded(value: string[]) {
    this._onStreamingBacklogExceeded = value;
  }
  public resetOnStreamingBacklogExceeded() {
    this._onStreamingBacklogExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStreamingBacklogExceededInput() {
    return this._onStreamingBacklogExceeded;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess?: string[]; 
  public get onSuccess() {
    return this.getListAttribute('on_success');
  }
  public set onSuccess(value: string[]) {
    this._onSuccess = value;
  }
  public resetOnSuccess() {
    this._onSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess;
  }
}
export interface JobTaskForEachTaskTaskGenAiComputeTaskCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#gpu_node_pool_id Job#gpu_node_pool_id}
  */
  readonly gpuNodePoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#gpu_type Job#gpu_type}
  */
  readonly gpuType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#num_gpus Job#num_gpus}
  */
  readonly numGpus: number;
}

export function jobTaskForEachTaskTaskGenAiComputeTaskComputeToTerraform(struct?: JobTaskForEachTaskTaskGenAiComputeTaskComputeOutputReference | JobTaskForEachTaskTaskGenAiComputeTaskCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_node_pool_id: cdktf.stringToTerraform(struct!.gpuNodePoolId),
    gpu_type: cdktf.stringToTerraform(struct!.gpuType),
    num_gpus: cdktf.numberToTerraform(struct!.numGpus),
  }
}


export function jobTaskForEachTaskTaskGenAiComputeTaskComputeToHclTerraform(struct?: JobTaskForEachTaskTaskGenAiComputeTaskComputeOutputReference | JobTaskForEachTaskTaskGenAiComputeTaskCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_node_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.gpuNodePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_type: {
      value: cdktf.stringToHclTerraform(struct!.gpuType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_gpus: {
      value: cdktf.numberToHclTerraform(struct!.numGpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskGenAiComputeTaskComputeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskGenAiComputeTaskCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuNodePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuNodePoolId = this._gpuNodePoolId;
    }
    if (this._gpuType !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuType = this._gpuType;
    }
    if (this._numGpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.numGpus = this._numGpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskGenAiComputeTaskCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuNodePoolId = undefined;
      this._gpuType = undefined;
      this._numGpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuNodePoolId = value.gpuNodePoolId;
      this._gpuType = value.gpuType;
      this._numGpus = value.numGpus;
    }
  }

  // gpu_node_pool_id - computed: false, optional: false, required: true
  private _gpuNodePoolId?: string; 
  public get gpuNodePoolId() {
    return this.getStringAttribute('gpu_node_pool_id');
  }
  public set gpuNodePoolId(value: string) {
    this._gpuNodePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuNodePoolIdInput() {
    return this._gpuNodePoolId;
  }

  // gpu_type - computed: false, optional: true, required: false
  private _gpuType?: string; 
  public get gpuType() {
    return this.getStringAttribute('gpu_type');
  }
  public set gpuType(value: string) {
    this._gpuType = value;
  }
  public resetGpuType() {
    this._gpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuTypeInput() {
    return this._gpuType;
  }

  // num_gpus - computed: false, optional: false, required: true
  private _numGpus?: number; 
  public get numGpus() {
    return this.getNumberAttribute('num_gpus');
  }
  public set numGpus(value: number) {
    this._numGpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numGpusInput() {
    return this._numGpus;
  }
}
export interface JobTaskForEachTaskTaskGenAiComputeTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#command Job#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#dl_runtime_image Job#dl_runtime_image}
  */
  readonly dlRuntimeImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#mlflow_experiment_name Job#mlflow_experiment_name}
  */
  readonly mlflowExperimentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#training_script_path Job#training_script_path}
  */
  readonly trainingScriptPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#yaml_parameters Job#yaml_parameters}
  */
  readonly yamlParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#yaml_parameters_file_path Job#yaml_parameters_file_path}
  */
  readonly yamlParametersFilePath?: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#compute Job#compute}
  */
  readonly compute?: JobTaskForEachTaskTaskGenAiComputeTaskCompute;
}

export function jobTaskForEachTaskTaskGenAiComputeTaskToTerraform(struct?: JobTaskForEachTaskTaskGenAiComputeTaskOutputReference | JobTaskForEachTaskTaskGenAiComputeTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    dl_runtime_image: cdktf.stringToTerraform(struct!.dlRuntimeImage),
    mlflow_experiment_name: cdktf.stringToTerraform(struct!.mlflowExperimentName),
    source: cdktf.stringToTerraform(struct!.source),
    training_script_path: cdktf.stringToTerraform(struct!.trainingScriptPath),
    yaml_parameters: cdktf.stringToTerraform(struct!.yamlParameters),
    yaml_parameters_file_path: cdktf.stringToTerraform(struct!.yamlParametersFilePath),
    compute: jobTaskForEachTaskTaskGenAiComputeTaskComputeToTerraform(struct!.compute),
  }
}


export function jobTaskForEachTaskTaskGenAiComputeTaskToHclTerraform(struct?: JobTaskForEachTaskTaskGenAiComputeTaskOutputReference | JobTaskForEachTaskTaskGenAiComputeTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dl_runtime_image: {
      value: cdktf.stringToHclTerraform(struct!.dlRuntimeImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mlflow_experiment_name: {
      value: cdktf.stringToHclTerraform(struct!.mlflowExperimentName),
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
    training_script_path: {
      value: cdktf.stringToHclTerraform(struct!.trainingScriptPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yaml_parameters: {
      value: cdktf.stringToHclTerraform(struct!.yamlParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yaml_parameters_file_path: {
      value: cdktf.stringToHclTerraform(struct!.yamlParametersFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute: {
      value: jobTaskForEachTaskTaskGenAiComputeTaskComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskGenAiComputeTaskComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskGenAiComputeTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskGenAiComputeTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._dlRuntimeImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlRuntimeImage = this._dlRuntimeImage;
    }
    if (this._mlflowExperimentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlflowExperimentName = this._mlflowExperimentName;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._trainingScriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingScriptPath = this._trainingScriptPath;
    }
    if (this._yamlParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.yamlParameters = this._yamlParameters;
    }
    if (this._yamlParametersFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.yamlParametersFilePath = this._yamlParametersFilePath;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskGenAiComputeTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._dlRuntimeImage = undefined;
      this._mlflowExperimentName = undefined;
      this._source = undefined;
      this._trainingScriptPath = undefined;
      this._yamlParameters = undefined;
      this._yamlParametersFilePath = undefined;
      this._compute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._dlRuntimeImage = value.dlRuntimeImage;
      this._mlflowExperimentName = value.mlflowExperimentName;
      this._source = value.source;
      this._trainingScriptPath = value.trainingScriptPath;
      this._yamlParameters = value.yamlParameters;
      this._yamlParametersFilePath = value.yamlParametersFilePath;
      this._compute.internalValue = value.compute;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // dl_runtime_image - computed: false, optional: false, required: true
  private _dlRuntimeImage?: string; 
  public get dlRuntimeImage() {
    return this.getStringAttribute('dl_runtime_image');
  }
  public set dlRuntimeImage(value: string) {
    this._dlRuntimeImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dlRuntimeImageInput() {
    return this._dlRuntimeImage;
  }

  // mlflow_experiment_name - computed: false, optional: true, required: false
  private _mlflowExperimentName?: string; 
  public get mlflowExperimentName() {
    return this.getStringAttribute('mlflow_experiment_name');
  }
  public set mlflowExperimentName(value: string) {
    this._mlflowExperimentName = value;
  }
  public resetMlflowExperimentName() {
    this._mlflowExperimentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlflowExperimentNameInput() {
    return this._mlflowExperimentName;
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

  // training_script_path - computed: false, optional: true, required: false
  private _trainingScriptPath?: string; 
  public get trainingScriptPath() {
    return this.getStringAttribute('training_script_path');
  }
  public set trainingScriptPath(value: string) {
    this._trainingScriptPath = value;
  }
  public resetTrainingScriptPath() {
    this._trainingScriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingScriptPathInput() {
    return this._trainingScriptPath;
  }

  // yaml_parameters - computed: false, optional: true, required: false
  private _yamlParameters?: string; 
  public get yamlParameters() {
    return this.getStringAttribute('yaml_parameters');
  }
  public set yamlParameters(value: string) {
    this._yamlParameters = value;
  }
  public resetYamlParameters() {
    this._yamlParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlParametersInput() {
    return this._yamlParameters;
  }

  // yaml_parameters_file_path - computed: false, optional: true, required: false
  private _yamlParametersFilePath?: string; 
  public get yamlParametersFilePath() {
    return this.getStringAttribute('yaml_parameters_file_path');
  }
  public set yamlParametersFilePath(value: string) {
    this._yamlParametersFilePath = value;
  }
  public resetYamlParametersFilePath() {
    this._yamlParametersFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlParametersFilePathInput() {
    return this._yamlParametersFilePath;
  }

  // compute - computed: false, optional: true, required: false
  private _compute = new JobTaskForEachTaskTaskGenAiComputeTaskComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: JobTaskForEachTaskTaskGenAiComputeTaskCompute) {
    this._compute.internalValue = value;
  }
  public resetCompute() {
    this._compute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }
}
export interface JobTaskForEachTaskTaskHealthRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#metric Job#metric}
  */
  readonly metric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#op Job#op}
  */
  readonly op: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#value Job#value}
  */
  readonly value: number;
}

export function jobTaskForEachTaskTaskHealthRulesToTerraform(struct?: JobTaskForEachTaskTaskHealthRules | cdktf.IResolvable): any {
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


export function jobTaskForEachTaskTaskHealthRulesToHclTerraform(struct?: JobTaskForEachTaskTaskHealthRules | cdktf.IResolvable): any {
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

export class JobTaskForEachTaskTaskHealthRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskHealthRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskHealthRules | cdktf.IResolvable | undefined) {
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

export class JobTaskForEachTaskTaskHealthRulesList extends cdktf.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskHealthRules[] | cdktf.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskHealthRulesOutputReference {
    return new JobTaskForEachTaskTaskHealthRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskHealth {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#rules Job#rules}
  */
  readonly rules: JobTaskForEachTaskTaskHealthRules[] | cdktf.IResolvable;
}

export function jobTaskForEachTaskTaskHealthToTerraform(struct?: JobTaskForEachTaskTaskHealthOutputReference | JobTaskForEachTaskTaskHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(jobTaskForEachTaskTaskHealthRulesToTerraform, true)(struct!.rules),
  }
}


export function jobTaskForEachTaskTaskHealthToHclTerraform(struct?: JobTaskForEachTaskTaskHealthOutputReference | JobTaskForEachTaskTaskHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(jobTaskForEachTaskTaskHealthRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskHealthRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskHealth | undefined) {
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
  private _rules = new JobTaskForEachTaskTaskHealthRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: JobTaskForEachTaskTaskHealthRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface JobTaskForEachTaskTaskLibraryCran {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskForEachTaskTaskLibraryCranToTerraform(struct?: JobTaskForEachTaskTaskLibraryCranOutputReference | JobTaskForEachTaskTaskLibraryCran): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function jobTaskForEachTaskTaskLibraryCranToHclTerraform(struct?: JobTaskForEachTaskTaskLibraryCranOutputReference | JobTaskForEachTaskTaskLibraryCran): any {
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

export class JobTaskForEachTaskTaskLibraryCranOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskLibraryCran | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskLibraryCran | undefined) {
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
export interface JobTaskForEachTaskTaskLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#coordinates Job#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#exclusions Job#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskForEachTaskTaskLibraryMavenToTerraform(struct?: JobTaskForEachTaskTaskLibraryMavenOutputReference | JobTaskForEachTaskTaskLibraryMaven): any {
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


export function jobTaskForEachTaskTaskLibraryMavenToHclTerraform(struct?: JobTaskForEachTaskTaskLibraryMavenOutputReference | JobTaskForEachTaskTaskLibraryMaven): any {
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

export class JobTaskForEachTaskTaskLibraryMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskLibraryMaven | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskLibraryMaven | undefined) {
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
export interface JobTaskForEachTaskTaskLibraryPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskForEachTaskTaskLibraryPypiToTerraform(struct?: JobTaskForEachTaskTaskLibraryPypiOutputReference | JobTaskForEachTaskTaskLibraryPypi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function jobTaskForEachTaskTaskLibraryPypiToHclTerraform(struct?: JobTaskForEachTaskTaskLibraryPypiOutputReference | JobTaskForEachTaskTaskLibraryPypi): any {
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

export class JobTaskForEachTaskTaskLibraryPypiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskLibraryPypi | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskLibraryPypi | undefined) {
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
export interface JobTaskForEachTaskTaskLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#egg Job#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#jar Job#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#requirements Job#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#whl Job#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#cran Job#cran}
  */
  readonly cran?: JobTaskForEachTaskTaskLibraryCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#maven Job#maven}
  */
  readonly maven?: JobTaskForEachTaskTaskLibraryMaven;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#pypi Job#pypi}
  */
  readonly pypi?: JobTaskForEachTaskTaskLibraryPypi;
}

export function jobTaskForEachTaskTaskLibraryToTerraform(struct?: JobTaskForEachTaskTaskLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egg: cdktf.stringToTerraform(struct!.egg),
    jar: cdktf.stringToTerraform(struct!.jar),
    requirements: cdktf.stringToTerraform(struct!.requirements),
    whl: cdktf.stringToTerraform(struct!.whl),
    cran: jobTaskForEachTaskTaskLibraryCranToTerraform(struct!.cran),
    maven: jobTaskForEachTaskTaskLibraryMavenToTerraform(struct!.maven),
    pypi: jobTaskForEachTaskTaskLibraryPypiToTerraform(struct!.pypi),
  }
}


export function jobTaskForEachTaskTaskLibraryToHclTerraform(struct?: JobTaskForEachTaskTaskLibrary | cdktf.IResolvable): any {
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
      value: jobTaskForEachTaskTaskLibraryCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskLibraryCranList",
    },
    maven: {
      value: jobTaskForEachTaskTaskLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskLibraryMavenList",
    },
    pypi: {
      value: jobTaskForEachTaskTaskLibraryPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskLibraryPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskLibraryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskLibrary | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskLibrary | cdktf.IResolvable | undefined) {
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
  private _cran = new JobTaskForEachTaskTaskLibraryCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: JobTaskForEachTaskTaskLibraryCran) {
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
  private _maven = new JobTaskForEachTaskTaskLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: JobTaskForEachTaskTaskLibraryMaven) {
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
  private _pypi = new JobTaskForEachTaskTaskLibraryPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: JobTaskForEachTaskTaskLibraryPypi) {
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

export class JobTaskForEachTaskTaskLibraryList extends cdktf.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskLibrary[] | cdktf.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskLibraryOutputReference {
    return new JobTaskForEachTaskTaskLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskNewClusterAutoscale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#max_workers Job#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#min_workers Job#min_workers}
  */
  readonly minWorkers?: number;
}

export function jobTaskForEachTaskTaskNewClusterAutoscaleToTerraform(struct?: JobTaskForEachTaskTaskNewClusterAutoscaleOutputReference | JobTaskForEachTaskTaskNewClusterAutoscale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktf.numberToTerraform(struct!.maxWorkers),
    min_workers: cdktf.numberToTerraform(struct!.minWorkers),
  }
}


export function jobTaskForEachTaskTaskNewClusterAutoscaleToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterAutoscaleOutputReference | JobTaskForEachTaskTaskNewClusterAutoscale): any {
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

export class JobTaskForEachTaskTaskNewClusterAutoscaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterAutoscale | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterAutoscale | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_count Job#ebs_volume_count}
  */
  readonly ebsVolumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_iops Job#ebs_volume_iops}
  */
  readonly ebsVolumeIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_size Job#ebs_volume_size}
  */
  readonly ebsVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_throughput Job#ebs_volume_throughput}
  */
  readonly ebsVolumeThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#ebs_volume_type Job#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#instance_profile_arn Job#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#spot_bid_price_percent Job#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#zone_id Job#zone_id}
  */
  readonly zoneId?: string;
}

export function jobTaskForEachTaskTaskNewClusterAwsAttributesToTerraform(struct?: JobTaskForEachTaskTaskNewClusterAwsAttributesOutputReference | JobTaskForEachTaskTaskNewClusterAwsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    ebs_volume_count: cdktf.numberToTerraform(struct!.ebsVolumeCount),
    ebs_volume_iops: cdktf.numberToTerraform(struct!.ebsVolumeIops),
    ebs_volume_size: cdktf.numberToTerraform(struct!.ebsVolumeSize),
    ebs_volume_throughput: cdktf.numberToTerraform(struct!.ebsVolumeThroughput),
    ebs_volume_type: cdktf.stringToTerraform(struct!.ebsVolumeType),
    first_on_demand: cdktf.numberToTerraform(struct!.firstOnDemand),
    instance_profile_arn: cdktf.stringToTerraform(struct!.instanceProfileArn),
    spot_bid_price_percent: cdktf.numberToTerraform(struct!.spotBidPricePercent),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function jobTaskForEachTaskTaskNewClusterAwsAttributesToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterAwsAttributesOutputReference | JobTaskForEachTaskTaskNewClusterAwsAttributes): any {
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
    ebs_volume_iops: {
      value: cdktf.numberToHclTerraform(struct!.ebsVolumeIops),
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
    ebs_volume_throughput: {
      value: cdktf.numberToHclTerraform(struct!.ebsVolumeThroughput),
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

export class JobTaskForEachTaskTaskNewClusterAwsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterAwsAttributes | undefined {
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
    if (this._ebsVolumeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeIops = this._ebsVolumeIops;
    }
    if (this._ebsVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeSize = this._ebsVolumeSize;
    }
    if (this._ebsVolumeThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeThroughput = this._ebsVolumeThroughput;
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterAwsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._ebsVolumeCount = undefined;
      this._ebsVolumeIops = undefined;
      this._ebsVolumeSize = undefined;
      this._ebsVolumeThroughput = undefined;
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
      this._ebsVolumeIops = value.ebsVolumeIops;
      this._ebsVolumeSize = value.ebsVolumeSize;
      this._ebsVolumeThroughput = value.ebsVolumeThroughput;
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

  // ebs_volume_iops - computed: false, optional: true, required: false
  private _ebsVolumeIops?: number; 
  public get ebsVolumeIops() {
    return this.getNumberAttribute('ebs_volume_iops');
  }
  public set ebsVolumeIops(value: number) {
    this._ebsVolumeIops = value;
  }
  public resetEbsVolumeIops() {
    this._ebsVolumeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeIopsInput() {
    return this._ebsVolumeIops;
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

  // ebs_volume_throughput - computed: false, optional: true, required: false
  private _ebsVolumeThroughput?: number; 
  public get ebsVolumeThroughput() {
    return this.getNumberAttribute('ebs_volume_throughput');
  }
  public set ebsVolumeThroughput(value: number) {
    this._ebsVolumeThroughput = value;
  }
  public resetEbsVolumeThroughput() {
    this._ebsVolumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeThroughputInput() {
    return this._ebsVolumeThroughput;
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
export interface JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#log_analytics_primary_key Job#log_analytics_primary_key}
  */
  readonly logAnalyticsPrimaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#log_analytics_workspace_id Job#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
}

export function jobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoToTerraform(struct?: JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference | JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_primary_key: cdktf.stringToTerraform(struct!.logAnalyticsPrimaryKey),
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}


export function jobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference | JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_primary_key: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsPrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_analytics_workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsPrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsPrimaryKey = this._logAnalyticsPrimaryKey;
    }
    if (this._logAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceId = this._logAnalyticsWorkspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalyticsPrimaryKey = undefined;
      this._logAnalyticsWorkspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalyticsPrimaryKey = value.logAnalyticsPrimaryKey;
      this._logAnalyticsWorkspaceId = value.logAnalyticsWorkspaceId;
    }
  }

  // log_analytics_primary_key - computed: false, optional: true, required: false
  private _logAnalyticsPrimaryKey?: string; 
  public get logAnalyticsPrimaryKey() {
    return this.getStringAttribute('log_analytics_primary_key');
  }
  public set logAnalyticsPrimaryKey(value: string) {
    this._logAnalyticsPrimaryKey = value;
  }
  public resetLogAnalyticsPrimaryKey() {
    this._logAnalyticsPrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsPrimaryKeyInput() {
    return this._logAnalyticsPrimaryKey;
  }

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }
}
export interface JobTaskForEachTaskTaskNewClusterAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#spot_bid_max_price Job#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
  /**
  * log_analytics_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#log_analytics_info Job#log_analytics_info}
  */
  readonly logAnalyticsInfo?: JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfo;
}

export function jobTaskForEachTaskTaskNewClusterAzureAttributesToTerraform(struct?: JobTaskForEachTaskTaskNewClusterAzureAttributesOutputReference | JobTaskForEachTaskTaskNewClusterAzureAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    first_on_demand: cdktf.numberToTerraform(struct!.firstOnDemand),
    spot_bid_max_price: cdktf.numberToTerraform(struct!.spotBidMaxPrice),
    log_analytics_info: jobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoToTerraform(struct!.logAnalyticsInfo),
  }
}


export function jobTaskForEachTaskTaskNewClusterAzureAttributesToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterAzureAttributesOutputReference | JobTaskForEachTaskTaskNewClusterAzureAttributes): any {
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
    log_analytics_info: {
      value: jobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoToHclTerraform(struct!.logAnalyticsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterAzureAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterAzureAttributes | undefined {
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
    if (this._logAnalyticsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsInfo = this._logAnalyticsInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterAzureAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._firstOnDemand = undefined;
      this._spotBidMaxPrice = undefined;
      this._logAnalyticsInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._firstOnDemand = value.firstOnDemand;
      this._spotBidMaxPrice = value.spotBidMaxPrice;
      this._logAnalyticsInfo.internalValue = value.logAnalyticsInfo;
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

  // log_analytics_info - computed: false, optional: true, required: false
  private _logAnalyticsInfo = new JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference(this, "log_analytics_info");
  public get logAnalyticsInfo() {
    return this._logAnalyticsInfo;
  }
  public putLogAnalyticsInfo(value: JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfo) {
    this._logAnalyticsInfo.internalValue = value;
  }
  public resetLogAnalyticsInfo() {
    this._logAnalyticsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsInfoInput() {
    return this._logAnalyticsInfo.internalValue;
  }
}
export interface JobTaskForEachTaskTaskNewClusterClusterLogConfDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterClusterLogConfDbfsToTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfDbfsOutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConfDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterClusterLogConfDbfsToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfDbfsOutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConfDbfs): any {
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

export class JobTaskForEachTaskTaskNewClusterClusterLogConfDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterClusterLogConfDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterClusterLogConfDbfs | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterClusterLogConfS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#canned_acl Job#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#enable_encryption Job#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#encryption_type Job#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#endpoint Job#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#kms_key Job#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#region Job#region}
  */
  readonly region?: string;
}

export function jobTaskForEachTaskTaskNewClusterClusterLogConfS3ToTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfS3OutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConfS3): any {
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


export function jobTaskForEachTaskTaskNewClusterClusterLogConfS3ToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfS3OutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConfS3): any {
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

export class JobTaskForEachTaskTaskNewClusterClusterLogConfS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterClusterLogConfS3 | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterClusterLogConfS3 | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterClusterLogConfVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterClusterLogConfVolumesToTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfVolumesOutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConfVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterClusterLogConfVolumesToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfVolumesOutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConfVolumes): any {
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

export class JobTaskForEachTaskTaskNewClusterClusterLogConfVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterClusterLogConfVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterClusterLogConfVolumes | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterClusterLogConf {
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#dbfs Job#dbfs}
  */
  readonly dbfs?: JobTaskForEachTaskTaskNewClusterClusterLogConfDbfs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#s3 Job#s3}
  */
  readonly s3?: JobTaskForEachTaskTaskNewClusterClusterLogConfS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#volumes Job#volumes}
  */
  readonly volumes?: JobTaskForEachTaskTaskNewClusterClusterLogConfVolumes;
}

export function jobTaskForEachTaskTaskNewClusterClusterLogConfToTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfOutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbfs: jobTaskForEachTaskTaskNewClusterClusterLogConfDbfsToTerraform(struct!.dbfs),
    s3: jobTaskForEachTaskTaskNewClusterClusterLogConfS3ToTerraform(struct!.s3),
    volumes: jobTaskForEachTaskTaskNewClusterClusterLogConfVolumesToTerraform(struct!.volumes),
  }
}


export function jobTaskForEachTaskTaskNewClusterClusterLogConfToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfOutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbfs: {
      value: jobTaskForEachTaskTaskNewClusterClusterLogConfDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterClusterLogConfDbfsList",
    },
    s3: {
      value: jobTaskForEachTaskTaskNewClusterClusterLogConfS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterClusterLogConfS3List",
    },
    volumes: {
      value: jobTaskForEachTaskTaskNewClusterClusterLogConfVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterClusterLogConfVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterClusterLogConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterClusterLogConf | undefined {
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
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterClusterLogConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbfs.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbfs.internalValue = value.dbfs;
      this._s3.internalValue = value.s3;
      this._volumes.internalValue = value.volumes;
    }
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new JobTaskForEachTaskTaskNewClusterClusterLogConfDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: JobTaskForEachTaskTaskNewClusterClusterLogConfDbfs) {
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
  private _s3 = new JobTaskForEachTaskTaskNewClusterClusterLogConfS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: JobTaskForEachTaskTaskNewClusterClusterLogConfS3) {
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
  private _volumes = new JobTaskForEachTaskTaskNewClusterClusterLogConfVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: JobTaskForEachTaskTaskNewClusterClusterLogConfVolumes) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#mount_options Job#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#server_address Job#server_address}
  */
  readonly serverAddress: string;
}

export function jobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoToTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference | JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_options: cdktf.stringToTerraform(struct!.mountOptions),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
  }
}


export function jobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference | JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfo): any {
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

export class JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfo | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfo | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterClusterMountInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#local_mount_dir_path Job#local_mount_dir_path}
  */
  readonly localMountDirPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#remote_mount_dir_path Job#remote_mount_dir_path}
  */
  readonly remoteMountDirPath?: string;
  /**
  * network_filesystem_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#network_filesystem_info Job#network_filesystem_info}
  */
  readonly networkFilesystemInfo: JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfo;
}

export function jobTaskForEachTaskTaskNewClusterClusterMountInfoToTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterMountInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_mount_dir_path: cdktf.stringToTerraform(struct!.localMountDirPath),
    remote_mount_dir_path: cdktf.stringToTerraform(struct!.remoteMountDirPath),
    network_filesystem_info: jobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoToTerraform(struct!.networkFilesystemInfo),
  }
}


export function jobTaskForEachTaskTaskNewClusterClusterMountInfoToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterMountInfo | cdktf.IResolvable): any {
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
      value: jobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct!.networkFilesystemInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterClusterMountInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskNewClusterClusterMountInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterClusterMountInfo | cdktf.IResolvable | undefined) {
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
  private _networkFilesystemInfo = new JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference(this, "network_filesystem_info");
  public get networkFilesystemInfo() {
    return this._networkFilesystemInfo;
  }
  public putNetworkFilesystemInfo(value: JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfo) {
    this._networkFilesystemInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFilesystemInfoInput() {
    return this._networkFilesystemInfo.internalValue;
  }
}

export class JobTaskForEachTaskTaskNewClusterClusterMountInfoList extends cdktf.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskNewClusterClusterMountInfo[] | cdktf.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskNewClusterClusterMountInfoOutputReference {
    return new JobTaskForEachTaskTaskNewClusterClusterMountInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskNewClusterDockerImageBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#password Job#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#username Job#username}
  */
  readonly username: string;
}

export function jobTaskForEachTaskTaskNewClusterDockerImageBasicAuthToTerraform(struct?: JobTaskForEachTaskTaskNewClusterDockerImageBasicAuthOutputReference | JobTaskForEachTaskTaskNewClusterDockerImageBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function jobTaskForEachTaskTaskNewClusterDockerImageBasicAuthToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterDockerImageBasicAuthOutputReference | JobTaskForEachTaskTaskNewClusterDockerImageBasicAuth): any {
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

export class JobTaskForEachTaskTaskNewClusterDockerImageBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterDockerImageBasicAuth | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterDockerImageBasicAuth | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterDockerImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#url Job#url}
  */
  readonly url: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#basic_auth Job#basic_auth}
  */
  readonly basicAuth?: JobTaskForEachTaskTaskNewClusterDockerImageBasicAuth;
}

export function jobTaskForEachTaskTaskNewClusterDockerImageToTerraform(struct?: JobTaskForEachTaskTaskNewClusterDockerImageOutputReference | JobTaskForEachTaskTaskNewClusterDockerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    basic_auth: jobTaskForEachTaskTaskNewClusterDockerImageBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function jobTaskForEachTaskTaskNewClusterDockerImageToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterDockerImageOutputReference | JobTaskForEachTaskTaskNewClusterDockerImage): any {
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
      value: jobTaskForEachTaskTaskNewClusterDockerImageBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterDockerImageBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterDockerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterDockerImage | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterDockerImage | undefined) {
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
  private _basicAuth = new JobTaskForEachTaskTaskNewClusterDockerImageBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: JobTaskForEachTaskTaskNewClusterDockerImageBasicAuth) {
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
export interface JobTaskForEachTaskTaskNewClusterGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#boot_disk_size Job#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#google_service_account Job#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#local_ssd_count Job#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#use_preemptible_executors Job#use_preemptible_executors}
  */
  readonly usePreemptibleExecutors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#zone_id Job#zone_id}
  */
  readonly zoneId?: string;
}

export function jobTaskForEachTaskTaskNewClusterGcpAttributesToTerraform(struct?: JobTaskForEachTaskTaskNewClusterGcpAttributesOutputReference | JobTaskForEachTaskTaskNewClusterGcpAttributes): any {
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


export function jobTaskForEachTaskTaskNewClusterGcpAttributesToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterGcpAttributesOutputReference | JobTaskForEachTaskTaskNewClusterGcpAttributes): any {
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

export class JobTaskForEachTaskTaskNewClusterGcpAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterGcpAttributes | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterGcpAttributes | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterInitScriptsAbfss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsAbfssToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsAbfssOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsAbfss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsAbfssToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsAbfssOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsAbfss): any {
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

export class JobTaskForEachTaskTaskNewClusterInitScriptsAbfssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScriptsAbfss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScriptsAbfss | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterInitScriptsDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsDbfsToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsDbfsOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsDbfsToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsDbfsOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsDbfs): any {
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

export class JobTaskForEachTaskTaskNewClusterInitScriptsDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScriptsDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScriptsDbfs | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterInitScriptsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsFileToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsFileOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsFileToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsFileOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsFile): any {
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

export class JobTaskForEachTaskTaskNewClusterInitScriptsFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScriptsFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScriptsFile | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterInitScriptsGcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsGcsToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsGcsOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsGcsToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsGcsOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsGcs): any {
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

export class JobTaskForEachTaskTaskNewClusterInitScriptsGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScriptsGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScriptsGcs | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterInitScriptsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#canned_acl Job#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#enable_encryption Job#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#encryption_type Job#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#endpoint Job#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#kms_key Job#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#region Job#region}
  */
  readonly region?: string;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsS3ToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsS3OutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsS3): any {
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


export function jobTaskForEachTaskTaskNewClusterInitScriptsS3ToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsS3OutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsS3): any {
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

export class JobTaskForEachTaskTaskNewClusterInitScriptsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScriptsS3 | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScriptsS3 | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterInitScriptsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsVolumesToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsVolumesOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsVolumesToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsVolumesOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsVolumes): any {
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

export class JobTaskForEachTaskTaskNewClusterInitScriptsVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScriptsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScriptsVolumes | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterInitScriptsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsWorkspace): any {
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

export class JobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScriptsWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScriptsWorkspace | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterInitScripts {
  /**
  * abfss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#abfss Job#abfss}
  */
  readonly abfss?: JobTaskForEachTaskTaskNewClusterInitScriptsAbfss;
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#dbfs Job#dbfs}
  */
  readonly dbfs?: JobTaskForEachTaskTaskNewClusterInitScriptsDbfs;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#file Job#file}
  */
  readonly file?: JobTaskForEachTaskTaskNewClusterInitScriptsFile;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#gcs Job#gcs}
  */
  readonly gcs?: JobTaskForEachTaskTaskNewClusterInitScriptsGcs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#s3 Job#s3}
  */
  readonly s3?: JobTaskForEachTaskTaskNewClusterInitScriptsS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#volumes Job#volumes}
  */
  readonly volumes?: JobTaskForEachTaskTaskNewClusterInitScriptsVolumes;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#workspace Job#workspace}
  */
  readonly workspace?: JobTaskForEachTaskTaskNewClusterInitScriptsWorkspace;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abfss: jobTaskForEachTaskTaskNewClusterInitScriptsAbfssToTerraform(struct!.abfss),
    dbfs: jobTaskForEachTaskTaskNewClusterInitScriptsDbfsToTerraform(struct!.dbfs),
    file: jobTaskForEachTaskTaskNewClusterInitScriptsFileToTerraform(struct!.file),
    gcs: jobTaskForEachTaskTaskNewClusterInitScriptsGcsToTerraform(struct!.gcs),
    s3: jobTaskForEachTaskTaskNewClusterInitScriptsS3ToTerraform(struct!.s3),
    volumes: jobTaskForEachTaskTaskNewClusterInitScriptsVolumesToTerraform(struct!.volumes),
    workspace: jobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceToTerraform(struct!.workspace),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abfss: {
      value: jobTaskForEachTaskTaskNewClusterInitScriptsAbfssToHclTerraform(struct!.abfss),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsAbfssList",
    },
    dbfs: {
      value: jobTaskForEachTaskTaskNewClusterInitScriptsDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsDbfsList",
    },
    file: {
      value: jobTaskForEachTaskTaskNewClusterInitScriptsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsFileList",
    },
    gcs: {
      value: jobTaskForEachTaskTaskNewClusterInitScriptsGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsGcsList",
    },
    s3: {
      value: jobTaskForEachTaskTaskNewClusterInitScriptsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsS3List",
    },
    volumes: {
      value: jobTaskForEachTaskTaskNewClusterInitScriptsVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsVolumesList",
    },
    workspace: {
      value: jobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterInitScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScripts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScripts | cdktf.IResolvable | undefined) {
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
  private _abfss = new JobTaskForEachTaskTaskNewClusterInitScriptsAbfssOutputReference(this, "abfss");
  public get abfss() {
    return this._abfss;
  }
  public putAbfss(value: JobTaskForEachTaskTaskNewClusterInitScriptsAbfss) {
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
  private _dbfs = new JobTaskForEachTaskTaskNewClusterInitScriptsDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: JobTaskForEachTaskTaskNewClusterInitScriptsDbfs) {
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
  private _file = new JobTaskForEachTaskTaskNewClusterInitScriptsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: JobTaskForEachTaskTaskNewClusterInitScriptsFile) {
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
  private _gcs = new JobTaskForEachTaskTaskNewClusterInitScriptsGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: JobTaskForEachTaskTaskNewClusterInitScriptsGcs) {
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
  private _s3 = new JobTaskForEachTaskTaskNewClusterInitScriptsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: JobTaskForEachTaskTaskNewClusterInitScriptsS3) {
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
  private _volumes = new JobTaskForEachTaskTaskNewClusterInitScriptsVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: JobTaskForEachTaskTaskNewClusterInitScriptsVolumes) {
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
  private _workspace = new JobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: JobTaskForEachTaskTaskNewClusterInitScriptsWorkspace) {
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

export class JobTaskForEachTaskTaskNewClusterInitScriptsList extends cdktf.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskNewClusterInitScripts[] | cdktf.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskNewClusterInitScriptsOutputReference {
    return new JobTaskForEachTaskTaskNewClusterInitScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskNewClusterLibraryCran {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskForEachTaskTaskNewClusterLibraryCranToTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibraryCranOutputReference | JobTaskForEachTaskTaskNewClusterLibraryCran): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function jobTaskForEachTaskTaskNewClusterLibraryCranToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibraryCranOutputReference | JobTaskForEachTaskTaskNewClusterLibraryCran): any {
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

export class JobTaskForEachTaskTaskNewClusterLibraryCranOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterLibraryCran | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterLibraryCran | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#coordinates Job#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#exclusions Job#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskForEachTaskTaskNewClusterLibraryMavenToTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibraryMavenOutputReference | JobTaskForEachTaskTaskNewClusterLibraryMaven): any {
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


export function jobTaskForEachTaskTaskNewClusterLibraryMavenToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibraryMavenOutputReference | JobTaskForEachTaskTaskNewClusterLibraryMaven): any {
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

export class JobTaskForEachTaskTaskNewClusterLibraryMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterLibraryMaven | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterLibraryMaven | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterLibraryPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskForEachTaskTaskNewClusterLibraryPypiToTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibraryPypiOutputReference | JobTaskForEachTaskTaskNewClusterLibraryPypi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function jobTaskForEachTaskTaskNewClusterLibraryPypiToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibraryPypiOutputReference | JobTaskForEachTaskTaskNewClusterLibraryPypi): any {
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

export class JobTaskForEachTaskTaskNewClusterLibraryPypiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterLibraryPypi | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterLibraryPypi | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#egg Job#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#jar Job#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#requirements Job#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#whl Job#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#cran Job#cran}
  */
  readonly cran?: JobTaskForEachTaskTaskNewClusterLibraryCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#maven Job#maven}
  */
  readonly maven?: JobTaskForEachTaskTaskNewClusterLibraryMaven;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/job#pypi Job#pypi}
  */
  readonly pypi?: JobTaskForEachTaskTaskNewClusterLibraryPypi;
}

export function jobTaskForEachTaskTaskNewClusterLibraryToTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egg: cdktf.stringToTerraform(struct!.egg),
    jar: cdktf.stringToTerraform(struct!.jar),
    requirements: cdktf.stringToTerraform(struct!.requirements),
    whl: cdktf.stringToTerraform(struct!.whl),
    cran: jobTaskForEachTaskTaskNewClusterLibraryCranToTerraform(struct!.cran),
    maven: jobTaskForEachTaskTaskNewClusterLibraryMavenToTerraform(struct!.maven),
    pypi: jobTaskForEachTaskTaskNewClusterLibraryPypiToTerraform(struct!.pypi),
  }
}


export function jobTaskForEachTaskTaskNewClusterLibraryToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibrary | cdktf.IResolvable): any {
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
      value: jobTaskForEachTaskTaskNewClusterLibraryCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterLibraryCranList",
    },
    maven: {
      value: jobTaskForEachTaskTaskNewClusterLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterLibraryMavenList",
    },
    pypi: {
      value: jobTaskForEachTaskTaskNewClusterLibraryPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterLibraryPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterLibraryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskNewClusterLibrary | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterLibrary | cdktf.IResolvable | undefined) {
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
  private _cran = new JobTaskForEachTaskTaskNewClusterLibraryCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: JobTaskForEachTaskTaskNewClusterLibraryCran) {
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
  private _maven = new JobTaskForEachTaskTaskNewClusterLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: JobTaskForEachTaskTaskNewClusterLibraryMaven) {
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
  private _pypi = new JobTaskForEachTaskTaskNewClusterLibraryPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: JobTaskForEachTaskTaskNewClusterLibraryPypi) {
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

export class JobTaskForEachTaskTaskNewClusterLibraryList extends cdktf.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskNewClusterLibrary[] | cdktf.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskNewClusterLibraryOutputReference {
    return new JobTaskForEachTaskTaskNewClusterLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
