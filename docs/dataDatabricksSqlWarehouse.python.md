# `dataDatabricksSqlWarehouse` Submodule <a name="`dataDatabricksSqlWarehouse` Submodule" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSqlWarehouse <a name="DataDatabricksSqlWarehouse" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse databricks_sql_warehouse}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_stop_mins: typing.Union[int, float] = None,
  channel: DataDatabricksSqlWarehouseChannel = None,
  cluster_size: str = None,
  creator_name: str = None,
  data_source_id: str = None,
  enable_photon: bool | IResolvable = None,
  enable_serverless_compute: bool | IResolvable = None,
  health: DataDatabricksSqlWarehouseHealth = None,
  id: str = None,
  instance_profile_arn: str = None,
  jdbc_url: str = None,
  max_num_clusters: typing.Union[int, float] = None,
  min_num_clusters: typing.Union[int, float] = None,
  name: str = None,
  num_active_sessions: typing.Union[int, float] = None,
  num_clusters: typing.Union[int, float] = None,
  odbc_params: DataDatabricksSqlWarehouseOdbcParams = None,
  spot_instance_policy: str = None,
  state: str = None,
  tags: DataDatabricksSqlWarehouseTags = None,
  warehouse_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.autoStopMins">auto_stop_mins</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#auto_stop_mins DataDatabricksSqlWarehouse#auto_stop_mins}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.channel">channel</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a></code> | channel block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.clusterSize">cluster_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#cluster_size DataDatabricksSqlWarehouse#cluster_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.creatorName">creator_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#creator_name DataDatabricksSqlWarehouse#creator_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.dataSourceId">data_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#data_source_id DataDatabricksSqlWarehouse#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.enablePhoton">enable_photon</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#enable_photon DataDatabricksSqlWarehouse#enable_photon}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.enableServerlessCompute">enable_serverless_compute</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#enable_serverless_compute DataDatabricksSqlWarehouse#enable_serverless_compute}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.health">health</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#id DataDatabricksSqlWarehouse#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#instance_profile_arn DataDatabricksSqlWarehouse#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.jdbcUrl">jdbc_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#jdbc_url DataDatabricksSqlWarehouse#jdbc_url}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.maxNumClusters">max_num_clusters</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#max_num_clusters DataDatabricksSqlWarehouse#max_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.minNumClusters">min_num_clusters</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#min_num_clusters DataDatabricksSqlWarehouse#min_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.numActiveSessions">num_active_sessions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#num_active_sessions DataDatabricksSqlWarehouse#num_active_sessions}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.numClusters">num_clusters</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#num_clusters DataDatabricksSqlWarehouse#num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.odbcParams">odbc_params</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a></code> | odbc_params block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.spotInstancePolicy">spot_instance_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#spot_instance_policy DataDatabricksSqlWarehouse#spot_instance_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#state DataDatabricksSqlWarehouse#state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.warehouseType">warehouse_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#warehouse_type DataDatabricksSqlWarehouse#warehouse_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `auto_stop_mins`<sup>Optional</sup> <a name="auto_stop_mins" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.autoStopMins"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#auto_stop_mins DataDatabricksSqlWarehouse#auto_stop_mins}.

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.channel"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a>

channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#channel DataDatabricksSqlWarehouse#channel}

---

##### `cluster_size`<sup>Optional</sup> <a name="cluster_size" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.clusterSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#cluster_size DataDatabricksSqlWarehouse#cluster_size}.

---

##### `creator_name`<sup>Optional</sup> <a name="creator_name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.creatorName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#creator_name DataDatabricksSqlWarehouse#creator_name}.

---

##### `data_source_id`<sup>Optional</sup> <a name="data_source_id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.dataSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#data_source_id DataDatabricksSqlWarehouse#data_source_id}.

---

##### `enable_photon`<sup>Optional</sup> <a name="enable_photon" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.enablePhoton"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#enable_photon DataDatabricksSqlWarehouse#enable_photon}.

---

##### `enable_serverless_compute`<sup>Optional</sup> <a name="enable_serverless_compute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.enableServerlessCompute"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#enable_serverless_compute DataDatabricksSqlWarehouse#enable_serverless_compute}.

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.health"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#health DataDatabricksSqlWarehouse#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#id DataDatabricksSqlWarehouse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.instanceProfileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#instance_profile_arn DataDatabricksSqlWarehouse#instance_profile_arn}.

---

##### `jdbc_url`<sup>Optional</sup> <a name="jdbc_url" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.jdbcUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#jdbc_url DataDatabricksSqlWarehouse#jdbc_url}.

---

##### `max_num_clusters`<sup>Optional</sup> <a name="max_num_clusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.maxNumClusters"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#max_num_clusters DataDatabricksSqlWarehouse#max_num_clusters}.

---

##### `min_num_clusters`<sup>Optional</sup> <a name="min_num_clusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.minNumClusters"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#min_num_clusters DataDatabricksSqlWarehouse#min_num_clusters}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}.

---

##### `num_active_sessions`<sup>Optional</sup> <a name="num_active_sessions" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.numActiveSessions"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#num_active_sessions DataDatabricksSqlWarehouse#num_active_sessions}.

---

##### `num_clusters`<sup>Optional</sup> <a name="num_clusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.numClusters"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#num_clusters DataDatabricksSqlWarehouse#num_clusters}.

---

##### `odbc_params`<sup>Optional</sup> <a name="odbc_params" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.odbcParams"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a>

odbc_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#odbc_params DataDatabricksSqlWarehouse#odbc_params}

---

##### `spot_instance_policy`<sup>Optional</sup> <a name="spot_instance_policy" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.spotInstancePolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#spot_instance_policy DataDatabricksSqlWarehouse#spot_instance_policy}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#state DataDatabricksSqlWarehouse#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.tags"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#tags DataDatabricksSqlWarehouse#tags}

---

##### `warehouse_type`<sup>Optional</sup> <a name="warehouse_type" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.warehouseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#warehouse_type DataDatabricksSqlWarehouse#warehouse_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putChannel">put_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putHealth">put_health</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putOdbcParams">put_odbc_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetAutoStopMins">reset_auto_stop_mins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetClusterSize">reset_cluster_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetCreatorName">reset_creator_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetDataSourceId">reset_data_source_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetEnablePhoton">reset_enable_photon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetEnableServerlessCompute">reset_enable_serverless_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetHealth">reset_health</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetInstanceProfileArn">reset_instance_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetJdbcUrl">reset_jdbc_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetMaxNumClusters">reset_max_num_clusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetMinNumClusters">reset_min_num_clusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetNumActiveSessions">reset_num_active_sessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetNumClusters">reset_num_clusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetOdbcParams">reset_odbc_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetSpotInstancePolicy">reset_spot_instance_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetWarehouseType">reset_warehouse_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_channel` <a name="put_channel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putChannel"></a>

```python
def put_channel(
  dbsql_version: str = None,
  name: str = None
) -> None
```

###### `dbsql_version`<sup>Optional</sup> <a name="dbsql_version" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putChannel.parameter.dbsqlVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#dbsql_version DataDatabricksSqlWarehouse#dbsql_version}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putChannel.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}.

---

##### `put_health` <a name="put_health" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putHealth"></a>

```python
def put_health(
  details: str = None,
  failure_reason: DataDatabricksSqlWarehouseHealthFailureReason = None,
  message: str = None,
  status: str = None,
  summary: str = None
) -> None
```

###### `details`<sup>Optional</sup> <a name="details" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putHealth.parameter.details"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#details DataDatabricksSqlWarehouse#details}.

---

###### `failure_reason`<sup>Optional</sup> <a name="failure_reason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putHealth.parameter.failureReason"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a>

failure_reason block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#failure_reason DataDatabricksSqlWarehouse#failure_reason}

---

###### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putHealth.parameter.message"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#message DataDatabricksSqlWarehouse#message}.

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putHealth.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#status DataDatabricksSqlWarehouse#status}.

---

###### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putHealth.parameter.summary"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#summary DataDatabricksSqlWarehouse#summary}.

---

##### `put_odbc_params` <a name="put_odbc_params" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putOdbcParams"></a>

```python
def put_odbc_params(
  hostname: str = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None
) -> None
```

###### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putOdbcParams.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#hostname DataDatabricksSqlWarehouse#hostname}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putOdbcParams.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#path DataDatabricksSqlWarehouse#path}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putOdbcParams.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#port DataDatabricksSqlWarehouse#port}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putOdbcParams.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#protocol DataDatabricksSqlWarehouse#protocol}.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putTags"></a>

```python
def put_tags(
  custom_tags: IResolvable | typing.List[DataDatabricksSqlWarehouseTagsCustomTags] = None
) -> None
```

###### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putTags.parameter.customTags"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>]

custom_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#custom_tags DataDatabricksSqlWarehouse#custom_tags}

---

##### `reset_auto_stop_mins` <a name="reset_auto_stop_mins" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetAutoStopMins"></a>

```python
def reset_auto_stop_mins() -> None
```

##### `reset_channel` <a name="reset_channel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_cluster_size` <a name="reset_cluster_size" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetClusterSize"></a>

```python
def reset_cluster_size() -> None
```

##### `reset_creator_name` <a name="reset_creator_name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetCreatorName"></a>

```python
def reset_creator_name() -> None
```

##### `reset_data_source_id` <a name="reset_data_source_id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetDataSourceId"></a>

```python
def reset_data_source_id() -> None
```

##### `reset_enable_photon` <a name="reset_enable_photon" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetEnablePhoton"></a>

```python
def reset_enable_photon() -> None
```

##### `reset_enable_serverless_compute` <a name="reset_enable_serverless_compute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetEnableServerlessCompute"></a>

```python
def reset_enable_serverless_compute() -> None
```

##### `reset_health` <a name="reset_health" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetHealth"></a>

```python
def reset_health() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_profile_arn` <a name="reset_instance_profile_arn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetInstanceProfileArn"></a>

```python
def reset_instance_profile_arn() -> None
```

##### `reset_jdbc_url` <a name="reset_jdbc_url" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetJdbcUrl"></a>

```python
def reset_jdbc_url() -> None
```

##### `reset_max_num_clusters` <a name="reset_max_num_clusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetMaxNumClusters"></a>

```python
def reset_max_num_clusters() -> None
```

##### `reset_min_num_clusters` <a name="reset_min_num_clusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetMinNumClusters"></a>

```python
def reset_min_num_clusters() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_num_active_sessions` <a name="reset_num_active_sessions" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetNumActiveSessions"></a>

```python
def reset_num_active_sessions() -> None
```

##### `reset_num_clusters` <a name="reset_num_clusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetNumClusters"></a>

```python
def reset_num_clusters() -> None
```

##### `reset_odbc_params` <a name="reset_odbc_params" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetOdbcParams"></a>

```python
def reset_odbc_params() -> None
```

##### `reset_spot_instance_policy` <a name="reset_spot_instance_policy" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetSpotInstancePolicy"></a>

```python
def reset_spot_instance_policy() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_warehouse_type` <a name="reset_warehouse_type" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetWarehouseType"></a>

```python
def reset_warehouse_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksSqlWarehouse resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksSqlWarehouse resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksSqlWarehouse to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksSqlWarehouse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSqlWarehouse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.channel">channel</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference">DataDatabricksSqlWarehouseChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.health">health</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference">DataDatabricksSqlWarehouseHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.odbcParams">odbc_params</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference">DataDatabricksSqlWarehouseOdbcParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference">DataDatabricksSqlWarehouseTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.autoStopMinsInput">auto_stop_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.channelInput">channel_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.clusterSizeInput">cluster_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.creatorNameInput">creator_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dataSourceIdInput">data_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enablePhotonInput">enable_photon_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enableServerlessComputeInput">enable_serverless_compute_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.healthInput">health_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.instanceProfileArnInput">instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.jdbcUrlInput">jdbc_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.maxNumClustersInput">max_num_clusters_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.minNumClustersInput">min_num_clusters_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numActiveSessionsInput">num_active_sessions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numClustersInput">num_clusters_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.odbcParamsInput">odbc_params_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.spotInstancePolicyInput">spot_instance_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tagsInput">tags_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.warehouseTypeInput">warehouse_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.autoStopMins">auto_stop_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.clusterSize">cluster_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.creatorName">creator_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enablePhoton">enable_photon</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enableServerlessCompute">enable_serverless_compute</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.jdbcUrl">jdbc_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.maxNumClusters">max_num_clusters</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.minNumClusters">min_num_clusters</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numActiveSessions">num_active_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numClusters">num_clusters</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.spotInstancePolicy">spot_instance_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.warehouseType">warehouse_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.channel"></a>

```python
channel: DataDatabricksSqlWarehouseChannelOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference">DataDatabricksSqlWarehouseChannelOutputReference</a>

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.health"></a>

```python
health: DataDatabricksSqlWarehouseHealthOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference">DataDatabricksSqlWarehouseHealthOutputReference</a>

---

##### `odbc_params`<sup>Required</sup> <a name="odbc_params" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.odbcParams"></a>

```python
odbc_params: DataDatabricksSqlWarehouseOdbcParamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference">DataDatabricksSqlWarehouseOdbcParamsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tags"></a>

```python
tags: DataDatabricksSqlWarehouseTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference">DataDatabricksSqlWarehouseTagsOutputReference</a>

---

##### `auto_stop_mins_input`<sup>Optional</sup> <a name="auto_stop_mins_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.autoStopMinsInput"></a>

```python
auto_stop_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.channelInput"></a>

```python
channel_input: DataDatabricksSqlWarehouseChannel
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a>

---

##### `cluster_size_input`<sup>Optional</sup> <a name="cluster_size_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.clusterSizeInput"></a>

```python
cluster_size_input: str
```

- *Type:* str

---

##### `creator_name_input`<sup>Optional</sup> <a name="creator_name_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.creatorNameInput"></a>

```python
creator_name_input: str
```

- *Type:* str

---

##### `data_source_id_input`<sup>Optional</sup> <a name="data_source_id_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dataSourceIdInput"></a>

```python
data_source_id_input: str
```

- *Type:* str

---

##### `enable_photon_input`<sup>Optional</sup> <a name="enable_photon_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enablePhotonInput"></a>

```python
enable_photon_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_serverless_compute_input`<sup>Optional</sup> <a name="enable_serverless_compute_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enableServerlessComputeInput"></a>

```python
enable_serverless_compute_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `health_input`<sup>Optional</sup> <a name="health_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.healthInput"></a>

```python
health_input: DataDatabricksSqlWarehouseHealth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_profile_arn_input`<sup>Optional</sup> <a name="instance_profile_arn_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.instanceProfileArnInput"></a>

```python
instance_profile_arn_input: str
```

- *Type:* str

---

##### `jdbc_url_input`<sup>Optional</sup> <a name="jdbc_url_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.jdbcUrlInput"></a>

```python
jdbc_url_input: str
```

- *Type:* str

---

##### `max_num_clusters_input`<sup>Optional</sup> <a name="max_num_clusters_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.maxNumClustersInput"></a>

```python
max_num_clusters_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_num_clusters_input`<sup>Optional</sup> <a name="min_num_clusters_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.minNumClustersInput"></a>

```python
min_num_clusters_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `num_active_sessions_input`<sup>Optional</sup> <a name="num_active_sessions_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numActiveSessionsInput"></a>

```python
num_active_sessions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_clusters_input`<sup>Optional</sup> <a name="num_clusters_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numClustersInput"></a>

```python
num_clusters_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `odbc_params_input`<sup>Optional</sup> <a name="odbc_params_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.odbcParamsInput"></a>

```python
odbc_params_input: DataDatabricksSqlWarehouseOdbcParams
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a>

---

##### `spot_instance_policy_input`<sup>Optional</sup> <a name="spot_instance_policy_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.spotInstancePolicyInput"></a>

```python
spot_instance_policy_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tagsInput"></a>

```python
tags_input: DataDatabricksSqlWarehouseTags
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a>

---

##### `warehouse_type_input`<sup>Optional</sup> <a name="warehouse_type_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.warehouseTypeInput"></a>

```python
warehouse_type_input: str
```

- *Type:* str

---

##### `auto_stop_mins`<sup>Required</sup> <a name="auto_stop_mins" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.autoStopMins"></a>

```python
auto_stop_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_size`<sup>Required</sup> <a name="cluster_size" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.clusterSize"></a>

```python
cluster_size: str
```

- *Type:* str

---

##### `creator_name`<sup>Required</sup> <a name="creator_name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.creatorName"></a>

```python
creator_name: str
```

- *Type:* str

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `enable_photon`<sup>Required</sup> <a name="enable_photon" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enablePhoton"></a>

```python
enable_photon: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_serverless_compute`<sup>Required</sup> <a name="enable_serverless_compute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enableServerlessCompute"></a>

```python
enable_serverless_compute: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

---

##### `jdbc_url`<sup>Required</sup> <a name="jdbc_url" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.jdbcUrl"></a>

```python
jdbc_url: str
```

- *Type:* str

---

##### `max_num_clusters`<sup>Required</sup> <a name="max_num_clusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.maxNumClusters"></a>

```python
max_num_clusters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_num_clusters`<sup>Required</sup> <a name="min_num_clusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.minNumClusters"></a>

```python
min_num_clusters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `num_active_sessions`<sup>Required</sup> <a name="num_active_sessions" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numActiveSessions"></a>

```python
num_active_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_clusters`<sup>Required</sup> <a name="num_clusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numClusters"></a>

```python
num_clusters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spot_instance_policy`<sup>Required</sup> <a name="spot_instance_policy" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.spotInstancePolicy"></a>

```python
spot_instance_policy: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `warehouse_type`<sup>Required</sup> <a name="warehouse_type" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.warehouseType"></a>

```python
warehouse_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSqlWarehouseChannel <a name="DataDatabricksSqlWarehouseChannel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel(
  dbsql_version: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.property.dbsqlVersion">dbsql_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#dbsql_version DataDatabricksSqlWarehouse#dbsql_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}. |

---

##### `dbsql_version`<sup>Optional</sup> <a name="dbsql_version" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.property.dbsqlVersion"></a>

```python
dbsql_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#dbsql_version DataDatabricksSqlWarehouse#dbsql_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}.

---

### DataDatabricksSqlWarehouseConfig <a name="DataDatabricksSqlWarehouseConfig" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_stop_mins: typing.Union[int, float] = None,
  channel: DataDatabricksSqlWarehouseChannel = None,
  cluster_size: str = None,
  creator_name: str = None,
  data_source_id: str = None,
  enable_photon: bool | IResolvable = None,
  enable_serverless_compute: bool | IResolvable = None,
  health: DataDatabricksSqlWarehouseHealth = None,
  id: str = None,
  instance_profile_arn: str = None,
  jdbc_url: str = None,
  max_num_clusters: typing.Union[int, float] = None,
  min_num_clusters: typing.Union[int, float] = None,
  name: str = None,
  num_active_sessions: typing.Union[int, float] = None,
  num_clusters: typing.Union[int, float] = None,
  odbc_params: DataDatabricksSqlWarehouseOdbcParams = None,
  spot_instance_policy: str = None,
  state: str = None,
  tags: DataDatabricksSqlWarehouseTags = None,
  warehouse_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.autoStopMins">auto_stop_mins</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#auto_stop_mins DataDatabricksSqlWarehouse#auto_stop_mins}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.channel">channel</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a></code> | channel block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.clusterSize">cluster_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#cluster_size DataDatabricksSqlWarehouse#cluster_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.creatorName">creator_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#creator_name DataDatabricksSqlWarehouse#creator_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.dataSourceId">data_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#data_source_id DataDatabricksSqlWarehouse#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.enablePhoton">enable_photon</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#enable_photon DataDatabricksSqlWarehouse#enable_photon}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.enableServerlessCompute">enable_serverless_compute</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#enable_serverless_compute DataDatabricksSqlWarehouse#enable_serverless_compute}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.health">health</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#id DataDatabricksSqlWarehouse#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#instance_profile_arn DataDatabricksSqlWarehouse#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.jdbcUrl">jdbc_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#jdbc_url DataDatabricksSqlWarehouse#jdbc_url}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.maxNumClusters">max_num_clusters</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#max_num_clusters DataDatabricksSqlWarehouse#max_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.minNumClusters">min_num_clusters</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#min_num_clusters DataDatabricksSqlWarehouse#min_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.numActiveSessions">num_active_sessions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#num_active_sessions DataDatabricksSqlWarehouse#num_active_sessions}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.numClusters">num_clusters</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#num_clusters DataDatabricksSqlWarehouse#num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.odbcParams">odbc_params</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a></code> | odbc_params block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.spotInstancePolicy">spot_instance_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#spot_instance_policy DataDatabricksSqlWarehouse#spot_instance_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#state DataDatabricksSqlWarehouse#state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.warehouseType">warehouse_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#warehouse_type DataDatabricksSqlWarehouse#warehouse_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `auto_stop_mins`<sup>Optional</sup> <a name="auto_stop_mins" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.autoStopMins"></a>

```python
auto_stop_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#auto_stop_mins DataDatabricksSqlWarehouse#auto_stop_mins}.

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.channel"></a>

```python
channel: DataDatabricksSqlWarehouseChannel
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a>

channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#channel DataDatabricksSqlWarehouse#channel}

---

##### `cluster_size`<sup>Optional</sup> <a name="cluster_size" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.clusterSize"></a>

```python
cluster_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#cluster_size DataDatabricksSqlWarehouse#cluster_size}.

---

##### `creator_name`<sup>Optional</sup> <a name="creator_name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.creatorName"></a>

```python
creator_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#creator_name DataDatabricksSqlWarehouse#creator_name}.

---

##### `data_source_id`<sup>Optional</sup> <a name="data_source_id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#data_source_id DataDatabricksSqlWarehouse#data_source_id}.

---

##### `enable_photon`<sup>Optional</sup> <a name="enable_photon" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.enablePhoton"></a>

```python
enable_photon: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#enable_photon DataDatabricksSqlWarehouse#enable_photon}.

---

##### `enable_serverless_compute`<sup>Optional</sup> <a name="enable_serverless_compute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.enableServerlessCompute"></a>

```python
enable_serverless_compute: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#enable_serverless_compute DataDatabricksSqlWarehouse#enable_serverless_compute}.

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.health"></a>

```python
health: DataDatabricksSqlWarehouseHealth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#health DataDatabricksSqlWarehouse#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#id DataDatabricksSqlWarehouse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#instance_profile_arn DataDatabricksSqlWarehouse#instance_profile_arn}.

---

##### `jdbc_url`<sup>Optional</sup> <a name="jdbc_url" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.jdbcUrl"></a>

```python
jdbc_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#jdbc_url DataDatabricksSqlWarehouse#jdbc_url}.

---

##### `max_num_clusters`<sup>Optional</sup> <a name="max_num_clusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.maxNumClusters"></a>

```python
max_num_clusters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#max_num_clusters DataDatabricksSqlWarehouse#max_num_clusters}.

---

##### `min_num_clusters`<sup>Optional</sup> <a name="min_num_clusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.minNumClusters"></a>

```python
min_num_clusters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#min_num_clusters DataDatabricksSqlWarehouse#min_num_clusters}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}.

---

##### `num_active_sessions`<sup>Optional</sup> <a name="num_active_sessions" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.numActiveSessions"></a>

```python
num_active_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#num_active_sessions DataDatabricksSqlWarehouse#num_active_sessions}.

---

##### `num_clusters`<sup>Optional</sup> <a name="num_clusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.numClusters"></a>

```python
num_clusters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#num_clusters DataDatabricksSqlWarehouse#num_clusters}.

---

##### `odbc_params`<sup>Optional</sup> <a name="odbc_params" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.odbcParams"></a>

```python
odbc_params: DataDatabricksSqlWarehouseOdbcParams
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a>

odbc_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#odbc_params DataDatabricksSqlWarehouse#odbc_params}

---

##### `spot_instance_policy`<sup>Optional</sup> <a name="spot_instance_policy" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.spotInstancePolicy"></a>

```python
spot_instance_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#spot_instance_policy DataDatabricksSqlWarehouse#spot_instance_policy}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#state DataDatabricksSqlWarehouse#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.tags"></a>

```python
tags: DataDatabricksSqlWarehouseTags
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#tags DataDatabricksSqlWarehouse#tags}

---

##### `warehouse_type`<sup>Optional</sup> <a name="warehouse_type" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.warehouseType"></a>

```python
warehouse_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#warehouse_type DataDatabricksSqlWarehouse#warehouse_type}.

---

### DataDatabricksSqlWarehouseHealth <a name="DataDatabricksSqlWarehouseHealth" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth(
  details: str = None,
  failure_reason: DataDatabricksSqlWarehouseHealthFailureReason = None,
  message: str = None,
  status: str = None,
  summary: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.details">details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#details DataDatabricksSqlWarehouse#details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.failureReason">failure_reason</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a></code> | failure_reason block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#message DataDatabricksSqlWarehouse#message}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#status DataDatabricksSqlWarehouse#status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#summary DataDatabricksSqlWarehouse#summary}. |

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.details"></a>

```python
details: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#details DataDatabricksSqlWarehouse#details}.

---

##### `failure_reason`<sup>Optional</sup> <a name="failure_reason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.failureReason"></a>

```python
failure_reason: DataDatabricksSqlWarehouseHealthFailureReason
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a>

failure_reason block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#failure_reason DataDatabricksSqlWarehouse#failure_reason}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#message DataDatabricksSqlWarehouse#message}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#status DataDatabricksSqlWarehouse#status}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#summary DataDatabricksSqlWarehouse#summary}.

---

### DataDatabricksSqlWarehouseHealthFailureReason <a name="DataDatabricksSqlWarehouseHealthFailureReason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason(
  code: str = None,
  parameters: typing.Mapping[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.code">code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#code DataDatabricksSqlWarehouse#code}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#parameters DataDatabricksSqlWarehouse#parameters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#type DataDatabricksSqlWarehouse#type}. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.code"></a>

```python
code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#code DataDatabricksSqlWarehouse#code}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#parameters DataDatabricksSqlWarehouse#parameters}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#type DataDatabricksSqlWarehouse#type}.

---

### DataDatabricksSqlWarehouseOdbcParams <a name="DataDatabricksSqlWarehouseOdbcParams" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams(
  hostname: str = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#hostname DataDatabricksSqlWarehouse#hostname}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#path DataDatabricksSqlWarehouse#path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#port DataDatabricksSqlWarehouse#port}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#protocol DataDatabricksSqlWarehouse#protocol}. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#hostname DataDatabricksSqlWarehouse#hostname}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#path DataDatabricksSqlWarehouse#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#port DataDatabricksSqlWarehouse#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#protocol DataDatabricksSqlWarehouse#protocol}.

---

### DataDatabricksSqlWarehouseTags <a name="DataDatabricksSqlWarehouseTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags(
  custom_tags: IResolvable | typing.List[DataDatabricksSqlWarehouseTagsCustomTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags.property.customTags">custom_tags</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>]</code> | custom_tags block. |

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags.property.customTags"></a>

```python
custom_tags: IResolvable | typing.List[DataDatabricksSqlWarehouseTagsCustomTags]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>]

custom_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#custom_tags DataDatabricksSqlWarehouse#custom_tags}

---

### DataDatabricksSqlWarehouseTagsCustomTags <a name="DataDatabricksSqlWarehouseTagsCustomTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#key DataDatabricksSqlWarehouse#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#value DataDatabricksSqlWarehouse#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#key DataDatabricksSqlWarehouse#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#value DataDatabricksSqlWarehouse#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSqlWarehouseChannelOutputReference <a name="DataDatabricksSqlWarehouseChannelOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resetDbsqlVersion">reset_dbsql_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dbsql_version` <a name="reset_dbsql_version" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resetDbsqlVersion"></a>

```python
def reset_dbsql_version() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.dbsqlVersionInput">dbsql_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.dbsqlVersion">dbsql_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbsql_version_input`<sup>Optional</sup> <a name="dbsql_version_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.dbsqlVersionInput"></a>

```python
dbsql_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `dbsql_version`<sup>Required</sup> <a name="dbsql_version" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.dbsqlVersion"></a>

```python
dbsql_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSqlWarehouseChannel
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a>

---


### DataDatabricksSqlWarehouseHealthFailureReasonOutputReference <a name="DataDatabricksSqlWarehouseHealthFailureReasonOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code` <a name="reset_code" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.codeInput">code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.codeInput"></a>

```python
code_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSqlWarehouseHealthFailureReason
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a>

---


### DataDatabricksSqlWarehouseHealthOutputReference <a name="DataDatabricksSqlWarehouseHealthOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.putFailureReason">put_failure_reason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetDetails">reset_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetFailureReason">reset_failure_reason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetSummary">reset_summary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_failure_reason` <a name="put_failure_reason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.putFailureReason"></a>

```python
def put_failure_reason(
  code: str = None,
  parameters: typing.Mapping[str] = None,
  type: str = None
) -> None
```

###### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.putFailureReason.parameter.code"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#code DataDatabricksSqlWarehouse#code}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.putFailureReason.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#parameters DataDatabricksSqlWarehouse#parameters}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.putFailureReason.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/sql_warehouse#type DataDatabricksSqlWarehouse#type}.

---

##### `reset_details` <a name="reset_details" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetDetails"></a>

```python
def reset_details() -> None
```

##### `reset_failure_reason` <a name="reset_failure_reason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetFailureReason"></a>

```python
def reset_failure_reason() -> None
```

##### `reset_message` <a name="reset_message" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.failureReason">failure_reason</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference">DataDatabricksSqlWarehouseHealthFailureReasonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.detailsInput">details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.failureReasonInput">failure_reason_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.failureReason"></a>

```python
failure_reason: DataDatabricksSqlWarehouseHealthFailureReasonOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference">DataDatabricksSqlWarehouseHealthFailureReasonOutputReference</a>

---

##### `details_input`<sup>Optional</sup> <a name="details_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.detailsInput"></a>

```python
details_input: str
```

- *Type:* str

---

##### `failure_reason_input`<sup>Optional</sup> <a name="failure_reason_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.failureReasonInput"></a>

```python
failure_reason_input: DataDatabricksSqlWarehouseHealthFailureReason
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a>

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSqlWarehouseHealth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a>

---


### DataDatabricksSqlWarehouseOdbcParamsOutputReference <a name="DataDatabricksSqlWarehouseOdbcParamsOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSqlWarehouseOdbcParams
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a>

---


### DataDatabricksSqlWarehouseTagsCustomTagsList <a name="DataDatabricksSqlWarehouseTagsCustomTagsList" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksSqlWarehouseTagsCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksSqlWarehouseTagsCustomTags]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>]

---


### DataDatabricksSqlWarehouseTagsCustomTagsOutputReference <a name="DataDatabricksSqlWarehouseTagsCustomTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksSqlWarehouseTagsCustomTags
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>

---


### DataDatabricksSqlWarehouseTagsOutputReference <a name="DataDatabricksSqlWarehouseTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_sql_warehouse

dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.putCustomTags">put_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resetCustomTags">reset_custom_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_tags` <a name="put_custom_tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.putCustomTags"></a>

```python
def put_custom_tags(
  value: IResolvable | typing.List[DataDatabricksSqlWarehouseTagsCustomTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.putCustomTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>]

---

##### `reset_custom_tags` <a name="reset_custom_tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resetCustomTags"></a>

```python
def reset_custom_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.customTags">custom_tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList">DataDatabricksSqlWarehouseTagsCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.customTagsInput">custom_tags_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.customTags"></a>

```python
custom_tags: DataDatabricksSqlWarehouseTagsCustomTagsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList">DataDatabricksSqlWarehouseTagsCustomTagsList</a>

---

##### `custom_tags_input`<sup>Optional</sup> <a name="custom_tags_input" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.customTagsInput"></a>

```python
custom_tags_input: IResolvable | typing.List[DataDatabricksSqlWarehouseTagsCustomTags]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSqlWarehouseTags
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a>

---



