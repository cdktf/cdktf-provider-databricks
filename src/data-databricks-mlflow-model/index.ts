// https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksMlflowModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#description DataDatabricksMlflowModel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#name DataDatabricksMlflowModel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#permission_level DataDatabricksMlflowModel#permission_level}
  */
  readonly permissionLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#user_id DataDatabricksMlflowModel#user_id}
  */
  readonly userId?: string;
  /**
  * latest_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#latest_versions DataDatabricksMlflowModel#latest_versions}
  */
  readonly latestVersions?: DataDatabricksMlflowModelLatestVersions[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#tags DataDatabricksMlflowModel#tags}
  */
  readonly tags?: DataDatabricksMlflowModelTags[] | cdktf.IResolvable;
}
export interface DataDatabricksMlflowModelLatestVersionsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#key DataDatabricksMlflowModel#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#value DataDatabricksMlflowModel#value}
  */
  readonly value?: string;
}

export function dataDatabricksMlflowModelLatestVersionsTagsToTerraform(struct?: DataDatabricksMlflowModelLatestVersionsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksMlflowModelLatestVersionsTagsToHclTerraform(struct?: DataDatabricksMlflowModelLatestVersionsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataDatabricksMlflowModelLatestVersionsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksMlflowModelLatestVersionsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksMlflowModelLatestVersionsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class DataDatabricksMlflowModelLatestVersionsTagsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksMlflowModelLatestVersionsTags[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksMlflowModelLatestVersionsTagsOutputReference {
    return new DataDatabricksMlflowModelLatestVersionsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksMlflowModelLatestVersions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#creation_timestamp DataDatabricksMlflowModel#creation_timestamp}
  */
  readonly creationTimestamp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#current_stage DataDatabricksMlflowModel#current_stage}
  */
  readonly currentStage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#description DataDatabricksMlflowModel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#last_updated_timestamp DataDatabricksMlflowModel#last_updated_timestamp}
  */
  readonly lastUpdatedTimestamp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#name DataDatabricksMlflowModel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#run_id DataDatabricksMlflowModel#run_id}
  */
  readonly runId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#run_link DataDatabricksMlflowModel#run_link}
  */
  readonly runLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#source DataDatabricksMlflowModel#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#status DataDatabricksMlflowModel#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#status_message DataDatabricksMlflowModel#status_message}
  */
  readonly statusMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#user_id DataDatabricksMlflowModel#user_id}
  */
  readonly userId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#version DataDatabricksMlflowModel#version}
  */
  readonly version?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#tags DataDatabricksMlflowModel#tags}
  */
  readonly tags?: DataDatabricksMlflowModelLatestVersionsTags[] | cdktf.IResolvable;
}

export function dataDatabricksMlflowModelLatestVersionsToTerraform(struct?: DataDatabricksMlflowModelLatestVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation_timestamp: cdktf.numberToTerraform(struct!.creationTimestamp),
    current_stage: cdktf.stringToTerraform(struct!.currentStage),
    description: cdktf.stringToTerraform(struct!.description),
    last_updated_timestamp: cdktf.numberToTerraform(struct!.lastUpdatedTimestamp),
    name: cdktf.stringToTerraform(struct!.name),
    run_id: cdktf.stringToTerraform(struct!.runId),
    run_link: cdktf.stringToTerraform(struct!.runLink),
    source: cdktf.stringToTerraform(struct!.source),
    status: cdktf.stringToTerraform(struct!.status),
    status_message: cdktf.stringToTerraform(struct!.statusMessage),
    user_id: cdktf.stringToTerraform(struct!.userId),
    version: cdktf.stringToTerraform(struct!.version),
    tags: cdktf.listMapper(dataDatabricksMlflowModelLatestVersionsTagsToTerraform, true)(struct!.tags),
  }
}


export function dataDatabricksMlflowModelLatestVersionsToHclTerraform(struct?: DataDatabricksMlflowModelLatestVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation_timestamp: {
      value: cdktf.numberToHclTerraform(struct!.creationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_stage: {
      value: cdktf.stringToHclTerraform(struct!.currentStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_updated_timestamp: {
      value: cdktf.numberToHclTerraform(struct!.lastUpdatedTimestamp),
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
    run_id: {
      value: cdktf.stringToHclTerraform(struct!.runId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_link: {
      value: cdktf.stringToHclTerraform(struct!.runLink),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_message: {
      value: cdktf.stringToHclTerraform(struct!.statusMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataDatabricksMlflowModelLatestVersionsTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksMlflowModelLatestVersionsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksMlflowModelLatestVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksMlflowModelLatestVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationTimestamp = this._creationTimestamp;
    }
    if (this._currentStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentStage = this._currentStage;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._lastUpdatedTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdatedTimestamp = this._lastUpdatedTimestamp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runId = this._runId;
    }
    if (this._runLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.runLink = this._runLink;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._statusMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusMessage = this._statusMessage;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksMlflowModelLatestVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationTimestamp = undefined;
      this._currentStage = undefined;
      this._description = undefined;
      this._lastUpdatedTimestamp = undefined;
      this._name = undefined;
      this._runId = undefined;
      this._runLink = undefined;
      this._source = undefined;
      this._status = undefined;
      this._statusMessage = undefined;
      this._userId = undefined;
      this._version = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationTimestamp = value.creationTimestamp;
      this._currentStage = value.currentStage;
      this._description = value.description;
      this._lastUpdatedTimestamp = value.lastUpdatedTimestamp;
      this._name = value.name;
      this._runId = value.runId;
      this._runLink = value.runLink;
      this._source = value.source;
      this._status = value.status;
      this._statusMessage = value.statusMessage;
      this._userId = value.userId;
      this._version = value.version;
      this._tags.internalValue = value.tags;
    }
  }

  // creation_timestamp - computed: false, optional: true, required: false
  private _creationTimestamp?: number; 
  public get creationTimestamp() {
    return this.getNumberAttribute('creation_timestamp');
  }
  public set creationTimestamp(value: number) {
    this._creationTimestamp = value;
  }
  public resetCreationTimestamp() {
    this._creationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimestampInput() {
    return this._creationTimestamp;
  }

  // current_stage - computed: false, optional: true, required: false
  private _currentStage?: string; 
  public get currentStage() {
    return this.getStringAttribute('current_stage');
  }
  public set currentStage(value: string) {
    this._currentStage = value;
  }
  public resetCurrentStage() {
    this._currentStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentStageInput() {
    return this._currentStage;
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

  // last_updated_timestamp - computed: false, optional: true, required: false
  private _lastUpdatedTimestamp?: number; 
  public get lastUpdatedTimestamp() {
    return this.getNumberAttribute('last_updated_timestamp');
  }
  public set lastUpdatedTimestamp(value: number) {
    this._lastUpdatedTimestamp = value;
  }
  public resetLastUpdatedTimestamp() {
    this._lastUpdatedTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedTimestampInput() {
    return this._lastUpdatedTimestamp;
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

  // run_id - computed: false, optional: true, required: false
  private _runId?: string; 
  public get runId() {
    return this.getStringAttribute('run_id');
  }
  public set runId(value: string) {
    this._runId = value;
  }
  public resetRunId() {
    this._runId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runIdInput() {
    return this._runId;
  }

  // run_link - computed: false, optional: true, required: false
  private _runLink?: string; 
  public get runLink() {
    return this.getStringAttribute('run_link');
  }
  public set runLink(value: string) {
    this._runLink = value;
  }
  public resetRunLink() {
    this._runLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runLinkInput() {
    return this._runLink;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status_message - computed: false, optional: true, required: false
  private _statusMessage?: string; 
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }
  public set statusMessage(value: string) {
    this._statusMessage = value;
  }
  public resetStatusMessage() {
    this._statusMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusMessageInput() {
    return this._statusMessage;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataDatabricksMlflowModelLatestVersionsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataDatabricksMlflowModelLatestVersionsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class DataDatabricksMlflowModelLatestVersionsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksMlflowModelLatestVersions[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksMlflowModelLatestVersionsOutputReference {
    return new DataDatabricksMlflowModelLatestVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksMlflowModelTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#key DataDatabricksMlflowModel#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#value DataDatabricksMlflowModel#value}
  */
  readonly value?: string;
}

export function dataDatabricksMlflowModelTagsToTerraform(struct?: DataDatabricksMlflowModelTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksMlflowModelTagsToHclTerraform(struct?: DataDatabricksMlflowModelTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataDatabricksMlflowModelTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksMlflowModelTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksMlflowModelTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class DataDatabricksMlflowModelTagsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksMlflowModelTags[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksMlflowModelTagsOutputReference {
    return new DataDatabricksMlflowModelTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model databricks_mlflow_model}
*/
export class DataDatabricksMlflowModel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mlflow_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksMlflowModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksMlflowModel to import
  * @param importFromId The id of the existing DataDatabricksMlflowModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksMlflowModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_mlflow_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model databricks_mlflow_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksMlflowModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksMlflowModelConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mlflow_model',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.40.0',
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
    this._description = config.description;
    this._name = config.name;
    this._permissionLevel = config.permissionLevel;
    this._userId = config.userId;
    this._latestVersions.internalValue = config.latestVersions;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // permission_level - computed: true, optional: true, required: false
  private _permissionLevel?: string; 
  public get permissionLevel() {
    return this.getStringAttribute('permission_level');
  }
  public set permissionLevel(value: string) {
    this._permissionLevel = value;
  }
  public resetPermissionLevel() {
    this._permissionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionLevelInput() {
    return this._permissionLevel;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // latest_versions - computed: false, optional: true, required: false
  private _latestVersions = new DataDatabricksMlflowModelLatestVersionsList(this, "latest_versions", false);
  public get latestVersions() {
    return this._latestVersions;
  }
  public putLatestVersions(value: DataDatabricksMlflowModelLatestVersions[] | cdktf.IResolvable) {
    this._latestVersions.internalValue = value;
  }
  public resetLatestVersions() {
    this._latestVersions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestVersionsInput() {
    return this._latestVersions.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataDatabricksMlflowModelTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataDatabricksMlflowModelTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      permission_level: cdktf.stringToTerraform(this._permissionLevel),
      user_id: cdktf.stringToTerraform(this._userId),
      latest_versions: cdktf.listMapper(dataDatabricksMlflowModelLatestVersionsToTerraform, true)(this._latestVersions.internalValue),
      tags: cdktf.listMapper(dataDatabricksMlflowModelTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      permission_level: {
        value: cdktf.stringToHclTerraform(this._permissionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latest_versions: {
        value: cdktf.listMapperHcl(dataDatabricksMlflowModelLatestVersionsToHclTerraform, true)(this._latestVersions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksMlflowModelLatestVersionsList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataDatabricksMlflowModelTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksMlflowModelTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
