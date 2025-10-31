# `permissions` Submodule <a name="`permissions` Submodule" id="@cdktf/provider-databricks.permissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Permissions <a name="Permissions" id="@cdktf/provider-databricks.permissions.Permissions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions databricks_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.permissions.Permissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.permissions.Permissions;

Permissions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessControl(IResolvable|java.util.List<PermissionsAccessControl>)
//  .alertV2Id(java.lang.String)
//  .appName(java.lang.String)
//  .authorization(java.lang.String)
//  .clusterId(java.lang.String)
//  .clusterPolicyId(java.lang.String)
//  .dashboardId(java.lang.String)
//  .databaseInstanceName(java.lang.String)
//  .directoryId(java.lang.String)
//  .directoryPath(java.lang.String)
//  .experimentId(java.lang.String)
//  .id(java.lang.String)
//  .instancePoolId(java.lang.String)
//  .jobId(java.lang.String)
//  .notebookId(java.lang.String)
//  .notebookPath(java.lang.String)
//  .objectType(java.lang.String)
//  .pipelineId(java.lang.String)
//  .registeredModelId(java.lang.String)
//  .repoId(java.lang.String)
//  .repoPath(java.lang.String)
//  .servingEndpointId(java.lang.String)
//  .sqlAlertId(java.lang.String)
//  .sqlDashboardId(java.lang.String)
//  .sqlEndpointId(java.lang.String)
//  .sqlQueryId(java.lang.String)
//  .vectorSearchEndpointId(java.lang.String)
//  .workspaceFileId(java.lang.String)
//  .workspaceFilePath(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.accessControl">accessControl</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>></code> | access_control block. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.alertV2Id">alertV2Id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#alert_v2_id Permissions#alert_v2_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.appName">appName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#app_name Permissions#app_name}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#authorization Permissions#authorization}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#cluster_id Permissions#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.clusterPolicyId">clusterPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#cluster_policy_id Permissions#cluster_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#dashboard_id Permissions#dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.databaseInstanceName">databaseInstanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#database_instance_name Permissions#database_instance_name}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#directory_id Permissions#directory_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.directoryPath">directoryPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#directory_path Permissions#directory_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.experimentId">experimentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#experiment_id Permissions#experiment_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#id Permissions#id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#instance_pool_id Permissions#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.jobId">jobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#job_id Permissions#job_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.notebookId">notebookId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#notebook_id Permissions#notebook_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.notebookPath">notebookPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#notebook_path Permissions#notebook_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.objectType">objectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#object_type Permissions#object_type}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#pipeline_id Permissions#pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.registeredModelId">registeredModelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#registered_model_id Permissions#registered_model_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.repoId">repoId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#repo_id Permissions#repo_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.repoPath">repoPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#repo_path Permissions#repo_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.servingEndpointId">servingEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#serving_endpoint_id Permissions#serving_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlAlertId">sqlAlertId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_alert_id Permissions#sql_alert_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlDashboardId">sqlDashboardId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_dashboard_id Permissions#sql_dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlEndpointId">sqlEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_endpoint_id Permissions#sql_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlQueryId">sqlQueryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_query_id Permissions#sql_query_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.vectorSearchEndpointId">vectorSearchEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#vector_search_endpoint_id Permissions#vector_search_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.workspaceFileId">workspaceFileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#workspace_file_id Permissions#workspace_file_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.workspaceFilePath">workspaceFilePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#workspace_file_path Permissions#workspace_file_path}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessControl`<sup>Required</sup> <a name="accessControl" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.accessControl"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>>

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#access_control Permissions#access_control}

---

##### `alertV2Id`<sup>Optional</sup> <a name="alertV2Id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.alertV2Id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#alert_v2_id Permissions#alert_v2_id}.

---

##### `appName`<sup>Optional</sup> <a name="appName" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.appName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#app_name Permissions#app_name}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#authorization Permissions#authorization}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#cluster_id Permissions#cluster_id}.

---

##### `clusterPolicyId`<sup>Optional</sup> <a name="clusterPolicyId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.clusterPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#cluster_policy_id Permissions#cluster_policy_id}.

---

##### `dashboardId`<sup>Optional</sup> <a name="dashboardId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.dashboardId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#dashboard_id Permissions#dashboard_id}.

---

##### `databaseInstanceName`<sup>Optional</sup> <a name="databaseInstanceName" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.databaseInstanceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#database_instance_name Permissions#database_instance_name}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.directoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#directory_id Permissions#directory_id}.

---

##### `directoryPath`<sup>Optional</sup> <a name="directoryPath" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.directoryPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#directory_path Permissions#directory_path}.

---

##### `experimentId`<sup>Optional</sup> <a name="experimentId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.experimentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#experiment_id Permissions#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#id Permissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instancePoolId`<sup>Optional</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.instancePoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#instance_pool_id Permissions#instance_pool_id}.

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.jobId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#job_id Permissions#job_id}.

---

##### `notebookId`<sup>Optional</sup> <a name="notebookId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.notebookId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#notebook_id Permissions#notebook_id}.

---

##### `notebookPath`<sup>Optional</sup> <a name="notebookPath" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.notebookPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#notebook_path Permissions#notebook_path}.

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.objectType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#object_type Permissions#object_type}.

---

##### `pipelineId`<sup>Optional</sup> <a name="pipelineId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.pipelineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#pipeline_id Permissions#pipeline_id}.

---

##### `registeredModelId`<sup>Optional</sup> <a name="registeredModelId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.registeredModelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#registered_model_id Permissions#registered_model_id}.

---

##### `repoId`<sup>Optional</sup> <a name="repoId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.repoId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#repo_id Permissions#repo_id}.

---

##### `repoPath`<sup>Optional</sup> <a name="repoPath" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.repoPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#repo_path Permissions#repo_path}.

---

##### `servingEndpointId`<sup>Optional</sup> <a name="servingEndpointId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.servingEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#serving_endpoint_id Permissions#serving_endpoint_id}.

---

##### `sqlAlertId`<sup>Optional</sup> <a name="sqlAlertId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlAlertId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_alert_id Permissions#sql_alert_id}.

---

##### `sqlDashboardId`<sup>Optional</sup> <a name="sqlDashboardId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlDashboardId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_dashboard_id Permissions#sql_dashboard_id}.

---

##### `sqlEndpointId`<sup>Optional</sup> <a name="sqlEndpointId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_endpoint_id Permissions#sql_endpoint_id}.

---

##### `sqlQueryId`<sup>Optional</sup> <a name="sqlQueryId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.sqlQueryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_query_id Permissions#sql_query_id}.

---

##### `vectorSearchEndpointId`<sup>Optional</sup> <a name="vectorSearchEndpointId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.vectorSearchEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#vector_search_endpoint_id Permissions#vector_search_endpoint_id}.

---

##### `workspaceFileId`<sup>Optional</sup> <a name="workspaceFileId" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.workspaceFileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#workspace_file_id Permissions#workspace_file_id}.

---

##### `workspaceFilePath`<sup>Optional</sup> <a name="workspaceFilePath" id="@cdktf/provider-databricks.permissions.Permissions.Initializer.parameter.workspaceFilePath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#workspace_file_path Permissions#workspace_file_path}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.putAccessControl">putAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetAlertV2Id">resetAlertV2Id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetAppName">resetAppName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetClusterPolicyId">resetClusterPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetDashboardId">resetDashboardId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetDatabaseInstanceName">resetDatabaseInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetDirectoryPath">resetDirectoryPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetExperimentId">resetExperimentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetInstancePoolId">resetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetJobId">resetJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetNotebookId">resetNotebookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetNotebookPath">resetNotebookPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetObjectType">resetObjectType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetPipelineId">resetPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetRegisteredModelId">resetRegisteredModelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetRepoId">resetRepoId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetRepoPath">resetRepoPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetServingEndpointId">resetServingEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetSqlAlertId">resetSqlAlertId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetSqlDashboardId">resetSqlDashboardId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetSqlEndpointId">resetSqlEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetSqlQueryId">resetSqlQueryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetVectorSearchEndpointId">resetVectorSearchEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetWorkspaceFileId">resetWorkspaceFileId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.resetWorkspaceFilePath">resetWorkspaceFilePath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.permissions.Permissions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.permissions.Permissions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.permissions.Permissions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.permissions.Permissions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.permissions.Permissions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.permissions.Permissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.permissions.Permissions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.permissions.Permissions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.permissions.Permissions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.permissions.Permissions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.permissions.Permissions.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.permissions.Permissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.permissions.Permissions.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.permissions.Permissions.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissions.Permissions.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.permissions.Permissions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.Permissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.permissions.Permissions.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.permissions.Permissions.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.permissions.Permissions.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.permissions.Permissions.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.permissions.Permissions.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessControl` <a name="putAccessControl" id="@cdktf/provider-databricks.permissions.Permissions.putAccessControl"></a>

```java
public void putAccessControl(IResolvable|java.util.List<PermissionsAccessControl> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.permissions.Permissions.putAccessControl.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>>

---

##### `resetAlertV2Id` <a name="resetAlertV2Id" id="@cdktf/provider-databricks.permissions.Permissions.resetAlertV2Id"></a>

```java
public void resetAlertV2Id()
```

##### `resetAppName` <a name="resetAppName" id="@cdktf/provider-databricks.permissions.Permissions.resetAppName"></a>

```java
public void resetAppName()
```

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktf/provider-databricks.permissions.Permissions.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-databricks.permissions.Permissions.resetClusterId"></a>

```java
public void resetClusterId()
```

##### `resetClusterPolicyId` <a name="resetClusterPolicyId" id="@cdktf/provider-databricks.permissions.Permissions.resetClusterPolicyId"></a>

```java
public void resetClusterPolicyId()
```

##### `resetDashboardId` <a name="resetDashboardId" id="@cdktf/provider-databricks.permissions.Permissions.resetDashboardId"></a>

```java
public void resetDashboardId()
```

##### `resetDatabaseInstanceName` <a name="resetDatabaseInstanceName" id="@cdktf/provider-databricks.permissions.Permissions.resetDatabaseInstanceName"></a>

```java
public void resetDatabaseInstanceName()
```

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktf/provider-databricks.permissions.Permissions.resetDirectoryId"></a>

```java
public void resetDirectoryId()
```

##### `resetDirectoryPath` <a name="resetDirectoryPath" id="@cdktf/provider-databricks.permissions.Permissions.resetDirectoryPath"></a>

```java
public void resetDirectoryPath()
```

##### `resetExperimentId` <a name="resetExperimentId" id="@cdktf/provider-databricks.permissions.Permissions.resetExperimentId"></a>

```java
public void resetExperimentId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.permissions.Permissions.resetId"></a>

```java
public void resetId()
```

##### `resetInstancePoolId` <a name="resetInstancePoolId" id="@cdktf/provider-databricks.permissions.Permissions.resetInstancePoolId"></a>

```java
public void resetInstancePoolId()
```

##### `resetJobId` <a name="resetJobId" id="@cdktf/provider-databricks.permissions.Permissions.resetJobId"></a>

```java
public void resetJobId()
```

##### `resetNotebookId` <a name="resetNotebookId" id="@cdktf/provider-databricks.permissions.Permissions.resetNotebookId"></a>

```java
public void resetNotebookId()
```

##### `resetNotebookPath` <a name="resetNotebookPath" id="@cdktf/provider-databricks.permissions.Permissions.resetNotebookPath"></a>

```java
public void resetNotebookPath()
```

##### `resetObjectType` <a name="resetObjectType" id="@cdktf/provider-databricks.permissions.Permissions.resetObjectType"></a>

```java
public void resetObjectType()
```

##### `resetPipelineId` <a name="resetPipelineId" id="@cdktf/provider-databricks.permissions.Permissions.resetPipelineId"></a>

```java
public void resetPipelineId()
```

##### `resetRegisteredModelId` <a name="resetRegisteredModelId" id="@cdktf/provider-databricks.permissions.Permissions.resetRegisteredModelId"></a>

```java
public void resetRegisteredModelId()
```

##### `resetRepoId` <a name="resetRepoId" id="@cdktf/provider-databricks.permissions.Permissions.resetRepoId"></a>

```java
public void resetRepoId()
```

##### `resetRepoPath` <a name="resetRepoPath" id="@cdktf/provider-databricks.permissions.Permissions.resetRepoPath"></a>

```java
public void resetRepoPath()
```

##### `resetServingEndpointId` <a name="resetServingEndpointId" id="@cdktf/provider-databricks.permissions.Permissions.resetServingEndpointId"></a>

```java
public void resetServingEndpointId()
```

##### `resetSqlAlertId` <a name="resetSqlAlertId" id="@cdktf/provider-databricks.permissions.Permissions.resetSqlAlertId"></a>

```java
public void resetSqlAlertId()
```

##### `resetSqlDashboardId` <a name="resetSqlDashboardId" id="@cdktf/provider-databricks.permissions.Permissions.resetSqlDashboardId"></a>

```java
public void resetSqlDashboardId()
```

##### `resetSqlEndpointId` <a name="resetSqlEndpointId" id="@cdktf/provider-databricks.permissions.Permissions.resetSqlEndpointId"></a>

```java
public void resetSqlEndpointId()
```

##### `resetSqlQueryId` <a name="resetSqlQueryId" id="@cdktf/provider-databricks.permissions.Permissions.resetSqlQueryId"></a>

```java
public void resetSqlQueryId()
```

##### `resetVectorSearchEndpointId` <a name="resetVectorSearchEndpointId" id="@cdktf/provider-databricks.permissions.Permissions.resetVectorSearchEndpointId"></a>

```java
public void resetVectorSearchEndpointId()
```

##### `resetWorkspaceFileId` <a name="resetWorkspaceFileId" id="@cdktf/provider-databricks.permissions.Permissions.resetWorkspaceFileId"></a>

```java
public void resetWorkspaceFileId()
```

##### `resetWorkspaceFilePath` <a name="resetWorkspaceFilePath" id="@cdktf/provider-databricks.permissions.Permissions.resetWorkspaceFilePath"></a>

```java
public void resetWorkspaceFilePath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Permissions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.permissions.Permissions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.permissions.Permissions;

Permissions.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.permissions.Permissions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.permissions.Permissions;

Permissions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.permissions.Permissions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.permissions.Permissions.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.permissions.Permissions;

Permissions.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.permissions.Permissions.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.permissions.Permissions;

Permissions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Permissions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Permissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Permissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Permissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Permissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.accessControl">accessControl</a></code> | <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList">PermissionsAccessControlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.accessControlInput">accessControlInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.alertV2IdInput">alertV2IdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.appNameInput">appNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.clusterPolicyIdInput">clusterPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.dashboardIdInput">dashboardIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.databaseInstanceNameInput">databaseInstanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.directoryPathInput">directoryPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.experimentIdInput">experimentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.instancePoolIdInput">instancePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.jobIdInput">jobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.notebookIdInput">notebookIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.notebookPathInput">notebookPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.objectTypeInput">objectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.pipelineIdInput">pipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.registeredModelIdInput">registeredModelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.repoIdInput">repoIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.repoPathInput">repoPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.servingEndpointIdInput">servingEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlAlertIdInput">sqlAlertIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlDashboardIdInput">sqlDashboardIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlEndpointIdInput">sqlEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlQueryIdInput">sqlQueryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.vectorSearchEndpointIdInput">vectorSearchEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.workspaceFileIdInput">workspaceFileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.workspaceFilePathInput">workspaceFilePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.alertV2Id">alertV2Id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.appName">appName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.clusterPolicyId">clusterPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.databaseInstanceName">databaseInstanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.directoryPath">directoryPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.experimentId">experimentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.notebookId">notebookId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.notebookPath">notebookPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.registeredModelId">registeredModelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.repoId">repoId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.repoPath">repoPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.servingEndpointId">servingEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlAlertId">sqlAlertId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlDashboardId">sqlDashboardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlEndpointId">sqlEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.sqlQueryId">sqlQueryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.vectorSearchEndpointId">vectorSearchEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.workspaceFileId">workspaceFileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.workspaceFilePath">workspaceFilePath</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.permissions.Permissions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.permissions.Permissions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.permissions.Permissions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.permissions.Permissions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.permissions.Permissions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.permissions.Permissions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.permissions.Permissions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.permissions.Permissions.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.permissions.Permissions.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.permissions.Permissions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.permissions.Permissions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.permissions.Permissions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissions.Permissions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.permissions.Permissions.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessControl`<sup>Required</sup> <a name="accessControl" id="@cdktf/provider-databricks.permissions.Permissions.property.accessControl"></a>

```java
public PermissionsAccessControlList getAccessControl();
```

- *Type:* <a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList">PermissionsAccessControlList</a>

---

##### `accessControlInput`<sup>Optional</sup> <a name="accessControlInput" id="@cdktf/provider-databricks.permissions.Permissions.property.accessControlInput"></a>

```java
public IResolvable|java.util.List<PermissionsAccessControl> getAccessControlInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>>

---

##### `alertV2IdInput`<sup>Optional</sup> <a name="alertV2IdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.alertV2IdInput"></a>

```java
public java.lang.String getAlertV2IdInput();
```

- *Type:* java.lang.String

---

##### `appNameInput`<sup>Optional</sup> <a name="appNameInput" id="@cdktf/provider-databricks.permissions.Permissions.property.appNameInput"></a>

```java
public java.lang.String getAppNameInput();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-databricks.permissions.Permissions.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `clusterPolicyIdInput`<sup>Optional</sup> <a name="clusterPolicyIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.clusterPolicyIdInput"></a>

```java
public java.lang.String getClusterPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `dashboardIdInput`<sup>Optional</sup> <a name="dashboardIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.dashboardIdInput"></a>

```java
public java.lang.String getDashboardIdInput();
```

- *Type:* java.lang.String

---

##### `databaseInstanceNameInput`<sup>Optional</sup> <a name="databaseInstanceNameInput" id="@cdktf/provider-databricks.permissions.Permissions.property.databaseInstanceNameInput"></a>

```java
public java.lang.String getDatabaseInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `directoryPathInput`<sup>Optional</sup> <a name="directoryPathInput" id="@cdktf/provider-databricks.permissions.Permissions.property.directoryPathInput"></a>

```java
public java.lang.String getDirectoryPathInput();
```

- *Type:* java.lang.String

---

##### `experimentIdInput`<sup>Optional</sup> <a name="experimentIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.experimentIdInput"></a>

```java
public java.lang.String getExperimentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.permissions.Permissions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instancePoolIdInput`<sup>Optional</sup> <a name="instancePoolIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.instancePoolIdInput"></a>

```java
public java.lang.String getInstancePoolIdInput();
```

- *Type:* java.lang.String

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.jobIdInput"></a>

```java
public java.lang.String getJobIdInput();
```

- *Type:* java.lang.String

---

##### `notebookIdInput`<sup>Optional</sup> <a name="notebookIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.notebookIdInput"></a>

```java
public java.lang.String getNotebookIdInput();
```

- *Type:* java.lang.String

---

##### `notebookPathInput`<sup>Optional</sup> <a name="notebookPathInput" id="@cdktf/provider-databricks.permissions.Permissions.property.notebookPathInput"></a>

```java
public java.lang.String getNotebookPathInput();
```

- *Type:* java.lang.String

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-databricks.permissions.Permissions.property.objectTypeInput"></a>

```java
public java.lang.String getObjectTypeInput();
```

- *Type:* java.lang.String

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.pipelineIdInput"></a>

```java
public java.lang.String getPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `registeredModelIdInput`<sup>Optional</sup> <a name="registeredModelIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.registeredModelIdInput"></a>

```java
public java.lang.String getRegisteredModelIdInput();
```

- *Type:* java.lang.String

---

##### `repoIdInput`<sup>Optional</sup> <a name="repoIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.repoIdInput"></a>

```java
public java.lang.String getRepoIdInput();
```

- *Type:* java.lang.String

---

##### `repoPathInput`<sup>Optional</sup> <a name="repoPathInput" id="@cdktf/provider-databricks.permissions.Permissions.property.repoPathInput"></a>

```java
public java.lang.String getRepoPathInput();
```

- *Type:* java.lang.String

---

##### `servingEndpointIdInput`<sup>Optional</sup> <a name="servingEndpointIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.servingEndpointIdInput"></a>

```java
public java.lang.String getServingEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `sqlAlertIdInput`<sup>Optional</sup> <a name="sqlAlertIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlAlertIdInput"></a>

```java
public java.lang.String getSqlAlertIdInput();
```

- *Type:* java.lang.String

---

##### `sqlDashboardIdInput`<sup>Optional</sup> <a name="sqlDashboardIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlDashboardIdInput"></a>

```java
public java.lang.String getSqlDashboardIdInput();
```

- *Type:* java.lang.String

---

##### `sqlEndpointIdInput`<sup>Optional</sup> <a name="sqlEndpointIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlEndpointIdInput"></a>

```java
public java.lang.String getSqlEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `sqlQueryIdInput`<sup>Optional</sup> <a name="sqlQueryIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlQueryIdInput"></a>

```java
public java.lang.String getSqlQueryIdInput();
```

- *Type:* java.lang.String

---

##### `vectorSearchEndpointIdInput`<sup>Optional</sup> <a name="vectorSearchEndpointIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.vectorSearchEndpointIdInput"></a>

```java
public java.lang.String getVectorSearchEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceFileIdInput`<sup>Optional</sup> <a name="workspaceFileIdInput" id="@cdktf/provider-databricks.permissions.Permissions.property.workspaceFileIdInput"></a>

```java
public java.lang.String getWorkspaceFileIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceFilePathInput`<sup>Optional</sup> <a name="workspaceFilePathInput" id="@cdktf/provider-databricks.permissions.Permissions.property.workspaceFilePathInput"></a>

```java
public java.lang.String getWorkspaceFilePathInput();
```

- *Type:* java.lang.String

---

##### `alertV2Id`<sup>Required</sup> <a name="alertV2Id" id="@cdktf/provider-databricks.permissions.Permissions.property.alertV2Id"></a>

```java
public java.lang.String getAlertV2Id();
```

- *Type:* java.lang.String

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-databricks.permissions.Permissions.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-databricks.permissions.Permissions.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.permissions.Permissions.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `clusterPolicyId`<sup>Required</sup> <a name="clusterPolicyId" id="@cdktf/provider-databricks.permissions.Permissions.property.clusterPolicyId"></a>

```java
public java.lang.String getClusterPolicyId();
```

- *Type:* java.lang.String

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktf/provider-databricks.permissions.Permissions.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

---

##### `databaseInstanceName`<sup>Required</sup> <a name="databaseInstanceName" id="@cdktf/provider-databricks.permissions.Permissions.property.databaseInstanceName"></a>

```java
public java.lang.String getDatabaseInstanceName();
```

- *Type:* java.lang.String

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-databricks.permissions.Permissions.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `directoryPath`<sup>Required</sup> <a name="directoryPath" id="@cdktf/provider-databricks.permissions.Permissions.property.directoryPath"></a>

```java
public java.lang.String getDirectoryPath();
```

- *Type:* java.lang.String

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktf/provider-databricks.permissions.Permissions.property.experimentId"></a>

```java
public java.lang.String getExperimentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissions.Permissions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.permissions.Permissions.property.instancePoolId"></a>

```java
public java.lang.String getInstancePoolId();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-databricks.permissions.Permissions.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `notebookId`<sup>Required</sup> <a name="notebookId" id="@cdktf/provider-databricks.permissions.Permissions.property.notebookId"></a>

```java
public java.lang.String getNotebookId();
```

- *Type:* java.lang.String

---

##### `notebookPath`<sup>Required</sup> <a name="notebookPath" id="@cdktf/provider-databricks.permissions.Permissions.property.notebookPath"></a>

```java
public java.lang.String getNotebookPath();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.permissions.Permissions.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-databricks.permissions.Permissions.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `registeredModelId`<sup>Required</sup> <a name="registeredModelId" id="@cdktf/provider-databricks.permissions.Permissions.property.registeredModelId"></a>

```java
public java.lang.String getRegisteredModelId();
```

- *Type:* java.lang.String

---

##### `repoId`<sup>Required</sup> <a name="repoId" id="@cdktf/provider-databricks.permissions.Permissions.property.repoId"></a>

```java
public java.lang.String getRepoId();
```

- *Type:* java.lang.String

---

##### `repoPath`<sup>Required</sup> <a name="repoPath" id="@cdktf/provider-databricks.permissions.Permissions.property.repoPath"></a>

```java
public java.lang.String getRepoPath();
```

- *Type:* java.lang.String

---

##### `servingEndpointId`<sup>Required</sup> <a name="servingEndpointId" id="@cdktf/provider-databricks.permissions.Permissions.property.servingEndpointId"></a>

```java
public java.lang.String getServingEndpointId();
```

- *Type:* java.lang.String

---

##### `sqlAlertId`<sup>Required</sup> <a name="sqlAlertId" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlAlertId"></a>

```java
public java.lang.String getSqlAlertId();
```

- *Type:* java.lang.String

---

##### `sqlDashboardId`<sup>Required</sup> <a name="sqlDashboardId" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlDashboardId"></a>

```java
public java.lang.String getSqlDashboardId();
```

- *Type:* java.lang.String

---

##### `sqlEndpointId`<sup>Required</sup> <a name="sqlEndpointId" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlEndpointId"></a>

```java
public java.lang.String getSqlEndpointId();
```

- *Type:* java.lang.String

---

##### `sqlQueryId`<sup>Required</sup> <a name="sqlQueryId" id="@cdktf/provider-databricks.permissions.Permissions.property.sqlQueryId"></a>

```java
public java.lang.String getSqlQueryId();
```

- *Type:* java.lang.String

---

##### `vectorSearchEndpointId`<sup>Required</sup> <a name="vectorSearchEndpointId" id="@cdktf/provider-databricks.permissions.Permissions.property.vectorSearchEndpointId"></a>

```java
public java.lang.String getVectorSearchEndpointId();
```

- *Type:* java.lang.String

---

##### `workspaceFileId`<sup>Required</sup> <a name="workspaceFileId" id="@cdktf/provider-databricks.permissions.Permissions.property.workspaceFileId"></a>

```java
public java.lang.String getWorkspaceFileId();
```

- *Type:* java.lang.String

---

##### `workspaceFilePath`<sup>Required</sup> <a name="workspaceFilePath" id="@cdktf/provider-databricks.permissions.Permissions.property.workspaceFilePath"></a>

```java
public java.lang.String getWorkspaceFilePath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.Permissions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.permissions.Permissions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PermissionsAccessControl <a name="PermissionsAccessControl" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.permissions.PermissionsAccessControl;

PermissionsAccessControl.builder()
//  .groupName(java.lang.String)
//  .permissionLevel(java.lang.String)
//  .servicePrincipalName(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.groupName">groupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#group_name Permissions#group_name}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.permissionLevel">permissionLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#permission_level Permissions#permission_level}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.servicePrincipalName">servicePrincipalName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#service_principal_name Permissions#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#user_name Permissions#user_name}. |

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#group_name Permissions#group_name}.

---

##### `permissionLevel`<sup>Optional</sup> <a name="permissionLevel" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.permissionLevel"></a>

```java
public java.lang.String getPermissionLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#permission_level Permissions#permission_level}.

---

##### `servicePrincipalName`<sup>Optional</sup> <a name="servicePrincipalName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.servicePrincipalName"></a>

```java
public java.lang.String getServicePrincipalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#service_principal_name Permissions#service_principal_name}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControl.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#user_name Permissions#user_name}.

---

### PermissionsConfig <a name="PermissionsConfig" id="@cdktf/provider-databricks.permissions.PermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.permissions.PermissionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.permissions.PermissionsConfig;

PermissionsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessControl(IResolvable|java.util.List<PermissionsAccessControl>)
//  .alertV2Id(java.lang.String)
//  .appName(java.lang.String)
//  .authorization(java.lang.String)
//  .clusterId(java.lang.String)
//  .clusterPolicyId(java.lang.String)
//  .dashboardId(java.lang.String)
//  .databaseInstanceName(java.lang.String)
//  .directoryId(java.lang.String)
//  .directoryPath(java.lang.String)
//  .experimentId(java.lang.String)
//  .id(java.lang.String)
//  .instancePoolId(java.lang.String)
//  .jobId(java.lang.String)
//  .notebookId(java.lang.String)
//  .notebookPath(java.lang.String)
//  .objectType(java.lang.String)
//  .pipelineId(java.lang.String)
//  .registeredModelId(java.lang.String)
//  .repoId(java.lang.String)
//  .repoPath(java.lang.String)
//  .servingEndpointId(java.lang.String)
//  .sqlAlertId(java.lang.String)
//  .sqlDashboardId(java.lang.String)
//  .sqlEndpointId(java.lang.String)
//  .sqlQueryId(java.lang.String)
//  .vectorSearchEndpointId(java.lang.String)
//  .workspaceFileId(java.lang.String)
//  .workspaceFilePath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.accessControl">accessControl</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>></code> | access_control block. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.alertV2Id">alertV2Id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#alert_v2_id Permissions#alert_v2_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.appName">appName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#app_name Permissions#app_name}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#authorization Permissions#authorization}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#cluster_id Permissions#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.clusterPolicyId">clusterPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#cluster_policy_id Permissions#cluster_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#dashboard_id Permissions#dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.databaseInstanceName">databaseInstanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#database_instance_name Permissions#database_instance_name}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#directory_id Permissions#directory_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.directoryPath">directoryPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#directory_path Permissions#directory_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.experimentId">experimentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#experiment_id Permissions#experiment_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#id Permissions#id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#instance_pool_id Permissions#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.jobId">jobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#job_id Permissions#job_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.notebookId">notebookId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#notebook_id Permissions#notebook_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.notebookPath">notebookPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#notebook_path Permissions#notebook_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.objectType">objectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#object_type Permissions#object_type}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#pipeline_id Permissions#pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.registeredModelId">registeredModelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#registered_model_id Permissions#registered_model_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.repoId">repoId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#repo_id Permissions#repo_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.repoPath">repoPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#repo_path Permissions#repo_path}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.servingEndpointId">servingEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#serving_endpoint_id Permissions#serving_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlAlertId">sqlAlertId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_alert_id Permissions#sql_alert_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlDashboardId">sqlDashboardId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_dashboard_id Permissions#sql_dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlEndpointId">sqlEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_endpoint_id Permissions#sql_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlQueryId">sqlQueryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_query_id Permissions#sql_query_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.vectorSearchEndpointId">vectorSearchEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#vector_search_endpoint_id Permissions#vector_search_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.workspaceFileId">workspaceFileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#workspace_file_id Permissions#workspace_file_id}. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsConfig.property.workspaceFilePath">workspaceFilePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#workspace_file_path Permissions#workspace_file_path}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessControl`<sup>Required</sup> <a name="accessControl" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.accessControl"></a>

```java
public IResolvable|java.util.List<PermissionsAccessControl> getAccessControl();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>>

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#access_control Permissions#access_control}

---

##### `alertV2Id`<sup>Optional</sup> <a name="alertV2Id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.alertV2Id"></a>

```java
public java.lang.String getAlertV2Id();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#alert_v2_id Permissions#alert_v2_id}.

---

##### `appName`<sup>Optional</sup> <a name="appName" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#app_name Permissions#app_name}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#authorization Permissions#authorization}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#cluster_id Permissions#cluster_id}.

---

##### `clusterPolicyId`<sup>Optional</sup> <a name="clusterPolicyId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.clusterPolicyId"></a>

```java
public java.lang.String getClusterPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#cluster_policy_id Permissions#cluster_policy_id}.

---

##### `dashboardId`<sup>Optional</sup> <a name="dashboardId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#dashboard_id Permissions#dashboard_id}.

---

##### `databaseInstanceName`<sup>Optional</sup> <a name="databaseInstanceName" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.databaseInstanceName"></a>

```java
public java.lang.String getDatabaseInstanceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#database_instance_name Permissions#database_instance_name}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#directory_id Permissions#directory_id}.

---

##### `directoryPath`<sup>Optional</sup> <a name="directoryPath" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.directoryPath"></a>

```java
public java.lang.String getDirectoryPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#directory_path Permissions#directory_path}.

---

##### `experimentId`<sup>Optional</sup> <a name="experimentId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.experimentId"></a>

```java
public java.lang.String getExperimentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#experiment_id Permissions#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#id Permissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instancePoolId`<sup>Optional</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.instancePoolId"></a>

```java
public java.lang.String getInstancePoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#instance_pool_id Permissions#instance_pool_id}.

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#job_id Permissions#job_id}.

---

##### `notebookId`<sup>Optional</sup> <a name="notebookId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.notebookId"></a>

```java
public java.lang.String getNotebookId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#notebook_id Permissions#notebook_id}.

---

##### `notebookPath`<sup>Optional</sup> <a name="notebookPath" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.notebookPath"></a>

```java
public java.lang.String getNotebookPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#notebook_path Permissions#notebook_path}.

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#object_type Permissions#object_type}.

---

##### `pipelineId`<sup>Optional</sup> <a name="pipelineId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#pipeline_id Permissions#pipeline_id}.

---

##### `registeredModelId`<sup>Optional</sup> <a name="registeredModelId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.registeredModelId"></a>

```java
public java.lang.String getRegisteredModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#registered_model_id Permissions#registered_model_id}.

---

##### `repoId`<sup>Optional</sup> <a name="repoId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.repoId"></a>

```java
public java.lang.String getRepoId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#repo_id Permissions#repo_id}.

---

##### `repoPath`<sup>Optional</sup> <a name="repoPath" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.repoPath"></a>

```java
public java.lang.String getRepoPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#repo_path Permissions#repo_path}.

---

##### `servingEndpointId`<sup>Optional</sup> <a name="servingEndpointId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.servingEndpointId"></a>

```java
public java.lang.String getServingEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#serving_endpoint_id Permissions#serving_endpoint_id}.

---

##### `sqlAlertId`<sup>Optional</sup> <a name="sqlAlertId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlAlertId"></a>

```java
public java.lang.String getSqlAlertId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_alert_id Permissions#sql_alert_id}.

---

##### `sqlDashboardId`<sup>Optional</sup> <a name="sqlDashboardId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlDashboardId"></a>

```java
public java.lang.String getSqlDashboardId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_dashboard_id Permissions#sql_dashboard_id}.

---

##### `sqlEndpointId`<sup>Optional</sup> <a name="sqlEndpointId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlEndpointId"></a>

```java
public java.lang.String getSqlEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_endpoint_id Permissions#sql_endpoint_id}.

---

##### `sqlQueryId`<sup>Optional</sup> <a name="sqlQueryId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.sqlQueryId"></a>

```java
public java.lang.String getSqlQueryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#sql_query_id Permissions#sql_query_id}.

---

##### `vectorSearchEndpointId`<sup>Optional</sup> <a name="vectorSearchEndpointId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.vectorSearchEndpointId"></a>

```java
public java.lang.String getVectorSearchEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#vector_search_endpoint_id Permissions#vector_search_endpoint_id}.

---

##### `workspaceFileId`<sup>Optional</sup> <a name="workspaceFileId" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.workspaceFileId"></a>

```java
public java.lang.String getWorkspaceFileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#workspace_file_id Permissions#workspace_file_id}.

---

##### `workspaceFilePath`<sup>Optional</sup> <a name="workspaceFilePath" id="@cdktf/provider-databricks.permissions.PermissionsConfig.property.workspaceFilePath"></a>

```java
public java.lang.String getWorkspaceFilePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/permissions#workspace_file_path Permissions#workspace_file_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### PermissionsAccessControlList <a name="PermissionsAccessControlList" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.permissions.PermissionsAccessControlList;

new PermissionsAccessControlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.get"></a>

```java
public PermissionsAccessControlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PermissionsAccessControl> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>>

---


### PermissionsAccessControlOutputReference <a name="PermissionsAccessControlOutputReference" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.permissions.PermissionsAccessControlOutputReference;

new PermissionsAccessControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetPermissionLevel">resetPermissionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetServicePrincipalName">resetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupName` <a name="resetGroupName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetGroupName"></a>

```java
public void resetGroupName()
```

##### `resetPermissionLevel` <a name="resetPermissionLevel" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetPermissionLevel"></a>

```java
public void resetPermissionLevel()
```

##### `resetServicePrincipalName` <a name="resetServicePrincipalName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetServicePrincipalName"></a>

```java
public void resetServicePrincipalName()
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetUserName"></a>

```java
public void resetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevelInput">permissionLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalNameInput">servicePrincipalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevel">permissionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalName">servicePrincipalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `permissionLevelInput`<sup>Optional</sup> <a name="permissionLevelInput" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevelInput"></a>

```java
public java.lang.String getPermissionLevelInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalNameInput`<sup>Optional</sup> <a name="servicePrincipalNameInput" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalNameInput"></a>

```java
public java.lang.String getServicePrincipalNameInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `permissionLevel`<sup>Required</sup> <a name="permissionLevel" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevel"></a>

```java
public java.lang.String getPermissionLevel();
```

- *Type:* java.lang.String

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalName"></a>

```java
public java.lang.String getServicePrincipalName();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.internalValue"></a>

```java
public IResolvable|PermissionsAccessControl getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>

---



