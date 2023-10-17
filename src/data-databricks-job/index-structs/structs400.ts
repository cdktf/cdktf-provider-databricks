/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { DataDatabricksJobJobSettingsSettings,
dataDatabricksJobJobSettingsSettingsToTerraform,
DataDatabricksJobJobSettingsSettingsOutputReference } from './structs0'
export interface DataDatabricksJobJobSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/data-sources/job#created_time DataDatabricksJob#created_time}
  */
  readonly createdTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/data-sources/job#creator_user_name DataDatabricksJob#creator_user_name}
  */
  readonly creatorUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/data-sources/job#job_id DataDatabricksJob#job_id}
  */
  readonly jobId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/data-sources/job#run_as_user_name DataDatabricksJob#run_as_user_name}
  */
  readonly runAsUserName?: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/data-sources/job#settings DataDatabricksJob#settings}
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
