import * as cdktf from 'cdktf';
import { JobTaskForEachTaskTaskCleanRoomsNotebookTask,
jobTaskForEachTaskTaskCleanRoomsNotebookTaskToTerraform,
jobTaskForEachTaskTaskCleanRoomsNotebookTaskToHclTerraform,
JobTaskForEachTaskTaskCleanRoomsNotebookTaskOutputReference,
JobTaskForEachTaskTaskConditionTask,
jobTaskForEachTaskTaskConditionTaskToTerraform,
jobTaskForEachTaskTaskConditionTaskToHclTerraform,
JobTaskForEachTaskTaskConditionTaskOutputReference,
JobTaskForEachTaskTaskDbtTask,
jobTaskForEachTaskTaskDbtTaskToTerraform,
jobTaskForEachTaskTaskDbtTaskToHclTerraform,
JobTaskForEachTaskTaskDbtTaskOutputReference,
JobTaskForEachTaskTaskDependsOn,
jobTaskForEachTaskTaskDependsOnToTerraform,
jobTaskForEachTaskTaskDependsOnToHclTerraform,
JobTaskForEachTaskTaskDependsOnList,
JobTaskForEachTaskTaskEmailNotifications,
jobTaskForEachTaskTaskEmailNotificationsToTerraform,
jobTaskForEachTaskTaskEmailNotificationsToHclTerraform,
JobTaskForEachTaskTaskEmailNotificationsOutputReference,
JobTaskForEachTaskTaskHealth,
jobTaskForEachTaskTaskHealthToTerraform,
jobTaskForEachTaskTaskHealthToHclTerraform,
JobTaskForEachTaskTaskHealthOutputReference,
JobTaskForEachTaskTaskLibrary,
jobTaskForEachTaskTaskLibraryToTerraform,
jobTaskForEachTaskTaskLibraryToHclTerraform,
JobTaskForEachTaskTaskLibraryList,
JobTaskForEachTaskTaskNewCluster,
jobTaskForEachTaskTaskNewClusterToTerraform,
jobTaskForEachTaskTaskNewClusterToHclTerraform,
JobTaskForEachTaskTaskNewClusterOutputReference,
JobTaskForEachTaskTaskNotebookTask,
jobTaskForEachTaskTaskNotebookTaskToTerraform,
jobTaskForEachTaskTaskNotebookTaskToHclTerraform,
JobTaskForEachTaskTaskNotebookTaskOutputReference,
JobTaskForEachTaskTaskNotificationSettings,
jobTaskForEachTaskTaskNotificationSettingsToTerraform,
jobTaskForEachTaskTaskNotificationSettingsToHclTerraform,
JobTaskForEachTaskTaskNotificationSettingsOutputReference,
JobTaskCleanRoomsNotebookTask,
jobTaskCleanRoomsNotebookTaskToTerraform,
jobTaskCleanRoomsNotebookTaskToHclTerraform,
JobTaskCleanRoomsNotebookTaskOutputReference,
JobTaskConditionTask,
jobTaskConditionTaskToTerraform,
jobTaskConditionTaskToHclTerraform,
JobTaskConditionTaskOutputReference,
JobTaskDbtTask,
jobTaskDbtTaskToTerraform,
jobTaskDbtTaskToHclTerraform,
JobTaskDbtTaskOutputReference,
JobTaskDependsOn,
jobTaskDependsOnToTerraform,
jobTaskDependsOnToHclTerraform,
JobTaskDependsOnList,
JobTaskEmailNotifications,
jobTaskEmailNotificationsToTerraform,
jobTaskEmailNotificationsToHclTerraform,
JobTaskEmailNotificationsOutputReference } from './structs0'
export interface JobTaskForEachTaskTaskPipelineTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#full_refresh Job#full_refresh}
  */
  readonly fullRefresh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#pipeline_id Job#pipeline_id}
  */
  readonly pipelineId: string;
}

export function jobTaskForEachTaskTaskPipelineTaskToTerraform(struct?: JobTaskForEachTaskTaskPipelineTaskOutputReference | JobTaskForEachTaskTaskPipelineTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_refresh: cdktf.booleanToTerraform(struct!.fullRefresh),
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
  }
}


export function jobTaskForEachTaskTaskPipelineTaskToHclTerraform(struct?: JobTaskForEachTaskTaskPipelineTaskOutputReference | JobTaskForEachTaskTaskPipelineTask): any {
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

export class JobTaskForEachTaskTaskPipelineTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskPipelineTask | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskPipelineTask | undefined) {
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
export interface JobTaskForEachTaskTaskPythonWheelTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#entry_point Job#entry_point}
  */
  readonly entryPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#named_parameters Job#named_parameters}
  */
  readonly namedParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#package_name Job#package_name}
  */
  readonly packageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
}

export function jobTaskForEachTaskTaskPythonWheelTaskToTerraform(struct?: JobTaskForEachTaskTaskPythonWheelTaskOutputReference | JobTaskForEachTaskTaskPythonWheelTask): any {
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


export function jobTaskForEachTaskTaskPythonWheelTaskToHclTerraform(struct?: JobTaskForEachTaskTaskPythonWheelTaskOutputReference | JobTaskForEachTaskTaskPythonWheelTask): any {
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

export class JobTaskForEachTaskTaskPythonWheelTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskPythonWheelTask | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskPythonWheelTask | undefined) {
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
export interface JobTaskForEachTaskTaskRunJobTaskPipelineParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#full_refresh Job#full_refresh}
  */
  readonly fullRefresh?: boolean | cdktf.IResolvable;
}

export function jobTaskForEachTaskTaskRunJobTaskPipelineParamsToTerraform(struct?: JobTaskForEachTaskTaskRunJobTaskPipelineParamsOutputReference | JobTaskForEachTaskTaskRunJobTaskPipelineParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_refresh: cdktf.booleanToTerraform(struct!.fullRefresh),
  }
}


export function jobTaskForEachTaskTaskRunJobTaskPipelineParamsToHclTerraform(struct?: JobTaskForEachTaskTaskRunJobTaskPipelineParamsOutputReference | JobTaskForEachTaskTaskRunJobTaskPipelineParams): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskRunJobTaskPipelineParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskRunJobTaskPipelineParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullRefresh = this._fullRefresh;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskRunJobTaskPipelineParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullRefresh = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullRefresh = value.fullRefresh;
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
}
export interface JobTaskForEachTaskTaskRunJobTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#dbt_commands Job#dbt_commands}
  */
  readonly dbtCommands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#jar_params Job#jar_params}
  */
  readonly jarParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#job_id Job#job_id}
  */
  readonly jobId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#job_parameters Job#job_parameters}
  */
  readonly jobParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#notebook_params Job#notebook_params}
  */
  readonly notebookParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#python_named_params Job#python_named_params}
  */
  readonly pythonNamedParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#python_params Job#python_params}
  */
  readonly pythonParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#spark_submit_params Job#spark_submit_params}
  */
  readonly sparkSubmitParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#sql_params Job#sql_params}
  */
  readonly sqlParams?: { [key: string]: string };
  /**
  * pipeline_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#pipeline_params Job#pipeline_params}
  */
  readonly pipelineParams?: JobTaskForEachTaskTaskRunJobTaskPipelineParams;
}

export function jobTaskForEachTaskTaskRunJobTaskToTerraform(struct?: JobTaskForEachTaskTaskRunJobTaskOutputReference | JobTaskForEachTaskTaskRunJobTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbt_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbtCommands),
    jar_params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarParams),
    job_id: cdktf.numberToTerraform(struct!.jobId),
    job_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.jobParameters),
    notebook_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.notebookParams),
    python_named_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.pythonNamedParams),
    python_params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pythonParams),
    spark_submit_params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sparkSubmitParams),
    sql_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sqlParams),
    pipeline_params: jobTaskForEachTaskTaskRunJobTaskPipelineParamsToTerraform(struct!.pipelineParams),
  }
}


export function jobTaskForEachTaskTaskRunJobTaskToHclTerraform(struct?: JobTaskForEachTaskTaskRunJobTaskOutputReference | JobTaskForEachTaskTaskRunJobTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbt_commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbtCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jar_params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jarParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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
    notebook_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.notebookParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    python_named_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.pythonNamedParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    python_params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pythonParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spark_submit_params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sparkSubmitParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sql_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sqlParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pipeline_params: {
      value: jobTaskForEachTaskTaskRunJobTaskPipelineParamsToHclTerraform(struct!.pipelineParams),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskRunJobTaskPipelineParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskRunJobTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskRunJobTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbtCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtCommands = this._dbtCommands;
    }
    if (this._jarParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarParams = this._jarParams;
    }
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._jobParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobParameters = this._jobParameters;
    }
    if (this._notebookParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookParams = this._notebookParams;
    }
    if (this._pythonNamedParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonNamedParams = this._pythonNamedParams;
    }
    if (this._pythonParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonParams = this._pythonParams;
    }
    if (this._sparkSubmitParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkSubmitParams = this._sparkSubmitParams;
    }
    if (this._sqlParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlParams = this._sqlParams;
    }
    if (this._pipelineParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineParams = this._pipelineParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskRunJobTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbtCommands = undefined;
      this._jarParams = undefined;
      this._jobId = undefined;
      this._jobParameters = undefined;
      this._notebookParams = undefined;
      this._pythonNamedParams = undefined;
      this._pythonParams = undefined;
      this._sparkSubmitParams = undefined;
      this._sqlParams = undefined;
      this._pipelineParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbtCommands = value.dbtCommands;
      this._jarParams = value.jarParams;
      this._jobId = value.jobId;
      this._jobParameters = value.jobParameters;
      this._notebookParams = value.notebookParams;
      this._pythonNamedParams = value.pythonNamedParams;
      this._pythonParams = value.pythonParams;
      this._sparkSubmitParams = value.sparkSubmitParams;
      this._sqlParams = value.sqlParams;
      this._pipelineParams.internalValue = value.pipelineParams;
    }
  }

  // dbt_commands - computed: false, optional: true, required: false
  private _dbtCommands?: string[]; 
  public get dbtCommands() {
    return this.getListAttribute('dbt_commands');
  }
  public set dbtCommands(value: string[]) {
    this._dbtCommands = value;
  }
  public resetDbtCommands() {
    this._dbtCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtCommandsInput() {
    return this._dbtCommands;
  }

  // jar_params - computed: false, optional: true, required: false
  private _jarParams?: string[]; 
  public get jarParams() {
    return this.getListAttribute('jar_params');
  }
  public set jarParams(value: string[]) {
    this._jarParams = value;
  }
  public resetJarParams() {
    this._jarParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarParamsInput() {
    return this._jarParams;
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

  // notebook_params - computed: false, optional: true, required: false
  private _notebookParams?: { [key: string]: string }; 
  public get notebookParams() {
    return this.getStringMapAttribute('notebook_params');
  }
  public set notebookParams(value: { [key: string]: string }) {
    this._notebookParams = value;
  }
  public resetNotebookParams() {
    this._notebookParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookParamsInput() {
    return this._notebookParams;
  }

  // python_named_params - computed: false, optional: true, required: false
  private _pythonNamedParams?: { [key: string]: string }; 
  public get pythonNamedParams() {
    return this.getStringMapAttribute('python_named_params');
  }
  public set pythonNamedParams(value: { [key: string]: string }) {
    this._pythonNamedParams = value;
  }
  public resetPythonNamedParams() {
    this._pythonNamedParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonNamedParamsInput() {
    return this._pythonNamedParams;
  }

  // python_params - computed: false, optional: true, required: false
  private _pythonParams?: string[]; 
  public get pythonParams() {
    return this.getListAttribute('python_params');
  }
  public set pythonParams(value: string[]) {
    this._pythonParams = value;
  }
  public resetPythonParams() {
    this._pythonParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonParamsInput() {
    return this._pythonParams;
  }

  // spark_submit_params - computed: false, optional: true, required: false
  private _sparkSubmitParams?: string[]; 
  public get sparkSubmitParams() {
    return this.getListAttribute('spark_submit_params');
  }
  public set sparkSubmitParams(value: string[]) {
    this._sparkSubmitParams = value;
  }
  public resetSparkSubmitParams() {
    this._sparkSubmitParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSubmitParamsInput() {
    return this._sparkSubmitParams;
  }

  // sql_params - computed: false, optional: true, required: false
  private _sqlParams?: { [key: string]: string }; 
  public get sqlParams() {
    return this.getStringMapAttribute('sql_params');
  }
  public set sqlParams(value: { [key: string]: string }) {
    this._sqlParams = value;
  }
  public resetSqlParams() {
    this._sqlParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlParamsInput() {
    return this._sqlParams;
  }

  // pipeline_params - computed: false, optional: true, required: false
  private _pipelineParams = new JobTaskForEachTaskTaskRunJobTaskPipelineParamsOutputReference(this, "pipeline_params");
  public get pipelineParams() {
    return this._pipelineParams;
  }
  public putPipelineParams(value: JobTaskForEachTaskTaskRunJobTaskPipelineParams) {
    this._pipelineParams.internalValue = value;
  }
  public resetPipelineParams() {
    this._pipelineParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineParamsInput() {
    return this._pipelineParams.internalValue;
  }
}
export interface JobTaskForEachTaskTaskSparkJarTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#jar_uri Job#jar_uri}
  */
  readonly jarUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#main_class_name Job#main_class_name}
  */
  readonly mainClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#run_as_repl Job#run_as_repl}
  */
  readonly runAsRepl?: boolean | cdktf.IResolvable;
}

export function jobTaskForEachTaskTaskSparkJarTaskToTerraform(struct?: JobTaskForEachTaskTaskSparkJarTaskOutputReference | JobTaskForEachTaskTaskSparkJarTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jar_uri: cdktf.stringToTerraform(struct!.jarUri),
    main_class_name: cdktf.stringToTerraform(struct!.mainClassName),
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
    run_as_repl: cdktf.booleanToTerraform(struct!.runAsRepl),
  }
}


export function jobTaskForEachTaskTaskSparkJarTaskToHclTerraform(struct?: JobTaskForEachTaskTaskSparkJarTaskOutputReference | JobTaskForEachTaskTaskSparkJarTask): any {
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
    run_as_repl: {
      value: cdktf.booleanToHclTerraform(struct!.runAsRepl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskSparkJarTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSparkJarTask | undefined {
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
    if (this._runAsRepl !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsRepl = this._runAsRepl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskSparkJarTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jarUri = undefined;
      this._mainClassName = undefined;
      this._parameters = undefined;
      this._runAsRepl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jarUri = value.jarUri;
      this._mainClassName = value.mainClassName;
      this._parameters = value.parameters;
      this._runAsRepl = value.runAsRepl;
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

  // run_as_repl - computed: false, optional: true, required: false
  private _runAsRepl?: boolean | cdktf.IResolvable; 
  public get runAsRepl() {
    return this.getBooleanAttribute('run_as_repl');
  }
  public set runAsRepl(value: boolean | cdktf.IResolvable) {
    this._runAsRepl = value;
  }
  public resetRunAsRepl() {
    this._runAsRepl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsReplInput() {
    return this._runAsRepl;
  }
}
export interface JobTaskForEachTaskTaskSparkPythonTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#python_file Job#python_file}
  */
  readonly pythonFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#source Job#source}
  */
  readonly source?: string;
}

export function jobTaskForEachTaskTaskSparkPythonTaskToTerraform(struct?: JobTaskForEachTaskTaskSparkPythonTaskOutputReference | JobTaskForEachTaskTaskSparkPythonTask): any {
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


export function jobTaskForEachTaskTaskSparkPythonTaskToHclTerraform(struct?: JobTaskForEachTaskTaskSparkPythonTaskOutputReference | JobTaskForEachTaskTaskSparkPythonTask): any {
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

export class JobTaskForEachTaskTaskSparkPythonTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSparkPythonTask | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskSparkPythonTask | undefined) {
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
export interface JobTaskForEachTaskTaskSparkSubmitTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
}

export function jobTaskForEachTaskTaskSparkSubmitTaskToTerraform(struct?: JobTaskForEachTaskTaskSparkSubmitTaskOutputReference | JobTaskForEachTaskTaskSparkSubmitTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
  }
}


export function jobTaskForEachTaskTaskSparkSubmitTaskToHclTerraform(struct?: JobTaskForEachTaskTaskSparkSubmitTaskOutputReference | JobTaskForEachTaskTaskSparkSubmitTask): any {
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

export class JobTaskForEachTaskTaskSparkSubmitTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSparkSubmitTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskSparkSubmitTask | undefined) {
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
export interface JobTaskForEachTaskTaskSqlTaskAlertSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#destination_id Job#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#user_name Job#user_name}
  */
  readonly userName?: string;
}

export function jobTaskForEachTaskTaskSqlTaskAlertSubscriptionsToTerraform(struct?: JobTaskForEachTaskTaskSqlTaskAlertSubscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_id: cdktf.stringToTerraform(struct!.destinationId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function jobTaskForEachTaskTaskSqlTaskAlertSubscriptionsToHclTerraform(struct?: JobTaskForEachTaskTaskSqlTaskAlertSubscriptions | cdktf.IResolvable): any {
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

export class JobTaskForEachTaskTaskSqlTaskAlertSubscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskSqlTaskAlertSubscriptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskSqlTaskAlertSubscriptions | cdktf.IResolvable | undefined) {
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

export class JobTaskForEachTaskTaskSqlTaskAlertSubscriptionsList extends cdktf.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskSqlTaskAlertSubscriptions[] | cdktf.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskSqlTaskAlertSubscriptionsOutputReference {
    return new JobTaskForEachTaskTaskSqlTaskAlertSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskSqlTaskAlert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#alert_id Job#alert_id}
  */
  readonly alertId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#pause_subscriptions Job#pause_subscriptions}
  */
  readonly pauseSubscriptions?: boolean | cdktf.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#subscriptions Job#subscriptions}
  */
  readonly subscriptions?: JobTaskForEachTaskTaskSqlTaskAlertSubscriptions[] | cdktf.IResolvable;
}

export function jobTaskForEachTaskTaskSqlTaskAlertToTerraform(struct?: JobTaskForEachTaskTaskSqlTaskAlertOutputReference | JobTaskForEachTaskTaskSqlTaskAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_id: cdktf.stringToTerraform(struct!.alertId),
    pause_subscriptions: cdktf.booleanToTerraform(struct!.pauseSubscriptions),
    subscriptions: cdktf.listMapper(jobTaskForEachTaskTaskSqlTaskAlertSubscriptionsToTerraform, true)(struct!.subscriptions),
  }
}


export function jobTaskForEachTaskTaskSqlTaskAlertToHclTerraform(struct?: JobTaskForEachTaskTaskSqlTaskAlertOutputReference | JobTaskForEachTaskTaskSqlTaskAlert): any {
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
      value: cdktf.listMapperHcl(jobTaskForEachTaskTaskSqlTaskAlertSubscriptionsToHclTerraform, true)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSqlTaskAlertSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskSqlTaskAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSqlTaskAlert | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskSqlTaskAlert | undefined) {
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

  // subscriptions - computed: false, optional: true, required: false
  private _subscriptions = new JobTaskForEachTaskTaskSqlTaskAlertSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: JobTaskForEachTaskTaskSqlTaskAlertSubscriptions[] | cdktf.IResolvable) {
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
export interface JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#destination_id Job#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#user_name Job#user_name}
  */
  readonly userName?: string;
}

export function jobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsToTerraform(struct?: JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_id: cdktf.stringToTerraform(struct!.destinationId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function jobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsToHclTerraform(struct?: JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions | cdktf.IResolvable): any {
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

export class JobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions | cdktf.IResolvable | undefined) {
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

export class JobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsList extends cdktf.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions[] | cdktf.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsOutputReference {
    return new JobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskSqlTaskDashboard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#custom_subject Job#custom_subject}
  */
  readonly customSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#dashboard_id Job#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#pause_subscriptions Job#pause_subscriptions}
  */
  readonly pauseSubscriptions?: boolean | cdktf.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#subscriptions Job#subscriptions}
  */
  readonly subscriptions?: JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions[] | cdktf.IResolvable;
}

export function jobTaskForEachTaskTaskSqlTaskDashboardToTerraform(struct?: JobTaskForEachTaskTaskSqlTaskDashboardOutputReference | JobTaskForEachTaskTaskSqlTaskDashboard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_subject: cdktf.stringToTerraform(struct!.customSubject),
    dashboard_id: cdktf.stringToTerraform(struct!.dashboardId),
    pause_subscriptions: cdktf.booleanToTerraform(struct!.pauseSubscriptions),
    subscriptions: cdktf.listMapper(jobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsToTerraform, true)(struct!.subscriptions),
  }
}


export function jobTaskForEachTaskTaskSqlTaskDashboardToHclTerraform(struct?: JobTaskForEachTaskTaskSqlTaskDashboardOutputReference | JobTaskForEachTaskTaskSqlTaskDashboard): any {
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
      value: cdktf.listMapperHcl(jobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsToHclTerraform, true)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskSqlTaskDashboardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSqlTaskDashboard | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskSqlTaskDashboard | undefined) {
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
  private _subscriptions = new JobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions[] | cdktf.IResolvable) {
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
export interface JobTaskForEachTaskTaskSqlTaskFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#path Job#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#source Job#source}
  */
  readonly source?: string;
}

export function jobTaskForEachTaskTaskSqlTaskFileToTerraform(struct?: JobTaskForEachTaskTaskSqlTaskFileOutputReference | JobTaskForEachTaskTaskSqlTaskFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function jobTaskForEachTaskTaskSqlTaskFileToHclTerraform(struct?: JobTaskForEachTaskTaskSqlTaskFileOutputReference | JobTaskForEachTaskTaskSqlTaskFile): any {
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

export class JobTaskForEachTaskTaskSqlTaskFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSqlTaskFile | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskSqlTaskFile | undefined) {
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
export interface JobTaskForEachTaskTaskSqlTaskQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#query_id Job#query_id}
  */
  readonly queryId: string;
}

export function jobTaskForEachTaskTaskSqlTaskQueryToTerraform(struct?: JobTaskForEachTaskTaskSqlTaskQueryOutputReference | JobTaskForEachTaskTaskSqlTaskQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_id: cdktf.stringToTerraform(struct!.queryId),
  }
}


export function jobTaskForEachTaskTaskSqlTaskQueryToHclTerraform(struct?: JobTaskForEachTaskTaskSqlTaskQueryOutputReference | JobTaskForEachTaskTaskSqlTaskQuery): any {
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

export class JobTaskForEachTaskTaskSqlTaskQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSqlTaskQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskSqlTaskQuery | undefined) {
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
export interface JobTaskForEachTaskTaskSqlTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId: string;
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#alert Job#alert}
  */
  readonly alert?: JobTaskForEachTaskTaskSqlTaskAlert;
  /**
  * dashboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#dashboard Job#dashboard}
  */
  readonly dashboard?: JobTaskForEachTaskTaskSqlTaskDashboard;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#file Job#file}
  */
  readonly file?: JobTaskForEachTaskTaskSqlTaskFile;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#query Job#query}
  */
  readonly query?: JobTaskForEachTaskTaskSqlTaskQuery;
}

export function jobTaskForEachTaskTaskSqlTaskToTerraform(struct?: JobTaskForEachTaskTaskSqlTaskOutputReference | JobTaskForEachTaskTaskSqlTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    warehouse_id: cdktf.stringToTerraform(struct!.warehouseId),
    alert: jobTaskForEachTaskTaskSqlTaskAlertToTerraform(struct!.alert),
    dashboard: jobTaskForEachTaskTaskSqlTaskDashboardToTerraform(struct!.dashboard),
    file: jobTaskForEachTaskTaskSqlTaskFileToTerraform(struct!.file),
    query: jobTaskForEachTaskTaskSqlTaskQueryToTerraform(struct!.query),
  }
}


export function jobTaskForEachTaskTaskSqlTaskToHclTerraform(struct?: JobTaskForEachTaskTaskSqlTaskOutputReference | JobTaskForEachTaskTaskSqlTask): any {
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
      value: jobTaskForEachTaskTaskSqlTaskAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSqlTaskAlertList",
    },
    dashboard: {
      value: jobTaskForEachTaskTaskSqlTaskDashboardToHclTerraform(struct!.dashboard),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSqlTaskDashboardList",
    },
    file: {
      value: jobTaskForEachTaskTaskSqlTaskFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSqlTaskFileList",
    },
    query: {
      value: jobTaskForEachTaskTaskSqlTaskQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSqlTaskQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskSqlTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSqlTask | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskSqlTask | undefined) {
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
  private _alert = new JobTaskForEachTaskTaskSqlTaskAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: JobTaskForEachTaskTaskSqlTaskAlert) {
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
  private _dashboard = new JobTaskForEachTaskTaskSqlTaskDashboardOutputReference(this, "dashboard");
  public get dashboard() {
    return this._dashboard;
  }
  public putDashboard(value: JobTaskForEachTaskTaskSqlTaskDashboard) {
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
  private _file = new JobTaskForEachTaskTaskSqlTaskFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: JobTaskForEachTaskTaskSqlTaskFile) {
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
  private _query = new JobTaskForEachTaskTaskSqlTaskQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: JobTaskForEachTaskTaskSqlTaskQuery) {
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
export interface JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededToTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable): any {
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

export class JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable | undefined) {
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

export class JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededList extends cdktf.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference {
    return new JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskWebhookNotificationsOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskForEachTaskTaskWebhookNotificationsOnFailureToTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobTaskForEachTaskTaskWebhookNotificationsOnFailureToHclTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnFailure | cdktf.IResolvable): any {
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

export class JobTaskForEachTaskTaskWebhookNotificationsOnFailureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskWebhookNotificationsOnFailure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskWebhookNotificationsOnFailure | cdktf.IResolvable | undefined) {
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

export class JobTaskForEachTaskTaskWebhookNotificationsOnFailureList extends cdktf.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskWebhookNotificationsOnFailure[] | cdktf.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskWebhookNotificationsOnFailureOutputReference {
    return new JobTaskForEachTaskTaskWebhookNotificationsOnFailureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskWebhookNotificationsOnStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskForEachTaskTaskWebhookNotificationsOnStartToTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobTaskForEachTaskTaskWebhookNotificationsOnStartToHclTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnStart | cdktf.IResolvable): any {
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

export class JobTaskForEachTaskTaskWebhookNotificationsOnStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskWebhookNotificationsOnStart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskWebhookNotificationsOnStart | cdktf.IResolvable | undefined) {
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

export class JobTaskForEachTaskTaskWebhookNotificationsOnStartList extends cdktf.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskWebhookNotificationsOnStart[] | cdktf.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskWebhookNotificationsOnStartOutputReference {
    return new JobTaskForEachTaskTaskWebhookNotificationsOnStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededToTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededToHclTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable): any {
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

export class JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable | undefined) {
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

export class JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededList extends cdktf.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference {
    return new JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskWebhookNotificationsOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskForEachTaskTaskWebhookNotificationsOnSuccessToTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobTaskForEachTaskTaskWebhookNotificationsOnSuccessToHclTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnSuccess | cdktf.IResolvable): any {
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

export class JobTaskForEachTaskTaskWebhookNotificationsOnSuccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskWebhookNotificationsOnSuccess | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskWebhookNotificationsOnSuccess | cdktf.IResolvable | undefined) {
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

export class JobTaskForEachTaskTaskWebhookNotificationsOnSuccessList extends cdktf.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskWebhookNotificationsOnSuccess[] | cdktf.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskWebhookNotificationsOnSuccessOutputReference {
    return new JobTaskForEachTaskTaskWebhookNotificationsOnSuccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskWebhookNotifications {
  /**
  * on_duration_warning_threshold_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_duration_warning_threshold_exceeded Job#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_failure Job#on_failure}
  */
  readonly onFailure?: JobTaskForEachTaskTaskWebhookNotificationsOnFailure[] | cdktf.IResolvable;
  /**
  * on_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_start Job#on_start}
  */
  readonly onStart?: JobTaskForEachTaskTaskWebhookNotificationsOnStart[] | cdktf.IResolvable;
  /**
  * on_streaming_backlog_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_streaming_backlog_exceeded Job#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_success Job#on_success}
  */
  readonly onSuccess?: JobTaskForEachTaskTaskWebhookNotificationsOnSuccess[] | cdktf.IResolvable;
}

export function jobTaskForEachTaskTaskWebhookNotificationsToTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOutputReference | JobTaskForEachTaskTaskWebhookNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_duration_warning_threshold_exceeded: cdktf.listMapper(jobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededToTerraform, true)(struct!.onDurationWarningThresholdExceeded),
    on_failure: cdktf.listMapper(jobTaskForEachTaskTaskWebhookNotificationsOnFailureToTerraform, true)(struct!.onFailure),
    on_start: cdktf.listMapper(jobTaskForEachTaskTaskWebhookNotificationsOnStartToTerraform, true)(struct!.onStart),
    on_streaming_backlog_exceeded: cdktf.listMapper(jobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededToTerraform, true)(struct!.onStreamingBacklogExceeded),
    on_success: cdktf.listMapper(jobTaskForEachTaskTaskWebhookNotificationsOnSuccessToTerraform, true)(struct!.onSuccess),
  }
}


export function jobTaskForEachTaskTaskWebhookNotificationsToHclTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOutputReference | JobTaskForEachTaskTaskWebhookNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_duration_warning_threshold_exceeded: {
      value: cdktf.listMapperHcl(jobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform, true)(struct!.onDurationWarningThresholdExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededList",
    },
    on_failure: {
      value: cdktf.listMapperHcl(jobTaskForEachTaskTaskWebhookNotificationsOnFailureToHclTerraform, true)(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskWebhookNotificationsOnFailureList",
    },
    on_start: {
      value: cdktf.listMapperHcl(jobTaskForEachTaskTaskWebhookNotificationsOnStartToHclTerraform, true)(struct!.onStart),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskWebhookNotificationsOnStartList",
    },
    on_streaming_backlog_exceeded: {
      value: cdktf.listMapperHcl(jobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededToHclTerraform, true)(struct!.onStreamingBacklogExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededList",
    },
    on_success: {
      value: cdktf.listMapperHcl(jobTaskForEachTaskTaskWebhookNotificationsOnSuccessToHclTerraform, true)(struct!.onSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskWebhookNotificationsOnSuccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskWebhookNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskWebhookNotifications | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskWebhookNotifications | undefined) {
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
  private _onDurationWarningThresholdExceeded = new JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededList(this, "on_duration_warning_threshold_exceeded", false);
  public get onDurationWarningThresholdExceeded() {
    return this._onDurationWarningThresholdExceeded;
  }
  public putOnDurationWarningThresholdExceeded(value: JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable) {
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
  private _onFailure = new JobTaskForEachTaskTaskWebhookNotificationsOnFailureList(this, "on_failure", false);
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: JobTaskForEachTaskTaskWebhookNotificationsOnFailure[] | cdktf.IResolvable) {
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
  private _onStart = new JobTaskForEachTaskTaskWebhookNotificationsOnStartList(this, "on_start", false);
  public get onStart() {
    return this._onStart;
  }
  public putOnStart(value: JobTaskForEachTaskTaskWebhookNotificationsOnStart[] | cdktf.IResolvable) {
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
  private _onStreamingBacklogExceeded = new JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededList(this, "on_streaming_backlog_exceeded", false);
  public get onStreamingBacklogExceeded() {
    return this._onStreamingBacklogExceeded;
  }
  public putOnStreamingBacklogExceeded(value: JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable) {
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
  private _onSuccess = new JobTaskForEachTaskTaskWebhookNotificationsOnSuccessList(this, "on_success", false);
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: JobTaskForEachTaskTaskWebhookNotificationsOnSuccess[] | cdktf.IResolvable) {
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
export interface JobTaskForEachTaskTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#description Job#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#disable_auto_optimization Job#disable_auto_optimization}
  */
  readonly disableAutoOptimization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#environment_key Job#environment_key}
  */
  readonly environmentKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#existing_cluster_id Job#existing_cluster_id}
  */
  readonly existingClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#job_cluster_key Job#job_cluster_key}
  */
  readonly jobClusterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#max_retries Job#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#min_retry_interval_millis Job#min_retry_interval_millis}
  */
  readonly minRetryIntervalMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#retry_on_timeout Job#retry_on_timeout}
  */
  readonly retryOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#run_if Job#run_if}
  */
  readonly runIf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#task_key Job#task_key}
  */
  readonly taskKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#timeout_seconds Job#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * clean_rooms_notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#clean_rooms_notebook_task Job#clean_rooms_notebook_task}
  */
  readonly cleanRoomsNotebookTask?: JobTaskForEachTaskTaskCleanRoomsNotebookTask;
  /**
  * condition_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#condition_task Job#condition_task}
  */
  readonly conditionTask?: JobTaskForEachTaskTaskConditionTask;
  /**
  * dbt_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#dbt_task Job#dbt_task}
  */
  readonly dbtTask?: JobTaskForEachTaskTaskDbtTask;
  /**
  * depends_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#depends_on Job#depends_on}
  */
  readonly dependsOn?: JobTaskForEachTaskTaskDependsOn[] | cdktf.IResolvable;
  /**
  * email_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#email_notifications Job#email_notifications}
  */
  readonly emailNotifications?: JobTaskForEachTaskTaskEmailNotifications;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#health Job#health}
  */
  readonly health?: JobTaskForEachTaskTaskHealth;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#library Job#library}
  */
  readonly library?: JobTaskForEachTaskTaskLibrary[] | cdktf.IResolvable;
  /**
  * new_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#new_cluster Job#new_cluster}
  */
  readonly newCluster?: JobTaskForEachTaskTaskNewCluster;
  /**
  * notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#notebook_task Job#notebook_task}
  */
  readonly notebookTask?: JobTaskForEachTaskTaskNotebookTask;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#notification_settings Job#notification_settings}
  */
  readonly notificationSettings?: JobTaskForEachTaskTaskNotificationSettings;
  /**
  * pipeline_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#pipeline_task Job#pipeline_task}
  */
  readonly pipelineTask?: JobTaskForEachTaskTaskPipelineTask;
  /**
  * python_wheel_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#python_wheel_task Job#python_wheel_task}
  */
  readonly pythonWheelTask?: JobTaskForEachTaskTaskPythonWheelTask;
  /**
  * run_job_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#run_job_task Job#run_job_task}
  */
  readonly runJobTask?: JobTaskForEachTaskTaskRunJobTask;
  /**
  * spark_jar_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#spark_jar_task Job#spark_jar_task}
  */
  readonly sparkJarTask?: JobTaskForEachTaskTaskSparkJarTask;
  /**
  * spark_python_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#spark_python_task Job#spark_python_task}
  */
  readonly sparkPythonTask?: JobTaskForEachTaskTaskSparkPythonTask;
  /**
  * spark_submit_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#spark_submit_task Job#spark_submit_task}
  */
  readonly sparkSubmitTask?: JobTaskForEachTaskTaskSparkSubmitTask;
  /**
  * sql_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#sql_task Job#sql_task}
  */
  readonly sqlTask?: JobTaskForEachTaskTaskSqlTask;
  /**
  * webhook_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#webhook_notifications Job#webhook_notifications}
  */
  readonly webhookNotifications?: JobTaskForEachTaskTaskWebhookNotifications;
}

export function jobTaskForEachTaskTaskToTerraform(struct?: JobTaskForEachTaskTaskOutputReference | JobTaskForEachTaskTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable_auto_optimization: cdktf.booleanToTerraform(struct!.disableAutoOptimization),
    environment_key: cdktf.stringToTerraform(struct!.environmentKey),
    existing_cluster_id: cdktf.stringToTerraform(struct!.existingClusterId),
    job_cluster_key: cdktf.stringToTerraform(struct!.jobClusterKey),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    min_retry_interval_millis: cdktf.numberToTerraform(struct!.minRetryIntervalMillis),
    retry_on_timeout: cdktf.booleanToTerraform(struct!.retryOnTimeout),
    run_if: cdktf.stringToTerraform(struct!.runIf),
    task_key: cdktf.stringToTerraform(struct!.taskKey),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    clean_rooms_notebook_task: jobTaskForEachTaskTaskCleanRoomsNotebookTaskToTerraform(struct!.cleanRoomsNotebookTask),
    condition_task: jobTaskForEachTaskTaskConditionTaskToTerraform(struct!.conditionTask),
    dbt_task: jobTaskForEachTaskTaskDbtTaskToTerraform(struct!.dbtTask),
    depends_on: cdktf.listMapper(jobTaskForEachTaskTaskDependsOnToTerraform, true)(struct!.dependsOn),
    email_notifications: jobTaskForEachTaskTaskEmailNotificationsToTerraform(struct!.emailNotifications),
    health: jobTaskForEachTaskTaskHealthToTerraform(struct!.health),
    library: cdktf.listMapper(jobTaskForEachTaskTaskLibraryToTerraform, true)(struct!.library),
    new_cluster: jobTaskForEachTaskTaskNewClusterToTerraform(struct!.newCluster),
    notebook_task: jobTaskForEachTaskTaskNotebookTaskToTerraform(struct!.notebookTask),
    notification_settings: jobTaskForEachTaskTaskNotificationSettingsToTerraform(struct!.notificationSettings),
    pipeline_task: jobTaskForEachTaskTaskPipelineTaskToTerraform(struct!.pipelineTask),
    python_wheel_task: jobTaskForEachTaskTaskPythonWheelTaskToTerraform(struct!.pythonWheelTask),
    run_job_task: jobTaskForEachTaskTaskRunJobTaskToTerraform(struct!.runJobTask),
    spark_jar_task: jobTaskForEachTaskTaskSparkJarTaskToTerraform(struct!.sparkJarTask),
    spark_python_task: jobTaskForEachTaskTaskSparkPythonTaskToTerraform(struct!.sparkPythonTask),
    spark_submit_task: jobTaskForEachTaskTaskSparkSubmitTaskToTerraform(struct!.sparkSubmitTask),
    sql_task: jobTaskForEachTaskTaskSqlTaskToTerraform(struct!.sqlTask),
    webhook_notifications: jobTaskForEachTaskTaskWebhookNotificationsToTerraform(struct!.webhookNotifications),
  }
}


export function jobTaskForEachTaskTaskToHclTerraform(struct?: JobTaskForEachTaskTaskOutputReference | JobTaskForEachTaskTask): any {
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
    disable_auto_optimization: {
      value: cdktf.booleanToHclTerraform(struct!.disableAutoOptimization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    clean_rooms_notebook_task: {
      value: jobTaskForEachTaskTaskCleanRoomsNotebookTaskToHclTerraform(struct!.cleanRoomsNotebookTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskCleanRoomsNotebookTaskList",
    },
    condition_task: {
      value: jobTaskForEachTaskTaskConditionTaskToHclTerraform(struct!.conditionTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskConditionTaskList",
    },
    dbt_task: {
      value: jobTaskForEachTaskTaskDbtTaskToHclTerraform(struct!.dbtTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskDbtTaskList",
    },
    depends_on: {
      value: cdktf.listMapperHcl(jobTaskForEachTaskTaskDependsOnToHclTerraform, true)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskDependsOnList",
    },
    email_notifications: {
      value: jobTaskForEachTaskTaskEmailNotificationsToHclTerraform(struct!.emailNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskEmailNotificationsList",
    },
    health: {
      value: jobTaskForEachTaskTaskHealthToHclTerraform(struct!.health),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskHealthList",
    },
    library: {
      value: cdktf.listMapperHcl(jobTaskForEachTaskTaskLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskLibraryList",
    },
    new_cluster: {
      value: jobTaskForEachTaskTaskNewClusterToHclTerraform(struct!.newCluster),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterList",
    },
    notebook_task: {
      value: jobTaskForEachTaskTaskNotebookTaskToHclTerraform(struct!.notebookTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNotebookTaskList",
    },
    notification_settings: {
      value: jobTaskForEachTaskTaskNotificationSettingsToHclTerraform(struct!.notificationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNotificationSettingsList",
    },
    pipeline_task: {
      value: jobTaskForEachTaskTaskPipelineTaskToHclTerraform(struct!.pipelineTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskPipelineTaskList",
    },
    python_wheel_task: {
      value: jobTaskForEachTaskTaskPythonWheelTaskToHclTerraform(struct!.pythonWheelTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskPythonWheelTaskList",
    },
    run_job_task: {
      value: jobTaskForEachTaskTaskRunJobTaskToHclTerraform(struct!.runJobTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskRunJobTaskList",
    },
    spark_jar_task: {
      value: jobTaskForEachTaskTaskSparkJarTaskToHclTerraform(struct!.sparkJarTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSparkJarTaskList",
    },
    spark_python_task: {
      value: jobTaskForEachTaskTaskSparkPythonTaskToHclTerraform(struct!.sparkPythonTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSparkPythonTaskList",
    },
    spark_submit_task: {
      value: jobTaskForEachTaskTaskSparkSubmitTaskToHclTerraform(struct!.sparkSubmitTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSparkSubmitTaskList",
    },
    sql_task: {
      value: jobTaskForEachTaskTaskSqlTaskToHclTerraform(struct!.sqlTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSqlTaskList",
    },
    webhook_notifications: {
      value: jobTaskForEachTaskTaskWebhookNotificationsToHclTerraform(struct!.webhookNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskWebhookNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableAutoOptimization !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoOptimization = this._disableAutoOptimization;
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
    if (this._cleanRoomsNotebookTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanRoomsNotebookTask = this._cleanRoomsNotebookTask?.internalValue;
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

  public set internalValue(value: JobTaskForEachTaskTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disableAutoOptimization = undefined;
      this._environmentKey = undefined;
      this._existingClusterId = undefined;
      this._jobClusterKey = undefined;
      this._maxRetries = undefined;
      this._minRetryIntervalMillis = undefined;
      this._retryOnTimeout = undefined;
      this._runIf = undefined;
      this._taskKey = undefined;
      this._timeoutSeconds = undefined;
      this._cleanRoomsNotebookTask.internalValue = undefined;
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
      this._disableAutoOptimization = value.disableAutoOptimization;
      this._environmentKey = value.environmentKey;
      this._existingClusterId = value.existingClusterId;
      this._jobClusterKey = value.jobClusterKey;
      this._maxRetries = value.maxRetries;
      this._minRetryIntervalMillis = value.minRetryIntervalMillis;
      this._retryOnTimeout = value.retryOnTimeout;
      this._runIf = value.runIf;
      this._taskKey = value.taskKey;
      this._timeoutSeconds = value.timeoutSeconds;
      this._cleanRoomsNotebookTask.internalValue = value.cleanRoomsNotebookTask;
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

  // disable_auto_optimization - computed: false, optional: true, required: false
  private _disableAutoOptimization?: boolean | cdktf.IResolvable; 
  public get disableAutoOptimization() {
    return this.getBooleanAttribute('disable_auto_optimization');
  }
  public set disableAutoOptimization(value: boolean | cdktf.IResolvable) {
    this._disableAutoOptimization = value;
  }
  public resetDisableAutoOptimization() {
    this._disableAutoOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoOptimizationInput() {
    return this._disableAutoOptimization;
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

  // clean_rooms_notebook_task - computed: false, optional: true, required: false
  private _cleanRoomsNotebookTask = new JobTaskForEachTaskTaskCleanRoomsNotebookTaskOutputReference(this, "clean_rooms_notebook_task");
  public get cleanRoomsNotebookTask() {
    return this._cleanRoomsNotebookTask;
  }
  public putCleanRoomsNotebookTask(value: JobTaskForEachTaskTaskCleanRoomsNotebookTask) {
    this._cleanRoomsNotebookTask.internalValue = value;
  }
  public resetCleanRoomsNotebookTask() {
    this._cleanRoomsNotebookTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanRoomsNotebookTaskInput() {
    return this._cleanRoomsNotebookTask.internalValue;
  }

  // condition_task - computed: false, optional: true, required: false
  private _conditionTask = new JobTaskForEachTaskTaskConditionTaskOutputReference(this, "condition_task");
  public get conditionTask() {
    return this._conditionTask;
  }
  public putConditionTask(value: JobTaskForEachTaskTaskConditionTask) {
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
  private _dbtTask = new JobTaskForEachTaskTaskDbtTaskOutputReference(this, "dbt_task");
  public get dbtTask() {
    return this._dbtTask;
  }
  public putDbtTask(value: JobTaskForEachTaskTaskDbtTask) {
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
  private _dependsOn = new JobTaskForEachTaskTaskDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: JobTaskForEachTaskTaskDependsOn[] | cdktf.IResolvable) {
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
  private _emailNotifications = new JobTaskForEachTaskTaskEmailNotificationsOutputReference(this, "email_notifications");
  public get emailNotifications() {
    return this._emailNotifications;
  }
  public putEmailNotifications(value: JobTaskForEachTaskTaskEmailNotifications) {
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
  private _health = new JobTaskForEachTaskTaskHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: JobTaskForEachTaskTaskHealth) {
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
  private _library = new JobTaskForEachTaskTaskLibraryList(this, "library", false);
  public get library() {
    return this._library;
  }
  public putLibrary(value: JobTaskForEachTaskTaskLibrary[] | cdktf.IResolvable) {
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
  private _newCluster = new JobTaskForEachTaskTaskNewClusterOutputReference(this, "new_cluster");
  public get newCluster() {
    return this._newCluster;
  }
  public putNewCluster(value: JobTaskForEachTaskTaskNewCluster) {
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
  private _notebookTask = new JobTaskForEachTaskTaskNotebookTaskOutputReference(this, "notebook_task");
  public get notebookTask() {
    return this._notebookTask;
  }
  public putNotebookTask(value: JobTaskForEachTaskTaskNotebookTask) {
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
  private _notificationSettings = new JobTaskForEachTaskTaskNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: JobTaskForEachTaskTaskNotificationSettings) {
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
  private _pipelineTask = new JobTaskForEachTaskTaskPipelineTaskOutputReference(this, "pipeline_task");
  public get pipelineTask() {
    return this._pipelineTask;
  }
  public putPipelineTask(value: JobTaskForEachTaskTaskPipelineTask) {
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
  private _pythonWheelTask = new JobTaskForEachTaskTaskPythonWheelTaskOutputReference(this, "python_wheel_task");
  public get pythonWheelTask() {
    return this._pythonWheelTask;
  }
  public putPythonWheelTask(value: JobTaskForEachTaskTaskPythonWheelTask) {
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
  private _runJobTask = new JobTaskForEachTaskTaskRunJobTaskOutputReference(this, "run_job_task");
  public get runJobTask() {
    return this._runJobTask;
  }
  public putRunJobTask(value: JobTaskForEachTaskTaskRunJobTask) {
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
  private _sparkJarTask = new JobTaskForEachTaskTaskSparkJarTaskOutputReference(this, "spark_jar_task");
  public get sparkJarTask() {
    return this._sparkJarTask;
  }
  public putSparkJarTask(value: JobTaskForEachTaskTaskSparkJarTask) {
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
  private _sparkPythonTask = new JobTaskForEachTaskTaskSparkPythonTaskOutputReference(this, "spark_python_task");
  public get sparkPythonTask() {
    return this._sparkPythonTask;
  }
  public putSparkPythonTask(value: JobTaskForEachTaskTaskSparkPythonTask) {
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
  private _sparkSubmitTask = new JobTaskForEachTaskTaskSparkSubmitTaskOutputReference(this, "spark_submit_task");
  public get sparkSubmitTask() {
    return this._sparkSubmitTask;
  }
  public putSparkSubmitTask(value: JobTaskForEachTaskTaskSparkSubmitTask) {
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
  private _sqlTask = new JobTaskForEachTaskTaskSqlTaskOutputReference(this, "sql_task");
  public get sqlTask() {
    return this._sqlTask;
  }
  public putSqlTask(value: JobTaskForEachTaskTaskSqlTask) {
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
  private _webhookNotifications = new JobTaskForEachTaskTaskWebhookNotificationsOutputReference(this, "webhook_notifications");
  public get webhookNotifications() {
    return this._webhookNotifications;
  }
  public putWebhookNotifications(value: JobTaskForEachTaskTaskWebhookNotifications) {
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
export interface JobTaskForEachTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#concurrency Job#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#inputs Job#inputs}
  */
  readonly inputs: string;
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#task Job#task}
  */
  readonly task: JobTaskForEachTaskTask;
}

export function jobTaskForEachTaskToTerraform(struct?: JobTaskForEachTaskOutputReference | JobTaskForEachTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    inputs: cdktf.stringToTerraform(struct!.inputs),
    task: jobTaskForEachTaskTaskToTerraform(struct!.task),
  }
}


export function jobTaskForEachTaskToHclTerraform(struct?: JobTaskForEachTaskOutputReference | JobTaskForEachTask): any {
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
      value: jobTaskForEachTaskTaskToHclTerraform(struct!.task),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTask | undefined {
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

  public set internalValue(value: JobTaskForEachTask | undefined) {
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
  private _task = new JobTaskForEachTaskTaskOutputReference(this, "task");
  public get task() {
    return this._task;
  }
  public putTask(value: JobTaskForEachTaskTask) {
    this._task.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }
}
export interface JobTaskHealthRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#metric Job#metric}
  */
  readonly metric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#op Job#op}
  */
  readonly op: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#value Job#value}
  */
  readonly value: number;
}

export function jobTaskHealthRulesToTerraform(struct?: JobTaskHealthRules | cdktf.IResolvable): any {
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


export function jobTaskHealthRulesToHclTerraform(struct?: JobTaskHealthRules | cdktf.IResolvable): any {
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

export class JobTaskHealthRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskHealthRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskHealthRules | cdktf.IResolvable | undefined) {
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

export class JobTaskHealthRulesList extends cdktf.ComplexList {
  public internalValue? : JobTaskHealthRules[] | cdktf.IResolvable

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
  public get(index: number): JobTaskHealthRulesOutputReference {
    return new JobTaskHealthRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskHealth {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#rules Job#rules}
  */
  readonly rules: JobTaskHealthRules[] | cdktf.IResolvable;
}

export function jobTaskHealthToTerraform(struct?: JobTaskHealthOutputReference | JobTaskHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(jobTaskHealthRulesToTerraform, true)(struct!.rules),
  }
}


export function jobTaskHealthToHclTerraform(struct?: JobTaskHealthOutputReference | JobTaskHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(jobTaskHealthRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskHealthRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskHealth | undefined) {
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
  private _rules = new JobTaskHealthRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: JobTaskHealthRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface JobTaskLibraryCran {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskLibraryCranToTerraform(struct?: JobTaskLibraryCranOutputReference | JobTaskLibraryCran): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function jobTaskLibraryCranToHclTerraform(struct?: JobTaskLibraryCranOutputReference | JobTaskLibraryCran): any {
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

export class JobTaskLibraryCranOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskLibraryCran | undefined {
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

  public set internalValue(value: JobTaskLibraryCran | undefined) {
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
export interface JobTaskLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#coordinates Job#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#exclusions Job#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskLibraryMavenToTerraform(struct?: JobTaskLibraryMavenOutputReference | JobTaskLibraryMaven): any {
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


export function jobTaskLibraryMavenToHclTerraform(struct?: JobTaskLibraryMavenOutputReference | JobTaskLibraryMaven): any {
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

export class JobTaskLibraryMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskLibraryMaven | undefined {
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

  public set internalValue(value: JobTaskLibraryMaven | undefined) {
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
export interface JobTaskLibraryPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskLibraryPypiToTerraform(struct?: JobTaskLibraryPypiOutputReference | JobTaskLibraryPypi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function jobTaskLibraryPypiToHclTerraform(struct?: JobTaskLibraryPypiOutputReference | JobTaskLibraryPypi): any {
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

export class JobTaskLibraryPypiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskLibraryPypi | undefined {
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

  public set internalValue(value: JobTaskLibraryPypi | undefined) {
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
export interface JobTaskLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#egg Job#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#jar Job#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#requirements Job#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#whl Job#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#cran Job#cran}
  */
  readonly cran?: JobTaskLibraryCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#maven Job#maven}
  */
  readonly maven?: JobTaskLibraryMaven;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#pypi Job#pypi}
  */
  readonly pypi?: JobTaskLibraryPypi;
}

export function jobTaskLibraryToTerraform(struct?: JobTaskLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egg: cdktf.stringToTerraform(struct!.egg),
    jar: cdktf.stringToTerraform(struct!.jar),
    requirements: cdktf.stringToTerraform(struct!.requirements),
    whl: cdktf.stringToTerraform(struct!.whl),
    cran: jobTaskLibraryCranToTerraform(struct!.cran),
    maven: jobTaskLibraryMavenToTerraform(struct!.maven),
    pypi: jobTaskLibraryPypiToTerraform(struct!.pypi),
  }
}


export function jobTaskLibraryToHclTerraform(struct?: JobTaskLibrary | cdktf.IResolvable): any {
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
      value: jobTaskLibraryCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskLibraryCranList",
    },
    maven: {
      value: jobTaskLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskLibraryMavenList",
    },
    pypi: {
      value: jobTaskLibraryPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskLibraryPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskLibraryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskLibrary | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskLibrary | cdktf.IResolvable | undefined) {
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
  private _cran = new JobTaskLibraryCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: JobTaskLibraryCran) {
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
  private _maven = new JobTaskLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: JobTaskLibraryMaven) {
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
  private _pypi = new JobTaskLibraryPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: JobTaskLibraryPypi) {
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

export class JobTaskLibraryList extends cdktf.ComplexList {
  public internalValue? : JobTaskLibrary[] | cdktf.IResolvable

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
  public get(index: number): JobTaskLibraryOutputReference {
    return new JobTaskLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskNewClusterAutoscale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#max_workers Job#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#min_workers Job#min_workers}
  */
  readonly minWorkers?: number;
}

export function jobTaskNewClusterAutoscaleToTerraform(struct?: JobTaskNewClusterAutoscaleOutputReference | JobTaskNewClusterAutoscale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktf.numberToTerraform(struct!.maxWorkers),
    min_workers: cdktf.numberToTerraform(struct!.minWorkers),
  }
}


export function jobTaskNewClusterAutoscaleToHclTerraform(struct?: JobTaskNewClusterAutoscaleOutputReference | JobTaskNewClusterAutoscale): any {
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

export class JobTaskNewClusterAutoscaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterAutoscale | undefined {
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

  public set internalValue(value: JobTaskNewClusterAutoscale | undefined) {
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
export interface JobTaskNewClusterAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#ebs_volume_count Job#ebs_volume_count}
  */
  readonly ebsVolumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#ebs_volume_iops Job#ebs_volume_iops}
  */
  readonly ebsVolumeIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#ebs_volume_size Job#ebs_volume_size}
  */
  readonly ebsVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#ebs_volume_throughput Job#ebs_volume_throughput}
  */
  readonly ebsVolumeThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#ebs_volume_type Job#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#instance_profile_arn Job#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#spot_bid_price_percent Job#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#zone_id Job#zone_id}
  */
  readonly zoneId?: string;
}

export function jobTaskNewClusterAwsAttributesToTerraform(struct?: JobTaskNewClusterAwsAttributesOutputReference | JobTaskNewClusterAwsAttributes): any {
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


export function jobTaskNewClusterAwsAttributesToHclTerraform(struct?: JobTaskNewClusterAwsAttributesOutputReference | JobTaskNewClusterAwsAttributes): any {
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

export class JobTaskNewClusterAwsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterAwsAttributes | undefined {
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

  public set internalValue(value: JobTaskNewClusterAwsAttributes | undefined) {
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
export interface JobTaskNewClusterAzureAttributesLogAnalyticsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#log_analytics_primary_key Job#log_analytics_primary_key}
  */
  readonly logAnalyticsPrimaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#log_analytics_workspace_id Job#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
}

export function jobTaskNewClusterAzureAttributesLogAnalyticsInfoToTerraform(struct?: JobTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference | JobTaskNewClusterAzureAttributesLogAnalyticsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_primary_key: cdktf.stringToTerraform(struct!.logAnalyticsPrimaryKey),
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}


export function jobTaskNewClusterAzureAttributesLogAnalyticsInfoToHclTerraform(struct?: JobTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference | JobTaskNewClusterAzureAttributesLogAnalyticsInfo): any {
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

export class JobTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterAzureAttributesLogAnalyticsInfo | undefined {
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

  public set internalValue(value: JobTaskNewClusterAzureAttributesLogAnalyticsInfo | undefined) {
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
export interface JobTaskNewClusterAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#spot_bid_max_price Job#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
  /**
  * log_analytics_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#log_analytics_info Job#log_analytics_info}
  */
  readonly logAnalyticsInfo?: JobTaskNewClusterAzureAttributesLogAnalyticsInfo;
}

export function jobTaskNewClusterAzureAttributesToTerraform(struct?: JobTaskNewClusterAzureAttributesOutputReference | JobTaskNewClusterAzureAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    first_on_demand: cdktf.numberToTerraform(struct!.firstOnDemand),
    spot_bid_max_price: cdktf.numberToTerraform(struct!.spotBidMaxPrice),
    log_analytics_info: jobTaskNewClusterAzureAttributesLogAnalyticsInfoToTerraform(struct!.logAnalyticsInfo),
  }
}


export function jobTaskNewClusterAzureAttributesToHclTerraform(struct?: JobTaskNewClusterAzureAttributesOutputReference | JobTaskNewClusterAzureAttributes): any {
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
      value: jobTaskNewClusterAzureAttributesLogAnalyticsInfoToHclTerraform(struct!.logAnalyticsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterAzureAttributesLogAnalyticsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterAzureAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterAzureAttributes | undefined {
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

  public set internalValue(value: JobTaskNewClusterAzureAttributes | undefined) {
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
  private _logAnalyticsInfo = new JobTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference(this, "log_analytics_info");
  public get logAnalyticsInfo() {
    return this._logAnalyticsInfo;
  }
  public putLogAnalyticsInfo(value: JobTaskNewClusterAzureAttributesLogAnalyticsInfo) {
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
export interface JobTaskNewClusterClusterLogConfDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterClusterLogConfDbfsToTerraform(struct?: JobTaskNewClusterClusterLogConfDbfsOutputReference | JobTaskNewClusterClusterLogConfDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterClusterLogConfDbfsToHclTerraform(struct?: JobTaskNewClusterClusterLogConfDbfsOutputReference | JobTaskNewClusterClusterLogConfDbfs): any {
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

export class JobTaskNewClusterClusterLogConfDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterClusterLogConfDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterClusterLogConfDbfs | undefined) {
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
export interface JobTaskNewClusterClusterLogConfS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#canned_acl Job#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#enable_encryption Job#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#encryption_type Job#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#endpoint Job#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#kms_key Job#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#region Job#region}
  */
  readonly region?: string;
}

export function jobTaskNewClusterClusterLogConfS3ToTerraform(struct?: JobTaskNewClusterClusterLogConfS3OutputReference | JobTaskNewClusterClusterLogConfS3): any {
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


export function jobTaskNewClusterClusterLogConfS3ToHclTerraform(struct?: JobTaskNewClusterClusterLogConfS3OutputReference | JobTaskNewClusterClusterLogConfS3): any {
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

export class JobTaskNewClusterClusterLogConfS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterClusterLogConfS3 | undefined {
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

  public set internalValue(value: JobTaskNewClusterClusterLogConfS3 | undefined) {
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
export interface JobTaskNewClusterClusterLogConf {
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#dbfs Job#dbfs}
  */
  readonly dbfs?: JobTaskNewClusterClusterLogConfDbfs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#s3 Job#s3}
  */
  readonly s3?: JobTaskNewClusterClusterLogConfS3;
}

export function jobTaskNewClusterClusterLogConfToTerraform(struct?: JobTaskNewClusterClusterLogConfOutputReference | JobTaskNewClusterClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbfs: jobTaskNewClusterClusterLogConfDbfsToTerraform(struct!.dbfs),
    s3: jobTaskNewClusterClusterLogConfS3ToTerraform(struct!.s3),
  }
}


export function jobTaskNewClusterClusterLogConfToHclTerraform(struct?: JobTaskNewClusterClusterLogConfOutputReference | JobTaskNewClusterClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbfs: {
      value: jobTaskNewClusterClusterLogConfDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterClusterLogConfDbfsList",
    },
    s3: {
      value: jobTaskNewClusterClusterLogConfS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterClusterLogConfS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterClusterLogConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterClusterLogConf | undefined {
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

  public set internalValue(value: JobTaskNewClusterClusterLogConf | undefined) {
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
  private _dbfs = new JobTaskNewClusterClusterLogConfDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: JobTaskNewClusterClusterLogConfDbfs) {
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
  private _s3 = new JobTaskNewClusterClusterLogConfS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: JobTaskNewClusterClusterLogConfS3) {
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
export interface JobTaskNewClusterClusterMountInfoNetworkFilesystemInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#mount_options Job#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#server_address Job#server_address}
  */
  readonly serverAddress: string;
}

export function jobTaskNewClusterClusterMountInfoNetworkFilesystemInfoToTerraform(struct?: JobTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference | JobTaskNewClusterClusterMountInfoNetworkFilesystemInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_options: cdktf.stringToTerraform(struct!.mountOptions),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
  }
}


export function jobTaskNewClusterClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct?: JobTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference | JobTaskNewClusterClusterMountInfoNetworkFilesystemInfo): any {
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

export class JobTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterClusterMountInfoNetworkFilesystemInfo | undefined {
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

  public set internalValue(value: JobTaskNewClusterClusterMountInfoNetworkFilesystemInfo | undefined) {
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
export interface JobTaskNewClusterClusterMountInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#local_mount_dir_path Job#local_mount_dir_path}
  */
  readonly localMountDirPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#remote_mount_dir_path Job#remote_mount_dir_path}
  */
  readonly remoteMountDirPath?: string;
  /**
  * network_filesystem_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#network_filesystem_info Job#network_filesystem_info}
  */
  readonly networkFilesystemInfo: JobTaskNewClusterClusterMountInfoNetworkFilesystemInfo;
}

export function jobTaskNewClusterClusterMountInfoToTerraform(struct?: JobTaskNewClusterClusterMountInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_mount_dir_path: cdktf.stringToTerraform(struct!.localMountDirPath),
    remote_mount_dir_path: cdktf.stringToTerraform(struct!.remoteMountDirPath),
    network_filesystem_info: jobTaskNewClusterClusterMountInfoNetworkFilesystemInfoToTerraform(struct!.networkFilesystemInfo),
  }
}


export function jobTaskNewClusterClusterMountInfoToHclTerraform(struct?: JobTaskNewClusterClusterMountInfo | cdktf.IResolvable): any {
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
      value: jobTaskNewClusterClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct!.networkFilesystemInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterClusterMountInfoNetworkFilesystemInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterClusterMountInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskNewClusterClusterMountInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskNewClusterClusterMountInfo | cdktf.IResolvable | undefined) {
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
  private _networkFilesystemInfo = new JobTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference(this, "network_filesystem_info");
  public get networkFilesystemInfo() {
    return this._networkFilesystemInfo;
  }
  public putNetworkFilesystemInfo(value: JobTaskNewClusterClusterMountInfoNetworkFilesystemInfo) {
    this._networkFilesystemInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFilesystemInfoInput() {
    return this._networkFilesystemInfo.internalValue;
  }
}

export class JobTaskNewClusterClusterMountInfoList extends cdktf.ComplexList {
  public internalValue? : JobTaskNewClusterClusterMountInfo[] | cdktf.IResolvable

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
  public get(index: number): JobTaskNewClusterClusterMountInfoOutputReference {
    return new JobTaskNewClusterClusterMountInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskNewClusterDockerImageBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#password Job#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#username Job#username}
  */
  readonly username: string;
}

export function jobTaskNewClusterDockerImageBasicAuthToTerraform(struct?: JobTaskNewClusterDockerImageBasicAuthOutputReference | JobTaskNewClusterDockerImageBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function jobTaskNewClusterDockerImageBasicAuthToHclTerraform(struct?: JobTaskNewClusterDockerImageBasicAuthOutputReference | JobTaskNewClusterDockerImageBasicAuth): any {
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

export class JobTaskNewClusterDockerImageBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterDockerImageBasicAuth | undefined {
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

  public set internalValue(value: JobTaskNewClusterDockerImageBasicAuth | undefined) {
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
export interface JobTaskNewClusterDockerImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#url Job#url}
  */
  readonly url: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#basic_auth Job#basic_auth}
  */
  readonly basicAuth?: JobTaskNewClusterDockerImageBasicAuth;
}

export function jobTaskNewClusterDockerImageToTerraform(struct?: JobTaskNewClusterDockerImageOutputReference | JobTaskNewClusterDockerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    basic_auth: jobTaskNewClusterDockerImageBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function jobTaskNewClusterDockerImageToHclTerraform(struct?: JobTaskNewClusterDockerImageOutputReference | JobTaskNewClusterDockerImage): any {
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
      value: jobTaskNewClusterDockerImageBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterDockerImageBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterDockerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterDockerImage | undefined {
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

  public set internalValue(value: JobTaskNewClusterDockerImage | undefined) {
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
  private _basicAuth = new JobTaskNewClusterDockerImageBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: JobTaskNewClusterDockerImageBasicAuth) {
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
export interface JobTaskNewClusterGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#boot_disk_size Job#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#google_service_account Job#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#local_ssd_count Job#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#use_preemptible_executors Job#use_preemptible_executors}
  */
  readonly usePreemptibleExecutors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#zone_id Job#zone_id}
  */
  readonly zoneId?: string;
}

export function jobTaskNewClusterGcpAttributesToTerraform(struct?: JobTaskNewClusterGcpAttributesOutputReference | JobTaskNewClusterGcpAttributes): any {
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


export function jobTaskNewClusterGcpAttributesToHclTerraform(struct?: JobTaskNewClusterGcpAttributesOutputReference | JobTaskNewClusterGcpAttributes): any {
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

export class JobTaskNewClusterGcpAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterGcpAttributes | undefined {
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

  public set internalValue(value: JobTaskNewClusterGcpAttributes | undefined) {
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
export interface JobTaskNewClusterInitScriptsAbfss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsAbfssToTerraform(struct?: JobTaskNewClusterInitScriptsAbfssOutputReference | JobTaskNewClusterInitScriptsAbfss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsAbfssToHclTerraform(struct?: JobTaskNewClusterInitScriptsAbfssOutputReference | JobTaskNewClusterInitScriptsAbfss): any {
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

export class JobTaskNewClusterInitScriptsAbfssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsAbfss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsAbfss | undefined) {
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
export interface JobTaskNewClusterInitScriptsDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsDbfsToTerraform(struct?: JobTaskNewClusterInitScriptsDbfsOutputReference | JobTaskNewClusterInitScriptsDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsDbfsToHclTerraform(struct?: JobTaskNewClusterInitScriptsDbfsOutputReference | JobTaskNewClusterInitScriptsDbfs): any {
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

export class JobTaskNewClusterInitScriptsDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsDbfs | undefined) {
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
export interface JobTaskNewClusterInitScriptsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsFileToTerraform(struct?: JobTaskNewClusterInitScriptsFileOutputReference | JobTaskNewClusterInitScriptsFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsFileToHclTerraform(struct?: JobTaskNewClusterInitScriptsFileOutputReference | JobTaskNewClusterInitScriptsFile): any {
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

export class JobTaskNewClusterInitScriptsFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsFile | undefined) {
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
export interface JobTaskNewClusterInitScriptsGcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsGcsToTerraform(struct?: JobTaskNewClusterInitScriptsGcsOutputReference | JobTaskNewClusterInitScriptsGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsGcsToHclTerraform(struct?: JobTaskNewClusterInitScriptsGcsOutputReference | JobTaskNewClusterInitScriptsGcs): any {
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

export class JobTaskNewClusterInitScriptsGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsGcs | undefined) {
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
export interface JobTaskNewClusterInitScriptsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#canned_acl Job#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#enable_encryption Job#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#encryption_type Job#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#endpoint Job#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#kms_key Job#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#region Job#region}
  */
  readonly region?: string;
}

export function jobTaskNewClusterInitScriptsS3ToTerraform(struct?: JobTaskNewClusterInitScriptsS3OutputReference | JobTaskNewClusterInitScriptsS3): any {
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


export function jobTaskNewClusterInitScriptsS3ToHclTerraform(struct?: JobTaskNewClusterInitScriptsS3OutputReference | JobTaskNewClusterInitScriptsS3): any {
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

export class JobTaskNewClusterInitScriptsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsS3 | undefined {
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

  public set internalValue(value: JobTaskNewClusterInitScriptsS3 | undefined) {
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
export interface JobTaskNewClusterInitScriptsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsVolumesToTerraform(struct?: JobTaskNewClusterInitScriptsVolumesOutputReference | JobTaskNewClusterInitScriptsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsVolumesToHclTerraform(struct?: JobTaskNewClusterInitScriptsVolumesOutputReference | JobTaskNewClusterInitScriptsVolumes): any {
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

export class JobTaskNewClusterInitScriptsVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsVolumes | undefined) {
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
export interface JobTaskNewClusterInitScriptsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsWorkspaceToTerraform(struct?: JobTaskNewClusterInitScriptsWorkspaceOutputReference | JobTaskNewClusterInitScriptsWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsWorkspaceToHclTerraform(struct?: JobTaskNewClusterInitScriptsWorkspaceOutputReference | JobTaskNewClusterInitScriptsWorkspace): any {
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

export class JobTaskNewClusterInitScriptsWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsWorkspace | undefined) {
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
export interface JobTaskNewClusterInitScripts {
  /**
  * abfss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#abfss Job#abfss}
  */
  readonly abfss?: JobTaskNewClusterInitScriptsAbfss;
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#dbfs Job#dbfs}
  */
  readonly dbfs?: JobTaskNewClusterInitScriptsDbfs;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#file Job#file}
  */
  readonly file?: JobTaskNewClusterInitScriptsFile;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#gcs Job#gcs}
  */
  readonly gcs?: JobTaskNewClusterInitScriptsGcs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#s3 Job#s3}
  */
  readonly s3?: JobTaskNewClusterInitScriptsS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#volumes Job#volumes}
  */
  readonly volumes?: JobTaskNewClusterInitScriptsVolumes;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#workspace Job#workspace}
  */
  readonly workspace?: JobTaskNewClusterInitScriptsWorkspace;
}

export function jobTaskNewClusterInitScriptsToTerraform(struct?: JobTaskNewClusterInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abfss: jobTaskNewClusterInitScriptsAbfssToTerraform(struct!.abfss),
    dbfs: jobTaskNewClusterInitScriptsDbfsToTerraform(struct!.dbfs),
    file: jobTaskNewClusterInitScriptsFileToTerraform(struct!.file),
    gcs: jobTaskNewClusterInitScriptsGcsToTerraform(struct!.gcs),
    s3: jobTaskNewClusterInitScriptsS3ToTerraform(struct!.s3),
    volumes: jobTaskNewClusterInitScriptsVolumesToTerraform(struct!.volumes),
    workspace: jobTaskNewClusterInitScriptsWorkspaceToTerraform(struct!.workspace),
  }
}


export function jobTaskNewClusterInitScriptsToHclTerraform(struct?: JobTaskNewClusterInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abfss: {
      value: jobTaskNewClusterInitScriptsAbfssToHclTerraform(struct!.abfss),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsAbfssList",
    },
    dbfs: {
      value: jobTaskNewClusterInitScriptsDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsDbfsList",
    },
    file: {
      value: jobTaskNewClusterInitScriptsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsFileList",
    },
    gcs: {
      value: jobTaskNewClusterInitScriptsGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsGcsList",
    },
    s3: {
      value: jobTaskNewClusterInitScriptsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsS3List",
    },
    volumes: {
      value: jobTaskNewClusterInitScriptsVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsVolumesList",
    },
    workspace: {
      value: jobTaskNewClusterInitScriptsWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterInitScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskNewClusterInitScripts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskNewClusterInitScripts | cdktf.IResolvable | undefined) {
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
  private _abfss = new JobTaskNewClusterInitScriptsAbfssOutputReference(this, "abfss");
  public get abfss() {
    return this._abfss;
  }
  public putAbfss(value: JobTaskNewClusterInitScriptsAbfss) {
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
  private _dbfs = new JobTaskNewClusterInitScriptsDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: JobTaskNewClusterInitScriptsDbfs) {
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
  private _file = new JobTaskNewClusterInitScriptsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: JobTaskNewClusterInitScriptsFile) {
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
  private _gcs = new JobTaskNewClusterInitScriptsGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: JobTaskNewClusterInitScriptsGcs) {
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
  private _s3 = new JobTaskNewClusterInitScriptsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: JobTaskNewClusterInitScriptsS3) {
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
  private _volumes = new JobTaskNewClusterInitScriptsVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: JobTaskNewClusterInitScriptsVolumes) {
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
  private _workspace = new JobTaskNewClusterInitScriptsWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: JobTaskNewClusterInitScriptsWorkspace) {
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

export class JobTaskNewClusterInitScriptsList extends cdktf.ComplexList {
  public internalValue? : JobTaskNewClusterInitScripts[] | cdktf.IResolvable

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
  public get(index: number): JobTaskNewClusterInitScriptsOutputReference {
    return new JobTaskNewClusterInitScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskNewClusterLibraryCran {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskNewClusterLibraryCranToTerraform(struct?: JobTaskNewClusterLibraryCranOutputReference | JobTaskNewClusterLibraryCran): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function jobTaskNewClusterLibraryCranToHclTerraform(struct?: JobTaskNewClusterLibraryCranOutputReference | JobTaskNewClusterLibraryCran): any {
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

export class JobTaskNewClusterLibraryCranOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterLibraryCran | undefined {
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

  public set internalValue(value: JobTaskNewClusterLibraryCran | undefined) {
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
export interface JobTaskNewClusterLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#coordinates Job#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#exclusions Job#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskNewClusterLibraryMavenToTerraform(struct?: JobTaskNewClusterLibraryMavenOutputReference | JobTaskNewClusterLibraryMaven): any {
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


export function jobTaskNewClusterLibraryMavenToHclTerraform(struct?: JobTaskNewClusterLibraryMavenOutputReference | JobTaskNewClusterLibraryMaven): any {
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

export class JobTaskNewClusterLibraryMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterLibraryMaven | undefined {
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

  public set internalValue(value: JobTaskNewClusterLibraryMaven | undefined) {
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
export interface JobTaskNewClusterLibraryPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskNewClusterLibraryPypiToTerraform(struct?: JobTaskNewClusterLibraryPypiOutputReference | JobTaskNewClusterLibraryPypi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function jobTaskNewClusterLibraryPypiToHclTerraform(struct?: JobTaskNewClusterLibraryPypiOutputReference | JobTaskNewClusterLibraryPypi): any {
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

export class JobTaskNewClusterLibraryPypiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterLibraryPypi | undefined {
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

  public set internalValue(value: JobTaskNewClusterLibraryPypi | undefined) {
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
export interface JobTaskNewClusterLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#egg Job#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#jar Job#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#requirements Job#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#whl Job#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#cran Job#cran}
  */
  readonly cran?: JobTaskNewClusterLibraryCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#maven Job#maven}
  */
  readonly maven?: JobTaskNewClusterLibraryMaven;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#pypi Job#pypi}
  */
  readonly pypi?: JobTaskNewClusterLibraryPypi;
}

export function jobTaskNewClusterLibraryToTerraform(struct?: JobTaskNewClusterLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egg: cdktf.stringToTerraform(struct!.egg),
    jar: cdktf.stringToTerraform(struct!.jar),
    requirements: cdktf.stringToTerraform(struct!.requirements),
    whl: cdktf.stringToTerraform(struct!.whl),
    cran: jobTaskNewClusterLibraryCranToTerraform(struct!.cran),
    maven: jobTaskNewClusterLibraryMavenToTerraform(struct!.maven),
    pypi: jobTaskNewClusterLibraryPypiToTerraform(struct!.pypi),
  }
}


export function jobTaskNewClusterLibraryToHclTerraform(struct?: JobTaskNewClusterLibrary | cdktf.IResolvable): any {
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
      value: jobTaskNewClusterLibraryCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterLibraryCranList",
    },
    maven: {
      value: jobTaskNewClusterLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterLibraryMavenList",
    },
    pypi: {
      value: jobTaskNewClusterLibraryPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterLibraryPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterLibraryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskNewClusterLibrary | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskNewClusterLibrary | cdktf.IResolvable | undefined) {
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
  private _cran = new JobTaskNewClusterLibraryCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: JobTaskNewClusterLibraryCran) {
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
  private _maven = new JobTaskNewClusterLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: JobTaskNewClusterLibraryMaven) {
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
  private _pypi = new JobTaskNewClusterLibraryPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: JobTaskNewClusterLibraryPypi) {
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

export class JobTaskNewClusterLibraryList extends cdktf.ComplexList {
  public internalValue? : JobTaskNewClusterLibrary[] | cdktf.IResolvable

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
  public get(index: number): JobTaskNewClusterLibraryOutputReference {
    return new JobTaskNewClusterLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskNewClusterWorkloadTypeClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#jobs Job#jobs}
  */
  readonly jobs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#notebooks Job#notebooks}
  */
  readonly notebooks?: boolean | cdktf.IResolvable;
}

export function jobTaskNewClusterWorkloadTypeClientsToTerraform(struct?: JobTaskNewClusterWorkloadTypeClientsOutputReference | JobTaskNewClusterWorkloadTypeClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jobs: cdktf.booleanToTerraform(struct!.jobs),
    notebooks: cdktf.booleanToTerraform(struct!.notebooks),
  }
}


export function jobTaskNewClusterWorkloadTypeClientsToHclTerraform(struct?: JobTaskNewClusterWorkloadTypeClientsOutputReference | JobTaskNewClusterWorkloadTypeClients): any {
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

export class JobTaskNewClusterWorkloadTypeClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterWorkloadTypeClients | undefined {
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

  public set internalValue(value: JobTaskNewClusterWorkloadTypeClients | undefined) {
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
export interface JobTaskNewClusterWorkloadType {
  /**
  * clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#clients Job#clients}
  */
  readonly clients: JobTaskNewClusterWorkloadTypeClients;
}

export function jobTaskNewClusterWorkloadTypeToTerraform(struct?: JobTaskNewClusterWorkloadTypeOutputReference | JobTaskNewClusterWorkloadType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients: jobTaskNewClusterWorkloadTypeClientsToTerraform(struct!.clients),
  }
}


export function jobTaskNewClusterWorkloadTypeToHclTerraform(struct?: JobTaskNewClusterWorkloadTypeOutputReference | JobTaskNewClusterWorkloadType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clients: {
      value: jobTaskNewClusterWorkloadTypeClientsToHclTerraform(struct!.clients),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterWorkloadTypeClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterWorkloadTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterWorkloadType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterWorkloadType | undefined) {
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
  private _clients = new JobTaskNewClusterWorkloadTypeClientsOutputReference(this, "clients");
  public get clients() {
    return this._clients;
  }
  public putClients(value: JobTaskNewClusterWorkloadTypeClients) {
    this._clients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients.internalValue;
  }
}
export interface JobTaskNewCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#apply_policy_default_values Job#apply_policy_default_values}
  */
  readonly applyPolicyDefaultValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#cluster_id Job#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#cluster_name Job#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#custom_tags Job#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#data_security_mode Job#data_security_mode}
  */
  readonly dataSecurityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#driver_instance_pool_id Job#driver_instance_pool_id}
  */
  readonly driverInstancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#driver_node_type_id Job#driver_node_type_id}
  */
  readonly driverNodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#enable_elastic_disk Job#enable_elastic_disk}
  */
  readonly enableElasticDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#enable_local_disk_encryption Job#enable_local_disk_encryption}
  */
  readonly enableLocalDiskEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#idempotency_token Job#idempotency_token}
  */
  readonly idempotencyToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#instance_pool_id Job#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#is_single_node Job#is_single_node}
  */
  readonly isSingleNode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#kind Job#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#node_type_id Job#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#num_workers Job#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#policy_id Job#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#runtime_engine Job#runtime_engine}
  */
  readonly runtimeEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#single_user_name Job#single_user_name}
  */
  readonly singleUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#spark_conf Job#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#spark_env_vars Job#spark_env_vars}
  */
  readonly sparkEnvVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#spark_version Job#spark_version}
  */
  readonly sparkVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#ssh_public_keys Job#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#use_ml_runtime Job#use_ml_runtime}
  */
  readonly useMlRuntime?: boolean | cdktf.IResolvable;
  /**
  * autoscale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#autoscale Job#autoscale}
  */
  readonly autoscale?: JobTaskNewClusterAutoscale;
  /**
  * aws_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#aws_attributes Job#aws_attributes}
  */
  readonly awsAttributes?: JobTaskNewClusterAwsAttributes;
  /**
  * azure_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#azure_attributes Job#azure_attributes}
  */
  readonly azureAttributes?: JobTaskNewClusterAzureAttributes;
  /**
  * cluster_log_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#cluster_log_conf Job#cluster_log_conf}
  */
  readonly clusterLogConf?: JobTaskNewClusterClusterLogConf;
  /**
  * cluster_mount_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#cluster_mount_info Job#cluster_mount_info}
  */
  readonly clusterMountInfo?: JobTaskNewClusterClusterMountInfo[] | cdktf.IResolvable;
  /**
  * docker_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#docker_image Job#docker_image}
  */
  readonly dockerImage?: JobTaskNewClusterDockerImage;
  /**
  * gcp_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#gcp_attributes Job#gcp_attributes}
  */
  readonly gcpAttributes?: JobTaskNewClusterGcpAttributes;
  /**
  * init_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#init_scripts Job#init_scripts}
  */
  readonly initScripts?: JobTaskNewClusterInitScripts[] | cdktf.IResolvable;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#library Job#library}
  */
  readonly library?: JobTaskNewClusterLibrary[] | cdktf.IResolvable;
  /**
  * workload_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#workload_type Job#workload_type}
  */
  readonly workloadType?: JobTaskNewClusterWorkloadType;
}

export function jobTaskNewClusterToTerraform(struct?: JobTaskNewClusterOutputReference | JobTaskNewCluster): any {
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
    autoscale: jobTaskNewClusterAutoscaleToTerraform(struct!.autoscale),
    aws_attributes: jobTaskNewClusterAwsAttributesToTerraform(struct!.awsAttributes),
    azure_attributes: jobTaskNewClusterAzureAttributesToTerraform(struct!.azureAttributes),
    cluster_log_conf: jobTaskNewClusterClusterLogConfToTerraform(struct!.clusterLogConf),
    cluster_mount_info: cdktf.listMapper(jobTaskNewClusterClusterMountInfoToTerraform, true)(struct!.clusterMountInfo),
    docker_image: jobTaskNewClusterDockerImageToTerraform(struct!.dockerImage),
    gcp_attributes: jobTaskNewClusterGcpAttributesToTerraform(struct!.gcpAttributes),
    init_scripts: cdktf.listMapper(jobTaskNewClusterInitScriptsToTerraform, true)(struct!.initScripts),
    library: cdktf.listMapper(jobTaskNewClusterLibraryToTerraform, true)(struct!.library),
    workload_type: jobTaskNewClusterWorkloadTypeToTerraform(struct!.workloadType),
  }
}


export function jobTaskNewClusterToHclTerraform(struct?: JobTaskNewClusterOutputReference | JobTaskNewCluster): any {
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
      value: jobTaskNewClusterAutoscaleToHclTerraform(struct!.autoscale),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterAutoscaleList",
    },
    aws_attributes: {
      value: jobTaskNewClusterAwsAttributesToHclTerraform(struct!.awsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterAwsAttributesList",
    },
    azure_attributes: {
      value: jobTaskNewClusterAzureAttributesToHclTerraform(struct!.azureAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterAzureAttributesList",
    },
    cluster_log_conf: {
      value: jobTaskNewClusterClusterLogConfToHclTerraform(struct!.clusterLogConf),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterClusterLogConfList",
    },
    cluster_mount_info: {
      value: cdktf.listMapperHcl(jobTaskNewClusterClusterMountInfoToHclTerraform, true)(struct!.clusterMountInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterClusterMountInfoList",
    },
    docker_image: {
      value: jobTaskNewClusterDockerImageToHclTerraform(struct!.dockerImage),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterDockerImageList",
    },
    gcp_attributes: {
      value: jobTaskNewClusterGcpAttributesToHclTerraform(struct!.gcpAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterGcpAttributesList",
    },
    init_scripts: {
      value: cdktf.listMapperHcl(jobTaskNewClusterInitScriptsToHclTerraform, true)(struct!.initScripts),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsList",
    },
    library: {
      value: cdktf.listMapperHcl(jobTaskNewClusterLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "set",
      storageClassType: "JobTaskNewClusterLibraryList",
    },
    workload_type: {
      value: jobTaskNewClusterWorkloadTypeToHclTerraform(struct!.workloadType),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterWorkloadTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewCluster | undefined {
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

  public set internalValue(value: JobTaskNewCluster | undefined) {
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
  private _autoscale = new JobTaskNewClusterAutoscaleOutputReference(this, "autoscale");
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: JobTaskNewClusterAutoscale) {
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
  private _awsAttributes = new JobTaskNewClusterAwsAttributesOutputReference(this, "aws_attributes");
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: JobTaskNewClusterAwsAttributes) {
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
  private _azureAttributes = new JobTaskNewClusterAzureAttributesOutputReference(this, "azure_attributes");
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: JobTaskNewClusterAzureAttributes) {
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
  private _clusterLogConf = new JobTaskNewClusterClusterLogConfOutputReference(this, "cluster_log_conf");
  public get clusterLogConf() {
    return this._clusterLogConf;
  }
  public putClusterLogConf(value: JobTaskNewClusterClusterLogConf) {
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
  private _clusterMountInfo = new JobTaskNewClusterClusterMountInfoList(this, "cluster_mount_info", false);
  public get clusterMountInfo() {
    return this._clusterMountInfo;
  }
  public putClusterMountInfo(value: JobTaskNewClusterClusterMountInfo[] | cdktf.IResolvable) {
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
  private _dockerImage = new JobTaskNewClusterDockerImageOutputReference(this, "docker_image");
  public get dockerImage() {
    return this._dockerImage;
  }
  public putDockerImage(value: JobTaskNewClusterDockerImage) {
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
  private _gcpAttributes = new JobTaskNewClusterGcpAttributesOutputReference(this, "gcp_attributes");
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: JobTaskNewClusterGcpAttributes) {
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
  private _initScripts = new JobTaskNewClusterInitScriptsList(this, "init_scripts", false);
  public get initScripts() {
    return this._initScripts;
  }
  public putInitScripts(value: JobTaskNewClusterInitScripts[] | cdktf.IResolvable) {
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
  private _library = new JobTaskNewClusterLibraryList(this, "library", true);
  public get library() {
    return this._library;
  }
  public putLibrary(value: JobTaskNewClusterLibrary[] | cdktf.IResolvable) {
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
  private _workloadType = new JobTaskNewClusterWorkloadTypeOutputReference(this, "workload_type");
  public get workloadType() {
    return this._workloadType;
  }
  public putWorkloadType(value: JobTaskNewClusterWorkloadType) {
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
export interface JobTaskNotebookTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#base_parameters Job#base_parameters}
  */
  readonly baseParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#notebook_path Job#notebook_path}
  */
  readonly notebookPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#source Job#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId?: string;
}

export function jobTaskNotebookTaskToTerraform(struct?: JobTaskNotebookTaskOutputReference | JobTaskNotebookTask): any {
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


export function jobTaskNotebookTaskToHclTerraform(struct?: JobTaskNotebookTaskOutputReference | JobTaskNotebookTask): any {
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

export class JobTaskNotebookTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNotebookTask | undefined {
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

  public set internalValue(value: JobTaskNotebookTask | undefined) {
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
export interface JobTaskNotificationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#alert_on_last_attempt Job#alert_on_last_attempt}
  */
  readonly alertOnLastAttempt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#no_alert_for_canceled_runs Job#no_alert_for_canceled_runs}
  */
  readonly noAlertForCanceledRuns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#no_alert_for_skipped_runs Job#no_alert_for_skipped_runs}
  */
  readonly noAlertForSkippedRuns?: boolean | cdktf.IResolvable;
}

export function jobTaskNotificationSettingsToTerraform(struct?: JobTaskNotificationSettingsOutputReference | JobTaskNotificationSettings): any {
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


export function jobTaskNotificationSettingsToHclTerraform(struct?: JobTaskNotificationSettingsOutputReference | JobTaskNotificationSettings): any {
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

export class JobTaskNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNotificationSettings | undefined {
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

  public set internalValue(value: JobTaskNotificationSettings | undefined) {
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
export interface JobTaskPipelineTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#full_refresh Job#full_refresh}
  */
  readonly fullRefresh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#pipeline_id Job#pipeline_id}
  */
  readonly pipelineId: string;
}

export function jobTaskPipelineTaskToTerraform(struct?: JobTaskPipelineTaskOutputReference | JobTaskPipelineTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_refresh: cdktf.booleanToTerraform(struct!.fullRefresh),
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
  }
}


export function jobTaskPipelineTaskToHclTerraform(struct?: JobTaskPipelineTaskOutputReference | JobTaskPipelineTask): any {
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

export class JobTaskPipelineTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskPipelineTask | undefined {
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

  public set internalValue(value: JobTaskPipelineTask | undefined) {
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
export interface JobTaskPythonWheelTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#entry_point Job#entry_point}
  */
  readonly entryPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#named_parameters Job#named_parameters}
  */
  readonly namedParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#package_name Job#package_name}
  */
  readonly packageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
}

export function jobTaskPythonWheelTaskToTerraform(struct?: JobTaskPythonWheelTaskOutputReference | JobTaskPythonWheelTask): any {
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


export function jobTaskPythonWheelTaskToHclTerraform(struct?: JobTaskPythonWheelTaskOutputReference | JobTaskPythonWheelTask): any {
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

export class JobTaskPythonWheelTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskPythonWheelTask | undefined {
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

  public set internalValue(value: JobTaskPythonWheelTask | undefined) {
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
export interface JobTaskRunJobTaskPipelineParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#full_refresh Job#full_refresh}
  */
  readonly fullRefresh?: boolean | cdktf.IResolvable;
}

export function jobTaskRunJobTaskPipelineParamsToTerraform(struct?: JobTaskRunJobTaskPipelineParamsOutputReference | JobTaskRunJobTaskPipelineParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_refresh: cdktf.booleanToTerraform(struct!.fullRefresh),
  }
}


export function jobTaskRunJobTaskPipelineParamsToHclTerraform(struct?: JobTaskRunJobTaskPipelineParamsOutputReference | JobTaskRunJobTaskPipelineParams): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskRunJobTaskPipelineParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskRunJobTaskPipelineParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullRefresh = this._fullRefresh;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskRunJobTaskPipelineParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullRefresh = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullRefresh = value.fullRefresh;
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
}
export interface JobTaskRunJobTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#dbt_commands Job#dbt_commands}
  */
  readonly dbtCommands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#jar_params Job#jar_params}
  */
  readonly jarParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#job_id Job#job_id}
  */
  readonly jobId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#job_parameters Job#job_parameters}
  */
  readonly jobParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#notebook_params Job#notebook_params}
  */
  readonly notebookParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#python_named_params Job#python_named_params}
  */
  readonly pythonNamedParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#python_params Job#python_params}
  */
  readonly pythonParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#spark_submit_params Job#spark_submit_params}
  */
  readonly sparkSubmitParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#sql_params Job#sql_params}
  */
  readonly sqlParams?: { [key: string]: string };
  /**
  * pipeline_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#pipeline_params Job#pipeline_params}
  */
  readonly pipelineParams?: JobTaskRunJobTaskPipelineParams;
}

export function jobTaskRunJobTaskToTerraform(struct?: JobTaskRunJobTaskOutputReference | JobTaskRunJobTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbt_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbtCommands),
    jar_params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarParams),
    job_id: cdktf.numberToTerraform(struct!.jobId),
    job_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.jobParameters),
    notebook_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.notebookParams),
    python_named_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.pythonNamedParams),
    python_params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pythonParams),
    spark_submit_params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sparkSubmitParams),
    sql_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sqlParams),
    pipeline_params: jobTaskRunJobTaskPipelineParamsToTerraform(struct!.pipelineParams),
  }
}


export function jobTaskRunJobTaskToHclTerraform(struct?: JobTaskRunJobTaskOutputReference | JobTaskRunJobTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbt_commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbtCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jar_params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jarParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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
    notebook_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.notebookParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    python_named_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.pythonNamedParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    python_params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pythonParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spark_submit_params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sparkSubmitParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sql_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sqlParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pipeline_params: {
      value: jobTaskRunJobTaskPipelineParamsToHclTerraform(struct!.pipelineParams),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskRunJobTaskPipelineParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskRunJobTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskRunJobTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbtCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtCommands = this._dbtCommands;
    }
    if (this._jarParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarParams = this._jarParams;
    }
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._jobParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobParameters = this._jobParameters;
    }
    if (this._notebookParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookParams = this._notebookParams;
    }
    if (this._pythonNamedParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonNamedParams = this._pythonNamedParams;
    }
    if (this._pythonParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonParams = this._pythonParams;
    }
    if (this._sparkSubmitParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkSubmitParams = this._sparkSubmitParams;
    }
    if (this._sqlParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlParams = this._sqlParams;
    }
    if (this._pipelineParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineParams = this._pipelineParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskRunJobTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbtCommands = undefined;
      this._jarParams = undefined;
      this._jobId = undefined;
      this._jobParameters = undefined;
      this._notebookParams = undefined;
      this._pythonNamedParams = undefined;
      this._pythonParams = undefined;
      this._sparkSubmitParams = undefined;
      this._sqlParams = undefined;
      this._pipelineParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbtCommands = value.dbtCommands;
      this._jarParams = value.jarParams;
      this._jobId = value.jobId;
      this._jobParameters = value.jobParameters;
      this._notebookParams = value.notebookParams;
      this._pythonNamedParams = value.pythonNamedParams;
      this._pythonParams = value.pythonParams;
      this._sparkSubmitParams = value.sparkSubmitParams;
      this._sqlParams = value.sqlParams;
      this._pipelineParams.internalValue = value.pipelineParams;
    }
  }

  // dbt_commands - computed: false, optional: true, required: false
  private _dbtCommands?: string[]; 
  public get dbtCommands() {
    return this.getListAttribute('dbt_commands');
  }
  public set dbtCommands(value: string[]) {
    this._dbtCommands = value;
  }
  public resetDbtCommands() {
    this._dbtCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtCommandsInput() {
    return this._dbtCommands;
  }

  // jar_params - computed: false, optional: true, required: false
  private _jarParams?: string[]; 
  public get jarParams() {
    return this.getListAttribute('jar_params');
  }
  public set jarParams(value: string[]) {
    this._jarParams = value;
  }
  public resetJarParams() {
    this._jarParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarParamsInput() {
    return this._jarParams;
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

  // notebook_params - computed: false, optional: true, required: false
  private _notebookParams?: { [key: string]: string }; 
  public get notebookParams() {
    return this.getStringMapAttribute('notebook_params');
  }
  public set notebookParams(value: { [key: string]: string }) {
    this._notebookParams = value;
  }
  public resetNotebookParams() {
    this._notebookParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookParamsInput() {
    return this._notebookParams;
  }

  // python_named_params - computed: false, optional: true, required: false
  private _pythonNamedParams?: { [key: string]: string }; 
  public get pythonNamedParams() {
    return this.getStringMapAttribute('python_named_params');
  }
  public set pythonNamedParams(value: { [key: string]: string }) {
    this._pythonNamedParams = value;
  }
  public resetPythonNamedParams() {
    this._pythonNamedParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonNamedParamsInput() {
    return this._pythonNamedParams;
  }

  // python_params - computed: false, optional: true, required: false
  private _pythonParams?: string[]; 
  public get pythonParams() {
    return this.getListAttribute('python_params');
  }
  public set pythonParams(value: string[]) {
    this._pythonParams = value;
  }
  public resetPythonParams() {
    this._pythonParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonParamsInput() {
    return this._pythonParams;
  }

  // spark_submit_params - computed: false, optional: true, required: false
  private _sparkSubmitParams?: string[]; 
  public get sparkSubmitParams() {
    return this.getListAttribute('spark_submit_params');
  }
  public set sparkSubmitParams(value: string[]) {
    this._sparkSubmitParams = value;
  }
  public resetSparkSubmitParams() {
    this._sparkSubmitParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSubmitParamsInput() {
    return this._sparkSubmitParams;
  }

  // sql_params - computed: false, optional: true, required: false
  private _sqlParams?: { [key: string]: string }; 
  public get sqlParams() {
    return this.getStringMapAttribute('sql_params');
  }
  public set sqlParams(value: { [key: string]: string }) {
    this._sqlParams = value;
  }
  public resetSqlParams() {
    this._sqlParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlParamsInput() {
    return this._sqlParams;
  }

  // pipeline_params - computed: false, optional: true, required: false
  private _pipelineParams = new JobTaskRunJobTaskPipelineParamsOutputReference(this, "pipeline_params");
  public get pipelineParams() {
    return this._pipelineParams;
  }
  public putPipelineParams(value: JobTaskRunJobTaskPipelineParams) {
    this._pipelineParams.internalValue = value;
  }
  public resetPipelineParams() {
    this._pipelineParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineParamsInput() {
    return this._pipelineParams.internalValue;
  }
}
export interface JobTaskSparkJarTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#jar_uri Job#jar_uri}
  */
  readonly jarUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#main_class_name Job#main_class_name}
  */
  readonly mainClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#run_as_repl Job#run_as_repl}
  */
  readonly runAsRepl?: boolean | cdktf.IResolvable;
}

export function jobTaskSparkJarTaskToTerraform(struct?: JobTaskSparkJarTaskOutputReference | JobTaskSparkJarTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jar_uri: cdktf.stringToTerraform(struct!.jarUri),
    main_class_name: cdktf.stringToTerraform(struct!.mainClassName),
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
    run_as_repl: cdktf.booleanToTerraform(struct!.runAsRepl),
  }
}


export function jobTaskSparkJarTaskToHclTerraform(struct?: JobTaskSparkJarTaskOutputReference | JobTaskSparkJarTask): any {
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
    run_as_repl: {
      value: cdktf.booleanToHclTerraform(struct!.runAsRepl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSparkJarTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSparkJarTask | undefined {
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
    if (this._runAsRepl !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsRepl = this._runAsRepl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSparkJarTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jarUri = undefined;
      this._mainClassName = undefined;
      this._parameters = undefined;
      this._runAsRepl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jarUri = value.jarUri;
      this._mainClassName = value.mainClassName;
      this._parameters = value.parameters;
      this._runAsRepl = value.runAsRepl;
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

  // run_as_repl - computed: false, optional: true, required: false
  private _runAsRepl?: boolean | cdktf.IResolvable; 
  public get runAsRepl() {
    return this.getBooleanAttribute('run_as_repl');
  }
  public set runAsRepl(value: boolean | cdktf.IResolvable) {
    this._runAsRepl = value;
  }
  public resetRunAsRepl() {
    this._runAsRepl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsReplInput() {
    return this._runAsRepl;
  }
}
export interface JobTaskSparkPythonTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#python_file Job#python_file}
  */
  readonly pythonFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#source Job#source}
  */
  readonly source?: string;
}

export function jobTaskSparkPythonTaskToTerraform(struct?: JobTaskSparkPythonTaskOutputReference | JobTaskSparkPythonTask): any {
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


export function jobTaskSparkPythonTaskToHclTerraform(struct?: JobTaskSparkPythonTaskOutputReference | JobTaskSparkPythonTask): any {
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

export class JobTaskSparkPythonTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSparkPythonTask | undefined {
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

  public set internalValue(value: JobTaskSparkPythonTask | undefined) {
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
export interface JobTaskSparkSubmitTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
}

export function jobTaskSparkSubmitTaskToTerraform(struct?: JobTaskSparkSubmitTaskOutputReference | JobTaskSparkSubmitTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
  }
}


export function jobTaskSparkSubmitTaskToHclTerraform(struct?: JobTaskSparkSubmitTaskOutputReference | JobTaskSparkSubmitTask): any {
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

export class JobTaskSparkSubmitTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSparkSubmitTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSparkSubmitTask | undefined) {
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
export interface JobTaskSqlTaskAlertSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#destination_id Job#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#user_name Job#user_name}
  */
  readonly userName?: string;
}

export function jobTaskSqlTaskAlertSubscriptionsToTerraform(struct?: JobTaskSqlTaskAlertSubscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_id: cdktf.stringToTerraform(struct!.destinationId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function jobTaskSqlTaskAlertSubscriptionsToHclTerraform(struct?: JobTaskSqlTaskAlertSubscriptions | cdktf.IResolvable): any {
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

export class JobTaskSqlTaskAlertSubscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskSqlTaskAlertSubscriptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskSqlTaskAlertSubscriptions | cdktf.IResolvable | undefined) {
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

export class JobTaskSqlTaskAlertSubscriptionsList extends cdktf.ComplexList {
  public internalValue? : JobTaskSqlTaskAlertSubscriptions[] | cdktf.IResolvable

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
  public get(index: number): JobTaskSqlTaskAlertSubscriptionsOutputReference {
    return new JobTaskSqlTaskAlertSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskSqlTaskAlert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#alert_id Job#alert_id}
  */
  readonly alertId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#pause_subscriptions Job#pause_subscriptions}
  */
  readonly pauseSubscriptions?: boolean | cdktf.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#subscriptions Job#subscriptions}
  */
  readonly subscriptions?: JobTaskSqlTaskAlertSubscriptions[] | cdktf.IResolvable;
}

export function jobTaskSqlTaskAlertToTerraform(struct?: JobTaskSqlTaskAlertOutputReference | JobTaskSqlTaskAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_id: cdktf.stringToTerraform(struct!.alertId),
    pause_subscriptions: cdktf.booleanToTerraform(struct!.pauseSubscriptions),
    subscriptions: cdktf.listMapper(jobTaskSqlTaskAlertSubscriptionsToTerraform, true)(struct!.subscriptions),
  }
}


export function jobTaskSqlTaskAlertToHclTerraform(struct?: JobTaskSqlTaskAlertOutputReference | JobTaskSqlTaskAlert): any {
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
      value: cdktf.listMapperHcl(jobTaskSqlTaskAlertSubscriptionsToHclTerraform, true)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskAlertSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTaskAlert | undefined {
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

  public set internalValue(value: JobTaskSqlTaskAlert | undefined) {
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

  // subscriptions - computed: false, optional: true, required: false
  private _subscriptions = new JobTaskSqlTaskAlertSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: JobTaskSqlTaskAlertSubscriptions[] | cdktf.IResolvable) {
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
export interface JobTaskSqlTaskDashboardSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#destination_id Job#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#user_name Job#user_name}
  */
  readonly userName?: string;
}

export function jobTaskSqlTaskDashboardSubscriptionsToTerraform(struct?: JobTaskSqlTaskDashboardSubscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_id: cdktf.stringToTerraform(struct!.destinationId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function jobTaskSqlTaskDashboardSubscriptionsToHclTerraform(struct?: JobTaskSqlTaskDashboardSubscriptions | cdktf.IResolvable): any {
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

export class JobTaskSqlTaskDashboardSubscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskSqlTaskDashboardSubscriptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskSqlTaskDashboardSubscriptions | cdktf.IResolvable | undefined) {
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

export class JobTaskSqlTaskDashboardSubscriptionsList extends cdktf.ComplexList {
  public internalValue? : JobTaskSqlTaskDashboardSubscriptions[] | cdktf.IResolvable

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
  public get(index: number): JobTaskSqlTaskDashboardSubscriptionsOutputReference {
    return new JobTaskSqlTaskDashboardSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskSqlTaskDashboard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#custom_subject Job#custom_subject}
  */
  readonly customSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#dashboard_id Job#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#pause_subscriptions Job#pause_subscriptions}
  */
  readonly pauseSubscriptions?: boolean | cdktf.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#subscriptions Job#subscriptions}
  */
  readonly subscriptions?: JobTaskSqlTaskDashboardSubscriptions[] | cdktf.IResolvable;
}

export function jobTaskSqlTaskDashboardToTerraform(struct?: JobTaskSqlTaskDashboardOutputReference | JobTaskSqlTaskDashboard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_subject: cdktf.stringToTerraform(struct!.customSubject),
    dashboard_id: cdktf.stringToTerraform(struct!.dashboardId),
    pause_subscriptions: cdktf.booleanToTerraform(struct!.pauseSubscriptions),
    subscriptions: cdktf.listMapper(jobTaskSqlTaskDashboardSubscriptionsToTerraform, true)(struct!.subscriptions),
  }
}


export function jobTaskSqlTaskDashboardToHclTerraform(struct?: JobTaskSqlTaskDashboardOutputReference | JobTaskSqlTaskDashboard): any {
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
      value: cdktf.listMapperHcl(jobTaskSqlTaskDashboardSubscriptionsToHclTerraform, true)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskDashboardSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskDashboardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTaskDashboard | undefined {
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

  public set internalValue(value: JobTaskSqlTaskDashboard | undefined) {
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
  private _subscriptions = new JobTaskSqlTaskDashboardSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: JobTaskSqlTaskDashboardSubscriptions[] | cdktf.IResolvable) {
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
export interface JobTaskSqlTaskFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#path Job#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#source Job#source}
  */
  readonly source?: string;
}

export function jobTaskSqlTaskFileToTerraform(struct?: JobTaskSqlTaskFileOutputReference | JobTaskSqlTaskFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function jobTaskSqlTaskFileToHclTerraform(struct?: JobTaskSqlTaskFileOutputReference | JobTaskSqlTaskFile): any {
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

export class JobTaskSqlTaskFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTaskFile | undefined {
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

  public set internalValue(value: JobTaskSqlTaskFile | undefined) {
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
export interface JobTaskSqlTaskQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#query_id Job#query_id}
  */
  readonly queryId: string;
}

export function jobTaskSqlTaskQueryToTerraform(struct?: JobTaskSqlTaskQueryOutputReference | JobTaskSqlTaskQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_id: cdktf.stringToTerraform(struct!.queryId),
  }
}


export function jobTaskSqlTaskQueryToHclTerraform(struct?: JobTaskSqlTaskQueryOutputReference | JobTaskSqlTaskQuery): any {
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

export class JobTaskSqlTaskQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTaskQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTaskQuery | undefined) {
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
export interface JobTaskSqlTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId: string;
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#alert Job#alert}
  */
  readonly alert?: JobTaskSqlTaskAlert;
  /**
  * dashboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#dashboard Job#dashboard}
  */
  readonly dashboard?: JobTaskSqlTaskDashboard;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#file Job#file}
  */
  readonly file?: JobTaskSqlTaskFile;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#query Job#query}
  */
  readonly query?: JobTaskSqlTaskQuery;
}

export function jobTaskSqlTaskToTerraform(struct?: JobTaskSqlTaskOutputReference | JobTaskSqlTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    warehouse_id: cdktf.stringToTerraform(struct!.warehouseId),
    alert: jobTaskSqlTaskAlertToTerraform(struct!.alert),
    dashboard: jobTaskSqlTaskDashboardToTerraform(struct!.dashboard),
    file: jobTaskSqlTaskFileToTerraform(struct!.file),
    query: jobTaskSqlTaskQueryToTerraform(struct!.query),
  }
}


export function jobTaskSqlTaskToHclTerraform(struct?: JobTaskSqlTaskOutputReference | JobTaskSqlTask): any {
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
      value: jobTaskSqlTaskAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskAlertList",
    },
    dashboard: {
      value: jobTaskSqlTaskDashboardToHclTerraform(struct!.dashboard),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskDashboardList",
    },
    file: {
      value: jobTaskSqlTaskFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskFileList",
    },
    query: {
      value: jobTaskSqlTaskQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTask | undefined {
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

  public set internalValue(value: JobTaskSqlTask | undefined) {
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
  private _alert = new JobTaskSqlTaskAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: JobTaskSqlTaskAlert) {
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
  private _dashboard = new JobTaskSqlTaskDashboardOutputReference(this, "dashboard");
  public get dashboard() {
    return this._dashboard;
  }
  public putDashboard(value: JobTaskSqlTaskDashboard) {
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
  private _file = new JobTaskSqlTaskFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: JobTaskSqlTaskFile) {
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
  private _query = new JobTaskSqlTaskQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: JobTaskSqlTaskQuery) {
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
export interface JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnDurationWarningThresholdExceededToTerraform(struct?: JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform(struct?: JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable): any {
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

export class JobTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable | undefined) {
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

export class JobTaskWebhookNotificationsOnDurationWarningThresholdExceededList extends cdktf.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference {
    return new JobTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskWebhookNotificationsOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnFailureToTerraform(struct?: JobTaskWebhookNotificationsOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnFailureToHclTerraform(struct?: JobTaskWebhookNotificationsOnFailure | cdktf.IResolvable): any {
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

export class JobTaskWebhookNotificationsOnFailureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnFailure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskWebhookNotificationsOnFailure | cdktf.IResolvable | undefined) {
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

export class JobTaskWebhookNotificationsOnFailureList extends cdktf.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnFailure[] | cdktf.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnFailureOutputReference {
    return new JobTaskWebhookNotificationsOnFailureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskWebhookNotificationsOnStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnStartToTerraform(struct?: JobTaskWebhookNotificationsOnStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnStartToHclTerraform(struct?: JobTaskWebhookNotificationsOnStart | cdktf.IResolvable): any {
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

export class JobTaskWebhookNotificationsOnStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnStart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskWebhookNotificationsOnStart | cdktf.IResolvable | undefined) {
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

export class JobTaskWebhookNotificationsOnStartList extends cdktf.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnStart[] | cdktf.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnStartOutputReference {
    return new JobTaskWebhookNotificationsOnStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskWebhookNotificationsOnStreamingBacklogExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnStreamingBacklogExceededToTerraform(struct?: JobTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnStreamingBacklogExceededToHclTerraform(struct?: JobTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable): any {
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

export class JobTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable | undefined) {
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

export class JobTaskWebhookNotificationsOnStreamingBacklogExceededList extends cdktf.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference {
    return new JobTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskWebhookNotificationsOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnSuccessToTerraform(struct?: JobTaskWebhookNotificationsOnSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnSuccessToHclTerraform(struct?: JobTaskWebhookNotificationsOnSuccess | cdktf.IResolvable): any {
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

export class JobTaskWebhookNotificationsOnSuccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnSuccess | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTaskWebhookNotificationsOnSuccess | cdktf.IResolvable | undefined) {
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

export class JobTaskWebhookNotificationsOnSuccessList extends cdktf.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnSuccess[] | cdktf.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnSuccessOutputReference {
    return new JobTaskWebhookNotificationsOnSuccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskWebhookNotifications {
  /**
  * on_duration_warning_threshold_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_duration_warning_threshold_exceeded Job#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_failure Job#on_failure}
  */
  readonly onFailure?: JobTaskWebhookNotificationsOnFailure[] | cdktf.IResolvable;
  /**
  * on_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_start Job#on_start}
  */
  readonly onStart?: JobTaskWebhookNotificationsOnStart[] | cdktf.IResolvable;
  /**
  * on_streaming_backlog_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_streaming_backlog_exceeded Job#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: JobTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_success Job#on_success}
  */
  readonly onSuccess?: JobTaskWebhookNotificationsOnSuccess[] | cdktf.IResolvable;
}

export function jobTaskWebhookNotificationsToTerraform(struct?: JobTaskWebhookNotificationsOutputReference | JobTaskWebhookNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_duration_warning_threshold_exceeded: cdktf.listMapper(jobTaskWebhookNotificationsOnDurationWarningThresholdExceededToTerraform, true)(struct!.onDurationWarningThresholdExceeded),
    on_failure: cdktf.listMapper(jobTaskWebhookNotificationsOnFailureToTerraform, true)(struct!.onFailure),
    on_start: cdktf.listMapper(jobTaskWebhookNotificationsOnStartToTerraform, true)(struct!.onStart),
    on_streaming_backlog_exceeded: cdktf.listMapper(jobTaskWebhookNotificationsOnStreamingBacklogExceededToTerraform, true)(struct!.onStreamingBacklogExceeded),
    on_success: cdktf.listMapper(jobTaskWebhookNotificationsOnSuccessToTerraform, true)(struct!.onSuccess),
  }
}


export function jobTaskWebhookNotificationsToHclTerraform(struct?: JobTaskWebhookNotificationsOutputReference | JobTaskWebhookNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_duration_warning_threshold_exceeded: {
      value: cdktf.listMapperHcl(jobTaskWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform, true)(struct!.onDurationWarningThresholdExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskWebhookNotificationsOnDurationWarningThresholdExceededList",
    },
    on_failure: {
      value: cdktf.listMapperHcl(jobTaskWebhookNotificationsOnFailureToHclTerraform, true)(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskWebhookNotificationsOnFailureList",
    },
    on_start: {
      value: cdktf.listMapperHcl(jobTaskWebhookNotificationsOnStartToHclTerraform, true)(struct!.onStart),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskWebhookNotificationsOnStartList",
    },
    on_streaming_backlog_exceeded: {
      value: cdktf.listMapperHcl(jobTaskWebhookNotificationsOnStreamingBacklogExceededToHclTerraform, true)(struct!.onStreamingBacklogExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskWebhookNotificationsOnStreamingBacklogExceededList",
    },
    on_success: {
      value: cdktf.listMapperHcl(jobTaskWebhookNotificationsOnSuccessToHclTerraform, true)(struct!.onSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskWebhookNotificationsOnSuccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskWebhookNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskWebhookNotifications | undefined {
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

  public set internalValue(value: JobTaskWebhookNotifications | undefined) {
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
  private _onDurationWarningThresholdExceeded = new JobTaskWebhookNotificationsOnDurationWarningThresholdExceededList(this, "on_duration_warning_threshold_exceeded", false);
  public get onDurationWarningThresholdExceeded() {
    return this._onDurationWarningThresholdExceeded;
  }
  public putOnDurationWarningThresholdExceeded(value: JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable) {
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
  private _onFailure = new JobTaskWebhookNotificationsOnFailureList(this, "on_failure", false);
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: JobTaskWebhookNotificationsOnFailure[] | cdktf.IResolvable) {
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
  private _onStart = new JobTaskWebhookNotificationsOnStartList(this, "on_start", false);
  public get onStart() {
    return this._onStart;
  }
  public putOnStart(value: JobTaskWebhookNotificationsOnStart[] | cdktf.IResolvable) {
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
  private _onStreamingBacklogExceeded = new JobTaskWebhookNotificationsOnStreamingBacklogExceededList(this, "on_streaming_backlog_exceeded", false);
  public get onStreamingBacklogExceeded() {
    return this._onStreamingBacklogExceeded;
  }
  public putOnStreamingBacklogExceeded(value: JobTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable) {
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
  private _onSuccess = new JobTaskWebhookNotificationsOnSuccessList(this, "on_success", false);
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: JobTaskWebhookNotificationsOnSuccess[] | cdktf.IResolvable) {
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
export interface JobTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#description Job#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#disable_auto_optimization Job#disable_auto_optimization}
  */
  readonly disableAutoOptimization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#environment_key Job#environment_key}
  */
  readonly environmentKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#existing_cluster_id Job#existing_cluster_id}
  */
  readonly existingClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#job_cluster_key Job#job_cluster_key}
  */
  readonly jobClusterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#max_retries Job#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#min_retry_interval_millis Job#min_retry_interval_millis}
  */
  readonly minRetryIntervalMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#retry_on_timeout Job#retry_on_timeout}
  */
  readonly retryOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#run_if Job#run_if}
  */
  readonly runIf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#task_key Job#task_key}
  */
  readonly taskKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#timeout_seconds Job#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * clean_rooms_notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#clean_rooms_notebook_task Job#clean_rooms_notebook_task}
  */
  readonly cleanRoomsNotebookTask?: JobTaskCleanRoomsNotebookTask;
  /**
  * condition_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#condition_task Job#condition_task}
  */
  readonly conditionTask?: JobTaskConditionTask;
  /**
  * dbt_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#dbt_task Job#dbt_task}
  */
  readonly dbtTask?: JobTaskDbtTask;
  /**
  * depends_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#depends_on Job#depends_on}
  */
  readonly dependsOn?: JobTaskDependsOn[] | cdktf.IResolvable;
  /**
  * email_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#email_notifications Job#email_notifications}
  */
  readonly emailNotifications?: JobTaskEmailNotifications;
  /**
  * for_each_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#for_each_task Job#for_each_task}
  */
  readonly forEachTask?: JobTaskForEachTask;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#health Job#health}
  */
  readonly health?: JobTaskHealth;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#library Job#library}
  */
  readonly library?: JobTaskLibrary[] | cdktf.IResolvable;
  /**
  * new_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#new_cluster Job#new_cluster}
  */
  readonly newCluster?: JobTaskNewCluster;
  /**
  * notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#notebook_task Job#notebook_task}
  */
  readonly notebookTask?: JobTaskNotebookTask;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#notification_settings Job#notification_settings}
  */
  readonly notificationSettings?: JobTaskNotificationSettings;
  /**
  * pipeline_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#pipeline_task Job#pipeline_task}
  */
  readonly pipelineTask?: JobTaskPipelineTask;
  /**
  * python_wheel_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#python_wheel_task Job#python_wheel_task}
  */
  readonly pythonWheelTask?: JobTaskPythonWheelTask;
  /**
  * run_job_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#run_job_task Job#run_job_task}
  */
  readonly runJobTask?: JobTaskRunJobTask;
  /**
  * spark_jar_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#spark_jar_task Job#spark_jar_task}
  */
  readonly sparkJarTask?: JobTaskSparkJarTask;
  /**
  * spark_python_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#spark_python_task Job#spark_python_task}
  */
  readonly sparkPythonTask?: JobTaskSparkPythonTask;
  /**
  * spark_submit_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#spark_submit_task Job#spark_submit_task}
  */
  readonly sparkSubmitTask?: JobTaskSparkSubmitTask;
  /**
  * sql_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#sql_task Job#sql_task}
  */
  readonly sqlTask?: JobTaskSqlTask;
  /**
  * webhook_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#webhook_notifications Job#webhook_notifications}
  */
  readonly webhookNotifications?: JobTaskWebhookNotifications;
}

export function jobTaskToTerraform(struct?: JobTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable_auto_optimization: cdktf.booleanToTerraform(struct!.disableAutoOptimization),
    environment_key: cdktf.stringToTerraform(struct!.environmentKey),
    existing_cluster_id: cdktf.stringToTerraform(struct!.existingClusterId),
    job_cluster_key: cdktf.stringToTerraform(struct!.jobClusterKey),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    min_retry_interval_millis: cdktf.numberToTerraform(struct!.minRetryIntervalMillis),
    retry_on_timeout: cdktf.booleanToTerraform(struct!.retryOnTimeout),
    run_if: cdktf.stringToTerraform(struct!.runIf),
    task_key: cdktf.stringToTerraform(struct!.taskKey),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    clean_rooms_notebook_task: jobTaskCleanRoomsNotebookTaskToTerraform(struct!.cleanRoomsNotebookTask),
    condition_task: jobTaskConditionTaskToTerraform(struct!.conditionTask),
    dbt_task: jobTaskDbtTaskToTerraform(struct!.dbtTask),
    depends_on: cdktf.listMapper(jobTaskDependsOnToTerraform, true)(struct!.dependsOn),
    email_notifications: jobTaskEmailNotificationsToTerraform(struct!.emailNotifications),
    for_each_task: jobTaskForEachTaskToTerraform(struct!.forEachTask),
    health: jobTaskHealthToTerraform(struct!.health),
    library: cdktf.listMapper(jobTaskLibraryToTerraform, true)(struct!.library),
    new_cluster: jobTaskNewClusterToTerraform(struct!.newCluster),
    notebook_task: jobTaskNotebookTaskToTerraform(struct!.notebookTask),
    notification_settings: jobTaskNotificationSettingsToTerraform(struct!.notificationSettings),
    pipeline_task: jobTaskPipelineTaskToTerraform(struct!.pipelineTask),
    python_wheel_task: jobTaskPythonWheelTaskToTerraform(struct!.pythonWheelTask),
    run_job_task: jobTaskRunJobTaskToTerraform(struct!.runJobTask),
    spark_jar_task: jobTaskSparkJarTaskToTerraform(struct!.sparkJarTask),
    spark_python_task: jobTaskSparkPythonTaskToTerraform(struct!.sparkPythonTask),
    spark_submit_task: jobTaskSparkSubmitTaskToTerraform(struct!.sparkSubmitTask),
    sql_task: jobTaskSqlTaskToTerraform(struct!.sqlTask),
    webhook_notifications: jobTaskWebhookNotificationsToTerraform(struct!.webhookNotifications),
  }
}


export function jobTaskToHclTerraform(struct?: JobTask | cdktf.IResolvable): any {
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
    disable_auto_optimization: {
      value: cdktf.booleanToHclTerraform(struct!.disableAutoOptimization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    clean_rooms_notebook_task: {
      value: jobTaskCleanRoomsNotebookTaskToHclTerraform(struct!.cleanRoomsNotebookTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskCleanRoomsNotebookTaskList",
    },
    condition_task: {
      value: jobTaskConditionTaskToHclTerraform(struct!.conditionTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskConditionTaskList",
    },
    dbt_task: {
      value: jobTaskDbtTaskToHclTerraform(struct!.dbtTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskDbtTaskList",
    },
    depends_on: {
      value: cdktf.listMapperHcl(jobTaskDependsOnToHclTerraform, true)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskDependsOnList",
    },
    email_notifications: {
      value: jobTaskEmailNotificationsToHclTerraform(struct!.emailNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskEmailNotificationsList",
    },
    for_each_task: {
      value: jobTaskForEachTaskToHclTerraform(struct!.forEachTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskList",
    },
    health: {
      value: jobTaskHealthToHclTerraform(struct!.health),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskHealthList",
    },
    library: {
      value: cdktf.listMapperHcl(jobTaskLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskLibraryList",
    },
    new_cluster: {
      value: jobTaskNewClusterToHclTerraform(struct!.newCluster),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterList",
    },
    notebook_task: {
      value: jobTaskNotebookTaskToHclTerraform(struct!.notebookTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNotebookTaskList",
    },
    notification_settings: {
      value: jobTaskNotificationSettingsToHclTerraform(struct!.notificationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNotificationSettingsList",
    },
    pipeline_task: {
      value: jobTaskPipelineTaskToHclTerraform(struct!.pipelineTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskPipelineTaskList",
    },
    python_wheel_task: {
      value: jobTaskPythonWheelTaskToHclTerraform(struct!.pythonWheelTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskPythonWheelTaskList",
    },
    run_job_task: {
      value: jobTaskRunJobTaskToHclTerraform(struct!.runJobTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskRunJobTaskList",
    },
    spark_jar_task: {
      value: jobTaskSparkJarTaskToHclTerraform(struct!.sparkJarTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSparkJarTaskList",
    },
    spark_python_task: {
      value: jobTaskSparkPythonTaskToHclTerraform(struct!.sparkPythonTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSparkPythonTaskList",
    },
    spark_submit_task: {
      value: jobTaskSparkSubmitTaskToHclTerraform(struct!.sparkSubmitTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSparkSubmitTaskList",
    },
    sql_task: {
      value: jobTaskSqlTaskToHclTerraform(struct!.sqlTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskList",
    },
    webhook_notifications: {
      value: jobTaskWebhookNotificationsToHclTerraform(struct!.webhookNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskWebhookNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableAutoOptimization !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoOptimization = this._disableAutoOptimization;
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
    if (this._cleanRoomsNotebookTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanRoomsNotebookTask = this._cleanRoomsNotebookTask?.internalValue;
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

  public set internalValue(value: JobTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disableAutoOptimization = undefined;
      this._environmentKey = undefined;
      this._existingClusterId = undefined;
      this._jobClusterKey = undefined;
      this._maxRetries = undefined;
      this._minRetryIntervalMillis = undefined;
      this._retryOnTimeout = undefined;
      this._runIf = undefined;
      this._taskKey = undefined;
      this._timeoutSeconds = undefined;
      this._cleanRoomsNotebookTask.internalValue = undefined;
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
      this._disableAutoOptimization = value.disableAutoOptimization;
      this._environmentKey = value.environmentKey;
      this._existingClusterId = value.existingClusterId;
      this._jobClusterKey = value.jobClusterKey;
      this._maxRetries = value.maxRetries;
      this._minRetryIntervalMillis = value.minRetryIntervalMillis;
      this._retryOnTimeout = value.retryOnTimeout;
      this._runIf = value.runIf;
      this._taskKey = value.taskKey;
      this._timeoutSeconds = value.timeoutSeconds;
      this._cleanRoomsNotebookTask.internalValue = value.cleanRoomsNotebookTask;
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

  // disable_auto_optimization - computed: false, optional: true, required: false
  private _disableAutoOptimization?: boolean | cdktf.IResolvable; 
  public get disableAutoOptimization() {
    return this.getBooleanAttribute('disable_auto_optimization');
  }
  public set disableAutoOptimization(value: boolean | cdktf.IResolvable) {
    this._disableAutoOptimization = value;
  }
  public resetDisableAutoOptimization() {
    this._disableAutoOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoOptimizationInput() {
    return this._disableAutoOptimization;
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

  // clean_rooms_notebook_task - computed: false, optional: true, required: false
  private _cleanRoomsNotebookTask = new JobTaskCleanRoomsNotebookTaskOutputReference(this, "clean_rooms_notebook_task");
  public get cleanRoomsNotebookTask() {
    return this._cleanRoomsNotebookTask;
  }
  public putCleanRoomsNotebookTask(value: JobTaskCleanRoomsNotebookTask) {
    this._cleanRoomsNotebookTask.internalValue = value;
  }
  public resetCleanRoomsNotebookTask() {
    this._cleanRoomsNotebookTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanRoomsNotebookTaskInput() {
    return this._cleanRoomsNotebookTask.internalValue;
  }

  // condition_task - computed: false, optional: true, required: false
  private _conditionTask = new JobTaskConditionTaskOutputReference(this, "condition_task");
  public get conditionTask() {
    return this._conditionTask;
  }
  public putConditionTask(value: JobTaskConditionTask) {
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
  private _dbtTask = new JobTaskDbtTaskOutputReference(this, "dbt_task");
  public get dbtTask() {
    return this._dbtTask;
  }
  public putDbtTask(value: JobTaskDbtTask) {
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
  private _dependsOn = new JobTaskDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: JobTaskDependsOn[] | cdktf.IResolvable) {
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
  private _emailNotifications = new JobTaskEmailNotificationsOutputReference(this, "email_notifications");
  public get emailNotifications() {
    return this._emailNotifications;
  }
  public putEmailNotifications(value: JobTaskEmailNotifications) {
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
  private _forEachTask = new JobTaskForEachTaskOutputReference(this, "for_each_task");
  public get forEachTask() {
    return this._forEachTask;
  }
  public putForEachTask(value: JobTaskForEachTask) {
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
  private _health = new JobTaskHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: JobTaskHealth) {
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
  private _library = new JobTaskLibraryList(this, "library", false);
  public get library() {
    return this._library;
  }
  public putLibrary(value: JobTaskLibrary[] | cdktf.IResolvable) {
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
  private _newCluster = new JobTaskNewClusterOutputReference(this, "new_cluster");
  public get newCluster() {
    return this._newCluster;
  }
  public putNewCluster(value: JobTaskNewCluster) {
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
  private _notebookTask = new JobTaskNotebookTaskOutputReference(this, "notebook_task");
  public get notebookTask() {
    return this._notebookTask;
  }
  public putNotebookTask(value: JobTaskNotebookTask) {
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
  private _notificationSettings = new JobTaskNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: JobTaskNotificationSettings) {
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
  private _pipelineTask = new JobTaskPipelineTaskOutputReference(this, "pipeline_task");
  public get pipelineTask() {
    return this._pipelineTask;
  }
  public putPipelineTask(value: JobTaskPipelineTask) {
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
  private _pythonWheelTask = new JobTaskPythonWheelTaskOutputReference(this, "python_wheel_task");
  public get pythonWheelTask() {
    return this._pythonWheelTask;
  }
  public putPythonWheelTask(value: JobTaskPythonWheelTask) {
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
  private _runJobTask = new JobTaskRunJobTaskOutputReference(this, "run_job_task");
  public get runJobTask() {
    return this._runJobTask;
  }
  public putRunJobTask(value: JobTaskRunJobTask) {
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
  private _sparkJarTask = new JobTaskSparkJarTaskOutputReference(this, "spark_jar_task");
  public get sparkJarTask() {
    return this._sparkJarTask;
  }
  public putSparkJarTask(value: JobTaskSparkJarTask) {
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
  private _sparkPythonTask = new JobTaskSparkPythonTaskOutputReference(this, "spark_python_task");
  public get sparkPythonTask() {
    return this._sparkPythonTask;
  }
  public putSparkPythonTask(value: JobTaskSparkPythonTask) {
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
  private _sparkSubmitTask = new JobTaskSparkSubmitTaskOutputReference(this, "spark_submit_task");
  public get sparkSubmitTask() {
    return this._sparkSubmitTask;
  }
  public putSparkSubmitTask(value: JobTaskSparkSubmitTask) {
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
  private _sqlTask = new JobTaskSqlTaskOutputReference(this, "sql_task");
  public get sqlTask() {
    return this._sqlTask;
  }
  public putSqlTask(value: JobTaskSqlTask) {
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
  private _webhookNotifications = new JobTaskWebhookNotificationsOutputReference(this, "webhook_notifications");
  public get webhookNotifications() {
    return this._webhookNotifications;
  }
  public putWebhookNotifications(value: JobTaskWebhookNotifications) {
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

export class JobTaskList extends cdktf.ComplexList {
  public internalValue? : JobTask[] | cdktf.IResolvable

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
  public get(index: number): JobTaskOutputReference {
    return new JobTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#create Job#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#update Job#update}
  */
  readonly update?: string;
}

export function jobTimeoutsToTerraform(struct?: JobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function jobTimeoutsToHclTerraform(struct?: JobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JobTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface JobTriggerFileArrival {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#url Job#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
  */
  readonly waitAfterLastChangeSeconds?: number;
}

export function jobTriggerFileArrivalToTerraform(struct?: JobTriggerFileArrivalOutputReference | JobTriggerFileArrival): any {
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


export function jobTriggerFileArrivalToHclTerraform(struct?: JobTriggerFileArrivalOutputReference | JobTriggerFileArrival): any {
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

export class JobTriggerFileArrivalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggerFileArrival | undefined {
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

  public set internalValue(value: JobTriggerFileArrival | undefined) {
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
export interface JobTriggerPeriodic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#interval Job#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#unit Job#unit}
  */
  readonly unit: string;
}

export function jobTriggerPeriodicToTerraform(struct?: JobTriggerPeriodicOutputReference | JobTriggerPeriodic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function jobTriggerPeriodicToHclTerraform(struct?: JobTriggerPeriodicOutputReference | JobTriggerPeriodic): any {
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

export class JobTriggerPeriodicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggerPeriodic | undefined {
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

  public set internalValue(value: JobTriggerPeriodic | undefined) {
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
export interface JobTriggerTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#condition Job#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#table_names Job#table_names}
  */
  readonly tableNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
  */
  readonly waitAfterLastChangeSeconds?: number;
}

export function jobTriggerTableToTerraform(struct?: JobTriggerTableOutputReference | JobTriggerTable): any {
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


export function jobTriggerTableToHclTerraform(struct?: JobTriggerTableOutputReference | JobTriggerTable): any {
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

export class JobTriggerTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggerTable | undefined {
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

  public set internalValue(value: JobTriggerTable | undefined) {
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

  // table_names - computed: false, optional: true, required: false
  private _tableNames?: string[]; 
  public get tableNames() {
    return this.getListAttribute('table_names');
  }
  public set tableNames(value: string[]) {
    this._tableNames = value;
  }
  public resetTableNames() {
    this._tableNames = undefined;
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
export interface JobTriggerTableUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#condition Job#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#table_names Job#table_names}
  */
  readonly tableNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
  */
  readonly waitAfterLastChangeSeconds?: number;
}

export function jobTriggerTableUpdateToTerraform(struct?: JobTriggerTableUpdateOutputReference | JobTriggerTableUpdate): any {
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


export function jobTriggerTableUpdateToHclTerraform(struct?: JobTriggerTableUpdateOutputReference | JobTriggerTableUpdate): any {
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

export class JobTriggerTableUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggerTableUpdate | undefined {
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

  public set internalValue(value: JobTriggerTableUpdate | undefined) {
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
export interface JobTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#pause_status Job#pause_status}
  */
  readonly pauseStatus?: string;
  /**
  * file_arrival block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#file_arrival Job#file_arrival}
  */
  readonly fileArrival?: JobTriggerFileArrival;
  /**
  * periodic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#periodic Job#periodic}
  */
  readonly periodic?: JobTriggerPeriodic;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#table Job#table}
  */
  readonly table?: JobTriggerTable;
  /**
  * table_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#table_update Job#table_update}
  */
  readonly tableUpdate?: JobTriggerTableUpdate;
}

export function jobTriggerToTerraform(struct?: JobTriggerOutputReference | JobTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pause_status: cdktf.stringToTerraform(struct!.pauseStatus),
    file_arrival: jobTriggerFileArrivalToTerraform(struct!.fileArrival),
    periodic: jobTriggerPeriodicToTerraform(struct!.periodic),
    table: jobTriggerTableToTerraform(struct!.table),
    table_update: jobTriggerTableUpdateToTerraform(struct!.tableUpdate),
  }
}


export function jobTriggerToHclTerraform(struct?: JobTriggerOutputReference | JobTrigger): any {
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
      value: jobTriggerFileArrivalToHclTerraform(struct!.fileArrival),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggerFileArrivalList",
    },
    periodic: {
      value: jobTriggerPeriodicToHclTerraform(struct!.periodic),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggerPeriodicList",
    },
    table: {
      value: jobTriggerTableToHclTerraform(struct!.table),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggerTableList",
    },
    table_update: {
      value: jobTriggerTableUpdateToHclTerraform(struct!.tableUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggerTableUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTrigger | undefined {
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
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    if (this._tableUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableUpdate = this._tableUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pauseStatus = undefined;
      this._fileArrival.internalValue = undefined;
      this._periodic.internalValue = undefined;
      this._table.internalValue = undefined;
      this._tableUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pauseStatus = value.pauseStatus;
      this._fileArrival.internalValue = value.fileArrival;
      this._periodic.internalValue = value.periodic;
      this._table.internalValue = value.table;
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
  private _fileArrival = new JobTriggerFileArrivalOutputReference(this, "file_arrival");
  public get fileArrival() {
    return this._fileArrival;
  }
  public putFileArrival(value: JobTriggerFileArrival) {
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
  private _periodic = new JobTriggerPeriodicOutputReference(this, "periodic");
  public get periodic() {
    return this._periodic;
  }
  public putPeriodic(value: JobTriggerPeriodic) {
    this._periodic.internalValue = value;
  }
  public resetPeriodic() {
    this._periodic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicInput() {
    return this._periodic.internalValue;
  }

  // table - computed: false, optional: true, required: false
  private _table = new JobTriggerTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }
  public putTable(value: JobTriggerTable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }

  // table_update - computed: false, optional: true, required: false
  private _tableUpdate = new JobTriggerTableUpdateOutputReference(this, "table_update");
  public get tableUpdate() {
    return this._tableUpdate;
  }
  public putTableUpdate(value: JobTriggerTableUpdate) {
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
export interface JobWebhookNotificationsOnDurationWarningThresholdExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnDurationWarningThresholdExceededToTerraform(struct?: JobWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform(struct?: JobWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable): any {
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

export class JobWebhookNotificationsOnDurationWarningThresholdExceededOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobWebhookNotificationsOnDurationWarningThresholdExceeded | cdktf.IResolvable | undefined) {
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

export class JobWebhookNotificationsOnDurationWarningThresholdExceededList extends cdktf.ComplexList {
  public internalValue? : JobWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable

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
  public get(index: number): JobWebhookNotificationsOnDurationWarningThresholdExceededOutputReference {
    return new JobWebhookNotificationsOnDurationWarningThresholdExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobWebhookNotificationsOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnFailureToTerraform(struct?: JobWebhookNotificationsOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnFailureToHclTerraform(struct?: JobWebhookNotificationsOnFailure | cdktf.IResolvable): any {
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

export class JobWebhookNotificationsOnFailureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobWebhookNotificationsOnFailure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobWebhookNotificationsOnFailure | cdktf.IResolvable | undefined) {
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

export class JobWebhookNotificationsOnFailureList extends cdktf.ComplexList {
  public internalValue? : JobWebhookNotificationsOnFailure[] | cdktf.IResolvable

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
  public get(index: number): JobWebhookNotificationsOnFailureOutputReference {
    return new JobWebhookNotificationsOnFailureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobWebhookNotificationsOnStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnStartToTerraform(struct?: JobWebhookNotificationsOnStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnStartToHclTerraform(struct?: JobWebhookNotificationsOnStart | cdktf.IResolvable): any {
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

export class JobWebhookNotificationsOnStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobWebhookNotificationsOnStart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobWebhookNotificationsOnStart | cdktf.IResolvable | undefined) {
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

export class JobWebhookNotificationsOnStartList extends cdktf.ComplexList {
  public internalValue? : JobWebhookNotificationsOnStart[] | cdktf.IResolvable

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
  public get(index: number): JobWebhookNotificationsOnStartOutputReference {
    return new JobWebhookNotificationsOnStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobWebhookNotificationsOnStreamingBacklogExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnStreamingBacklogExceededToTerraform(struct?: JobWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnStreamingBacklogExceededToHclTerraform(struct?: JobWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable): any {
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

export class JobWebhookNotificationsOnStreamingBacklogExceededOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobWebhookNotificationsOnStreamingBacklogExceeded | cdktf.IResolvable | undefined) {
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

export class JobWebhookNotificationsOnStreamingBacklogExceededList extends cdktf.ComplexList {
  public internalValue? : JobWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable

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
  public get(index: number): JobWebhookNotificationsOnStreamingBacklogExceededOutputReference {
    return new JobWebhookNotificationsOnStreamingBacklogExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobWebhookNotificationsOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnSuccessToTerraform(struct?: JobWebhookNotificationsOnSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnSuccessToHclTerraform(struct?: JobWebhookNotificationsOnSuccess | cdktf.IResolvable): any {
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

export class JobWebhookNotificationsOnSuccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobWebhookNotificationsOnSuccess | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobWebhookNotificationsOnSuccess | cdktf.IResolvable | undefined) {
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

export class JobWebhookNotificationsOnSuccessList extends cdktf.ComplexList {
  public internalValue? : JobWebhookNotificationsOnSuccess[] | cdktf.IResolvable

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
  public get(index: number): JobWebhookNotificationsOnSuccessOutputReference {
    return new JobWebhookNotificationsOnSuccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobWebhookNotifications {
  /**
  * on_duration_warning_threshold_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_duration_warning_threshold_exceeded Job#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: JobWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_failure Job#on_failure}
  */
  readonly onFailure?: JobWebhookNotificationsOnFailure[] | cdktf.IResolvable;
  /**
  * on_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_start Job#on_start}
  */
  readonly onStart?: JobWebhookNotificationsOnStart[] | cdktf.IResolvable;
  /**
  * on_streaming_backlog_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_streaming_backlog_exceeded Job#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: JobWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/job#on_success Job#on_success}
  */
  readonly onSuccess?: JobWebhookNotificationsOnSuccess[] | cdktf.IResolvable;
}

export function jobWebhookNotificationsToTerraform(struct?: JobWebhookNotificationsOutputReference | JobWebhookNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_duration_warning_threshold_exceeded: cdktf.listMapper(jobWebhookNotificationsOnDurationWarningThresholdExceededToTerraform, true)(struct!.onDurationWarningThresholdExceeded),
    on_failure: cdktf.listMapper(jobWebhookNotificationsOnFailureToTerraform, true)(struct!.onFailure),
    on_start: cdktf.listMapper(jobWebhookNotificationsOnStartToTerraform, true)(struct!.onStart),
    on_streaming_backlog_exceeded: cdktf.listMapper(jobWebhookNotificationsOnStreamingBacklogExceededToTerraform, true)(struct!.onStreamingBacklogExceeded),
    on_success: cdktf.listMapper(jobWebhookNotificationsOnSuccessToTerraform, true)(struct!.onSuccess),
  }
}


export function jobWebhookNotificationsToHclTerraform(struct?: JobWebhookNotificationsOutputReference | JobWebhookNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_duration_warning_threshold_exceeded: {
      value: cdktf.listMapperHcl(jobWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform, true)(struct!.onDurationWarningThresholdExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "JobWebhookNotificationsOnDurationWarningThresholdExceededList",
    },
    on_failure: {
      value: cdktf.listMapperHcl(jobWebhookNotificationsOnFailureToHclTerraform, true)(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "JobWebhookNotificationsOnFailureList",
    },
    on_start: {
      value: cdktf.listMapperHcl(jobWebhookNotificationsOnStartToHclTerraform, true)(struct!.onStart),
      isBlock: true,
      type: "list",
      storageClassType: "JobWebhookNotificationsOnStartList",
    },
    on_streaming_backlog_exceeded: {
      value: cdktf.listMapperHcl(jobWebhookNotificationsOnStreamingBacklogExceededToHclTerraform, true)(struct!.onStreamingBacklogExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "JobWebhookNotificationsOnStreamingBacklogExceededList",
    },
    on_success: {
      value: cdktf.listMapperHcl(jobWebhookNotificationsOnSuccessToHclTerraform, true)(struct!.onSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "JobWebhookNotificationsOnSuccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobWebhookNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobWebhookNotifications | undefined {
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

  public set internalValue(value: JobWebhookNotifications | undefined) {
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
  private _onDurationWarningThresholdExceeded = new JobWebhookNotificationsOnDurationWarningThresholdExceededList(this, "on_duration_warning_threshold_exceeded", false);
  public get onDurationWarningThresholdExceeded() {
    return this._onDurationWarningThresholdExceeded;
  }
  public putOnDurationWarningThresholdExceeded(value: JobWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktf.IResolvable) {
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
  private _onFailure = new JobWebhookNotificationsOnFailureList(this, "on_failure", false);
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: JobWebhookNotificationsOnFailure[] | cdktf.IResolvable) {
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
  private _onStart = new JobWebhookNotificationsOnStartList(this, "on_start", false);
  public get onStart() {
    return this._onStart;
  }
  public putOnStart(value: JobWebhookNotificationsOnStart[] | cdktf.IResolvable) {
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
  private _onStreamingBacklogExceeded = new JobWebhookNotificationsOnStreamingBacklogExceededList(this, "on_streaming_backlog_exceeded", false);
  public get onStreamingBacklogExceeded() {
    return this._onStreamingBacklogExceeded;
  }
  public putOnStreamingBacklogExceeded(value: JobWebhookNotificationsOnStreamingBacklogExceeded[] | cdktf.IResolvable) {
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
  private _onSuccess = new JobWebhookNotificationsOnSuccessList(this, "on_success", false);
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: JobWebhookNotificationsOnSuccess[] | cdktf.IResolvable) {
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
