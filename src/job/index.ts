// generated from terraform resource schema

import { JobContinuous, 
jobContinuousToTerraform, 
jobContinuousToHclTerraform, 
JobContinuousOutputReference, 
JobDbtTask, 
jobDbtTaskToTerraform, 
jobDbtTaskToHclTerraform, 
JobDbtTaskOutputReference, 
JobDeployment, 
jobDeploymentToTerraform, 
jobDeploymentToHclTerraform, 
JobDeploymentOutputReference, 
JobEmailNotifications, 
jobEmailNotificationsToTerraform, 
jobEmailNotificationsToHclTerraform, 
JobEmailNotificationsOutputReference, 
JobEnvironment, 
jobEnvironmentToTerraform, 
jobEnvironmentToHclTerraform, 
JobEnvironmentList, 
JobGitSource, 
jobGitSourceToTerraform, 
jobGitSourceToHclTerraform, 
JobGitSourceOutputReference, 
JobHealth, 
jobHealthToTerraform, 
jobHealthToHclTerraform, 
JobHealthOutputReference, 
JobJobCluster, 
jobJobClusterToTerraform, 
jobJobClusterToHclTerraform, 
JobJobClusterList, 
JobLibrary, 
jobLibraryToTerraform, 
jobLibraryToHclTerraform, 
JobLibraryList, 
JobNewCluster, 
jobNewClusterToTerraform, 
jobNewClusterToHclTerraform, 
JobNewClusterOutputReference, 
JobNotebookTask, 
jobNotebookTaskToTerraform, 
jobNotebookTaskToHclTerraform, 
JobNotebookTaskOutputReference, 
JobNotificationSettings, 
jobNotificationSettingsToTerraform, 
jobNotificationSettingsToHclTerraform, 
JobNotificationSettingsOutputReference, 
JobParameter, 
jobParameterToTerraform, 
jobParameterToHclTerraform, 
JobParameterList, 
JobPipelineTask, 
jobPipelineTaskToTerraform, 
jobPipelineTaskToHclTerraform, 
JobPipelineTaskOutputReference, 
JobPythonWheelTask, 
jobPythonWheelTaskToTerraform, 
jobPythonWheelTaskToHclTerraform, 
JobPythonWheelTaskOutputReference, 
JobQueue, 
jobQueueToTerraform, 
jobQueueToHclTerraform, 
JobQueueOutputReference, 
JobRunAs, 
jobRunAsToTerraform, 
jobRunAsToHclTerraform, 
JobRunAsOutputReference, 
JobRunJobTask, 
jobRunJobTaskToTerraform, 
jobRunJobTaskToHclTerraform, 
JobRunJobTaskOutputReference, 
JobSchedule, 
jobScheduleToTerraform, 
jobScheduleToHclTerraform, 
JobScheduleOutputReference, 
JobSparkJarTask, 
jobSparkJarTaskToTerraform, 
jobSparkJarTaskToHclTerraform, 
JobSparkJarTaskOutputReference, 
JobSparkPythonTask, 
jobSparkPythonTaskToTerraform, 
jobSparkPythonTaskToHclTerraform, 
JobSparkPythonTaskOutputReference, 
JobSparkSubmitTask, 
jobSparkSubmitTaskToTerraform, 
jobSparkSubmitTaskToHclTerraform, 
JobSparkSubmitTaskOutputReference, 
JobTask, 
jobTaskToTerraform, 
jobTaskToHclTerraform, 
JobTaskList, 
JobTimeouts, 
jobTimeoutsToTerraform, 
jobTimeoutsToHclTerraform, 
JobTimeoutsOutputReference, 
JobTrigger, 
jobTriggerToTerraform, 
jobTriggerToHclTerraform, 
JobTriggerOutputReference, 
JobWebhookNotifications, 
jobWebhookNotificationsToTerraform, 
jobWebhookNotificationsToHclTerraform, 
JobWebhookNotificationsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface JobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#always_running Job#always_running}
  */
  readonly alwaysRunning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#budget_policy_id Job#budget_policy_id}
  */
  readonly budgetPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#control_run_state Job#control_run_state}
  */
  readonly controlRunState?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#description Job#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#edit_mode Job#edit_mode}
  */
  readonly editMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#existing_cluster_id Job#existing_cluster_id}
  */
  readonly existingClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#format Job#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#max_concurrent_runs Job#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#max_retries Job#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#min_retry_interval_millis Job#min_retry_interval_millis}
  */
  readonly minRetryIntervalMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#name Job#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#retry_on_timeout Job#retry_on_timeout}
  */
  readonly retryOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#tags Job#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#timeout_seconds Job#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * continuous block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#continuous Job#continuous}
  */
  readonly continuous?: JobContinuous;
  /**
  * dbt_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#dbt_task Job#dbt_task}
  */
  readonly dbtTask?: JobDbtTask;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#deployment Job#deployment}
  */
  readonly deployment?: JobDeployment;
  /**
  * email_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#email_notifications Job#email_notifications}
  */
  readonly emailNotifications?: JobEmailNotifications;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#environment Job#environment}
  */
  readonly environment?: JobEnvironment[] | cdktf.IResolvable;
  /**
  * git_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#git_source Job#git_source}
  */
  readonly gitSource?: JobGitSource;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#health Job#health}
  */
  readonly health?: JobHealth;
  /**
  * job_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#job_cluster Job#job_cluster}
  */
  readonly jobCluster?: JobJobCluster[] | cdktf.IResolvable;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#library Job#library}
  */
  readonly library?: JobLibrary[] | cdktf.IResolvable;
  /**
  * new_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#new_cluster Job#new_cluster}
  */
  readonly newCluster?: JobNewCluster;
  /**
  * notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#notebook_task Job#notebook_task}
  */
  readonly notebookTask?: JobNotebookTask;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#notification_settings Job#notification_settings}
  */
  readonly notificationSettings?: JobNotificationSettings;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#parameter Job#parameter}
  */
  readonly parameter?: JobParameter[] | cdktf.IResolvable;
  /**
  * pipeline_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#pipeline_task Job#pipeline_task}
  */
  readonly pipelineTask?: JobPipelineTask;
  /**
  * python_wheel_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#python_wheel_task Job#python_wheel_task}
  */
  readonly pythonWheelTask?: JobPythonWheelTask;
  /**
  * queue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#queue Job#queue}
  */
  readonly queue?: JobQueue;
  /**
  * run_as block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#run_as Job#run_as}
  */
  readonly runAs?: JobRunAs;
  /**
  * run_job_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#run_job_task Job#run_job_task}
  */
  readonly runJobTask?: JobRunJobTask;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#schedule Job#schedule}
  */
  readonly schedule?: JobSchedule;
  /**
  * spark_jar_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#spark_jar_task Job#spark_jar_task}
  */
  readonly sparkJarTask?: JobSparkJarTask;
  /**
  * spark_python_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#spark_python_task Job#spark_python_task}
  */
  readonly sparkPythonTask?: JobSparkPythonTask;
  /**
  * spark_submit_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#spark_submit_task Job#spark_submit_task}
  */
  readonly sparkSubmitTask?: JobSparkSubmitTask;
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#task Job#task}
  */
  readonly task?: JobTask[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#timeouts Job#timeouts}
  */
  readonly timeouts?: JobTimeouts;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#trigger Job#trigger}
  */
  readonly trigger?: JobTrigger;
  /**
  * webhook_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#webhook_notifications Job#webhook_notifications}
  */
  readonly webhookNotifications?: JobWebhookNotifications;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job databricks_job}
*/
export class Job extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Job resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Job to import
  * @param importFromId The id of the existing Job that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Job to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/resources/job databricks_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JobConfig = {}
  */
  public constructor(scope: Construct, id: string, config: JobConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_job',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.57.0',
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
    this._alwaysRunning = config.alwaysRunning;
    this._budgetPolicyId = config.budgetPolicyId;
    this._controlRunState = config.controlRunState;
    this._description = config.description;
    this._editMode = config.editMode;
    this._existingClusterId = config.existingClusterId;
    this._format = config.format;
    this._id = config.id;
    this._maxConcurrentRuns = config.maxConcurrentRuns;
    this._maxRetries = config.maxRetries;
    this._minRetryIntervalMillis = config.minRetryIntervalMillis;
    this._name = config.name;
    this._retryOnTimeout = config.retryOnTimeout;
    this._tags = config.tags;
    this._timeoutSeconds = config.timeoutSeconds;
    this._continuous.internalValue = config.continuous;
    this._dbtTask.internalValue = config.dbtTask;
    this._deployment.internalValue = config.deployment;
    this._emailNotifications.internalValue = config.emailNotifications;
    this._environment.internalValue = config.environment;
    this._gitSource.internalValue = config.gitSource;
    this._health.internalValue = config.health;
    this._jobCluster.internalValue = config.jobCluster;
    this._library.internalValue = config.library;
    this._newCluster.internalValue = config.newCluster;
    this._notebookTask.internalValue = config.notebookTask;
    this._notificationSettings.internalValue = config.notificationSettings;
    this._parameter.internalValue = config.parameter;
    this._pipelineTask.internalValue = config.pipelineTask;
    this._pythonWheelTask.internalValue = config.pythonWheelTask;
    this._queue.internalValue = config.queue;
    this._runAs.internalValue = config.runAs;
    this._runJobTask.internalValue = config.runJobTask;
    this._schedule.internalValue = config.schedule;
    this._sparkJarTask.internalValue = config.sparkJarTask;
    this._sparkPythonTask.internalValue = config.sparkPythonTask;
    this._sparkSubmitTask.internalValue = config.sparkSubmitTask;
    this._task.internalValue = config.task;
    this._timeouts.internalValue = config.timeouts;
    this._trigger.internalValue = config.trigger;
    this._webhookNotifications.internalValue = config.webhookNotifications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_running - computed: false, optional: true, required: false
  private _alwaysRunning?: boolean | cdktf.IResolvable; 
  public get alwaysRunning() {
    return this.getBooleanAttribute('always_running');
  }
  public set alwaysRunning(value: boolean | cdktf.IResolvable) {
    this._alwaysRunning = value;
  }
  public resetAlwaysRunning() {
    this._alwaysRunning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysRunningInput() {
    return this._alwaysRunning;
  }

  // budget_policy_id - computed: false, optional: true, required: false
  private _budgetPolicyId?: string; 
  public get budgetPolicyId() {
    return this.getStringAttribute('budget_policy_id');
  }
  public set budgetPolicyId(value: string) {
    this._budgetPolicyId = value;
  }
  public resetBudgetPolicyId() {
    this._budgetPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetPolicyIdInput() {
    return this._budgetPolicyId;
  }

  // control_run_state - computed: false, optional: true, required: false
  private _controlRunState?: boolean | cdktf.IResolvable; 
  public get controlRunState() {
    return this.getBooleanAttribute('control_run_state');
  }
  public set controlRunState(value: boolean | cdktf.IResolvable) {
    this._controlRunState = value;
  }
  public resetControlRunState() {
    this._controlRunState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlRunStateInput() {
    return this._controlRunState;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // continuous - computed: false, optional: true, required: false
  private _continuous = new JobContinuousOutputReference(this, "continuous");
  public get continuous() {
    return this._continuous;
  }
  public putContinuous(value: JobContinuous) {
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
  private _dbtTask = new JobDbtTaskOutputReference(this, "dbt_task");
  public get dbtTask() {
    return this._dbtTask;
  }
  public putDbtTask(value: JobDbtTask) {
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
  private _deployment = new JobDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: JobDeployment) {
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
  private _emailNotifications = new JobEmailNotificationsOutputReference(this, "email_notifications");
  public get emailNotifications() {
    return this._emailNotifications;
  }
  public putEmailNotifications(value: JobEmailNotifications) {
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
  private _environment = new JobEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: JobEnvironment[] | cdktf.IResolvable) {
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
  private _gitSource = new JobGitSourceOutputReference(this, "git_source");
  public get gitSource() {
    return this._gitSource;
  }
  public putGitSource(value: JobGitSource) {
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
  private _health = new JobHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: JobHealth) {
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
  private _jobCluster = new JobJobClusterList(this, "job_cluster", false);
  public get jobCluster() {
    return this._jobCluster;
  }
  public putJobCluster(value: JobJobCluster[] | cdktf.IResolvable) {
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
  private _library = new JobLibraryList(this, "library", false);
  public get library() {
    return this._library;
  }
  public putLibrary(value: JobLibrary[] | cdktf.IResolvable) {
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
  private _newCluster = new JobNewClusterOutputReference(this, "new_cluster");
  public get newCluster() {
    return this._newCluster;
  }
  public putNewCluster(value: JobNewCluster) {
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
  private _notebookTask = new JobNotebookTaskOutputReference(this, "notebook_task");
  public get notebookTask() {
    return this._notebookTask;
  }
  public putNotebookTask(value: JobNotebookTask) {
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
  private _notificationSettings = new JobNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: JobNotificationSettings) {
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
  private _parameter = new JobParameterList(this, "parameter", false);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: JobParameter[] | cdktf.IResolvable) {
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
  private _pipelineTask = new JobPipelineTaskOutputReference(this, "pipeline_task");
  public get pipelineTask() {
    return this._pipelineTask;
  }
  public putPipelineTask(value: JobPipelineTask) {
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
  private _pythonWheelTask = new JobPythonWheelTaskOutputReference(this, "python_wheel_task");
  public get pythonWheelTask() {
    return this._pythonWheelTask;
  }
  public putPythonWheelTask(value: JobPythonWheelTask) {
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
  private _queue = new JobQueueOutputReference(this, "queue");
  public get queue() {
    return this._queue;
  }
  public putQueue(value: JobQueue) {
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
  private _runAs = new JobRunAsOutputReference(this, "run_as");
  public get runAs() {
    return this._runAs;
  }
  public putRunAs(value: JobRunAs) {
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
  private _runJobTask = new JobRunJobTaskOutputReference(this, "run_job_task");
  public get runJobTask() {
    return this._runJobTask;
  }
  public putRunJobTask(value: JobRunJobTask) {
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
  private _schedule = new JobScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: JobSchedule) {
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
  private _sparkJarTask = new JobSparkJarTaskOutputReference(this, "spark_jar_task");
  public get sparkJarTask() {
    return this._sparkJarTask;
  }
  public putSparkJarTask(value: JobSparkJarTask) {
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
  private _sparkPythonTask = new JobSparkPythonTaskOutputReference(this, "spark_python_task");
  public get sparkPythonTask() {
    return this._sparkPythonTask;
  }
  public putSparkPythonTask(value: JobSparkPythonTask) {
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
  private _sparkSubmitTask = new JobSparkSubmitTaskOutputReference(this, "spark_submit_task");
  public get sparkSubmitTask() {
    return this._sparkSubmitTask;
  }
  public putSparkSubmitTask(value: JobSparkSubmitTask) {
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
  private _task = new JobTaskList(this, "task", false);
  public get task() {
    return this._task;
  }
  public putTask(value: JobTask[] | cdktf.IResolvable) {
    this._task.internalValue = value;
  }
  public resetTask() {
    this._task.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new JobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: JobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new JobTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: JobTrigger) {
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
  private _webhookNotifications = new JobWebhookNotificationsOutputReference(this, "webhook_notifications");
  public get webhookNotifications() {
    return this._webhookNotifications;
  }
  public putWebhookNotifications(value: JobWebhookNotifications) {
    this._webhookNotifications.internalValue = value;
  }
  public resetWebhookNotifications() {
    this._webhookNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookNotificationsInput() {
    return this._webhookNotifications.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_running: cdktf.booleanToTerraform(this._alwaysRunning),
      budget_policy_id: cdktf.stringToTerraform(this._budgetPolicyId),
      control_run_state: cdktf.booleanToTerraform(this._controlRunState),
      description: cdktf.stringToTerraform(this._description),
      edit_mode: cdktf.stringToTerraform(this._editMode),
      existing_cluster_id: cdktf.stringToTerraform(this._existingClusterId),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      max_concurrent_runs: cdktf.numberToTerraform(this._maxConcurrentRuns),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      min_retry_interval_millis: cdktf.numberToTerraform(this._minRetryIntervalMillis),
      name: cdktf.stringToTerraform(this._name),
      retry_on_timeout: cdktf.booleanToTerraform(this._retryOnTimeout),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeout_seconds: cdktf.numberToTerraform(this._timeoutSeconds),
      continuous: jobContinuousToTerraform(this._continuous.internalValue),
      dbt_task: jobDbtTaskToTerraform(this._dbtTask.internalValue),
      deployment: jobDeploymentToTerraform(this._deployment.internalValue),
      email_notifications: jobEmailNotificationsToTerraform(this._emailNotifications.internalValue),
      environment: cdktf.listMapper(jobEnvironmentToTerraform, true)(this._environment.internalValue),
      git_source: jobGitSourceToTerraform(this._gitSource.internalValue),
      health: jobHealthToTerraform(this._health.internalValue),
      job_cluster: cdktf.listMapper(jobJobClusterToTerraform, true)(this._jobCluster.internalValue),
      library: cdktf.listMapper(jobLibraryToTerraform, true)(this._library.internalValue),
      new_cluster: jobNewClusterToTerraform(this._newCluster.internalValue),
      notebook_task: jobNotebookTaskToTerraform(this._notebookTask.internalValue),
      notification_settings: jobNotificationSettingsToTerraform(this._notificationSettings.internalValue),
      parameter: cdktf.listMapper(jobParameterToTerraform, true)(this._parameter.internalValue),
      pipeline_task: jobPipelineTaskToTerraform(this._pipelineTask.internalValue),
      python_wheel_task: jobPythonWheelTaskToTerraform(this._pythonWheelTask.internalValue),
      queue: jobQueueToTerraform(this._queue.internalValue),
      run_as: jobRunAsToTerraform(this._runAs.internalValue),
      run_job_task: jobRunJobTaskToTerraform(this._runJobTask.internalValue),
      schedule: jobScheduleToTerraform(this._schedule.internalValue),
      spark_jar_task: jobSparkJarTaskToTerraform(this._sparkJarTask.internalValue),
      spark_python_task: jobSparkPythonTaskToTerraform(this._sparkPythonTask.internalValue),
      spark_submit_task: jobSparkSubmitTaskToTerraform(this._sparkSubmitTask.internalValue),
      task: cdktf.listMapper(jobTaskToTerraform, true)(this._task.internalValue),
      timeouts: jobTimeoutsToTerraform(this._timeouts.internalValue),
      trigger: jobTriggerToTerraform(this._trigger.internalValue),
      webhook_notifications: jobWebhookNotificationsToTerraform(this._webhookNotifications.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_running: {
        value: cdktf.booleanToHclTerraform(this._alwaysRunning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      budget_policy_id: {
        value: cdktf.stringToHclTerraform(this._budgetPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_run_state: {
        value: cdktf.booleanToHclTerraform(this._controlRunState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edit_mode: {
        value: cdktf.stringToHclTerraform(this._editMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existing_cluster_id: {
        value: cdktf.stringToHclTerraform(this._existingClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      max_concurrent_runs: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentRuns),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_retry_interval_millis: {
        value: cdktf.numberToHclTerraform(this._minRetryIntervalMillis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_on_timeout: {
        value: cdktf.booleanToHclTerraform(this._retryOnTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      continuous: {
        value: jobContinuousToHclTerraform(this._continuous.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobContinuousList",
      },
      dbt_task: {
        value: jobDbtTaskToHclTerraform(this._dbtTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobDbtTaskList",
      },
      deployment: {
        value: jobDeploymentToHclTerraform(this._deployment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobDeploymentList",
      },
      email_notifications: {
        value: jobEmailNotificationsToHclTerraform(this._emailNotifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobEmailNotificationsList",
      },
      environment: {
        value: cdktf.listMapperHcl(jobEnvironmentToHclTerraform, true)(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobEnvironmentList",
      },
      git_source: {
        value: jobGitSourceToHclTerraform(this._gitSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobGitSourceList",
      },
      health: {
        value: jobHealthToHclTerraform(this._health.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobHealthList",
      },
      job_cluster: {
        value: cdktf.listMapperHcl(jobJobClusterToHclTerraform, true)(this._jobCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobJobClusterList",
      },
      library: {
        value: cdktf.listMapperHcl(jobLibraryToHclTerraform, true)(this._library.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobLibraryList",
      },
      new_cluster: {
        value: jobNewClusterToHclTerraform(this._newCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobNewClusterList",
      },
      notebook_task: {
        value: jobNotebookTaskToHclTerraform(this._notebookTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobNotebookTaskList",
      },
      notification_settings: {
        value: jobNotificationSettingsToHclTerraform(this._notificationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobNotificationSettingsList",
      },
      parameter: {
        value: cdktf.listMapperHcl(jobParameterToHclTerraform, true)(this._parameter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobParameterList",
      },
      pipeline_task: {
        value: jobPipelineTaskToHclTerraform(this._pipelineTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobPipelineTaskList",
      },
      python_wheel_task: {
        value: jobPythonWheelTaskToHclTerraform(this._pythonWheelTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobPythonWheelTaskList",
      },
      queue: {
        value: jobQueueToHclTerraform(this._queue.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobQueueList",
      },
      run_as: {
        value: jobRunAsToHclTerraform(this._runAs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobRunAsList",
      },
      run_job_task: {
        value: jobRunJobTaskToHclTerraform(this._runJobTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobRunJobTaskList",
      },
      schedule: {
        value: jobScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobScheduleList",
      },
      spark_jar_task: {
        value: jobSparkJarTaskToHclTerraform(this._sparkJarTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobSparkJarTaskList",
      },
      spark_python_task: {
        value: jobSparkPythonTaskToHclTerraform(this._sparkPythonTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobSparkPythonTaskList",
      },
      spark_submit_task: {
        value: jobSparkSubmitTaskToHclTerraform(this._sparkSubmitTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobSparkSubmitTaskList",
      },
      task: {
        value: cdktf.listMapperHcl(jobTaskToHclTerraform, true)(this._task.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobTaskList",
      },
      timeouts: {
        value: jobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "JobTimeouts",
      },
      trigger: {
        value: jobTriggerToHclTerraform(this._trigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobTriggerList",
      },
      webhook_notifications: {
        value: jobWebhookNotificationsToHclTerraform(this._webhookNotifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobWebhookNotificationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
