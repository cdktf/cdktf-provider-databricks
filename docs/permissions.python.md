# `permissions` Submodule <a name="`permissions` Submodule" id="@cdktf/provider-databricks.permissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Permissions <a name="Permissions" id="@cdktf/provider-databricks.permissions.Permissions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions databricks_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.permissions.Permissions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import permissions

permissions.Permissions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_control: typing.Union[IResolvable, typing.List[PermissionsAccessControl]],
  authorization: str = None,
  cluster_id: str = None,
  cluster_policy_id: str = None,
  directory_id: str = None,
  directory_path: str = None,
  experiment_id: str = None,
  id: str = None,
  instance_pool_id: str = None,
  job_id: str = None,
  notebook_id: str = None,
  notebook_path: str = None,
  object_type: str = None,
  pipeline_id: str = None,
  registered_model_id: str = None,
  repo_id: str = None,
  repo_path: str = None,
  serving_endpoint_id: str = None,
  sql_alert_id: str = None,
  sql_dashboard_id: str = None,
  sql_endpoint_id: str = None,
  sql_query_id: str = None,
  workspace_file_id: str = None,
  workspace_file_path: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.accessControl">access_control</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>]]</code> | access_control block. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#authorization Permissions#authorization}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#cluster_id Permissions#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.clusterPolicyId">cluster_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#cluster_policy_id Permissions#cluster_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#directory_id Permissions#directory_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.directoryPath">directory_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#directory_path Permissions#directory_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.experimentId">experiment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#experiment_id Permissions#experiment_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#id Permissions#id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.instancePoolId">instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#instance_pool_id Permissions#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.jobId">job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#job_id Permissions#job_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.notebookId">notebook_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#notebook_id Permissions#notebook_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.notebookPath">notebook_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#notebook_path Permissions#notebook_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#object_type Permissions#object_type}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.pipelineId">pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#pipeline_id Permissions#pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.registeredModelId">registered_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#registered_model_id Permissions#registered_model_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.repoId">repo_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#repo_id Permissions#repo_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.repoPath">repo_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#repo_path Permissions#repo_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.servingEndpointId">serving_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#serving_endpoint_id Permissions#serving_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlAlertId">sql_alert_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_alert_id Permissions#sql_alert_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlDashboardId">sql_dashboard_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_dashboard_id Permissions#sql_dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlEndpointId">sql_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_endpoint_id Permissions#sql_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlQueryId">sql_query_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_query_id Permissions#sql_query_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.workspaceFileId">workspace_file_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#workspace_file_id Permissions#workspace_file_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.workspaceFilePath">workspace_file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#workspace_file_path Permissions#workspace_file_path}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_control`<sup>Required</sup> <a name="access_control" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.accessControl"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>]]

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#access_control Permissions#access_control}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#authorization Permissions#authorization}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#cluster_id Permissions#cluster_id}.

---

##### `cluster_policy_id`<sup>Optional</sup> <a name="cluster_policy_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.clusterPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#cluster_policy_id Permissions#cluster_policy_id}.

---

##### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#directory_id Permissions#directory_id}.

---

##### `directory_path`<sup>Optional</sup> <a name="directory_path" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.directoryPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#directory_path Permissions#directory_path}.

---

##### `experiment_id`<sup>Optional</sup> <a name="experiment_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.experimentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#experiment_id Permissions#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#id Permissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_pool_id`<sup>Optional</sup> <a name="instance_pool_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.instancePoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#instance_pool_id Permissions#instance_pool_id}.

---

##### `job_id`<sup>Optional</sup> <a name="job_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.jobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#job_id Permissions#job_id}.

---

##### `notebook_id`<sup>Optional</sup> <a name="notebook_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.notebookId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#notebook_id Permissions#notebook_id}.

---

##### `notebook_path`<sup>Optional</sup> <a name="notebook_path" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.notebookPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#notebook_path Permissions#notebook_path}.

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.objectType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#object_type Permissions#object_type}.

---

##### `pipeline_id`<sup>Optional</sup> <a name="pipeline_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.pipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#pipeline_id Permissions#pipeline_id}.

---

##### `registered_model_id`<sup>Optional</sup> <a name="registered_model_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.registeredModelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#registered_model_id Permissions#registered_model_id}.

---

##### `repo_id`<sup>Optional</sup> <a name="repo_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.repoId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#repo_id Permissions#repo_id}.

---

##### `repo_path`<sup>Optional</sup> <a name="repo_path" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.repoPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#repo_path Permissions#repo_path}.

---

##### `serving_endpoint_id`<sup>Optional</sup> <a name="serving_endpoint_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.servingEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#serving_endpoint_id Permissions#serving_endpoint_id}.

---

##### `sql_alert_id`<sup>Optional</sup> <a name="sql_alert_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlAlertId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_alert_id Permissions#sql_alert_id}.

---

##### `sql_dashboard_id`<sup>Optional</sup> <a name="sql_dashboard_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlDashboardId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_dashboard_id Permissions#sql_dashboard_id}.

---

##### `sql_endpoint_id`<sup>Optional</sup> <a name="sql_endpoint_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_endpoint_id Permissions#sql_endpoint_id}.

---

##### `sql_query_id`<sup>Optional</sup> <a name="sql_query_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlQueryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_query_id Permissions#sql_query_id}.

---

##### `workspace_file_id`<sup>Optional</sup> <a name="workspace_file_id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.workspaceFileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#workspace_file_id Permissions#workspace_file_id}.

---

##### `workspace_file_path`<sup>Optional</sup> <a name="workspace_file_path" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.workspaceFilePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#workspace_file_path Permissions#workspace_file_path}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.putAccessControl">put_access_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetClusterPolicyId">reset_cluster_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetDirectoryId">reset_directory_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetDirectoryPath">reset_directory_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetExperimentId">reset_experiment_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetInstancePoolId">reset_instance_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetJobId">reset_job_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetNotebookId">reset_notebook_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetNotebookPath">reset_notebook_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetObjectType">reset_object_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetPipelineId">reset_pipeline_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetRegisteredModelId">reset_registered_model_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetRepoId">reset_repo_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetRepoPath">reset_repo_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetServingEndpointId">reset_serving_endpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetSqlAlertId">reset_sql_alert_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetSqlDashboardId">reset_sql_dashboard_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetSqlEndpointId">reset_sql_endpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetSqlQueryId">reset_sql_query_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetWorkspaceFileId">reset_workspace_file_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetWorkspaceFilePath">reset_workspace_file_path</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.permissions.Permissions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.permissions.Permissions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.permissions.Permissions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.permissions.Permissions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.permissions.Permissions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.permissions.Permissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.permissions.Permissions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.permissions.Permissions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.permissions.Permissions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.permissions.Permissions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.permissions.Permissions.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.permissions.Permissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.Permissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.permissions.Permissions.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.permissions.Permissions.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissions.Permissions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.permissions.Permissions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.Permissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.permissions.Permissions.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.permissions.Permissions.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.permissions.Permissions.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.permissions.Permissions.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.permissions.Permissions.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_control` <a name="put_access_control" id="@cdktf/provider-databricks.permissions.Permissions.putAccessControl"></a>

```python
def put_access_control(
  value: typing.Union[IResolvable, typing.List[PermissionsAccessControl]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.permissions.Permissions.putAccessControl.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>]]

---

##### `reset_authorization` <a name="reset_authorization" id="@cdktf/provider-databricks.permissions.Permissions.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-databricks.permissions.Permissions.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_cluster_policy_id` <a name="reset_cluster_policy_id" id="@cdktf/provider-databricks.permissions.Permissions.resetClusterPolicyId"></a>

```python
def reset_cluster_policy_id() -> None
```

##### `reset_directory_id` <a name="reset_directory_id" id="@cdktf/provider-databricks.permissions.Permissions.resetDirectoryId"></a>

```python
def reset_directory_id() -> None
```

##### `reset_directory_path` <a name="reset_directory_path" id="@cdktf/provider-databricks.permissions.Permissions.resetDirectoryPath"></a>

```python
def reset_directory_path() -> None
```

##### `reset_experiment_id` <a name="reset_experiment_id" id="@cdktf/provider-databricks.permissions.Permissions.resetExperimentId"></a>

```python
def reset_experiment_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.permissions.Permissions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_pool_id` <a name="reset_instance_pool_id" id="@cdktf/provider-databricks.permissions.Permissions.resetInstancePoolId"></a>

```python
def reset_instance_pool_id() -> None
```

##### `reset_job_id` <a name="reset_job_id" id="@cdktf/provider-databricks.permissions.Permissions.resetJobId"></a>

```python
def reset_job_id() -> None
```

##### `reset_notebook_id` <a name="reset_notebook_id" id="@cdktf/provider-databricks.permissions.Permissions.resetNotebookId"></a>

```python
def reset_notebook_id() -> None
```

##### `reset_notebook_path` <a name="reset_notebook_path" id="@cdktf/provider-databricks.permissions.Permissions.resetNotebookPath"></a>

```python
def reset_notebook_path() -> None
```

##### `reset_object_type` <a name="reset_object_type" id="@cdktf/provider-databricks.permissions.Permissions.resetObjectType"></a>

```python
def reset_object_type() -> None
```

##### `reset_pipeline_id` <a name="reset_pipeline_id" id="@cdktf/provider-databricks.permissions.Permissions.resetPipelineId"></a>

```python
def reset_pipeline_id() -> None
```

##### `reset_registered_model_id` <a name="reset_registered_model_id" id="@cdktf/provider-databricks.permissions.Permissions.resetRegisteredModelId"></a>

```python
def reset_registered_model_id() -> None
```

##### `reset_repo_id` <a name="reset_repo_id" id="@cdktf/provider-databricks.permissions.Permissions.resetRepoId"></a>

```python
def reset_repo_id() -> None
```

##### `reset_repo_path` <a name="reset_repo_path" id="@cdktf/provider-databricks.permissions.Permissions.resetRepoPath"></a>

```python
def reset_repo_path() -> None
```

##### `reset_serving_endpoint_id` <a name="reset_serving_endpoint_id" id="@cdktf/provider-databricks.permissions.Permissions.resetServingEndpointId"></a>

```python
def reset_serving_endpoint_id() -> None
```

##### `reset_sql_alert_id` <a name="reset_sql_alert_id" id="@cdktf/provider-databricks.permissions.Permissions.resetSqlAlertId"></a>

```python
def reset_sql_alert_id() -> None
```

##### `reset_sql_dashboard_id` <a name="reset_sql_dashboard_id" id="@cdktf/provider-databricks.permissions.Permissions.resetSqlDashboardId"></a>

```python
def reset_sql_dashboard_id() -> None
```

##### `reset_sql_endpoint_id` <a name="reset_sql_endpoint_id" id="@cdktf/provider-databricks.permissions.Permissions.resetSqlEndpointId"></a>

```python
def reset_sql_endpoint_id() -> None
```

##### `reset_sql_query_id` <a name="reset_sql_query_id" id="@cdktf/provider-databricks.permissions.Permissions.resetSqlQueryId"></a>

```python
def reset_sql_query_id() -> None
```

##### `reset_workspace_file_id` <a name="reset_workspace_file_id" id="@cdktf/provider-databricks.permissions.Permissions.resetWorkspaceFileId"></a>

```python
def reset_workspace_file_id() -> None
```

##### `reset_workspace_file_path` <a name="reset_workspace_file_path" id="@cdktf/provider-databricks.permissions.Permissions.resetWorkspaceFilePath"></a>

```python
def reset_workspace_file_path() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Permissions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.permissions.Permissions.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import permissions

permissions.Permissions.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.permissions.Permissions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.permissions.Permissions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import permissions

permissions.Permissions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.permissions.Permissions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.permissions.Permissions.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import permissions

permissions.Permissions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.permissions.Permissions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import permissions

permissions.Permissions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Permissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Permissions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Permissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Permissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.accessControl">access_control</a></code> | <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList">PermissionsAccessControlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.accessControlInput">access_control_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.clusterPolicyIdInput">cluster_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.directoryPathInput">directory_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.experimentIdInput">experiment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.instancePoolIdInput">instance_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.jobIdInput">job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.notebookIdInput">notebook_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.notebookPathInput">notebook_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.pipelineIdInput">pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.registeredModelIdInput">registered_model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.repoIdInput">repo_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.repoPathInput">repo_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.servingEndpointIdInput">serving_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlAlertIdInput">sql_alert_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlDashboardIdInput">sql_dashboard_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlEndpointIdInput">sql_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlQueryIdInput">sql_query_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.workspaceFileIdInput">workspace_file_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.workspaceFilePathInput">workspace_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.clusterPolicyId">cluster_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.directoryPath">directory_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.experimentId">experiment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.notebookId">notebook_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.notebookPath">notebook_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.registeredModelId">registered_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.repoId">repo_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.repoPath">repo_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.servingEndpointId">serving_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlAlertId">sql_alert_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlDashboardId">sql_dashboard_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlEndpointId">sql_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlQueryId">sql_query_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.workspaceFileId">workspace_file_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.workspaceFilePath">workspace_file_path</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.permissions.Permissions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.permissions.Permissions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.permissions.Permissions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.permissions.Permissions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.permissions.Permissions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.permissions.Permissions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.permissions.Permissions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.permissions.Permissions.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.permissions.Permissions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.permissions.Permissions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.permissions.Permissions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.permissions.Permissions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissions.Permissions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.permissions.Permissions.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_control`<sup>Required</sup> <a name="access_control" id="@cdktf/provider-databricks.permissions.Permissions.property.accessControl"></a>

```python
access_control: PermissionsAccessControlList
```

- *Type:* <a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList">PermissionsAccessControlList</a>

---

##### `access_control_input`<sup>Optional</sup> <a name="access_control_input" id="@cdktf/provider-databricks.permissions.Permissions.property.accessControlInput"></a>

```python
access_control_input: typing.Union[IResolvable, typing.List[PermissionsAccessControl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>]]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktf/provider-databricks.permissions.Permissions.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `cluster_policy_id_input`<sup>Optional</sup> <a name="cluster_policy_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.clusterPolicyIdInput"></a>

```python
cluster_policy_id_input: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `directory_path_input`<sup>Optional</sup> <a name="directory_path_input" id="@cdktf/provider-databricks.permissions.Permissions.property.directoryPathInput"></a>

```python
directory_path_input: str
```

- *Type:* str

---

##### `experiment_id_input`<sup>Optional</sup> <a name="experiment_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.experimentIdInput"></a>

```python
experiment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_pool_id_input`<sup>Optional</sup> <a name="instance_pool_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.instancePoolIdInput"></a>

```python
instance_pool_id_input: str
```

- *Type:* str

---

##### `job_id_input`<sup>Optional</sup> <a name="job_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.jobIdInput"></a>

```python
job_id_input: str
```

- *Type:* str

---

##### `notebook_id_input`<sup>Optional</sup> <a name="notebook_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.notebookIdInput"></a>

```python
notebook_id_input: str
```

- *Type:* str

---

##### `notebook_path_input`<sup>Optional</sup> <a name="notebook_path_input" id="@cdktf/provider-databricks.permissions.Permissions.property.notebookPathInput"></a>

```python
notebook_path_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktf/provider-databricks.permissions.Permissions.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `pipeline_id_input`<sup>Optional</sup> <a name="pipeline_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.pipelineIdInput"></a>

```python
pipeline_id_input: str
```

- *Type:* str

---

##### `registered_model_id_input`<sup>Optional</sup> <a name="registered_model_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.registeredModelIdInput"></a>

```python
registered_model_id_input: str
```

- *Type:* str

---

##### `repo_id_input`<sup>Optional</sup> <a name="repo_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.repoIdInput"></a>

```python
repo_id_input: str
```

- *Type:* str

---

##### `repo_path_input`<sup>Optional</sup> <a name="repo_path_input" id="@cdktf/provider-databricks.permissions.Permissions.property.repoPathInput"></a>

```python
repo_path_input: str
```

- *Type:* str

---

##### `serving_endpoint_id_input`<sup>Optional</sup> <a name="serving_endpoint_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.servingEndpointIdInput"></a>

```python
serving_endpoint_id_input: str
```

- *Type:* str

---

##### `sql_alert_id_input`<sup>Optional</sup> <a name="sql_alert_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlAlertIdInput"></a>

```python
sql_alert_id_input: str
```

- *Type:* str

---

##### `sql_dashboard_id_input`<sup>Optional</sup> <a name="sql_dashboard_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlDashboardIdInput"></a>

```python
sql_dashboard_id_input: str
```

- *Type:* str

---

##### `sql_endpoint_id_input`<sup>Optional</sup> <a name="sql_endpoint_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlEndpointIdInput"></a>

```python
sql_endpoint_id_input: str
```

- *Type:* str

---

##### `sql_query_id_input`<sup>Optional</sup> <a name="sql_query_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlQueryIdInput"></a>

```python
sql_query_id_input: str
```

- *Type:* str

---

##### `workspace_file_id_input`<sup>Optional</sup> <a name="workspace_file_id_input" id="@cdktf/provider-databricks.permissions.Permissions.property.workspaceFileIdInput"></a>

```python
workspace_file_id_input: str
```

- *Type:* str

---

##### `workspace_file_path_input`<sup>Optional</sup> <a name="workspace_file_path_input" id="@cdktf/provider-databricks.permissions.Permissions.property.workspaceFilePathInput"></a>

```python
workspace_file_path_input: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-databricks.permissions.Permissions.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-databricks.permissions.Permissions.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `cluster_policy_id`<sup>Required</sup> <a name="cluster_policy_id" id="@cdktf/provider-databricks.permissions.Permissions.property.clusterPolicyId"></a>

```python
cluster_policy_id: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-databricks.permissions.Permissions.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `directory_path`<sup>Required</sup> <a name="directory_path" id="@cdktf/provider-databricks.permissions.Permissions.property.directoryPath"></a>

```python
directory_path: str
```

- *Type:* str

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktf/provider-databricks.permissions.Permissions.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_pool_id`<sup>Required</sup> <a name="instance_pool_id" id="@cdktf/provider-databricks.permissions.Permissions.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-databricks.permissions.Permissions.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `notebook_id`<sup>Required</sup> <a name="notebook_id" id="@cdktf/provider-databricks.permissions.Permissions.property.notebookId"></a>

```python
notebook_id: str
```

- *Type:* str

---

##### `notebook_path`<sup>Required</sup> <a name="notebook_path" id="@cdktf/provider-databricks.permissions.Permissions.property.notebookPath"></a>

```python
notebook_path: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-databricks.permissions.Permissions.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-databricks.permissions.Permissions.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `registered_model_id`<sup>Required</sup> <a name="registered_model_id" id="@cdktf/provider-databricks.permissions.Permissions.property.registeredModelId"></a>

```python
registered_model_id: str
```

- *Type:* str

---

##### `repo_id`<sup>Required</sup> <a name="repo_id" id="@cdktf/provider-databricks.permissions.Permissions.property.repoId"></a>

```python
repo_id: str
```

- *Type:* str

---

##### `repo_path`<sup>Required</sup> <a name="repo_path" id="@cdktf/provider-databricks.permissions.Permissions.property.repoPath"></a>

```python
repo_path: str
```

- *Type:* str

---

##### `serving_endpoint_id`<sup>Required</sup> <a name="serving_endpoint_id" id="@cdktf/provider-databricks.permissions.Permissions.property.servingEndpointId"></a>

```python
serving_endpoint_id: str
```

- *Type:* str

---

##### `sql_alert_id`<sup>Required</sup> <a name="sql_alert_id" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlAlertId"></a>

```python
sql_alert_id: str
```

- *Type:* str

---

##### `sql_dashboard_id`<sup>Required</sup> <a name="sql_dashboard_id" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlDashboardId"></a>

```python
sql_dashboard_id: str
```

- *Type:* str

---

##### `sql_endpoint_id`<sup>Required</sup> <a name="sql_endpoint_id" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlEndpointId"></a>

```python
sql_endpoint_id: str
```

- *Type:* str

---

##### `sql_query_id`<sup>Required</sup> <a name="sql_query_id" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlQueryId"></a>

```python
sql_query_id: str
```

- *Type:* str

---

##### `workspace_file_id`<sup>Required</sup> <a name="workspace_file_id" id="@cdktf/provider-databricks.permissions.Permissions.property.workspaceFileId"></a>

```python
workspace_file_id: str
```

- *Type:* str

---

##### `workspace_file_path`<sup>Required</sup> <a name="workspace_file_path" id="@cdktf/provider-databricks.permissions.Permissions.property.workspaceFilePath"></a>

```python
workspace_file_path: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.permissions.Permissions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PermissionsAccessControl <a name="PermissionsAccessControl" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import permissions

permissions.PermissionsAccessControl(
  permission_level: str,
  group_name: str = None,
  service_principal_name: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.permissionLevel">permission_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#permission_level Permissions#permission_level}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#group_name Permissions#group_name}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#service_principal_name Permissions#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#user_name Permissions#user_name}. |

---

##### `permission_level`<sup>Required</sup> <a name="permission_level" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.permissionLevel"></a>

```python
permission_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#permission_level Permissions#permission_level}.

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#group_name Permissions#group_name}.

---

##### `service_principal_name`<sup>Optional</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#service_principal_name Permissions#service_principal_name}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#user_name Permissions#user_name}.

---

### PermissionsConfig <a name="PermissionsConfig" id="@cdktf/provider-databricks.permissions.PermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.permissions.PermissionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import permissions

permissions.PermissionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_control: typing.Union[IResolvable, typing.List[PermissionsAccessControl]],
  authorization: str = None,
  cluster_id: str = None,
  cluster_policy_id: str = None,
  directory_id: str = None,
  directory_path: str = None,
  experiment_id: str = None,
  id: str = None,
  instance_pool_id: str = None,
  job_id: str = None,
  notebook_id: str = None,
  notebook_path: str = None,
  object_type: str = None,
  pipeline_id: str = None,
  registered_model_id: str = None,
  repo_id: str = None,
  repo_path: str = None,
  serving_endpoint_id: str = None,
  sql_alert_id: str = None,
  sql_dashboard_id: str = None,
  sql_endpoint_id: str = None,
  sql_query_id: str = None,
  workspace_file_id: str = None,
  workspace_file_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.accessControl">access_control</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>]]</code> | access_control block. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#authorization Permissions#authorization}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#cluster_id Permissions#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.clusterPolicyId">cluster_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#cluster_policy_id Permissions#cluster_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#directory_id Permissions#directory_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.directoryPath">directory_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#directory_path Permissions#directory_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.experimentId">experiment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#experiment_id Permissions#experiment_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#id Permissions#id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#instance_pool_id Permissions#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.jobId">job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#job_id Permissions#job_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.notebookId">notebook_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#notebook_id Permissions#notebook_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.notebookPath">notebook_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#notebook_path Permissions#notebook_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#object_type Permissions#object_type}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.pipelineId">pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#pipeline_id Permissions#pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.registeredModelId">registered_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#registered_model_id Permissions#registered_model_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.repoId">repo_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#repo_id Permissions#repo_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.repoPath">repo_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#repo_path Permissions#repo_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.servingEndpointId">serving_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#serving_endpoint_id Permissions#serving_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlAlertId">sql_alert_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_alert_id Permissions#sql_alert_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlDashboardId">sql_dashboard_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_dashboard_id Permissions#sql_dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlEndpointId">sql_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_endpoint_id Permissions#sql_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlQueryId">sql_query_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_query_id Permissions#sql_query_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.workspaceFileId">workspace_file_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#workspace_file_id Permissions#workspace_file_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.workspaceFilePath">workspace_file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#workspace_file_path Permissions#workspace_file_path}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_control`<sup>Required</sup> <a name="access_control" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.accessControl"></a>

```python
access_control: typing.Union[IResolvable, typing.List[PermissionsAccessControl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>]]

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#access_control Permissions#access_control}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#authorization Permissions#authorization}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#cluster_id Permissions#cluster_id}.

---

##### `cluster_policy_id`<sup>Optional</sup> <a name="cluster_policy_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.clusterPolicyId"></a>

```python
cluster_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#cluster_policy_id Permissions#cluster_policy_id}.

---

##### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#directory_id Permissions#directory_id}.

---

##### `directory_path`<sup>Optional</sup> <a name="directory_path" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.directoryPath"></a>

```python
directory_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#directory_path Permissions#directory_path}.

---

##### `experiment_id`<sup>Optional</sup> <a name="experiment_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#experiment_id Permissions#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#id Permissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_pool_id`<sup>Optional</sup> <a name="instance_pool_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#instance_pool_id Permissions#instance_pool_id}.

---

##### `job_id`<sup>Optional</sup> <a name="job_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#job_id Permissions#job_id}.

---

##### `notebook_id`<sup>Optional</sup> <a name="notebook_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.notebookId"></a>

```python
notebook_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#notebook_id Permissions#notebook_id}.

---

##### `notebook_path`<sup>Optional</sup> <a name="notebook_path" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.notebookPath"></a>

```python
notebook_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#notebook_path Permissions#notebook_path}.

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#object_type Permissions#object_type}.

---

##### `pipeline_id`<sup>Optional</sup> <a name="pipeline_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#pipeline_id Permissions#pipeline_id}.

---

##### `registered_model_id`<sup>Optional</sup> <a name="registered_model_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.registeredModelId"></a>

```python
registered_model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#registered_model_id Permissions#registered_model_id}.

---

##### `repo_id`<sup>Optional</sup> <a name="repo_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.repoId"></a>

```python
repo_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#repo_id Permissions#repo_id}.

---

##### `repo_path`<sup>Optional</sup> <a name="repo_path" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.repoPath"></a>

```python
repo_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#repo_path Permissions#repo_path}.

---

##### `serving_endpoint_id`<sup>Optional</sup> <a name="serving_endpoint_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.servingEndpointId"></a>

```python
serving_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#serving_endpoint_id Permissions#serving_endpoint_id}.

---

##### `sql_alert_id`<sup>Optional</sup> <a name="sql_alert_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlAlertId"></a>

```python
sql_alert_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_alert_id Permissions#sql_alert_id}.

---

##### `sql_dashboard_id`<sup>Optional</sup> <a name="sql_dashboard_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlDashboardId"></a>

```python
sql_dashboard_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_dashboard_id Permissions#sql_dashboard_id}.

---

##### `sql_endpoint_id`<sup>Optional</sup> <a name="sql_endpoint_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlEndpointId"></a>

```python
sql_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_endpoint_id Permissions#sql_endpoint_id}.

---

##### `sql_query_id`<sup>Optional</sup> <a name="sql_query_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlQueryId"></a>

```python
sql_query_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#sql_query_id Permissions#sql_query_id}.

---

##### `workspace_file_id`<sup>Optional</sup> <a name="workspace_file_id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.workspaceFileId"></a>

```python
workspace_file_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#workspace_file_id Permissions#workspace_file_id}.

---

##### `workspace_file_path`<sup>Optional</sup> <a name="workspace_file_path" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.workspaceFilePath"></a>

```python
workspace_file_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/permissions#workspace_file_path Permissions#workspace_file_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### PermissionsAccessControlList <a name="PermissionsAccessControlList" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import permissions

permissions.PermissionsAccessControlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PermissionsAccessControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PermissionsAccessControl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>]]

---


### PermissionsAccessControlOutputReference <a name="PermissionsAccessControlOutputReference" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import permissions

permissions.PermissionsAccessControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetGroupName">reset_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetServicePrincipalName">reset_service_principal_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_name` <a name="reset_group_name" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetGroupName"></a>

```python
def reset_group_name() -> None
```

##### `reset_service_principal_name` <a name="reset_service_principal_name" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetServicePrincipalName"></a>

```python
def reset_service_principal_name() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevelInput">permission_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalNameInput">service_principal_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevel">permission_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `permission_level_input`<sup>Optional</sup> <a name="permission_level_input" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevelInput"></a>

```python
permission_level_input: str
```

- *Type:* str

---

##### `service_principal_name_input`<sup>Optional</sup> <a name="service_principal_name_input" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalNameInput"></a>

```python
service_principal_name_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `permission_level`<sup>Required</sup> <a name="permission_level" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevel"></a>

```python
permission_level: str
```

- *Type:* str

---

##### `service_principal_name`<sup>Required</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PermissionsAccessControl]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>]

---



